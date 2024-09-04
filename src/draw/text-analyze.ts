import {
    FontData,
    BULLET_LETTER,
    TCGSymbolLetterRegex,
    OCGAlphabetRegex,
    MAX_LINE_REVERSE_INDENT,
    START_OF_LINE_ALPHABET_OFFSET,
    FragmentSplitRegex,
    WholeWordRegex,
    DefaultFontSizeData,
    ST_ICON_SYMBOL,
    TextData,
    NoSpaceRegex,
    LETTER_GAP_RATIO,
    NB_UNCOMPRESSED_START,
    NB_UNCOMPRESSED_END,
    SquareBracketLetterRegex,
    CapitalLetterRegex,
    NumberRegex,
    OCGNoOverheadGapRegex,
    GAP_PER_WIDTH_RATIO,
    RUBY_REGEX,
    DefaultFontData,
    RUBY_BONUS_RATIO,
    NON_BREAKABLE_SYMBOL_SOURCE,
} from 'src/model';
import { getTextWorker, analyzeHeadText, tokenizeText, getLostLeftWidth } from './text-util';
import { createFontGetter } from 'src/util';
import { getLetterWidth } from './letter';

/** 
 * Return information of a token.
 * @returns
 *  * `totalWidth`: The width of the token based on xRatio. In the same fashion with `getLetterWidth`, we get the true width for scalable letter, and inverse-scaled width of a non-scalable letter. `totalWidth` does no include whitespaces since they are not calculate traditionally.
 *  * `leftMostLetter`: The left most letter of a token (not counting control characters), there is a special treatment based on what is the left most letter of a token (mainly indentation).
 *  * `spaceCount`: Number of whitespaces in a token, their width will be calculated afterward.
 *  * `spaceAtEnd`: Whether or not the token end with a space, for example most of English word requires a whitespace between words, while Japanese does not. We also does not allow a line to end with a whitespace unless it is the last line.
 *  * `rightGap`, `leftGap`: Gap of a token based on its overhead letters. The token may consist of multiple letters each with their own gap, so it is easy to see that right and left gap of a token is respectively left gap of the leftmost letter and right gap of the rightmost letter.
 */
export const analyzeToken = ({
    ctx,
    token: rawToken, nextToken,
    xRatio,
    previousTokenGap = 0,
    letterSpacing = DefaultFontSizeData.letterSpacing,
    format,
    textData,
    // debug = false,
}: {
    ctx: CanvasRenderingContext2D,
    token: string,
    nextToken: string | undefined,
    xRatio: number,
    previousTokenGap?: number,
    letterSpacing?: number,
    format: string,
    // debug?: boolean,
    textData: {
        fontData: FontData,
        fontLevel: number,
        currentFont: ReturnType<typeof createFontGetter>,
    },
}) => {
    if (!ctx || !rawToken) return {
        totalWidth: 0,
        leftMostLetter: '',
        spaceCount: 0,
        spaceAtEnd: false,
        rightGap: 0,
        leftGap: 0,
    };
    const {
        currentFont,
        fontData,
        fontLevel,
    } = textData;
    const {
        metricMethod,
        headTextGapRatio = DefaultFontData.headTextGapRatio,
        headTextOverflow = DefaultFontData.headTextOverflow,
        fontStyle,
    } = fontData;
    const fontSizeData = fontData.fontList[fontLevel];
    const {
        bulletSymbolWidth,
        capitalLetterRatio,
        fontSize,
        iconSymbolWidth = bulletSymbolWidth,
        largeSymbolRatio = DefaultFontSizeData.largeSymbolRatio,
        headTextSpacing = DefaultFontSizeData.headTextSpacing,
        squareBracketRatio,
        wordLetterSpacing,
    } = fontSizeData;
    const defaultGap = fontSize * LETTER_GAP_RATIO;
    const {
        applyScale, reverseScale,
        applyLargerText, stopApplyLargerText,
        applyFuriganaFont, stopApplyFuriganaFont,
        applyOrdinalFont, stopApplyOrdinalFont,
        applySymbolFont, stopApplySymbolFont,
        applyNumberFont, stopApplyNumberFont,
    } = getTextWorker(ctx, fontData, fontSizeData, currentFont);
    const token = rawToken.replaceAll(new RegExp(NON_BREAKABLE_SYMBOL_SOURCE, 'g'), '');
    const letterSpacingRatio = 1 + letterSpacing / 2;
    let leftMostLetter = '';
    let totalWidth = 0;
    let spaceCount = 0;
    let spaceAtEnd = false;
    const isLastOfLine = nextToken === undefined;
    /** The right gap of a token will influence the left gap of the next token */
    let currentRightGap = previousTokenGap ?? 0;
    /** Whether or not it is affected by rebalance calculation */
    let offsetable = false;
    let leftMostGap = 0;

    const fragmentList = token.split(FragmentSplitRegex).filter(entry => entry != null && entry !== '');
    for (let cnt = 0; cnt < fragmentList.length; cnt++) {
        const isLeftmostFragment = cnt === 0;
        const fragment = fragmentList[cnt];

        /** S/T symbol is unscalable (it does not condense no matter the ratio) */
        if (fragment === ST_ICON_SYMBOL) {
            currentRightGap = 0;
            const fragmentWidth = iconSymbolWidth / xRatio;
            totalWidth += fragmentWidth * letterSpacingRatio;

            if (isLeftmostFragment) {
                leftMostGap = 0;
                leftMostLetter = fragment[0];
            }
        }
        /** Bullet symbol is unscalable ("Agave Dragon" OCG/TCG) */
        else if (fragment === BULLET_LETTER) {
            currentRightGap = 0;
            const fragmentWidth = bulletSymbolWidth / xRatio;
            totalWidth += fragmentWidth * letterSpacingRatio;

            if (isLeftmostFragment) {
                leftMostGap = 0;
                leftMostLetter = fragment[0];
            }
        }
        /** Copyright symbol © is unscalable (creator text) */
        else if (/[©]/.test(fragment)) {
            currentRightGap = 0;
            applyLargerText(largeSymbolRatio);
            const fragmentWidth = ctx.measureText(fragment).width / xRatio;
            stopApplyLargerText();
            totalWidth += fragmentWidth * letterSpacingRatio;

            if (isLeftmostFragment) {
                leftMostGap = 0;
                leftMostLetter = fragment[0];
            }
        }
        /** OCG Ordinal symbol is unscalable */
        else if (/[①-⑳]/.test(fragment)) {
            currentRightGap = 0;
            applyOrdinalFont();
            const fragmentWidth = ctx.measureText(fragment).width / xRatio;
            stopApplyOrdinalFont();
            totalWidth += fragmentWidth * letterSpacingRatio;

            spaceCount += 1;
            if (isLeftmostFragment) {
                leftMostGap = 0;
                leftMostLetter = fragment[0];
            }
        }
        /** Process ruby syntax */
        else if (RUBY_REGEX.test(fragment)) {
            const [footText, rubyType, headText = ''] = fragment.replaceAll(/{|}/g, '').split(/(\|+)/);
            const fitFootText = rubyType === '||';
            /** Calculate foot text's width */
            const {
                totalWidth: footTextWidth,
            } = analyzeToken({ ctx, token: footText, nextToken, xRatio, letterSpacing, previousTokenGap: 0, format, textData });

            /** Calculate head text's width */
            applyFuriganaFont();
            const headTextLetterWidth = headText
                .split('')
                .map(letter => getLetterWidth({ ctx, letter, fontStyle, metricMethod: 'furigana', xRatio: 1 }).boundWidth)
                .reduce((acc, cur) => acc + cur, 0);
            stopApplyFuriganaFont();

            /** Calculate gap */
            const { halfGap: baseHalfGap, headTextWidth } = analyzeHeadText({
                headText,
                headTextLetterWidth: headTextLetterWidth / xRatio,
                footText,
                footTextWidth,
                headTextGap: defaultGap / xRatio,
                headTextSpacing,
                gapPadding: headTextGapRatio * fontSize / xRatio,
                fitFootText,
                sentenceXRatio: xRatio,
                xRatio: (headTextOverflow === 'condense' && footText.length > 1) ? Math.min(1, xRatio + RUBY_BONUS_RATIO) : 0,
            });
            const halfGap = headText.length === 0
                ? Math.max(defaultGap, footTextWidth / GAP_PER_WIDTH_RATIO)
                : baseHalfGap;
            const leftGap = halfGap;
            const rightGap = halfGap;
            const boundWidth = Math.max(headTextWidth, footTextWidth);
            const lostLeftWidth = getLostLeftWidth(currentRightGap, leftGap);

            currentRightGap = rightGap;
            totalWidth += boundWidth - lostLeftWidth;
            spaceCount += 1;

            if (isLeftmostFragment) {
                offsetable = true;
                leftMostGap = leftGap;
                leftMostLetter = footText[0];
            }
        }
        /** Process whole word. Because the font has contextual kerning, the width when we draw the whole word will be different compare to the width when we draw each letter next to each other, sometimes the different may become noticeable (for example in the word "AWA", there is a very noticeable distance between these letters), so we try to simulate that behavior. */
        else if (WholeWordRegex.test(fragment)) {
            /** Whole word may have their own spacing ratio */
            const normalizedWordSpacingRatio = wordLetterSpacing
                ? 1 + wordLetterSpacing / 2
                : letterSpacingRatio;
            ctx.letterSpacing = `${(normalizedWordSpacingRatio - 1) * currentFont.getFontInfo().sizeAsNumber}px`;

            let remainFragment = fragment;
            let fragmentWidth = 0;
            /** A simple algorithm to simulate contextual kerning, for each letter, we do these steps:
             * * Split the current word into two part: The first letter and the rest of the word.
             * * Calculate the width of a letter, then calculate the width of the remaining word.
             * * By subtract them, we will have the actual width of a letter, when put into the word and affected by contextual kerning.
             */
            while (remainFragment !== '') {
                let currentLetter = remainFragment[0];
                let nextRemainFragment = remainFragment.slice(1);
                let actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                /** Square brackets ("[" and "]") may have different scaling */
                if (SquareBracketLetterRegex.test(currentLetter)) {
                    applyScale(squareBracketRatio);
                    actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                    reverseScale(squareBracketRatio);
                }
                /** Captial letters may have different scaling */
                else if (CapitalLetterRegex.test(currentLetter)) {
                    applyScale(capitalLetterRatio);
                    actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                    reverseScale(capitalLetterRatio);
                }
                /** Number letters may use different font, for the sake of simplicity, we assume that the font does not affect (too much) to the letter's width. In short, we assume that the letter "8" in font X have the same width with the letter "8" in font Y, just different shape. */
                else if (NumberRegex.test(currentLetter)) {
                    applyNumberFont();
                    actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                    stopApplyNumberFont();
                }
                /** Special symbol in TCG card ("Evil☆Twin") may use different font, again we assume the letter have similar size. */
                else if (TCGSymbolLetterRegex.test(currentLetter) && fontStyle === 'tcg') {
                    applySymbolFont();
                    actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                    stopApplySymbolFont();
                }
                /** No special treatment for the usual letters */
                else {
                    actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                }
                fragmentWidth += actualLetterWidth;
                remainFragment = nextRemainFragment;
            }

            const leftGap = Math.max(defaultGap, fragmentWidth / GAP_PER_WIDTH_RATIO);
            const rightGap = leftGap;
            const lostLeftWidth = getLostLeftWidth(currentRightGap, leftGap);

            totalWidth += fragmentWidth - lostLeftWidth;
            currentRightGap = rightGap;

            if (isLeftmostFragment) {
                leftMostGap = leftGap;
                leftMostLetter = fragment[0];
            }
            ctx.letterSpacing = '0px';
        }
        /** Special symbol in TCG card ("Evil☆Twin") may use different font */
        else if (TCGSymbolLetterRegex.test(fragment) && fontStyle === 'tcg') {
            applySymbolFont();
            const fragmentWidth = ctx.measureText(fragment).width * letterSpacingRatio;
            stopApplySymbolFont();

            const leftGap = Math.max(defaultGap, fragmentWidth / GAP_PER_WIDTH_RATIO);
            const rightGap = leftGap;
            const lostLeftWidth = getLostLeftWidth(currentRightGap, leftGap);

            totalWidth += fragmentWidth - lostLeftWidth;
            currentRightGap = rightGap;

            if (isLeftmostFragment) {
                leftMostGap = leftGap;
                leftMostLetter = fragment[0];
            }
        }
        else {
            const { boundWidth } = getLetterWidth({ ctx, letter: fragment, isLastOfLine, fontStyle, metricMethod, xRatio });
            const fragmentWidth = boundWidth * letterSpacingRatio;
            const leftGap = Math.max(defaultGap, fragmentWidth / GAP_PER_WIDTH_RATIO);
            const rightGap = leftGap;
            const lostLeftWidth = getLostLeftWidth(currentRightGap, leftGap);

            totalWidth += fragmentWidth - lostLeftWidth;
            currentRightGap = rightGap;
            if (
                (format === 'ocg' || (format === 'tcg' && /\s+/.test(fragment)))
                && NoSpaceRegex.test(fragment) === false
            ) {
                spaceCount += 1;
                if (cnt === fragmentList.length - 1) spaceAtEnd = true;
            }
            if (isLeftmostFragment) {
                leftMostGap = leftGap;
                leftMostLetter = fragment[0];
            }
            if (OCGNoOverheadGapRegex.test(fragment)) {
                leftMostGap = 0;
                currentRightGap = 0;
            }
        }
    }

    return {
        totalWidth,
        spaceCount,
        spaceAtEnd,
        leftMostLetter,
        rightGap: currentRightGap,
        leftGap: leftMostGap,
        offsetable,
    };
};

/**
 * Analyze a line again after we split it with suitable ratio. Text in line are justify-aligned, so we will calculate the sum of width of all tokens, then distribute the remaining space to the amount of whitespaces in the line, that means each whitespace will have additional width add into them so that the line fit perfectly into the available space.
 * 
 * Special treatment for last line of a paragraph, because the last line may not be filled entirely unlike all the lines above, we will decide a threshold for them, if the remaining space is too large, we do not distribute them and just left the line as-is.
 */
export const analyzeLine = ({
    ctx,
    line,
    width,
    xRatio: baseXRatio,
    format,
    isLast,
    textData,
}: {
    ctx: CanvasRenderingContext2D,
    line: string,
    width: number,
    xRatio: number,
    format: string,
    isLast: boolean,
    textData: TextData,
}) => {
    const tokenList = tokenizeText(line);
    let totalContentWidth = 0;
    let lineSpaceCount = 0;
    let currentGap = 0;

    for (let cnt = 0, xRatio = baseXRatio; cnt < tokenList.length; cnt++) {
        const token = tokenList[cnt];
        const nextToken = tokenList[cnt + 1];
        /** Non-compressable mode */
        if (token === NB_UNCOMPRESSED_START) {
            xRatio = 1;
            continue;
        }
        else if (token === NB_UNCOMPRESSED_END) {
            xRatio = baseXRatio;
            continue;
        }
        const {
            spaceCount,
            totalWidth,
            spaceAtEnd,
            leftGap,
            rightGap,
            leftMostLetter,
        } = analyzeToken({ ctx, token, nextToken, xRatio, previousTokenGap: currentGap / xRatio, textData, format });
        /** Check `createLineList` function about first token indentation. */
        const indent = (
            (cnt === 0 && leftGap > 0 ? Math.min(MAX_LINE_REVERSE_INDENT, leftGap * xRatio) * -1 : 0)
            +
            (cnt === 0 && OCGAlphabetRegex.test(leftMostLetter) ? START_OF_LINE_ALPHABET_OFFSET * xRatio : 0)
        );

        currentGap = rightGap * xRatio;
        totalContentWidth += totalWidth * xRatio + indent;
        lineSpaceCount += spaceCount - (spaceAtEnd && nextToken === undefined ? 1 : 0);
    }
    const expectedSpaceWidth = lineSpaceCount > 0 ? (width - totalContentWidth) / lineSpaceCount : 0;
    const spaceWidth = isLast
        ? format === 'tcg'
            ? expectedSpaceWidth > 1.500 ? 0 : expectedSpaceWidth
            : expectedSpaceWidth > 3.100 ? 0 : expectedSpaceWidth
        : expectedSpaceWidth;

    return {
        tokenList,
        spaceWidth,
    };
};