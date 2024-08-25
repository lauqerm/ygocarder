import {
    BULLET_LETTER,
    CapitalLetterRegex,
    DefaultFontData,
    DefaultFontSizeData,
    FragmentSplitRegex,
    GAP_PADDING_RATIO,
    LETTER_GAP_RATIO,
    MAX_LINE_REVERSE_INDENT,
    NB_UNCOMPRESSED_END,
    NB_UNCOMPRESSED_START,
    NoSpaceRegex,
    NumberRegex,
    OCGAlphabetRegex,
    OCGNoOverheadGapRegex,
    RUBY_BONUS_RATIO,
    RUBY_REGEX,
    START_OF_LINE_ALPHABET_OFFSET,
    ST_ICON_SYMBOL,
    SquareBracketLetterRegex,
    TCGLetterRegex,
    TextData,
    WholeWordRegex,
    getBulletSpacing,
} from 'src/model';
import {
    drawBullet,
    getLostLeftWidth,
    analyzeHeadText,
    getTextWorker,
    tokenizeText,
} from './text-util';
import { analyzeToken } from './text-analyze';
import { TextDrawer, drawLetter, getLetterWidth } from './letter';
import { fillHeadText } from './text-overhead';
import { drawMarker } from './canvas-util';

/**
 * @summary Text hierachy
 *   * Letter: Individual (1) letter. E.g. "a", "1", "み", "装", "-", "①"
 *   * Fragment: Multiple letters with decorate control characters. E.g. "{無|む}", "Damage"
 *   * Token: Multiple fragments with group control characters (NB_WORD_OPEN and NB_WORD_CLOSE) or a whole word, splitted by space or other breakable letters. E.g. "⦉{相|あい}{手|て}⦊"
 *   * Sentence: Sequence of tokens. E.g. "Cannot be destroyed by battle or card effects"
 *   * Paragraph: Consecutive sentences without new line characters ("\n").
 *   * Block: Whole text in a section.
 * 
 * Line: Line is a special unit, when a sentence hit the end of current text box, it wrap to new line without using the actual new line character. In this case the sentence is broke down into multiple lines. Line can be manully enforced with line control characters (NB_LINE_OPEN and NB_LINE_CLOSE), or created from text split function.
 * **/
export const drawLine = ({
    ctx,
    tokenList,
    trueEdge, trueBaseline,
    extraSpace = 0,
    xRatio: baseXRatio, yRatio = 1,
    textData,
    format,
    textDrawer,
    debug = false,
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
    debug?: boolean,
}) => {
    const {
        currentFont,
        fontData,
        fontLevel,
    } = textData;
    const fontSizeData = fontData.fontList[fontLevel];
    const {
        headTextFillStyle,
        headTextHeightRatio = DefaultFontData.headTextHeightRatio,
        headTextOverflow = DefaultFontData.headTextOverflow,
        metricMethod,
        fontStyle,
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
        headTextSpacing = DefaultFontSizeData.headTextSpacing,
    } = fontSizeData;
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
    let previousTokenGap = 0;
    let iconPositionList: { edge: number, size: number, baseline: number }[] = [];
    /** Rebalance */
    let previousTokenRebalanceOffset = 0;
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
        const gapRatio = LETTER_GAP_RATIO * xRatio;
        const defaultGap = fontSize * gapRatio;
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
            leftMostLetter,
            leftGap,
            rightGap: tokenRightGap,
            totalWidth: totalTokenWidth,
        } = analyzeToken({
            token, nextToken, previousTokenGap: previousTokenGap / xRatio, ...analyzeTokenParameter,
        });

        /** Token ở đầu line có quyền âm ngược ra lề trái, tuy nhiên footText không được tràn ra khỏi lề, ngoài ra ta giới hạn
         * việc âm ngược để tránh tràn headText quá nhiều
         */
        const indent = tokenCnt === 0
            ? (leftGap > 0 ? Math.min(MAX_LINE_REVERSE_INDENT, leftGap * xRatio) * -1 : 0)
                + (OCGAlphabetRegex.test(leftMostLetter) ? START_OF_LINE_ALPHABET_OFFSET : 0)
            : 0;

        let fragmentEdge = tokenEdge + indent;
        let currentRightGap = previousTokenGap;
        let accumulatedSpace = 0;
        /** Độ dài tăng thêm do gap từ token trước đó */

        for (let fragmentCnt = 0; fragmentCnt < fragmentList.length; fragmentCnt++) {
            const fragment = fragmentList[fragmentCnt];
            const nextFragment = fragmentList[fragmentCnt + 1] ?? nextToken;
            const next2ndFragment = fragmentList[tokenCnt + 2] ?? next2ndToken;

            /** Không vẽ các ký tự này */
            if (token === NB_UNCOMPRESSED_START || token === NB_UNCOMPRESSED_END) {}
            /** Symbol S/T không bị compress, ta vẽ symbol S/T riêng, ở đây chỉ chừa chỗ trống */
            else if (fragment === ST_ICON_SYMBOL) {
                iconPositionList.push({ edge: fragmentEdge, size: iconSymbolWidth, baseline });
                fragmentEdge += iconSymbolWidth * letterSpacingRatio;
                currentRightGap = 0;
                previousTokenRebalanceOffset = 0;
            }
            /** Symbol ● không bị compress */
            else if (fragment === BULLET_LETTER) {
                resetScale();
                drawBullet(ctx, fragmentEdge, trueBaseline, bulletSymbolWidth, getBulletSpacing(format));
                fragmentEdge += bulletSymbolWidth * letterSpacingRatio;
                applyAsymmetricScale(xRatio, yRatio);

                currentRightGap = 0;
                previousTokenRebalanceOffset = 0;
            }
            /** OCG Copyright symbol không bị compress */
            else if (/[©]/.test(fragment)) {
                resetScale();
                applyLargerText(largeSymbolRatio);
                drawLetter({
                    ...drawLetterParameter,
                    letter: fragment,
                    edge: fragmentEdge * xRatio,
                    baseline: trueBaseline + (format === 'tcg' ? 1 : 2),
                });
                fragmentEdge += ctx.measureText(fragment).width * letterSpacingRatio;
                stopApplyLargerText();
                applyAsymmetricScale(xRatio, yRatio);

                currentRightGap = 0;
                previousTokenRebalanceOffset = 0;
            }
            /** OCG Ordinal symbol không bị compress */
            else if (/[①-⑳]/.test(fragment)) {
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
                currentRightGap = 0;
                previousTokenRebalanceOffset = 0;
            }
            /** Cụm ruby cần tách đôi các phần */
            else if (RUBY_REGEX.test(fragment)) {
                const [footText, rubyType, headText = ''] = fragment.replaceAll(/{|}/g, '').split(/(\|+)/);
                const fitFootText = rubyType === '||';
                /** Ta assume cụm ruby không lồng nhau */
                const { totalWidth: footTextWidth } = analyzeToken({
                    token: footText, nextToken: nextFragment,
                    previousTokenGap: 0,
                    ...analyzeTokenParameter,
                });

                applyFuriganaFont();
                const headTextLetterWidth = headText
                    .split('')
                    .map(letter => getLetterWidth({ ctx, letter, fontStyle, metricMethod: 'furigana', xRatio: 1 }).boundWidth)
                    .reduce((acc, cur) => acc + cur, 0);
                stopApplyFuriganaFont();

                const {
                    headTextWidth,
                    halfGap: baseHalfGap,
                } = analyzeHeadText({
                    headText,
                    headTextLetterWidth,
                    footText,
                    footTextWidth: footTextWidth * xRatio,
                    headTextGap: defaultGap,
                    headTextSpacing: headTextSpacing * xRatio,
                    gapPadding: fontSize * GAP_PADDING_RATIO,
                    fitFootText,
                    sentenceXRatio: xRatio,
                    xRatio: (headTextOverflow === 'condense' && footText.length > 1) ? Math.min(1, xRatio + RUBY_BONUS_RATIO) : 0,
                });
                const halfGap = headText.length === 0
                    ? Math.max(defaultGap, footTextWidth * gapRatio)
                    : baseHalfGap;
                const rightGap = halfGap;
                const leftGap = halfGap;
                /** Phần không gian mất đi do fragment âm vào gap phải của token trước (nếu có) */
                const lostLeftWidth = getLostLeftWidth(currentRightGap, leftGap);
                /** Phần không gian trống bên trái còn lại */
                const vacantLeftWidth = leftGap > 0 ? leftGap - lostLeftWidth : 0;

                const {
                    offsetable: isNextTokenOffsetable,
                    leftGap: nextUncompressedLeftGap
                } = analyzeToken({
                    token: nextFragment, nextToken: next2ndFragment,
                    previousTokenGap: rightGap / xRatio,
                    ...analyzeTokenParameter,
                });
                const nextLeftGap = nextUncompressedLeftGap * xRatio;
                /** Phần không gian mất đi do next gap âm vào fragment (nếu có) */
                const lostRightWidth = getLostLeftWidth(rightGap, nextLeftGap);
                const vacantRightWidth = rightGap > 0 ? rightGap - lostRightWidth : 0;
                const totalVacantSpace = vacantLeftWidth + vacantRightWidth;
                let rebalancedSpace = 0;
                let nextTokenRebalanceOffset = 0;

                if (totalVacantSpace > 0 && nextLeftGap >= -2 && isNextTokenOffsetable) {
                    rebalancedSpace = (totalVacantSpace + Math.max(nextLeftGap, 0) * 2) / 3;
                    nextTokenRebalanceOffset = Math.max(nextLeftGap, 0) - rebalancedSpace;
                } else {
                    // rebalancedSpace = totalVacantSpace / 2;
                    rebalancedSpace = vacantLeftWidth;
                }
                const footTextFragmentEdge = fragmentEdge
                    + (halfGap < 0 ? -lostLeftWidth : (indent ? -indent : rebalancedSpace))
                    + previousTokenRebalanceOffset;
                previousTokenRebalanceOffset = nextTokenRebalanceOffset;

                drawLine({
                    ctx,
                    format,
                    textData,
                    tokenList: tokenizeText(footText),
                    trueBaseline: baseline,
                    trueEdge: footTextFragmentEdge,
                    xRatio,
                    yRatio,
                    extraSpace: 0,
                    textDrawer,
                    debug: false,
                });

                const currentFillStyle = ctx.fillStyle;
                const currentStrokeStyle = ctx.strokeStyle;
                const currentShadowColor = ctx.shadowColor;
                const currentShadowOffsetX = ctx.shadowOffsetX;
                const currentShadowOffsetY = ctx.shadowOffsetY;
                const currentShadowBlur = ctx.shadowBlur;
                if (headTextFillStyle) {
                    ctx.fillStyle = headTextFillStyle;
                    ctx.strokeStyle = '';
                    ctx.shadowColor = '';
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 0;
                    ctx.shadowBlur = 0;
                }
                /** Lùi edge của head text nếu xuất hiện trường hợp head text overflow vào gap âm */
                const headTextFragmentEdge = fragmentEdge - lostLeftWidth;
                fillHeadText({
                    ctx,
                    fontSize,
                    edge: headTextFragmentEdge, baseline,
                    headText, headTextLetterWidth,
                    footText, footTextWidth,
                    headTextGap: defaultGap,
                    headTextSpacing,
                    headTextHeightRatio,
                    xRatio,
                    fontStyle,
                    textWorker,
                    fitFootText,
                    headTextOverflow,
                });
                ctx.fillStyle = currentFillStyle;
                ctx.strokeStyle = currentStrokeStyle;
                ctx.shadowColor = currentShadowColor;
                ctx.shadowOffsetX = currentShadowOffsetX;
                ctx.shadowOffsetY = currentShadowOffsetY;
                ctx.shadowBlur = currentShadowBlur;

                fragmentEdge += Math.max(footTextWidth * xRatio, headTextWidth) - lostLeftWidth + extraSpace;
                currentRightGap = rightGap;
                accumulatedSpace += extraSpace;
            }
            else if (WholeWordRegex.test(fragment)) {
                const normalizedWordSpacingRatio = wordLetterSpacing
                    ? 1 + wordLetterSpacing / 2
                    : letterSpacingRatio;
                ctx.letterSpacing = `${(normalizedWordSpacingRatio - 1) * currentFont.getFontInfo().sizeAsNumber}px`;

                // Vấn đề: Ta không thể tính gap nếu không biết độ dài chính xác của fragment, tuy nhiên như vậy ta phải lặp lại việc tính fragment hai lần (một lần tính chiều dài, một lần vẽ). Để đơn giản ta lấy rawWidth của fragment và coi như độ dài của fragment khi tính gap. Vì ta assume là captial letter ratio hay number font không ảnh hưởng quá lớn lên fragment width.
                const fragmentNaiveWidth = ctx.measureText(fragment).width * xRatio;
                const leftGap = Math.max(defaultGap, fragmentNaiveWidth * gapRatio);
                const rightGap = leftGap;
                const lostLeftWidth = getLostLeftWidth(currentRightGap, leftGap);
                fragmentEdge -= lostLeftWidth;

                // Độ dài từng chữ sẽ khác tổng độ dài khi ghép chữ, do letter spacing và conditional kerning
                let remainFragment = fragment;
                let currentPosition = fragmentEdge;
                while (remainFragment !== '') {
                    let currentLetter = remainFragment[0];
                    let nextRemainFragment = remainFragment.slice(1);
                    /** Độ dài thực của ký tự khi đứng trong từ */
                    let actualLetterWidth = 0;
                    const drawLetterofWordParameter = { ...drawLetterParameter, letter: currentLetter, edge: currentPosition };
                    if (SquareBracketLetterRegex.test(currentLetter)) {
                        applyScale(squareBracketRatio);
                        actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                        drawLetter({
                            ...drawLetterofWordParameter,
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
                            ...drawLetterofWordParameter,
                            edge: currentPosition / capitalLetterRatio + letterOffset,
                            baseline: baseline / capitalLetterRatio
                        });
                        reverseScale(capitalLetterRatio);
                    } else if (NumberRegex.test(currentLetter)) {
                        applyNumberFont();
                        actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                        drawLetter(drawLetterofWordParameter);
                        stopApplyNumberFont();
                    } else if (TCGLetterRegex.test(currentLetter) && fontStyle === 'tcg') {
                        applySymbolFont();
                        actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                        drawLetter(drawLetterofWordParameter);
                        stopApplySymbolFont();
                    } else {
                        actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                        drawLetter(drawLetterofWordParameter);
                    }
                    currentPosition += actualLetterWidth * xRatio;
                    remainFragment = nextRemainFragment;
                }

                fragmentEdge = currentPosition;
                currentRightGap = rightGap;
                previousTokenRebalanceOffset = 0;
                ctx.letterSpacing = '0px';
            }
            /** Một số ký tự dùng font đặc biệt */
            else if (TCGLetterRegex.test(fragment) && fontStyle === 'tcg') {
                const letter = fragment;
                applySymbolFont();

                const letterWidth = ctx.measureText(letter).width * letterSpacingRatio * xRatio;
                const leftGap = Math.max(defaultGap, letterWidth * gapRatio);
                const rightGap = leftGap;
                const lostLeftWidth = getLostLeftWidth(currentRightGap, leftGap);

                fragmentEdge -= lostLeftWidth;
                drawLetter({ ...drawLetterParameter, letter, edge: fragmentEdge });
                fragmentEdge += letterWidth;

                stopApplySymbolFont();

                currentRightGap = rightGap;
                previousTokenRebalanceOffset = 0;
            }
            else {
                const letter = fragment;
                const letterMetric = getLetterWidth({
                    ctx,
                    letter,
                    fontStyle,
                    metricMethod,
                    lastOfLine: nextFragment === undefined,
                    xRatio,
                });
                const letterWidth = letterMetric.boundWidth * letterSpacingRatio * xRatio;
                const leftGap = Math.max(defaultGap, letterWidth * gapRatio);
                const rightGap = leftGap;
                const lostLeftWidth = getLostLeftWidth(currentRightGap, leftGap);

                fragmentEdge -= lostLeftWidth;
                drawLetter({ ...drawLetterParameter, letter, edge: fragmentEdge, letterMetric });
                fragmentEdge += letterWidth;
                if (
                    (format === 'ocg' || (format === 'tcg' && /\s+/.test(letter)))
                    && NoSpaceRegex.test(letter) !== true
                ) {
                    fragmentEdge += extraSpace;
                    accumulatedSpace += extraSpace;
                }
                if (!OCGNoOverheadGapRegex.test(letter)) currentRightGap = rightGap;
                previousTokenRebalanceOffset = 0;
            }
        }
        previousTokenGap = tokenRightGap * xRatio;
        if (debug) drawMarker({ ctx, baseline, edge: tokenEdge, width: totalTokenWidth * xRatio, xRatio });
        tokenEdge += totalTokenWidth * xRatio + accumulatedSpace + indent;
    }

    return {
        tokenEdge,
        iconPositionList,
    };
};