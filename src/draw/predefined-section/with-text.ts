import { CanvasTextStyle } from 'src/service';
import { fillTextLeftWithSpacing, fillTextRightWithSpacing, setTextStyle } from '../canvas-util';

export const drawScale = (
    ctx: CanvasRenderingContext2D | null | undefined,
    value: string,
    _edge: number,
    _baseline: number,
    _fontSize: number,
    globalScale: number,
) => {
    const edge = _edge * globalScale;
    const baseline = _baseline * globalScale;
    if (ctx && value) {
        const fontSize = _fontSize * globalScale;
        ctx.font = `${fontSize}px MatrixBoldSmallCaps`;
        ctx.textAlign = 'left';

        const exceptionDigitWidthRatio = 0.8;
        const digitList = `${value}`.split('');
        let totalWidth = 0;

        digitList.forEach(digit => {
            totalWidth += ctx.measureText(digit).width * (digit === '1' ? exceptionDigitWidthRatio : 1);
        });
        let accLeft = edge - totalWidth / 2;

        digitList.forEach(digit => {
            ctx.fillText(
                digit,
                digit === '1' ? accLeft + 1 * globalScale : accLeft,
                baseline + fontSize,
            );
            accLeft += ctx.measureText(digit).width * (digit === '1' ? exceptionDigitWidthRatio : 1);
        });
    }
};

export const draw1stEdition = (
    ctx: CanvasRenderingContext2D | null | undefined,
    _edge = 99,
    _baseline = 1150.93,
    _baselineOffset = 0,
    option: {
        stroke?: boolean,
        textStyle?: CanvasTextStyle,
        globalScale: number,
    } = {
        globalScale: 1,
        stroke: false,
    },
) => {
    if (!ctx) return;

    const { stroke = false, textStyle, globalScale } = option ?? {};
    const edge = _edge * globalScale;
    const baseline = _baseline * globalScale;
    const baselineOffset = _baselineOffset * globalScale;
    const resetStyle = setTextStyle({
        ctx,
        globalScale,
        ...textStyle,
        ...(textStyle?.shadowColor ? { x: 0, y: 0, blur: 3 } : {}),
    });
    const superTextOffset = 7.4 * globalScale;
    ctx.font = `bold ${23.7 * globalScale}px palatino-linotype-bold`;

    let left = edge;
    ctx.fillText('1', left, baseline + baselineOffset);
    if (stroke) ctx.strokeText('1', left, baseline);
    left += ctx.measureText('1').width - 2 * globalScale;

    ctx.font = `bold ${17.78 * globalScale}px palatino-linotype-bold`;
    ctx.fillText('st', left, baseline - superTextOffset + baselineOffset);
    if (stroke) ctx.strokeText('st', left, baseline - superTextOffset);
    left += ctx.measureText('st').width;

    ctx.font = `bold ${22.22 * globalScale}px palatino-linotype-bold`;
    ctx.fillText(' Edition', left, baseline + baselineOffset);
    if (stroke) ctx.strokeText(' Edition', left, baseline);
    resetStyle();
};

export const drawStatText = (
    ctx: CanvasRenderingContext2D | null | undefined,
    value: string,
    _edge: number,
    _baseline: number,
    globalScale: number,
) => {
    if (!ctx) return;

    const edge = _edge * globalScale;
    const baseline = _baseline * globalScale;
    ctx.scale(1, 0.98);
    ctx.font = `bold ${35.73 * globalScale}px Matrix-Bold`;
    const cursorEndOfATK = fillTextLeftWithSpacing(ctx, value, 0.075, edge, baseline / 0.98);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(1, 1.01);
    ctx.font = `bold ${34.74 * globalScale}px Matrix-Bold`;
    fillTextLeftWithSpacing(ctx, '/', 0.15, cursorEndOfATK + 5 * globalScale, baseline / 1.01);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
};

/** Stats have two special case: "?" stat ("Slifer the Sky Dragon" TCG) and "∞" stat ("Divine Serpent Geh" Anime) */
export const drawStat = (
    ctx: CanvasRenderingContext2D | null | undefined,
    value: string | number,
    _edge: number,
    _baseline: number,
    globalScale: number,
) => {
    if (!ctx || value == null) return;

    const numberOffset = -1;
    const edge = _edge * globalScale;
    const baseline = _baseline * globalScale;
    const statWidth = 73.97 * globalScale;
    if (value === '∞') {
        ctx.textAlign = 'right';
        ctx.font = `bold ${36.18 * globalScale}px matrix`;
        ctx.fillText(value, edge + statWidth, baseline);
    } else
    if (value === '?') {
        ctx.textAlign = 'right';
        ctx.scale(1, 1.29);
        ctx.font = ` ${34 * globalScale}px MatrixBoldSmallCaps`;
        ctx.fillText(value, edge + statWidth, numberOffset + baseline / 1.29);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    } else {
        ctx.textAlign = 'left';
        const tokenizedText = `${value}`.split('?');

        let totalWidth = tokenizedText.reduce((prev, curr, index) => {
            ctx.font = `${36.18 * globalScale}px MatrixBoldSmallCaps`;
            let nextWidth = prev + ctx.measureText(curr).width;

            if (index < tokenizedText.length - 1) {
                ctx.font = `${36.18 * globalScale}px matrix`;
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
                ctx.font = `${36.18 * globalScale}px MatrixBoldSmallCaps`;
                nextEdge -= ctx.measureText(curText).width * condenseRatio;
                ctx.fillText(curText, nextEdge / condenseRatio, numberOffset + baseline);

                if (index < tokenizedText.length - 1) {
                    ctx.font = `${34 * globalScale}px MatrixBoldSmallCaps`;
                    nextEdge -= ctx.measureText('?').width * condenseRatio;
                    ctx.scale(1, 1.29);
                    ctx.fillText('?', nextEdge / condenseRatio, numberOffset + baseline / 1.29);
                    ctx.setTransform(1, 0, 0, 1, 0, 0);
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
    option: {
        globalScale: number,
        isPendulum: boolean,
        isLink: boolean,
        withShadow: boolean,
        format: string,
        lightFooter: boolean,
        textStyle?: CanvasTextStyle,
    }
) => {
    if (!ctx) return;

    const { globalScale, isPendulum, isLink, withShadow, format, lightFooter, textStyle } = option;
    let spacing = 0.125;
    let offsetY = 0;
    let xOffset = 0;
    ctx.font = `${withShadow ? 'bold' : ''} ${22 * globalScale}px stone-serif-regular`;
    if (format === 'ocg') {
        spacing = 0.145;
        offsetY = -1;
        xOffset = -3;
    }
    const resetTextStyle = setTextStyle({
        ctx,
        color: (lightFooter && !isPendulum) ? '#ffffff' : '#000000',
        shadowColor: withShadow
            ? lightFooter ? '#000000' : '#ffffff'
            : '#000000',
        y: 0,
        x: 0,
        blur: withShadow && !isPendulum ? 3 : 0,
        globalScale,
        ...textStyle,
        ...(textStyle?.shadowColor ? { x: 0, y: 0, blur: 3 } : {}),
    });

    if (isPendulum) {
        fillTextLeftWithSpacing(ctx, value, spacing, (66.65 + xOffset) * globalScale, (1105.01 + offsetY) * globalScale);
    } else if (isLink) {
        fillTextRightWithSpacing(ctx, value, spacing, (666.56 + xOffset) * globalScale, (872.94 + offsetY) * globalScale);
    } else {
        fillTextRightWithSpacing(ctx, value, spacing, (728.78 + xOffset) * globalScale, (871.50 + offsetY) * globalScale);
    }
    resetTextStyle();
};