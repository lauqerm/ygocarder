import {
    BREAKABLE_LETTER,
    DefaultFontSizeData,
    FontData,
    FontSizeData,
    NB_WORD_CLOSE,
    NB_WORD_OPEN,
} from 'src/model';
import { createFontGetter, scaleFontSizeData } from 'src/util';

export const tokenizeText = (text: string, keepControlCharacter = false) => {
    const regex = keepControlCharacter
        ? new RegExp(`([${BREAKABLE_LETTER}])|(${NB_WORD_OPEN}[\\w\\W]+?${NB_WORD_CLOSE})|(.+?)`)
        : new RegExp(`([${BREAKABLE_LETTER}])|${NB_WORD_OPEN}([\\w\\W]+?)${NB_WORD_CLOSE}|(.+?)`);

    return text
        .split(regex)
        .filter(token => token != null && token !== '');
};

export const getTextWorker = (
    ctx: CanvasRenderingContext2D,
    fontData: Omit<FontData, 'fontList'>,
    fontSizeData: FontSizeData,
    fontController: ReturnType<typeof createFontGetter>,
    globalScale: number,
) => {
    const scaledDefaultFontSizeData = scaleFontSizeData(DefaultFontSizeData, globalScale);
    const {
        fontSize,
        ordinalFontRatio = scaledDefaultFontSizeData.ordinalFontRatio,
        headTextFontRatio = scaledDefaultFontSizeData.headTextFontRatio,
    } = fontSizeData;
    const {
        font,
        ordinalFont,
        symbolFont,
        symbolFontRatio,
        numberFont = font,
        numberFontRatio = 1,
        furiganaFont,
        vietnameseFont = font,
        vietnameseFontRatio = 1,
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

    let vietnameseFontMemory = fontController.getFontInfo();
    const applyVietnameseFont = () => {
        vietnameseFontMemory = fontController.getFontInfo();
        ctx.font = fontController.setFamily(vietnameseFont).setSize(fontSize * vietnameseFontRatio).getFont();
    };
    const stopApplyVietnameseFont = () => {
        ctx.font = fontController
            .setFamily(vietnameseFontMemory.family)
            .setSize(vietnameseFontMemory.size)
            .getFont();
    };

    let symbolFontMemory = fontController.getFontInfo();
    const applySymbolFont = (ratio = symbolFontRatio) => {
        symbolFontMemory = fontController.getFontInfo();
        const nextRatio = fontSize * ratio;
        ctx.font = fontController.setFamily(symbolFont).setSize(nextRatio).getFont();
        return {
            fontSize: nextRatio,
        };
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
        ctx.font = fontController.setFamily(ordinalFont).setSize(fontSize * ordinalFontRatio).getFont();
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
        ctx.font = fontController.setFamily(furiganaFont).setWeight(bold ? 'bold' : '').setSize(fontSize * headTextFontRatio).getFont();
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
        applyFuriganaFont, stopApplyFuriganaFont,
        applyLargerText, stopApplyLargerText,
        applyNumberFont, stopApplyNumberFont,
        applyOrdinalFont, stopApplyOrdinalFont,
        applySymbolFont, stopApplySymbolFont,
        applyVietnameseFont, stopApplyVietnameseFont,

        applyAsymmetricScale,
        applyScale,
        resetScale,
        reverseScale,
    };
};

/** We do not actually use the ● letter for bullet, instead we a draw a black circle with fixed size. Bullets not only does not condense, but also does not actually scale with font-size. They are the same size even if we use smaller font to add more lines ("Agave Dragon" TCG), this in turn prevent us from reducing the font size too small.
 * 
 * In TCG the space behind bullet is fixed, so multiple lines with bullet at the start will align perfectly, it is not seems to be the case in OCG.
*/
export const drawBullet = (ctx: CanvasRenderingContext2D, edge: number, baseline: number, width: number, spaceAfter: number) => {
    const bulletRadius = (width - spaceAfter) / 2;
    ctx.beginPath();
    ctx.arc(edge + bulletRadius, baseline - bulletRadius, bulletRadius, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
};

/**
 * This function analyze head text of a token, and return various information: its width (same calculation rule with `analyzeToken`), alignment type, gap as well as drawing information (letter spacing and customized condense ratio).
 * 
 * @summary All ruby (head text) rules:
 * * A token may or may not has head text.
 * * Head text take space above foot text, if foot text still has space left, the token has negative gap. On the other hand if head text is too long it may growth out of foot text's vertical boundary (overflowing), in this case the token has positive gap.
 * * Head text with positive gap may take negative gap from the previous token. Read knoweledge diagram for a visual presentation. They take available gap in such a way that head text never overlap with each other, and foot text also does not overlap with each other.
 * * Foot text may got pushed around a bit so empty space is distributed uniformly ("Beyond the Pendulum" OCG). The current implementation cannot achieve such effect automatically, but only to a degree.
 * * Head text above a single letter is always center-aligned. Head text above multiple letters is align using space-around distribution if it does not overflow, and center otherwise.
 * * Head text that is way too long compare to its foot text underneath will be condensed and has negative letter spacing ("PenduLuMoon" OCG), in some cases make it completely unreadable.
 * * Head text of the first token of a line can "spill" out of line's boundary. ("Beyond the Pendulum" OCG) Even if this is the case, all foot text must be perfectly aligned vertically.
 * * Head text above a single letter will not be condensed ("Recette de Poisson (Fish Recipe)" OCG) unless forced to by special syntax.
 * * Head text above multiple-letters foot text condeses with a slower rate than normal ("CXyz N.As.Ch. Knight" OCG).
 * * Head text above a whole line will be condensed so it does not overflow ("Amaze Attraction Viking Vortex" OCG).
 * * Those letters do not have gap, and therefore do not allow head text to overflow over them: Bullet ●, ordinal letter lie ⑤ ("Pendulum Dimension" OCG).
 * */
export const analyzeHeadText = ({
    footText, footTextWidth,
    headText, headTextLetterWidth,
    headTextGap,
    headTextSpacing,
    gapPadding,
    debug,
    fitFootText,
    sentenceXRatio,
    xRatio,
}: {
    headText: string,
    headTextLetterWidth: number,
    footText: string,
    footTextWidth: number,
    headTextGap: number,
    headTextSpacing: number,
    gapPadding: number,
    debug?: string,
    fitFootText: boolean,
    sentenceXRatio: number,
    xRatio: number,
}) => {
    const noHeadText = headText.length === 0;
    const condenseHeadText = headTextLetterWidth / footTextWidth * sentenceXRatio;
    let alignCenterLetterSpacing = headTextSpacing;
    let internalXRatio = 0;
    /** We use width ratio between head text (letters only) and foot text to determine that it is too long or not. For each ratio threshold, a different treatment is applied. */
    if (condenseHeadText <= 0.95) {
        /** Most case fall to this category */
        alignCenterLetterSpacing = headTextSpacing * 1;
    }
    else if (condenseHeadText <= 1.175) {
        /** If the head text is a bit too long, we force all head text's letters to stay close together. Example like "EX" - Extra Deck in OCG. */
        alignCenterLetterSpacing = headTextSpacing >= 0
            ? 0
            : headTextSpacing * 3;
    }
    else if (condenseHeadText <= 1.560) {
        /** If the head text is too long, we start to introduce negative spacing. Example like "S" - Synchro in OCG. */
        alignCenterLetterSpacing = headTextSpacing >= 0
            ? headTextSpacing * -1/4
            : headTextSpacing * 3;
    }
    else {
        /** If the head text is way too long, not only we introduce negative spacing, but also condense the actual letter. "P" - Pendulum is a notorious example. */
        internalXRatio = 0.66;
        alignCenterLetterSpacing = headTextSpacing >= 0
            ? headTextSpacing * -1/4
            : headTextSpacing * 2;
    }
    if (fitFootText || (xRatio > 0 && xRatio < 1)) {
        alignCenterLetterSpacing = headTextSpacing;
    }

    const alignCenterHeadTextWidth = headTextLetterWidth * ((xRatio && !fitFootText)
        ? xRatio
            : (!internalXRatio || fitFootText) ? 1 : internalXRatio)
                + alignCenterLetterSpacing * (headText.length - 1);
    const alignEvenlyLetterSpacing = noHeadText ? 0 : (footTextWidth - headTextLetterWidth) / headText.length;
    const alignEvenlyHeadTextWidth = footTextWidth;

    const alignment = footText.length === 1 || (gapPadding * 2 + alignCenterHeadTextWidth > footTextWidth)
        ? 'center' as const
        : 'space-around' as const;
    const letterSpacing = alignment === 'center'
        ? alignCenterLetterSpacing
        : alignEvenlyLetterSpacing;
    const trueHeadTextWidth = alignment === 'center'
        ? gapPadding * 2 + alignCenterHeadTextWidth
        : alignEvenlyHeadTextWidth;
    const headTextWidth = fitFootText
        ? Math.min(trueHeadTextWidth, footTextWidth)
        : trueHeadTextWidth;
    const baseHalfGap = alignment === 'center'
        ? (alignCenterHeadTextWidth - footTextWidth) / 2
        : 0;
    const halfGap = Math.max(
        headTextGap,
        fitFootText ? Math.min(baseHalfGap, 0) : baseHalfGap,
    );

    if (debug) console.info(
        `analyzeHeadText ${debug}`,
        alignment,
        letterSpacing,
        '|',
        headText, headTextWidth, trueHeadTextWidth,
        footText, footTextWidth,
        halfGap,
    );
    return {
        gapPadding,
        letterSpacing,
        trueHeadTextWidth,
        headTextWidth,
        /**
         * Simple visualization:
         * * Center: `[gap][letter + spacing][gap]`
         * * Space-around: `[half-gap][letter][gap][letter][half-gap]`
         */
        alignment,
        /** 
         * * Positive gap will take space from other.
         * * Negative app allow other to use their space.
         */
        halfGap,
        headTextXRatio: alignment === 'center' ? internalXRatio : 0,
    };
};

/**
 * Calculate the lost width from the left side of a token becaues of gap. This width is scalar and therefore ALWAYS positive. Visit knowledge diagram for a clearer visualization.
 * 
 * * If the previous gap is positive (push to their right):
 *   * If current gap is positive (push to the left): No space is lost, they simply stand next to each other.
 *   * If current gap is negative (previous token pull them): Current token lose some width, but no more than what the previous token can take.
 * * If the previous gap is negative (pull the next token to them):
 *   * If current gap is positive (push to the left): Current token lose some width, but no more than what the previous token can give.
 *   * If current gap is negative (previous token pull them): No space is lost, they do not interfere with each other.
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