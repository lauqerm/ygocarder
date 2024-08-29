import {
    CanvasConst,
    CondenseType,
    EffectFontData,
    CoordinateData,
    EffectCoordinateData,
    CondenseTolerantMap,
    FontData,
    TCGVanillaTypeStatFontList,
    DefaultTCGNormalFontData,
} from '../../model';
import { condense, createFontGetter } from '../../util';
import { createLineList } from '../line';
import { drawLine } from '../text';
import { analyzeLine } from '../text-analyze';
import { normalizeCardText, splitEffect } from '../text-normalize';
import { tokenizeText } from '../text-util';

export const getEffectSizeAndCoordinate = ({
    format,
    isNormal,
    statInEffect,
    typeInEffect,
}: {
    format: string,
    statInEffect: boolean,
    typeInEffect: boolean,
    isNormal: boolean,
}) => {
    const coordinateKey = [format, typeInEffect ? 'type' : '', statInEffect ? 'stat' : '']
        .filter(entry => entry !== '').join('-');
    const fontDataKey = [format, typeInEffect ? 'type' : '', statInEffect ? 'stat' : '']
        .filter(entry => entry !== '').join('-');

    let fontData = EffectFontData[fontDataKey];
    if (statInEffect && typeInEffect && isNormal && format === 'tcg') {
        fontData = DefaultTCGNormalFontData;
        fontData.fontList = TCGVanillaTypeStatFontList;
    }

    return {
        fontData,
        sizeList: EffectCoordinateData[coordinateKey],
    };
};

const {
    width: CanvasWidth,
} = CanvasConst;
export const drawEffect = ({
    ctx,
    content,
    isNormal = false,
    fontData = EffectFontData.tcg,
    sizeList = EffectCoordinateData['tcg-type'],
    condenseTolerant = 'strict',
    format,
    furiganaHelper,
}: {
    ctx: CanvasRenderingContext2D | null | undefined,
    content: string,
    isNormal?: boolean,
    fontData?: FontData,
    sizeList?: CoordinateData[],
    condenseTolerant?: CondenseType,
    format: string,
    furiganaHelper: boolean,
}) => {
    let effectSizeLevel = 0;
    if (!ctx || !content) return effectSizeLevel;

    const normalizedContent = normalizeCardText(content.trim(), format, { furiganaHelper });
    const tolerantPerSentence: Record<string, number> = format === 'tcg'
        ? CondenseTolerantMap[condenseTolerant] ?? CondenseTolerantMap['strict']
        : {
            '1': 800,
            '2': 800,
            '3': 800,
        };
    const {
        effectText,
        effectFlavorCondition,
        fullLineList,
    } = splitEffect(normalizedContent, isNormal);

    /**
     * Line không thuộc effect bao gồm:
     * * Material của Extra Deck monster
     * * Flavor condition của Normal monster
     */
    const additionalLineCount = (fullLineList.length ?? 0) + (effectFlavorCondition.length > 0 ? 1 : 0);
    const paragraphList = effectText ? effectText.split('\n') : [];

    const { font, fontList } = fontData;
    const yRatio = 1;
    while (effectSizeLevel < fontList.length) {
        const fontSizeData = fontList[effectSizeLevel];
        const {
            fontSize,
            lineHeight,
            lineCount,
        } = fontSizeData;
        const { trueEdge, trueWidth: trueWidthStart, trueBaseline: trueBaselineStart } = sizeList[effectSizeLevel] ?? sizeList[sizeList.length - 1];
        const width = (isNormal && format === 'tcg') ? trueWidthStart - 2 : trueWidthStart;

        const currentFont = createFontGetter();
        ctx.font = currentFont
            .setStyle(isNormal && format === 'tcg' ? 'italic' : '')
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
                    width,
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
            ctx.clearRect(0, 0, CanvasWidth, 1111);

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
                                width,
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
                const { tokenList, spaceWidth } = analyzeLine({ ctx, line, xRatio, format, isLast, textData, width });

                ctx.scale(xRatio, yRatio);
                drawLine({
                    ctx,
                    tokenList,
                    xRatio, yRatio,
                    trueEdge, trueBaseline,
                    spaceWidth,
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
                            width,
                        });

                        if (currentLineCount > 1) return false;
                        return true;
                    },
                );
                const xRatio = internalEffectiveMedian / 1000;

                ctx.scale(xRatio, yRatio);
                ctx.font = currentFont.setStyle('').getFont();
                let tokenList = tokenizeText(effectFlavorCondition);
                // Loại dấu carrige return đầu tiên
                tokenList = tokenList[0] === '\n'
                    ? tokenList.slice(1)
                    : tokenList;
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

    return effectSizeLevel;
};