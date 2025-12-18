import { CanvasTextStyle } from 'src/service';
import { setTextStyle } from './canvas-util';

const imageCacheMap: Record<string, {
    image: HTMLImageElement,
    ready: boolean,
    error: boolean,
    cache: boolean,
}> = {};

export const drawFrom = async (
    ctx: CanvasRenderingContext2D | null | undefined,
    source: string,
    dx: number | ((image: HTMLImageElement) => number) = 0,
    dy: number | ((image: HTMLImageElement) => number) = 0,
) => {
    if (!ctx || source === '') return new Promise<boolean>(resolve => resolve(false));
    return new Promise<boolean>(resolve => {
        /**
         * Manually caching this image is not a good idea? Should have just let the browser do all the work. We are trying to reinvent the wheel here.
         * 
         * Still, caching image prevent constant flashing when draw, so we will keep it as long as we can until we figure a better UX.
        */
        if (imageCacheMap[source]?.ready === true) {
            const image = imageCacheMap[source].image;
            const actualDX = typeof dx === 'number' ? dx : dx(image);
            const actualDY = typeof dy === 'number' ? dy : dy(image);

            ctx.drawImage(image, actualDX, actualDY);
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
                const actualDX = typeof dx === 'number' ? dx : dx(image);
                const actualDY = typeof dy === 'number' ? dy : dy(image);

                ctx.drawImage(image, actualDX, actualDY);
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
    dx: number | ((image: HTMLImageElement) => number) = 0,
    dy: number | ((image: HTMLImageElement) => number) = 0,
) => {
    return await drawFrom(
        ctx,
        '/asset/image/' + source,
        dx, dy,
    );
};

const normalizeDxy = (
    image: HTMLImageElement,
    dw?: number | ((image: HTMLImageElement) => number),
    dh?: number | ((image: HTMLImageElement) => number),
) => {
    const { naturalWidth, naturalHeight } = image;
    const baseDW = typeof dw === 'number' ? dw : dw?.(image);
    const baseDH = typeof dh === 'number' ? dh : dh?.(image);
    let actualDW = naturalWidth;
    let actualDH = naturalHeight;

    if (typeof baseDH !== 'number' && typeof baseDW === 'number') {
        actualDW = baseDW;
        actualDH = actualDW * naturalHeight / naturalWidth;
    } else if (typeof baseDH === 'number' && typeof baseDW !== 'number') {
        actualDH = baseDH;
        actualDW = actualDH * naturalWidth / naturalHeight;
    } else if (typeof baseDH === 'number' && typeof baseDW === 'number') {
        actualDW = baseDW;
        actualDH = baseDH;
    }

    return { actualDH, actualDW };
};
export const drawFromWithSize = async (
    ctx: CanvasRenderingContext2D | null | undefined,
    source: string,
    dx: number | ((image: HTMLImageElement) => number),
    dy: number | ((image: HTMLImageElement) => number),
    dw?: number | ((image: HTMLImageElement) => number),
    dh?: number | ((image: HTMLImageElement) => number),
    sx?: undefined | number | ((image: HTMLImageElement) => number),
    sy?: undefined | number | ((image: HTMLImageElement) => number),
    sw?: undefined | number | ((image: HTMLImageElement) => number),
    sh?: undefined | number | ((image: HTMLImageElement) => number),
    option?: {
        cache?: boolean,
        overwrite?: boolean,
        internalImage?: boolean,
        crossorigin?: 'anonymous' | 'with-credential',
    },
) => {
    const {
        cache = true,
        internalImage = true,
        overwrite = false,
        crossorigin,
    } = option ?? {};
    if (!ctx || source === '') return new Promise<boolean>(resolve => resolve(false));
    return new Promise<boolean>(resolve => {
        /** Check `drawFrom` comment for disable reasons */
        if (imageCacheMap[source]?.ready === true) {
            const image = imageCacheMap[source].image;
            const actualDX = typeof dx === 'number' ? dx : dx(image);
            const actualDY = typeof dy === 'number' ? dy : dy(image);
            const actualSX = typeof sx === 'number' ? sx : sx?.(image);
            const actualSY = typeof sy === 'number' ? sy : sy?.(image);
            const actualSW = typeof sw === 'number' ? sw : sw?.(image);
            const actualSH = typeof sh === 'number' ? sh : sh?.(image);
            const { actualDH, actualDW } = normalizeDxy(image, dw, dh);

            if (
                typeof actualSX === 'number'
                && typeof actualSY === 'number'
                && typeof actualSW === 'number'
                && typeof actualSH === 'number'
            ) {
                ctx.drawImage(image, actualSX, actualSY, actualSW, actualSH, actualDX, actualDY, actualDW, actualDH);
            } else {
                ctx.drawImage(image, actualDX, actualDY, actualDW, actualDH);
            }
            setTimeout(() => resolve(true), 0);
            return;
        }
        if (imageCacheMap[source]?.error && overwrite === false) {
            setTimeout(() => resolve(true), 0);
            return;
        }

        const imageCached = overwrite
            ? false
            : imageCacheMap[source] && (imageCacheMap[source].cache || imageCacheMap[source].ready);
        const image = imageCached
            ? imageCacheMap[source].image
            : new Image();

        if (crossorigin) {
            image.crossOrigin = crossorigin;
        }
        if (!imageCached) image.src = internalImage
            ? process.env.PUBLIC_URL + source
            : source;
        image.addEventListener(
            'load',
            () => {
                const actualDX = typeof dx === 'number' ? dx : dx(image);
                const actualDY = typeof dy === 'number' ? dy : dy(image);
                const actualSX = typeof sx === 'number' ? sx : sx?.(image);
                const actualSY = typeof sy === 'number' ? sy : sy?.(image);
                const actualSW = typeof sw === 'number' ? sw : sw?.(image);
                const actualSH = typeof sh === 'number' ? sh : sh?.(image);
                const { actualDH, actualDW } = normalizeDxy(image, dw, dh);
    
                if (
                    typeof actualSX === 'number'
                    && typeof actualSY === 'number'
                    && typeof actualSW === 'number'
                    && typeof actualSH === 'number'
                ) {
                    ctx.drawImage(image, actualSX, actualSY, actualSW, actualSH, actualDX, actualDY, actualDW, actualDH);
                } else {
                    ctx.drawImage(image, actualDX, actualDY, actualDW, actualDH);
                }
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

        if (cache && !imageCached) imageCacheMap[source] = {
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
    dx, dy,
    dw, dh,
    sx, sy,
    sw, sh,
) => {
    return await drawFromWithSize(
        ctx,
        '/asset/image/' + source,
        dx, dy,
        dw, dh,
        sx, sy,
        sw, sh,
    );
};
export const drawFromWithSizeAndFallback: typeof drawFromWithSize = async (...param) => {
    const [
        ctx,
        source,
        dx,
        dy,
        dw, dh,
        sx, sy,
        sw, sh,
        option,
    ] = [...param];
    const result = await drawFromWithSize(
        ctx,
        source,
        dx,
        dy,
        dw, dh,
        sx, sy,
        sw, sh,
        option,
    );

    /**
     * If we fail to get the image with `anonymous` crossorigin, try again with unknown crossorigin, a.k.a remove the attribute entirely.
     * 
     * Give up otherwise, remember images marked with `error` will never be queried again by this method. 
     * */
    if (result === false && option?.crossorigin === 'anonymous') {
        const newOption = { ...option, overwrite: true };
        delete newOption.crossorigin;

        return await drawFromWithSize(
            ctx,
            source,
            dx,
            dy,
            dw, dh,
            sx, sy,
            sw, sh,
            newOption,
        );
    }
    return result;
};

export const drawWithStyle = async (
    canvas: HTMLCanvasElement,
    source: string,
    dx: number, dy: number,
    sw: number, sh: number,
    globalScale: number,
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
    const resetMainCanvasStyle = setTextStyle({ ctx, ...style, globalScale });
    ctx.drawImage(clonedCanvas, dx, dy);
    resetMainCanvasStyle();
};