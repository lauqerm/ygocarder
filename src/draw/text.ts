import {
    BULLET_LETTER,
    CHIISAI_RATIO,
    CHIISAI_REGEX,
    CHOONPU_RATIO,
    CHOONPU_REGEX,
    DEFAULT_LETTER_SPACING,
    DEFAULT_TEXT_GAP,
    FontData,
    FontSize,
    HIRAGANA_RATIO,
    HIRAGANA_REGEX,
    KATAKANA_RATIO,
    KATAKANA_REGEX,
    MAX_LINE_REVERSE_INDENT,
    OCG_ALPHABET_REGEX,
    OCG_DOT_RATIO,
    OCG_DOT_REGEX,
    OCG_INCREASED_WIDTH_RATIO,
    OCG_INCREASED_WIDTH_REGEX,
    OCG_LETTER_RATIO,
    OCG_NUMBER_RATIO,
    OCG_NUMBER_REGEX,
    OCG_REDUCED_WIDTH_RATIO,
    OCG_REDUCED_WIDTH_REGEX,
    SPECIAL_LETTER_REGEX,
    START_OF_LINE_ALPHABET_OFFSET,
    START_OF_LINE_GAP,
    getBulletSpacing,
} from 'src/model';
import {
    createFontGetter,
    drawBullet,
    getExtraLeftOffset,
    getExtraLeftWidth,
    getHeadTextWidth,
    getLetterWidth,
    getTextWorker,
    getTrueLetterWidth,
} from './text-util';
import { analyzeToken } from './text-analyze';

/** Vẽ ký tự lẻ, hàm này chịu ảnh hưởng bởi transform ratio. */
const drawLetter = (
    ctx: CanvasRenderingContext2D,
    letter: string,
    edge: number,
    baseline: number,
    xRatio: number,
) => {
    const letterWidth = getTrueLetterWidth({ ctx, letter }) * xRatio;
    if (OCG_DOT_REGEX.test(letter)) {
        ctx.fillText(letter, edge / xRatio - letterWidth * (1 - OCG_DOT_RATIO) / 2, baseline);

        return letterWidth * OCG_DOT_RATIO;
    }
    if (CHOONPU_REGEX.test(letter)) {
        ctx.fillText(letter, edge / xRatio - letterWidth * (1 - CHOONPU_RATIO) / 2, baseline);

        return letterWidth * CHOONPU_RATIO;
    }
    if (CHIISAI_REGEX.test(letter)) {
        ctx.fillText(letter, edge / xRatio - letterWidth * (1 - CHIISAI_RATIO) / 2, baseline);

        return letterWidth * CHIISAI_RATIO;
    }
    if (OCG_NUMBER_REGEX.test(letter)) {
        ctx.fillText(letter, edge / xRatio - letterWidth * (1 - OCG_NUMBER_RATIO) / 2, baseline);

        return letterWidth * OCG_NUMBER_RATIO;
    }
    /** Theo lý thuyết ta cần xử lý case dấu chấm / phẩy ở cuối dòng, nhưng khi vẽ ở cuối dòng thì thông số này được reset ở dòng mới.
     * Nên không xử lý gì thêm
     */
    if (OCG_REDUCED_WIDTH_REGEX.test(letter)) {
        ctx.fillText(letter, edge / xRatio, baseline);

        /** Tương tự trường hợp dấu chấm */
        return letterWidth * OCG_REDUCED_WIDTH_RATIO;
    }
    if (OCG_INCREASED_WIDTH_REGEX.test(letter)) {
        ctx.fillText(letter, edge / xRatio - letterWidth * (1 - OCG_INCREASED_WIDTH_RATIO) / 2, baseline);

        return letterWidth * OCG_INCREASED_WIDTH_RATIO;
    }
    if (HIRAGANA_REGEX.test(letter)) {
        ctx.fillText(letter, edge / xRatio - letterWidth * (1 - HIRAGANA_RATIO) / 2, baseline);

        return letterWidth * HIRAGANA_RATIO;
    }
    if (KATAKANA_REGEX.test(letter)) {
        ctx.fillText(letter, edge / xRatio - letterWidth * (1 - KATAKANA_RATIO) / 2, baseline);

        return letterWidth * KATAKANA_RATIO;
    }

    ctx.fillText(letter, edge / xRatio - letterWidth * (1 - OCG_LETTER_RATIO) / 2, baseline);

    return letterWidth * OCG_LETTER_RATIO;
};

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
    withFurigana: (worker: (internalEdge: number) => number, edge?: number) => number,
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
    left, trueBaseline,
    additionalSpaceWidth,
    letterSpacing = DEFAULT_LETTER_SPACING,
    xRatio, yRatio,
    fontInfo,
    format,
}: {
    ctx: CanvasRenderingContext2D,
    tokenList: string[],
    xRatio: number,
    yRatio: number,
    left: number,
    trueBaseline: number,
    letterSpacing?: number,
    additionalSpaceWidth: number,
    fontInfo: {
        fontData: FontData,
        fontSizeData: FontSize,
        currentFont: ReturnType<typeof createFontGetter>,
    },
    format: string,
}) => {
    const {
        currentFont,
        fontData,
        fontSizeData,
    } = fontInfo;
    const {
        fontSize,
        bulletSymbolWidth,
    } = fontSizeData;
    const {
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
    for (let cnt = 0, tokenEdge = left; cnt < tokenList.length; cnt++) {
        const token = tokenList[cnt];
        const nextToken = tokenList[cnt + 1];
        const next2ndToken = tokenList[cnt + 2];
        const fragmentList = token.split(/({[^{}]+?}|.)/).filter(entry => entry != null && entry !== '');
        const {
            outmostLetter,
            leftGap,
            rightGap,
            totalWidth: totalTokenWidth,
        } = analyzeToken({ ctx, token, nextToken, xRatio, previousTokenGap, letterSpacing, fontInfo, format });

        /** Token ở đầu line có quyền âm ngược ra lề trái, tuy nhiên footText không được tràn ra khỏi lề, ngoài ra ta giới hạn
         * việc âm ngược để tránh tràn
         */
        const indent = (cnt === 0 && leftGap > 0 ? Math.min(MAX_LINE_REVERSE_INDENT, leftGap * xRatio) * -1 : 0)
            + (cnt === 0 && OCG_ALPHABET_REGEX.test(outmostLetter) ? START_OF_LINE_ALPHABET_OFFSET : 0);

        let fragmentEdge = tokenEdge + indent;
        let fragmentGap = previousTokenGap;
        let accumulatedSpace = 0;
        for (let cnt2 = 0; cnt2 < fragmentList.length; cnt2++) {
            const fragment = fragmentList[cnt2];
            const nextFragment = fragmentList[cnt2 + 1] ?? nextToken;
            const next2ndFragment = fragmentList[cnt + 2] ?? next2ndToken;
            /** Các symbol ordinal như ① ② ③ không bị compress */
            if (fragment === BULLET_LETTER) {
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
            // /** OCG Ordinal symbol không bị compress */
            else if (/[①-⑳]/.test(fragment)) {
                fragmentEdge += getExtraLeftWidth(fragmentGap, DEFAULT_TEXT_GAP) * xRatio;
                fragmentEdge += withUncompressText(
                    internalTokenEdge => {
                        return withOrdinalFont(
                            internalFragmentTrueEdge => {
                                ctx.fillText(fragment, internalFragmentTrueEdge, trueBaseline - 2);

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
                    fontInfo,
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
                    fontInfo,
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
                        fontInfo,
                    });

                    drawLetter(ctx, footLetter, footTextFragmentEdge, baseline, xRatio);
                    footTextFragmentEdge += totalWidth * xRatio;
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

                fragmentEdge += (footTextWidth + vacantLeftWidth + Math.max(rightGap, 0)) * xRatio;
                fragmentGap = rightGap;
            }
            /** Một số ký tự dùng font đặc biệt */
            else if (SPECIAL_LETTER_REGEX.test(fragment) && format === 'tcg') {
                fragmentEdge += withSymbolFont(
                    tokenEdge => {
                        ctx.fillText(fragment, tokenEdge / xRatio, baseline);

                        return ctx.measureText(fragment).width * letterSpacingRatio * xRatio;
                    },
                    tokenEdge,
                );
                fragmentGap = DEFAULT_TEXT_GAP;
            }
            else {
                fragmentEdge += getExtraLeftWidth(fragmentGap, DEFAULT_TEXT_GAP) * xRatio;
                const letterWidth = getLetterWidth({ ctx, letter: fragment, format, lastOfLine: nextFragment === undefined });

                drawLetter(ctx, fragment, fragmentEdge, baseline, xRatio);
                // drawMarker({ ctx, color: randomDarkColor(), baseline, trueEdge: fragmentEdge, width: letterWidth * xRatio, xRatio, offset: 0 });
                fragmentEdge += letterWidth * letterSpacingRatio * xRatio;
                if (format === 'ocg') {
                    fragmentEdge += additionalSpaceWidth;
                    accumulatedSpace += additionalSpaceWidth;
                } else if (format === 'tcg' && /\s*/.test(fragment)) {
                    fragmentEdge += additionalSpaceWidth;
                    accumulatedSpace += additionalSpaceWidth;
                }
                fragmentGap = DEFAULT_TEXT_GAP;
            }
        }
        previousTokenGap = rightGap;
        /** Token ở đầu line không có gap (tức là cho phép furigana chạy âm về lề trái) */
        // drawMarker({ ctx, color: randomDarkColor(), baseline, trueEdge: tokenEdge, width: totalTokenWidth * xRatio, xRatio, offset: 0 });
        tokenEdge += totalTokenWidth * xRatio + accumulatedSpace + indent;
    }
};