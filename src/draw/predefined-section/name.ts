import {
    DefaultFontSizeData,
    NormalizeTextRegex,
    NameFontDataMap,
    NameStyle,
    PatternMap,
    TCG_LETTER_JOINLIST,
    getDefaultNameStyle,
} from 'src/model';
import { parsePalette, createFontGetter, condense, scaleFontData, scaleFontSizeData, applyEmboss } from 'src/util';
import { tokenizeText } from '../text-util';
import { drawLine } from '../text';
import { createLineList } from '../line';
import { normalizeCardText } from '../text-normalize';
import { drawAsset, drawAssetWithSize } from '../image';
import { setTextStyle } from '../canvas-util';

const getNameGradient = (
    ctx: CanvasRenderingContext2D,
    angleAsDegree: number,
    colorStopList: { offset: string, color: string }[],
    edge: number,
    contentWidth: number,
    baseline: number,
    maxAscent: number,
    maxDescent: number,
) => {
    /** Use the knowledge diagram to understand more about the geometry for this, but basically we want to create a rectangle to put the gradient in, this rectangle can be rotated, but no matter what the rotation angle is, it must be large just enough to contains all the card name inside, no more no less.
     * 
     * This is deceptively hard because each letters has their own "hanging" or "protruding" part, magnified by the fact that the gradient is rotable. */
    const baseKAF = angleAsDegree % 360;
    const quarterSlot = `${Math.floor(baseKAF / 90)}`;
    const KAF = baseKAF % 90;
    const originWidth = contentWidth;
    const originHeight = maxAscent + maxDescent;
    // Testing only
    // const originWidth = 16;
    // const originHeight = 8;
    // const edge = 0, baseline = 4, maxDescent = 4, maxAscent = 4;
    const cx = edge + originWidth / 2;
    const cy = baseline + (maxDescent - maxAscent) / 2;

    let width = originWidth, height = originHeight;
    if (quarterSlot === '1' || quarterSlot === '3') { width = originHeight; height = originWidth }

    /**
     * The coordinate system is put in the middle of the card name, with its origin lies exactly at the center, thanks to the information about its bounding from parameters.
     * 
     * We avoid want to obtuse angle, so we only calculate one quarter, then mirror it vertically and horizontally to fill all fours.
     */
    const AD = Math.sqrt(width ** 2 / 4 + height ** 2 / 4);
    if (AD > 0) {
        const KAD = Math.asin((width / 2) / AD) * 180 / Math.PI;
        const DAF = KAD - KAF;
        const FDA = 90 - DAF;
        const AF = Math.sin(FDA / 180 * Math.PI) * AD;
        const AL = Math.sin(KAF / 180 * Math.PI) * AF;
        const FL = Math.cos(KAF / 180 * Math.PI) * AF;
        let offsetX = AL;
        let offsetY = FL;
        if (quarterSlot === '1') { offsetX = FL; offsetY = -AL }
        if (quarterSlot === '2') { offsetX = -AL; offsetY = -FL }
        if (quarterSlot === '3') { offsetX = -FL; offsetY = AL }

        const topX = cx + offsetX;
        const topY = cy - offsetY;
        const botX = cx - offsetX;
        const botY = cy + offsetY;
        // console.info('metric', {
        //     quarterSlot, baseKAF,
        //     '\n', width, height, cx, cy,
        //     '\n', KAF, KAD, DAF, FDA,
        //     '\n', AD, AF, AL, FL,
        //     '\n', maxAscent, maxDescent, baseline,
        //     '\n', topX, topY, botX, botY,
        // });
        const gradient = ctx.createLinearGradient(topX, topY, botX, botY);
        colorStopList.forEach(({ color, offset }) => gradient.addColorStop(parseFloat(offset), color));

        return gradient;
    }
    return undefined;
};

/**
 * Draw card name, while the foot text is affected by every custom method, head text ONLY affected by its own color.
 */
export const drawName = async (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D | null | undefined,
    value: string,
    _edge: number,
    _trueBaseline: number,
    _width: number,
    style: Partial<NameStyle>,
    option: {
        frame: string,
        format: string,
        isSpeedSkill?: boolean,
        furiganaHelper: boolean,
        globalScale: number,
    },
) => {
    const { isSpeedSkill, format, frame, furiganaHelper, globalScale } = option;
    const edge = _edge * globalScale;
    const trueBaseline = _trueBaseline * globalScale;
    const width = _width * globalScale;

    if (!(ctx && value)) return;
    const {
        embossPitch,
        embossYaw,
        embossThickness,
        fillStyle,
        font,
        gradientAngle,
        gradientColor,
        hasEmboss,
        hasGradient,
        hasOutline,
        hasShadow,
        headTextFillStyle,
        lineColor,
        lineOffsetX,
        lineOffsetY,
        lineWidth,
        shadowBlur,
        shadowColor,
        shadowOffsetX,
        shadowOffsetY,
        pattern,
    } = { ...getDefaultNameStyle(), ...style };
    const { patternImage, blendMode: patternBlendMode } = PatternMap[pattern ?? ''] ?? {};

    ctx.textAlign = 'left';
    const fontData = scaleFontData({
        ...(NameFontDataMap[font as keyof typeof NameFontDataMap] ?? NameFontDataMap.Default).fontData,
        headTextFillStyle,
    }, globalScale);
    const fontGetter = createFontGetter({
        defaultFamily: fontData.font,
        defaultSize: fontData.fontList[0].fontSize,
        defaultWeight: fontData.weight,
    });
    const textData = {
        fontLevel: 0,
        fontData,
        currentFont: fontGetter,
    };
    const quoteConvertedValue = normalizeCardText(
        value,
        format,
        { multiline: false, furiganaHelper, dictionaryType: 'rubyFormName' },
    );

    /** Calculate the bounding box that contains all card name's graphic, and passing it to gradient calculator. Beware - gradient does not apply to head text. */
    const crudeTokenList = format === 'ocg'
        ? [quoteConvertedValue]
        : quoteConvertedValue.split(new RegExp(`([^${TCG_LETTER_JOINLIST}])`, 'g'));
    const fontGetterForWidthCalculating = createFontGetter({
        defaultFamily: fontData.font,
        defaultSize: fontData.fontList[0].fontSize,
        defaultWeight: fontData.weight,
    });
    const normalStyle = fontGetterForWidthCalculating.getFont();
    const symbolStyle = fontGetterForWidthCalculating
        .setSize(cur => cur * fontData.symbolFontRatio)
        .setStyle('small-caps')
        .setFamily(fontData.symbolFont)
        .getFont();
    let maxAscent = 0;
    let maxDescent = 0;
    crudeTokenList.forEach((cur, index) => {
        ctx.font = index % 2 === 0 ? normalStyle : symbolStyle;

        const textMetric = ctx.measureText(cur.replaceAll(NormalizeTextRegex, ''));
        maxAscent = Math.max(maxAscent, textMetric.actualBoundingBoxAscent);
        maxDescent = Math.max(maxDescent, textMetric.actualBoundingBoxDescent);
    }, 0);

    ctx.font = normalStyle;
    /** Calculate fitting ratio like normal */
    let actualLineWidth = 0;
    const internalEffectiveMedian = condense(
        median => {
            const { currentLineCount, currentLineList } = createLineList({
                ctx,
                median,
                paragraphList: [quoteConvertedValue],
                format, textData,
                width,
                globalScale,
            });

            if (currentLineCount > 1) return false;
            actualLineWidth = currentLineList[0].actualLineWidth;
            return true;
        },
    );
    const xRatio = internalEffectiveMedian / 1000;
    const yRatio = 1;

    ctx.scale(xRatio, yRatio);
    /** Calculate gradient and offset based on card's frame. */
    const scaledDefaultFontSizeData = scaleFontSizeData(DefaultFontSizeData, globalScale);
    const offsetY = fontData.fontList[0].offsetY ?? scaledDefaultFontSizeData.offsetY;
    const tokenList = tokenizeText(quoteConvertedValue);
    const gradient = actualLineWidth > 0 && hasGradient
        ? getNameGradient(
            ctx,
            gradientAngle,
            parsePalette(gradientColor),
            edge,
            actualLineWidth,
            trueBaseline,
            maxAscent, maxDescent,
        )
        : undefined;

    /**
     * First iteration: Draw the name with color and gradient. We explicitly draw on base canvas here to avoid data loss from putImageData / drawImage method.
     * 
     * If we use emboss, additional thickness will be added to the text to increase embossed area. We use stroke text so it can inherit color, gradient and pattern style.
     */
    let thickenEmboss = hasEmboss && typeof embossThickness === 'number' && embossThickness > 0;
    let resetEmbossStroke = () => { };
    if (thickenEmboss) {
        resetEmbossStroke = setTextStyle({
            ctx,
            lineWidth: embossThickness,
            lineColor: fillStyle,
            lineColorGradient: gradient,
            globalScale,
            useDefault: false,
        });
    }
    ctx.fillStyle = gradient ?? fillStyle;
    const { tokenEdge } = drawLine({
        ctx,
        tokenList,
        xRatio, yRatio,
        trueEdge: edge, trueBaseline,
        textData,
        format,
        globalScale,
        option: { drawHeadText: false },
        textDrawer: ({ ctx, letter, scaledEdge, scaledBaseline }) => {
            ctx.fillText(letter, scaledEdge, scaledBaseline - (isSpeedSkill ? offsetY : 0));
            if (thickenEmboss) ctx.strokeText(letter, scaledEdge, scaledBaseline - (isSpeedSkill ? offsetY : 0));
        },
    });
    resetEmbossStroke();

    /** 
     * Second iteration: Draw pattern, we follow these steps.
     *  * We create a second, temporary canvas node.
     *  * We fill the node with pattern. The pattern is not skewed, but maybe scaled to fit exactly the bounding box of the card name (we reuse the same information when calculate gradient).
     *  * We place the temporary node above the card name's canvas, using suitable blend mode, this way we essentially "coating" the pattern on top of the text, without damaging its surrounding.
     */
    if (patternImage) {
        const patternCanvas = canvas.cloneNode() as HTMLCanvasElement;
        const patternContext = patternCanvas.getContext('2d');
        if (patternContext) {
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            /** Some patterns are partially transparent, so we need to draw the current frame under it first. */
            patternContext.scale(globalScale, globalScale);
            await drawAsset(patternContext, `frame/frame-${frame}.png`, 0, 0);
            await drawAsset(patternContext, `background/background-name-${frame}.png`, 0, 0);
            patternContext.globalCompositeOperation = patternBlendMode;
            patternContext.resetTransform();
            await drawAssetWithSize(
                patternContext, `finish-name/${patternImage}.png`,
                edge, trueBaseline - maxAscent,
                width,
                maxAscent + maxDescent,
            );
            ctx.globalCompositeOperation = 'source-in';
            ctx.drawImage(patternCanvas, 0, 0);
            ctx.globalCompositeOperation = 'source-over';
            ctx.scale(xRatio, yRatio);
        }
    }

    /** Third iteration: Apply emboss effect */
    if (hasEmboss) {
        const affectedWidthExtraPadding = 10;
        const embossedImageData = applyEmboss({
            inputCanvas: canvas,
            lightPitch: embossPitch,
            lightYaw: embossYaw,
            minIntensity: -0.9,
            maxIntensity: 0.9,
            affectedWidth: Math.ceil(tokenEdge + affectedWidthExtraPadding),
        });
        if (embossedImageData) ctx.putImageData(embossedImageData, 0, 0);
    }

    /**
     * Fourth iteration: Apply "outline" to card name. We use stroke method to simulate outline behavior.
     * 
     * We stroke the text behind the canvas to avoid polluting current effects. Because we already drawn a layer of outline if emboss thickness is applied, we will also increase outline thickness to compensate.
     * */
    if (hasOutline) {
        const resetStroke = setTextStyle({
            ctx,
            lineWidth: lineWidth + (hasEmboss ? embossThickness : 0),
            lineColor,
            globalScale,
            useDefault: false,
        });
        ctx.globalCompositeOperation = 'destination-over';
        drawLine({
            ctx,
            tokenList,
            xRatio, yRatio,
            trueEdge: edge, trueBaseline,
            textData,
            format,
            globalScale,
            option: { drawHeadText: false },
            textDrawer: ({ ctx, letter, scaledEdge, scaledBaseline }) => {
                ctx.lineJoin = 'round';
                ctx.strokeText(
                    letter,
                    scaledEdge + lineOffsetX,
                    scaledBaseline + lineOffsetY - (isSpeedSkill ? offsetY : 0),
                );
            },
        });
        ctx.lineJoin = 'miter';
        ctx.globalCompositeOperation = 'source-over';
        resetStroke();
    }

    /**
     * Fifth iteration: We apply shadow here. As shadow is drawn around the text, not in it, we can use destination-over composition to apply it below the canvas text, accommodate for both outline and emboss thickness.
     */
    if (hasShadow) {
        const shadowCanvas = canvas.cloneNode() as HTMLCanvasElement;
        const shadowContext = shadowCanvas.getContext('2d');
        if (shadowContext) {
            const resetShadow = setTextStyle({
                ctx: shadowContext,
                x: shadowOffsetX,
                y: shadowOffsetY,
                shadowColor: shadowColor,
                blur: shadowBlur,
                globalScale,
                useDefault: false,
            });
            ctx.scale(1 / xRatio, 1 / yRatio);
            shadowContext.drawImage(canvas, 0, 0);
            ctx.globalCompositeOperation = 'destination-over';
            ctx.drawImage(shadowCanvas, 0, 0);
            ctx.globalCompositeOperation = 'source-over';
            resetShadow();
        }
    }

    /** Sixth iteration: Draw furigana, which is not affected by all other text style except furigana color. Again we draw it on base canvas for the same data loss reason. */
    drawLine({
        ctx,
        tokenList,
        xRatio, yRatio,
        trueEdge: edge, trueBaseline,
        textData,
        format,
        globalScale,
        textDrawer: () => { },
    });

    const defaultTextStyle = getDefaultNameStyle();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = defaultTextStyle.fillStyle;
    ctx.lineJoin = 'miter';
    ctx.globalCompositeOperation = 'source-over';
};