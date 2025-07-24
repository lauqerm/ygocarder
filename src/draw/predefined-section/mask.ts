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
    /**
     * Be careful: Bottom right + Top right mask does NOT cover the entire right area when bottom left frame is also presented, so if both of them are the same frame, we might need to use right mask.
     * 
     * Reason: Because bottom left frame also contains bottom right frame with transparency, if we draw another bottom right frame (that also has transparency) on top of it, it will not overlap the bottom frame, but merged with it, create a mix of both instead of total replacement, which is our desired effect. */
    const rightMask = (async () => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            await drawAsset(ctx, 'mask/mask-right.png');
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
        right: rightMask,
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
    maskData: Uint8ClampedArray<ArrayBufferLike> | null,
    width: number,
    height: number,
) => {
    const { ctx, canvas } = createCanvas(width, height);
    if (!ctx) return canvas;
    if (typeof urlOrCanvas === 'string') await drawAsset(ctx, urlOrCanvas, 0, 0);
    else ctx.drawImage(urlOrCanvas, 0, 0, width, height);
    if (!maskData) return canvas;
    const layerData = ctx.getImageData(0, 0, width, height).data;
    for (let cnt = 0; cnt < layerData.length; cnt += 4) {
        layerData[cnt + 3] = maskData[cnt + 3];
    }

    ctx.putImageData(new ImageData(layerData, width, height), 0, 0);

    return canvas;
};