import { FootTextRegex, NameFontDataMap, TCG_LETTER_JOINLIST, DefaultFontSizeData, getDefaultNameStyle, NameStyle, PatternMap } from 'src/model';
import { parsePalette, createFontGetter, condense } from 'src/util';
import { tokenizeText } from './text-util';
import { drawLine } from './text';
import { createLineList } from './line-analyze';
import { normalizeCardText } from './text-normalize';
import { drawFrom, drawWithSizeFrom } from './image';

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
    /** Dùng knowledge diagram để tra cứu cách tính, về cơ bản ta tạo ra một hình chữ nhật nghiêng theo góc cho trước với độ lớn vừa đủ để chứa toàn bộ text */
    const baseKAF = angleAsDegree % 360;
    const quarterSlot = `${Math.floor(baseKAF / 90)}`;
    const KAF = baseKAF % 90;
    const originWidth = contentWidth;
    const originHeight = maxAscent + maxDescent;
    // const originWidth = 16;
    // const originHeight = 8;
    // const edge = 0, baseline = 4, maxDescent = 4, maxAscent = 4;
    const cx = edge + originWidth / 2;
    const cy = baseline + (maxDescent - maxAscent) / 2;

    let width = originWidth, height = originHeight;
    if (quarterSlot === '1' || quarterSlot === '3') { width = originHeight; height = originWidth }

    /** Để không phải deal với góc tù trở lên, ta đơn giản là xác định góc phần tư chứa AF, tính toán trong nội bộ góc phần tư đó (như vậy góc luôn
     * từ 0-90), sau đó dựa vào góc phần tư mà thay đổi tọa độ.
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

export const drawName = async (
    ctx: CanvasRenderingContext2D | null | undefined,
    value: string,
    edge: number,
    trueBaseline: number,
    trueWidth: number,
    style: Partial<NameStyle>,
    option: {
        frame: string,
        cloneNode: HTMLCanvasElement | null | undefined,
        format: string,
        isSpeedSkill?: boolean,
    },
) => {
    const { isSpeedSkill, format, cloneNode, frame } = option;
    const cloneCtx = cloneNode?.getContext('2d');
    if (ctx && cloneCtx && value) {
        const {
            font,
            fillStyle,
            headTextFillStyle,
            shadowBlur,
            hasShadow,
            shadowColor,
            shadowOffsetX,
            shadowOffsetY,
            hasOutline: defaultHasOutline,
            lineColor,
            lineWidth,
            lineOffsetX,
            lineOffsetY,
            hasGradient,
            gradientAngle,
            gradientColor,
            pattern,
        } = { ...getDefaultNameStyle(), ...style };
        const { patternImage, blendMode: patternBlendMode } = PatternMap[pattern ?? ''] ?? {};
        const hasOutline = defaultHasOutline || isSpeedSkill;
        if (hasShadow) {
            ctx.shadowColor = shadowColor;
            ctx.shadowOffsetY = shadowOffsetY;
            ctx.shadowOffsetX = shadowOffsetX;
            ctx.shadowBlur = shadowBlur;
        }
        if (defaultHasOutline) {
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = lineColor;
        } else if (isSpeedSkill) {
            ctx.lineWidth = 6;
            ctx.strokeStyle = '#000';
        }
        const fontData = {
            ...(NameFontDataMap[font as keyof typeof NameFontDataMap] ?? NameFontDataMap.Default).fontData,
            headTextFillStyle,
        };
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
        const quoteConvertedValue = normalizeCardText(value, format, { multiline: false });

        /** Tính bounding box để phục vụ cho gradient  */
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

            const textMetric = ctx.measureText(cur.replaceAll(FootTextRegex, ''));
            maxAscent = Math.max(maxAscent, textMetric.actualBoundingBoxAscent);
            maxDescent = Math.max(maxDescent, textMetric.actualBoundingBoxDescent);
        }, 0);

        ctx.font = normalStyle;
        let actualLineWidth = 0;
        const internalEffectiveMedian = condense(
            median => {
                const { currentLineCount, currentLineList } = createLineList({
                    ctx,
                    median,
                    paragraphList: [quoteConvertedValue],
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

        const offsetY = fontData.fontList[0].offsetY ?? DefaultFontSizeData.offsetY;
        const tokenList = tokenizeText(quoteConvertedValue);
        const gradient = actualLineWidth > 0 && hasGradient
            ? getNameGradient(ctx, gradientAngle, parsePalette(gradientColor), edge, actualLineWidth, trueBaseline, maxAscent, maxDescent)
            : undefined;

        ctx.fillStyle = gradient ?? fillStyle;
        drawLine({
            ctx,
            tokenList,
            xRatio, yRatio,
            trueEdge: edge, trueBaseline,
            textData,
            format,
            textDrawer: ({ ctx, letter, scaledEdge, scaledBaseline }) => {
                // ctx.lineJoin = 'round';
                // ctx.strokeText(letter, scaledEdge + lineOffsetX, scaledBaseline + lineOffsetY - (isSpeedSkill ? offsetY : 0));
                ctx.fillText(letter, scaledEdge, scaledBaseline - (isSpeedSkill ? offsetY : 0));
            },
        });
        if (patternImage && cloneNode) {
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            /** Một số pattern cần màu nền của frame */
            await drawFrom(cloneCtx, `/asset/image/frame/frame-${frame}.png`, 0, 0);
            cloneCtx.globalCompositeOperation = patternBlendMode;
            await drawWithSizeFrom(
                cloneCtx, `/asset/image/finish-name/${patternImage}.png`,
                edge, trueBaseline - maxAscent,
                trueWidth,
                maxAscent + maxDescent,
            );
            ctx.globalCompositeOperation = 'source-in';
            ctx.drawImage(cloneNode, 0, 0);
            ctx.scale(xRatio, yRatio);
        }
        if (hasOutline) {
            ctx.globalCompositeOperation = 'destination-over';
            drawLine({
                ctx,
                tokenList,
                xRatio, yRatio,
                trueEdge: edge, trueBaseline,
                textData,
                format,
                textDrawer: ({ ctx, letter, scaledEdge, scaledBaseline }) => {
                    ctx.lineJoin = 'round';
                    ctx.strokeText(letter, scaledEdge + lineOffsetX, scaledBaseline + lineOffsetY - (isSpeedSkill ? offsetY : 0));
                },
            });
        }
        ctx.globalCompositeOperation = 'source-over';
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        const defaultTextStyle = getDefaultNameStyle();
        ctx.fillStyle = defaultTextStyle.fillStyle;
        ctx.shadowColor = defaultTextStyle.shadowColor;
        ctx.shadowOffsetY = defaultTextStyle.shadowOffsetY;
        ctx.shadowOffsetX = defaultTextStyle.shadowOffsetX;
        ctx.shadowBlur = defaultTextStyle.shadowBlur;
        ctx.lineWidth = defaultTextStyle.lineWidth;
        ctx.strokeStyle = defaultTextStyle.lineColor;
        ctx.lineJoin = 'miter';
        ctx.globalCompositeOperation = 'source-over';
    }
};