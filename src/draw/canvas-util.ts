import { CanvasConst, DEFAULT_PENDULUM_SIZE, FinishInformation, FinishMap, PendulumSize } from 'src/model';
import { CanvasTextStyle } from 'src/service';

const { height: CanvasHeight, width: CanvasWidth, maximumScale } = CanvasConst;

export const randomDarkColor = () => '#000000'.replace(/0/g, () => (~~(Math.random() * 12 + 2)).toString(16));

/** Draw a straight line with random color, used for measurement debug. It take true edge and width, but will draw based on the current scale ratio. */
export const drawMarker = ({
    ctx,
    color = randomDarkColor(), width,
    offset = 4,
    edge, baseline,
    xRatio,
}: {
    ctx: CanvasRenderingContext2D,
    color?: string, width: number,
    offset?: number,
    edge: number, baseline: number,
    xRatio: number,
}) => {
    const currentFillStyle = ctx.fillStyle;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.rect(edge / xRatio, baseline + 1 + Math.random() * offset, width / xRatio, 2);
    // ctx.fill();
    ctx.fillStyle = currentFillStyle;
};

/**
 * @summary Letter spacing rules:
 * * It is based on the letter width (so each letter has different spacing), default is no spacing (0).
 * * Positive letter spacing will create a gap between each letter, and vice versa.
 * * Each letter distribute the gap evenly to their left and right side. So for example if letter spacing is 50% (0.5), it will have a gap equal to 25% (0.25) of its width.
 */

/** Draw a left-aligned text with provided letter spacing. This function take true edge and baseline. It return the right side of the newly created text. */
export const fillTextLeftWithSpacing = (
    ctx: CanvasRenderingContext2D | null | undefined,
    str: string,
    letterSpacingRatio: number,
    edge: number,
    baseline: number,
    option?: {
        stroke?: boolean,
    }
) => {
    if (!ctx || !str) return edge;

    const { stroke = false } = option ?? {};
    ctx.textAlign = 'left';
    const charList = str.split('');
    let curLeft = edge;

    charList.forEach(char => {
        ctx.fillText(char, curLeft, baseline);
        if (stroke) ctx.strokeText(char, curLeft, baseline);
        curLeft += ctx.measureText(char).width * (2 + letterSpacingRatio) / 2;
    });

    return curLeft;
};
/** Draw a right-aligned text with provided letter spacing. This function take true edge and baseline. It return the left side of the newly created text. */
export const fillTextRightWithSpacing = (
    ctx: CanvasRenderingContext2D | null | undefined,
    str: string,
    letterSpacing: number,
    edge: number,
    baseline: number,
    option?: {
        stroke?: boolean,
    }
) => {
    if (!ctx || !str) return edge;

    const { stroke = false } = option ?? {};
    ctx.textAlign = 'right';
    const charList = str.split('');
    let curRight = edge;

    charList.forEach((c, index) => {
        const char = charList[charList.length - index - 1];
        ctx.fillText(char, curRight, baseline);
        if (stroke) ctx.strokeText(char, curRight, baseline);
        curRight -= ctx.measureText(char).width * (2 + letterSpacing) / 2;
    });
    return curRight;
};

/** Clear current canvas, it also ensure canvas existed so we do not need to check for afterward. */
export const clearCanvas = (
    ctx: CanvasRenderingContext2D | null | undefined,
    width = CanvasWidth * maximumScale,
    height = CanvasHeight * maximumScale,
): ctx is CanvasRenderingContext2D => {
    if (ctx) {
        ctx.clearRect(0, 0, width, height);

        return true;
    };
    return false;
};

/** Each finish object may contain many parts, each part has its own set of instruction. This function will abstract all the looping logic so we can instantly apply a finish to some card's part. */
export const getFinishIterator = (
    finish: string[],
    finishMap: Record<string, FinishInformation> = FinishMap,
) => {
    return async (
        ctx?: CanvasRenderingContext2D | null,
        name?: string,
        caller?: (finishType: string, pendulumSuffix: string) => Promise<any>,
        pendulumSize?: PendulumSize,
    ) => {
        if (!ctx || !Array.isArray(finish) || finish.length <= 0) return Promise.resolve();
        for (const finishType of finish) {
            const finishInformation = finishMap[finishType];
            if (caller && finishMap[finishType]) {
                const { partInstructionMap, pendulumSubstituteMap } = finishInformation;
                const instructionList = name ? partInstructionMap[name] ?? [] : [];
                const pendulumSuffix = pendulumSize
                    ? pendulumSubstituteMap[pendulumSize] ?? pendulumSize
                    : DEFAULT_PENDULUM_SIZE;

                if (instructionList.length) {
                    for (const { blendMode = 'source-over', opacity = 1 } of instructionList) {
                        ctx.globalCompositeOperation = blendMode;
                        ctx.globalAlpha = opacity;

                        await caller(finishType, pendulumSuffix);
                    }
                } else {
                    await caller(finishType, pendulumSuffix);
                }
                ctx.globalAlpha = 1;
                ctx.globalCompositeOperation = 'source-over';
            }
        }
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = 'source-over';
    };
};

const DEFAULT_LINE_COLOR = '#000000';
const DEFAULT_LINE_WIDTH = 0;
const DEFAULT_SHADOW_BLUR = 0;
const DEFAULT_SHADOW_COLOR = '#000000';
const DEFAULT_SHADOW_OFFSET_X = 0;
const DEFAULT_SHADOW_OFFSET_Y = 0;
const DEFAULT_TEXT_COLOR = '#000000';

export const setTextStyle = ({
    ctx,
    x,
    y,
    blur,
    color,
    colorGradient,
    shadowColor,
    lineColor,
    lineColorGradient,
    lineWidth,
    globalScale = 1,
    useDefault = true,
}: {
    ctx: CanvasRenderingContext2D,
    globalScale: number,
    useDefault?: boolean,
    colorGradient?: CanvasGradient,
    lineColorGradient?: CanvasGradient,
} & CanvasTextStyle) => {
    if (useDefault || typeof x === 'number') ctx.shadowOffsetX = (x ?? DEFAULT_SHADOW_OFFSET_X) * globalScale;
    if (useDefault || typeof y === 'number') ctx.shadowOffsetY = (y ?? DEFAULT_SHADOW_OFFSET_Y) * globalScale;
    if (useDefault || typeof blur === 'number') ctx.shadowBlur = (blur ?? DEFAULT_SHADOW_BLUR) * globalScale;
    if (useDefault || typeof shadowColor === 'string') ctx.shadowColor = shadowColor ?? DEFAULT_SHADOW_COLOR;
    if (useDefault || typeof color === 'string') ctx.fillStyle = colorGradient ?? color ?? DEFAULT_TEXT_COLOR;
    if (useDefault || typeof lineColor === 'string') ctx.strokeStyle = lineColorGradient ?? lineColor ?? DEFAULT_LINE_COLOR;
    if (useDefault || typeof lineWidth === 'number') ctx.lineWidth = (lineWidth ?? DEFAULT_LINE_WIDTH) * globalScale;

    return () => {
        if (useDefault || typeof x === 'number') ctx.shadowOffsetX = DEFAULT_SHADOW_OFFSET_X;
        if (useDefault || typeof y === 'number') ctx.shadowOffsetY = DEFAULT_SHADOW_OFFSET_Y;
        if (useDefault || typeof blur === 'number') ctx.shadowBlur = DEFAULT_SHADOW_BLUR;
        if (useDefault || typeof shadowColor === 'string') ctx.shadowColor = DEFAULT_SHADOW_COLOR;
        if (useDefault || typeof color === 'string') ctx.fillStyle = DEFAULT_TEXT_COLOR;
        if (useDefault || typeof lineColor === 'string') ctx.strokeStyle = DEFAULT_LINE_COLOR;
        if (useDefault || typeof lineWidth === 'number') ctx.lineWidth = DEFAULT_LINE_WIDTH;
    };
};