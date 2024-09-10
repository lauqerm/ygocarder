import { fillTextLeftWithSpacing, fillTextRightWithSpacing } from '../canvas-util';

export const drawScale = (
    ctx: CanvasRenderingContext2D | null | undefined,
    value: string,
    edge: number,
    baseline: number,
) => {
    if (ctx && value) {
        const fontSize = 60.5;
        ctx.font = `${fontSize}px MatrixBoldSmallCaps`;
        ctx.textAlign = 'left';

        const digitScaleRatio = 0.65;
        const digitList = `${value}`.split('');
        let totalWidth = 0;

        digitList.forEach(digit => {
            totalWidth += ctx.measureText(digit).width * (digit === '1' ? digitScaleRatio : 1);
        });
        let accLeft = edge - totalWidth / 2;

        digitList.forEach(digit => {
            ctx.fillText(digit, digit === '1' ? accLeft - 3 : accLeft, baseline + fontSize);
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
    if (!ctx) return;

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
};

export const drawStatText = (
    ctx: CanvasRenderingContext2D | null | undefined,
    value: string,
    edge: number,
    baseline: number,
) => {
    if (!ctx) return;

    ctx.scale(1, 0.98);
    ctx.font = 'bold 35.73px Matrix-Bold';
    const cursorEndOfATK = fillTextLeftWithSpacing(ctx, value, 0.075, edge, baseline / 0.98);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(1, 1.01);
    ctx.font = 'bold 34.74px Matrix-Bold';
    fillTextLeftWithSpacing(ctx, '/', 0.15, cursorEndOfATK + 5, baseline / 1.01);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
};

/** Stats have two special case: "?" stat ("Slifer the Sky Dragon" TCG) and "∞" stat ("Divine Serpent Geh" Anime) */
export const drawStat = (
    ctx: CanvasRenderingContext2D | null | undefined,
    value: string | number,
    edge: number,
    baseline: number,
) => {
    if (!ctx || value == null) return;

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
};

export const drawSetId = (
    ctx: CanvasRenderingContext2D | null | undefined,
    value: string,
    option: { isPendulum: boolean, isLink: boolean, withShadow: boolean, format: string, lightFooter: boolean }
) => {
    if (!ctx) return;

    const { isPendulum, isLink, withShadow, format, lightFooter } = option;
    let spacing = 0.175;
    let offsetY = 0;
    let xOffset = 0;
    ctx.fillStyle = (lightFooter && !isPendulum) ? '#ffffff' : '#000000';
    ctx.shadowColor = withShadow
        ? lightFooter ? '#000000' : '#ffffff'
        : '#000000';
    ctx.shadowOffsetY = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowBlur = withShadow && !isPendulum ? 3 : 0;
    ctx.font = `${withShadow ? 'bold' : ''} 22px stone-serif-regular`;
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
};