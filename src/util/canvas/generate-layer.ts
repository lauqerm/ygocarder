/** Delay queue and relevant checker is used for potential performance improvement, but currently performance is not making a hard impact to the app. */
export const generateLayer = (
    canvasLayer: React.RefObject<HTMLCanvasElement>,
    exportCtx: CanvasRenderingContext2D | null | undefined,
    delayQueue: number = 0,
) => {
    return new Promise<boolean>(resolve => {
        setTimeout(() => {
            if (!canvasLayer.current || !exportCtx) resolve(false);
            else {
                try {
                    canvasLayer.current.toBlob(blob => {
                        if (!blob) resolve(false);
                        else {
                            const url = URL.createObjectURL(blob);
                            if (!url) resolve(false);
                            else {
                                const layer = new Image();
                                layer.src = url;
                                layer.onload = () => {
                                    exportCtx.drawImage(layer, 0, 0);
                                    URL.revokeObjectURL(url);
                                    resolve(true);
                                };
                                layer.onerror = () => {
                                    URL.revokeObjectURL(url);
                                    resolve(false);
                                };
                            }
                        }
                    });
                } catch (e) {
                    /** Draw directly into export canvas, which will tainted the export canvas afterward. */
                    exportCtx.drawImage(canvasLayer.current, 0, 0);
                    console.error(e);
                    resolve(false);
                }
            }
        }, delayQueue * 25);
    });
};