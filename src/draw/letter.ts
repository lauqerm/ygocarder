import {
    ChiisaiRegex,
    ChoonpuRegex,
    HiraganaRegex,
    KatakanaRegex,
    MetricMethod,
    NoSpaceRegex,
    OCGBoxSpacingRatioMap,
    OCGDotRegex,
    OCGIncreasedLevel2WidthRegex,
    OCGIncreasedWidthRegex,
    OCGLastOfLineOffsetMap,
    OCGNumberRegex,
    OCGOffsetMap,
    OCG_REDUCED_AT_END_LINE_RATIO,
    TCGBoxSpacingRatioMap,
    TCGLastOfLineOffsetMap,
    TCGOffsetMap,
    nonBreakableSymbolRegex,
} from 'src/model';

/**
 * Return the width of a letter. This function return true width of a scalable letter, but will return the inverse-scaled width of a non-scalable letter (based on the `xRatio` property). For example:
 *  * Canvas does not scaled: Letter "A" return 50px, while letter "①" (non-scalable) return 50px.
 *  * Canvas scaled down by 0.5: Letter "A" return 50px, while letter "①" (non-scalable) return 100px.
 *
 * Each letter has 3 main values:
 *  * `width`: The width of a character based on font size, for example all kanji with the same font size will have the same width, because each letter is designed within a consistent box.
 *  * `actualBoundWidth`: The width of actual image of a character based on its shape, for example letter of the sokuon "ァ" will have actualBoundingWidth much smaller than the kanji letter "道", even though they have the same font-size (and therefore same width).
 *  * `boundWidth`: It is actualBoundWidth + small padding at left and right so that the letter does not stick closely to each other.
 * 
 * `metricMethod` dictate the ratio and calculation method of a letter, used for different use-cases.
 * 
 * DO NOT apply font weight to the canvas while calling this function, as the result will become inconsistent.
 */
export const getLetterWidth = ({
    ctx,
    letter,
    isLastOfLine = false,
    debug,
    fontStyle,
    xRatio,
    metricMethod = 'standard',
}: {
    ctx: CanvasRenderingContext2D,
    letter: string,
    isLastOfLine?: boolean,
    fontStyle: string,
    xRatio: number,
    metricMethod?: MetricMethod,
    debug?: string,
}) => {
    if (nonBreakableSymbolRegex.test(letter)) return {
        width: 0,
        boundWidth: 0,
    };

    const boxSpacingRatioMap = fontStyle === 'tcg'
        ? TCGBoxSpacingRatioMap
        : OCGBoxSpacingRatioMap;
    const offsetMap = fontStyle === 'tcg'
        ? TCGOffsetMap
        : OCGOffsetMap;
    const lastOfLineOffsetMap = fontStyle === 'tcg'
        ? TCGLastOfLineOffsetMap
        : OCGLastOfLineOffsetMap;
    const metric = ctx.measureText(letter);
    const {
        width,
        actualBoundingBoxLeft,
        actualBoundingBoxRight,
    } = metric;
    const actualBoundWidth = actualBoundingBoxLeft + actualBoundingBoxRight;
    let kerningScaleRatio = 1;
    if (metricMethod === 'name') {
        kerningScaleRatio = 1 + (1 - xRatio) * 8;
    }
    const spacingRatio = metricMethod === 'name' || metricMethod === 'compact' || metricMethod === 'furigana'
            ? 0.046875
            : 0;
    let boundWidth = actualBoundWidth;
    let offsetRatio = (isLastOfLine
        ? lastOfLineOffsetMap[letter]
        : offsetMap[letter]) ?? 0;

    if (fontStyle === 'tcg') {
        let letterBoxSpacing = (boxSpacingRatioMap[letter] ?? 0) * width;

        return {
            width,
            actualBoundWidth,
            boundWidth: width + 2 * letterBoxSpacing,
            metric,
            offsetRatio,
        };
    }

    let letterBoxSpacing = (boxSpacingRatioMap[letter] ?? 0) * width
        + (metricMethod === 'furigana'
            ? 0
            : Math.min(
                width * 0.075,
                Math.max(0.450, width * spacingRatio) * kerningScaleRatio,
            ));
    let letterRatio = 1;
    let endLineRatio = 1;
    let standardMetricRatio = 1.000;
    if (OCGDotRegex.test(letter)) {
        boundWidth = metricMethod === 'furigana' ? actualBoundWidth : actualBoundWidth * (metricMethod === 'creator' ? 1.750 : 2.500);
        standardMetricRatio = 0.600;
    }
    else if (ChoonpuRegex.test(letter)) {
        boundWidth = metricMethod === 'furigana' ? actualBoundWidth : Math.max(actualBoundWidth, width * 0.75);
        letterBoxSpacing = metricMethod === 'furigana' ? 0 : 2;
    }
    else if (ChiisaiRegex.test(letter)) {
        boundWidth = metricMethod === 'furigana' ? actualBoundWidth : Math.max(actualBoundWidth, width * 0.7);
    }
    else if (OCGNumberRegex.test(letter)) {
        boundWidth = width;
    }
    else if (OCGIncreasedLevel2WidthRegex.test(letter)) {
        boundWidth = actualBoundWidth * 2;
    }
    else if (OCGIncreasedWidthRegex.test(letter)) {
        boundWidth = actualBoundWidth * 1.250 * (isLastOfLine ? OCG_REDUCED_AT_END_LINE_RATIO : 1);
    }
    else if (HiraganaRegex.test(letter)) {
        boundWidth = metricMethod === 'furigana' ? actualBoundWidth : Math.max(actualBoundWidth, width * 0.750);
    }
    else if (KatakanaRegex.test(letter)) {
        boundWidth = Math.max(actualBoundWidth, width * 0.690)
            * (metricMethod === 'creator' ? 0.97500 : 1.000);
    }
    else if (NoSpaceRegex.test(letter)) {
        boundWidth = width;
        letterBoxSpacing = 0;
    }
    else {
        boundWidth = metricMethod === 'furigana' ? actualBoundWidth : Math.max(actualBoundWidth, width * 0.750);
    }

    const actualLetterWidth = width * letterRatio * endLineRatio;

    if (debug) console.info(`getLetterWidth ${debug}`, letter, metric, letterRatio, endLineRatio, '|', actualLetterWidth);
    return {
        width,
        actualBoundWidth,
        boundWidth: metricMethod === 'standard'
            ? width * standardMetricRatio
            : boundWidth + letterBoxSpacing * 2,
        metric,
        offsetRatio,
    };
};

export type TextDrawer = (props: {
    ctx: CanvasRenderingContext2D,
    letter: string,
    scaledEdge: number,
    scaledBaseline: number,
}) => void;
/** 
 * Draw the letter with a provided worker. It take true edge as paramter, but will pass scaled edge to the worker.
 */
export const drawLetter = ({
    ctx,
    baseline,
    edge,
    letter,
    xRatio,
    letterMetric,
    textDrawer,
}: {
    ctx: CanvasRenderingContext2D,
    letter: string,
    letterMetric?: ReturnType<typeof getLetterWidth>,
    edge: number,
    baseline: number,
    xRatio: number,
    textDrawer?: TextDrawer,
}) => {
    const {
        boundWidth,
        metric = ctx.measureText(letter),
        offsetRatio = 0,
    } = letterMetric ?? {};
    const letterWidth = metric.width * xRatio;
    const scaledBoundingWidth = boundWidth ? boundWidth * xRatio : letterWidth;
    const worker = textDrawer ?? (({
        ctx,
        letter,
        scaledBaseline,
        scaledEdge,
    }) => {
        ctx.fillText(letter, scaledEdge, scaledBaseline);
    });

    const boundingOffset = (letterWidth - scaledBoundingWidth) / 2;
    const externalOffset = scaledBoundingWidth * offsetRatio;
    worker({
        ctx,
        letter,
        scaledEdge: edge / xRatio - boundingOffset - externalOffset,
        scaledBaseline: baseline,
    });
};