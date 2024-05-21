import {
    BULLET_LETTER,
    CapitalLetterRegex,
    DEFAULT_TEXT_GAP,
    DefaultFontSizeData,
    FragmentSplitRegex,
    KATAKANA_RATIO,
    MAX_LINE_REVERSE_INDENT,
    OCGAlphabetRegex,
    START_OF_LINE_ALPHABET_OFFSET,
    START_OF_LINE_GAP,
    ST_ICON_SYMBOL,
    SquareBracketLetterRegex,
    TCGLetterRegex,
    TCGNonSymbolRegex,
    TextData,
    WholeWordRegex,
    getBulletSpacing,
} from 'src/model';
import {
    drawBullet,
    getExtraLeftOffset,
    getExtraLeftWidth,
    getHeadTextWidth,
    getTextWorker,
} from './text-util';
import { analyzeToken } from './text-analyze';
import { TextDrawer, drawLetter, getLetterWidth } from './letter';

/** Vẽ các ký tự overhead (furigana) */
export const fillHeadText = ({
    ctx,
    fontSize,
    edge, baseline,
    headText,
    footText, footTextWidth,
    xRatio,
    withFurigana,
}: {
    ctx: CanvasRenderingContext2D,
    fontSize: number,
    headText: string,
    footText: string, footTextWidth: number,
    edge: number, baseline: number,
    xRatio: number,
    withFurigana: (worker: (innerEdge: number) => number, edge?: number) => number,
}) => {
    const headTextLetterWidth = withFurigana(() => KATAKANA_RATIO * ctx.measureText(headText).width, 0);
    const {
        letterSpacing,
        headTextWidth,
        halfGap,
        alignment,
    } = getHeadTextWidth({ headText, headTextLetterWidth, footText, footTextWidth });
    const overflow = headTextWidth > footTextWidth;
    let currentEdge = edge + xRatio * (alignment === 'center'
        ? overflow
            ? 0
            : (footTextWidth / 2 - headTextWidth / 2)
        : halfGap * -1);

    for (const letter of headText) {
        currentEdge += withFurigana(
            edge => {
                ctx.scale(KATAKANA_RATIO, 1);
                ctx.fillText(letter, edge / xRatio / KATAKANA_RATIO, baseline - fontSize * 0.75);
                ctx.scale(1 / KATAKANA_RATIO, 1);

                return (ctx.measureText(letter).width * KATAKANA_RATIO + letterSpacing) * xRatio;
            },
            currentEdge,
        );
    }

    return {
        headTextWidth,
        halfGap,
    };
};

export const drawLine = ({
    ctx,
    tokenList,
    trueEdge, trueBaseline,
    additionalSpaceWidth = 0,
    xRatio, yRatio = 1,
    textData,
    format,
    textDrawer,
}: {
    ctx: CanvasRenderingContext2D,
    format: string,
    tokenList: string[],
    xRatio: number,
    yRatio?: number,
    trueEdge: number,
    trueBaseline: number,
    additionalSpaceWidth?: number,
    textData: TextData,
    textDrawer?: TextDrawer,
}) => {
    const {
        currentFont,
        fontData,
        fontLevel,
    } = textData;
    const fontSizeData = fontData.fontList[fontLevel];
    const {
        headTextFillStyle,
    } = fontData;
    const {
        letterSpacing = DefaultFontSizeData.letterSpacing,
        wordLetterSpacing,
        capitalLetterRatio = DefaultFontSizeData.capitalLetterRatio,
        squareBracketRatio = DefaultFontSizeData.squareBracketRatio,
    } = fontSizeData;
    const {
        fontSize,
        bulletSymbolWidth,
        iconSymbolWidth = bulletSymbolWidth,
        largeSymbolRatio = DefaultFontSizeData.largeSymbolRatio,
    } = fontSizeData;
    const {
        withLargerText,
        withSmallerText,
        withFurigana,
        withOrdinalFont,
        withSymbolFont,
        withUncompressText,
    } = getTextWorker(ctx, fontData, fontSizeData, currentFont);
    const letterSpacingRatio = 1 + letterSpacing / 2;
    const baseline = trueBaseline / yRatio;
    let previousTokenGap = START_OF_LINE_GAP;
    /** Rebalance */
    let previousTokenVacantSpace = 0;
    let tokenEdge = trueEdge;
    for (let tokenCnt = 0; tokenCnt < tokenList.length; tokenCnt++) {
        const token = tokenList[tokenCnt];
        const nextToken = tokenList[tokenCnt + 1];
        const next2ndToken = tokenList[tokenCnt + 2];
        const fragmentList = token.split(FragmentSplitRegex).filter(entry => entry != null && entry !== '');
        const {
            outmostLetter,
            leftGap,
            rightGap,
            totalWidth: totalTokenWidth,
        } = analyzeToken({
            ctx, token, nextToken, xRatio, previousTokenGap, letterSpacing, textData, format,
        });

        /** Token ở đầu line có quyền âm ngược ra lề trái, tuy nhiên footText không được tràn ra khỏi lề, ngoài ra ta giới hạn
         * việc âm ngược để tránh tràn
         */
        const indent = (tokenCnt === 0 && leftGap > 0 ? Math.min(MAX_LINE_REVERSE_INDENT, leftGap * xRatio) * -1 : 0)
            + (tokenCnt === 0 && OCGAlphabetRegex.test(outmostLetter) ? START_OF_LINE_ALPHABET_OFFSET : 0);

        let fragmentEdge = tokenEdge + indent;
        let fragmentGap = previousTokenGap;
        let accumulatedSpace = 0;
        for (let fragmentCnt = 0; fragmentCnt < fragmentList.length; fragmentCnt++) {
            const fragment = fragmentList[fragmentCnt];
            const nextFragment = fragmentList[fragmentCnt + 1] ?? nextToken;
            const next2ndFragment = fragmentList[tokenCnt + 2] ?? next2ndToken;
            /** Symbol S/T không bị compress */
            if (fragment === ST_ICON_SYMBOL) {
                fragmentEdge += getExtraLeftWidth(fragmentGap, DEFAULT_TEXT_GAP) * xRatio;
                fragmentEdge += withUncompressText(
                    () => {
                        return iconSymbolWidth * letterSpacingRatio;
                    },
                    fragmentEdge,
                    xRatio, yRatio,
                );
                fragmentGap = DEFAULT_TEXT_GAP;
            }
            /** Các symbol ordinal như ① ② ③ không bị compress */
            else if (fragment === BULLET_LETTER) {
                fragmentEdge += getExtraLeftWidth(fragmentGap, DEFAULT_TEXT_GAP) * xRatio;
                fragmentEdge += withUncompressText(
                    internalTokenEdge => {
                        drawBullet(ctx, internalTokenEdge, trueBaseline, bulletSymbolWidth, getBulletSpacing(format));

                        return bulletSymbolWidth * letterSpacingRatio;
                    },
                    fragmentEdge,
                    xRatio, yRatio,
                );
                fragmentGap = DEFAULT_TEXT_GAP;
            }
            /** OCG Ordinal symbol không bị compress */
            else if (/[©]/.test(fragment)) {
                fragmentEdge += getExtraLeftWidth(fragmentGap, DEFAULT_TEXT_GAP) * xRatio;
                fragmentEdge += withUncompressText(
                    internalTokenEdge => {
                        return withLargerText(
                            internalFragmentTrueEdge => {
                                drawLetter(ctx, fragment, internalFragmentTrueEdge * xRatio, trueBaseline + 2, xRatio, textDrawer);

                                return ctx.measureText(fragment).width * letterSpacingRatio;
                            },
                            internalTokenEdge,
                            trueBaseline,
                            largeSymbolRatio,
                        );
                    },
                    fragmentEdge,
                    xRatio, yRatio,
                );
                fragmentGap = DEFAULT_TEXT_GAP;
            }
            /** OCG Ordinal symbol không bị compress */
            else if (/[①-⑳]/.test(fragment)) {
                fragmentEdge += getExtraLeftWidth(fragmentGap, DEFAULT_TEXT_GAP) * xRatio;
                fragmentEdge += withUncompressText(
                    internalTokenEdge => {
                        return withOrdinalFont(
                            internalFragmentTrueEdge => {
                                drawLetter(ctx, fragment, internalFragmentTrueEdge * xRatio, trueBaseline - 2, xRatio, textDrawer);

                                return ctx.measureText(fragment).width * letterSpacingRatio;
                            },
                            internalTokenEdge,
                        );
                    },
                    fragmentEdge,
                    xRatio, yRatio,
                );
                fragmentGap = DEFAULT_TEXT_GAP;
            }
            /** Cụm ruby cần tách đôi các phần */
            else if (/{[^{}]+?}/.test(fragment)) {
                const [footText, headText] = fragment.replaceAll(/{|}/g, '').split('|');
                /** Ta assume cụm ruby không lồng nhau */
                const { totalWidth: footTextWidth } = analyzeToken({
                    ctx,
                    token: footText, nextToken: nextFragment,
                    xRatio,
                    previousTokenGap: 0,
                    letterSpacing,
                    format,
                    textData,
                });
                const headTextLetterWidth = withFurigana(() => KATAKANA_RATIO * ctx.measureText(headText).width, 0);
                const { headTextWidth, halfGap } = getHeadTextWidth({ headText, headTextLetterWidth, footText, footTextWidth });
                const rightGap = halfGap;
                /** Phần không gian mất đi do fragment âm vào previous gap (nếu có) */
                const lostLeftWidth = getExtraLeftOffset(fragmentGap, halfGap);
                const nextLeftGap = analyzeToken({
                    ctx,
                    token: nextFragment, nextToken: next2ndFragment,
                    xRatio,
                    previousTokenGap: rightGap,
                    letterSpacing,
                    format,
                    textData,
                }).leftGap;
                /** Phần không gian mất đi do next gap âm vào fragment (nếu có) */
                const lostRightWidth = getExtraLeftOffset(halfGap, nextLeftGap);
                const vacantSpace = footTextWidth < headTextWidth
                    ? headTextWidth - lostLeftWidth - lostRightWidth
                    : 0;
                /** Không gian trống từ fragment phía trước cho tới foot text sau khi đã âm head text */
                const vacantLeftWidth = getExtraLeftWidth(fragmentGap, halfGap);
                let footTextFragmentEdge = Math.round(fragmentEdge
                    + (previousTokenVacantSpace > 0 ? previousTokenVacantSpace / -2 : 0) * xRatio
                    + (indent
                        ? vacantLeftWidth
                        : vacantSpace - footTextWidth > 0 || footTextWidth - vacantSpace <= 1e-2
                            ? (vacantSpace - footTextWidth) / 2
                            : lostLeftWidth * -1) * xRatio);
                previousTokenVacantSpace = halfGap > 0 ? halfGap - lostRightWidth : 0;

                for (let cnt3 = 0; cnt3 < footText.length; cnt3++) {
                    const footLetter = footText[cnt3];
                    const nextFootLetter = footText[cnt3 + 1] ?? nextFragment;
                    /** Ta assume cụm ruby không lồng nhau */
                    const { totalWidth } = analyzeToken({
                        ctx,
                        token: footLetter, nextToken: nextFootLetter,
                        xRatio,
                        previousTokenGap: 0,
                        letterSpacing,
                        format,
                        textData,
                    });

                    drawLetter(ctx, footLetter, footTextFragmentEdge, baseline, xRatio, textDrawer);
                    footTextFragmentEdge += totalWidth * xRatio;
                }

                const currentFillStyle = ctx.fillStyle;
                const currentStrokeStyle = ctx.strokeStyle;
                if (headTextFillStyle) {
                    ctx.fillStyle = headTextFillStyle;
                    ctx.strokeStyle = '';
                }
                fillHeadText({
                    ctx,
                    fontSize,
                    /** Lùi edge của head text nếu xuất hiện trường hợp head text overflow vào gap âm */
                    edge: fragmentEdge - lostLeftWidth * xRatio, baseline,
                    headText,
                    footText, footTextWidth,
                    xRatio,
                    withFurigana,
                });
                ctx.fillStyle = currentFillStyle;
                ctx.strokeStyle = currentStrokeStyle;

                fragmentEdge += (footTextWidth + vacantLeftWidth + Math.max(rightGap, 0)) * xRatio;
                fragmentGap = rightGap;
            }
            else if (WholeWordRegex.test(fragment)) {
                const normalizedWordSpacingRatio = wordLetterSpacing
                    ? 1 + wordLetterSpacing / 2
                    : letterSpacingRatio;
                ctx.letterSpacing = `${(normalizedWordSpacingRatio - 1) * currentFont.getFontInfo().sizeAsNumber}px`;
                fragmentEdge += getExtraLeftWidth(fragmentGap, DEFAULT_TEXT_GAP) * xRatio;

                // Độ dài từng chữ sẽ khác tổng độ dài khi ghép chữ, do letter spacing và conditional kerning
                let remainFragment = fragment;
                let currentPosition = fragmentEdge;
                while (remainFragment !== '') {
                    let currentLetter = remainFragment[0];
                    let nextRemainFragment = remainFragment.slice(1);
                    const actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                    if (SquareBracketLetterRegex.test(currentLetter)) {
                        withSmallerText(
                            (innerEdge, innerBaseline, innerYRatio) => {
                                drawLetter(ctx, currentLetter, innerEdge / innerYRatio, innerBaseline / innerYRatio, xRatio, textDrawer);
                            },
                            currentPosition,
                            baseline,
                            squareBracketRatio,
                        );
                    } else if (CapitalLetterRegex.test(currentLetter)) {
                        const letterOffset = (actualLetterWidth > ctx.measureText(currentLetter).width * capitalLetterRatio)
                            ? Math.round(actualLetterWidth * (1 - capitalLetterRatio)) / 2
                            : 0;
                        withSmallerText(
                            (innerEdge, innerBaseline, innerYRatio) => {
                                drawLetter(ctx, currentLetter, innerEdge / innerYRatio + letterOffset, innerBaseline / innerYRatio, xRatio, textDrawer);
                            },
                            currentPosition,
                            baseline,
                            capitalLetterRatio,
                        );
                    } else if (TCGNonSymbolRegex.test(currentLetter) && format === 'tcg') {
                        withSymbolFont(
                            (innerEdge) => {
                                drawLetter(ctx, currentLetter, innerEdge, baseline, xRatio, textDrawer);
                            },
                            currentPosition,
                        );
                    } else {
                        drawLetter(ctx, currentLetter, currentPosition, baseline, xRatio, textDrawer);
                    }
                    currentPosition += actualLetterWidth * xRatio;
                    remainFragment = nextRemainFragment;
                }

                fragmentEdge += ctx.measureText(fragment).width * xRatio;
                fragmentGap = DEFAULT_TEXT_GAP;
                ctx.letterSpacing = '0px';
            }
            /** Một số ký tự dùng font đặc biệt */
            else if (TCGLetterRegex.test(fragment) && format === 'tcg') {
                fragmentEdge += getExtraLeftWidth(fragmentGap, DEFAULT_TEXT_GAP) * xRatio;
                fragmentEdge += withSymbolFont(
                    tokenEdge => {
                        drawLetter(ctx, fragment, tokenEdge, baseline, xRatio, textDrawer);

                        return ctx.measureText(fragment).width * letterSpacingRatio;
                    },
                    fragmentEdge,
                );
                fragmentGap = DEFAULT_TEXT_GAP;
            }
            else {
                fragmentEdge += getExtraLeftWidth(fragmentGap, DEFAULT_TEXT_GAP) * xRatio;
                const letterWidth = getLetterWidth({ ctx, letter: fragment, format, lastOfLine: nextFragment === undefined });

                drawLetter(ctx, fragment, fragmentEdge, baseline, xRatio, textDrawer);
                fragmentEdge += letterWidth * letterSpacingRatio * xRatio;
                if (format === 'ocg' || (format === 'tcg' && /\s+/.test(fragment))) {
                    fragmentEdge += additionalSpaceWidth;
                    accumulatedSpace += additionalSpaceWidth;
                }
                fragmentGap = DEFAULT_TEXT_GAP;
            }
        }
        previousTokenGap = rightGap;
        /** Token ở đầu line không có gap (tức là cho phép furigana chạy âm về lề trái) */
        // const color = randomDarkColor();
        // drawMarker({ ctx, color, baseline, trueEdge: tokenEdge, width: totalTokenWidth * xRatio, xRatio, offset: (tokenCnt * 2) * 0.5 });
        // drawMarker({ ctx, color, baseline, trueEdge: tokenEdge, width: 64 * xRatio, xRatio, offset: (tokenCnt * 2 + 1) * 0.5 });
        tokenEdge += totalTokenWidth * xRatio + accumulatedSpace + indent;
    }

    return tokenEdge;
};