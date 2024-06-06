import {
    BULLET_LETTER,
    CapitalLetterRegex,
    DEFAULT_TEXT_GAP,
    DefaultFontSizeData,
    FragmentSplitRegex,
    KATAKANA_RATIO,
    MAX_LINE_REVERSE_INDENT,
    NoSpaceRegex,
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
import { TextDrawer, drawLetterV2, getLetterWidth } from './letter';

/** Vẽ các ký tự overhead (furigana) */
export const fillHeadText = ({
    ctx,
    fontSize,
    edge, baseline,
    headText, headTextLetterWidth,
    footText, footTextWidth,
    xRatio,
    format,
    withFurigana,
}: {
    ctx: CanvasRenderingContext2D,
    fontSize: number,
    headText: string, headTextLetterWidth: number,
    footText: string, footTextWidth: number,
    edge: number, baseline: number,
    xRatio: number,
    format: string,
    withFurigana: (worker: (innerEdge: number) => number, edge?: number) => number,
}) => {
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
                ctx.fillText(letter, edge / xRatio / KATAKANA_RATIO, baseline - fontSize * 0.75);
                const letterWidth = getLetterWidth({ ctx, letter, format, metricMethod: 'compact' });

                return (letterWidth.boundWidth + letterSpacing) * xRatio;
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
    extraSpace = 0,
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
    extraSpace?: number,
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
        metricMethod,
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
    const analyzeTokenParameter = {
        ctx,
        xRatio,
        letterSpacing,
        format,
        textData,
    };
    const drawLetterParameter = {
        ctx,
        baseline,
        xRatio,
        textDrawer,
    };
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
            token, nextToken, previousTokenGap, ...analyzeTokenParameter,
        });

        /** Token ở đầu line có quyền âm ngược ra lề trái, tuy nhiên footText không được tràn ra khỏi lề, ngoài ra ta giới hạn
         * việc âm ngược để tránh tràn
         */
        const indent = (tokenCnt === 0 && leftGap > 0 ? Math.min(MAX_LINE_REVERSE_INDENT, leftGap * xRatio) * -1 : 0)
            + (tokenCnt === 0 && OCGAlphabetRegex.test(outmostLetter) ? START_OF_LINE_ALPHABET_OFFSET : 0);

        let fragmentEdge = tokenEdge + indent;
        let fragmentGap = previousTokenGap;
        let accumulatedSpace = 0;
        /** Độ dài tăng thêm do gap từ token trước đó */

        for (let fragmentCnt = 0; fragmentCnt < fragmentList.length; fragmentCnt++) {
            const fragment = fragmentList[fragmentCnt];
            const nextFragment = fragmentList[fragmentCnt + 1] ?? nextToken;
            const next2ndFragment = fragmentList[tokenCnt + 2] ?? next2ndToken;
            const previousGapOffset = getExtraLeftWidth(fragmentGap, DEFAULT_TEXT_GAP) * xRatio;

            /** Symbol S/T không bị compress */
            if (fragment === ST_ICON_SYMBOL) {
                fragmentEdge += previousGapOffset;
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
                fragmentEdge += previousGapOffset;
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
                fragmentEdge += previousGapOffset;
                fragmentEdge += withUncompressText(
                    internalTokenEdge => {
                        return withLargerText(
                            internalFragmentTrueEdge => {
                                drawLetterV2({
                                    ...drawLetterParameter,
                                    letter: fragment,
                                    edge: internalFragmentTrueEdge * xRatio,
                                    baseline: trueBaseline + 2
                                });

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
                fragmentEdge += previousGapOffset;
                fragmentEdge += withUncompressText(
                    internalTokenEdge => {
                        return withOrdinalFont(
                            internalFragmentTrueEdge => {
                                drawLetterV2({
                                    ...drawLetterParameter,
                                    letter: fragment,
                                    edge: internalFragmentTrueEdge * xRatio,
                                    baseline: trueBaseline - 2
                                });

                                return ctx.measureText(fragment).width * letterSpacingRatio;
                            },
                            internalTokenEdge,
                        );
                    },
                    fragmentEdge,
                    xRatio, yRatio,
                );
                fragmentEdge += extraSpace;
                accumulatedSpace += extraSpace;
                fragmentGap = DEFAULT_TEXT_GAP;
            }
            /** Cụm ruby cần tách đôi các phần */
            else if (/{[^{}]+?}/.test(fragment)) {
                const [footText, headText] = fragment.replaceAll(/{|}/g, '').split('|');
                /** Ta assume cụm ruby không lồng nhau */
                const { totalWidth: footTextWidth } = analyzeToken({
                    token: footText, nextToken: nextFragment,
                    previousTokenGap: 0,
                    ...analyzeTokenParameter,
                });
                const headTextLetterWidth = withFurigana(() => {
                    return headText
                        .split('')
                        .map(letter => getLetterWidth({ ctx, letter, format, metricMethod: 'compact' }).boundWidth)
                        .reduce((acc, cur) => acc + cur, 0);
                }, 0);
                const { headTextWidth, halfGap } = getHeadTextWidth({ headText, headTextLetterWidth, footText, footTextWidth });
                const rightGap = halfGap;
                /** Phần không gian mất đi do fragment âm vào previous gap (nếu có) */
                const lostLeftWidth = getExtraLeftOffset(fragmentGap, halfGap);
                const nextLeftGap = analyzeToken({
                    token: nextFragment, nextToken: next2ndFragment,
                    previousTokenGap: rightGap,
                    ...analyzeTokenParameter,
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
                        token: footLetter, nextToken: nextFootLetter,
                        previousTokenGap: 0,
                        ...analyzeTokenParameter,
                    });

                    drawLetterV2({
                        ...drawLetterParameter,
                        letter: footLetter,
                        edge: footTextFragmentEdge,
                    });
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
                    headText, headTextLetterWidth,
                    footText, footTextWidth,
                    xRatio,
                    format,
                    withFurigana,
                });
                ctx.fillStyle = currentFillStyle;
                ctx.strokeStyle = currentStrokeStyle;

                fragmentEdge += (footTextWidth + vacantLeftWidth + Math.max(rightGap, 0)) * xRatio;
                fragmentGap = rightGap;
            }
            else if (WholeWordRegex.test(fragment)) {
                fragmentEdge += previousGapOffset;
                const normalizedWordSpacingRatio = wordLetterSpacing
                    ? 1 + wordLetterSpacing / 2
                    : letterSpacingRatio;
                ctx.letterSpacing = `${(normalizedWordSpacingRatio - 1) * currentFont.getFontInfo().sizeAsNumber}px`;

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
                                drawLetterV2({
                                    ...drawLetterParameter,
                                    letter: currentLetter,
                                    edge: innerEdge / innerYRatio,
                                    baseline: innerBaseline / innerYRatio,
                                });
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
                                drawLetterV2({
                                    ...drawLetterParameter,
                                    letter: currentLetter,
                                    edge: innerEdge / innerYRatio + letterOffset,
                                    baseline: innerBaseline / innerYRatio
                                });
                            },
                            currentPosition,
                            baseline,
                            capitalLetterRatio,
                        );
                    } else if (TCGNonSymbolRegex.test(currentLetter) && format === 'tcg') {
                        withSymbolFont(
                            (innerEdge) => {
                                drawLetterV2({
                                    ...drawLetterParameter,
                                    letter: currentLetter,
                                    edge: innerEdge,
                                });
                            },
                            currentPosition,
                        );
                    } else {
                        drawLetterV2({
                            ...drawLetterParameter,
                            letter: currentLetter,
                            edge: currentPosition,
                        });
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
                fragmentEdge += previousGapOffset;
                fragmentEdge += withSymbolFont(
                    tokenEdge => {
                        drawLetterV2({ ...drawLetterParameter, letter: fragment, edge: tokenEdge });

                        return ctx.measureText(fragment).width * letterSpacingRatio;
                    },
                    fragmentEdge,
                );
                fragmentGap = DEFAULT_TEXT_GAP;
            }
            else {
                fragmentEdge += previousGapOffset;
                const letterMetric = getLetterWidth({ ctx, letter: fragment, format, metricMethod, lastOfLine: nextFragment === undefined });

                drawLetterV2({ ...drawLetterParameter, letter: fragment, edge: fragmentEdge, letterMetric });
                fragmentEdge += letterMetric.boundWidth * letterSpacingRatio * xRatio;
                if (
                    (format === 'ocg' || (format === 'tcg' && /\s+/.test(fragment)))
                    && NoSpaceRegex.test(fragment) !== true
                ) {
                    fragmentEdge += extraSpace;
                    accumulatedSpace += extraSpace;
                }
                fragmentGap = DEFAULT_TEXT_GAP;
            }
        }
        previousTokenGap = rightGap;
        /** Token ở đầu line không có gap (tức là cho phép furigana chạy âm về lề trái) */
        // drawMarker({ ctx, color, baseline, trueEdge: tokenEdge, width: 64 * xRatio, xRatio, offset: (tokenCnt * 2 + 1) * 0.5 });
        tokenEdge += totalTokenWidth * xRatio + accumulatedSpace + indent;
    }
    // console.table(
    //     tokenList.join('').split('').map(e => {
    //         const metric = ctx.measureText(e);
    //         metric.letter = e;
    //         return metric;
    //     }),
    // );

    return tokenEdge;
};