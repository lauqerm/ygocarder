import { CanvasConst } from 'src/model';
import { createCanvas } from './create';
import { HexColorRegex } from '..';

const {
    width: cardWidth,
    height: cardHeight,
} = CanvasConst;
export const dyeCanvas = (baseCanvas: HTMLCanvasElement, color: string, width = cardWidth, height = cardHeight) => {
    if (!HexColorRegex.test(color)) return {
        canvas: baseCanvas,
        ctx: baseCanvas.getContext('2d'),
    };

    const { ctx: overlayContext, canvas: overlayCanvas } = createCanvas(width, height);

    /** Draw the target image with grayscale */
    overlayContext.filter = 'grayscale(1)';
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