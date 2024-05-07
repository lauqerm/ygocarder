import {
    CanvasConst,
    CondenseType,
    UP_RATIO,
    effectMonsterFontData,
    BoxSize,
    monsterSizeList,
    CondenseTolerantMap,
    FontData,
    OCG_ALPHABET_REGEX,
    MAX_LINE_REVERSE_INDENT,
    START_OF_LINE_ALPHABET_OFFSET,
    START_OF_LINE_GAP,
} from '../model';
import { splitEffect, normalizeCardText, condense } from '../util';
import { drawLine } from './text';
import { analyzeLine, analyzeToken } from './text-analyze';
import { createFontGetter, tokenizeText } from './text-util';

/** @summary Block => Paragraph => Sentence => Token => Fragment => Letter **/
const {
    // height: CanvasHeight,
    width: CanvasWidth,
} = CanvasConst;
export const drawEffect = (
    ctx: CanvasRenderingContext2D | null | undefined,
    content: string,
    isPendulumEffect = false,
    isNormal = false,
    fontData: FontData = effectMonsterFontData.tcg,
    sizeList: BoxSize[] = monsterSizeList,
    condenseTolerant: CondenseType = 'strict',
    format: string,
) => {
    let tStart = performance.now();
    let effectSizeLevel = 0;

    if (!ctx || !content) return effectSizeLevel;

    const normalizedContent = normalizeCardText(content.trim(), format);
    const tolerantPerSentence: Record<string, number> = format === 'tcg'
        ? CondenseTolerantMap[condenseTolerant] ?? CondenseTolerantMap['strict']
        : {
            '1': 0,
            '2': 0,
            '3': 0,
        };
    const {
        body: effectBody,
        flavorCondition: effectFlavorCondition,
        fullLineList,
    } = isPendulumEffect
        ? {
            body: normalizedContent,
            flavorCondition: '',
            fullLineList: [],
        }
        : splitEffect(normalizedContent, isNormal);

    /**
     * Line không thuộc effect bao gồm:
     * * Material của Extra Deck monster
     * * Flavor condition của Normal monster
     */
    const additionalLineCount = (fullLineList.length ?? 0) + (effectFlavorCondition.length > 0 ? 1 : 0);
    const paragraphList = effectBody.split('\n');

    const { font, fontList } = fontData;
    const yRatio = format === 'tcg' ? 1 : 1;
    const currentFont = createFontGetter();
    while (effectSizeLevel < fontList.length) {
        const fontSizeData = fontList[effectSizeLevel];
        const {
            fontSize,
            lineHeight,
            lineCount,
        } = fontSizeData;
        const { left, width: basedWidth, top } = sizeList[effectSizeLevel];
        const lineWidth = isNormal ? basedWidth - 2 : basedWidth;

        ctx.font = currentFont
            .setStyle(isNormal ? 'italic' : '')
            .setWeight(format === 'tcg' ? '' : '')
            .setSize(fontSize)
            .setFamily(font)
            .getFont();
        ctx.textAlign = 'left';
        const fontInfo = {
            fontData,
            fontSizeData,
            currentFont,
        };
        // [CREATE SENTENCE ON EACH LINE]
        let lineListWithRatio: { line: string, isLast: boolean, effectiveMedian: number }[] = [];
        const createLineList = (
            median: number,
            paragraphList: string[],
            additionalLineCount = 0,
        ) => {
            const currentLineList: { line: string, isLast: boolean, effectiveMedian: number }[] = [];
            const currentLineCount = paragraphList.reduce((acc, curr) => {
                // Thay vì giảm độ dài từng chữ, ta dùng ratio để tăng độ dài hiện có, như vậy tránh tích tụ sai số
                const xRatio = (median <= 100 ? 100 : median) / 1000;
                const hypoWidth = lineWidth / xRatio;
                const tokenList = tokenizeText(curr, true);
                let addedLineCount = 1;
                let wordList: string[] = [];
                let currentLineWidth = 0;
                let currentGap = START_OF_LINE_GAP;

                for (let cnt = 0; cnt < tokenList.length; cnt++) {
                    const token = tokenList[cnt];
                    const nextToken = tokenList[cnt + 1];
                    /** Tính số đo của 1 token */
                    let {
                        outmostLetter,
                        totalWidth,
                        rightGap,
                        leftGap,
                    } = analyzeToken({ ctx, token, nextToken, xRatio, previousTokenGap: currentGap, format, fontInfo });

                    /** Token ở đầu line có quyền âm ngược ra lề trái, tuy nhiên footText không được tràn ra khỏi lề, ngoài ra ta giới hạn
                     * việc âm ngược để tránh tràn
                     */
                    const indent = (cnt === 0 && leftGap > 0 ? Math.min(MAX_LINE_REVERSE_INDENT / xRatio, leftGap) * -1 : 0)
                        + (cnt === 0 && OCG_ALPHABET_REGEX.test(outmostLetter) ? START_OF_LINE_ALPHABET_OFFSET : 0);
                    let tokenWidth = totalWidth + indent;
                    /**
                     * Trong khi gap bên trái có thể âm ngược vào token trước, gap bên phải luôn đầy đủ.
                     * */
                    if (currentLineWidth + tokenWidth > hypoWidth) {
                        /**
                         * Nếu token kế tiếp làm câu quá dài, wrap xuống dòng mới
                         */
                        currentLineList.push({
                            line: wordList.join('').trim(),
                            effectiveMedian: xRatio,
                            isLast: false,
                        });
                        /** Token gây ra wrap dòng tất nhiên trở thành token mới nhất của dòng kế tiếp, nhưng ta tính lại width vì lúc này rightGap đã khác */
                        let {
                            totalWidth,
                            rightGap,
                            leftGap,
                        } = analyzeToken({ ctx, token, nextToken, xRatio, previousTokenGap: START_OF_LINE_GAP, format, fontInfo });
                        /** Xử lý âm lề tương tự */
                        const indent = (leftGap > 0 ? Math.min(MAX_LINE_REVERSE_INDENT / xRatio, leftGap) * -1 : 0)
                            + (OCG_ALPHABET_REGEX.test(outmostLetter) ? START_OF_LINE_ALPHABET_OFFSET : 0);
                        let tokenWidth = totalWidth + indent;
                        currentLineWidth = tokenWidth;
                        currentGap = rightGap;
                        wordList = [token];
                        addedLineCount += 1;
                    } else {
                        currentLineWidth += tokenWidth;
                        currentGap = rightGap;
                        wordList.push(token);
                    }
                }

                const line = wordList.join('').trim();
                currentLineList.push({
                    line,
                    effectiveMedian: median,
                    isLast: true,
                });

                return acc + addedLineCount;
            }, 0) + additionalLineCount;

            return { currentLineList, currentLineCount };
        };

        // [FIND SUITABLE CONDENSE RATIO]
        /** Trả về median cuối cùng sau khi lặp tối đa, median nhỏ hơn 100 sẽ được quy về 100, trên thực tế data không thể nào đạt
        tới median 100, trừ phi vượt giới hạn bình thường nhiều lần */
        const effectiveMedian = condense(
            currentMedian => {
                const { currentLineList, currentLineCount } = createLineList(
                    currentMedian,
                    paragraphList,
                    additionalLineCount,
                );
                lineListWithRatio = currentLineList;

                if (currentLineCount > lineCount) return false;
                return true;
            },
            100,
        );

        // [START DRAWING]
        
        const tolerantValue = tolerantPerSentence[`${paragraphList.length}`] ?? tolerantPerSentence['3'];

        if (
            (effectiveMedian < tolerantValue)
            && (effectSizeLevel < fontList.length - 1)
        ) {
            effectSizeLevel += 1;
        } else {
            
            ctx.clearRect(0, 0, CanvasWidth, 750 * UP_RATIO);

            let trueBaseline = top + lineHeight;
            /** Full line list - ví dụ material, luôn nằm trong 1 dòng duy nhất và có hệ số condense riêng so với phần còn lại của effect, tham
             * khảo "Galaxy-Eyes Cipher X Dragon"
             */
            const fullLineListWithRatio = fullLineList.map(line => {
                return {
                    line,
                    isLast: true,
                    effectiveMedian: condense(
                        currentMedian => {
                            const { currentLineCount } = createLineList(
                                currentMedian,
                                [line],
                                0,
                            );
    
                            if (currentLineCount > 1) return false;
                            return true;
                        },
                    )
                };
            });

            [
                ...fullLineListWithRatio,
                ...lineListWithRatio,
            ].forEach(({
                line,
                isLast,
                effectiveMedian,
            }) => {
                // const xRatio = 0.825;
                const xRatio = effectiveMedian / 1000;
                const { tokenList, additionalSpaceWidth } = analyzeLine({ ctx, line, xRatio, format, isLast, fontInfo, lineWidth });

                ctx.scale(xRatio, yRatio);
                drawLine({
                    ctx,
                    tokenList, xRatio, yRatio,
                    left, trueBaseline,
                    additionalSpaceWidth,
                    fontInfo,
                    format,
                });
                trueBaseline += lineHeight;
                ctx.setTransform(1, 0, 0, 1, 0, 0);
            });

            /** Condition của Flavor Text không in nghiêng, tham khảo "Summoned Skull" */
            if (effectFlavorCondition.length > 0) {
                const internalEffectiveMedian = condense(
                    currentMedian => {
                        const { currentLineCount } = createLineList(
                            currentMedian,
                            [effectFlavorCondition],
                            0,
                        );

                        if (currentLineCount > 1) return false;
                        return true;
                    },
                );
                const xRatio = internalEffectiveMedian / 1000;

                ctx.scale(xRatio, yRatio);
                ctx.font = currentFont.setStyle('').getFont();
                const tokenList = tokenizeText(effectFlavorCondition);
                drawLine({
                    ctx,
                    tokenList,
                    xRatio, yRatio,
                    left, trueBaseline,
                    additionalSpaceWidth: 0,
                    fontInfo,
                    format,
                });
                trueBaseline += lineHeight;
                ctx.setTransform(1, 0, 0, 1, 0, 0);
            }
            break;
        }
    }

    console.info('Time end', performance.now() - tStart);
    return effectSizeLevel;
};