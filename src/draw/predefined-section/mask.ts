import { CanvasConst } from 'src/model';
import { drawAsset } from '../image';
import { createCanvas } from 'src/util';

const {
    width,
    height,
    topToPendulumStructure,
} = CanvasConst;
export const getMaskPromise = () => {
    const topRightMask = (async () => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            await drawAsset(ctx, 'mask/mask-top-right.png');
            return ctx.getImageData(0, 0, width, height).data;
        }
        return null;
    })();
    const bottomRightMask = (async () => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            await drawAsset(ctx, 'mask/mask-bottom-right.png');
            return ctx.getImageData(0, 0, width, height).data;
        }
        return null;
    })();
    const nameMask = (async () => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = topToPendulumStructure;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            await drawAsset(ctx, 'mask/mask-name.png');
            return ctx.getImageData(0, 0, width, topToPendulumStructure).data;
        }
        return null;
    })();

    return {
        topRight: topRightMask,
        bottomRight: bottomRightMask,
        name: nameMask,
    };
};
export const MaskPromise = getMaskPromise();

/**
 * Draw the image onto an empty canvas, then apply an alpha mask over it.
 * 
 * Each pixel in the image will be drawn with the alpha data from the corresponding pixel of the mask.
 * */
export const applyAlphaMask = async (
    urlOrCanvas: string | CanvasImageSource,
    maskData: Uint8ClampedArray<ArrayBufferLike>,
    width: number,
    height: number,
) => {
    const { context, canvas } = createCanvas(width, height);
    if (typeof urlOrCanvas === 'string') await drawAsset(context, urlOrCanvas, 0, 0);
    else context.drawImage(urlOrCanvas, 0, 0, width, height);
    const layerData = context.getImageData(0, 0, width, height).data;
    for (let cnt = 0; cnt < layerData.length; cnt += 4) {
        layerData[cnt + 3] = maskData[cnt + 3];
    }

    context.putImageData(new ImageData(layerData, width, height), 0, 0);

    return canvas;
};