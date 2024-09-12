import { PasswordFontData, PasswordCoordinateMap, DefaultFontSizeData } from 'src/model';
import { condense, createFontGetter } from 'src/util';
import { tokenizeText } from '../text-util';
import { drawLine } from '../text';
import { createLineList } from '../line';
import { normalizeCardText } from '../text-normalize';
import { clearCanvas } from '../canvas-util';

export const drawPasswordText = ({
    ctx,
    value,
    format,
    alignment,
    baselineOffset = 0,
    lightFooter,
    hasShadow,
}: {
    ctx?: CanvasRenderingContext2D | null,
    value: string,
    format: string,
    alignment: 'left' | 'right',
    baselineOffset?: number,
    lightFooter: boolean,
    hasShadow?: boolean,
}) => {
    if (!clearCanvas(ctx)) return 0;

    ctx.fillStyle = lightFooter ? '#ffffff' : '#000000';
    ctx.shadowColor = hasShadow
        ? lightFooter ? '#000000' : '#ffffff'
        : '#000000';
    ctx.shadowOffsetY = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowBlur = hasShadow ? 3 : 0;

    const { trueEdge, trueBaseline, trueWidth: width } = PasswordCoordinateMap[format] ?? PasswordCoordinateMap['tcg'];
    const isNumberPassword = /^[0-9]*$/.test(value);
    const fontData = PasswordFontData[format];
    const { font } = fontData;
    const normalizedText = normalizeCardText(value, format, { multiline: false, furiganaHelper: false });

    /** Calculation */
    let textData = {
        fontLevel: !isNumberPassword ? 1 : 0,
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
        trueBaseline: trueBaseline + (fontSizeData.offsetY ?? DefaultFontSizeData.offsetY) + baselineOffset,
        textData,
        format,
        textDrawer: ({ ctx, letter, scaledEdge, scaledBaseline }) => {
            ctx.fillText(letter, scaledEdge, scaledBaseline);
        },
    });
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    return result.tokenEdge;
};