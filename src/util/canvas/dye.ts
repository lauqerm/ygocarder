import { CanvasConst } from 'src/model';
import { createCanvas } from './create';

const {
    width: cardWidth,
    height: cardHeight,
} = CanvasConst;
export const dyeCanvas = (baseCanvas: HTMLCanvasElement, color: string, width = cardWidth, height = cardHeight) => {
    const { context: overlayContext, canvas: overlayCanvas } = createCanvas(width, height);

    /** Draw the target image with grayscale */
    overlayContext.filter = 'grayscale(1)';
    overlayContext.drawImage(baseCanvas, 0, 0);
    overlayContext.filter = 'none';

    /** Overlay the color lens on top with the grayscale to dye it */
    overlayContext.fillStyle = color;
    overlayContext.globalCompositeOperation = 'overlay';
    overlayContext.fillRect(0, 0, cardWidth, cardHeight);

    /** Draw the target image again but with destination-in mode to remove excess area */
    overlayContext.globalCompositeOperation = 'destination-in';
    overlayContext.drawImage(baseCanvas, 0, 0);
    overlayContext.globalCompositeOperation = 'source-over';

    return {
        canvas: overlayCanvas,
        context: overlayCanvas.getContext('2d'),
    };
};