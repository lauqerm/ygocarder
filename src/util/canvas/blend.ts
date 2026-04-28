import { CanvasConst, OverlayComposite } from 'src/model';
import { createCanvas } from './create';
import { HexColorRegex } from '..';

const {
    width: cardWidth,
    height: cardHeight,
} = CanvasConst;
export const dyeCanvas = (
    baseCanvas: HTMLCanvasElement,
    color: string,
    width = cardWidth,
    height = cardHeight,
    additionalFilter = '',
) => {
    if (!HexColorRegex.test(color)) return {
        canvas: baseCanvas,
        ctx: baseCanvas.getContext('2d'),
    };

    const { ctx: overlayContext, canvas: overlayCanvas } = createCanvas(width, height);

    if (!overlayContext) return {
        canvas: baseCanvas,
        ctx: baseCanvas.getContext('2d'),
    };
    /** Draw the target image with grayscale */
    overlayContext.filter = ['grayscale(1)', additionalFilter].join(' ');
    overlayContext.drawImage(baseCanvas, 0, 0);
    overlayContext.filter = 'none';

    /** Overlay the color lens on top the grayscale layer to dye it */
    overlayContext.fillStyle = color;
    overlayContext.globalCompositeOperation = 'overlay';
    overlayContext.fillRect(0, 0, cardWidth, cardHeight);

    /** Draw the target image again but with destination-in mode to remove excess area */
    overlayContext.globalCompositeOperation = 'destination-in';
    overlayContext.drawImage(baseCanvas, 0, 0);
    overlayContext.globalCompositeOperation = 'source-over';

    return {
        canvas: overlayCanvas,
        ctx: overlayCanvas.getContext('2d'),
    };
};

export const blendCanvas = async ({
    canvas,
    customFoilCanvas,
    x = 0,
    y = 0,
    w = cardWidth,
    h = cardHeight,
    method = 'source-in',
}: {
    canvas: HTMLCanvasElement | undefined,
    customFoilCanvas: HTMLCanvasElement | null | undefined,
    x?: number,
    y?: number,
    w?: number,
    h?: number,
    method?: OverlayComposite,
}) => {
    const operateCanvas = canvas ?? createCanvas().canvas;
    const ctx = operateCanvas.getContext('2d');
    if (!customFoilCanvas || method === 'none' || !ctx) return operateCanvas;
    try {
        if (method === 'source-in') {
            ctx.globalCompositeOperation = 'source-in';
            ctx.drawImage(customFoilCanvas, x, y, w, h);
            ctx.globalCompositeOperation = 'source-over';
        } else if (method === 'color' || method === 'multiply' || method === 'overlay') {
            const { canvas: processCanvas, ctx: processCtx } = createCanvas();

            if (processCtx) {
                processCtx.globalAlpha = 0.65;
                processCtx.drawImage(customFoilCanvas, x, y, w, h);

                processCtx.globalCompositeOperation = 'destination-in';
                processCtx.drawImage(operateCanvas, 0, 0);

                ctx.globalCompositeOperation = method;
                ctx.drawImage(processCanvas, 0, 0);
                ctx.globalCompositeOperation = 'source-over';
            }
        }
    } catch (e) {
        return operateCanvas;
    }

    return operateCanvas;
};