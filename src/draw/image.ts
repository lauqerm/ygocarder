const imageCacheMap: Record<string, {
    image: HTMLImageElement,
    ready: boolean,
}> = {};

export const drawFromSource = async (
    ctx: CanvasRenderingContext2D | null | undefined,
    source: string,
    sx: number | ((image: HTMLImageElement) => number),
    sy: number | ((image: HTMLImageElement) => number),
) => {
    if (!ctx) return new Promise<boolean>(resolve => resolve(false));
    return new Promise<boolean>(resolve => {
        if (imageCacheMap[source]?.ready === true) {
            const img = imageCacheMap[source].image;
            let normalizedX = typeof sx === 'number' ? sx : sx(img);
            let normalizedY = typeof sy === 'number' ? sy : sy(img);
            ctx.drawImage(img, normalizedX, normalizedY);
            resolve(true);
        } else {
            const img = new Image();
            img.src = process.env.PUBLIC_URL + source;
            img.onload = () => {
                let normalizedX = typeof sx === 'number' ? sx : sx(img);
                let normalizedY = typeof sy === 'number' ? sy : sy(img);
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

export const drawFromSourceWithSize = async (
    ctx: CanvasRenderingContext2D | null | undefined,
    source: string,
    sx: number | ((image: HTMLImageElement) => number),
    sy: number | ((image: HTMLImageElement) => number),
    dw: number, dh: number,
) => {
    if (!ctx) return new Promise<boolean>(resolve => resolve(false));
    return new Promise<boolean>(resolve => {
        if (imageCacheMap[source]?.ready === true) {
            const img = imageCacheMap[source].image;
            let normalizedX = typeof sx === 'number' ? sx : sx(img);
            let normalizedY = typeof sy === 'number' ? sy : sy(img);
            ctx.drawImage(img, normalizedX, normalizedY, dw, dh);
            resolve(true);
        } else {
            const img = new Image();
            img.src = process.env.PUBLIC_URL + source;
            img.onload = () => {
                let normalizedX = typeof sx === 'number' ? sx : sx(img);
                let normalizedY = typeof sy === 'number' ? sy : sy(img);
                ctx.drawImage(img, normalizedX, normalizedY, dw, dh);
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