import { CanvasTextStyle } from 'src/service';
import {
    CondenseType,
    EffectFontData,
    CoordinateData,
    EffectCoordinateData,
    CondenseTolerantMap,
    FontData,
    NormalFontData,
    FULL_LINE_PLACEHOLDER,
    FLAVOR_LINE_PLACEHOLDER,
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

export const drawEffect = async ({
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
        minLine?: number,
        justifyRatio?: number,
    },
}) => {
    const {
        defaultSizeLevel,
        forceRelaxCondenseLimit,
        globalScale = 1,
        minLine: baseMinLine,
        justifyRatio: baseJustifyRatio,
    } = option ?? {};
    const minLine = typeof baseMinLine === 'number' ? baseMinLine : 0;
    const justifyRatio = typeof baseJustifyRatio === 'number' ? baseJustifyRatio : 1;
    let sizeLevel = defaultSizeLevel ?? 0;
    if (!ctx || !content) return sizeLevel;

    const normalizedContent = normalizeCardText(content.trim(), format, { furiganaHelper });
    const {
        lineList,
        fullLineListOption,
        effectFlavorCondition,
    } = splitEffect(normalizedContent, isNormal);

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
        const effectiveMedian = (lineList.length > lineCount && typeof trueHeightCap === 'number')
            ? 1 // If dynamic size is possible, no need to find condense value if current line count is larger than the font's maximum line count, it will overflow anyways.
            : condense(
                median => {
                    const { currentLineList, currentLineCount } = createLineList({
                        ctx,
                        median,
                        paragraphList: lineList,
                        additionalLineCount: 0,
                        format, textData,
                        width,
                        lineHeight,
                        globalScale,
                    });
                    lineListWithRatio = currentLineList;

                    if (currentLineCount > lineCount) return false;
                    return true;
                },
                200,
            );
        effectiveLineCount = Math.max(minLine, lineListWithRatio.length);
        // [START DRAWING]
        /** Usually effect only consist of 1 or 2 paragraphs, but in TCG they try to put each bullet clause in a new line, resulting many more. Still we don't know if having different tolerance based on amount of paragraph is correct or not, since it is very hard to survey the condensation of a real card. */
        const resetStyle = setTextStyle({ ctx, ...textStyle, globalScale });
        const tolerantValue = tolerancePerSentence[`${lineList.length}`] ?? tolerancePerSentence['3'];
        if (
            ((effectiveMedian < tolerantValue) && (sizeLevel < fontList.length))
            || minLine > lineCount
        ) {
            sizeLevel += 1; // If sizeLevel is larger than the length of font list, trigger dynamic size
        } else {
            clearCanvas(ctx);

            let trueBaseline = trueBaselineStart + lineHeight;
            const lineDrawInfoList = lineListWithRatio
                .map(({
                    line: precalculatedLine,
                    effectiveMedian,
                    isLast,
                }) => {
                    let xRatio = 1;
                    let finalTokenList: string[] = [];
                    let finalSpaceWidth = 0;
                    let finalTextData = textData;
                    if (precalculatedLine === FULL_LINE_PLACEHOLDER) {
                        const { line = '', alignment } = fullLineListOption.shift() ?? {};
                        const isLast = alignment === 'justify' ? false : true;
                        xRatio = 1/1000 * condense(
                            median => {
                                const { currentLineCount } = createLineList({
                                    ctx,
                                    median,
                                    paragraphList: [line],
                                    format, textData,
                                    width,
                                    lineHeight,
                                    globalScale,
                                });

                                if (currentLineCount > 1) return false;
                                return true;
                            },
                        );
                        const { tokenList, spaceWidth } = analyzeLine({
                            ctx,
                            line,
                            xRatio,
                            format,
                            isLast,
                            textData,
                            width,
                            globalScale,
                            justifyRatio: 100,
                            lineHeight,
                        });
                        finalTokenList = tokenList;
                        finalSpaceWidth = spaceWidth;
                    } else if (precalculatedLine === FLAVOR_LINE_PLACEHOLDER) {
                        const flavorFontData = scaleFontData(EffectFontData[fontDataKey], globalScale);
                        const dynamicFlavorFontData = useDynamicSize
                            ? injectDynamicFont(flavorFontData, { heightCap: trueHeightCap, lineCount: Math.max(minLine, lineListWithRatio.length) })
                            : flavorFontData;
                        const { fontSize } = useDynamicSize
                            ? dynamicFlavorFontData.fontList[dynamicSizeLevel]
                            : flavorFontData.fontList[appliedSizeLevel];
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
                        xRatio = 1/1000 * condense(
                            median => {
                                const { currentLineCount } = createLineList({
                                    ctx,
                                    median,
                                    paragraphList: [effectFlavorCondition],
                                    format, textData: flavorTextData,
                                    width,
                                    lineHeight,
                                    globalScale,
                                });

                                if (currentLineCount > 1) return false;
                                return true;
                            },
                        );
                        const tokenList = tokenizeText(effectFlavorCondition);
                        finalTokenList = tokenList;
                        finalSpaceWidth = 0;
                        finalTextData = flavorTextData;
                    } else {
                        /** Normal line: Draw with the calculated median */
                        xRatio = effectiveMedian / 1000;
                        const line = precalculatedLine;
                        const { tokenList, spaceWidth } = analyzeLine({
                            ctx,
                            line,
                            xRatio,
                            format,
                            isLast,
                            textData,
                            width,
                            globalScale,
                            justifyRatio,
                            lineHeight,
                        });
                        finalTokenList = tokenList;
                        finalSpaceWidth = spaceWidth;
                    }
                    ctx.setTransform(1, 0, 0, 1, 0, 0);

                    return {
                        xRatio,
                        line: precalculatedLine,
                        tokenList: finalTokenList,
                        spaceWidth: finalSpaceWidth,
                        textData: finalTextData,
                    };
                });

            for (let lineDrawInfo of lineDrawInfoList) {
                const {
                    xRatio,
                    tokenList,
                    line: precalculatedLine,
                    spaceWidth,
                    textData,
                } = lineDrawInfo;
                let result: ReturnType<typeof drawLine>;
                if (precalculatedLine === FULL_LINE_PLACEHOLDER) {
                    ctx.scale(xRatio, yRatio);
                    result = drawLine({
                        ctx,
                        tokenList,
                        xRatio, yRatio,
                        trueEdge, trueBaseline,
                        spaceWidth,
                        lineHeight,
                        textData,
                        format,
                        globalScale,
                    });
                } else if (precalculatedLine === FLAVOR_LINE_PLACEHOLDER) {
                    ctx.scale(xRatio, yRatio);
                    const { currentFont, fontData } = textData;
                    ctx.font = currentFont
                        .setSize(fontSize)
                        .setFamily(fontData.font)
                        .getFont();
                    result = drawLine({
                        ctx,
                        tokenList,
                        xRatio, yRatio,
                        trueEdge, trueBaseline,
                        lineHeight,
                        textData,
                        format,
                        globalScale,
                    });
                } else {
                    ctx.scale(xRatio, yRatio);
                    result = drawLine({
                        ctx,
                        tokenList,
                        xRatio, yRatio,
                        trueEdge, trueBaseline,
                        spaceWidth,
                        lineHeight,
                        textData,
                        format,
                        globalScale,
                    });
                }
                await result;

                ctx.setTransform(1, 0, 0, 1, 0, 0);
                trueBaseline += lineHeight;
            }
            break;
        }
        resetStyle();
    }

    return sizeLevel;
};