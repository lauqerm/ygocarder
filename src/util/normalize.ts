export const normalizeCardName = (name: string) => {
    try {
        return name
        .replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g, '$1')
        .replaceAll(/(^\[|\[\[|{|{{)([^{}[\]]*)[}\]]{1,2}/gm, '$2');
    } catch (e) {
        console.error(e);
        return name;
    }
};
export const normalizeCardEffect = (effect: string) => {
    try {
        return effect
            .replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g, '$1')
            .replaceAll(/(^\[|\[\[|{|{{)([^{}[\]]*)[}\]]{1,2}/gm, '$2');
    } catch (e) {
        console.error(e);
        return effect;
    }
};
/** Sample image before normalization: `https://images.ygoprodeck.com/images/cards_cropped/46986414.jpg`. We convert into yugicrawler - another public API that allow us to bypass the CORS restriction for these images. If yugicrawler decide that it does not want to support our operation, we have no other options except force user to upload the image manually. */
export const isYgoprodeckImage = (link: string) => {
    try {
        return link.startsWith('https://images.ygoprodeck.com/images/cards_cropped');
    } catch (e) {
        console.error(e);
        return false;
    }
};

export const toDebugMonitor = ({ content, mode }: { content?: string, mode?: 'add' | 'delete' }) => {
    const target = document.getElementById('debug-monitor');
    if (target) {
        if (mode === 'delete') target.innerHTML = '';
        else target.innerHTML = target.innerHTML + '    ' + content;
    }
};

export const DebugCanvas = {
    height: 100,
    width: 550,
};
/**
 * Our brute force solution for problem described in FontDeviation type.
 * 
 * * Idea: Each reportedly defectable letters will be compared against a "correct" letter, so if they have any mismatch, we will compensate them.
 * * The problem: Defection happens wildly depend on the current ratio, global scale and especially device, the only surefire way to tell if the letter is defect or not is we must measure it directly on canvas. That means we must create a "dummy" canvas and draw all defectable letters + their anchor with the exact setting as the real canvas, then measure their height directly. (Context's measure WILL NOT work reliably).
 * * The insane parts: It seems like each time we scale or render the font, some internal values of canvas will be changed forever. Defected letters will no longer be defected again AFTER THE FIRST RENDER, no matter how much we config it later, that means we must reset the canvas everytime by React key to make sure we will always be able to reproduce and measure the defect.
 */
export const getCanvasFontDebugger = () => {
    let currentContext = '';
    let result: Record<string, {
        ascentCompensate?: number,
        descentCompensate?: number,
        height?: number,
        anchorAscent?: number,
        anchorDescent?: number,
        anchorHeight?: number,
    } | undefined> = {};

    return {
        get: (letter: string) => result[letter],
        test: (
            context: Record<string, any>,
            {
                scale,
                xRatio,
                setup,
            }: {
                scale?: number,
                xRatio?: number,
                setup?: (ctx: CanvasRenderingContext2D) => void
            },
        ) => {
            const newContext = JSON.stringify(context);
            if (newContext === currentContext) return;

            currentContext = newContext;
            const target = document.getElementById('debug-canvas') as HTMLCanvasElement | null;
            const ctx = target?.getContext('2d');
            const appliedScale = scale ?? 1;
            const appliedXRatio = xRatio ?? 1;
            const debug = true;
            if (target && ctx) {
                ctx.clearRect(0, 0, target.width, target.height);
                result = {};
                if (setup) setup(ctx);
                ctx.fillStyle = '#ffffff';
                ctx.fillText('mienMIEN12', 0, 95);
                const checkpointByScaleMap: Record<string, {
                    letter: string,
                    y: number,
                    anchor?: string,
                    compensateTop?: boolean,
                    compensateBottom?: boolean,
                }[]> = {
                    '1': [
                        { letter: 'm', y: Math.round(34 * appliedXRatio) },
                        { letter: 'i', y: Math.round(52 * appliedXRatio), anchor: 'm' },
                        { letter: 'e', y: Math.round(71 * appliedXRatio), anchor: 'm' },
                        { letter: 'n', y: Math.round(100 * appliedXRatio), anchor: 'm' },
                        { letter: 'M', y: Math.round(136 * appliedXRatio) },
                        { letter: 'I', y: Math.round(188 * appliedXRatio), anchor: 'M' },
                        { letter: 'E', y: Math.round(208 * appliedXRatio), anchor: 'M' },
                        { letter: 'N', y: Math.round(240 * appliedXRatio), anchor: 'M' },
                        { letter: '1', y: Math.round(289 * appliedXRatio), anchor: 'M', compensateTop: false },
                        { letter: '2', y: Math.round(316 * appliedXRatio), anchor: 'M', compensateTop: false },
                    ],
                    '2': [
                        { letter: 'm', y: Math.round(70 * appliedXRatio) },
                        { letter: 'i', y: Math.round(105 * appliedXRatio), anchor: 'm' },
                        { letter: 'e', y: Math.round(143 * appliedXRatio), anchor: 'm' },
                        { letter: 'n', y: Math.round(200 * appliedXRatio), anchor: 'm' },
                        { letter: 'M', y: Math.round(337 * appliedXRatio) },
                        { letter: 'I', y: Math.round(376 * appliedXRatio), anchor: 'M' },
                        { letter: 'E', y: Math.round(415 * appliedXRatio), anchor: 'M' },
                        { letter: 'N', y: Math.round(481 * appliedXRatio), anchor: 'M' },
                        { letter: '1', y: Math.round(576 * appliedXRatio), anchor: 'M', compensateTop: false },
                        { letter: '2', y: Math.round(633 * appliedXRatio), anchor: 'M', compensateTop: false },
                    ],
                };
                const checkpointList = checkpointByScaleMap[appliedScale];

                ctx.resetTransform();
                if (checkpointList) {
                    const imageData = ctx.getImageData(0, 0, DebugCanvas.width, DebugCanvas.height);
                    const layerData = imageData.data;
                    let anchorMap: Record<string, { ascent: number, descent: number }> = {};
                    for (let cnt = 0; cnt < checkpointList.length; cnt++) {
                        const {
                            anchor,
                            letter,
                            y,
                            compensateBottom = true,
                            compensateTop = true,
                        } = checkpointList[cnt];
                        let trueAscent = -1;
                        let trueDescent = -1;
                        /** We do not count pixel that are too transparent to see. */
                        const opacityConfidence = 90;
                        for (let xPos = 0; xPos < DebugCanvas.height; xPos++) {
                            const pixel = (xPos * imageData.width + y) * 4;
                            const opacity = layerData[pixel + 3];
                            if (opacity > opacityConfidence && trueAscent === -1) {
                                if (debug) {
                                    layerData[pixel] = 255;
                                    layerData[pixel + 1] = 0;
                                    layerData[pixel + 2] = 0;
                                }
                                trueAscent = xPos;
                                break;
                            }
                        }
                        for (let xPos = DebugCanvas.height - 1; xPos >= 0; xPos--) {
                            const pixel = (xPos * imageData.width + y) * 4;
                            const opacity = layerData[pixel + 3];
                            if (opacity > opacityConfidence && trueDescent === -1) {
                                if (debug) {
                                    layerData[pixel] = 255;
                                    layerData[pixel + 1] = 0;
                                    layerData[pixel + 2] = 0;
                                }
                                trueDescent = xPos;
                                break;
                            }
                        }
                        if (typeof anchor !== 'string') {
                            anchorMap[letter] = {
                                ascent: trueAscent,
                                descent: trueDescent,
                            };
                        } else {
                            const { ascent: anchorAscent, descent: anchorDescent } = anchorMap[anchor];
                            result[letter] = {
                                ascentCompensate: typeof anchorAscent === 'number' && compensateTop
                                    ? trueAscent - anchorAscent
                                    : 0,
                                descentCompensate: typeof anchorDescent === 'number' && compensateBottom
                                    ? anchorDescent - trueDescent
                                    : 0,
                                height: trueDescent - trueAscent,
                                anchorAscent,
                                anchorDescent,
                                anchorHeight: anchorDescent - anchorAscent,
                            };
                        }
                    }

                    /** In debug mode, we draw back the guide point into dummy canvas to see if we put the correct measure line */
                    if (debug) ctx.putImageData(new ImageData(layerData, imageData.width, imageData.height), 0, 0);
                    ctx.font = '10px Arial';
                }
            }
        }
    };
};
export const fontDebugger = getCanvasFontDebugger();