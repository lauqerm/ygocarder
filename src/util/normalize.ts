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
                ctx.fillStyle = '#000000';
                ctx.fillText('mienMIEN120OQoq', 0, 95);
                const checkpointByScaleMap: Record<string, {
                    letter: string,
                    x: number,
                    anchor?: string,
                    compensateTop?: boolean,
                    compensateBottom?: boolean,
                }[]> = {
                    '1': [
                        { letter: 'm', x: Math.round(34 * appliedXRatio) },
                        { letter: 'i', x: Math.round(52 * appliedXRatio), anchor: 'm' },
                        { letter: 'e', x: Math.round(71 * appliedXRatio), anchor: 'm' },
                        { letter: 'n', x: Math.round(96 * appliedXRatio), anchor: 'm' },
                        { letter: 'M', x: Math.round(136 * appliedXRatio) },
                        { letter: 'I', x: Math.round(188 * appliedXRatio), anchor: 'M' },
                        { letter: 'E', x: Math.round(208 * appliedXRatio), anchor: 'M' },
                        { letter: 'N', x: Math.round(240 * appliedXRatio), anchor: 'M' },
                        { letter: '1', x: Math.round(290 * appliedXRatio), anchor: 'M', compensateTop: false },
                        { letter: '2', x: Math.round(326 * appliedXRatio), anchor: 'M', compensateTop: false },
                        { letter: '0', x: Math.round(360 * appliedXRatio), anchor: 'M' },
                        { letter: 'O', x: Math.round(398 * appliedXRatio), anchor: 'M' },
                        { letter: 'Q', x: Math.round(440 * appliedXRatio), anchor: 'M' },
                        { letter: 'o', x: Math.round(481 * appliedXRatio), anchor: 'm' },
                        { letter: 'q', x: Math.round(519 * appliedXRatio), anchor: 'm' },
                    ],
                    '2': [
                        { letter: 'm', x: Math.round(70 * appliedXRatio) },
                        { letter: 'i', x: Math.round(105 * appliedXRatio), anchor: 'm' },
                        { letter: 'e', x: Math.round(143 * appliedXRatio), anchor: 'm' },
                        { letter: 'n', x: Math.round(196 * appliedXRatio), anchor: 'm' },
                        { letter: 'M', x: Math.round(337 * appliedXRatio) },
                        { letter: 'I', x: Math.round(376 * appliedXRatio), anchor: 'M' },
                        { letter: 'E', x: Math.round(415 * appliedXRatio), anchor: 'M' },
                        { letter: 'N', x: Math.round(481 * appliedXRatio), anchor: 'M' },
                        { letter: '1', x: Math.round(585 * appliedXRatio), anchor: 'M', compensateTop: false },
                        { letter: '2', x: Math.round(654 * appliedXRatio), anchor: 'M', compensateTop: false },
                        { letter: '0', x: Math.round(721 * appliedXRatio), anchor: 'M' },
                        { letter: 'O', x: Math.round(798 * appliedXRatio), anchor: 'M' },
                        { letter: 'Q', x: Math.round(883 * appliedXRatio), anchor: 'M' },
                        { letter: 'o', x: Math.round(966 * appliedXRatio), anchor: 'm' },
                        { letter: 'q', x: Math.round(1036 * appliedXRatio), anchor: 'm' },
                    ],
                };
                const checkpointList = checkpointByScaleMap[appliedScale];

                ctx.resetTransform();
                if (checkpointList) {
                    const imageData = ctx.getImageData(0, 0, DebugCanvas.width * appliedScale, DebugCanvas.height);
                    const layerData = imageData.data;
                    const paintSamplePixel = (pixel: number, positive: boolean) => {
                        if (!debug) return;
                        layerData[pixel] = positive ? 255 : 0;
                        layerData[pixel + 1] = 0;
                        layerData[pixel + 2] = !positive ? 255 : 0;
                        layerData[pixel + 3] = 255;
                    };
                    let anchorMap: Record<string, { ascent: number, descent: number }> = {};
                    for (let cnt = 0; cnt < checkpointList.length; cnt++) {
                        const {
                            anchor,
                            letter,
                            x,
                            compensateBottom = true,
                            compensateTop = true,
                        } = checkpointList[cnt];
                        let trueAscent = -1;
                        let trueDescent = -1;
                        /** We do not count pixel that are too transparent to see. */
                        const opacityConfidence = 90;
                        for (let yPos = 0; yPos < DebugCanvas.height; yPos++) {
                            const firstSamplePixel = (yPos * imageData.width + x) * 4;
                            const firstSampleOpacity = layerData[firstSamplePixel + 3];
                            let firstSample = -1;
                            if (firstSampleOpacity > opacityConfidence && trueAscent === -1) {
                                firstSample = yPos;
                            }
                            paintSamplePixel(firstSamplePixel, firstSampleOpacity > opacityConfidence && trueAscent === -1);
                            const secondSamplePixel = (yPos * imageData.width + x + 1) * 4;
                            const secondSampleOpacity = layerData[secondSamplePixel + 3];
                            let secondSample = -1;
                            if (secondSampleOpacity > opacityConfidence && trueAscent === -1) {
                                secondSample = yPos + 1;
                            }
                            paintSamplePixel(secondSamplePixel, secondSampleOpacity > opacityConfidence && trueAscent === -1);
                            const thirdSamplePixel = (yPos * imageData.width + x + 2) * 4;
                            const thirdSampleOpacity = layerData[thirdSamplePixel + 3];
                            let thirdSample = -1;
                            if (thirdSampleOpacity > opacityConfidence && trueAscent === -1) {
                                thirdSample = yPos + 2;
                            }
                            paintSamplePixel(thirdSamplePixel, thirdSampleOpacity > opacityConfidence && trueAscent === -1);
                            trueAscent = Math.max(firstSample, secondSample, thirdSample);
                            if (trueAscent !== -1) break;
                        }
                        for (let yPos = DebugCanvas.height - 1; yPos >= 0; yPos--) {
                            const firstSamplePixel = (yPos * imageData.width + x) * 4;
                            const firstSampleOpacity = layerData[firstSamplePixel + 3];
                            let firstSample = -1;
                            if (firstSampleOpacity > opacityConfidence && trueDescent === -1) {
                                firstSample = yPos;
                            }
                            paintSamplePixel(firstSamplePixel, firstSampleOpacity > opacityConfidence && trueDescent === -1);
                            const secondSamplePixel = (yPos * imageData.width + x + 1) * 4;
                            const secondSampleOpacity = layerData[secondSamplePixel + 3];
                            let secondSample = -1;
                            if (secondSampleOpacity > opacityConfidence && trueDescent === -1) {
                                secondSample = yPos + 1;
                            }
                            paintSamplePixel(secondSamplePixel, secondSampleOpacity > opacityConfidence && trueDescent === -1);
                            const thirdSamplePixel = (yPos * imageData.width + x + 2) * 4;
                            const thirdSampleOpacity = layerData[thirdSamplePixel + 3];
                            let thirdSample = -1;
                            if (thirdSampleOpacity > opacityConfidence && trueDescent === -1) {
                                thirdSample = yPos + 2;
                            }
                            paintSamplePixel(thirdSamplePixel, thirdSampleOpacity > opacityConfidence && trueDescent === -1);
                            trueDescent = Math.max(firstSample, secondSample, thirdSample);
                            if (trueDescent !== -1) break;
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