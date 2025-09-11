import { PasswordFontData, PasswordCoordinateMap, DefaultFontSizeData } from 'src/model';
import { condense, createFontGetter, scaleCoordinateData, scaleFontData, scaleFontSizeData } from 'src/util';
import { tokenizeText } from '../text-util';
import { drawLine } from '../text';
import { createLineList } from '../line';
import { normalizeCardText } from '../text-normalize';
import { clearCanvas, setTextStyle } from '../canvas-util';
import { CanvasTextStyle } from 'src/service';

export const drawPasswordText = async ({
    ctx,
    globalScale,
    value,
    format,
    alignment,
    baselineOffset = 0,
    edgeOffset = 0,
    lightFooter,
    hasShadow,
    textStyle,
    fontLevel,
}: {
    ctx?: CanvasRenderingContext2D | null,
    globalScale: number,
    value: string,
    format: string,
    alignment: 'left' | 'right',
    baselineOffset?: number,
    edgeOffset?: number,
    lightFooter: boolean,
    hasShadow?: boolean,
    textStyle?: CanvasTextStyle,
    fontLevel: number,
}) => {
    if (!clearCanvas(ctx)) return {
        rightEdge: 0,
    };

    const resetTextStyle = setTextStyle({
        ctx,
        color: lightFooter ? '#ffffff' : '#000000',
        shadowColor: hasShadow
            ? lightFooter ? '#000000' : '#ffffff'
            : '#000000',
        x: 0,
        y: 0,
        blur: hasShadow ? 3 : 0,
        globalScale,
        ...textStyle,
        ...(textStyle?.shadowColor ? { x: 0, y: 0, blur: 3 } : {}),
    });

    const { trueEdge, trueBaseline, trueWidth: width } = scaleCoordinateData(
        PasswordCoordinateMap[format] ?? PasswordCoordinateMap['tcg'],
        globalScale,
    );
    const fontData = scaleFontData(PasswordFontData[format], globalScale);
    const { font } = fontData;
    const normalizedText = normalizeCardText(value, format, { multiline: false, furiganaHelper: false });

    /** Calculation */
    let textData = {
        fontLevel,
        fontData,
        currentFont: createFontGetter(),
    };
    let actualLineWidth = 0;
    const lineHeight = textData.fontData.fontList[textData.fontLevel].lineHeight;
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
                    width,
                    lineHeight,
                    globalScale,
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
    const scaledDefaultFontSizeData = scaleFontSizeData(DefaultFontSizeData, globalScale);
    const result = await drawLine({
        ctx,
        tokenList: tokenizeText(normalizedText),
        xRatio, yRatio,
        trueEdge: alignment === 'left'
            ? trueEdge + edgeOffset
            : (trueEdge - edgeOffset - actualLineWidth * xRatio),
        trueBaseline: trueBaseline + (fontSizeData.offsetY ?? scaledDefaultFontSizeData.offsetY) + baselineOffset,
        lineHeight,
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
        rightEdge: result.tokenEdge,
    };
};