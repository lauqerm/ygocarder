import {
    BREAKABLE_LETTER,
    FontData,
    FontSize,
    CHIISAI_REGEX,
    CHIISAI_RATIO,
    CHOONPU_RATIO,
    CHOONPU_REGEX,
    HIRAGANA_RATIO,
    HIRAGANA_REGEX,
    OCG_LETTER_RATIO,
    KATAKANA_RATIO,
    KATAKANA_REGEX,
    OCG_NUMBER_RATIO,
    OCG_DOT_RATIO,
    OCG_DOT_REGEX,
    OCG_REDUCED_WIDTH_RATIO,
    OCG_REDUCED_WIDTH_REGEX,
    OCG_INCREASED_WIDTH_RATIO,
    OCG_INCREASED_WIDTH_REGEX,
    OCG_NUMBER_REGEX,
    OCG_REDUCED_AT_LAST_SENTENCE_RATIO,
} from 'src/model';

export const tokenizeText = (text: string, keepControlCharacter = false) => {
    const regex = keepControlCharacter
        ? new RegExp(`([${BREAKABLE_LETTER}])|(⦉[\\w\\W]+?⦊)|(.+?)`)
        : new RegExp(`([${BREAKABLE_LETTER}])|⦉([\\w\\W]+?)⦊|(.+?)`);

    return text.split(regex).filter(token => token != null && token !== '');
};

export const createFontGetter = () => {
    let weight = '';
    let style = '';
    let size: `${number}px` = '10px';
    let family = 'Arial';

    return {
        getFont: () => [style, weight, size, family].filter(part => part !== '').join(' '),
        getFontInfo: () => ({ style, size, family }),
        setWeight(nextWeight: '' | 'bold') {
            weight = nextWeight;
            return this;
        },
        setStyle(nextStyle: '' | 'italic') {
            style = nextStyle;
            return this;
        },
        setSize(nextSize: number | `${number}px`) {
            size = typeof nextSize === 'number' ? `${nextSize}px` : nextSize;
            return this;
        },
        setFamily(nextFamily: string) {
            family = nextFamily;
            return this;
        },
    };
};

export const getTextWorker = (
    ctx: CanvasRenderingContext2D,
    fontData: FontData,
    fontSizeData: FontSize,
    fontController: ReturnType<typeof createFontGetter>,
) => {
    const { fontSize } = fontSizeData;
    const { ordinalFont, symbolFont } = fontData;

    const withSymbolFont = <T = number>(worker: (edge: number) => T, edge = 0) => {
        const { family: tempFamily, size: tempSize } = fontController.getFontInfo();
        const largeSize = fontSize * 1.15;
        ctx.font = fontController.setFamily(symbolFont).setSize(largeSize).getFont();
        const returnValue = worker(edge);
        ctx.font = fontController.setFamily(tempFamily).setSize(tempSize).getFont();

        return returnValue;
    };
    const withOrdinalFont = <T = number>(worker: (edge: number) => T, edge = 0) => {
        const { family: tempFamily, size: tempSize } = fontController.getFontInfo();
        const smallSize = fontSize / 1.1;
        ctx.font = fontController.setFamily(ordinalFont).setSize(smallSize).getFont();
        const returnValue = worker(edge);
        ctx.font = fontController.setFamily(tempFamily).setSize(tempSize).getFont();

        return returnValue;
    };
    const withUncompressText = <T = number>(worker: (edge: number) => T, edge = 0, xRatio = 1, yRatio = 1) => {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        const returnValue = worker(edge);
        ctx.scale(xRatio, yRatio);

        return returnValue;
    };
    const withFurigana = <T = number>(worker: (edge: number) => T, edge = 0) => {
        const { size: tempSize } = fontController.getFontInfo();
        const smallSize = fontSize * 0.5;
        ctx.font = fontController.setSize(smallSize).getFont();
        const returnValue = worker(edge);
        ctx.font = fontController.setSize(tempSize).getFont();

        return returnValue;
    };

    return {
        withSymbolFont,
        withOrdinalFont,
        withUncompressText,
        withFurigana,
    };
};

/** spaceAfter là khoảng trắng giữa bullet và ký tự kế tiếp, OCG không có khoảng trắng */
export const drawBullet = (ctx: CanvasRenderingContext2D, edge: number, baseline: number, width: number, spaceAfter: number) => {
    const bulletRadius = (width - spaceAfter) / 2;
    ctx.beginPath();
    ctx.arc(edge + bulletRadius, baseline - bulletRadius, bulletRadius, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
};

/** Vẽ một vệt thẳng để làm mốc, bị ảnh hưởng bởi xRatio */
export const drawMarker = ({
    ctx,
    color, width,
    offset = Math.random(),
    trueEdge, baseline,
    xRatio,
}: {
    ctx: CanvasRenderingContext2D,
    color: string, width: number,
    offset?: number,
    trueEdge: number, baseline: number,
    xRatio: number,
}) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.rect(trueEdge / xRatio, baseline + 1 + offset * 5, width / xRatio, 2);
    ctx.fill();
    ctx.fillStyle = 'black';
};

const letterWidthCacheMap: Record<string, Record<string, Record<string, number>>> = {
    ocg: {
        lastOfLine: {},
        normal: {},
    },
    tcg: {
        lastOfLine: {},
        normal: {},
    },
};
const trueLetterWidthCacheMap = letterWidthCacheMap['tcg']['normal'];
export const getTrueLetterWidth = ({
    ctx,
    letter,
}: {
    ctx: CanvasRenderingContext2D,
    letter: string,
}) => {
    if (trueLetterWidthCacheMap[letter]) return trueLetterWidthCacheMap[letter];

    const trueLetterWidth = ctx.measureText(letter).width;
    trueLetterWidthCacheMap[letter] = trueLetterWidth;

    return trueLetterWidth;
};
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
    const cacheType = lastOfLine ? 'lastOfLine' : 'normal';

    if (letterWidthCacheMap[format][cacheType][letter]) return letterWidthCacheMap[format][cacheType][letter];

    const trueLetterWidth = getTrueLetterWidth({ ctx, letter });
    if (format === 'tcg') return trueLetterWidth;

    let letterRatio = OCG_LETTER_RATIO;
    let endLineRatio = 1;
    if (OCG_DOT_REGEX.test(letter)) letterRatio = OCG_DOT_RATIO;
    else if (CHOONPU_REGEX.test(letter)) letterRatio = CHOONPU_RATIO;
    else if (CHIISAI_REGEX.test(letter)) letterRatio = CHIISAI_RATIO;
    else if (OCG_NUMBER_REGEX.test(letter)) letterRatio = OCG_NUMBER_RATIO;
    else if (OCG_REDUCED_WIDTH_REGEX.test(letter)) {
        /** Dấu chấm ở cuối đoạn sẽ ngắn hơn bình thường nhiều, về lý thuyết việc này sẽ gây ra sai lệch giữa câu văn tính toán và thực tế.
         * Nhưng thực tế sai lệch này quá nhỏ và ta chia phần thừa này thành additionalSpace.
         */
        letterRatio = OCG_REDUCED_WIDTH_RATIO;
        endLineRatio = lastOfLine ? OCG_REDUCED_AT_LAST_SENTENCE_RATIO : 1;
    }
    else if (OCG_INCREASED_WIDTH_REGEX.test(letter)) {
        /** Trường hợp tương tự dấu chấm */
        letterRatio = OCG_INCREASED_WIDTH_RATIO;
        endLineRatio = lastOfLine ? OCG_REDUCED_AT_LAST_SENTENCE_RATIO : 1;
    }
    else if (HIRAGANA_REGEX.test(letter)) letterRatio = HIRAGANA_RATIO;
    else if (KATAKANA_REGEX.test(letter)) letterRatio = KATAKANA_RATIO;
    else letterRatio = OCG_LETTER_RATIO;

    const actualLetterWidth = trueLetterWidth * letterRatio * endLineRatio;

    letterWidthCacheMap[format][cacheType][letter] = actualLetterWidth;
    if (debug) console.info(`getLetterWidth ${debug}`, letter, trueLetterWidth, letterRatio, endLineRatio, '|', actualLetterWidth);
    return actualLetterWidth;
};