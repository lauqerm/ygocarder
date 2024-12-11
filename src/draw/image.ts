import { CanvasTextStyle } from 'src/service';
import { hexToRGBA } from 'src/util';
import { setTextStyle } from './canvas-util';
import { notification } from 'antd';

const imageCacheMap: Record<string, {
    image: HTMLImageElement,
    ready: boolean,
    error: boolean,
    cache: boolean,
}> = {};

export const drawFrom = async (
    ctx: CanvasRenderingContext2D | null | undefined,
    source: string,
    sx: number | ((image: HTMLImageElement) => number) = 0,
    sy: number | ((image: HTMLImageElement) => number) = 0,
) => {
    if (!ctx || source === '') return new Promise<boolean>(resolve => resolve(false));
    if (source.includes('/frame-token')) notification.info({ message: 'draw' });
    return new Promise<boolean>(resolve => {
        /**
         * Manually caching this image is not a good idea? Should have just let the browser do all the work. We are trying to reinvent the wheel here.
         * 
         * Still, caching image prevent constant flashing when draw, so we will keep it as long as we can until we figure a better UX.
        */
        if (imageCacheMap[source]?.ready === true) {
            const image = imageCacheMap[source].image;
            const normalizedX = typeof sx === 'number' ? sx : sx(image);
            const normalizedY = typeof sy === 'number' ? sy : sy(image);

            ctx.drawImage(image, normalizedX, normalizedY);
            /** Same treatment for chrome mobile bug */
            setTimeout(() => resolve(true), 0);
            return;
        }
        if (imageCacheMap[source]?.error) {
            setTimeout(() => resolve(true), 0);
            return;
        }

        const imageCached = imageCacheMap[source] && (imageCacheMap[source].cache || imageCacheMap[source].ready);
        const image = imageCached
            ? imageCacheMap[source].image
            : new Image();

        if (!imageCached) image.src = process.env.PUBLIC_URL + source;
        image.addEventListener(
            'load',
            () => {
                const normalizedX = typeof sx === 'number' ? sx : sx(image);
                const normalizedY = typeof sy === 'number' ? sy : sy(image);

                ctx.drawImage(image, normalizedX, normalizedY);
                if (imageCacheMap[source]) {
                    imageCacheMap[source].ready = true;
                    imageCacheMap[source].error = false;
                }
                resolve(true);
            },
            { once: true },
        );
        image.addEventListener(
            'error',
            () => {
                if (imageCacheMap[source]) {
                    imageCacheMap[source].error = true;
                }
                resolve(false);
            },
            { once: true },
        );

        if (!imageCached) imageCacheMap[source] = {
            image: image,
            ready: false,
            error: false,
            cache: true,
        };
    });
};
export const drawAsset = async (
    ctx: CanvasRenderingContext2D | null | undefined,
    source: string,
    sx: number | ((image: HTMLImageElement) => number) = 0,
    sy: number | ((image: HTMLImageElement) => number) = 0,
) => {
    return await drawFrom(
        ctx,
        '/asset/image/' + source,
        sx, sy,
    );
};

export const drawFromWithSize = async (
    ctx: CanvasRenderingContext2D | null | undefined,
    source: string,
    sx: number | ((image: HTMLImageElement) => number),
    sy: number | ((image: HTMLImageElement) => number),
    dw: number | ((image: HTMLImageElement) => number),
    dh: number | ((image: HTMLImageElement) => number),
) => {
    if (!ctx || source === '') return new Promise<boolean>(resolve => resolve(false));
    return new Promise<boolean>(resolve => {
        /** Check `drawFrom` comment for disable reasons */
        if (imageCacheMap[source]?.ready === true) {
            const image = imageCacheMap[source].image;
            const normalizedX = typeof sx === 'number' ? sx : sx(image);
            const normalizedY = typeof sy === 'number' ? sy : sy(image);
            const normalizedW = typeof dw === 'number' ? dw : dw(image);
            const normalizedH = typeof dh === 'number' ? dh : dh(image);

            ctx.drawImage(image, normalizedX, normalizedY, normalizedW, normalizedH);
            setTimeout(() => resolve(true), 0);
            return;
        }
        if (imageCacheMap[source]?.error) {
            setTimeout(() => resolve(true), 0);
            return;
        }

        const imageCached = imageCacheMap[source] && (imageCacheMap[source].cache || imageCacheMap[source].ready);
        const image = imageCached
            ? imageCacheMap[source].image
            : new Image();

        if (!imageCached) image.src = process.env.PUBLIC_URL + source;
        image.addEventListener(
            'load',
            () => {
                const normalizedX = typeof sx === 'number' ? sx : sx(image);
                const normalizedY = typeof sy === 'number' ? sy : sy(image);
                const normalizedW = typeof dw === 'number' ? dw : dw(image);
                const normalizedH = typeof dh === 'number' ? dh : dh(image);
    
                ctx.drawImage(image, normalizedX, normalizedY, normalizedW, normalizedH);
                if (imageCacheMap[source]) {
                    imageCacheMap[source].ready = true;
                    imageCacheMap[source].error = false;
                }
                resolve(true);
            },
            { once: true },
        );
        image.addEventListener(
            'error',
            () => {
                if (imageCacheMap[source]) {
                    imageCacheMap[source].error = true;
                }
                resolve(false);
            },
            { once: true },
        );

        if (!imageCached) imageCacheMap[source] = {
            image: image,
            ready: false,
            error: false,
            cache: true,
        };
    });
};
export const drawAssetWithSize: typeof drawFromWithSize = async (
    ctx,
    source,
    sx, sy,
    dw, dh,
) => {
    return await drawFromWithSize(
        ctx,
        '/asset/image/' + source,
        sx, sy,
        dw, dh,
    );
};

export const drawWithColor = async (
    canvas: HTMLCanvasElement,
    source: string,
    color: string,
    sw: number, sh: number,
    dx: number, dy: number,
    cloneCanvasStyle?: CanvasTextStyle,
) => {
    const ctx = canvas.getContext('2d');
    const clonedCanvas = document.createElement('canvas');
    clonedCanvas.width = sw;
    clonedCanvas.height = sh;
    const clonedCtx = clonedCanvas.getContext('2d', { willReadFrequently: true });

    if (!clonedCtx || !ctx) return;
    await drawAsset(clonedCtx, source, 0, 0);

    const rgbaColor = hexToRGBA(color);
    const imageRasterData = clonedCtx.getImageData(0, 0, sw, sh).data;

    /** In some rare case, this image need shadow (for example "LINK" text).
     * So we apply shadow into the clone node, then DRAW THE IMAGE AGAIN. This time image data will be a combined data from both the original image and the newly applied shadow.
     */
    const resetStyle = setTextStyle({ ctx: clonedCtx, ...cloneCanvasStyle });
    await drawAsset(clonedCtx, source, 0, 0);
    const imageDataWithShadow = clonedCtx.getImageData(0, 0, sw, sh);
    const imageRasterDataWithShadow = imageDataWithShadow.data;
    resetStyle();

    /** Because the new image data will replace the old one (no blending mode), it will erase the pixel of the current canvas underneath. To solve this we will draw the current canvas into the clone canvas first, before putting new image into it. */
    clonedCtx.clearRect(0, 0, sw, sh);
    clonedCtx.drawImage(canvas, dx, dy, sw, sh, 0, 0, sw, sh);

    const combinedLayerData = clonedCtx.getImageData(0, 0, sw, sh);
    const combinedLayerRasterData = combinedLayerData.data;

    for (let pixelCnt = 0; pixelCnt < combinedLayerRasterData.length; pixelCnt += 4) {
        /** If raster data at this pixel have the same coordinate with raster data from the original image, draw it with manipulated color. */
        if (imageRasterData[pixelCnt + 3] > 0) {
            /** Change ratio based on the original color value, compare to pitch black #000000 */
            combinedLayerRasterData[pixelCnt + 0] = rgbaColor[0] * (1 - imageRasterData[pixelCnt + 0] / 255);
            combinedLayerRasterData[pixelCnt + 1] = rgbaColor[1] * (1 - imageRasterData[pixelCnt + 1] / 255);
            combinedLayerRasterData[pixelCnt + 2] = rgbaColor[2] * (1 - imageRasterData[pixelCnt + 2] / 255);
            combinedLayerRasterData[pixelCnt + 3] = 255;
        }
        /** If raster data at this pixel have the same coordinate with raster data from the image with shadow, draw the shadow. */
        else if (imageRasterDataWithShadow[pixelCnt + 3] > 0) {
            const destinationAlpha = imageRasterDataWithShadow[pixelCnt + 3] / 255;

            combinedLayerRasterData[pixelCnt + 0] = (1 - destinationAlpha) * combinedLayerRasterData[pixelCnt + 0]
                + destinationAlpha * imageRasterDataWithShadow[pixelCnt + 0];
            combinedLayerRasterData[pixelCnt + 1] = (1 - destinationAlpha) * combinedLayerRasterData[pixelCnt + 1]
                + destinationAlpha * imageRasterDataWithShadow[pixelCnt + 1];
            combinedLayerRasterData[pixelCnt + 2] = (1 - destinationAlpha) * combinedLayerRasterData[pixelCnt + 2]
                + destinationAlpha * imageRasterDataWithShadow[pixelCnt + 2];
            combinedLayerRasterData[pixelCnt + 3] = 255;
        }
        /** Otherwise all other pixel belong to the background canvas, and is untouched. */
    }

    ctx.putImageData(combinedLayerData, dx, dy);
};