// Stamp-dilation outline. Operates on any alpha mask — a composed text run,
// a glyph atlas layer, or an image. Deterministic across platforms because
// every step is a plain drawImage.

const RADIUS = 3;
const MAX_SAMPLE_COUNT = 30;
const RINGS = 2;
const OFFSET = { x: 0, y: 0 };
const OPACITY = 1;

function stampPoints(radius: number, maxSampleCount: number, rings: number) {
    if (radius <= 0) return [];
    const points: [number, number][] = [];
    for (let ring = 1; ring <= rings; ring++) {
        const r = (radius * ring) / rings;
        const n = Math.max(3, Math.round((maxSampleCount * ring) / rings));
        for (let i = 0; i < n; i++) {
            const angle = (i / n) * Math.PI * 2;
            points.push([r * Math.cos(angle), r * Math.sin(angle)]);
        }
    }
    return points;
}

// `mask` is a canvas holding the shape's alpha. Pad it by at least
// RADIUS + max(|OFFSET.x|, |OFFSET.y|) or the dilation has nowhere to expand.
export function drawOutlined(
    targetCtx: CanvasRenderingContext2D,
    mask: HTMLCanvasElement,
    x = 0, y = 0,
    fillColour = '#000000',
    outlineColour = fillColour,
    radius = RADIUS,
    maxSampleCount = MAX_SAMPLE_COUNT,
) {
    const normalizedSampleCount = Math.max(maxSampleCount, Math.round(radius * 6) + 3);
    const outline = document.createElement('canvas'); // hoist and reuse in real code
    outline.width = mask.width;
    outline.height = mask.height;
    const olc = outline.getContext('2d');

    if (!olc) return;
    const tinted = tint(mask, outlineColour);
    for (const [dx, dy] of stampPoints(radius, normalizedSampleCount, RINGS)) {
        olc.drawImage(tinted, OFFSET.x + dx, OFFSET.y + dy);
    }

    targetCtx.globalAlpha = OPACITY;
    targetCtx.drawImage(outline, x, y);
    targetCtx.globalAlpha = 1;
    targetCtx.drawImage(tint(mask, fillColour), x, y);
}

function tint(mask: HTMLCanvasElement, colour: string) {
    const c = document.createElement('canvas');
    c.width = mask.width;
    c.height = mask.height;
    const ctx = c.getContext('2d');
    if (!ctx) return c;
    ctx.drawImage(mask, 0, 0);
    ctx.globalCompositeOperation = 'source-in';
    ctx.fillStyle = colour;
    ctx.fillRect(0, 0, c.width, c.height);
    return c;
}