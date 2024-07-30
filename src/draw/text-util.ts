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
        furiganaFont,
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
    const applyFuriganaFont = (bold = false) => {
        furiganaFontMemory = fontController.getFontInfo();
        ctx.font = fontController.setFamily(furiganaFont).setWeight(bold ? 'bold' : '').setSize(fontSize * overheadFontRatio).getFont();
    };
    const stopApplyFuriganaFont = () => {
        ctx.font = fontController
            .setFamily(furiganaFontMemory.family)
            .setWeight(furiganaFontMemory.weight)
            .setSize(furiganaFontMemory.size)
            .getFont();
    };
    const applyScale = (xScale = 1, yScale = xScale) => {
        ctx.scale(xScale, yScale);
    };
    const reverseScale = (scaleValue = 1) => {
        ctx.scale(1 / scaleValue, 1 / scaleValue);
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
 * Trả về độ dài biểu kiến của phần head của ruby (không phụ thuộc scale).
 * * Ruby quá dài có thể chiếm dụng không gian hai bên của nó, nếu những bên này không có ruby hoặc ruby ít.
 * * Nếu token hiện tại có gap phải đủ lớn, footText của token kế tiếp sẽ dịch qua bên trái một khoảng để rebalance lại cự ly giữa các footText với nhau, headText vẫn giữ nguyên ("Beyond the Pendulum" OCG)
 * * Lượng chữ càng nhiều thì cự ly giữa các chữ càng khít lại. ("PenduLuMoon" OCG)
 * * Từ bên trái có thể được chiếm dụng, nhưng không thể bị đẩy dịch. ("Joyous Melffys" OCG)
 * * Furigana có thể tràn ra rìa trái để foot text canh chuẩn lề. ("Beyond the Pendulum" OCG)
 * * Furigana không bị nén. ("Recette de Poisson (Fish Recipe)" OCG)
 * * Furigana không thể vượt qua các ký tự fixed width như bullet, ordinal. ("Pendulum Dimension" OCG)
 * */
export const getHeadTextWidth = ({
    footText, footTextWidth,
    headText, headTextLetterWidth,
    overheadTextGap,
    overheadTextSpacing,
    gapPadding,
    debug,
}: {
    headText: string,
    headTextLetterWidth: number,
    footText: string,
    footTextWidth: number,
    overheadTextGap: number,
    overheadTextSpacing: number,
    gapPadding: number,
    debug?: string,
}) => {
    const noHeadText = headText.length === 0;
    const condenseHeadText = headTextLetterWidth / footTextWidth;
    let alignCenterLetterSpacing = overheadTextSpacing;
    if (condenseHeadText <= 1) alignCenterLetterSpacing = overheadTextSpacing;
    else if (condenseHeadText <= 2.0) alignCenterLetterSpacing = 0;
    else alignCenterLetterSpacing = Math.abs(overheadTextSpacing) * -6;

    const alignCenterHeadTextWidth = headTextLetterWidth + alignCenterLetterSpacing * (headText.length - 1);
    const alignEvenlyLetterSpacing = noHeadText ? 0 : (footTextWidth - headTextLetterWidth) / headText.length;
    const alignEvenlyHeadTextWidth = footTextWidth;
    const alignment = footText.length === 1 || (gapPadding * 2 + alignCenterHeadTextWidth > footTextWidth)
        ? 'center' as const
        : 'space-around' as const;
    const letterSpacing = alignment === 'center' ? alignCenterLetterSpacing : alignEvenlyLetterSpacing;
    const headTextWidth = alignment === 'center' ? gapPadding * 2 + alignCenterHeadTextWidth : alignEvenlyHeadTextWidth;
    const halfGap = Math.max(
        overheadTextGap,
        alignment === 'center'
            ? gapPadding + (alignCenterHeadTextWidth - footTextWidth) / 2
            : 0
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
        gapPadding,
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
 * Tính phần chiều dài bên trái đã mất (nếu có) do ảnh hưởng bởi gap phải. lostLeftWidth luôn dương.
 * * Nếu prevGap dương (đẩy phải)
 *    * Nếu curGap dương (đẩy trái): Không mất chiều dài
 *    * Nếu curGap âm (hút trái): Mất đi một phần bên trái, nhưng không quá phần chiều dài mà prevGap có thể cho
 * * Nếu prevGap âm (hút phải)
 *    * Nếu curGap dương (đẩy trái): Mất đi một phần bên trái, nhưng không quá những gì prevGap có thể nhận
 *    * Nếu curGap âm (hút trái): Không mất chiều dài
 */
export const getLostLeftWidth = (prevGap: number, curGap: number) => {
    return prevGap >= 0
        ? curGap >= 0
            ? 0
            : Math.max(prevGap * -1, curGap) * -1
        : curGap >= 0
            ? Math.max(prevGap, curGap * -1) * -1
            : 0;
};