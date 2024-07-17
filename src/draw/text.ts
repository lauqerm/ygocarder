import {
    BULLET_LETTER,
    CapitalLetterRegex,
    DefaultFontData,
    DefaultFontSizeData,
    FragmentSplitRegex,
    LETTER_GAP_RATIO,
    MAX_LINE_REVERSE_INDENT,
    NB_UNCOMPRESSED_END,
    NB_UNCOMPRESSED_START,
    NoSpaceRegex,
    NumberRegex,
    OCGAlphabetRegex,
    START_OF_LINE_ALPHABET_OFFSET,
    START_OF_LINE_GAP,
    ST_ICON_SYMBOL,
    SquareBracketLetterRegex,
    TCGLetterRegex,
    TCGSymbolRegex,
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
import { fillHeadText } from './text-overhead';
// import { drawMarker } from './canvas-util';

export const drawLine = ({
    ctx,
    tokenList,
    trueEdge, trueBaseline,
    extraSpace = 0,
    xRatio: baseXRatio, yRatio = 1,
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
        overheadTextHeightRatio = DefaultFontData.overheadTextHeightRatio,
    } = fontData;
    const {
        letterSpacing = DefaultFontSizeData.letterSpacing,
        wordLetterSpacing,
        capitalLetterRatio = DefaultFontSizeData.capitalLetterRatio,
        squareBracketRatio = DefaultFontSizeData.squareBracketRatio,
        fontSize,
        bulletSymbolWidth,
        iconSymbolWidth = bulletSymbolWidth,
        largeSymbolRatio = DefaultFontSizeData.largeSymbolRatio,
        overheadTextSpacing = DefaultFontSizeData.overheadTextSpacing,
    } = fontSizeData;
    const overheadTextGap = fontSize * LETTER_GAP_RATIO;
    const textWorker = getTextWorker(ctx, fontData, fontSizeData, currentFont);
    const {
        stopApplyFuriganaFont, applyFuriganaFont,
        stopApplyLargerText, applyLargerText,
        stopApplyNumberFont, applyNumberFont,
        stopApplyOrdinalFont, applyOrdinalFont,
        applyScale, reverseScale,
        applySymbolFont, stopApplySymbolFont,
        applyAsymmetricScale, resetScale,
    } = textWorker;

    const letterSpacingRatio = 1 + letterSpacing / 2;
    const baseline = trueBaseline / yRatio;
    let previousTokenGap = START_OF_LINE_GAP;
    /** Rebalance */
    let previousTokenVacantSpace = 0;
    let tokenEdge = trueEdge;
    for (let tokenCnt = 0, xRatio = baseXRatio; tokenCnt < tokenList.length; tokenCnt++) {
        const token = tokenList[tokenCnt];
        /** Bật / tắt chế độ không nén */
        if (token === NB_UNCOMPRESSED_START) {
            xRatio = 1;
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            continue;
        }
        else if (token === NB_UNCOMPRESSED_END) {
            xRatio = baseXRatio;
            ctx.scale(xRatio, 1);
            continue;
        }
        const nextToken = tokenList[tokenCnt + 1];
        const next2ndToken = tokenList[tokenCnt + 2];
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
         * việc âm ngược để tránh tràn headText quá nhiều
         */
        const indent = tokenCnt === 0
            ? (leftGap > 0 ? Math.min(MAX_LINE_REVERSE_INDENT, leftGap * xRatio) * -1 : 0)
                + (OCGAlphabetRegex.test(outmostLetter) ? START_OF_LINE_ALPHABET_OFFSET : 0)
            : 0;

        let fragmentEdge = tokenEdge + indent;
        let fragmentRightGap = previousTokenGap;
        let accumulatedSpace = 0;
        /** Độ dài tăng thêm do gap từ token trước đó */

        for (let fragmentCnt = 0; fragmentCnt < fragmentList.length; fragmentCnt++) {
            const fragment = fragmentList[fragmentCnt];
            const nextFragment = fragmentList[fragmentCnt + 1] ?? nextToken;
            const next2ndFragment = fragmentList[tokenCnt + 2] ?? next2ndToken;
            const previousGapOffset = getExtraLeftWidth(fragmentRightGap, overheadTextGap) * xRatio;
            
            /** Không vẽ các ký tự này */
            if (token === NB_UNCOMPRESSED_START || token === NB_UNCOMPRESSED_END) {}
            /** Symbol S/T không bị compress, ta vẽ symbol S/T riêng, ở đây chỉ chừa chỗ trống */
            else if (fragment === ST_ICON_SYMBOL) {
                fragmentEdge += previousGapOffset;
                resetScale();
                fragmentEdge += iconSymbolWidth * letterSpacingRatio;
                applyAsymmetricScale(xRatio, yRatio);
                fragmentRightGap = overheadTextGap;
                previousTokenVacantSpace = 0;
            }
            /** Symbol ● không bị compress */
            else if (fragment === BULLET_LETTER) {
                fragmentEdge += previousGapOffset;
                resetScale();
                drawBullet(ctx, fragmentEdge, trueBaseline, bulletSymbolWidth, getBulletSpacing(format));
                fragmentEdge += bulletSymbolWidth * letterSpacingRatio;
                applyAsymmetricScale(xRatio, yRatio);
                fragmentRightGap = overheadTextGap;
                previousTokenVacantSpace = 0;
            }
            /** OCG Ordinal symbol không bị compress */
            else if (/[©]/.test(fragment)) {
                fragmentEdge += previousGapOffset;
                resetScale();
                applyLargerText(largeSymbolRatio);
                drawLetter({
                    ...drawLetterParameter,
                    letter: fragment,
                    edge: fragmentEdge * xRatio,
                    baseline: trueBaseline + 2
                });
                fragmentEdge += ctx.measureText(fragment).width * letterSpacingRatio;
                stopApplyLargerText();
                applyAsymmetricScale(xRatio, yRatio);
                fragmentRightGap = overheadTextGap;
                previousTokenVacantSpace = 0;
            }
            /** OCG Ordinal symbol không bị compress */
            else if (/[①-⑳]/.test(fragment)) {
                fragmentEdge += previousGapOffset;
                resetScale();
                applyOrdinalFont();
                drawLetter({
                    ...drawLetterParameter,
                    letter: fragment,
                    edge: fragmentEdge * xRatio,
                    baseline: trueBaseline - 2
                });
                fragmentEdge += ctx.measureText(fragment).width * letterSpacingRatio;
                stopApplyOrdinalFont();
                applyAsymmetricScale(xRatio, yRatio);
                fragmentEdge += extraSpace;
                accumulatedSpace += extraSpace;
                fragmentRightGap = overheadTextGap;
                previousTokenVacantSpace = 0;
            }
            /** Cụm ruby cần tách đôi các phần */
            else if (/{[^{}]+?}/.test(fragment)) {
                const [footText, headText = ''] = fragment.replaceAll(/{|}/g, '').split('|');
                /** Ta assume cụm ruby không lồng nhau */
                const { totalWidth: footTextWidth } = analyzeToken({
                    token: footText, nextToken: nextFragment,
                    previousTokenGap: 0,
                    ...analyzeTokenParameter,
                });

                applyFuriganaFont();
                const headTextLetterWidth = headText
                    .split('')
                    .map(letter => getLetterWidth({ ctx, letter, format, metricMethod: 'compact', xRatio }).boundWidth)
                    .reduce((acc, cur) => acc + cur, 0);
                stopApplyFuriganaFont();

                const {
                    headTextWidth,
                    halfGap,
                } = getHeadTextWidth({ headText, headTextLetterWidth, footText, footTextWidth, overheadTextGap, overheadTextSpacing });
                const rightGap = halfGap, leftGap = halfGap;
                /** Phần không gian mất đi do fragment âm vào gap phải của token trước (nếu có) */
                const lostLeftWidth = getExtraLeftOffset(fragmentRightGap, leftGap);
                const nextLeftGap = analyzeToken({
                    token: nextFragment, nextToken: next2ndFragment,
                    previousTokenGap: rightGap,
                    ...analyzeTokenParameter,
                }).leftGap;
                /** Phần không gian mất đi do next gap âm vào fragment (nếu có) */
                const lostRightWidth = getExtraLeftOffset(rightGap, nextLeftGap);
                const vacantSpace = footTextWidth < headTextWidth
                    ? headTextWidth - lostLeftWidth - lostRightWidth
                    : 0;
                /** Không gian trống từ fragment phía trước cho tới foot text sau khi đã âm head text */
                const vacantLeftWidth = getExtraLeftWidth(fragmentRightGap, leftGap);
                let footTextFragmentEdge = Math.round(
                    fragmentEdge
                    + (previousTokenVacantSpace > 0 ? previousTokenVacantSpace / -2 : 0) * xRatio
                    + (indent
                        ? vacantLeftWidth
                        : vacantSpace - footTextWidth > 0 || footTextWidth - vacantSpace <= 1e-2
                            ? (vacantSpace - footTextWidth) / 2
                            : lostLeftWidth * -1) * xRatio
                );
                previousTokenVacantSpace = rightGap > 0 ? Math.min(fontSize / 3, rightGap - lostRightWidth) / 2 : 0;

                for (let cnt3 = 0; cnt3 < footText.length; cnt3++) {
                    const footLetter = footText[cnt3];
                    const letterMetric = getLetterWidth({
                        ctx,
                        letter: footLetter,
                        format,
                        metricMethod,
                        lastOfLine: nextFragment === undefined,
                        xRatio,
                    });

                    drawLetter({
                        ...drawLetterParameter,
                        letter: footLetter,
                        edge: footTextFragmentEdge,
                        letterMetric,
                    });
                    footTextFragmentEdge += letterMetric.boundWidth * letterSpacingRatio * xRatio;
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
                    overheadTextGap,
                    overheadTextSpacing,
                    overheadTextHeightRatio,
                    xRatio,
                    format,
                    textWorker,
                });
                ctx.fillStyle = currentFillStyle;
                ctx.strokeStyle = currentStrokeStyle;

                fragmentEdge += (footTextWidth + vacantLeftWidth + Math.max(rightGap, 0)) * xRatio + extraSpace;
                fragmentRightGap = rightGap;
                accumulatedSpace += extraSpace;
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
                    /** Độ dài thực của ký tự khi đứng trong từ */
                    let actualLetterWidth = 0;
                    if (SquareBracketLetterRegex.test(currentLetter)) {
                        applyScale(squareBracketRatio);
                        actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                        drawLetter({
                            ...drawLetterParameter,
                            letter: currentLetter,
                            edge: currentPosition / squareBracketRatio,
                            baseline: baseline / squareBracketRatio,
                        });
                        reverseScale(squareBracketRatio);
                    } else if (CapitalLetterRegex.test(currentLetter)) {
                        applyScale(capitalLetterRatio);
                        actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                        const letterOffset = (actualLetterWidth > ctx.measureText(currentLetter).width * capitalLetterRatio)
                            ? Math.round(actualLetterWidth * (1 - capitalLetterRatio)) / 2
                            : 0;
                        drawLetter({
                            ...drawLetterParameter,
                            letter: currentLetter,
                            edge: currentPosition / capitalLetterRatio + letterOffset,
                            baseline: baseline / capitalLetterRatio
                        });
                        reverseScale(capitalLetterRatio);
                    } else if (NumberRegex.test(currentLetter)) {
                        applyNumberFont();
                        actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                        drawLetter({
                            ...drawLetterParameter,
                            letter: currentLetter,
                            edge: currentPosition,
                        });
                        stopApplyNumberFont();
                    } else if (TCGSymbolRegex.test(currentLetter) && format === 'tcg') {
                        applySymbolFont();
                        actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                        drawLetter({
                            ...drawLetterParameter,
                            letter: currentLetter,
                            edge: currentPosition,
                        });
                        stopApplySymbolFont();
                    } else {
                        actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                        drawLetter({
                            ...drawLetterParameter,
                            letter: currentLetter,
                            edge: currentPosition,
                        });
                    }
                    currentPosition += actualLetterWidth * xRatio;
                    remainFragment = nextRemainFragment;
                }

                fragmentEdge += ctx.measureText(fragment).width * xRatio;
                fragmentRightGap = overheadTextGap;
                previousTokenVacantSpace = 0;
                ctx.letterSpacing = '0px';
            }
            /** Một số ký tự dùng font đặc biệt */
            else if (TCGLetterRegex.test(fragment) && format === 'tcg') {
                fragmentEdge += previousGapOffset;
                applySymbolFont();
                drawLetter({ ...drawLetterParameter, letter: fragment, edge: fragmentEdge });

                fragmentEdge += ctx.measureText(fragment).width * letterSpacingRatio;
                stopApplySymbolFont();
                fragmentRightGap = overheadTextGap;
                previousTokenVacantSpace = 0;
            }
            else {
                fragmentEdge += previousGapOffset;
                const letterMetric = getLetterWidth({
                    ctx,
                    letter: fragment,
                    format,
                    metricMethod,
                    lastOfLine: nextFragment === undefined,
                    xRatio,
                });

                drawLetter({ ...drawLetterParameter, letter: fragment, edge: fragmentEdge, letterMetric });
                fragmentEdge += letterMetric.boundWidth * letterSpacingRatio * xRatio;
                if (
                    (format === 'ocg' || (format === 'tcg' && /\s+/.test(fragment)))
                    && NoSpaceRegex.test(fragment) !== true
                ) {
                    fragmentEdge += extraSpace;
                    accumulatedSpace += extraSpace;
                }
                fragmentRightGap = overheadTextGap;
                previousTokenVacantSpace = 0;
            }
        }
        previousTokenGap = rightGap;
        /** Token ở đầu line không có gap (tức là cho phép furigana chạy âm về lề trái) */
        // drawMarker({ ctx, baseline, trueEdge: tokenEdge, width: totalTokenWidth * xRatio, xRatio });
        tokenEdge += totalTokenWidth * xRatio + accumulatedSpace + indent;
    }

    return tokenEdge;
};