const imageCacheMap: Record<string, {
    image: HTMLImageElement,
    ready: boolean,
}> = {};

export const drawFrom = async (
    ctx: CanvasRenderingContext2D | null | undefined,
    source: string,
    sx: number | ((image: HTMLImageElement) => number),
    sy: number | ((image: HTMLImageElement) => number),
) => {
    if (!ctx || source === '') return new Promise<boolean>(resolve => resolve(false));
    return new Promise<boolean>(resolve => {
        if (imageCacheMap[source]?.ready === true) {
            const img = imageCacheMap[source].image;
            const normalizedX = typeof sx === 'number' ? sx : sx(img);
            const normalizedY = typeof sy === 'number' ? sy : sy(img);

            ctx.drawImage(img, normalizedX, normalizedY);
            resolve(true);
        } else {
            const img = new Image();
            img.src = process.env.PUBLIC_URL + source;
            img.onload = () => {
                const normalizedX = typeof sx === 'number' ? sx : sx(img);
                const normalizedY = typeof sy === 'number' ? sy : sy(img);

                ctx.drawImage(img, normalizedX, normalizedY);
                imageCacheMap[source].ready = true;
                resolve(true);
            };
            img.onerror = () => {
                resolve(false);
            };
            imageCacheMap[source] = {
                image: img,
                ready: false,
            };
        }
    });
};

export const drawWithSizeFrom = async (
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
            const img = imageCacheMap[source].image;
            const normalizedX = typeof sx === 'number' ? sx : sx(img);
            const normalizedY = typeof sy === 'number' ? sy : sy(img);
            const normalizedW = typeof dw === 'number' ? dw : dw(img);
            const normalizedH = typeof dh === 'number' ? dh : dh(img);

            ctx.drawImage(img, normalizedX, normalizedY, normalizedW, normalizedH);
            resolve(true);
        } else {
            const img = new Image();
            img.src = process.env.PUBLIC_URL + source;
            img.onload = () => {
                const normalizedX = typeof sx === 'number' ? sx : sx(img);
                const normalizedY = typeof sy === 'number' ? sy : sy(img);
                const normalizedW = typeof dw === 'number' ? dw : dw(img);
                const normalizedH = typeof dh === 'number' ? dh : dh(img);
    
                ctx.drawImage(img, normalizedX, normalizedY, normalizedW, normalizedH);
                imageCacheMap[source].ready = true;
                resolve(true);
            };
            img.onerror = () => {
                resolve(false);
            };
            imageCacheMap[source] = {
                image: img,
                ready: false,
            };
        }
    });
};