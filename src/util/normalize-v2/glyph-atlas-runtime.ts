/**
 * glyph-atlas-runtime.ts
 *
 * Ships with the app. Loads a prebuilt atlas and composites text with
 * drawImage only — fillText is never called, so no device-side rasterization
 * happens and platforms cannot diverge.
 *
 * Glyphs are positioned by baseline, not by ink top, because glyphs in a group
 * now have different heights on purpose. Each glyph's stored `ascent` places
 * its ink relative to the baseline; `offsetY` is a hand-tuned correction on
 * top of that.
 */

// ---------------------------------------------------------------------------
// Types (mirror glyph-atlas-build.ts)
// ---------------------------------------------------------------------------

export type AtlasEntry = {
    sx: number;
    sy: number;
    sw: number;
    sh: number;
    bearingX: number;
    /** Distance from the baseline up to the ink's top edge, device px. */
    ascent: number;
    advance: number;
    /** Hand-tuned nudge, device px, positive moves down. */
    offsetY: number;
    /** Hand-tuned vertical stretch about the baseline. 1 is unchanged. */
    scaleY: number;
    /** Hand-tuned horizontal stretch about the pen origin. 1 is unchanged. */
    scaleX: number;
};

export type GroupMeta = {
    chars: string;
    fontSizeCss: number;
    anchorChar: string;
    anchorAscent: number;
    anchorInkHeight: number;
};

export type AtlasMeta = {
    version: 2;
    pixelRatio: number;
    /** Extra rasterization factor above pixelRatio. 1 means none. */
    supersample?: number;
    /** Colour the glyphs were rasterized in. Only its alpha profile matters. */
    fillStyle?: string;
    fontFamily: string;
    fontWeight: string;
    fontStyle: string;
    atlasWidth: number;
    atlasHeight: number;
    groups: Record<string, GroupMeta>;
    entries: Record<string, AtlasEntry>;
};

export type LoadedAtlas = {
    source: CanvasImageSource;
    entries: Map<string, AtlasEntry>;
    /** Device pixels per CSS pixel the atlas was authored at. */
    pixelRatio: number;
    /** Extra rasterization factor above pixelRatio. 1 means none. */
    supersample: number;
    /** Colour the glyphs were rasterized in. Only its alpha profile matters. */
    fillStyle: string;
    groups: Record<string, GroupMeta>;
};

// ---------------------------------------------------------------------------
// Loading
// ---------------------------------------------------------------------------

export async function loadAtlas(pngUrl: string, jsonUrl: string): Promise<LoadedAtlas> {
    const [pngResponse, meta] = await Promise.all([
        fetch(pngUrl),
        fetch(jsonUrl).then((r) => r.json() as Promise<AtlasMeta>),
    ]);

    if (!pngResponse.ok) throw new Error(`Failed to fetch atlas image: ${pngUrl}`);
    if (meta.version !== 2) throw new Error(`Unsupported atlas version: ${meta.version}`);

    const blob = await pngResponse.blob();

    // createImageBitmap decodes off the main thread and yields a GPU-resident
    // texture. Safari below 15 lacks it, so fall back to an <img>.
    let source: CanvasImageSource;
    if (typeof createImageBitmap === 'function') {
        source = await createImageBitmap(blob);
    } else {
        source = await new Promise<HTMLImageElement>((resolve, reject) => {
            const img = new Image();
            const url = URL.createObjectURL(blob);
            img.onload = () => {
                URL.revokeObjectURL(url);
                resolve(img);
            };
            img.onerror = () => {
                URL.revokeObjectURL(url);
                reject(new Error(`Failed to decode atlas image: ${pngUrl}`));
            };
            img.src = url;
        });
    }

    return {
        source,
        entries: new Map(Object.entries(meta.entries)),
        pixelRatio: meta.pixelRatio,
        supersample: meta.supersample ?? 1,
        fillStyle: meta.fillStyle ?? '#000',
        groups: meta.groups,
    };
}

/**
 * Converts a group's top anchor line into the baseline to draw on.
 * Use this when your layout is expressed in anchor lines rather than baselines.
 */
export function baselineForAnchorTop(
    atlas: LoadedAtlas,
    groupId: string,
    anchorTopCss: number,
): number {
    const group = atlas.groups[groupId];
    if (!group) throw new Error(`Unknown atlas group: ${groupId}`);
    // anchorAscent is in atlas device px; converting to CSS px needs the atlas's
    // own scale, not the runtime DPR.
    return anchorTopCss + group.anchorAscent / atlasPixelsPerCss(atlas);
}

/**
 * Rounds a baseline to a whole device pixel.
 *
 * Glyphs are composited at integer device coordinates by design — that is what
 * makes output identical across platforms. fillText, by contrast, positions
 * subpixel. So a fractional baseline will place the two up to a pixel apart,
 * uniformly across the run. Snap the baseline (and keep font sizes on whole
 * device pixels) if you need the two paths to agree.
 */
export function snapBaseline(
    baselineYCss: number,
    devicePixelRatio: number = window.devicePixelRatio ?? 1,
): number {
    return Math.round(baselineYCss * devicePixelRatio) / devicePixelRatio;
}

// ---------------------------------------------------------------------------
// Layout
// ---------------------------------------------------------------------------

export type LayoutOptions = {
    /** Extra tracking between glyphs, CSS px. Negative tightens. */
    letterSpacingCss?: number;
    /** Defaults to window.devicePixelRatio. */
    devicePixelRatio?: number;
};

type PlacedGlyph = {
    entry: AtlasEntry;
    /** Destination rect in device px: x relative to the pen, y relative to the baseline. */
    dx: number;
    dy: number;
    dw: number;
    dh: number;
};

type Layout = {
    glyphs: PlacedGlyph[];
    /** Total advance, device px. */
    advanceWidth: number;
    /** Ink bounds relative to (pen, baseline), device px. */
    inkLeft: number;
    inkRight: number;
    inkTop: number;
    inkBottom: number;
    missing: string[];
};

/** Atlas device pixels per CSS pixel, accounting for any supersampling. */
function atlasPixelsPerCss(atlas: LoadedAtlas): number {
    return atlas.pixelRatio * (atlas.supersample ?? 1);
}

function layoutString(atlas: LoadedAtlas, text: string, options: LayoutOptions = {}): Layout {
    // Everything here is in ATLAS device pixels, not target device pixels.
    // Composing at the atlas's own resolution means the layer blit is a pure
    // copy, and the single resample down to the target happens once at the final
    // blit in drawString. Resampling twice would widen each stem's
    // partial-coverage band and, because canvas averaging is gamma-incorrect,
    // make the glyph read noticeably heavier than native fillText.
    const letterSpacing = (options.letterSpacingCss ?? 0) * atlasPixelsPerCss(atlas);

    const glyphs: PlacedGlyph[] = [];
    const missing: string[] = [];

    let pen = 0;
    let inkLeft = Infinity;
    let inkRight = -Infinity;
    let inkTop = Infinity;
    let inkBottom = -Infinity;

    for (const char of text) {
        const entry = atlas.entries.get(char);
        if (!entry) {
            missing.push(char);
            continue;
        }

        // scaleY stretches vertically about the baseline: the ink top moves
        // proportionally while the baseline itself stays fixed. Width is untouched.
        const scaleY = entry.scaleY ?? 1;
        // scaleX stretches horizontally about the pen origin. The bearing and the
        // advance scale with it, so glyphs after this one stay correctly spaced.
        const scaleX = entry.scaleX ?? 1;

        const dw = Math.max(1, Math.round(entry.sw * scaleX));
        const dh = Math.max(1, Math.round(entry.sh * scaleY));
        // The pen stays fractional so advance error does not accumulate; only the
        // destination coordinate is rounded.
        const dx = Math.round(pen + entry.bearingX * scaleX);
        // Negative y is above the baseline. offsetY is an absolute nudge applied
        // after the stretch, so it is not multiplied by scaleY.
        const dy = Math.round(-entry.ascent * scaleY + entry.offsetY);

        glyphs.push({ entry, dx, dy, dw, dh });

        inkLeft = Math.min(inkLeft, dx);
        inkRight = Math.max(inkRight, dx + dw);
        inkTop = Math.min(inkTop, dy);
        inkBottom = Math.max(inkBottom, dy + dh);

        pen += entry.advance * scaleX + letterSpacing;
    }

    const empty = glyphs.length === 0;

    return {
        glyphs,
        advanceWidth: pen,
        inkLeft: empty ? 0 : inkLeft,
        inkRight: empty ? 0 : inkRight,
        inkTop: empty ? 0 : inkTop,
        inkBottom: empty ? 0 : inkBottom,
        missing,
    };
}

export type Measurement = {
    /** Total advance in CSS px — use for centering and wrapping. */
    advanceWidthCss: number;
    /** Ink extent in CSS px, which can differ from advance due to side bearings. */
    inkWidthCss: number;
    inkHeightCss: number;
    /** Ink extent above the baseline, CSS px. */
    ascentCss: number;
    /** Ink extent below the baseline, CSS px. */
    descentCss: number;
    missing: string[];
};

export function measureString(
    atlas: LoadedAtlas,
    text: string,
    options: LayoutOptions = {},
): Measurement {
    // The layout is in atlas device pixels, so divide by the atlas's own
    // pixels-per-CSS-pixel rather than by the runtime DPR.
    const a = atlasPixelsPerCss(atlas);
    const layout = layoutString(atlas, text, options);
    return {
        advanceWidthCss: layout.advanceWidth / a,
        inkWidthCss: (layout.inkRight - layout.inkLeft) / a,
        inkHeightCss: (layout.inkBottom - layout.inkTop) / a,
        ascentCss: -layout.inkTop / a,
        descentCss: layout.inkBottom / a,
        missing: layout.missing,
    };
}

// ---------------------------------------------------------------------------
// Tint layer (module-scoped and reused)
// ---------------------------------------------------------------------------

let tintCanvas: HTMLCanvasElement | null = null;
let tintCtx: CanvasRenderingContext2D | null = null;

/**
 * Allocating a canvas per draw call is the fastest way to make this slower than
 * fillText, so one layer is kept and grown as needed.
 */
function acquireTintLayer(width: number, height: number) {
    if (!tintCanvas) {
        tintCanvas = document.createElement('canvas');
        tintCtx = tintCanvas.getContext('2d');
    }
    if (!tintCtx) throw new Error('Could not acquire tint layer 2D context.');

    if (tintCanvas.width < width || tintCanvas.height < height) {
        // Assigning width/height also clears the surface.
        tintCanvas.width = Math.max(width, tintCanvas.width);
        tintCanvas.height = Math.max(height, tintCanvas.height);
    } else {
        tintCtx.clearRect(0, 0, width, height);
    }

    return { canvas: tintCanvas, ctx: tintCtx };
}

export function releaseTintLayer(): void {
    tintCanvas = null;
    tintCtx = null;
}

// ---------------------------------------------------------------------------
// Drawing
// ---------------------------------------------------------------------------

/**
 * Development check. Warns when the effective device baseline is not a whole
 * pixel, which is the one condition under which this path and fillText place
 * every glyph on the same row. Warns once per distinct baseline value.
 */
let warnOnFractionalBaseline = true;
export function setWarnOnFractionalBaseline(enabled: boolean): void {
    warnOnFractionalBaseline = enabled;
}

export type DrawOptions = LayoutOptions & {
    /** Pen origin, CSS px, in the target canvas's coordinate space. */
    xCss: number;
    /** Baseline, CSS px. Use baselineForAnchorTop if you think in anchor lines. */
    baselineYCss: number;
    /**
     * Any canvas fillStyle, applied via a source-in pass that keeps the glyph's
     * alpha and replaces its RGB. Works with any atlas colour, so a black-built
     * atlas recolours freely. Omit to draw in the atlas's own colour and skip
     * the pass.
     */
    color?: string | CanvasGradient;
    align?: 'left' | 'center' | 'right';
    /**
     * Horizontal scale for the whole run. 1 is unchanged, below 1 condenses,
     * above 1 expands. Applied as a single resample of the composed layer, so
     * internal spacing stays proportional and no per-glyph rounding jitter is
     * introduced. Vertical metrics are untouched.
     */
    scaleX?: number;
};

export type DrawResult = {
    /** Pen position after the string, CSS px — pass as xCss to continue a run. */
    nextXCss: number;
    advanceWidthCss: number;
    /** Characters absent from the atlas. They were skipped, not substituted. */
    missing: string[];
};

export function drawString(
    targetCtx: CanvasRenderingContext2D,
    atlas: LoadedAtlas,
    text: string,
    options: DrawOptions,
): DrawResult {
    const dpr = options.devicePixelRatio ?? window.devicePixelRatio ?? 1;
    const layout = layoutString(atlas, text, options);

    if (layout.missing.length > 0) {
        const codes = layout.missing
            .map((c) => `${c} (U+${c.codePointAt(0)!.toString(16).toUpperCase().padStart(4, '0')})`)
            .join(', ');
        console.warn(`Glyphs not in atlas, skipped: ${codes}`);
    }

    if (layout.glyphs.length === 0) {
        return { nextXCss: options.xCss, advanceWidthCss: 0, missing: layout.missing };
    }

    const runScaleX = options.scaleX ?? 1;

    // Atlas device px per CSS px, and the factor down to the target's device px.
    const a = atlasPixelsPerCss(atlas);
    const k = dpr / a;

    const pad = 2; // guard against edge bleed during the final blit
    const layerWidth = 813;//Math.ceil(layout.inkRight - layout.inkLeft) + pad * 2;
    const layerHeight = 148;//Math.ceil(layout.inkBottom - layout.inkTop) + pad * 2;

    const layer = acquireTintLayer(layerWidth, layerHeight);
    const originX = pad - layout.inkLeft;
    const originY = pad - layout.inkTop;

    // The layer is at the atlas's own resolution, so every glyph blit here is a
    // 1:1 pixel copy with no filtering.
    for (const glyph of layout.glyphs) {
        layer.ctx.drawImage(
            atlas.source,
            glyph.entry.sx,
            glyph.entry.sy,
            glyph.entry.sw,
            glyph.entry.sh,
            glyph.dx + originX,
            glyph.dy + originY,
            glyph.dw,
            glyph.dh,
        );
    }

    // One tint pass for the whole run rather than one per glyph. Skipped
    // entirely when the atlas already carries its final colour.
    if (options.color !== undefined) {
        layer.ctx.save();
        layer.ctx.globalCompositeOperation = 'source-in';
        layer.ctx.fillStyle = options.color;
        console.log('🚀 ~ drawString ~ options.color:', options.color, layer.canvas.width, layer.canvas.height);
        layer.ctx.fillRect(0, 0, layerWidth, layerHeight);
        layer.ctx.restore();
    }

    const scaledAdvance = layout.advanceWidth * k * runScaleX;

    let alignOffset = 0;
    if (options.align === 'center') alignOffset = -scaledAdvance / 2;
    else if (options.align === 'right') alignOffset = -scaledAdvance;

    // Read the caller's transform BEFORE resetting it. Dropping to identity is
    // load-bearing for the scale — under scale(dpr, dpr) an integer CSS
    // coordinate is a half device pixel and the resampler engages — but a
    // translate on the master context is real layout intent, and discarding it
    // silently offsets every run relative to fillText.
    const m = targetCtx.getTransform();
    if (m.b !== 0 || m.c !== 0) {
        console.warn(
            'drawString: the target context has a rotation or skew, which is not ' +
            'supported. Only translation and axis-aligned scale are honoured.',
        );
    }
    const translateDevX = m.e;
    const translateDevY = m.f;

    // The effective device baseline must be integral for this path to agree with
    // fillText. Both round to the same row only when the fractional part is
    // zero: at any other fraction, whether a glyph lands on row N or N-1 depends
    // on that glyph's own subpixel ascent, so some letters match and others sit
    // a pixel off. Flat-terminal glyphs like H often agree by luck while round
    // ones like C and O do not.
    if (warnOnFractionalBaseline) {
        const effectiveBaselineDev = translateDevY + options.baselineYCss * dpr;
        const fraction = Math.abs(effectiveBaselineDev - Math.round(effectiveBaselineDev));
        if (fraction > 1e-6) {
            console.warn(
                `drawString: effective device baseline is ${effectiveBaselineDev.toFixed(3)}, ` +
                'not a whole pixel. Individual glyphs will sit up to 1px away from where ' +
                'fillText would put them, inconsistently between letters. ' +
                `baselineYCss=${options.baselineYCss}, dpr=${dpr}, translateY=${translateDevY}. ` +
                'Call setWarnOnFractionalBaseline(false) to silence.',
            );
        }
    }

    targetCtx.save();
    targetCtx.setTransform(1, 0, 0, 1, 0, 0);

    // This is the ONLY resample in the pipeline: atlas resolution down to target
    // resolution, with any horizontal scale folded in. Doing it in one step
    // rather than two keeps each stem's partial-coverage band about one pixel
    // wide, which is what stops the glyph reading heavier than native text.
    const resamples = k !== 1 || runScaleX !== 1;
    targetCtx.imageSmoothingEnabled = resamples;
    if (resamples) targetCtx.imageSmoothingQuality = 'high';

    targetCtx.drawImage(
        layer.canvas,
        0,
        0,
        layerWidth,
        layerHeight,
        Math.round(
            translateDevX + options.xCss * dpr + alignOffset + (layout.inkLeft - pad) * k * runScaleX,
        ),
        Math.round(translateDevY + options.baselineYCss * dpr + (layout.inkTop - pad) * k),
        Math.max(1, Math.round(layerWidth * k * runScaleX)),
        Math.max(1, Math.round(layerHeight * k)),
    );
    targetCtx.restore();

    return {
        nextXCss: options.xCss + scaledAdvance / dpr,
        advanceWidthCss: scaledAdvance / dpr,
        missing: layout.missing,
    };
}

// ---------------------------------------------------------------------------
// Atlas selection
// ---------------------------------------------------------------------------

export type AtlasVariant = {
    /** Logical size name you use in the app, e.g. 'sm' | 'md' | 'lg'. */
    size: string;
    pixelRatio: number;
    pngUrl: string;
    jsonUrl: string;
};

/**
 * Picks the variant matching the current DPR, or the closest one above it.
 * Downscaling an atlas is deterministic across platforms; upscaling is blurry,
 * so overshooting is the safer miss.
 */
export function selectVariant(
    variants: AtlasVariant[],
    size: string,
    devicePixelRatio: number = window.devicePixelRatio ?? 1,
): AtlasVariant | null {
    const candidates = variants.filter((v) => v.size === size);
    if (candidates.length === 0) return null;

    const exact = candidates.find((v) => v.pixelRatio === devicePixelRatio);
    if (exact) return exact;

    const above = candidates
        .filter((v) => v.pixelRatio > devicePixelRatio)
        .sort((a, b) => a.pixelRatio - b.pixelRatio)[0];
    if (above) return above;

    return candidates.sort((a, b) => b.pixelRatio - a.pixelRatio)[0];
}