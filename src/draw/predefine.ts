import { fillTextRightWithSpacing } from './util';

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
        ctx.textAlign = 'right';

        const textWidth = ctx.measureText(content).width;

        if (textWidth > 0) {
            const condenseRatio = Math.min(257 / textWidth, 1);

            if (condenseRatio < 1) {
                ctx.scale(condenseRatio, 1);
                ctx.fillText(content, 496 / condenseRatio, 777);
                ctx.scale(1 / condenseRatio, 1);
            } else fillTextRightWithSpacing(ctx, content, -0.15, 496 / condenseRatio, 777);
        }
        ctx.textAlign = 'left';
    }
};