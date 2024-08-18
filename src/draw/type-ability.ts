import { FontData, TypeAbilityCoordinateMap, getTypeAbilityFontData } from 'src/model';
import { condense, createFontGetter } from 'src/util';
import { tokenizeText } from './text-util';
import { drawLine } from './text';
import { createLineList } from './line-analyze';
import { normalizeCardText } from './text-normalize';

const sizeMap: Record<string, number> = {
    small: 0,
    medium: 1,
    large: 2,
};
export const drawMonsterType = ({
    ctx,
    value,
    format,
    metricMethod,
    size,
    furiganaHelper,
}: {
    ctx: CanvasRenderingContext2D,
    value: string,
    format: string,
    metricMethod?: FontData['metricMethod'],
    size: 'small' | 'medium' | 'large',
    furiganaHelper: boolean,
}) => {
    const {
        edgeAlignment = 'left',
        trueEdge,
        trueBaseline,
        trueWidth,
    } = TypeAbilityCoordinateMap[format]?.[size] ?? TypeAbilityCoordinateMap['tcg']['medium'];
    const fontData = getTypeAbilityFontData()[format];
    if (metricMethod) fontData.metricMethod = metricMethod;
    const { font } = fontData;
    const fontLevel = sizeMap[size];
    const fontSizeData = fontData.fontList[fontLevel];
    const fontGetter = createFontGetter({
        defaultFamily: font,
        defaultSize: `${fontSizeData.fontSize}px`,
    });
    const textData = {
        fontLevel,
        fontData,
        currentFont: fontGetter,
    };
    let actualLineWidth = 0;

    ctx.font = fontGetter.getFont();
    ctx.textAlign = 'left';
    const normalizedText = normalizeCardText(value, format, { multiline: false, furiganaHelper });
    const internalEffectiveMedian = condense(
        median => {
            const { currentLineCount, currentLineList } = createLineList({
                ctx,
                median,
                paragraphList: [normalizedText],
                format, textData,
                trueWidth,
            });
    
            if (currentLineCount > 1) return false;
            actualLineWidth = currentLineList[0].actualLineWidth;
            return true;
        },
    );
    const xRatio = internalEffectiveMedian / 1000;
    const yRatio = 1;
    ctx.scale(xRatio, yRatio);
    const result = drawLine({
        ctx,
        tokenList: tokenizeText(normalizedText),
        xRatio, yRatio,
        trueEdge: edgeAlignment === 'left' ? trueEdge : (trueEdge - actualLineWidth * xRatio),
        trueBaseline,
        textData,
        format,
        textDrawer: ({ ctx, letter, scaledEdge, scaledBaseline }) => {
            ctx.fillText(letter, scaledEdge, scaledBaseline);
        },
    });
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    return {
        ...result,
        xRatio,
    };
};