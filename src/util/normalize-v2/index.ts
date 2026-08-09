type FitOptions = {
    alphaThreshold?: number; // 0–255, pixel is "visible" if alpha >= this value (default: 10)
};

type TextFitResult = {
    scaleY: number;    // vertical scale to apply via ctx.scale or ctx.transform
    drawY: number;     // Y to pass as the y argument to fillText on the master canvas
    topGap: number;    // post-scale pixels between scaled visible top and anchorTop
    bottomGap: number; // post-scale pixels between anchorBottom and scaled visible bottom
};

type SubpixelBounds = { top: number; bottom: number }; // fractional device-pixel rows

function findVisibleBoundsSubpixel(
    canvas: HTMLCanvasElement,
    coverageFloor = 0.02 // fraction of peak row coverage counted as "edge"
): SubpixelBounds | null {
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    const { width, height } = canvas;
    const data = ctx.getImageData(0, 0, width, height).data;

    // Total ink coverage per row, normalised to 0..1 per pixel
    const coverage = new Float64Array(height);
    for (let y = 0; y < height; y++) {
        let sum = 0;
        const rowStart = y * width * 4;
        for (let x = 0; x < width; x++) sum += data[rowStart + x * 4 + 3];
        coverage[y] = sum / 255;
    }

    const peak = Math.max(...coverage);
    if (peak === 0) return null;
    const floor = peak * coverageFloor;

    let firstRow = -1;
    let lastRow = -1;
    for (let y = 0; y < height; y++) if (coverage[y] > floor) { firstRow = y; break }
    for (let y = height - 1; y >= 0; y--) if (coverage[y] > floor) { lastRow = y; break }
    if (firstRow === -1) return null;

    // Interpolate the edge inside the boundary rows: a row that is only
    // partially covered contributes proportionally, so the edge lands between
    // integer rows rather than snapping to one.
    const topFraction = Math.min(1, coverage[firstRow] / peak);
    const bottomFraction = Math.min(1, coverage[lastRow] / peak);

    return {
        top: firstRow + (1 - topFraction),
        bottom: lastRow + bottomFraction, // already an edge, no +1 needed
    };
}

function findVisibleBounds(
    canvas: HTMLCanvasElement,
    alphaThreshold: number
): { visibleTop: number; visibleBottom: number } | null {
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    const { width, height } = canvas;
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data; // [r, g, b, a, r, g, b, a, ...]

    let visibleTop = -1;
    let visibleBottom = -1;

    // Scan top-down for first visible row
    outer: for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const alpha = data[(y * width + x) * 4 + 3];
            if (alpha >= alphaThreshold) {
                visibleTop = y;
                break outer;
            }
        }
    }

    if (visibleTop === -1) return null; // fully transparent image

    // Scan bottom-up for last visible row
    outer: for (let y = height - 1; y >= visibleTop; y--) {
        for (let x = 0; x < width; x++) {
            const alpha = data[(y * width + x) * 4 + 3];
            if (alpha >= alphaThreshold) {
                visibleBottom = y;
                break outer;
            }
        }
    }

    return { visibleTop, visibleBottom };
}

type LetterBounds = {
    aboveBaseline: number;
    belowBaseline: number;
};

type LetterBoundsCache = Map<string, LetterBounds>;

// ---- Scanning ----
// ---- Cache building ----

type BuildCacheOptions = FitOptions & {
    anchorChar: string; // this letter's bounds define anchorTop and anchorBottom
};

type LetterBoundsCacheWithAnchor = {
    cache: LetterBoundsCache;
    anchorBounds: LetterBounds; // the bounds of the anchor letter
};

function scanLetterBounds(
    offscreenCanvas: HTMLCanvasElement,
    offscreenBaseline: number,
    char: string,
    options: FitOptions = {}
): LetterBounds {
    const alphaThreshold = options.alphaThreshold ?? 1;
    const bounds = findVisibleBoundsSubpixel(offscreenCanvas, alphaThreshold);

    if (!bounds) {
        throw new Error(
            `No visible pixels found for "${char}". ` +
            `Canvas: ${offscreenCanvas.width}x${offscreenCanvas.height}, ` +
            `baseline: ${offscreenBaseline}, alphaThreshold: ${alphaThreshold}. ` +
            'Check that the font is loaded and the text is drawn within canvas bounds.'
        );
    }

    return {
        aboveBaseline: offscreenBaseline - bounds.top,
        belowBaseline: (bounds.bottom + 1) - offscreenBaseline,
    };
}

function buildLetterBoundsCache(
    getOffscreenCanvas: (char: string) => HTMLCanvasElement,
    offscreenBaseline: number,
    chars: string,
    options: BuildCacheOptions
): LetterBoundsCacheWithAnchor {
    const { anchorChar, ...fitOptions } = options;

    const anchorCanvas = getOffscreenCanvas(anchorChar);
    const anchorBounds = scanLetterBounds(anchorCanvas, offscreenBaseline, anchorChar, fitOptions);

    const cache: LetterBoundsCache = new Map();
    const allChars = chars.includes(anchorChar) ? chars : anchorChar + chars;
    const skipped: string[] = [];

    for (const char of allChars) {
        if (char === anchorChar) {
            cache.set(char, anchorBounds);
            continue;
        }
        try {
            cache.set(char, scanLetterBounds(getOffscreenCanvas(char), offscreenBaseline, char, fitOptions));
        } catch {
            skipped.push(char); // e.g. space, or a glyph missing from the font
        }
    }

    if (skipped.length > 0) {
        console.warn(`Skipped ${skipped.length} character(s) with no visible pixels:`, skipped.join(''));
    }

    return { cache, anchorBounds };
}

// ---- Fit derivation ----

function fitFromCache(
    char: string,
    cache: LetterBoundsCache,
    anchorBounds: LetterBounds,
    baseline: number
): TextFitResult | null {
    const bounds = cache.get(char);
    if (!bounds) return null;

    const anchorTop = baseline - anchorBounds.aboveBaseline;
    const anchorBottom = baseline + anchorBounds.belowBaseline;
    const anchorSpan = anchorBounds.aboveBaseline + anchorBounds.belowBaseline;

    const visibleHeight = bounds.aboveBaseline + bounds.belowBaseline;
    const scaleY = anchorSpan / visibleHeight;
    const drawY = anchorTop + bounds.aboveBaseline * scaleY;

    const scaledVisibleTop = drawY - bounds.aboveBaseline * scaleY;
    const scaledVisibleBottom = drawY + bounds.belowBaseline * scaleY;

    return {
        scaleY,
        drawY,
        topGap: scaledVisibleTop - anchorTop,
        bottomGap: anchorBottom - scaledVisibleBottom,
    };
}

// ---- Merging ----

// Each group retains its own anchorBounds — flat union, no cross-group normalization.
// On key collision, the last group's entry wins (consistent with Map insertion order).
type CacheGroup = LetterBoundsCacheWithAnchor & {
    groupId: string; // for identification, e.g. "uppercase", "lowercase"
};

type MergedCache = {
    groups: Map<string, { anchorBounds: LetterBounds; chars: Set<string> }>;
    lookup: (char: string) => { bounds: LetterBounds; anchorBounds: LetterBounds } | null;
};

function mergeLetterBoundsCaches(...groups: CacheGroup[]): MergedCache {
    const charToGroup = new Map<string, { anchorBounds: LetterBounds; bounds: LetterBounds }>();
    const groupMeta = new Map<string, { anchorBounds: LetterBounds; chars: Set<string> }>();

    for (const group of groups) {
        const chars = new Set<string>();
        for (const [char, bounds] of group.cache) {
            charToGroup.set(char, { anchorBounds: group.anchorBounds, bounds });
            chars.add(char);
        }
        groupMeta.set(group.groupId, { anchorBounds: group.anchorBounds, chars });
    }

    return {
        groups: groupMeta,
        lookup: char => charToGroup.get(char) ?? null,
    };
}

// Convenience: derive TextFitResult directly from merged cache
function fitFromMergedCache(
    char: string,
    merged: MergedCache,
    baseline: number
): TextFitResult | null {
    const entry = merged.lookup(char);
    if (!entry) return null;

    // Reconstruct a temporary single-char cache to reuse fitFromCache
    const tempCache: LetterBoundsCache = new Map([[char, entry.bounds]]);
    return fitFromCache(char, tempCache, entry.anchorBounds, baseline);
}

export const getCanvasFontDebuggerV2 = () => {
    let merged: MergedCache | undefined = undefined;
    const masterBaseline = 95;
    // Build once — e.g. on font load or canvas init
    const calculateCache = (
        context: Record<string, unknown>,
        {
            scale,
            xRatio,
            setup,
        }: {
            scale?: number,
            xRatio?: number,
            setup?: (ctx: CanvasRenderingContext2D) => void
        },
    ) => {
        const getCanvas = (char: string) => {
            const canvas = document.createElement('canvas');
            canvas.width = 200;
            canvas.height = 300;
            const ctx = canvas.getContext('2d')!;
            if (setup) setup(ctx);
            ctx.fillStyle = 'black';
            ctx.fillText(char, 50, masterBaseline);
            console.log('DPR:', window.devicePixelRatio, 'offscreen transform:', ctx.getTransform());
            return canvas;
        };

        // Build two groups with different anchors
        const upperGroup = buildLetterBoundsCache(getCanvas, 150, 'M', {
            anchorChar: 'M', // tall flat-topped cap — reliable anchor
        });

        const lowerGroup = buildLetterBoundsCache(getCanvas, 150, 'uomg', {
            anchorChar: 'm', // x-height anchor — no ascenders/descenders
        });

        merged = mergeLetterBoundsCaches(
            { cache: upperGroup!.cache, anchorBounds: upperGroup!.anchorBounds, groupId: 'uppercase' },
            { cache: lowerGroup!.cache, anchorBounds: lowerGroup!.anchorBounds, groupId: 'lowercase' },
        );
        // const {
        //     actualBoundingBoxAscent,
        //     actualBoundingBoxDescent,
        // } = getCtx().ctx.measureText('m');
        // cache = buildLetterFitCache(
        //     char => {
        //         const { canvas, ctx } = getCtx();
        //         // Apply your font settings here
        //         ctx.fillText(char, 50, offscreenBaseline);
        //         return canvas;
        //     },
        //     offscreenBaseline,
        //     offscreenBaseline - actualBoundingBoxAscent,
        //     offscreenBaseline + actualBoundingBoxDescent
        // );
        // console.log('🚀 ~ calculateCache ~ cache:',
        //     offscreenBaseline,
        //     offscreenBaseline - actualBoundingBoxAscent,
        //     offscreenBaseline + actualBoundingBoxDescent, cache);
    };

    return {
        get: (letter: string) => {
            if (!merged) return undefined;
            return fitFromMergedCache(letter, merged, masterBaseline);
        },
        test: calculateCache,
    };
};
export const fontMeasurerV2 = getCanvasFontDebuggerV2();

// Retrieve at draw time — O(1) per character, zero pixel scanning
// function drawFittedChar(
//     masterCtx: CanvasRenderingContext2D,
//     char: string,
//     x: number,
//     cache: LetterFitCache
// ) {
//     const fit = cache.get(char);
//     if (!fit) return;

//     const { scaleY, drawY } = fit;
//     masterCtx.save();
//     masterCtx.translate(0, drawY);
//     masterCtx.scale(1, scaleY);
//     masterCtx.translate(0, -drawY);
//     masterCtx.fillText(char, x, drawY);
//     masterCtx.restore();
// }

export * from './glyph-atlas-runtime';