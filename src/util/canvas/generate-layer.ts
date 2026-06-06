/** Delay queue and relevant checker is used for potential performance improvement, but currently performance is not making a hard impact to the app. */
export const generateLayer = (
    canvasLayer: React.RefObject<HTMLCanvasElement>,
    delayQueue: number = 0,
    name?: string,
) => {
    return new Promise<{ status: 'success' | 'error', draw?: (exportCtx: CanvasRenderingContext2D) => void, error: unknown }>(resolve => {
        const returnPromise = () => {
            if (!canvasLayer.current) resolve({ status: 'error', error: new Error('No export canvas') });
            else {
                try {
                    canvasLayer.current.toBlob(blob => {
                        if (!blob) resolve({ status: 'error', error: new Error('No layer blob') });
                        else {
                            const url = URL.createObjectURL(blob);
                            if (!url) resolve({ status: 'error', error: new Error('Empty layer') });
                            else {
                                const layer = new Image();
                                layer.src = url;
                                layer.onload = () => {
                                    resolve({
                                        status: 'success',
                                        draw: exportCtx => {
                                            exportCtx.drawImage(layer, 0, 0);
                                            URL.revokeObjectURL(url);
                                        },
                                        error: null,
                                    });
                                };
                                layer.onerror = e => {
                                    URL.revokeObjectURL(url);
                                    resolve({ status: 'error', error: e });
                                };
                            }
                        }
                    });
                } catch (e) {
                    /** Draw directly into export canvas, which will tainted the export canvas afterward. */
                    console.error('generateLayer ' + (name ?? 'unknown'), canvasLayer.current.id, e);
                    resolve({
                        status: 'error',
                        draw: exportCtx => {
                            if (canvasLayer.current) exportCtx.drawImage(canvasLayer.current, 0, 0);
                        },
                        error: e
                    });
                }
            }
        };
        if (delayQueue === 0) {
            returnPromise();
        } else {
            setTimeout(returnPromise, delayQueue * 25);
        }
    });
};