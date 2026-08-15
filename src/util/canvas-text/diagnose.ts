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
    const threshold = opts.alphaThreshold ?? 32;
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

    // console.log(`vertical ink rows by horizontal scale — "${text}", dpr=${dpr}`);
    // console.table(rows);
    return {
        default: rows[`scaleX=${scales[0]}`],
        rows,
    };
}

// ---------------------------------------------------------------------------
// Atlas / font agreement check
// ---------------------------------------------------------------------------

export type AtlasCheckIssue = {
    char: string;
    groupId: string;
    kind: 'ascent' | 'height' | 'advance' | 'missing';
    atlas: number;
    native: number;
    delta: number;
};

export type AtlasCheckResult = {
    ok: boolean;
    /** False means fillText silently fell back to another face. */
    fontAvailable: boolean;
    checked: number;
    issues: AtlasCheckIssue[];
};