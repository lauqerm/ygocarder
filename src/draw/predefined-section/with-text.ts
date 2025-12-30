import { CanvasTextStyle } from 'src/service';
import { fillTextLeftWithSpacing, fillTextRightWithSpacing, setTextStyle } from '../canvas-util';
import { NB_WORD_CLOSE, NB_WORD_OPEN } from 'src/model';

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
        ctx.font = `${fontSize}px MatrixBoldSmallCaps, Times New Roman`;
        ctx.textAlign = 'left';

        const digitList = Array.from(`${value}`);

        if (digitList.length === 1) {
            const digit = digitList[0];
            const digitWidth = ctx.measureText(digit).width;
            const accLeft = edge - digitWidth / 2;

            ctx.fillText(
                digit,
                digit === '1' ? accLeft + 2 * globalScale : accLeft,
                baseline + fontSize,
            );
        } else if (digitList.length === 2) {
            /** Observable behavior: The number "1" in 2-digits pendulum scale (10, 11, 12, 13) stay in the exact same place no matter which is the second digit, so we try to emulate this pattern here. */
            const firstDigit = digitList[0];
            const secondDigit = digitList[1];
            const firstDigitWidth = ctx.measureText(firstDigit).width * 0.825;
            const secondDigitWidth = ctx.measureText(secondDigit).width;
            const accLeft = edge - firstDigitWidth - (firstDigit === '1'
                ? 0
                : firstDigitWidth * 0.1
            );

            ctx.fillText(
                firstDigit,
                accLeft,
                baseline + fontSize,
            );
            ctx.fillText(
                secondDigit,
                accLeft + firstDigitWidth - (firstDigit === '1'
                    ? (secondDigit === '1'
                        ? ctx.measureText('1').width * 0.1
                        : secondDigitWidth * 0.1)
                    : secondDigitWidth * -0.1),
                baseline + fontSize,
            );
        } else {
            let totalWidth = 0;

            digitList.forEach(digit => {
                totalWidth += ctx.measureText(digit).width * (digit === '1' ? 0.7 : 1);
            });
            let accLeft = edge - totalWidth / 2;

            digitList.forEach(digit => {
                ctx.fillText(
                    digit,
                    accLeft,
                    baseline + fontSize,
                );
                accLeft += ctx.measureText(digit).width * (digit === '1' ? 0.7 : 1);
            });
        }
    }
};

export const drawOnFrameText = ({
    ctx,
    txt = '1<st> Edition',
    edge = 99,
    baseline = 1150.93,
    baselineOffset = 0,
    width = 185,
    option = {
        globalScale: 1,
        stroke: false,
    },
}: {
    ctx: CanvasRenderingContext2D | null | undefined,
    txt?: string,
    edge?: number,
    width?: number,
    baseline?: number,
    baselineOffset?: number,
    option?: {
        stroke?: boolean,
        textStyle?: CanvasTextStyle,
        globalScale: number,
    },
}) => {
    if (!ctx) return;

    const {
        stroke = false,
        textStyle,
        globalScale,
    } = option ?? {};
    const ltEscape = '\\<';
    const gtEscape = '\\>';
    const swappedText = txt.replaceAll(ltEscape, NB_WORD_OPEN).replaceAll(gtEscape, NB_WORD_CLOSE);
    /** Currently we are using special treatment for ordinal indicator here, we may need to use a more generic solution in the future. */
    const tokenList = swappedText.split(/(<|>|\d|ª|º)/g);
    const actualEdge = edge * globalScale;
    const actualBaseline = baseline * globalScale;
    const actualBaselineOffset = baselineOffset * globalScale;
    const resetStyle = setTextStyle({
        ctx,
        globalScale,
        ...textStyle,
        ...(textStyle?.shadowColor ? { x: 0, y: 0, blur: 3 } : {}),
    });
    const superTextOffset = 7.4 * globalScale;
    const ordinalIndicatorOffset = -2 * globalScale;
    const availableWidth = width * globalScale;

    let left = actualEdge;
    let superscriptMode = false;
    let contentWidth = 0;
    for (let cnt = 0; cnt < tokenList.length; cnt++) {
        const token = tokenList[cnt];
        if (token === '') continue;
        if (token === '<') {
            superscriptMode = true;
            continue;
        }
        if (token === '>') {
            superscriptMode = false;
            continue;
        }
        const restoredToken = token.replaceAll(NB_WORD_OPEN, '<').replaceAll(NB_WORD_CLOSE, '>');
        if (superscriptMode) {
            ctx.font = `${17.78 * globalScale}px palatino-linotype-bold`;
            contentWidth += ctx.measureText(restoredToken).width;
        } else {
            if (!isNaN(parseInt(restoredToken))) {
                ctx.font = `${23.7 * globalScale}px palatino-linotype-bold`;
                contentWidth += ctx.measureText(restoredToken).width - 2 * globalScale;
            } else if (restoredToken === 'ª' || restoredToken === 'º') {
                ctx.font = `${20.22 * globalScale}px Georgia`;
                contentWidth += ctx.measureText(restoredToken).width;
            } else {
                ctx.font = `${22.22 * globalScale}px palatino-linotype-bold`;
                contentWidth += ctx.measureText(restoredToken).width;
            }
        }
    }

    const xRatio = Math.min(availableWidth / contentWidth, 1);
    ctx.scale(xRatio, 1);
    left = actualEdge / xRatio;
    superscriptMode = false;
    for (let cnt = 0; cnt < tokenList.length; cnt++) {
        const token = tokenList[cnt];
        if (token === '') continue;
        if (token === '<') {
            superscriptMode = true;
            continue;
        }
        if (token === '>') {
            superscriptMode = false;
            continue;
        }
        const restoredToken = token.replaceAll(NB_WORD_OPEN, '<').replaceAll(NB_WORD_CLOSE, '>');
        if (superscriptMode) {
            ctx.font = `${17.78 * globalScale}px palatino-linotype-bold`;
            ctx.fillText(restoredToken, left, actualBaseline - superTextOffset + actualBaselineOffset);
            if (stroke) ctx.strokeText(restoredToken, left, actualBaseline - superTextOffset);
            left += ctx.measureText(restoredToken).width;
        } else {
            if (!isNaN(parseInt(restoredToken))) {
                ctx.font = `${23.7 * globalScale}px palatino-linotype-bold`;
                ctx.fillText(restoredToken, left, actualBaseline + actualBaselineOffset);
                if (stroke) ctx.strokeText(restoredToken, left, actualBaseline);
                left += ctx.measureText(restoredToken).width - 2 * globalScale;
            } else if (restoredToken === 'ª' || restoredToken === 'º') {
                ctx.font = `${20.22 * globalScale}px Georgia`;
                ctx.fillText(restoredToken, left, actualBaseline - ordinalIndicatorOffset + actualBaselineOffset);
                if (stroke) ctx.strokeText(restoredToken, left, actualBaseline - ordinalIndicatorOffset);
                left += ctx.measureText(restoredToken).width;
            } else {
                ctx.font = `${22.22 * globalScale}px palatino-linotype-bold`;
                ctx.fillText(restoredToken, left, actualBaseline + actualBaselineOffset);
                if (stroke) ctx.strokeText(restoredToken, left, actualBaseline);
                left += ctx.measureText(restoredToken).width;
            }
        }
    }
    ctx.resetTransform();
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
    ctx.font = `${withShadow ? 'bold' : ''} ${22 * globalScale}px stone-serif-regular, Times New Roman`;
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