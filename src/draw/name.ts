import { TextStyle, TextStyleMap, getDefaultTextStyle } from 'src/model';
import { parsePalette, normalizeCardText } from 'src/util';
import { fillTextLeftWithSpacing, strokeTextLeftWithSpacing } from './canvas-util';

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


export const drawName = (
    ctx: CanvasRenderingContext2D | null | undefined,
    value: string,
    edge: number,
    baseline: number,
    maxWidth: number,
    style: Partial<TextStyle>,
    option: {
        format: string,
        isSpeedSkill?: boolean,
    },
) => {
    if (ctx && value) {
        const { isSpeedSkill, format } = option;
        const {
            font,
            fillStyle,
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
        } = { ...getDefaultTextStyle(), ...style };
        const hasOutline = defaultHasOutline || isSpeedSkill;
        const { fontStyle, letterSpacingRatio, offsetY, offsetX } = TextStyleMap[font];
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

        const quoteConvertedValue = normalizeCardText(value, format);
        const tokenList = format === 'ocg'
            ? [quoteConvertedValue]
            : quoteConvertedValue.split(/([^&A-Za-z0-9\-/\s()!,])/g);

        let maxAscent = 0;
        let maxDescent = 0;
        const contentWidth = tokenList
            .reduce((prev, cur, index) => {
                if (index % 2 === 0) ctx.font = fontStyle;
                else ctx.font = 'small-caps 64px matrix';
                const metric = ctx.measureText(cur);
                maxAscent = Math.max(maxAscent, metric.actualBoundingBoxAscent);
                maxDescent = Math.max(maxDescent, metric.actualBoundingBoxDescent);

                return prev + metric.width * (2 + letterSpacingRatio) / 2;
            }, 0);

        // ctx.fillText(value, edge, baseline, maxWidth);
        /** Công thức tính gradient tham khảo
         * https://app.diagrams.net/#G1CLt-JAbzoPJUKvAHNyuOB-U-GGgf4Del#%7B%22pageId%22%3A%22ltzT5SsYBdAxyO781Ist%22%7D
         */
        if (contentWidth > 0) {
            const condenseRatio = Math.min(maxWidth / contentWidth, 1);
            const gradient = hasGradient
                ? getNameGradient(ctx, gradientAngle, parsePalette(gradientColor), edge, contentWidth, baseline, maxAscent, maxDescent)
                : undefined;

            ctx.fillStyle = gradient ?? fillStyle;

            ctx.scale(condenseRatio, 1);
            tokenList
                .reduce((prev, token, index) => {
                    if (index % 2 === 0) ctx.font = fontStyle;
                    else ctx.font = 'small-caps 64px matrix';

                    if (hasOutline) {
                        ctx.lineJoin = 'round';
                        strokeTextLeftWithSpacing(
                            ctx,
                            token,
                            letterSpacingRatio,
                            prev / condenseRatio + offsetX + lineOffsetX,
                            baseline - (isSpeedSkill ? offsetY : 0) + lineOffsetY,
                        );
                        fillTextLeftWithSpacing(
                            ctx,
                            token,
                            letterSpacingRatio,
                            prev / condenseRatio + offsetX,
                            baseline - (isSpeedSkill ? offsetY : 0),
                        );
                    } else {
                        ctx.fillText(token, prev / condenseRatio + offsetX, baseline - (isSpeedSkill ? offsetY : 0));
                    }
                    return prev + ctx.measureText(token).width * condenseRatio;
                }, edge + (isSpeedSkill ? offsetY : 0));
            ctx.scale(1 / condenseRatio, 1);
        }
        const defaultTextStyle = getDefaultTextStyle();
        ctx.fillStyle = defaultTextStyle.fillStyle;
        ctx.shadowColor = defaultTextStyle.shadowColor;
        ctx.shadowOffsetY = defaultTextStyle.shadowOffsetY;
        ctx.shadowOffsetX = defaultTextStyle.shadowOffsetX;
        ctx.shadowBlur = defaultTextStyle.shadowBlur;
        ctx.lineWidth = defaultTextStyle.lineWidth;
        ctx.strokeStyle = defaultTextStyle.lineColor;
        ctx.lineJoin = 'miter';
    }
};