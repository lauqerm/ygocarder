import { createCanvas } from 'src/util';
import { CanvasConst } from 'src/model';

const {
    width: cardWidth,
    height: cardHeight,
} = CanvasConst;
export const applyCustomFoil = async (
    canvas: HTMLCanvasElement | undefined,
    customFoilCanvas: HTMLCanvasElement | null | undefined,
    x = 0,
    y = 0,
    w = cardWidth,
    h = cardHeight,
) => {
    const operateCanvas = canvas ?? createCanvas().canvas;
    if (!customFoilCanvas) return operateCanvas;
    try {
        const ctx = operateCanvas.getContext('2d');
        if (ctx) {
            ctx.globalCompositeOperation = 'source-in';
            ctx.drawImage(
                customFoilCanvas,
                x, y,
                w, h,
            );
        }
    } catch (e) {
        return operateCanvas;
    }

    return operateCanvas;
};