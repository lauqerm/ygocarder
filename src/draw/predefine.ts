import { fillTextRightWithSpacing, measureWithSymbol } from './util';

export const draw1stEdition = (
    ctx: CanvasRenderingContext2D | null | undefined,
) => {
    if (ctx) {
        ctx.font = 'bold 17.5px palatino-linotype-bold';

        let left = 106;
        ctx.fillText('1', left, 777);
        left += ctx.measureText('1').width - 2;

        ctx.font = 'bold 12px palatino-linotype-bold';
        ctx.fillText('st', left, 777 - 5);
        left += ctx.measureText('st').width;

        ctx.font = 'bold 17.5px palatino-linotype-bold';
        ctx.fillText(' Edition', left, 777);
    }
};

export const drawCreatorText = (
    ctx: CanvasRenderingContext2D | null | undefined,
    content: string,
) => {
    if (ctx) {
        ctx.font = '16px stone-serif-regular';

        const uncondensableSymbol = '©';
        const {
            splittedContent,
            splittedWidth,
            symbolWidth,
            condenseRatio,
        } = measureWithSymbol(ctx, content, uncondensableSymbol, 257);

        if (condenseRatio < 1) {
            ctx.textAlign = 'left';
            ctx.scale(condenseRatio, 1);
            splittedContent.reduce((prev, cur, index) => {
                // Fill condense text at the current edge
                ctx.fillText(cur, prev / condenseRatio, 777);
                // Increase edge equal to the draw text (condense ratio factored)
                let nextEdge = prev + splittedWidth[index] * condenseRatio;
                if (index < splittedContent.length - 1) {
                    // Restore 1:1 ratio
                    ctx.scale(1 / condenseRatio, 1);
                    // Increase edge equal to the character "©" (condense ratio is 1 so no factored)
                    ctx.fillText(uncondensableSymbol, nextEdge, 777);
                    nextEdge += symbolWidth;
                    // Restore condense ratio
                    ctx.scale(condenseRatio, 1);
                }
                return nextEdge;
            }, 496 - 257);
            ctx.scale(1 / condenseRatio, 1);
        } else {
            ctx.textAlign = 'right';
            fillTextRightWithSpacing(ctx, content, -0.15, 496 / condenseRatio, 777);
        }
        ctx.textAlign = 'left';
    }
};

export const drawAD = (
    ctx: CanvasRenderingContext2D | null | undefined,
    $value: string | number,
    edge: number,
    baseline: number,
) => {
    if (ctx) {
        ctx.font = '25px MatrixBoldSmallCaps';
        ctx.textAlign = 'right';
        const value = `${$value}`;
        const atkWidth = ctx.measureText(value).width;

        if (atkWidth > 0) {
            const condenseRatio = Math.min(49.94 / atkWidth, 1);

            ctx.scale(condenseRatio, 1);
            ctx.fillText(value, (edge + 49.94) / condenseRatio, baseline);
            ctx.scale(1 / condenseRatio, 1);
        }
    }
};