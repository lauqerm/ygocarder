import {
    CanvasConst,
    CondenseType,
    UP_RATIO,
    effectMonsterFontData,
    CoordinateDate,
    monsterSizeList,
    CondenseTolerantMap,
    FontData,
} from '../model';
import { condense, createFontGetter } from '../util';
import { createLineList } from './line-analyze';
import { drawLine } from './text';
import { analyzeLine } from './text-analyze';
import { normalizeCardText, splitEffect } from './text-normalize';
import { tokenizeText } from './text-util';

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
    sizeList: CoordinateDate[] = monsterSizeList,
    condenseTolerant: CondenseType = 'strict',
    format: string,
) => {
    let effectSizeLevel = 0;
    if (!ctx || !content) return effectSizeLevel;

    let tStart = performance.now();
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
    const paragraphList = effectBody ? effectBody.split('\n') : [];

    const { font, fontList } = fontData;
    const yRatio = 1;
    while (effectSizeLevel < fontList.length) {
        const fontSizeData = fontList[effectSizeLevel];
        const {
            fontSize,
            lineHeight,
            lineCount,
        } = fontSizeData;
        const { trueEdge, trueWidth: trueWidthStart, trueBaseline: trueBaselineStart } = sizeList[effectSizeLevel];
        const trueWidth = isNormal ? trueWidthStart - 2 : trueWidthStart;

        const currentFont = createFontGetter();
        ctx.font = currentFont
            .setStyle(isNormal ? 'italic' : '')
            .setWeight(format === 'tcg' ? '' : '')
            .setSize(fontSize)
            .setFamily(font)
            .getFont();
        ctx.textAlign = 'left';
        const textData = {
            fontData,
            fontLevel: effectSizeLevel,
            currentFont,
        };
        // [CREATE SENTENCE ON EACH LINE]
        let lineListWithRatio: { line: string, isLast: boolean, effectiveMedian: number }[] = [];

        // [FIND SUITABLE CONDENSE RATIO]
        /** Trả về median cuối cùng sau khi lặp tối đa, median nhỏ hơn 200 sẽ được quy về 200, trên thực tế data không thể nào đạt
        tới median 200, trừ phi vượt giới hạn bình thường nhiều lần */
        const effectiveMedian = condense(
            median => {
                const { currentLineList, currentLineCount } = createLineList({
                    ctx,
                    median,
                    paragraphList,
                    additionalLineCount,
                    format, textData,
                    trueWidth,
                });
                lineListWithRatio = currentLineList;

                if (currentLineCount > lineCount) return false;
                return true;
            },
            200,
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

            let trueBaseline = trueBaselineStart + lineHeight;
            /** Full line list - ví dụ material, luôn nằm trong 1 dòng duy nhất và có hệ số condense riêng so với phần còn lại của effect, tham
             * khảo "Galaxy-Eyes Cipher X Dragon"
             */
            const fullLineListWithRatio = fullLineList.map(line => {
                return {
                    line,
                    isLast: true,
                    effectiveMedian: condense(
                        median => {
                            const { currentLineCount } = createLineList({
                                ctx,
                                median,
                                paragraphList: [line],
                                format, textData,
                                trueWidth,
                            });
    
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
                const xRatio = effectiveMedian / 1000;
                const { tokenList, additionalSpaceWidth } = analyzeLine({ ctx, line, xRatio, format, isLast, textData, width: trueWidth });

                ctx.scale(xRatio, yRatio);
                drawLine({
                    ctx,
                    tokenList,
                    xRatio, yRatio,
                    trueEdge, trueBaseline,
                    additionalSpaceWidth,
                    textData,
                    format,
                });
                trueBaseline += lineHeight;
                ctx.setTransform(1, 0, 0, 1, 0, 0);
            });

            /** Condition của Flavor Text không in nghiêng, tham khảo "Summoned Skull" */
            if (effectFlavorCondition.length > 0) {
                const internalEffectiveMedian = condense(
                    median => {
                        const { currentLineCount } = createLineList({
                            ctx,
                            median,
                            paragraphList: [effectFlavorCondition],
                            format, textData,
                            trueWidth,
                        });

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
                    trueEdge, trueBaseline,
                    textData,
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