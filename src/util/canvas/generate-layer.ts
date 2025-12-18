/** Delay queue and relevant checker is used for potential performance improvement, but currently performance is not making a hard impact to the app. */
export const generateLayer = (
    canvasLayer: React.RefObject<HTMLCanvasElement>,
    exportCtx: CanvasRenderingContext2D | null | undefined,
    delayQueue: number = 0,
) => {
    return new Promise<{ status: 'success' } | { status: 'error', data: any }>(resolve => {
        setTimeout(() => {
            if (!canvasLayer.current || !exportCtx) resolve({ status: 'error', data: new Error('No export canvas') });
            else {
                try {
                    canvasLayer.current.toBlob(blob => {
                        if (!blob) resolve({ status: 'error', data: new Error('No layer blob') });
                        else {
                            const url = URL.createObjectURL(blob);
                            if (!url) resolve({ status: 'error', data: new Error('Empty layer') });
                            else {
                                const layer = new Image();
                                layer.src = url;
                                layer.onload = () => {
                                    exportCtx.drawImage(layer, 0, 0);
                                    URL.revokeObjectURL(url);
                                    resolve({ status: 'success' });
                                };
                                layer.onerror = e => {
                                    URL.revokeObjectURL(url);
                                    resolve({ status: 'error', data: e });
                                };
                            }
                        }
                    });
                } catch (e) {
                    /** Draw directly into export canvas, which will tainted the export canvas afterward. */
                    exportCtx.drawImage(canvasLayer.current, 0, 0);
                    console.error('generateLayer', canvasLayer.current.id, e);
                    resolve({ status: 'error', data: e });
                }
            }
        }, delayQueue * 25);
    });
};