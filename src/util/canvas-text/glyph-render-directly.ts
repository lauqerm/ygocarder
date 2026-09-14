/**
 * glyph-direct-renderer.ts
 *
 * Rasterizes each glyph on demand at its FINAL geometry — final font size,
 * final horizontal scale, final colour — then measures the rendered ink and
 * composites it at integer device pixels.
 *
 * Why this beats a prebuilt atlas for short strings:
 *
 *   - No resampling, ever. A glyph compressed to 50% is rasterized from the
 *     outline at 50% width, so stem coverage is computed correctly instead of
 *     averaged down from wider stems. This is the difference a bitmap scale
 *     cannot recover.
 *   - No tint pass. The colour is known at rasterization time, so there is no
 *     white-then-recolour step and no gamma mismatch.
 *   - Placement is still rasterizer-independent, because every glyph is
 *     positioned from its MEASURED ink rather than from predicted metrics.
 *     Whatever hinting did, the measurement sees it.
 *
 * What it does NOT give you: pixel-identical output across platforms. Windows
 * and macOS still rasterize glyph shapes differently. What is guaranteed is
 * that glyphs align with each other consistently on both.
 *
 * Cost is one fillText plus one getImageData per unique (glyph, size, scale,
 * colour), cached after that. Sized for short strings — roughly a hundred
 * characters — not for body copy.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type FontSpec = {
    family: string;
    weight?: string;
    style?: string;
    /** Font size in CSS pixels. */
    sizeCss: number;
};

export type RenderSpec = FontSpec & {
    /** Horizontal compression. 1 is unscaled, 0.5 is half width. */
    scaleX?: number;
    /**
     * Vertical stretch. 1 is unscaled. Applied in the rasterization transform,
     * so the outline is drawn at the final height rather than a bitmap being
     * stretched — no softening, whatever the value.
     *
     * Use scaleYToFitAnchors() to derive this from an anchor span.
     */
    scaleY?: number;
    /** Any canvas fillStyle. Baked in at rasterization, so no tint pass. */
    color: string;
    /** Alpha (0-255) at or above which a pixel counts as ink. Default 1. */
    alphaThreshold?: number;
};

export type GlyphRaster = {
    /** Cropped tight to the ink, at device resolution. */
    canvas: HTMLCanvasElement;
    widthDev: number;
    heightDev: number;
    /** Measured distance from the baseline up to the ink's top edge, device px. */
    ascentDev: number;
    /** Measured offset from the pen to the ink's left edge, device px. */
    bearingXDev: number;
    /** Pen advance, device px, already including scaleX. */
    advanceDev: number;
};

export type DrawOptions = {
    xCss: number;
    baselineYCss: number;
    align?: 'left' | 'center' | 'right';
    /** Extra tracking, CSS px, applied before scaleX. */
    letterSpacingCss?: number;
    /**
     * Per-glyph vertical nudges in device px, positive moves down. Optional, and
     * usually unnecessary — the measurement already handles what the atlas
     * pipeline needed offsets for.
     */
    offsets?: Record<string, number>;
};

export type DrawResult = {
    nextXCss: number;
    advanceWidthCss: number;
    missing: string[];
};

export type Measurement = {
    advanceWidthCss: number;
    inkWidthCss: number;
    inkHeightCss: number;
    ascentCss: number;
    descentCss: number;
    missing: string[];
};

// ---------------------------------------------------------------------------
// Cache
// ---------------------------------------------------------------------------

const DEFAULT_CACHE_LIMIT = 512;

let cacheLimit = DEFAULT_CACHE_LIMIT;
/** Map preserves insertion order, which is what makes the LRU eviction cheap. */
const rasterCache = new Map<string, GlyphRaster>();

let scratch: HTMLCanvasElement | null = null;
let scratchCtx: CanvasRenderingContext2D | null = null;

function fontString(spec: FontSpec): string {
    return `${spec.style ?? 'normal'} ${spec.weight ?? 'normal'} ${spec.sizeCss}px ${spec.family}`;
}

function cacheKey(char: string, spec: RenderSpec, dpr: number): string {
    // scaleX is quantised: a slider feeding continuous values would otherwise
    // make every frame a cache miss, and differences below this are invisible.
    const scaleX = Math.round((spec.scaleX ?? 1) * 1000) / 1000;
    const scaleY = Math.round((spec.scaleY ?? 1) * 1000) / 1000;
    return [
        char,
        fontString(spec),
        scaleX,
        scaleY,
        spec.color,
        dpr,
        spec.alphaThreshold ?? 1,
    ].join('\u0000');
}

/** Sets the ceiling on cached glyph rasters. Evicts immediately if lowered. */
export function setCacheLimit(limit: number): void {
    cacheLimit = Math.max(1, limit);
    evict();
}

function evict(): void {
    while (rasterCache.size > cacheLimit) {
        const oldest = rasterCache.keys().next();
        if (oldest.done) break;
        rasterCache.delete(oldest.value);
    }
}

export function clearGlyphCache(): void {
    rasterCache.clear();
    scratch = null;
    scratchCtx = null;
}

export function glyphCacheStats(): { size: number; limit: number } {
    return { size: rasterCache.size, limit: cacheLimit };
}

// ---------------------------------------------------------------------------
// Rasterization
// ---------------------------------------------------------------------------

function acquireScratch(widthDev: number, heightDev: number) {
    if (!scratch) {
        scratch = document.createElement('canvas');
        scratchCtx = scratch.getContext('2d', { willReadFrequently: true });
    }
    if (!scratchCtx) throw new Error('Could not acquire scratch 2D context.');

    if (scratch.width < widthDev || scratch.height < heightDev) {
        scratch.width = Math.max(widthDev, scratch.width);
        scratch.height = Math.max(heightDev, scratch.height);
    }
    return { canvas: scratch, ctx: scratchCtx };
}

type InkBox = { left: number; top: number; right: number; bottom: number };

function scanInk(
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

function rasterizeGlyph(char: string, spec: RenderSpec, dpr: number): GlyphRaster | null {
    const scaleX = spec.scaleX ?? 1;
    const scaleY = spec.scaleY ?? 1;
    const alphaThreshold = spec.alphaThreshold ?? 1;

    // Generous margins: 4x the em box covers wide glyphs, accents and
    // descenders. The vertical allowance grows with scaleY so a stretched glyph
    // cannot run off the scratch area.
    const padCss = spec.sizeCss;
    const areaWidthDev = Math.ceil(spec.sizeCss * 4 * dpr);
    const areaHeightDev = Math.ceil(spec.sizeCss * 4 * dpr * Math.max(1, scaleY));

    const { canvas, ctx } = acquireScratch(areaWidthDev, areaHeightDev);

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, areaWidthDev, areaHeightDev);

    // The pen baseline is snapped to a whole device row. A fractional baseline
    // would put the same fractional part into every glyph's measured ascent and
    // shift the run as a block.
    const penXCss = padCss;
    const penYDev = Math.round(padCss * 2 * dpr);

    // One transform carrying both the DPR scale and the horizontal compression.
    // fillText rasterizes the outline under this transform, so stems get correct
    // coverage at the final width instead of being resampled from wider ones.
    ctx.setTransform(scaleX * dpr, 0, 0, scaleY * dpr, 0, 0);
    ctx.font = fontString(spec);
    ctx.fillStyle = spec.color;
    ctx.textBaseline = 'alphabetic';
    ctx.textAlign = 'left';
    // The y argument is in user space, so divide out the vertical scale to land
    // the baseline on penYDev in device space.
    ctx.fillText(char, penXCss, penYDev / (scaleY * dpr));

    // measureText is unaffected by the transform, so scale its result manually.
    const advanceDev = ctx.measureText(char).width * scaleX * dpr;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    const data = ctx.getImageData(0, 0, areaWidthDev, areaHeightDev).data;
    const box = scanInk(data, areaWidthDev, areaHeightDev, alphaThreshold);

    if (!box) {
        // Whitespace has no ink but still advances the pen.
        return {
            canvas: document.createElement('canvas'),
            widthDev: 0,
            heightDev: 0,
            ascentDev: 0,
            bearingXDev: 0,
            advanceDev,
        };
    }

    const inkWidth = box.right - box.left + 1;
    const inkHeight = box.bottom - box.top + 1;

    const cropped = document.createElement('canvas');
    cropped.width = inkWidth;
    cropped.height = inkHeight;
    const croppedCtx = cropped.getContext('2d');
    if (!croppedCtx) return null;

    // 1:1 device-pixel copy, no transform and no filtering.
    croppedCtx.drawImage(canvas, box.left, box.top, inkWidth, inkHeight, 0, 0, inkWidth, inkHeight);

    return {
        canvas: cropped,
        widthDev: inkWidth,
        heightDev: inkHeight,
        ascentDev: penYDev - box.top,
        bearingXDev: box.left - penXCss * scaleX * dpr,
        advanceDev,
    };
}

/** Rasterizes if needed, otherwise returns the cached raster. */
export function getGlyph(char: string, spec: RenderSpec, dpr: number): GlyphRaster | null {
    const key = cacheKey(char, spec, dpr);

    const hit = rasterCache.get(key);
    if (hit) {
        // Re-insert so the most recently used entry sits at the end.
        rasterCache.delete(key);
        rasterCache.set(key, hit);
        return hit;
    }

    const raster = rasterizeGlyph(char, spec, dpr);
    if (!raster) return null;

    rasterCache.set(key, raster);
    evict();
    return raster;
}

/**
 * Pre-rasterizes a set of characters so the first draw does not pay for them.
 * Worth calling on the characters you know appear, after document.fonts.ready.
 */
export function warmCache(chars: string, spec: RenderSpec, dpr: number): void {
    for (const char of new Set([...chars])) getGlyph(char, spec, dpr);
}

// ---------------------------------------------------------------------------
// Layout
// ---------------------------------------------------------------------------

type Placed = { raster: GlyphRaster; char: string; penDev: number };

type Layout = {
    placed: Placed[];
    advanceDev: number;
    inkLeftDev: number;
    inkRightDev: number;
    inkTopDev: number;
    inkBottomDev: number;
    missing: string[];
};

function layout(
    text: string,
    spec: RenderSpec,
    dpr: number,
    letterSpacingCss: number,
    offsets: Record<string, number> | undefined,
): Layout {
    const scaleX = spec.scaleX ?? 1;
    const letterSpacingDev = letterSpacingCss * scaleX * dpr;

    const placed: Placed[] = [];
    const missing: string[] = [];

    let pen = 0;
    let inkLeft = Infinity;
    let inkRight = -Infinity;
    let inkTop = Infinity;
    let inkBottom = -Infinity;

    for (const char of text) {
        const raster = getGlyph(char, spec, dpr);
        if (!raster) {
            missing.push(char);
            continue;
        }

        if (raster.widthDev > 0) {
            const offset = offsets?.[char] ?? 0;
            const left = pen + raster.bearingXDev;
            const top = -raster.ascentDev + offset;

            placed.push({ raster, char, penDev: pen });

            inkLeft = Math.min(inkLeft, left);
            inkRight = Math.max(inkRight, left + raster.widthDev);
            inkTop = Math.min(inkTop, top);
            inkBottom = Math.max(inkBottom, top + raster.heightDev);
        }

        pen += raster.advanceDev + letterSpacingDev;
    }

    const empty = placed.length === 0;
    return {
        placed,
        advanceDev: pen,
        inkLeftDev: empty ? 0 : inkLeft,
        inkRightDev: empty ? 0 : inkRight,
        inkTopDev: empty ? 0 : inkTop,
        inkBottomDev: empty ? 0 : inkBottom,
        missing,
    };
}

/** The canvas's own CSS-to-device scale. Not window.devicePixelRatio. */
export function getContextScale(ctx: CanvasRenderingContext2D): number {
    return ctx.getTransform().a;
}

export function measureString(
    ctx: CanvasRenderingContext2D,
    text: string,
    spec: RenderSpec,
    options: Pick<DrawOptions, 'letterSpacingCss' | 'offsets'> = {},
): Measurement {
    const dpr = getContextScale(ctx) || 1;
    const l = layout(text, spec, dpr, options.letterSpacingCss ?? 0, options.offsets);
    return {
        advanceWidthCss: l.advanceDev / dpr,
        inkWidthCss: (l.inkRightDev - l.inkLeftDev) / dpr,
        inkHeightCss: (l.inkBottomDev - l.inkTopDev) / dpr,
        ascentCss: -l.inkTopDev / dpr,
        descentCss: l.inkBottomDev / dpr,
        missing: l.missing,
    };
}

/**
 * The baseline that puts a reference glyph's ink top on a given anchor line.
 *
 * Measured at the actual render configuration, so it stays correct across
 * platforms and across horizontal scales. Use a flat-topped glyph as the
 * reference: 'H' for caps, 'x' for lowercase, '0' for digits.
 */
export function baselineForAnchorTop(
    ctx: CanvasRenderingContext2D,
    referenceChar: string,
    anchorTopCss: number,
    spec: RenderSpec,
): number {
    const dpr = getContextScale(ctx) || 1;
    const raster = getGlyph(referenceChar, spec, dpr);
    if (!raster) throw new Error(`Reference glyph "${referenceChar}" produced no ink.`);
    return anchorTopCss + raster.ascentDev / dpr;
}

// ---------------------------------------------------------------------------
// Drawing
// ---------------------------------------------------------------------------

export function drawString(
    ctx: CanvasRenderingContext2D,
    text: string,
    spec: RenderSpec,
    options: DrawOptions,
): DrawResult {
    const m = ctx.getTransform();
    if (m.b !== 0 || m.c !== 0) {
        console.warn(
            'drawString: rotation or skew on the target context is not supported. ' +
            'Only translation and axis-aligned scale are honoured.',
        );
    }

    const dpr = m.a || 1;
    const translateDevX = m.e;
    const translateDevY = m.f;

    const l = layout(text, spec, dpr, options.letterSpacingCss ?? 0, options.offsets);

    if (l.missing.length > 0) {
        console.warn(`drawString: no raster for ${l.missing.length} char(s): ${l.missing.join('')}`);
    }
    if (l.placed.length === 0) {
        return { nextXCss: options.xCss, advanceWidthCss: 0, missing: l.missing };
    }

    let alignOffset = 0;
    if (options.align === 'center') alignOffset = -l.advanceDev / 2;
    else if (options.align === 'right') alignOffset = -l.advanceDev;

    const originXDev = translateDevX + options.xCss * dpr + alignOffset;
    const originYDev = translateDevY + options.baselineYCss * m.d;

    ctx.save();
    // Identity so destinations are device pixels. Every glyph blit is then a 1:1
    // copy at integer coordinates — no filtering, nothing for the rasterizer to
    // decide differently between platforms.
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.imageSmoothingEnabled = false;

    for (const { raster, char, penDev } of l.placed) {
        const offset = options.offsets?.[char] ?? 0;
        ctx.drawImage(
            raster.canvas,
            Math.round(originXDev + penDev + raster.bearingXDev),
            Math.round(originYDev - raster.ascentDev + offset),
        );
    }

    ctx.restore();

    return {
        nextXCss: options.xCss + l.advanceDev / dpr,
        advanceWidthCss: l.advanceDev / dpr,
        missing: l.missing,
    };
}

/**
 * The FONT SIZE whose reference glyph ink exactly fills an anchor span.
 *
 * Prefer this over scaleYToFitAnchors. Solving for size keeps the scaling
 * uniform, so the letterform is the one the designer drew. Holding the size
 * fixed and squashing with scaleY distorts the weight: vertical stems keep
 * their width while the glyph gets shorter, which reads as noticeably bolder
 * and squatter even when the height is correct.
 *
 * Ink height is close to linear in font size, so two or three refinement passes
 * converge well past pixel precision.
 */
export function fontSizeToFitAnchors(
    ctx: CanvasRenderingContext2D,
    referenceChar: string,
    spec: RenderSpec,
    anchorSpanCss: number,
    iterations = 4,
): number {
    const dpr = getContextScale(ctx) || 1;
    const targetDev = anchorSpanCss * dpr;

    let size = spec.sizeCss;
    for (let i = 0; i < iterations; i++) {
        const raster = getGlyph(referenceChar, { ...spec, sizeCss: size, scaleY: 1 }, dpr);
        if (!raster || raster.heightDev === 0) {
            throw new Error(`Reference glyph "${referenceChar}" produced no ink at ${size}px.`);
        }
        if (raster.heightDev === targetDev) break;
        size = size * (targetDev / raster.heightDev);
    }
    return size;
}

/**
 * The scaleY that makes a reference glyph's ink exactly fill an anchor span.
 *
 * This restores what the atlas pipeline's anchor groups did: pick a flat-topped,
 * flat-bottomed glyph ('H' for caps, 'x' for lowercase, '0' for digits), measure
 * its natural ink height at this configuration, and scale so it spans the two
 * anchor lines. Every other glyph keeps its natural proportion to that
 * reference, so the font's optical corrections survive.
 *
 * Use this only for a deliberate vertical distortion. For ordinary anchor
 * fitting reach for fontSizeToFitAnchors instead — squashing with scaleY
 * thickens stems relative to height and reads as a heavier weight.
 */
export function scaleYToFitAnchors(
    ctx: CanvasRenderingContext2D,
    referenceChar: string,
    spec: RenderSpec,
    anchorSpanCss: number,
): number {
    const dpr = getContextScale(ctx) || 1;
    const raster = getGlyph(referenceChar, { ...spec, scaleY: 1 }, dpr);
    if (!raster || raster.heightDev === 0) {
        throw new Error(`Reference glyph "${referenceChar}" produced no ink.`);
    }
    return (anchorSpanCss * dpr) / raster.heightDev;
}

/**
 * Convenience for the common case: fit a string into a width by condensing.
 * Returns the scaleX to use, never above 1.
 */
export function scaleXToFit(
    ctx: CanvasRenderingContext2D,
    text: string,
    spec: RenderSpec,
    maxWidthCss: number,
    minScaleX = 0.5,
): number {
    const natural = measureString(ctx, text, { ...spec, scaleX: 1 }).advanceWidthCss;
    if (natural <= 0 || natural <= maxWidthCss) return 1;
    return Math.max(minScaleX, maxWidthCss / natural);
}