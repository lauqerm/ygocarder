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
    height: 150,
    width: 600,
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
            const debug = false;
            if (target && ctx) {
                ctx.clearRect(0, 0, target.width, target.height);
                result = {};
                if (setup) setup(ctx);
                ctx.fillStyle = '#000000';
                ctx.fillText('mienMIEN', 10, 100);
                const checkpointByScaleMap: Record<string, { letter: string, y: number, type: 'anchor' | 'subject' }[]> = {
                    '1': [
                        { letter: 'm', y: Math.round(45 * appliedXRatio), type: 'anchor' },
                        { letter: 'i', y: Math.round(62 * appliedXRatio), type: 'subject' },
                        { letter: 'e', y: Math.round(81 * appliedXRatio), type: 'subject' },
                        { letter: 'n', y: Math.round(110 * appliedXRatio), type: 'subject' },
                        { letter: 'M', y: Math.round(146 * appliedXRatio), type: 'anchor' },
                        { letter: 'I', y: Math.round(198 * appliedXRatio), type: 'subject' },
                        { letter: 'E', y: Math.round(218 * appliedXRatio), type: 'subject' },
                        { letter: 'N', y: Math.round(250 * appliedXRatio), type: 'subject' },
                    ],
                    '2': [
                        { letter: 'm', y: Math.round(80 * appliedXRatio), type: 'anchor' },
                        { letter: 'i', y: Math.round(115 * appliedXRatio), type: 'subject' },
                        { letter: 'e', y: Math.round(153 * appliedXRatio), type: 'subject' },
                        { letter: 'n', y: Math.round(210 * appliedXRatio), type: 'subject' },
                        { letter: 'M', y: Math.round(347 * appliedXRatio), type: 'anchor' },
                        { letter: 'I', y: Math.round(386 * appliedXRatio), type: 'subject' },
                        { letter: 'E', y: Math.round(425 * appliedXRatio), type: 'subject' },
                        { letter: 'N', y: Math.round(491 * appliedXRatio), type: 'subject' },
                    ],
                };
                const checkpointList = checkpointByScaleMap[appliedScale];

                ctx.resetTransform();
                if (checkpointList) {
                    const imageData = ctx.getImageData(0, 0, DebugCanvas.width, DebugCanvas.height);
                    const layerData = imageData.data;
                    let anchorAscent = -1;
                    let anchorDescent = -1;
                    for (let cnt = 0; cnt < checkpointList.length; cnt++) {
                        const {
                            type,
                            letter,
                            y,
                        } = checkpointList[cnt];
                        let trueAscent = -1;
                        let trueDescent = -1;
                        /** We do not count pixel that are too transparent to see. */
                        const opacityConfidence = 90;
                        for (let xPos = 0; xPos < DebugCanvas.height; xPos++) {
                            const pixel = (xPos * imageData.width + y) * 4;
                            const opacity = layerData[pixel + 3];
                            if (opacity > opacityConfidence && trueAscent === -1) {
                                if (debug) layerData[pixel] = 255;
                                trueAscent = xPos;
                                break;
                            }
                        }
                        for (let xPos = DebugCanvas.height - 1; xPos >= 0; xPos--) {
                            const pixel = (xPos * imageData.width + y) * 4;
                            const opacity = layerData[pixel + 3];
                            if (opacity > opacityConfidence && trueDescent === -1) {
                                if (debug) layerData[pixel] = 255;
                                trueDescent = xPos;
                                break;
                            }
                        }
                        if (type === 'anchor') {
                            anchorAscent = trueAscent;
                            anchorDescent = trueDescent;
                        } else {
                            result[letter] = {
                                ascentCompensate: anchorAscent === -1 ? 0 : trueAscent - anchorAscent,
                                descentCompensate: anchorDescent === -1 ? 0 : anchorDescent - trueDescent,
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