import { CanvasConst } from 'src/model';
import { fillTextLeftWithSpacing, fillTextRightWithSpacing } from './canvas-util';
import { drawFrom } from './image';

const {
    width: CanvasWidth,
} = CanvasConst;

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
    baselineOffset = 0,
    option = { stroke: false },
) => {
    if (ctx) {
        const { stroke = false } = option ?? {};
        ctx.font = 'bold 23.7px palatino-linotype-bold';

        let left = edge;
        ctx.fillText('1', left, 1150.93 + baselineOffset);
        if (stroke) ctx.strokeText('1', left, 1150.93);
        left += ctx.measureText('1').width - 2;

        ctx.font = 'bold 17.78px palatino-linotype-bold';
        ctx.fillText('st', left, 1143.53 + baselineOffset);
        if (stroke) ctx.strokeText('st', left, 1143.53);
        left += ctx.measureText('st').width;

        ctx.font = 'bold 22.22px palatino-linotype-bold';
        ctx.fillText(' Edition', left, 1150.93 + baselineOffset);
        if (stroke) ctx.strokeText(' Edition', left, 1150.93);
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
        const statWidth = 73.97;
        if (value === '∞') {
            ctx.textAlign = 'right';
            ctx.font = 'bold 37px matrix';
            ctx.fillText(value, edge + statWidth, baseline);
        } else
        if (value === '?') {
            ctx.textAlign = 'right';
            ctx.font = 'bold 34px matrix';
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

export const drawSetId = (
    ctx: CanvasRenderingContext2D | null | undefined,
    value: string,
    option: { isPendulum: boolean, isLink: boolean, withShadow: boolean, format: string, lightFooter: boolean }
) => {
    if (ctx) {
        const { isPendulum, isLink, withShadow, format, lightFooter } = option;
        let spacing = 0.175;
        let offsetY = 0;
        let xOffset = 0;
        ctx.fillStyle = (lightFooter && !isPendulum) ? '#fff' : '#000';
        ctx.shadowColor = withShadow ? '#fff' : '#000';
        ctx.shadowOffsetY = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowBlur = withShadow && !isPendulum ? 1 : 0;
        ctx.font = '22px stone-serif-regular';
        if (format === 'ocg') {
            spacing = 0.145;
            offsetY = -1;
            xOffset = -3;
        }

        if (isPendulum) {
            fillTextLeftWithSpacing(ctx, value, spacing, 66.65 + xOffset, 1105.01 + offsetY);
        } else if (isLink) {
            fillTextRightWithSpacing(ctx, value, spacing, 666.56 + xOffset, 872.94 + offsetY);
        } else {
            fillTextRightWithSpacing(ctx, value, spacing, 728.78 + xOffset, 871.50 + offsetY);
        }
    }
};

export const drawCardIcon = async ({
    ctx,
    cardIcon,
    star,
    onStarDraw,
}: {
    ctx: CanvasRenderingContext2D | null | undefined,
    cardIcon: string,
    star: number,
    onStarDraw: (coordinate: [number, number]) => Promise<void>,
}) => {
    const starWidth = 50;
    const startSpacing = 4;
    const starCount = Math.min(13, star);
    const reverseAlign = ['rank', 'negative-level'].includes(cardIcon);
    const totalWidth = starWidth * starCount + startSpacing * (starCount - 1);
    /** Level 13 được canh giữa thay vì canh từ một trong hai lề */
    const leftEdge = starCount <= 12
        ? reverseAlign
            ? 85.9125 - starWidth
            : 728.775
        : reverseAlign
            ? (CanvasWidth - totalWidth) / 2 - starWidth
            : (CanvasWidth - totalWidth) / 2 + totalWidth;

    let offset = 0 - (starWidth + startSpacing);
    return Promise.all([...Array(starCount)]
        .map(async () => {
            offset += (starWidth + startSpacing);
            let coordinate: [number, number] = [
                leftEdge + (starWidth + offset) * (reverseAlign ? 1 : -1),
                145,
            ];
            await drawFrom(ctx, `/asset/image/sub-family/subfamily-${cardIcon}.png`, ...coordinate);
            return onStarDraw(coordinate);
        })
    );
};