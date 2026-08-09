/**
 * diagnose-offset.ts
 *
 * Throwaway. Draws one glyph twice — once with fillText, once through the
 * atlas — onto separate canvases with identical settings, scans both for their
 * first and last ink rows, and reports the difference.
 *
 * Run it in the app, on the machine showing the offset. It answers which of
 * the candidate causes is actually responsible instead of guessing.
 */

import type { LoadedAtlas } from './glyph-atlas-runtime';
import { drawString } from './glyph-atlas-runtime';

type Bounds = { top: number; bottom: number } | null;

function inkRows(canvas: HTMLCanvasElement, alphaThreshold: number): Bounds {
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return null;
    const { width, height } = canvas;
    const data = ctx.getImageData(0, 0, width, height).data;

    let top = -1;
    let bottom = -1;
    for (let y = 0; y < height; y++) {
        const row = y * width * 4;
        for (let x = 0; x < width; x++) {
            if (data[row + x * 4 + 3] >= alphaThreshold) {
                if (top === -1) top = y;
                bottom = y;
                break;
            }
        }
    }
    return top === -1 ? null : { top, bottom };
}

export function diagnoseOffset(
    atlas: LoadedAtlas,
    char: string,
    opts: {
        /** Exactly what the app sets on the master context. */
        font: string;
        color: string;
        baselineYCss: number;
        xCss: number;
        devicePixelRatio?: number;
        widthCss?: number;
        heightCss?: number;
    },
): void {
    const dpr = opts.devicePixelRatio ?? window.devicePixelRatio ?? 1;
    const wCss = opts.widthCss ?? 300;
    const hCss = opts.heightCss ?? 300;

    const make = () => {
        const c = document.createElement('canvas');
        c.width = Math.ceil(wCss * dpr);
        c.height = Math.ceil(hCss * dpr);
        return c;
    };

    // A: native fillText, with the DPR transform the app would normally use.
    const nativeCanvas = make();
    const nativeCtx = nativeCanvas.getContext('2d')!;
    nativeCtx.scale(dpr, dpr);
    nativeCtx.font = opts.font;
    nativeCtx.fillStyle = opts.color;
    nativeCtx.textBaseline = 'alphabetic';
    nativeCtx.fillText(char, opts.xCss, opts.baselineYCss);

    // B: the atlas path, same nominal coordinates.
    const atlasCanvas = make();
    const atlasCtx = atlasCanvas.getContext('2d')!;
    atlasCtx.scale(dpr, dpr);
    drawString(atlasCtx, atlas, char, {
        xCss: opts.xCss,
        baselineYCss: opts.baselineYCss,
        color: opts.color,
        devicePixelRatio: dpr,
    });

    // Scan at several thresholds: if the gap closes as the threshold drops, the
    // build's alphaThreshold is discarding the faint fringe row rather than
    // anything being mispositioned.
    console.log(`glyph "${char}"  dpr=${dpr}  baseline=${opts.baselineYCss}`);
    for (const threshold of [1, 5, 10, 32, 128]) {
        const a = inkRows(nativeCanvas, threshold);
        const b = inkRows(atlasCanvas, threshold);
        if (!a || !b) {
            console.log(`  threshold ${threshold}: no ink in one of the canvases`);
            continue;
        }
        console.log(
            `  threshold ${String(threshold).padStart(3)}:` +
            ` native [${a.top}, ${a.bottom}]  atlas [${b.top}, ${b.bottom}]` +
            `  deltaTop ${b.top - a.top}  deltaBottom ${b.bottom - a.bottom}` +
            `  heights ${a.bottom - a.top + 1} vs ${b.bottom - b.top + 1}`,
        );
    }

    // Eyeball them side by side.
    for (const [canvas, label] of [
        [nativeCanvas, 'native fillText'],
        [atlasCanvas, 'atlas drawString'],
    ] as const) {
        canvas.style.cssText =
            'border:1px solid #888;image-rendering:pixelated;width:' + wCss * 4 + 'px';
        const wrap = document.createElement('div');
        wrap.style.cssText = 'display:inline-block;margin:8px;font:12px monospace';
        wrap.appendChild(Object.assign(document.createElement('div'), { textContent: label }));
        wrap.appendChild(canvas);
        document.body.appendChild(wrap);
    }
}

/**
 * Sweeps a set of glyphs across fractional baseline offsets and reports where
 * each one diverges from fillText.
 *
 * Expected shape of the result: at fraction 0 every glyph shows delta 0. As the
 * fraction rises, glyphs flip to -1 or +1 at DIFFERENT points, because each
 * one's true outline ascent has its own subpixel fraction. That staggering is
 * the signature of the problem — it is not a constant pipeline offset, and no
 * single per-glyph offsetY can correct it across baselines.
 */
export function sweepBaselineFractions(
    atlas: LoadedAtlas,
    chars: string,
    opts: {
        font: string;
        color: string;
        baselineYCss: number;
        xCss?: number;
        devicePixelRatio?: number;
        fractions?: number[];
        alphaThreshold?: number;
    },
): void {
    const dpr = opts.devicePixelRatio ?? window.devicePixelRatio ?? 1;
    const xCss = opts.xCss ?? 20;
    const threshold = opts.alphaThreshold ?? 32;
    const fractions = opts.fractions ?? [0, 0.2, 0.4, 0.5, 0.6, 0.8];
    const base = Math.round(opts.baselineYCss * dpr) / dpr;

    const make = () => {
        const c = document.createElement('canvas');
        c.width = Math.ceil(200 * dpr);
        c.height = Math.ceil(300 * dpr);
        return c;
    };

    const rows: Record<string, Record<string, number | string>> = {};

    for (const char of chars) {
        const row: Record<string, number | string> = {};

        for (const fraction of fractions) {
            const baselineYCss = base + fraction / dpr;

            const nativeCanvas = make();
            const nctx = nativeCanvas.getContext('2d')!;
            nctx.scale(dpr, dpr);
            nctx.font = opts.font;
            nctx.fillStyle = opts.color;
            nctx.textBaseline = 'alphabetic';
            nctx.fillText(char, xCss, baselineYCss);

            const atlasCanvas = make();
            const actx = atlasCanvas.getContext('2d')!;
            actx.scale(dpr, dpr);
            drawString(actx, atlas, char, {
                xCss,
                baselineYCss,
                color: opts.color,
                devicePixelRatio: dpr,
            });

            const a = inkRows(nativeCanvas, threshold);
            const b = inkRows(atlasCanvas, threshold);
            row[`f=${fraction}`] = a && b ? b.top - a.top : 'n/a';
        }

        const entry = atlas.entries.get(char);
        row.ascent = entry ? entry.ascent : 'missing';
        row.offsetY = entry ? entry.offsetY : '';
        rows[char] = row;
    }

    console.log(
        `deltaTop (atlas minus fillText) by baseline fraction — dpr=${dpr}, threshold=${threshold}`,
    );
    console.table(rows);
}

/**
 * Logs the exact context state and resolved device baseline at a real call
 * site. Call it immediately before your fillText and immediately before your
 * drawString, with the same values each path actually receives, then compare
 * the two log lines.
 *
 * Any difference in effectiveBaselineDev, font, or textBaseline is the offset.
 * If both lines are identical and the glyphs still disagree on screen, the
 * difference is downstream of here — most likely a later transform, or the two
 * paths writing to different canvases before compositing.
 */
export function auditDrawCall(
    ctx: CanvasRenderingContext2D,
    label: string,
    baselineYCss: number,
    devicePixelRatio?: number,
): void {
    const dpr = devicePixelRatio ?? window.devicePixelRatio ?? 1;
    const m = ctx.getTransform();
    const effectiveBaselineDev = m.f + baselineYCss * m.d;

    console.log(`[${label}]`, {
        baselineYCss,
        dpr,
        font: ctx.font,
        textBaseline: ctx.textBaseline,
        textAlign: ctx.textAlign,
        transform: { a: m.a, b: m.b, c: m.c, d: m.d, e: m.e, f: m.f },
        effectiveBaselineDev,
        canvasSize: `${ctx.canvas.width}x${ctx.canvas.height}`,
        canvasCssSize: `${ctx.canvas.clientWidth}x${ctx.canvas.clientHeight}`,
    });
}

/**
 * Renders the same text at a range of horizontal scales through both paths and
 * reports each one's vertical ink rows.
 *
 * Expected result: the atlas columns are constant across every scale, because
 * nothing in its vertical math depends on scaleX. The fillText columns move,
 * because a non-uniform transform makes Skia abandon grid-fitting and render
 * from outlines, which shifts glyphs vertically even under a purely horizontal
 * scale.
 *
 * If that is what you see, fillText is not a valid reference to align against
 * and the remaining check is atlas-vs-atlas across platforms.
 */
export function verifyScaleXInvariance(
    atlas: LoadedAtlas,
    text: string,
    opts: {
        font: string;
        color: string | CanvasGradient;
        baselineYCss: number;
        xCss?: number;
        devicePixelRatio?: number;
        scales?: number[];
        alphaThreshold?: number;
    },
) {
    const dpr = opts.devicePixelRatio ?? window.devicePixelRatio ?? 1;
    const xCss = opts.xCss ?? 20;
    const threshold = opts.alphaThreshold ?? 64;
    const scales = opts.scales ?? [1, 0.98, 0.97, 0.95, 0.9, 0.8, 0.7];

    const make = () => {
        const c = document.createElement('canvas');
        c.width = Math.ceil(600 * dpr);
        c.height = Math.ceil(300 * dpr);
        return c;
    };

    const rows: Record<string, Record<string, number | string>> = {};

    for (const scaleX of scales) {
        const nativeCanvas = make();
        const nctx = nativeCanvas.getContext('2d')!;
        nctx.scale(dpr, dpr);
        nctx.font = opts.font;
        nctx.fillStyle = opts.color;
        nctx.textBaseline = 'alphabetic';
        nctx.save();
        nctx.translate(xCss, 0);
        nctx.scale(scaleX, 1);
        nctx.fillText(text, 0, opts.baselineYCss);
        nctx.restore();

        const atlasCanvas = make();
        const actx = atlasCanvas.getContext('2d')!;
        actx.scale(dpr, dpr);
        drawString(actx, atlas, text, {
            xCss,
            baselineYCss: opts.baselineYCss,
            color: opts.color,
            scaleX,
            devicePixelRatio: dpr,
        });

        const a = inkRows(nativeCanvas, threshold);
        const b = inkRows(atlasCanvas, threshold);

        rows[`scaleX=${scaleX}`] = {
            fillTextTop: a ? a.top : 'n/a',
            fillTextBottom: a ? a.bottom : 'n/a',
            atlasTop: b ? b.top : 'n/a',
            atlasBottom: b ? b.bottom : 'n/a',
            deltaTop: a && b ? b.top - a.top : 'n/a',
        };
    }

    console.log(`vertical ink rows by horizontal scale — "${text}", dpr=${dpr}`);
    console.table(rows);
    return {
        default: rows[`scaleX=${scales[0]}`],
        rows,
    };
}