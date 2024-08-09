import {
    ChiisaiRegex,
    ChoonpuRegex,
    HiraganaRegex,
    KatakanaRegex,
    MetricMethod,
    OCGDotRegex,
    OCGIncreasedWidthRegex,
    OCGNumberRegex,
    OCGOffsetMap,
    OCGIncreasedLevel2WidthRegex,
    OCG_LETTER_RATIO,
    OCG_REDUCED_AT_END_LINE_RATIO,
    OCGLastOfLineOffsetMap,
    NoSpaceRegex,
} from 'src/model';

/** Trả về độ dài thực của letter (không phụ thuộc vào scale), nếu thông số `xRatio` được truyền, các ký tự constant width như bullet
 * sẽ được phóng to lên tương ứng.
 * 
 * BOLD font weight WILL make this function run incorrectly
 */
export const getLetterWidth = ({
    ctx,
    letter,
    lastOfLine = false,
    debug,
    format,
    xRatio,
    metricMethod = 'standard',
}: {
    ctx: CanvasRenderingContext2D,
    letter: string,
    lastOfLine?: boolean,
    format: string,
    xRatio: number,
    metricMethod?: MetricMethod,
    debug?: string,
}) => {
    if (/⦉|⦊/.test(letter)) return {
        width: 0,
        boundWidth: 0,
    };

    // Compact metricMethod
    // Width = (bound width) + spacing * 2
    // Bound width không được nhỏ hơn min bound width, tính theo tỷ lệ % ứng với từng ký tự

    const metric = ctx.measureText(letter);
    const {
        width,
        actualBoundingBoxLeft,
        actualBoundingBoxRight,
    } = metric;
    const actualBoundWidth = actualBoundingBoxLeft + actualBoundingBoxRight;
    // const boundRatio = actualBoundWidth / width;
    let kerningScaleRatio = 1;
    if (metricMethod === 'name') {
        kerningScaleRatio = 1 + (1 - xRatio) * 8;
    }
    const spacingRatio = metricMethod === 'name' || metricMethod === 'compact' || metricMethod === 'furigana'
            ? 0.046875
            : 0;
    let letterBoxSpacing = metricMethod === 'furigana'
        ? 0
        : Math.min(
            width * 0.075,
            Math.max(0.450, width * spacingRatio) * kerningScaleRatio,
        );
    let boundWidth = actualBoundWidth;
    let offsetRatio = (lastOfLine
        ? OCGLastOfLineOffsetMap[letter]
        : OCGOffsetMap[letter]) ?? 0;

    if (format === 'tcg') return {
        width,
        actualBoundWidth,
        boundWidth: width,
        metric,
        offsetRatio,
    };

    let letterRatio = OCG_LETTER_RATIO;
    let endLineRatio = 1;
    let standardMetricRatio = 1.000;
    if (OCGDotRegex.test(letter)) {
        boundWidth = metricMethod === 'furigana' ? actualBoundWidth : actualBoundWidth * (metricMethod === 'creator' ? 1.750 : 2.500);
        standardMetricRatio = 0.600;
    }
    else if (ChoonpuRegex.test(letter)) {
        boundWidth = metricMethod === 'furigana' ? actualBoundWidth : Math.max(actualBoundWidth, width * 0.75);
        letterBoxSpacing = 2;
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
        boundWidth = actualBoundWidth * 1.250 * (lastOfLine ? OCG_REDUCED_AT_END_LINE_RATIO : 1);
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
/** Vẽ ký tự lẻ, hàm này chịu ảnh hưởng bởi transform ratio. */
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