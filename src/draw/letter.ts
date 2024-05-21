import {
    CHIISAI_RATIO,
    CHOONPU_RATIO,
    ChiisaiRegex,
    ChoonpuRegex,
    HIRAGANA_RATIO,
    HiraganaRegex,
    KATAKANA_RATIO,
    KatakanaRegex,
    OCGDotRegex,
    OCGIncreasedWidthRegex,
    OCGNumberRegex,
    OCGReducedWidthRegex,
    OCG_DOT_RATIO,
    OCG_INCREASED_WIDTH_RATIO,
    OCG_LETTER_RATIO,
    OCG_NUMBER_RATIO,
    OCG_REDUCED_AT_END_LINE_RATIO,
    OCG_REDUCED_WIDTH_RATIO,
} from 'src/model';

/** Trả về độ dài thực của letter (không phụ thuộc vào scale), nếu thông số `xRatio` được truyền, các ký tự constant width như bullet
 * sẽ được phóng to lên tương ứng.
 */
export const getLetterWidth = ({
    ctx,
    letter,
    lastOfLine = false,
    debug,
    format,
}: {
    ctx: CanvasRenderingContext2D,
    letter: string,
    lastOfLine?: boolean,
    format: string,
    debug?: string,
}) => {
    if (/⦉|⦊/.test(letter)) return 0;
    // if (letter === '竜') return 57;
    // if (letter === 'ガ') return 60;
    // if (letter === 'ド') return 50;
    // if (letter === 'ン') return 48;
    // if (letter === 'ラ') return 58;
    // if (letter === '白') return 55;
    // if (letter === 'き') return 59;
    // if (letter === '森') return 58;
    // if (letter === 'の') return 53;
    // if (letter === 'ア') return 49;
    // if (letter === 'ス') return 55;

    const metric = ctx.measureText(letter);
    // const trueLetterWidth = metric.actualBoundingBoxRight + metric.actualBoundingBoxLeft;
    const trueLetterWidth = metric.width;
    if (format === 'tcg') return trueLetterWidth;

    let letterRatio = OCG_LETTER_RATIO;
    let endLineRatio = 1;
    if (OCGDotRegex.test(letter)) letterRatio = OCG_DOT_RATIO;
    else if (ChoonpuRegex.test(letter)) letterRatio = CHOONPU_RATIO;
    else if (ChiisaiRegex.test(letter)) letterRatio = CHIISAI_RATIO;
    else if (OCGNumberRegex.test(letter)) letterRatio = OCG_NUMBER_RATIO;
    else if (OCGReducedWidthRegex.test(letter)) {
        /** Dấu chấm ở cuối đoạn sẽ ngắn hơn bình thường nhiều, về lý thuyết việc này sẽ gây ra sai lệch giữa câu văn tính toán và thực tế.
         * Nhưng thực tế sai lệch này quá nhỏ và ta chia phần thừa này thành additionalSpace.
         */
        letterRatio = OCG_REDUCED_WIDTH_RATIO;
        endLineRatio = lastOfLine ? OCG_REDUCED_AT_END_LINE_RATIO : 1;
    }
    else if (OCGIncreasedWidthRegex.test(letter)) {
        /** Trường hợp tương tự dấu chấm */
        letterRatio = OCG_INCREASED_WIDTH_RATIO;
        endLineRatio = lastOfLine ? OCG_REDUCED_AT_END_LINE_RATIO : 1;
    }
    else if (HiraganaRegex.test(letter)) letterRatio = HIRAGANA_RATIO;
    else if (KatakanaRegex.test(letter)) letterRatio = KATAKANA_RATIO;
    else letterRatio = OCG_LETTER_RATIO;

    const actualLetterWidth = trueLetterWidth * letterRatio * endLineRatio;

    if (debug) console.info(`getLetterWidth ${debug}`, letter, metric, trueLetterWidth, letterRatio, endLineRatio, '|', actualLetterWidth);
    return actualLetterWidth;
};

export type TextDrawer = (props: {
    ctx: CanvasRenderingContext2D,
    letter: string,
    scaledEdge: number,
    scaledBaseline: number,
}) => void;
/** Vẽ ký tự lẻ, hàm này chịu ảnh hưởng bởi transform ratio. */
export const drawLetter = (
    ctx: CanvasRenderingContext2D,
    letter: string,
    edge: number,
    baseline: number,
    xRatio: number,
    textDrawer?: TextDrawer,
) => {
    const letterWidth = ctx.measureText(letter).width * xRatio;
    const defaultTextDrawer: TextDrawer = ({
        ctx,
        letter,
        scaledBaseline,
        scaledEdge,
    }) => {
        ctx.fillText(letter, scaledEdge, scaledBaseline);
    };
    const worker = textDrawer ?? defaultTextDrawer;
    if (OCGDotRegex.test(letter)) {
        worker({ ctx, letter, scaledEdge: edge / xRatio - letterWidth * (1 - OCG_DOT_RATIO) / 2, scaledBaseline: baseline });

        return letterWidth * OCG_DOT_RATIO;
    }
    if (ChoonpuRegex.test(letter)) {
        worker({ ctx, letter, scaledEdge: edge / xRatio - letterWidth * (1 - CHOONPU_RATIO) / 2, scaledBaseline: baseline });

        return letterWidth * CHOONPU_RATIO;
    }
    if (ChiisaiRegex.test(letter)) {
        worker({ ctx, letter, scaledEdge: edge / xRatio - letterWidth * (1 - CHIISAI_RATIO) / 2, scaledBaseline: baseline });

        return letterWidth * CHIISAI_RATIO;
    }
    if (OCGNumberRegex.test(letter)) {
        worker({ ctx, letter, scaledEdge: edge / xRatio - letterWidth * (1 - OCG_NUMBER_RATIO) / 2, scaledBaseline: baseline });

        return letterWidth * OCG_NUMBER_RATIO;
    }
    /** Theo lý thuyết ta cần xử lý case dấu chấm / phẩy ở cuối dòng, nhưng khi vẽ ở cuối dòng thì thông số này được reset ở dòng mới.
     * Nên không xử lý gì thêm
     */
    if (OCGReducedWidthRegex.test(letter)) {
        worker({ ctx, letter, scaledEdge: edge / xRatio, scaledBaseline: baseline });

        /** Tương tự trường hợp dấu chấm */
        return letterWidth * OCG_REDUCED_WIDTH_RATIO;
    }
    if (OCGIncreasedWidthRegex.test(letter)) {
        worker({ ctx, letter, scaledEdge: edge / xRatio - letterWidth * (1 - OCG_INCREASED_WIDTH_RATIO) / 2, scaledBaseline: baseline });

        return letterWidth * OCG_INCREASED_WIDTH_RATIO;
    }
    if (HiraganaRegex.test(letter)) {
        worker({ ctx, letter, scaledEdge: edge / xRatio - letterWidth * (1 - HIRAGANA_RATIO) / 2, scaledBaseline: baseline });

        return letterWidth * HIRAGANA_RATIO;
    }
    if (KatakanaRegex.test(letter)) {
        worker({ ctx, letter, scaledEdge: edge / xRatio - letterWidth * (1 - KATAKANA_RATIO) / 2, scaledBaseline: baseline });

        return letterWidth * KATAKANA_RATIO;
    }

    worker({ ctx, letter, scaledEdge: edge / xRatio - letterWidth * (1 - OCG_LETTER_RATIO) / 2, scaledBaseline: baseline });

    return letterWidth * OCG_LETTER_RATIO;
};