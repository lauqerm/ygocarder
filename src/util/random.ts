export const seedDistributionCalculator = (seedIncrement: number) => {
    const runSeed = () => {
        let count = 1;
        let current = seedIncrement;
        while (current < Math.random()) {
            current += seedIncrement;
            count += 1;
        }
        return count;
    };
    let distributionMap: Record<string, number> = {};
    for (let i = 0; i < 100000; i++) {
        const result = runSeed();
        if (distributionMap[result] !== undefined) distributionMap[result] += 1;
        else distributionMap[result] = 1;
    }
    return distributionMap;
};
/** We choose 0.015 as our seed increment, so it has roughly 20% chance to remind user of backup every 5 saves, and increased to 60% after 10. */
export const DEFAULT_SEED_INCREMENT = 0.015;

export const getNaivePseudoRandomizer = (seedIncrement = DEFAULT_SEED_INCREMENT) => {
    let internalChance = seedIncrement;

    return {
        check: () => {
            const result = Math.random();

            if (internalChance < result) {
                internalChance += seedIncrement;
                return false;
            } else {
                internalChance = seedIncrement;
                return true;
            }
        }
    };
};

export const randomCharacter = (charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', length = 1) => {
    let result = '';
    const charactersLength = charSet.length;
    for (let i = 0; i < length; i++) {
        result += charSet.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

export const randomSetID = (format: string) => {
    return randomCharacter('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 4)
        + '-'
        + (format === 'OCG' ? 'JP' : 'EN')
        /** Most set does not reach 200+ index, so 0, 1 and 2 has significantly higher chance to roll */
        + randomCharacter('0000000000111111111122222222223456789', 1)
        + randomCharacter('0123456789', 2);
};

export const randomPassword = () => {
    return `${randomCharacter('0123456789', 8)}`;
};

export const toDebugMonitor = ({ content, mode }: { content?: string, mode?: 'add' | 'delete' }) => {
    const target = document.getElementById('debug-monitor');
    if (target) {
        if (mode === 'delete') target.innerHTML = '';
        else target.innerHTML = target.innerHTML + '    ' + content;
    }
};

export const toDebugCanvas = ({
    content,
    mode,
    edge = 100,
    baseline = 120,
    setup,
}: {
    content?: string,
    mode?: 'add' | 'delete',
    edge?: number,
    baseline?: number,
    setup?: (ctx: CanvasRenderingContext2D) => void,
}) => {
    const target = document.getElementById('debug-canvas') as HTMLCanvasElement | null;
    const ctx = target?.getContext('2d');
    if (target && ctx) {
        if (setup) setup(ctx);
        if (mode === 'delete') ctx.clearRect(0, 0, target.width, target.height);
        else if (mode === 'add' && content) {
            ctx.fillText(content, edge, baseline);
        }
    }
};

export const DebugCanvas = {
    height: 150,
    width: 600,
};
export const getCanvasFontDebugger = () => {
    let currentContext = '';
    let result: Record<string, {
        actualAscent?: number,
        actualDescent?: number,
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
            if (target && ctx) {
                ctx.clearRect(0, 0, target.width, target.height);
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
                    // ctx.fillStyle = '#ff0000';
                    // for (let cnt = 0; cnt < checkpointList.length; cnt++) {
                    //     const { y } = checkpointList[cnt];
                    //     ctx.fillRect(y, 0, 1, DebugCanvas.height);
                    // }

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
                                console.log('pixel up', letter, layerData[pixel], layerData[pixel + 1], layerData[pixel + 2], layerData[pixel + 3]);
                                layerData[pixel] = 255;
                                trueAscent = xPos;
                                break;
                            }
                        }
                        for (let xPos = DebugCanvas.height - 1; xPos >= 0; xPos--) {
                            const pixel = (xPos * imageData.width + y) * 4;
                            const opacity = layerData[pixel + 3];
                            if (opacity > opacityConfidence && trueDescent === -1) {
                                console.log('pixel down', letter, layerData[pixel], layerData[pixel + 1], layerData[pixel + 2], layerData[pixel + 3]);
                                layerData[pixel] = 255;
                                trueDescent = xPos;
                                break;
                            }
                        }
                        if (type === 'anchor') {
                            anchorAscent = trueAscent;
                            anchorDescent = trueDescent;
                        } else {
                            result[letter] = {
                                actualAscent: anchorAscent === -1 ? 0 : trueAscent - anchorAscent,
                                actualDescent: anchorDescent === -1 ? 0 : anchorDescent - trueDescent,
                                height: trueDescent - trueAscent,
                                anchorAscent,
                                anchorDescent,
                                anchorHeight: anchorDescent - anchorAscent,
                            };
                        }
                        console.log('RESULT', letter, trueAscent, trueDescent);
                    }

                    ctx.putImageData(new ImageData(layerData, imageData.width, imageData.height), 0, 0);
                }
            }
            console.log('result', result);
        }
    };
};
export const fontDebugger = getCanvasFontDebugger();