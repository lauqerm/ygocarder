import { UP_RATIO } from 'src/model';
import { fillTextLeftWithSpacing } from './canvas-util';

export const drawScale = (
    ctx: CanvasRenderingContext2D | null | undefined,
    value: string,
    edge: number,
    baseline: number,
) => {
    if (ctx && value) {
        const digitScaleRatio = 0.65;
        const digitList = `${value}`.split('');
        let totalWidth = 0;

        digitList.forEach(digit => {
            totalWidth += ctx.measureText(digit).width * (digit === '1' ? digitScaleRatio : 1);
        });
        let accLeft = edge - totalWidth / 2;

        digitList.forEach(digit => {
            ctx.fillText(digit, digit === '1' ? accLeft - 3 : accLeft, baseline);
            accLeft += ctx.measureText(digit).width * (digit === '1' ? digitScaleRatio : 1);
        });
    }
};

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
            ctx.font = 'bold 37px matrix';
            ctx.fillText(value, edge + statWidth, baseline);
        } else {
            ctx.textAlign = 'left';
            const tokenizedText = `${value}`.split('?');

            let totalWidth = tokenizedText.reduce((prev, curr, index) => {
                ctx.font = '37px MatrixBoldSmallCaps';
                let nextWidth = prev + ctx.measureText(curr).width;

                if (index < tokenizedText.length - 1) {
                    ctx.font = '37px matrix';
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
                    ctx.font = '37px MatrixBoldSmallCaps';
                    nextEdge -= ctx.measureText(curText).width * condenseRatio;
                    ctx.fillText(curText, nextEdge / condenseRatio, baseline);

                    if (index < tokenizedText.length - 1) {
                        ctx.font = 'bold 37px matrix';
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