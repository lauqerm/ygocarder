/**
 * glyph-atlas-build.ts
 *
 * BUILD-TIME ONLY. This file never ships to production.
 *
 * Rasterizes each group at ONE font size, which preserves the font's own
 * optical corrections (overshoot on round letters, protruding vertices on
 * pointed ones). Per-glyph adjustments are supplied by hand via an overrides
 * table rather than derived by measurement.
 *
 * Whichever machine you run this on bakes in that machine's text rasterizer.
 * That is the point: you pick one rendering and ship it, so CoreText and
 * DirectWrite never get a chance to disagree at runtime.
 */

// ---------------------------------------------------------------------------
// Shared types (kept identical to glyph-atlas-runtime.ts)
// ---------------------------------------------------------------------------

export type AtlasEntry = {
    /** Source rect in the atlas, device pixels. */
    sx: number;
    sy: number;
    sw: number;
    sh: number;
    /** Horizontal offset from the pen to the ink's left edge, device px. */
    bearingX: number;
    /** Distance from the baseline up to the ink's top edge, device px. */
    ascent: number;
    /** How far to advance the pen after this glyph, device px. */
    advance: number;
    /**
     * Hand-tuned vertical nudge, device px, positive moves down. Applied at
     * draw time, so this value can be edited directly in the exported JSON
     * without regenerating the atlas.
     */
    offsetY: number;
    /**
     * Hand-tuned vertical stretch about the baseline. 1 is unchanged. Applied at
     * draw time by resampling the bitmap, so it is also JSON-editable, and it
     * distorts the glyph vertically without touching its width or stroke weight.
     */
    scaleY: number;
    /**
     * Hand-tuned horizontal stretch about the pen origin. 1 is unchanged. Scales
     * the advance too, so following glyphs stay correctly spaced. Riskier than
     * scaleY: see the README before using it.
     */
    scaleX: number;
};

export type GroupMeta = {
    chars: string;
    fontSizeCss: number;
    /** The letter defining this group's anchor span. */
    anchorChar: string;
    /** Anchor letter's ascent, device px — converts an anchor top into a baseline. */
    anchorAscent: number;
    /** Anchor letter's ink height, device px. The span it is expected to fill. */
    anchorInkHeight: number;
};

export type AtlasMeta = {
    version: 2;
    pixelRatio: number;
    supersample: number;
    /** Colour the glyphs were rasterized in. Only its alpha profile matters. */
    fillStyle: string;
    fontFamily: string;
    fontWeight: string;
    fontStyle: string;
    atlasWidth: number;
    atlasHeight: number;
    groups: Record<string, GroupMeta>;
    entries: Record<string, AtlasEntry>;
};

// ---------------------------------------------------------------------------
// Build configuration
// ---------------------------------------------------------------------------

export type GlyphOverride = {
    /**
     * UNIFORM scale: multiplies the group font size for this glyph, so width and
     * stroke weight change with it. Re-rasterizes, so it needs a rebuild and the
     * tuner cannot preview it. Use sparingly — if many glyphs need this, the
     * group's fontSizeCss is probably wrong.
     */
    sizeScale?: number;
    /**
     * VERTICAL-ONLY stretch about the baseline, applied at draw time. Width and
     * stroke weight are untouched. No rebuild needed, and the tuner previews it
     * exactly because the runtime resamples the same way.
     */
    scaleY?: number;
    /**
     * HORIZONTAL-ONLY stretch about the pen origin, applied at draw time. The
     * advance scales with it so spacing stays coherent. Use only for genuinely
     * malformed glyphs — for condensing a whole word, use drawString's scaleX or
     * maxWidthCss instead.
     */
    scaleX?: number;
    /** Vertical nudge in device px, positive moves down. Applied at draw time. */
    offsetY?: number;
};

export type BuildGroup = {
    /** Identifier for diagnostics and baseline lookup, e.g. 'caps'. */
    id: string;
    /** Every character in this group. The anchor is added if absent. */
    chars: string;
    /** One size for the entire group. This is what preserves optical relationships. */
    fontSizeCss: number;
    /**
     * The letter whose ink defines this group's anchor span. Pick a flat-topped,
     * flat-bottomed glyph: 'H' for caps, 'x' for lowercase, '0' for digits.
     */
    anchorChar: string;
    /** Hand-tuned per-glyph corrections. Most glyphs need no entry here. */
    overrides?: Record<string, GlyphOverride>;
};

export type BuildConfig = {
    fontFamily: string;
    fontWeight?: string;
    fontStyle?: string;
    /** Device pixels per CSS pixel to author at. One atlas per DPR you support. */
    pixelRatio: number;
    /**
     * Rasterize at this multiple of pixelRatio, then let the draw-time resample
     * bring it back down. Downscaling from a higher-resolution source keeps stem
     * edges tighter than resampling a near-1:1 bitmap, so 2 is worth it for any
     * atlas whose text gets horizontally scaled. Costs the square in memory, and
     * it makes every draw resample rather than pixel-copy — leave at 1 for
     * atlases that always render unscaled.
     */
    supersample?: number;
    /**
     * Colour to rasterize in. Defaults to black, and you should almost never
     * change it.
     *
     * This does NOT constrain the colour you draw in. The draw-time tint uses
     * source-in, which replaces RGB entirely and keeps only alpha, so the
     * rasterization colour never reaches the output. All it decides is which
     * gamma table Skia used when computing coverage — and light-on-dark
     * rasterizes measurably heavier than dark-on-light. Black gives the thinner
     * profile that matches a normal dark fillText, while staying fully
     * recolourable.
     */
    fillStyle?: string;
    /** Alpha (0-255) at or above which a pixel counts as ink. */
    alphaThreshold?: number;
    /** 2048 is safe on older mobile GPUs. */
    maxAtlasWidth?: number;
    /** Transparent gutter between packed glyphs, device px. */
    padding?: number;
};

export type GlyphAtlas = {
    canvas: HTMLCanvasElement;
    meta: AtlasMeta;
};

// ---------------------------------------------------------------------------
// Pixel scanning
// ---------------------------------------------------------------------------

type InkBox = { left: number; top: number; right: number; bottom: number };

/** Inclusive bounding box of ink. Height is (bottom - top + 1). */
function findInkBox(
    data: Uint8ClampedArray,
    width: number,
    height: number,
    alphaThreshold: number,
): InkBox | null {
    let left = width;
    let top = height;
    let right = -1;
    let bottom = -1;

    for (let y = 0; y < height; y++) {
        const rowStart = y * width * 4;
        for (let x = 0; x < width; x++) {
            if (data[rowStart + x * 4 + 3] >= alphaThreshold) {
                if (x < left) left = x;
                if (x > right) right = x;
                if (y < top) top = y;
                if (y > bottom) bottom = y;
            }
        }
    }

    return right === -1 ? null : { left, top, right, bottom };
}

// ---------------------------------------------------------------------------
// Rasterizing one glyph
// ---------------------------------------------------------------------------

type RasterizedGlyph = {
    scratch: HTMLCanvasElement;
    left: number;
    top: number;
    inkWidth: number;
    inkHeight: number;
    bearingX: number;
    ascent: number;
    advance: number;
};

function fontString(config: BuildConfig, fontSizeCss: number): string {
    const style = config.fontStyle ?? 'normal';
    const weight = config.fontWeight ?? 'normal';
    return `${style} ${weight} ${fontSizeCss}px ${config.fontFamily}`;
}

function rasterizeGlyph(
    char: string,
    fontSizeCss: number,
    config: BuildConfig,
): RasterizedGlyph | null {
    const dpr = config.pixelRatio * (config.supersample ?? 1);
    const alphaThreshold = config.alphaThreshold ?? 32;

    // 4x the em box in both axes leaves room for wide glyphs, tall accents and
    // descenders without clipping.
    const padCss = fontSizeCss;
    const scratch = document.createElement('canvas');
    scratch.width = Math.ceil(fontSizeCss * 4 * dpr);
    scratch.height = Math.ceil(fontSizeCss * 4 * dpr);

    const ctx = scratch.getContext('2d', { willReadFrequently: true });
    if (!ctx) return null;

    ctx.scale(dpr, dpr);
    ctx.font = fontString(config, fontSizeCss);
    // Black by default. Only the alpha channel survives the draw-time tint, so
    // this choice costs nothing in flexibility and buys the dark-on-light gamma
    // profile, which is what keeps stems from rendering bolder than fillText.
    ctx.fillStyle = config.fillStyle ?? '#000';
    ctx.textBaseline = 'alphabetic';
    ctx.textAlign = 'left';

    // Snap the scratch baseline to a whole device pixel. If it lands on a
    // fraction, every glyph's ascent inherits the same fractional part, dy
    // rounds them all the same direction, and the entire run shifts together
    // against fillText.
    const penXCss = padCss;
    const penYDev = Math.round(padCss * 2 * dpr);
    const penYCss = penYDev / dpr;
    ctx.fillText(char, penXCss, penYCss);

    // measureText's vertical metrics are the thing we do not trust. Advance
    // width is a separate metric and is reliable.
    const advanceCss = ctx.measureText(char).width;

    const data = ctx.getImageData(0, 0, scratch.width, scratch.height).data;
    const box = findInkBox(data, scratch.width, scratch.height, alphaThreshold);
    if (!box) return null;

    const clipped =
        box.left === 0 ||
        box.top === 0 ||
        box.right === scratch.width - 1 ||
        box.bottom === scratch.height - 1;
    if (clipped) {
        throw new Error(
            `Glyph "${char}" was clipped by the scratch canvas at ${fontSizeCss}px. ` +
            'Increase the scratch multiplier in rasterizeGlyph.',
        );
    }

    const baselineDev = penYDev; // integer by construction, see above

    return {
        scratch,
        left: box.left,
        top: box.top,
        inkWidth: box.right - box.left + 1,
        inkHeight: box.bottom - box.top + 1,
        bearingX: box.left - penXCss * dpr,
        ascent: baselineDev - box.top,
        advance: advanceCss * dpr,
    };
}

// ---------------------------------------------------------------------------
// Packing
// ---------------------------------------------------------------------------

export function buildGlyphAtlas(groups: BuildGroup[], config: BuildConfig): GlyphAtlas {
    const maxWidth = config.maxAtlasWidth ?? 2048;
    const pad = config.padding ?? 2;

    type Collected = {
        char: string;
        raster: RasterizedGlyph;
        offsetY: number;
        scaleY: number;
        scaleX: number;
    };
    const collected: Collected[] = [];
    const groupMeta: Record<string, GroupMeta> = {};
    const skipped: string[] = [];

    for (const group of groups) {
        const overrides = group.overrides ?? {};

        const anchorOverride = overrides[group.anchorChar];
        const anchorSize = group.fontSizeCss * (anchorOverride?.sizeScale ?? 1);
        const anchorRaster = rasterizeGlyph(group.anchorChar, anchorSize, config);
        if (!anchorRaster) {
            throw new Error(
                `Anchor "${group.anchorChar}" for group "${group.id}" produced no ink. ` +
                'Check that the font is loaded (await document.fonts.ready).',
            );
        }

        const chars = group.chars.includes(group.anchorChar)
            ? group.chars
            : group.anchorChar + group.chars;

        const anchorScaleY = anchorOverride?.scaleY ?? 1;
        const anchorOffsetY = anchorOverride?.offsetY ?? 0;

        groupMeta[group.id] = {
            chars,
            fontSizeCss: group.fontSizeCss,
            anchorChar: group.anchorChar,
            anchorAscent: anchorRaster.ascent * anchorScaleY - anchorOffsetY,
            anchorInkHeight: anchorRaster.inkHeight * anchorScaleY,
        };

        for (const char of chars) {
            const override = overrides[char];
            const offsetY = override?.offsetY ?? 0;
            const scaleY = override?.scaleY ?? 1;
            const scaleX = override?.scaleX ?? 1;

            if (char === group.anchorChar) {
                collected.push({ char, raster: anchorRaster, offsetY, scaleY, scaleX });
                continue;
            }

            // Every glyph uses the group font size unless explicitly overridden.
            // This is what keeps the designer's optical corrections intact.
            const size = group.fontSizeCss * (override?.sizeScale ?? 1);
            const raster = rasterizeGlyph(char, size, config);
            if (raster) collected.push({ char, raster, offsetY, scaleY, scaleX });
            else skipped.push(char);
        }
    }

    if (skipped.length > 0) {
        console.warn(`No ink for ${skipped.length} character(s), omitted:`, skipped.join(''));
    }

    // Shelf pack, tallest first.
    const sorted = [...collected].sort((a, b) => b.raster.inkHeight - a.raster.inkHeight);

    type Placement = Collected & { x: number; y: number };

    const placements: Placement[] = [];
    let shelfX = pad;
    let shelfY = pad;
    let shelfHeight = 0;
    let atlasWidth = 0;

    for (const item of sorted) {
        const w = item.raster.inkWidth;
        const h = item.raster.inkHeight;

        if (shelfX + w + pad > maxWidth) {
            shelfX = pad;
            shelfY += shelfHeight + pad;
            shelfHeight = 0;
        }

        placements.push({ ...item, x: shelfX, y: shelfY });
        shelfX += w + pad;
        shelfHeight = Math.max(shelfHeight, h);
        atlasWidth = Math.max(atlasWidth, shelfX + pad);
    }

    const atlas = document.createElement('canvas');
    atlas.width = atlasWidth;
    atlas.height = shelfY + shelfHeight + pad;

    const atlasCtx = atlas.getContext('2d');
    if (!atlasCtx) throw new Error('Could not acquire atlas 2D context.');

    const entries: Record<string, AtlasEntry> = {};

    for (const p of placements) {
        const r = p.raster;
        // Identity transform, source size === destination size: a pure pixel copy.
        atlasCtx.drawImage(
            r.scratch,
            r.left,
            r.top,
            r.inkWidth,
            r.inkHeight,
            p.x,
            p.y,
            r.inkWidth,
            r.inkHeight,
        );

        entries[p.char] = {
            sx: p.x,
            sy: p.y,
            sw: r.inkWidth,
            sh: r.inkHeight,
            bearingX: r.bearingX,
            ascent: r.ascent,
            advance: r.advance,
            offsetY: p.offsetY,
            scaleY: p.scaleY,
            scaleX: p.scaleX,
        };
    }

    return {
        canvas: atlas,
        meta: {
            version: 2,
            pixelRatio: config.pixelRatio,
            supersample: config.supersample ?? 1,
            fillStyle: config.fillStyle ?? '#000',
            fontFamily: config.fontFamily,
            fontWeight: config.fontWeight ?? 'normal',
            fontStyle: config.fontStyle ?? 'normal',
            atlasWidth: atlas.width,
            atlasHeight: atlas.height,
            groups: groupMeta,
            entries,
        },
    };
}

// ---------------------------------------------------------------------------
// Reporting: which glyphs fall outside their anchor span
// ---------------------------------------------------------------------------

export type OutlierReport = Array<{
    char: string;
    groupId: string;
    /** Device px the ink extends above the anchor top. Positive means outside. */
    overshootTop: number;
    /** Device px the ink extends below the anchor bottom. Positive means outside. */
    overshootBottom: number;
}>;

/**
 * Lists glyphs whose ink falls outside their group's anchor span.
 *
 * Read this as information, not a defect list. Overshoot on round letters
 * (O, C, G, S) and pointed vertices (A, N, V, W, M) is deliberate design and
 * should usually be left alone. Use it to spot outliers that are unusually
 * large compared to their neighbours, then check those visually.
 */
export function reportOutliers(meta: AtlasMeta, thresholdDevicePx = 0): OutlierReport {
    const report: OutlierReport = [];

    for (const [groupId, group] of Object.entries(meta.groups)) {
        // Measured upward from the baseline, so top is larger than bottom.
        const anchorTop = group.anchorAscent;
        const anchorBottom = group.anchorAscent - group.anchorInkHeight;

        for (const char of group.chars) {
            const entry = meta.entries[char];
            if (!entry) continue;

            const inkTop = entry.ascent * entry.scaleY - entry.offsetY;
            const inkBottom = inkTop - entry.sh * entry.scaleY;

            const overshootTop = inkTop - anchorTop;
            const overshootBottom = anchorBottom - inkBottom;

            if (overshootTop > thresholdDevicePx || overshootBottom > thresholdDevicePx) {
                report.push({
                    char,
                    groupId,
                    overshootTop: Math.round(overshootTop * 100) / 100,
                    overshootBottom: Math.round(overshootBottom * 100) / 100,
                });
            }
        }
    }

    return report.sort(
        (a, b) =>
            Math.max(b.overshootTop, b.overshootBottom) - Math.max(a.overshootTop, a.overshootBottom),
    );
}

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export async function exportAtlas(atlas: GlyphAtlas, name: string): Promise<void> {
    const png = await new Promise<Blob | null>((resolve) =>
        atlas.canvas.toBlob(resolve, 'image/png'),
    );
    if (!png) throw new Error('canvas.toBlob() returned null.');

    const json = new Blob([JSON.stringify(atlas.meta, null, 2)], { type: 'application/json' });

    for (const [blob, filename] of [
        [png, `${name}.png`],
        [json, `${name}.json`],
    ] as const) {
        const url = URL.createObjectURL(blob);
        const anchor = Object.assign(document.createElement('a'), { href: url, download: filename });
        anchor.click();
        URL.revokeObjectURL(url);
        // Chrome drops rapid successive downloads, so space them out.
        await new Promise((resolve) => setTimeout(resolve, 300));
    }

    console.log(
        `Exported ${name}.png (${atlas.canvas.width}x${atlas.canvas.height}) and ${name}.json`,
    );
}

// ---------------------------------------------------------------------------
// Character sets
// ---------------------------------------------------------------------------

export const CHARSET = {
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lower: 'abcdefghijklmnopqrstuvwxyz',
    digits: '0123456789',
    punctuation: '.,:;!?\'"()[]{}<>/\\|-–—_@#$%^&*+=~`',
    /** Precomposed Vietnamese letters. Omitting these is expensive to discover late. */
    vietnameseLower:
        'àáâãèéêìíòóôõùúýăđĩũơưạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ',
    vietnameseUpper:
        'ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚÝĂĐĨŨƠƯẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸ',
} as const;