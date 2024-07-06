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
} from 'src/model';
import { getTextWorker, getExtraLeftWidth, getHeadTextWidth, tokenizeText } from './text-util';
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
    debug,
}: {
    ctx: CanvasRenderingContext2D,
    token: string,
    nextToken: string | undefined,
    xRatio: number,
    previousTokenGap?: number,
    letterSpacing?: number,
    format: string,
    textData: {
        fontData: FontData,
        fontLevel: number,
        currentFont: ReturnType<typeof createFontGetter>,
    },
    debug?: string,
}) => {
    if (!ctx || !rawToken) return {
        totalWidth: 0,
        outmostLetter: '',
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
    const { metricMethod } = fontData;
    const fontSizeData = fontData.fontList[fontLevel];
    const {
        fontSize,
        largeSymbolRatio = DefaultFontSizeData.largeSymbolRatio,
        wordLetterSpacing,
        bulletSymbolWidth,
        iconSymbolWidth = bulletSymbolWidth,
        overheadTextSpacing = DefaultFontSizeData.overheadTextSpacing,
    } = fontSizeData;
    const overheadTextGap = fontSize * LETTER_GAP_RATIO;
    const {
        withLargerText,
        withFurigana,
        withOrdinalFont,
        withSymbolFont,
    } = getTextWorker(ctx, fontData, fontSizeData, currentFont);
    const token = rawToken.replaceAll(/⦉|⦊/g, '');
    const letterSpacingRatio = 1 + letterSpacing / 2;
    let outmostLetter = '';
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
    let outmostLeftGap = 0;
    /** 3 nhóm trong token:
     * * Nhóm ruby
     * * Ký tự lẻ
     */
    const fragmentList = token.split(FragmentSplitRegex).filter(entry => entry != null && entry !== '');
    for (let cnt = 0; cnt < fragmentList.length; cnt++) {
        const fragment = fragmentList[cnt];
        const defaultgetExtraLeftWidth = getExtraLeftWidth(currentRightGap, overheadTextGap);

        /** Symbol S/T không bị compress */
        if (fragment === ST_ICON_SYMBOL) {
            const fragmentWidth = iconSymbolWidth / xRatio;
            totalWidth += fragmentWidth * letterSpacingRatio + defaultgetExtraLeftWidth;
            fixedWidth += fragmentWidth * letterSpacingRatio;
            currentRightGap = overheadTextGap;
            if (cnt === 0) {
                outmostLeftGap = overheadTextGap;
                outmostLetter = fragment[0];
            }
            if (debug) console.info(`analyzeToken ${debug}`, token, fragment, fragmentWidth, currentRightGap, defaultgetExtraLeftWidth);
        }
        /** Bullet symbol không bị compress, tham khảo "Agave Dragon" */
        else if (fragment === BULLET_LETTER) {
            const fragmentWidth = bulletSymbolWidth / xRatio;
            totalWidth += fragmentWidth * letterSpacingRatio + defaultgetExtraLeftWidth;
            fixedWidth += fragmentWidth * letterSpacingRatio;
            currentRightGap = overheadTextGap;
            if (cnt === 0) {
                outmostLeftGap = overheadTextGap;
                outmostLetter = fragment[0];
            }
            if (debug) console.info(`analyzeToken ${debug}`, token, fragment, fragmentWidth, currentRightGap, defaultgetExtraLeftWidth);
        }
        /** Copyright symbol © không bị compress */
        else if (/[©]/.test(fragment)) {
            const fragmentWidth = withLargerText(
                () => ctx.measureText(fragment).width / xRatio,
                0, 0,
                largeSymbolRatio,
            );
            totalWidth += fragmentWidth * letterSpacingRatio + defaultgetExtraLeftWidth;
            fixedWidth += fragmentWidth * letterSpacingRatio;
            currentRightGap = overheadTextGap;
            if (cnt === 0) {
                outmostLeftGap = overheadTextGap;
                outmostLetter = fragment[0];
            }
            if (debug) console.info(`analyzeToken ${debug}`, token, fragment, fragmentWidth, currentRightGap, defaultgetExtraLeftWidth);
        }
        /** OCG Ordinal symbol không bị compress */
        else if (/[①-⑳©]/.test(fragment)) {
            const fragmentWidth = withOrdinalFont(() => ctx.measureText(fragment).width / xRatio);
            totalWidth += fragmentWidth * letterSpacingRatio + defaultgetExtraLeftWidth;
            fixedWidth += fragmentWidth * letterSpacingRatio;
            currentRightGap = overheadTextGap;
            spaceCount += 1;
            if (cnt === 0) {
                outmostLeftGap = overheadTextGap;
                outmostLetter = fragment[0];
            }
            if (debug) console.info(`analyzeToken ${debug}`, token, fragment, fragmentWidth, currentRightGap, defaultgetExtraLeftWidth);
        }
        /** Cụm ruby cần tách đôi các phần */
        else if (/{[^{}]+?}/.test(fragment)) {
            const [footText, headText = ''] = fragment.replaceAll(/{|}/g, '').split('|');
            const {
                totalWidth: footTextWidth,
                fixedWidth: footTextFixedWidth,
            } = analyzeToken({ ctx, token: footText, nextToken, xRatio, letterSpacing, previousTokenGap: 0, format, textData });
            const headTextLetterWidth = withFurigana(() => {
                return headText
                    .split('')
                    .map(letter => getLetterWidth({ ctx, letter, format, metricMethod: 'compact' }).boundWidth)
                    .reduce((acc, cur) => acc + cur, 0);
            }, 0);
            const { halfGap } = getHeadTextWidth({ headText, headTextLetterWidth, footText, footTextWidth, overheadTextGap, overheadTextSpacing });
            const leftGap = getExtraLeftWidth(currentRightGap, halfGap);
            const rightGap = halfGap;
            if (debug) console.info(
                `analyzeToken ${debug}`,
                token, fragment,
                currentRightGap, leftGap, rightGap,
                footTextWidth, footTextWidth + leftGap + Math.max(rightGap, 0),
            );
            currentRightGap = rightGap;
            totalWidth += footTextWidth + leftGap + Math.max(rightGap, 0);
            fixedWidth += footTextFixedWidth;

            if (cnt === 0) {
                outmostLeftGap = halfGap;
                outmostLetter = footText[0];
            }
        }
        // Ta assume các ký tự dùng symbol font trong whole word (ví dụ ";"), có độ dài tương ứng với font thường (chỉ khác hình dạng)
        else if (WholeWordRegex.test(fragment)) {
            const normalizedWordSpacingRatio = wordLetterSpacing
                ? 1 + wordLetterSpacing / 2
                : letterSpacingRatio;
            ctx.letterSpacing = `${(normalizedWordSpacingRatio - 1) * currentFont.getFontInfo().sizeAsNumber}px`;
            const fragmentWidth = ctx.measureText(fragment).width;

            totalWidth += fragmentWidth + defaultgetExtraLeftWidth;
            currentRightGap = overheadTextGap;

            if (cnt === 0) {
                outmostLeftGap = overheadTextGap;
                outmostLetter = fragment[0];
            }
            if (debug) console.info(`analyzeToken ${debug}`, token, fragment, fragmentWidth, currentRightGap, defaultgetExtraLeftWidth);
            ctx.letterSpacing = '0px';
        }
        /** Một số ký tự dùng font đặc biệt */
        else if (TCGLetterRegex.test(fragment) && format === 'tcg') {
            const fragmentWidth = withSymbolFont(() => ctx.measureText(fragment).width);

            totalWidth += fragmentWidth * letterSpacingRatio + defaultgetExtraLeftWidth;
            currentRightGap = overheadTextGap;
            if (cnt === 0) {
                outmostLeftGap = overheadTextGap;
                outmostLetter = fragment[0];
            }
            if (debug) console.info(`analyzeToken ${debug}`, token, fragment, fragmentWidth, currentRightGap, defaultgetExtraLeftWidth);
        }
        /** Các ký tự còn lại */
        else {
            const { boundWidth: fragmentWidth } = getLetterWidth({ ctx, letter: fragment, lastOfLine, format, metricMethod });

            totalWidth += fragmentWidth * letterSpacingRatio + defaultgetExtraLeftWidth;
            currentRightGap = overheadTextGap;
            if (
                (format === 'ocg' || (format === 'tcg' && /\s+/.test(fragment)))
                && NoSpaceRegex.test(fragment) !== true
            ) {
                spaceCount += 1;
                if (cnt === fragmentList.length - 1) spaceAtEnd = true;
            }
            if (cnt === 0) {
                outmostLeftGap = overheadTextGap;
                outmostLetter = fragment[0];
            }
            if (debug) console.info(`analyzeToken ${debug}`, token, fragment, fragmentWidth, currentRightGap, defaultgetExtraLeftWidth);
        }
    }

    return {
        totalWidth,
        space: spaceCount,
        spaceAtEnd,
        fixedWidth,
        outmostLetter,
        rightGap: currentRightGap,
        leftGap: outmostLeftGap,
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
            outmostLetter,
        } = analyzeToken({ ctx, token, nextToken, xRatio, previousTokenGap: currentGap, textData, format });
        const indent = (
            (cnt === 0 && leftGap > 0 ? Math.min(MAX_LINE_REVERSE_INDENT, leftGap * xRatio) * -1 : 0)
            +
            (cnt === 0 && OCGAlphabetRegex.test(outmostLetter) ? START_OF_LINE_ALPHABET_OFFSET * xRatio : 0)
        );

        currentGap = rightGap;
        totalContentWidth += totalWidth * xRatio + indent;
        spaceCount += space - (spaceAtEnd && nextToken === undefined ? 1 : 0);
    }
    const expectedSpaceWidth = spaceCount > 0 ? (width - totalContentWidth) / spaceCount : 0;

    /** TCG không chia space thừa vào line cuối, OCG thì có, nhưng chỉ chia nếu phần space bonus không quá lớn */
    const extraSpace = isLast
        ? format === 'tcg'
            ? expectedSpaceWidth > 1.500 ? 0 : expectedSpaceWidth
            : expectedSpaceWidth > 3.200 ? 0 : expectedSpaceWidth
        : expectedSpaceWidth;

    return {
        tokenList,
        extraSpace,
    };
};