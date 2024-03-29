import { TextStyle, UP_RATIO, getDefaultTextStyle } from 'src/model';
import { quoteConvert } from 'src/util';
import { fillTextLeftWithSpacing, strokeTextLeftWithSpacing } from './util';

export const drawName = (
    ctx: CanvasRenderingContext2D | null | undefined,
    value: string,
    edge: number,
    baseline: number,
    maxWidth: number,
    style: Partial<TextStyle>,
    option: {
        isSpeedSkill?: boolean,
    },
) => {
    if (ctx && value) {
        const { isSpeedSkill } = option;
        const {
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
        } = { ...getDefaultTextStyle(), ...style };
        console.log({ ...getDefaultTextStyle(), ...style });
        const hasOutline = defaultHasOutline || isSpeedSkill;
        const letterSpacingRatio = hasOutline ? -0.18 : 0;
        ctx.fillStyle = fillStyle;
        if (hasShadow) {
            ctx.shadowColor = shadowColor;
            ctx.shadowOffsetY = shadowOffsetY;
            ctx.shadowOffsetX = shadowOffsetX;
            ctx.shadowBlur = shadowBlur;
        }
        if (hasOutline) {
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = lineColor;
        } else if (isSpeedSkill) {
            ctx.lineWidth = 6;
            ctx.strokeStyle = '#000';
        }
        const splittedText = quoteConvert(value).split(/([^&A-Za-z0-9\-/\s()!])/g);
        const contentWidth = splittedText
            .reduce((prev, cur, index) => {
                if (index % 2 === 0) ctx.font = isSpeedSkill
                    ? 'bold 61px Arial'
                    : `${64.59 * UP_RATIO}px MatrixRegularSmallCaps`;
                else ctx.font = `${54.59 * UP_RATIO}px matrix`;

                return prev + ctx.measureText(cur).width * (2 + letterSpacingRatio) / 2;
            }, 0);

        // ctx.fillText(value, edge, baseline, maxWidth);
        if (contentWidth > 0) {
            const condenseRatio = Math.min(maxWidth / contentWidth, 1);
            ctx.scale(condenseRatio, 1);
            splittedText
                .reduce((prev, cur, index) => {
                    if (index % 2 === 0) ctx.font = isSpeedSkill
                        ? 'bold 61px Arial'
                        : `${64.59 * UP_RATIO}px MatrixRegularSmallCaps`;
                    else ctx.font = `small-caps ${54.59 * UP_RATIO}px matrix`;

                    if (hasOutline) {
                        strokeTextLeftWithSpacing(
                            ctx,
                            cur,
                            letterSpacingRatio,
                            prev / condenseRatio - lineOffsetX,
                            baseline - (isSpeedSkill ? 3 : 0) - lineOffsetY,
                        );
                        fillTextLeftWithSpacing(
                            ctx,
                            cur,
                            letterSpacingRatio,
                            prev / condenseRatio,
                            baseline - (isSpeedSkill ? 3 : 0),
                        );
                    } else {
                        ctx.fillText(cur, prev / condenseRatio, baseline - (isSpeedSkill ? 3 : 0));
                    }
                    return prev + ctx.measureText(cur).width * condenseRatio;
                }, edge + (isSpeedSkill ? 3 : 0));
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