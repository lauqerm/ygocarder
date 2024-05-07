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
    DEFAULT_TEXT_GAP,
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

/**
 * Trả về độ dài biểu kiến của phần head của ruby (không phụ thuộc scale), lượng chữ càng nhiều thì càng khít lại. ("PenduLuMoon" OCG)
 * * Ruby quá dài có thể chiếm dụng không gian hai bên của nó, nếu những bên này không có ruby hoặc ruby ít.
 * * Việc chiếm dụng không thể tích lũy, nghĩa là nếu một từ có ruby dài chiếm không gian phía bên phải, từ bên phải đó nếu có ruby không
 * được chiếm dùng từ từ bên phải kế tiếp của nó.
 * * Từ bên trái có thể được chiếm dụng, nhưng không thể bị đẩy dịch. ("Joyous Melffys" OCG)
 * * Furigana có thể tràn ra rìa trái để foot text canh chuẩn lề ("Beyond the Pendulum" OCG)
 * * Nếu token hiện tại có gap phải đủ lớn, footText của token kế tiếp sẽ dịch qua bên trái một khoảng để rebalance lại cự ly giữa các footText với nhau, headText vẫn giữ nguyên ("Beyond the Pendulum" OCG)
 * */
export const getHeadTextWidth = ({
    footText, footTextWidth,
    headText, headTextLetterWidth,
    debug,
}: {
    headText: string,
    headTextLetterWidth: number,
    footText: string,
    footTextWidth: number,
    debug?: string,
}) => {
    const condenseHeadText = headTextLetterWidth / footTextWidth;
    const alignCenterLetterSpacing = condenseHeadText <= 2.25 ? -1.5 : -4;
    const alignCenterHeadTextWidth = headTextLetterWidth + alignCenterLetterSpacing * (headText.length - 1);
    const alignSpaceAroundLetterSpacing = (footTextWidth - headTextLetterWidth) / headText.length;
    const alignSpaceAroundHeadTextWidth = headTextLetterWidth + alignSpaceAroundLetterSpacing * (headText.length - 1);
    const alignment = footText.length === 1 || alignCenterHeadTextWidth >= footTextWidth
        ? 'center' as const
        : 'space-around' as const;
    const letterSpacing = alignment === 'center' ? alignCenterLetterSpacing : alignSpaceAroundLetterSpacing;
    const headTextWidth = alignment === 'center' ? alignCenterHeadTextWidth : alignSpaceAroundHeadTextWidth;
    const halfGap = Math.max(
        DEFAULT_TEXT_GAP,
        alignment === 'center'
            ? (alignCenterHeadTextWidth - footTextWidth) / 2
            : alignSpaceAroundLetterSpacing / -2
    );

    if (debug) console.info(
        `getHeadTextWidth ${debug}`,
        alignment,
        letterSpacing,
        headText, headTextWidth,
        footText, footTextWidth,
        halfGap,
    );
    return {
        letterSpacing,
        headTextWidth,
        /**
         * Canh giữa nếu footText có 1 ký tự hoặc nếu headText canh giữa dài hơn footText, space-around trong trường hợp còn lại
         * * `[gap][letter + spacing][gap]`
         * * `[half-gap][letter][gap][letter][half-gap]`
         */
        alignment,
        /** * Gap dương, furigana chiếm thêm chỗ
         * * Gap âm, furigana có thể nhường chỗ
         */
        halfGap,
    };
};

/**
 * Tính lại phần chiều dài bên trái (tính từ footText) do ảnh hưởng bởi gap phải.
 * * Nếu prevGap dương (đẩy phải)
 *    * Nếu curGap dương (đẩy trái): Tất cả gap thành chiều dài bổ sung
 *    * Nếu curGap âm (hút trái): Chiều dài bổ sung bị giảm đi, nhưng không quá phần chiều dài mà previousGap có thể cho
 * * Nếu prevGap âm (hút phải)
 *    * Nếu curGap dương (đẩy trái): curGap lấy hết cỡ từ prevGap, nhưng không quá những gì prevGap có nhận
 *    * Nếu curGap âm (hút trái): Hai gap không can thiệp nhau, chiều dài bổ sung là 0
 */
export const getExtraLeftWidth = (prevGap: number, curGap: number) => {
    return prevGap >= 0
        ? curGap >= 0
            ? curGap
            : Math.max(curGap, prevGap * -1)
        : curGap >= 0
            ? curGap + Math.max(curGap * -1, prevGap)
            : 0;
};

/**
 * Tính phần chiều dài bên trái đã mất (nếu có) do ảnh hưởng bởi gap phải.
 */
export const getExtraLeftOffset = (prevGap: number, curGap: number) => {
    if ((prevGap >= 0 && curGap >= 0) || (prevGap <= 0 && curGap <= 0)) return 0;
    const leftExtraWidth = getExtraLeftWidth(prevGap, curGap);

    if (prevGap <= 0 && curGap >= 0) return curGap - leftExtraWidth;
    return -1 * leftExtraWidth;
};