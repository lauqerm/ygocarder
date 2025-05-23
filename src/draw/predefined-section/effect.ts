import { CanvasTextStyle } from 'src/service';
import {
    CondenseType,
    EffectFontData,
    CoordinateData,
    EffectCoordinateData,
    CondenseTolerantMap,
    FontData,
    NormalFontData,
} from '../../model';
import { condense, createFontGetter, injectDynamicFont, scaleCoordinateData, scaleFontData } from '../../util';
import { clearCanvas, setTextStyle } from '../canvas-util';
import { createLineList } from '../line';
import { drawLine } from '../text';
import { analyzeLine } from '../text-analyze';
import { normalizeCardText, splitEffect } from '../text-normalize';
import { tokenizeText } from '../text-util';

/** Sections inside effect box (stats and type) will affect the amount of line and applicable font size use for the text. */
export const getEffectFontAndCoordinate = ({
    format,
    useItalic,
    statInEffect,
    typeInEffect,
    frameType,
}: {
    format: string,
    statInEffect: boolean,
    typeInEffect: boolean,
    useItalic: boolean,
    frameType: 'normal' | 'pendulumLarge',
}) => {
    const coordinateKey = [
        format,
        ...(frameType === 'pendulumLarge' ? ['pendulumLarge'] : []),
        typeInEffect ? 'type' : '',
        statInEffect ? 'stat' : ''
    ].filter(entry => entry !== '').join('-');
    const fontDataKey = [
        format,
        ...(frameType === 'pendulumLarge' ? ['pendulumLarge'] : []),
        typeInEffect ? 'type' : '',
        statInEffect ? 'stat' : ''
    ].filter(entry => entry !== '').join('-');

    let fontData = EffectFontData[fontDataKey];
    if (useItalic && format === 'tcg' && NormalFontData[fontDataKey]) {
        fontData = NormalFontData[fontDataKey];
    }

    return {
        fontDataKey,
        fontData,
        sizeList: EffectCoordinateData[coordinateKey],
    };
};

export const drawEffect = ({
    ctx,
    content,
    isNormal = false,
    // useItalic = false,
    fontDataKey = 'tcg',
    fontData = EffectFontData[fontDataKey],
    textStyle,
    sizeList = EffectCoordinateData['tcg-type'],
    condenseTolerant = 'strict',
    format,
    furiganaHelper,
    option,
}: {
    ctx: CanvasRenderingContext2D | null | undefined,
    content: string,
    isNormal?: boolean,
    useItalic?: boolean,
    fontData?: FontData,
    fontDataKey?: string,
    textStyle?: CanvasTextStyle,
    sizeList?: CoordinateData[],
    condenseTolerant?: CondenseType,
    format: string,
    furiganaHelper: boolean,
    option?: {
        /** When the text is up-sized, we don't want to apply the current condense tolerant, because large text looks much worse when compressing at high degree. So when the text is up-sized, condense tolerant automatically set to "relaxed". */
        forceRelaxCondenseLimit?: number,
        defaultSizeLevel?: number,
        globalScale: number,
    },
}) => {
    const {
        defaultSizeLevel,
        forceRelaxCondenseLimit,
        globalScale = 1,
    } = option ?? {};
    let sizeLevel = defaultSizeLevel ?? 0;
    if (!ctx || !content) return sizeLevel;

    const normalizedContent = normalizeCardText(content.trim(), format, { furiganaHelper });
    const {
        effectText,
        effectFlavorCondition,
        fullLineList,
        fullLineListOption,
    } = splitEffect(normalizedContent, isNormal);

    const additionalLineCount = (fullLineList.length ?? 0) + (effectFlavorCondition.length > 0 ? 1 : 0);
    const paragraphList = effectText ? effectText.split('\n') : [];

    let effectiveLineCount = 0;
    const scaledFontData = scaleFontData(fontData, globalScale);
    const { fontList } = scaledFontData;
    const yRatio = 1;
    /**
     * We basically go through each font size, then iterating the content multiple time with different condense ratio until the text is both fit inside the max amount of lines AND the ratio is larger than the current limit threshold.
     * 
     * If it went through every single of our font list entries, dynamic entry will be activated. It will no longer care about accuracy and just do its best to cramp all the text together. Max font entry failed when either there are too many lines, or there are too many words that is pass the condense threshold.
     * */
    while (sizeLevel <= fontList.length && sizeLevel >= 0) {
        const requireDynamicSize = sizeLevel === fontList.length
            ? true
            : false;
        const appliedSizeLevel = Math.min(fontList.length - 1, sizeLevel);
        const tolerancePerSentence: Record<string, number> = requireDynamicSize
            ? {
                '1': 1000,
                '2': 1000,
                '3': 1000,
            }
            : (format === 'tcg'
                ? forceRelaxCondenseLimit && appliedSizeLevel < forceRelaxCondenseLimit
                    ? CondenseTolerantMap['relaxed']
                    : CondenseTolerantMap[condenseTolerant] ?? CondenseTolerantMap['strict']
                : {
                    '1': 800,
                    '2': 800,
                    '3': 800,
                });
        const {
            trueEdge,
            trueWidth: trueWidthStart,
            trueBaseline: trueBaselineStart,
            trueHeightCap,
        } = scaleCoordinateData(sizeList[appliedSizeLevel] ?? sizeList[sizeList.length - 1], globalScale);
        const width = (isNormal && format === 'tcg') ? trueWidthStart - 2 * globalScale : trueWidthStart;

        const useDynamicSize = requireDynamicSize && typeof trueHeightCap === 'number';
        const dynamicFontData = useDynamicSize
            ? injectDynamicFont(scaledFontData, { heightCap: trueHeightCap, lineCount: effectiveLineCount })
            : scaledFontData;
        const dynamicSizeLevel = useDynamicSize
            ? sizeLevel
            : appliedSizeLevel;
        const {
            font: dynamicFont,
            fontList: dynamicFontList,
        } = dynamicFontData;
        const fontSizeData = useDynamicSize
            ? dynamicFontList[dynamicSizeLevel]
            : fontList[appliedSizeLevel];
        const {
            fontSize,
            lineHeight,
            lineCount,
        } = fontSizeData;

        const currentFont = createFontGetter();
        ctx.font = currentFont
            .setWeight(format === 'tcg' ? '' : '')
            .setSize(fontSize)
            .setFamily(dynamicFont)
            .getFont();
        ctx.textAlign = 'left';
        const textData = {
            fontData: dynamicFontData,
            fontLevel: dynamicSizeLevel,
            currentFont,
        };
        // [CREATE SENTENCE ON EACH LINE]
        let lineListWithRatio: { line: string, isLast: boolean, effectiveMedian: number }[] = [];

        // [FIND SUITABLE CONDENSE RATIO]
        const effectiveMedian = (additionalLineCount > lineCount && typeof trueHeightCap === 'number')
            ? 1 // If dynamic size is possible, no need to find condense value if current lint count is larger than the font's maximum line count, it will overflow anyways.
            : condense(
                median => {
                    const { currentLineList, currentLineCount } = createLineList({
                        ctx,
                        median,
                        paragraphList,
                        additionalLineCount,
                        format, textData,
                        width,
                        globalScale,
                    });
                    lineListWithRatio = currentLineList;

                    if (currentLineCount > lineCount) return false;
                    return true;
                },
                200,
            );
        effectiveLineCount = lineListWithRatio.length + additionalLineCount;

        // [START DRAWING]
        /** Usually effect only consist of 1 or 2 paragraphs, but in TCG they try to put each bullet clause in a new line, resulting many more. Still we don't know if having different tolerance based on amount of paragraph is correct or not, since it is very hard to survey the condensation of a real card. */
        const resetStyle = setTextStyle({ ctx, ...textStyle, globalScale });
        const tolerantValue = tolerancePerSentence[`${paragraphList.length}`] ?? tolerancePerSentence['3'];
        if (
            (effectiveMedian < tolerantValue)
            && (sizeLevel < fontList.length)
        ) {
            sizeLevel += 1; // If sizeLevel is larger than the length of font list, trigger dynamic size
        } else {
            clearCanvas(ctx);

            let trueBaseline = trueBaselineStart + lineHeight;
            /** Naturally, non-brekable lines have their own condense ratio. */
            const fullLineListWithRatio = fullLineList.map((line, index) => {
                return {
                    line,
                    isLast: fullLineListOption[index].alignment === 'justify' ? false : true,
                    effectiveMedian: condense(
                        median => {
                            const { currentLineCount } = createLineList({
                                ctx,
                                median,
                                paragraphList: [line],
                                format, textData,
                                width,
                                globalScale,
                            });
    
                            if (currentLineCount > 1) return false;
                            return true;
                        },
                    )
                };
            });

            /** Draw each line based on their token list and corresponding ratio. */
            [
                ...fullLineListWithRatio,
                ...lineListWithRatio,
            ].forEach(({
                line,
                isLast,
                effectiveMedian,
            }) => {
                const xRatio = effectiveMedian / 1000;
                const { tokenList, spaceWidth } = analyzeLine({ ctx, line, xRatio, format, isLast, textData, width, globalScale });

                ctx.scale(xRatio, yRatio);
                drawLine({
                    ctx,
                    tokenList,
                    xRatio, yRatio,
                    trueEdge, trueBaseline,
                    spaceWidth,
                    textData,
                    format,
                    globalScale,
                });
                trueBaseline += lineHeight;
                ctx.setTransform(1, 0, 0, 1, 0, 0);
            });

            /** Condition clause of flavor text in TCG cards do not use italic font style ("Summoned Skull" TCG). */
            if (effectFlavorCondition.length > 0 && EffectFontData[fontDataKey]) {
                const flavorFontData = scaleFontData(EffectFontData[fontDataKey], globalScale);
                const dynamicFlavorFontData = useDynamicSize
                    ? injectDynamicFont(flavorFontData, { heightCap: trueHeightCap, lineCount: effectiveLineCount })
                    : flavorFontData;
                const flavorFontSizeData = useDynamicSize
                    ? dynamicFlavorFontData.fontList[dynamicSizeLevel]
                    : flavorFontData.fontList[appliedSizeLevel];
                const {
                    fontSize,
                    lineHeight,
                } = flavorFontSizeData;
                const flavorTextCurrentFont = createFontGetter();
                ctx.font = flavorTextCurrentFont
                    .setSize(fontSize)
                    .setFamily(flavorFontData.font)
                    .getFont();
                const flavorTextData = {
                    fontData: dynamicFlavorFontData,
                    fontLevel: dynamicSizeLevel,
                    currentFont: flavorTextCurrentFont,
                };
                const internalEffectiveMedian = condense(
                    median => {
                        const { currentLineCount } = createLineList({
                            ctx,
                            median,
                            paragraphList: [effectFlavorCondition],
                            format, textData: flavorTextData,
                            width,
                            globalScale,
                        });

                        if (currentLineCount > 1) return false;
                        return true;
                    },
                );
                const xRatio = internalEffectiveMedian / 1000;

                ctx.scale(xRatio, yRatio);
                const tokenList = tokenizeText(effectFlavorCondition);
                /** We use two new line character to identify condition clause among flavor text. Because in normal case the user will try to put in many new lines to ensure that the condition clause is placed at bottom of the card text.
                 * 
                 * But this method has a caveat: For example if current line limit is 6, and the flavor text already take 5 lines. If user put the condition clause at line 6, it is indistinguishable from a normal paragraph, and therefore drawn with italic font. But if user put a new line between, it will force the draw function to increase the line limit into 7.
                 * 
                 * To combat this, we perform a simple remove that additional new line, that means if conditional clause is present, two new lines in textare actually result only one new line. This does not create much hassle since user rarely notice this behavior.
                 * */
                drawLine({
                    ctx,
                    tokenList,
                    xRatio, yRatio,
                    trueEdge, trueBaseline,
                    textData: flavorTextData,
                    format,
                    globalScale,
                });
                trueBaseline += lineHeight;
                ctx.setTransform(1, 0, 0, 1, 0, 0);
            }
            break;
        }
        resetStyle();
    }

    return sizeLevel;
};