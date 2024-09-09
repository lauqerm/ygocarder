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
    return new Promise<boolean>(resolve => {
        /** @todo Do manual caching really needed? Need proper benchmark for this. */
        if (imageCacheMap[source]?.ready === true) {
            const image = imageCacheMap[source].image;
            const normalizedX = typeof sx === 'number' ? sx : sx(image);
            const normalizedY = typeof sy === 'number' ? sy : sy(image);

            ctx.drawImage(image, normalizedX, normalizedY);
            resolve(true);
        } else {
            if (imageCacheMap[source]?.error) {
                resolve(true);
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
                    imageCacheMap[source].ready = true;
                    imageCacheMap[source].error = false;
                    resolve(true);
                },
                { once: true },
            );
            image.addEventListener(
                'error',
                () => {
                    imageCacheMap[source].error = true;
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
        if (imageCacheMap[source]?.ready === true) {
            const image = imageCacheMap[source].image;
            const normalizedX = typeof sx === 'number' ? sx : sx(image);
            const normalizedY = typeof sy === 'number' ? sy : sy(image);
            const normalizedW = typeof dw === 'number' ? dw : dw(image);
            const normalizedH = typeof dh === 'number' ? dh : dh(image);

            ctx.drawImage(image, normalizedX, normalizedY, normalizedW, normalizedH);
            resolve(true);
        } else {
            if (imageCacheMap[source]?.error) {
                resolve(true);
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
                    imageCacheMap[source].ready = true;
                    imageCacheMap[source].error = false;
                    resolve(true);
                },
                { once: true },
            );
            image.addEventListener(
                'error',
                () => {
                    imageCacheMap[source].error = true;
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