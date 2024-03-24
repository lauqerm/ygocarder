import { TextStyle, defaultTextStyle } from 'src/model';
import { quoteConvert } from 'src/util';

export const drawName = (
    ctx: CanvasRenderingContext2D | null | undefined,
    value: string,
    edge: number,
    baseline: number,
    maxWidth: number,
    style: TextStyle,
) => {
    if (ctx && value) {
        ctx.fillStyle = style.fillStyle;
        if (style.hasShadow) {
            ctx.shadowColor = style.shadowColor;
            ctx.shadowOffsetY = style.shadowOffsetY;
            ctx.shadowOffsetX = style.shadowOffsetX;
            ctx.shadowBlur = style.shadowBlur;
        }
        const splittedText = quoteConvert(value).split(/([^&A-Za-z0-9\-/\s()])/g);
        const contentWidth = splittedText
            .reduce((prev, cur, index) => {
                if (index % 2 === 0) ctx.font = '64.59px MatrixRegularSmallCaps';
                else ctx.font = '54.59px matrix';

                return prev + ctx.measureText(cur).width;
            }, 0);

        // ctx.fillText(value, edge, baseline, maxWidth);
        if (contentWidth > 0) {
            const condenseRatio = Math.min(maxWidth / contentWidth, 1);
            ctx.scale(condenseRatio, 1);
            splittedText
                .reduce((prev, cur, index) => {
                    if (index % 2 === 0) ctx.font = '64.59px MatrixRegularSmallCaps';
                    else ctx.font = 'small-caps 54.59px matrix';
    
                    ctx.fillText(cur, prev / condenseRatio, baseline);
                    return prev + ctx.measureText(cur).width * condenseRatio;
                }, edge);
            ctx.scale(1 / condenseRatio, 1);
        }
        ctx.fillStyle = defaultTextStyle.fillStyle;
        ctx.shadowColor = defaultTextStyle.shadowColor;
        ctx.shadowOffsetY = defaultTextStyle.shadowOffsetY;
        ctx.shadowOffsetX = defaultTextStyle.shadowOffsetX;
        ctx.shadowBlur = defaultTextStyle.shadowBlur;
    }
};