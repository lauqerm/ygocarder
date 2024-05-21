import {
    BREAKABLE_LETTER,
    DEFAULT_TEXT_GAP,
    DefaultFontSizeData,
    FontData,
    FontSizeData,
} from 'src/model';
import { createFontGetter } from 'src/util';

export const tokenizeText = (text: string, keepControlCharacter = false) => {
    const regex = keepControlCharacter
        ? new RegExp(`([${BREAKABLE_LETTER}])|(⦉[\\w\\W]+?⦊)|(.+?)`)
        : new RegExp(`([${BREAKABLE_LETTER}])|⦉([\\w\\W]+?)⦊|(.+?)`);

    return text.split(regex).filter(token => token != null && token !== '');
};

export const getTextWorker = (
    ctx: CanvasRenderingContext2D,
    fontData: FontData,
    fontSizeData: FontSizeData,
    fontController: ReturnType<typeof createFontGetter>,
) => {
    const { fontSize, overheadFontRatio = DefaultFontSizeData.overheadFontRatio } = fontSizeData;
    const { ordinalFont, symbolFont, symbolFontRatio } = fontData;

    const withSymbolFont = <T = number>(worker: (edge: number) => T, edge = 0) => {
        const { family: tempFamily, size: originalSize } = fontController.getFontInfo();
        const symbolFontSize = fontSize * symbolFontRatio;
        ctx.font = fontController.setFamily(symbolFont).setSize(symbolFontSize).getFont();
        const returnValue = worker(edge);
        ctx.font = fontController.setFamily(tempFamily).setSize(originalSize).getFont();

        return returnValue;
    };
    const withOrdinalFont = <T = number>(worker: (edge: number) => T, edge = 0) => {
        const { family: tempFamily, size: originalSize } = fontController.getFontInfo();
        const smallSize = fontSize / 1.1;
        ctx.font = fontController.setFamily(ordinalFont).setSize(smallSize).getFont();
        const returnValue = worker(edge);
        ctx.font = fontController.setFamily(tempFamily).setSize(originalSize).getFont();

        return returnValue;
    };
    const withUncompressText = <T = number>(worker: (edge: number) => T, edge = 0, xRatio = 1, yRatio = 1) => {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        const returnValue = worker(edge);
        ctx.scale(xRatio, yRatio);

        return returnValue;
    };
    const withFurigana = <T = number>(worker: (edge: number) => T, edge = 0) => {
        const { size: originalSize } = fontController.getFontInfo();
        const smallSize = fontSize * overheadFontRatio;
        ctx.font = fontController.setSize(smallSize).getFont();
        const returnValue = worker(edge);
        ctx.font = fontController.setSize(originalSize).getFont();

        return returnValue;
    };
    const withSmallerText = <T = number>(worker: (edge: number, baseline: number, yRatio: number) => T, edge = 0, baseline = 0, yRatio = 1) => {
        ctx.scale(yRatio, yRatio);
        const returnValue = worker(edge, baseline, yRatio);
        ctx.scale(1 / yRatio, 1 / yRatio);

        return returnValue;
    };
    const withLargerText = <T = number>(worker: (edge: number, baseline: number, fontRatio: number) => T, edge = 0, baseline = 0, fontRatio = 1) => {
        const { size: originalSize } = fontController.getFontInfo();
        const largeFontSize = fontSize * fontRatio;
        ctx.font = fontController.setSize(largeFontSize).getFont();
        const returnValue = worker(edge, baseline, fontRatio);
        ctx.font = fontController.setSize(originalSize).getFont();

        return returnValue;
    };

    return {
        withLargerText,
        withSmallerText,
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
    ctx.arc(edge + bulletRadius, baseline - bulletRadius - 1, bulletRadius, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
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