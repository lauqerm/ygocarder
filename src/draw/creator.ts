import { CreatorFontData, CreatorCoordinateMap, DefaultFontSizeData } from 'src/model';
import { condense, createFontGetter } from 'src/util';
import { tokenizeText } from './text-util';
import { drawLine } from './text';
import { createLineList } from './line-analyze';
import { normalizeCardText } from './text-normalize';

export const drawCreatorText = ({
    ctx,
    value,
    format,
    alignment,
    baselineOffset = 0,
}: {
    ctx: CanvasRenderingContext2D,
    value: string,
    format: string,
    alignment: 'left' | 'right',
    baselineOffset?: number,
}) => {
    const { trueEdge, trueBaseline, trueWidth } = CreatorCoordinateMap[format] ?? CreatorCoordinateMap['tcg'];
    const fontData = CreatorFontData[format];
    const { font } = fontData;
    const normalizedText = normalizeCardText(value, format, { multiline: false, furiganaHelper: false });

    let textData = {
        fontLevel: 0,
        fontData,
        currentFont: createFontGetter(),
    };
    let actualLineWidth = 0;
    let internalEffectiveMedian = 1000;
    let fontSizeData = fontData.fontList[0];
    for (let fontLevel = 0; fontLevel < fontData.fontList.length; fontLevel++) {
        fontSizeData = fontData.fontList[fontLevel];
        const fontGetter = createFontGetter({
            defaultFamily: font,
            defaultSize: `${fontSizeData.fontSize}px`,
            defaultWeight: format === 'tcg' ? '' : 'bold',
        });
        let internalTextData = {
            fontLevel,
            fontData,
            currentFont: fontGetter,
        };
        let internalTrueWidth = 0;
        ctx.font = fontGetter.getFont();
        ctx.textAlign = 'left';
        internalEffectiveMedian = condense(
            median => {
                const { currentLineCount, currentLineList } = createLineList({
                    ctx,
                    median,
                    paragraphList: [normalizedText],
                    format, textData: internalTextData,
                    trueWidth,
                });
        
                if (currentLineCount > 1) return false;
                internalTrueWidth = currentLineList[0].actualLineWidth;
                return true;
            },
        );

        actualLineWidth = internalTrueWidth;
        textData = internalTextData;
        if (internalEffectiveMedian >= 1000) break;
    }
    const xRatio = internalEffectiveMedian / 1000;
    const yRatio = 1;
    ctx.scale(xRatio, yRatio);
    const result = drawLine({
        ctx,
        tokenList: tokenizeText(normalizedText),
        xRatio, yRatio,
        trueEdge: alignment === 'left' ? trueEdge : (trueEdge - actualLineWidth * xRatio),
        trueBaseline: trueBaseline + (fontSizeData.offsetY ?? DefaultFontSizeData.offsetY) + baselineOffset,
        textData,
        format,
        textDrawer: ({ ctx, letter, scaledEdge, scaledBaseline }) => {
            ctx.fillText(letter, scaledEdge, scaledBaseline);
        },
    });
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    return result;
};