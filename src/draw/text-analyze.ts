import {
    BOLD_CLOSE_TAG,
    BOLD_OPEN_TAG,
    BULLET_LETTER,
    CapitalLetterRegex,
    DefaultFontData,
    DefaultFontSizeData,
    DrawMemory,
    FontData,
    FragmentSplitRegex,
    GAP_PER_WIDTH_RATIO,
    IMG_TAG_NAME,
    ITALIC_CLOSE_TAG,
    ITALIC_OPEN_TAG,
    LETTER_GAP_RATIO,
    MAX_LINE_REVERSE_INDENT,
    NB_UNCOMPRESSED_END,
    NB_UNCOMPRESSED_START,
    NON_BREAKABLE_SYMBOL_SOURCE,
    NoSpaceRegex,
    NonCompressableRegex,
    NormalFontData,
    NumberRegex,
    OCGAlphabetRegex,
    OCGNoOverheadGapRegex,
    PRE_CLOSE_TAG,
    PRE_OPEN_TAG,
    RENDER_TAG_SOURCE,
    RUBY_BONUS_RATIO,
    RUBY_REGEX,
    PLACEHOLDER_CLOSE,
    PLACEHOLDER_OPEN,
    START_OF_LINE_ALPHABET_OFFSET,
    STYLING_TAG_SOURCE,
    ST_ICON_SYMBOL,
    PlaceholderRegex,
    SquareBracketLetterRegex,
    TCGSymbolLetterRegex,
    TextData,
    VietnameseDiacriticLetterRegex,
    WholeWordRegex,
    PLACEHOLDER_DELIMITER,
} from 'src/model';
import { getTextWorker, analyzeHeadText, tokenizeText, getLostLeftWidth, splitPlaceholder } from './text-util';
import { createFontGetter, scaleFontSizeData, swapTextData } from 'src/util';
import { getLetterWidth } from './letter';
import { useGlobalMemory } from 'src/service';

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
    letterSpacing: _letterSpacing,
    lineHeight = 0,
    format,
    globalScale,
    textData,
    memory,
    // debug = false,
}: {
    ctx: CanvasRenderingContext2D,
    token: string,
    nextToken: string | undefined,
    xRatio: number,
    previousTokenGap?: number,
    letterSpacing?: number,
    lineHeight?: number,
    format: string,
    globalScale: number,
    // debug?: boolean,
    textData: {
        fontData: FontData,
        fontLevel: number,
        currentFont: ReturnType<typeof createFontGetter>,
    },
    memory?: DrawMemory,
}) => {
    if (!ctx || !rawToken) return {
        totalWidth: 0,
        leftMostLetter: '',
        spaceCount: 0,
        spaceAtEnd: false,
        rightGap: 0,
        leftGap: 0,
    };
    const imageMemory = memory?.image ?? {};
    const imagePresetMap = useGlobalMemory.getState().memory.imagePresetMap;
    const scaledDefaultFontSizeData = scaleFontSizeData(DefaultFontSizeData, globalScale);
    const letterSpacing = _letterSpacing ?? scaledDefaultFontSizeData.letterSpacing;
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
        letterOffsetMap = {},
    } = fontData;
    const fontSizeData = fontData.fontList[fontLevel];
    const {
        bulletWidth,
        capitalLetterRatio,
        fontSize,
        iconSymbolWidth = bulletWidth,
        largeSymbolRatio = scaledDefaultFontSizeData.largeSymbolRatio,
        headTextSpacing = scaledDefaultFontSizeData.headTextSpacing,
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
        applyVietnameseFont, stopApplyVietnameseFont,
    } = getTextWorker(ctx, fontData, fontSizeData, currentFont, globalScale);
    let potentialTaggedToken = rawToken.replaceAll(new RegExp(NON_BREAKABLE_SYMBOL_SOURCE, 'g'), '');
    let token = potentialTaggedToken;
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
    const renderTagRegex = new RegExp(RENDER_TAG_SOURCE, 'g');
    let renderTagMatchResult: RegExpMatchArray | null;

    while ((renderTagMatchResult = renderTagRegex.exec(potentialTaggedToken)) != null) {
        const regex = /(?<=<.+?)(?<!>) ([\w-]+)(?:=["|'|”|“](.+?)["|'|”|“]|\b)(?!<)(?=.*?>)/gm;
        const tagName = renderTagMatchResult[1];
        if (tagName === IMG_TAG_NAME) {
            currentRightGap = 0;
            let matchResult: RegExpExecArray | null;
            let width: number | undefined;
            let height: number | undefined;
            let offsetX: number | undefined;
            let offsetY: number | undefined;
            let src = '';
            let name: string | undefined;
            while ((matchResult = regex.exec(renderTagMatchResult[0])) !== null) {
                // This is necessary to avoid infinite loops with zero-width matches
                if (matchResult.index === regex.lastIndex) {
                    regex.lastIndex++;
                }
                const attributeKey = matchResult[1];
                const attributeValue = matchResult[2];

                switch (attributeKey) {
                    case 'src': {
                        src = attributeValue;
                        break;
                    }
                    case 'width': {
                        width = parseInt(attributeValue);
                        break;
                    }
                    case 'height': {
                        height = parseInt(attributeValue);
                        break;
                    }
                    case 'offsetX': {
                        offsetX = parseInt(attributeValue);
                        break;
                    }
                    case 'offsetY': {
                        offsetY = parseInt(attributeValue);
                        break;
                    }
                    case 'name': {
                        name = attributeValue;
                        break;
                    }
                }
            }
            if (name) {
                const memoizedImage = imageMemory[name];
                if (memoizedImage) {
                    src = memoizedImage.src;
                    width = typeof width === 'number' ? width : memoizedImage.width;
                    height = typeof height === 'number' ? height : memoizedImage.height;
                    offsetX = typeof offsetX === 'number' ? offsetX : memoizedImage.offsetX;
                    offsetY = typeof offsetY === 'number' ? offsetY : memoizedImage.offsetY;
                } else {
                    imageMemory[name] = {
                        src,
                        width,
                        height,
                        offsetX,
                        offsetY,
                    };
                }
            }
            const preset = src ? imagePresetMap[src] : undefined;
            const memoizedImage = name ? imageMemory[name] : undefined;
            const normalizedWidth = (typeof width === 'number'
                ? width
                : preset
                    ? preset.width
                    : memoizedImage?.width
                        ? memoizedImage?.width
                        : undefined) ?? (lineHeight * 0.9);
            totalWidth += normalizedWidth / xRatio;
            token = token.replace(renderTagMatchResult[0], `${PLACEHOLDER_OPEN}img${PLACEHOLDER_DELIMITER}0${PLACEHOLDER_CLOSE}`);
        }
    }

    const tokenWithoutControlWord = token.replaceAll(new RegExp(STYLING_TAG_SOURCE, 'g'), '');
    const fragmentList = tokenWithoutControlWord.split(FragmentSplitRegex).filter(entry => entry != null && entry !== '');
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
            const fragmentWidth = bulletWidth / xRatio;
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
        else if (NonCompressableRegex.test(fragment)) {
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
        /** Process placeholder, image placeholder is unscalable */
        else if (PlaceholderRegex.test(fragment)) {
            currentRightGap = 0;
            const { width, content } = splitPlaceholder(fragment);
            totalWidth += content === 'img'
                ? width / xRatio
                : width;
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
            } = analyzeToken({ ctx, token: footText, nextToken, xRatio, letterSpacing, previousTokenGap: 0, format, textData, globalScale });

            /** Calculate head text's width */
            applyFuriganaFont();
            const headTextLetterWidth = headText
                .split('')
                .map(letter => getLetterWidth({ ctx, letter, fontStyle, metricMethod: 'furigana', xRatio: 1, globalScale }).boundWidth)
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
                /** Vietnamese letter use different font, for the sake of simplicity, we use a widely supported Times New Roman font instead of a more specific one. */
                else if (VietnameseDiacriticLetterRegex.test(currentLetter) && fontStyle === 'tcg') {
                    applyVietnameseFont();
                    actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                    stopApplyVietnameseFont();
                }
                /** Number letters may use different font, for the sake of simplicity, we assume that the font does not affect (too much) to the letter's width. In short, we assume that the letter "8" in font X have the same width with the letter "8" in font Y, just different shape. */
                else if (NumberRegex.test(currentLetter)) {
                    applyNumberFont();
                    actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                    stopApplyNumberFont();
                }
                /** Special symbol in TCG card ("Evil☆Twin") may use different font, again we assume the letter have similar size. */
                else if (TCGSymbolLetterRegex.test(currentLetter) && fontStyle === 'tcg') {
                    applySymbolFont(letterOffsetMap[currentLetter]?.ratio);
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
            applySymbolFont(letterOffsetMap[fragment]?.ratio);
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
            const { boundWidth } = getLetterWidth({ ctx, letter: fragment, isLastOfLine, fontStyle, metricMethod, xRatio, globalScale });
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
    lineHeight,
    xRatio: baseXRatio,
    format,
    isLast,
    textData,
    globalScale,
    justifyRatio,
    memory,
}: {
    ctx: CanvasRenderingContext2D,
    line: string,
    width: number,
    lineHeight: number,
    xRatio: number,
    format: string,
    isLast: boolean,
    textData: TextData,
    globalScale: number,
    justifyRatio: number,
    memory?: DrawMemory,
}) => {
    const tokenList = tokenizeText(line);
    let totalContentWidth = 0;
    let lineSpaceCount = 0;
    let currentGap = 0;
    let currentTextData = textData;
    let preformatMode = false;

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
        if (token === ITALIC_OPEN_TAG) {
            const hasItalicFontData = !!(NormalFontData[textData.fontData?.variant ?? '']);
            const italicFontData = hasItalicFontData
                ? NormalFontData[textData.fontData.variant]
                : textData.fontData;

            currentTextData = swapTextData(textData, italicFontData);
            ctx.font = currentTextData.currentFont
                .setStyle('italic')
                .getFont();
            continue;
        } else if (token === ITALIC_CLOSE_TAG) {
            currentTextData = textData;
            ctx.font = currentTextData.currentFont
                .setStyle('')
                .getFont();
            continue;
        }
        if (token === BOLD_OPEN_TAG) {
            ctx.font = currentTextData.currentFont
                .setWeight('bold')
                .getFont();
            continue;
        } else if (token === BOLD_CLOSE_TAG) {
            ctx.font = currentTextData.currentFont
                .setWeight('')
                .getFont();
            continue;
        }
        if (token === PRE_OPEN_TAG) {
            preformatMode = true;
            continue;
        } else if (token === PRE_CLOSE_TAG) {
            preformatMode = false;
            continue;
        }
        const {
            spaceCount,
            totalWidth,
            spaceAtEnd,
            leftGap,
            rightGap,
            leftMostLetter,
        } = analyzeToken({
            ctx,
            token,
            nextToken,
            xRatio,
            previousTokenGap: currentGap / xRatio,
            textData: currentTextData,
            format,
            globalScale,
            lineHeight,
            memory,
        });
        /** Check `createLineList` function about first token indentation. */
        const indent = (
            (cnt === 0 && leftGap > 0 ? Math.min(MAX_LINE_REVERSE_INDENT * globalScale, leftGap * xRatio) * -1 : 0)
            +
            (cnt === 0 && OCGAlphabetRegex.test(leftMostLetter) ? START_OF_LINE_ALPHABET_OFFSET * globalScale * xRatio : 0)
        );

        const actualSpaceCount = preformatMode
            ? 0
            : spaceCount;
        currentGap = rightGap * xRatio;
        totalContentWidth += totalWidth * xRatio + indent;
        lineSpaceCount += actualSpaceCount - (spaceAtEnd && nextToken === undefined ? 1 : 0);
    }
    const expectedSpaceWidth = lineSpaceCount > 0 ? (width - totalContentWidth) / lineSpaceCount : 0;
    const spaceWidth = isLast
        ? format === 'tcg'
            ? expectedSpaceWidth > 1.500 * globalScale * (justifyRatio / 100) ? 0 : expectedSpaceWidth
            : expectedSpaceWidth > 3.650 * globalScale * (justifyRatio / 100) ? 0 : expectedSpaceWidth
        : expectedSpaceWidth;

    return {
        tokenList,
        spaceWidth,
    };
};