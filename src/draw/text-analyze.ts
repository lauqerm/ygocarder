import {
    FontData,
    BULLET_LETTER,
    TCGLetterRegex,
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
    TCGSymbolRegex,
    OCGNoOverheadGapRegex,
    GAP_PER_WIDTH_RATIO,
    GAP_PADDING_RATIO,
    RUBY_REGEX,
    DefaultFontData,
    RUBY_BONUS_RATIO,
    NON_BREAKABLE_SYMBOL_SOURCE,
} from 'src/model';
import { getTextWorker, analyzeHeadText, tokenizeText, getLostLeftWidth } from './text-util';
import { createFontGetter } from 'src/util';
import { getLetterWidth } from './letter';

/** Trả về độ dài thực của token (không phụ thuộc vào scale), nếu thông số `xRatio` được truyền, các ký tự constant width như bullet
 * sẽ được phóng to lên tương ứng.
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
        space: 0,
        spaceAtEnd: false,
        fixedWidth: 0,
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
        headTextOverflow = DefaultFontData.headTextOverflow,
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
    /** Tính số đo của 1 token */
    let totalWidth = 0;
    /** Số lượng khoảng trắng có trong token */
    let spaceCount = 0;
    /** Ở cuối token có space hay không, vì trong một vài trường hợp ta bỏ space ở cuối */
    let spaceAtEnd = false;
    /** Độ dài token cố định có / không thể bị compresss */
    let fixedWidth = 0;
    const lastOfLine = nextToken === undefined;
    /** Gap chừa lại được cho furigana của token, như vậy right gap của token này là left gap của token kế tiếp */
    let currentRightGap = previousTokenGap ?? 0;
    /** Bị ảnh hưởng bởi tokenRebalanceOffset */
    let offsetable = false;
    let leftMostGap = 0;
    /** 3 nhóm trong token:
     * * Nhóm ruby
     * * Ký tự lẻ
     */
    const fragmentList = token.split(FragmentSplitRegex).filter(entry => entry != null && entry !== '');
    for (let cnt = 0; cnt < fragmentList.length; cnt++) {
        const isLeftmost = cnt === 0;
        const fragment = fragmentList[cnt];

        /** Symbol S/T không bị compress */
        if (fragment === ST_ICON_SYMBOL) {
            currentRightGap = 0;
            const fragmentWidth = iconSymbolWidth / xRatio;
            totalWidth += fragmentWidth * letterSpacingRatio;
            fixedWidth += fragmentWidth * letterSpacingRatio;
            if (isLeftmost) {
                leftMostGap = 0;
                leftMostLetter = fragment[0];
            }
        }
        /** Bullet symbol không bị compress, tham khảo "Agave Dragon" */
        else if (fragment === BULLET_LETTER) {
            currentRightGap = 0;
            const fragmentWidth = bulletSymbolWidth / xRatio;
            totalWidth += fragmentWidth * letterSpacingRatio;
            fixedWidth += fragmentWidth * letterSpacingRatio;
            if (isLeftmost) {
                leftMostGap = 0;
                leftMostLetter = fragment[0];
            }
        }
        /** Copyright symbol © không bị compress */
        else if (/[©]/.test(fragment)) {
            currentRightGap = 0;
            applyLargerText(largeSymbolRatio);
            const fragmentWidth = ctx.measureText(fragment).width / xRatio;
            stopApplyLargerText();

            totalWidth += fragmentWidth * letterSpacingRatio;
            fixedWidth += fragmentWidth * letterSpacingRatio;
            if (isLeftmost) {
                leftMostGap = 0;
                leftMostLetter = fragment[0];
            }
        }
        /** OCG Ordinal symbol không bị compress */
        else if (/[①-⑳]/.test(fragment)) {
            currentRightGap = 0;
            applyOrdinalFont();
            const fragmentWidth = ctx.measureText(fragment).width / xRatio;
            stopApplyOrdinalFont();

            totalWidth += fragmentWidth * letterSpacingRatio;
            fixedWidth += fragmentWidth * letterSpacingRatio;
            spaceCount += 1;
            if (isLeftmost) {
                leftMostGap = 0;
                leftMostLetter = fragment[0];
            }
        }
        /** Cụm ruby cần tách đôi các phần */
        else if (RUBY_REGEX.test(fragment)) {
            const [footText, rubyType, headText = ''] = fragment.replaceAll(/{|}/g, '').split(/(\|+)/);
            const fitFootText = rubyType === '||';
            const {
                totalWidth: footTextWidth,
                fixedWidth: footTextFixedWidth,
            } = analyzeToken({ ctx, token: footText, nextToken, xRatio, letterSpacing, previousTokenGap: 0, format, textData });

            applyFuriganaFont();
            const headTextLetterWidth = headText
                .split('')
                .map(letter => getLetterWidth({ ctx, letter, format, metricMethod: 'furigana', xRatio: 1 }).boundWidth)
                .reduce((acc, cur) => acc + cur, 0);
            stopApplyFuriganaFont();

            const { halfGap: baseHalfGap, headTextWidth } = analyzeHeadText({
                headText,
                headTextLetterWidth: headTextLetterWidth / xRatio,
                footText,
                footTextWidth,
                headTextGap: defaultGap / xRatio,
                headTextSpacing,
                gapPadding: GAP_PADDING_RATIO * fontSize / xRatio,
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
            fixedWidth += headTextWidth > footTextWidth ? headTextWidth : footTextFixedWidth;
            spaceCount += 1;

            if (isLeftmost) {
                offsetable = true;
                leftMostGap = leftGap;
                leftMostLetter = footText[0];
            }
        }
        // Ta assume các ký tự dùng symbol font trong whole word (ví dụ ";"), có độ dài tương ứng với font thường (chỉ khác hình dạng)
        else if (WholeWordRegex.test(fragment)) {
            const normalizedWordSpacingRatio = wordLetterSpacing
                ? 1 + wordLetterSpacing / 2
                : letterSpacingRatio;
            ctx.letterSpacing = `${(normalizedWordSpacingRatio - 1) * currentFont.getFontInfo().sizeAsNumber}px`;
            let remainFragment = fragment;
            let fragmentWidth = 0;
            while (remainFragment !== '') {
                let currentLetter = remainFragment[0];
                let nextRemainFragment = remainFragment.slice(1);
                let actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                if (SquareBracketLetterRegex.test(currentLetter)) {
                    applyScale(squareBracketRatio);
                    actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                    reverseScale(squareBracketRatio);
                } else if (CapitalLetterRegex.test(currentLetter)) {
                    applyScale(capitalLetterRatio);
                    actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                    reverseScale(capitalLetterRatio);
                } else if (NumberRegex.test(currentLetter)) {
                    applyNumberFont();
                    actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                    stopApplyNumberFont();
                } else if (TCGSymbolRegex.test(currentLetter) && format === 'tcg') {
                    applySymbolFont();
                    actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                    stopApplySymbolFont();
                } else {
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

            if (isLeftmost) {
                leftMostGap = leftGap;
                leftMostLetter = fragment[0];
            }
            ctx.letterSpacing = '0px';
        }
        /** Một số ký tự dùng font đặc biệt */
        else if (TCGLetterRegex.test(fragment) && format === 'tcg') {
            applySymbolFont();
            const fragmentWidth = ctx.measureText(fragment).width * letterSpacingRatio;
            stopApplySymbolFont();

            const leftGap = Math.max(defaultGap, fragmentWidth / GAP_PER_WIDTH_RATIO);
            const rightGap = leftGap;
            const lostLeftWidth = getLostLeftWidth(currentRightGap, leftGap);

            totalWidth += fragmentWidth - lostLeftWidth;
            currentRightGap = rightGap;
            if (isLeftmost) {
                leftMostGap = leftGap;
                leftMostLetter = fragment[0];
            }
        }
        /** Các ký tự còn lại */
        else {
            const { boundWidth } = getLetterWidth({ ctx, letter: fragment, lastOfLine, format, metricMethod, xRatio });
            const fragmentWidth = boundWidth * letterSpacingRatio;
            const leftGap = Math.max(defaultGap, fragmentWidth / GAP_PER_WIDTH_RATIO);
            const rightGap = leftGap;
            const lostLeftWidth = getLostLeftWidth(currentRightGap, leftGap);

            totalWidth += fragmentWidth - lostLeftWidth;
            currentRightGap = rightGap;
            if (
                (format === 'ocg' || (format === 'tcg' && /\s+/.test(fragment)))
                && NoSpaceRegex.test(fragment) !== true
            ) {
                spaceCount += 1;
                if (cnt === fragmentList.length - 1) spaceAtEnd = true;
            }
            if (isLeftmost) {
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
        space: spaceCount,
        spaceAtEnd,
        fixedWidth,
        leftMostLetter,
        rightGap: currentRightGap,
        leftGap: leftMostGap,
        offsetable,
    };
};

/**
 * * Tính toán tổng không gian cho tất cả từ trong dòng (bao gồm cả bullet, special symbol, vv...)
 * * Lấy độ dài của line trừ cho tổng không gian kể trên, ta được không gian trống
 * * Chia không gian trống này vào giữa các từ (align justify)
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
    let spaceCount = 0;
    let currentGap = 0;

    for (let cnt = 0, xRatio = baseXRatio; cnt < tokenList.length; cnt++) {
        const token = tokenList[cnt];
        const nextToken = tokenList[cnt + 1];
        /** Bật / tắt chế độ không nén */
        if (token === NB_UNCOMPRESSED_START) {
            xRatio = 1;
            continue;
        }
        else if (token === NB_UNCOMPRESSED_END) {
            xRatio = baseXRatio;
            continue;
        }
        const {
            space,
            totalWidth,
            spaceAtEnd,
            leftGap,
            rightGap,
            leftMostLetter,
        } = analyzeToken({ ctx, token, nextToken, xRatio, previousTokenGap: currentGap / xRatio, textData, format });
        const indent = (
            (cnt === 0 && leftGap > 0 ? Math.min(MAX_LINE_REVERSE_INDENT, leftGap * xRatio) * -1 : 0)
            +
            (cnt === 0 && OCGAlphabetRegex.test(leftMostLetter) ? START_OF_LINE_ALPHABET_OFFSET * xRatio : 0)
        );

        currentGap = rightGap * xRatio;
        totalContentWidth += totalWidth * xRatio + indent;
        spaceCount += space - (spaceAtEnd && nextToken === undefined ? 1 : 0);
    }
    const expectedSpaceWidth = spaceCount > 0 ? (width - totalContentWidth) / spaceCount : 0;
    const extraSpace = isLast
        ? format === 'tcg'
            ? expectedSpaceWidth > 1.500 ? 0 : expectedSpaceWidth
            : expectedSpaceWidth > 2.750 ? 0 : expectedSpaceWidth
        : expectedSpaceWidth;

    return {
        tokenList,
        extraSpace,
    };
};