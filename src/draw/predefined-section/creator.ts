import { CreatorFontData, CreatorCoordinateMap, DefaultFontSizeData } from 'src/model';
import { condense, createFontGetter, scaleCoordinateData, scaleFontData } from 'src/util';
import { tokenizeText } from '../text-util';
import { drawLine } from '../text';
import { createLineList } from '../line';
import { normalizeCardText } from '../text-normalize';
import { clearCanvas, setTextStyle } from '../canvas-util';
import { CanvasTextStyle } from 'src/service';

export const drawCreatorText = ({
    ctx,
    value,
    format,
    alignment,
    baselineOffset = 0,
    lightFooter,
    hasShadow,
    textStyle,
    globalScale,
}: {
    ctx?: CanvasRenderingContext2D | null,
    value: string,
    format: string,
    alignment: 'left' | 'right',
    baselineOffset?: number,
    lightFooter: boolean,
    hasShadow?: boolean,
    textStyle?: CanvasTextStyle,
    globalScale: number,
}) => {
    if (!clearCanvas(ctx)) return;

    const resetTextStyle = setTextStyle({
        ctx,
        color: lightFooter ? '#ffffff' : '#000000',
        shadowColor: hasShadow
            ? lightFooter ? '#000000' : '#ffffff'
            : '#000000',
        y: 0,
        x: 0,
        blur: hasShadow ? 3 : 0,
        globalScale,
        ...textStyle,
        ...(textStyle?.shadowColor ? { x: 0, y: 0, blur: 3 } : {}),
    });

    const { trueEdge, trueBaseline, trueWidth: width } = scaleCoordinateData(
        CreatorCoordinateMap[format] ?? CreatorCoordinateMap['tcg'],
        globalScale,
    );
    const fontData = scaleFontData(CreatorFontData[format], globalScale);
    const { font } = fontData;
    const normalizedText = normalizeCardText(value, format, { multiline: false, furiganaHelper: false });

    /** Calculation */
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
            defaultWeight: hasShadow ? 'bold' : '',
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
                    globalScale,
                    width,
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

    /** Drawing */
    const xRatio = internalEffectiveMedian / 1000;
    const yRatio = 1;
    ctx.scale(xRatio, yRatio);
    const result = drawLine({
        ctx,
        tokenList: tokenizeText(normalizedText),
        xRatio, yRatio,
        trueEdge: alignment === 'left' ? trueEdge : (trueEdge - actualLineWidth * xRatio),
        trueBaseline: trueBaseline + (fontSizeData.offsetY ?? DefaultFontSizeData.offsetY) + baselineOffset * globalScale,
        textData,
        format,
        globalScale,
        textDrawer: ({ ctx, letter, scaledEdge, scaledBaseline }) => {
            ctx.fillText(letter, scaledEdge, scaledBaseline);
        },
    });
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    resetTextStyle();

    return {
        /** End edge is alignment insensitive */
        leftEdge: alignment === 'left' ? trueEdge : (trueEdge - actualLineWidth * xRatio),
        ...result,
    };
};