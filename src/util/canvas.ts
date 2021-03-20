export const drawFromSource = async (
    ctx: CanvasRenderingContext2D | null | undefined,
    source: string,
    sx: number | ((image: HTMLImageElement) => number),
    sy: number | ((image: HTMLImageElement) => number),
) => {
    if (!ctx) return new Promise<boolean>(resolve => resolve(false));
    return new Promise<boolean>(resolve => {
        const img = new Image();
        img.src = source;
        img.onload = () => {
            let normalizedX = typeof sx === 'number' ? sx : sx(img);
            let normalizedY = typeof sy === 'number' ? sy : sy(img);
            ctx.drawImage(img, normalizedX, normalizedY);
            resolve(true);
        };
        img.onerror = () => {
            resolve(false);
        };
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
        const img = new Image();
        img.src = source;
        img.onload = () => {
            let normalizedX = typeof sx === 'number' ? sx : sx(img);
            let normalizedY = typeof sy === 'number' ? sy : sy(img);
            ctx.drawImage(img, normalizedX, normalizedY, dw, dh);
            resolve(true);
        };
        img.onerror = () => {
            resolve(false);
        };
    });
};