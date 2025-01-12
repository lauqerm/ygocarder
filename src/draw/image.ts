import { CanvasTextStyle } from 'src/service';
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

export const drawWithStyle = async (
    canvas: HTMLCanvasElement,
    source: string,
    dx: number, dy: number,
    sw: number, sh: number,
    style?: CanvasTextStyle,
) => {
    const ctx = canvas.getContext('2d');
    const clonedCanvas = document.createElement('canvas');
    clonedCanvas.width = sw;
    clonedCanvas.height = sh;
    const clonedCtx = clonedCanvas.getContext('2d', { willReadFrequently: true });

    if (!clonedCtx || !ctx) return;

    /**
     * * First, we clone a canvas with the same size of the destination one.
     * * Then, we fill the solid color from custom style into it, now the canvas is colored.
     * * After that, we draw the asset into the colored canvas, with destination-in mode, this means the asset will only draw on the colored area (opacity factored). This way, we effectively ignore the original color from the asset, and only use the alpha channel.
     * 
     * Needless to say this will not work very well with multi-colored asset.
     * */
    await drawAssetWithSize(clonedCtx, source, 0, 0, sw, sh);
    if (style?.color) {
        clonedCtx.fillStyle = style.color;
        clonedCtx.fillRect(0, 0, sw, sh);
        clonedCtx.globalCompositeOperation = 'destination-in';
    }
    await drawAssetWithSize(clonedCtx, source, 0, 0, sw, sh);
    clonedCtx.globalCompositeOperation = 'source-over';

    /** After that, we draw the cloned canvas back into the main one, and apply corresponding shadow if needed. */
    const resetMainCanvasStyle = setTextStyle({ ctx, ...style });
    ctx.drawImage(clonedCanvas, dx, dy);
    resetMainCanvasStyle();
};