import {
    BREAKABLE_LETTER,
    DefaultFontSizeData,
    FontData,
    FontSizeData,
} from 'src/model';
import { createFontGetter } from 'src/util';

export const tokenizeText = (text: string, keepControlCharacter = false) => {
    const regex = keepControlCharacter
        ? new RegExp(`([${BREAKABLE_LETTER}])|(⦉[\\w\\W]+?⦊)|(.+?)`)
        : new RegExp(`([${BREAKABLE_LETTER}])|⦉([\\w\\W]+?)⦊|(.+?)`);

    return text
        .split(regex)
        .filter(token => token != null && token !== '');
};

export const getTextWorker = (
    ctx: CanvasRenderingContext2D,
    fontData: FontData,
    fontSizeData: FontSizeData,
    fontController: ReturnType<typeof createFontGetter>,
) => {
    const {
        fontSize,
        overheadFontRatio = DefaultFontSizeData.overheadFontRatio,
    } = fontSizeData;
    const {
        font,
        ordinalFont,
        symbolFont,
        symbolFontRatio,
        numberFont = font,
        numberFontRatio = 1,
    } = fontData;

    let numberFontMemory = fontController.getFontInfo();
    const applyNumberFont = () => {
        numberFontMemory = fontController.getFontInfo();
        ctx.font = fontController.setFamily(numberFont).setSize(fontSize * numberFontRatio).getFont();
    };
    const stopApplyNumberFont = () => {
        ctx.font = fontController
            .setFamily(numberFontMemory.family)
            .setSize(numberFontMemory.size)
            .getFont();
    };
    let symbolFontMemory = fontController.getFontInfo();
    const applySymbolFont = () => {
        symbolFontMemory = fontController.getFontInfo();
        ctx.font = fontController.setFamily(symbolFont).setSize(fontSize * symbolFontRatio).getFont();
    };
    const stopApplySymbolFont = () => {
        ctx.font = fontController
            .setFamily(symbolFontMemory.family)
            .setSize(symbolFontMemory.size)
            .getFont();
    };
    let ordinalFontMemory = fontController.getFontInfo();
    const applyOrdinalFont = () => {
        ordinalFontMemory = fontController.getFontInfo();
        ctx.font = fontController.setFamily(ordinalFont).setSize(fontSize / 1.1).getFont();
    };
    const stopApplyOrdinalFont = () => {
        ctx.font = fontController
            .setFamily(ordinalFontMemory.family)
            .setSize(ordinalFontMemory.size)
            .getFont();
    };
    const resetScale = () => {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    };
    const applyAsymmetricScale = (xRatio = 1, yRatio = 1) => {
        ctx.scale(xRatio, yRatio);
    };
    let furiganaFontMemory = fontController.getFontInfo();
    const applyFuriganaFont = () => {
        furiganaFontMemory = fontController.getFontInfo();
        ctx.font = fontController.setSize(fontSize * overheadFontRatio).getFont();
    };
    const stopApplyFuriganaFont = () => {
        ctx.font = fontController
            .setSize(furiganaFontMemory.size)
            .getFont();
    };
    const applyScale = (fontRatio = 1) => {
        ctx.scale(fontRatio, fontRatio);
    };
    const reverseScale = (fontRatio = 1) => {
        ctx.scale(1 / fontRatio, 1 / fontRatio);
    };
    let largerTextFontMemory = fontController.getFontInfo();
    const applyLargerText = (fontRatio = 1) => {
        largerTextFontMemory = fontController.getFontInfo();
        ctx.font = fontController.setSize(fontSize * fontRatio).getFont();
    };
    const stopApplyLargerText = () => {
        ctx.font = fontController.setSize(largerTextFontMemory.size).getFont();
    };

    return {
        applyNumberFont, stopApplyNumberFont,
        applyLargerText, stopApplyLargerText,
        applySymbolFont, stopApplySymbolFont,
        applyOrdinalFont, stopApplyOrdinalFont,
        applyFuriganaFont, stopApplyFuriganaFont,

        applyAsymmetricScale,
        applyScale,
        resetScale,
        reverseScale,
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
    overheadTextGap,
    overheadTextSpacing,
    debug,
}: {
    headText: string,
    headTextLetterWidth: number,
    footText: string,
    footTextWidth: number,
    overheadTextGap: number,
    overheadTextSpacing: number,
    debug?: string,
}) => {
    const condenseHeadText = headTextLetterWidth / footTextWidth;
    let alignCenterLetterSpacing = overheadTextSpacing;
    if (condenseHeadText <= 1) alignCenterLetterSpacing = overheadTextSpacing;
    else if (condenseHeadText <= 2.25) alignCenterLetterSpacing = overheadTextSpacing * 4/3;
    else alignCenterLetterSpacing = overheadTextSpacing * 5/3;

    const alignCenterHeadTextWidth = headTextLetterWidth + alignCenterLetterSpacing * (headText.length - 1);
    const alignSpaceAroundLetterSpacing = (footTextWidth - headTextLetterWidth) / headText.length;
    const alignSpaceAroundHeadTextWidth = headTextLetterWidth + alignSpaceAroundLetterSpacing * (headText.length - 1);
    const alignment = footText.length === 1 || alignCenterHeadTextWidth >= footTextWidth
        ? 'center' as const
        : 'space-around' as const;
    const letterSpacing = alignment === 'center' ? alignCenterLetterSpacing : alignSpaceAroundLetterSpacing;
    const headTextWidth = alignment === 'center' ? alignCenterHeadTextWidth : alignSpaceAroundHeadTextWidth;
    const halfGap = Math.max(
        overheadTextGap,
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