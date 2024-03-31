import { UP_RATIO } from 'src/model';
import { fillTextLeftWithSpacing, fillTextRightWithSpacing, measureWithSymbol } from './util';

export const draw1stEdition = (
    ctx: CanvasRenderingContext2D | null | undefined,
    edge = 99,
) => {
    if (ctx) {
        ctx.font = `bold ${16 * UP_RATIO}px palatino-linotype-bold`;

        let left = edge;
        ctx.fillText('1', left, 777 * UP_RATIO);
        left += ctx.measureText('1').width - 2;

        ctx.font = `bold ${12 * UP_RATIO}px palatino-linotype-bold`;
        ctx.fillText('st', left, (777 - 5) * UP_RATIO);
        left += ctx.measureText('st').width;

        ctx.font = `bold ${15 * UP_RATIO}px palatino-linotype-bold`;
        ctx.fillText(' Edition', left, 777 * UP_RATIO);
    }
};

export const drawCreatorText = (
    ctx: CanvasRenderingContext2D | null | undefined,
    content: string,
) => {
    if (ctx && content) {
        ctx.font = `${16 * UP_RATIO}px stone-serif-regular`;

        const baseline = 777 * UP_RATIO;
        const rightEdge = 496 * UP_RATIO;
        const leftEdge = 257 * UP_RATIO;
        const uncondensableSymbol = '©';
        const {
            splittedContent,
            splittedWidth,
            symbolWidth,
            condenseRatio,
        } = measureWithSymbol(ctx, content, uncondensableSymbol, leftEdge);

        if (condenseRatio < 1) {
            ctx.textAlign = 'left';
            ctx.scale(condenseRatio, 1);
            splittedContent.reduce((prev, cur, index) => {
                // Fill condense text at the current edge
                ctx.fillText(cur, prev / condenseRatio, baseline);
                // Increase edge equal to the draw text (condense ratio factored)
                let nextEdge = prev + splittedWidth[index] * condenseRatio;
                if (index < splittedContent.length - 1) {
                    // Restore 1:1 ratio
                    ctx.scale(1 / condenseRatio, 1);
                    // Increase edge equal to the character "©" (condense ratio is 1 so no factored)
                    ctx.fillText(uncondensableSymbol, nextEdge, baseline);
                    nextEdge += symbolWidth;
                    // Restore condense ratio
                    ctx.scale(condenseRatio, 1);
                }
                return nextEdge;
            }, rightEdge - leftEdge);
            ctx.scale(1 / condenseRatio, 1);
        } else {
            ctx.textAlign = 'right';
            fillTextRightWithSpacing(ctx, content, -0.15, rightEdge / condenseRatio, baseline);
        }
        ctx.textAlign = 'left';
    }
};

export const drawStatText = (
    ctx: CanvasRenderingContext2D | null | undefined,
    value: string,
    edge: number,
    baseline: number,
) => {
    if (ctx) {
        ctx.fillStyle = '#000';
        ctx.scale(1, 0.98);
        ctx.font = 'bold 35.73px Matrix-Bold';
        const cursorEndOfATK = fillTextLeftWithSpacing(ctx, value, 0.075, edge, baseline / 0.98);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(1, 1.01);
        ctx.font = 'bold 34.74px Matrix-Bold';
        fillTextLeftWithSpacing(ctx, '/', 0.15, cursorEndOfATK + 5, baseline / 1.01);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
};

export const drawStat = (
    ctx: CanvasRenderingContext2D | null | undefined,
    value: string | number,
    edge: number,
    baseline: number,
) => {
    if (ctx && value !== undefined) {
        const statWidth = 49.94 * UP_RATIO;
        if (value === '∞') {
            ctx.textAlign = 'right';
            ctx.font = `bold ${25 * UP_RATIO}px matrix`;
            ctx.fillText(value, edge + statWidth, baseline);
        } else {
            ctx.textAlign = 'left';
            const tokenizedText = `${value}`.split('?');

            let totalWidth = tokenizedText.reduce((prev, curr, index) => {
                ctx.font = `${25 * UP_RATIO}px MatrixBoldSmallCaps`;
                let nextWidth = prev + ctx.measureText(curr).width;

                if (index < tokenizedText.length - 1) {
                    ctx.font = `${25 * UP_RATIO}px matrix`;
                    nextWidth += ctx.measureText('?').width;
                }

                return nextWidth;
            }, 0);

            if (totalWidth > 0) {
                const condenseRatio = Math.min(statWidth / totalWidth, 1);

                ctx.scale(condenseRatio, 1);
                tokenizedText.reduce((prev, _, index, arr) => {
                    const curText = arr[arr.length - 1 - index];
                    let nextEdge = prev;
                    ctx.font = `${25 * UP_RATIO}px MatrixBoldSmallCaps`;
                    nextEdge -= ctx.measureText(curText).width * condenseRatio;
                    ctx.fillText(curText, nextEdge / condenseRatio, baseline);

                    if (index < tokenizedText.length - 1) {
                        ctx.font = `bold ${25 * UP_RATIO}px matrix`;
                        nextEdge -= ctx.measureText('?').width * condenseRatio;
                        ctx.fillText('?', nextEdge / condenseRatio, baseline);
                    }
    
                    return nextEdge;
                }, edge + statWidth);
                ctx.scale(1 / condenseRatio, 1);
            }
        }
    }
};