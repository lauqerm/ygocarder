import { LineKey } from 'src/model';

const VISIBLE_OPACITY_THRESHOLD = 61;//67;//25;//75;
const STRETCHING_THRESHOLD = 10;
const mutatePixel = (layerData: ImageDataArray, pixel: number, r?: number, g?: number, b?: number, a?: number) => {
    layerData[pixel + 0] = r ?? 0;
    layerData[pixel + 1] = g ?? 0;
    layerData[pixel + 2] = b ?? 0;
    layerData[pixel + 3] = a ?? 0;
};
export const probe = ({
    canvas,
    topX,
    topStart,
    topIgnore = 0,
    bottomX,
    bottomStart,
    bottomIgnore = 0,
    opacityThreshold = VISIBLE_OPACITY_THRESHOLD,
    debug = false,
}: {
    canvas: HTMLCanvasElement,
    topX: number,
    topStart?: number,
    topIgnore?: number,
    bottomX: number,
    bottomStart?: number,
    bottomIgnore?: number,
    opacityThreshold?: number,
    debug?: boolean,
}) => {
    const probeThreshold = 3; /** Wide probe to avoid accidental mistake */
    const ctx = canvas.getContext('2d');
    if (!ctx) return {
        top: -1,
        bottom: -1,
        height: 0,
    };

    const width2 = canvas.width;
    const height2 = canvas.height;
    const imageData = ctx.getImageData(0, 0, width2, height2);
    const layerData = imageData.data;
    let probedTop = -1;
    let topIgnored = topIgnore;
    let insideInkPart = false;
    const probeTopStart = topStart ?? 0;
    for (let x = probeTopStart; x < height2; x++) {
        let foundInk = false;
        for (let y = topX; y <= topX + probeThreshold; y++) {
            const pixel = (x * width2 + y) * 4;
            if (layerData[pixel + 3] > opacityThreshold) {
                if (debug) mutatePixel(layerData, pixel, 255, 0, 0, 255);
                foundInk = true;
                break;
            } else {
                if (debug) mutatePixel(layerData, pixel, 0, 0, 255, 255);
            }
        }
        /**
         * * When any part of the probe touches an ink line, we are now inside an inked part.
         * * If the ignored number is 0, we record that the probe has touched the target point.
         * * Otherwise, keep going until we go outside of an inked part (all of the probe no longer touch any ink).
         * * Now, we decrease the ignored number by 1 and keep going - basically, we just ignore an inked part.
         */
        if (foundInk) {
            if (insideInkPart === false) {
                insideInkPart = true;
                if (topIgnored === 0) probedTop = x;
            }
        } else {
            if (insideInkPart === true) {
                insideInkPart = false;
                topIgnored -= 1;
            }
        }
        if (probedTop > -1) break;
    }
    let probedBottom = -1;
    let botIgnored = bottomIgnore;
    insideInkPart = false;
    const probeBotStart = bottomStart ?? height2;
    for (let x = probeBotStart; x >= 0; x--) {
        let foundInk = false;
        for (let y = bottomX; y <= bottomX + probeThreshold; y++) {
            const pixel = (x * width2 + y) * 4;
            if (layerData[pixel + 3] > opacityThreshold) {
                if (debug) mutatePixel(layerData, pixel, 255, 0, 0, 255);
                foundInk = true;
                break;
            } else {
                if (debug) mutatePixel(layerData, pixel, 0, 0, 255, 255);
            }
        }
        if (foundInk) {
            if (insideInkPart === false) {
                insideInkPart = true;
                if (botIgnored === 0) probedBottom = x;
            }
        } else {
            if (insideInkPart === true) {
                insideInkPart = false;
                botIgnored -= 1;
            }
        }
        if (probedBottom > -1) break;
    }
    ctx.putImageData(new ImageData(layerData, imageData.width, imageData.height), 0, 0);
    const probedHeight = probedBottom - probedTop + 1;

    return {
        top: probedTop,
        bottom: probedBottom,
        height: probedHeight,
    };
};
type AtlasEntry = {
    letter: string,
    topX: number,
    bottomX: number,
    from: LineKey,
    to: LineKey,
    alignment: 'top' | 'bottom' | 'both',
    opacityThreshold?: number,
};
/** Thereotically, the atlas should considering all of these */
export const CharsetMap = {
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lower: 'abcdefghijklmnopqrstuvwxyz',
    digits: '0123456789',
    punctuation: '.,:;!?\'"()[]{}<>/\\|-–—_@#$%^&*+=~`',
    /** Precomposed Vietnamese letters. Omitting these is expensive to discover late. */
    vietnameseLower:
        'àáâãèéêìíòóôõùúýăđĩũơưạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ',
    vietnameseUpper:
        'ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚÝĂĐĨŨƠƯẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸ',
} as const;
export const letterAtlas: Record<string, AtlasEntry> = {
    'A': { letter: 'A', topX: 16, bottomX: 1, from: 'high', to: 'origin', alignment: 'both' },
    'B': { letter: 'B', topX: 5, bottomX: 5, from: 'high', to: 'origin', alignment: 'both' },
    'C': { letter: 'C', topX: 18, bottomX: 18, from: 'high', to: 'origin', alignment: 'both' },
    'D': { letter: 'D', topX: 5, bottomX: 5, from: 'high', to: 'origin', alignment: 'both' },
    'E': { letter: 'E', topX: 5, bottomX: 5, from: 'high', to: 'origin', alignment: 'both' },
    'F': { letter: 'F', topX: 5, bottomX: 5, from: 'high', to: 'origin', alignment: 'both' },
    'G': { letter: 'G', topX: 20, bottomX: 20, from: 'high', to: 'origin', alignment: 'both' },
    'H': { letter: 'H', topX: 5, bottomX: 5, from: 'high', to: 'origin', alignment: 'both' },
    'I': { letter: 'I', topX: 5, bottomX: 5, from: 'high', to: 'origin', alignment: 'both' },
    'J': { letter: 'J', topX: 5, bottomX: 1, from: 'high', to: 'origin', alignment: 'top' },
    'K': { letter: 'K', topX: 5, bottomX: 5, from: 'high', to: 'origin', alignment: 'both' },
    'L': { letter: 'L', topX: 6, bottomX: 6, from: 'high', to: 'origin', alignment: 'both' },
    'M': { letter: 'M', topX: 5, bottomX: 5, from: 'high', to: 'origin', alignment: 'both' },
    'N': { letter: 'N', topX: 5, bottomX: 5, from: 'high', to: 'origin', alignment: 'both' },
    'O': { letter: 'O', topX: 16, bottomX: 16, from: 'high', to: 'origin', alignment: 'both' },
    'P': { letter: 'P', topX: 5, bottomX: 5, from: 'high', to: 'origin', alignment: 'both' },
    'Q': { letter: 'Q', topX: 16, bottomX: 16, from: 'high', to: 'origin', alignment: 'top' },
    'R': { letter: 'R', topX: 5, bottomX: 5, from: 'high', to: 'origin', alignment: 'both' },
    'S': { letter: 'S', topX: 11, bottomX: 11, from: 'high', to: 'origin', alignment: 'both' },
    'T': { letter: 'T', topX: 10, bottomX: 10, from: 'high', to: 'origin', alignment: 'both' },
    'U': { letter: 'U', topX: 1, bottomX: 15, from: 'high', to: 'origin', alignment: 'both' },
    'V': { letter: 'V', topX: 1, bottomX: 15, from: 'high', to: 'origin', alignment: 'both' },
    'W': { letter: 'W', topX: 1, bottomX: 16, from: 'high', to: 'origin', alignment: 'both' },
    'X': { letter: 'X', topX: 1, bottomX: 1, from: 'high', to: 'origin', alignment: 'both' },
    'Y': { letter: 'Y', topX: 1, bottomX: 10, from: 'high', to: 'origin', alignment: 'both' },
    'Z': { letter: 'Z', topX: 2, bottomX: 2, from: 'high', to: 'origin', alignment: 'both' },

    'a': { letter: 'a', topX: 14, bottomX: 1, from: 'medium', to: 'origin', alignment: 'both' },
    'b': { letter: 'b', topX: 5, bottomX: 5, from: 'medium', to: 'origin', alignment: 'both' },
    'c': { letter: 'c', topX: 15, bottomX: 15, from: 'medium', to: 'origin', alignment: 'both' },
    'd': { letter: 'd', topX: 5, bottomX: 5, from: 'medium', to: 'origin', alignment: 'both' },
    'e': { letter: 'e', topX: 5, bottomX: 5, from: 'medium', to: 'origin', alignment: 'both' },
    'f': { letter: 'f', topX: 5, bottomX: 5, from: 'medium', to: 'origin', alignment: 'both' },
    'g': { letter: 'g', topX: 17, bottomX: 17, from: 'medium', to: 'origin', alignment: 'both' },
    'h': { letter: 'h', topX: 5, bottomX: 5, from: 'medium', to: 'origin', alignment: 'both' },
    'i': { letter: 'i', topX: 5, bottomX: 5, from: 'medium', to: 'origin', alignment: 'both' },
    'j': { letter: 'j', topX: 7, bottomX: 1, from: 'medium', to: 'origin', alignment: 'top' },
    'k': { letter: 'k', topX: 5, bottomX: 5, from: 'medium', to: 'origin', alignment: 'both' },
    'l': { letter: 'l', topX: 5, bottomX: 5, from: 'medium', to: 'origin', alignment: 'both' },
    'm': { letter: 'm', topX: 5, bottomX: 5, from: 'medium', to: 'origin', alignment: 'both' },
    'n': { letter: 'n', topX: 5, bottomX: 5, from: 'medium', to: 'origin', alignment: 'both' },
    'o': { letter: 'o', topX: 14, bottomX: 14, from: 'medium', to: 'origin', alignment: 'both' },
    'p': { letter: 'p', topX: 5, bottomX: 5, from: 'medium', to: 'origin', alignment: 'both' },
    'q': { letter: 'q', topX: 15, bottomX: 15, from: 'medium', to: 'origin', alignment: 'top' },
    'r': { letter: 'r', topX: 5, bottomX: 5, from: 'medium', to: 'origin', alignment: 'both' },
    's': { letter: 's', topX: 11, bottomX: 11, from: 'medium', to: 'origin', alignment: 'both' },
    't': { letter: 't', topX: 11, bottomX: 11, from: 'medium', to: 'origin', alignment: 'both' },
    'u': { letter: 'u', topX: 1, bottomX: 14, from: 'medium', to: 'origin', alignment: 'both' },
    'v': { letter: 'v', topX: 1, bottomX: 13, from: 'medium', to: 'origin', alignment: 'both' },
    'w': { letter: 'w', topX: 1, bottomX: 13, from: 'medium', to: 'origin', alignment: 'both' },
    'x': { letter: 'x', topX: 1, bottomX: 1, from: 'medium', to: 'origin', alignment: 'both' },
    'y': { letter: 'y', topX: 1, bottomX: 10, from: 'medium', to: 'origin', alignment: 'both' },
    'z': { letter: 'z', topX: 1, bottomX: 1, from: 'medium', to: 'origin', alignment: 'both' },

    '0': { letter: '0', topX: 13, bottomX: 13, from: 'high', to: 'origin', alignment: 'both' },
    '1': { letter: '1', topX: 16, bottomX: 10, from: 'high', to: 'origin', alignment: 'both' },
    '2': { letter: '2', topX: 15, bottomX: 3, from: 'high', to: 'origin', alignment: 'both' },
    '3': { letter: '3', topX: 13, bottomX: 3, from: 'high', to: 'low', alignment: 'both' },
    '4': { letter: '4', topX: 22, bottomX: 16, from: 'high', to: 'origin', alignment: 'both' },
    '5': { letter: '5', topX: 5, bottomX: 5, from: 'high', to: 'low', alignment: 'both' },
    '6': { letter: '6', topX: 21, bottomX: 13, from: 'high', to: 'origin', alignment: 'both' },
    '7': { letter: '7', topX: 3, bottomX: 8, from: 'high', to: 'origin', alignment: 'both' },
    '8': { letter: '8', topX: 14, bottomX: 14, from: 'high', to: 'origin', alignment: 'both' },
    '9': { letter: '9', topX: 14, bottomX: 10, from: 'high', to: 'origin', alignment: 'both' },
};
export const drawFitGlyph = ({
    ctx,
    baseCanvas,
    adjustedCanvas,
    globalScale,
    letter,
    xRatio,
    yRatio,
    edge,
    base,
    line,
    maxAdjustment = 3,
    setupContext,
}: {
    ctx: CanvasRenderingContext2D,
    baseCanvas: HTMLCanvasElement | null,
    adjustedCanvas: HTMLCanvasElement | null,
    globalScale: number,
    letter: string,
    xRatio: number,
    /** The logic for yRatio here is INCOMPLETE, right now we have no use for it yet */
    yRatio: number,
    edge: number,
    base: number,
    /** Other lines are related to base */
    line: Record<LineKey, number>,
    maxAdjustment?: number,
    setupContext: (ctx: CanvasRenderingContext2D) => void,
}) => {
    const debug = false;
    const atlasEntry = letterAtlas[letter];
    if (!atlasEntry || !baseCanvas || !adjustedCanvas) return false;

    const {
        from, to,
        alignment,
        opacityThreshold,
    } = atlasEntry;
    const expectedHeight = (line[from] - line[to]) * yRatio;
    const baseCtx = baseCanvas.getContext('2d');
    if (!baseCtx) return false;

    /** Draw the glyph with the corresponding setting */
    baseCtx.clearRect(0, 0, baseCanvas.width, baseCanvas.height);
    baseCtx.save();
    setupContext(baseCtx);
    baseCtx.fillText(letter, edge, base);

    /** Add probe lines to find abnormality in height1 and position */
    const probeTopX = Math.round((edge + atlasEntry.topX * globalScale) * xRatio);
    const probeBotX = Math.round((edge + atlasEntry.bottomX * globalScale) * xRatio);

    /** Testing with adjustment until probe return is ok */
    const adjustedCtx = adjustedCanvas.getContext('2d');
    if (!adjustedCtx) return false;

    /** Case: Fit both side */
    ctx.save();
    ctx.scale(1 / xRatio, 1);
    if (alignment === 'both') {
        /** If the height difference is more than acceptable maxAdjustment => just return the glyph as is without adjustment */
        const initialProbeResult = probe({ canvas: baseCanvas, topX: probeTopX, bottomX: probeBotX, opacityThreshold, debug: false });
        if (maxAdjustment > 0 && Math.abs(initialProbeResult.height - expectedHeight) > maxAdjustment) {
            ctx.drawImage(baseCanvas, 0, 0);
            return true;
        }

        let foundResult = false;
        let probeResult = { top: 0, bottom: 0, height: 0 };
        /** We always prefer not adjusting anything */
        const stretchingList = [0];
        for (let i = 1; i <= STRETCHING_THRESHOLD * globalScale; i++) {
            stretchingList.push(i, -i);
        }
        for (let i = 0; i < stretchingList.length; i++) {
            adjustedCanvas.height = baseCanvas.height + stretchingList[i];
            adjustedCtx.clearRect(0, 0, adjustedCanvas.width, adjustedCanvas.height);
            adjustedCtx.drawImage(
                baseCanvas,
                0, 0, baseCanvas.width, baseCanvas.height,
                0, 0, adjustedCanvas.width, adjustedCanvas.height,
            );
            const currentProbeResult = probe({ canvas: adjustedCanvas, topX: probeTopX, bottomX: probeBotX, opacityThreshold, debug });
            if (currentProbeResult.height === expectedHeight) {
                probeResult = currentProbeResult;
                foundResult = true;
                break;
            }
        }
        if (foundResult) {
            ctx.drawImage(adjustedCanvas, 0, base - line[to] - (probeResult.bottom + 1));
        } else {
            ctx.drawImage(baseCanvas, 0, 0);
        }
    } else {
        adjustedCtx.clearRect(0, 0, adjustedCanvas.width, adjustedCanvas.height);
        adjustedCtx.drawImage(
            baseCanvas,
            0, 0, baseCanvas.width, baseCanvas.height,
            0, 0, adjustedCanvas.width, adjustedCanvas.height,
        );
        const probeResult = probe({ canvas: adjustedCanvas, topX: probeTopX, bottomX: probeBotX, opacityThreshold, debug });

        /** Case: Top alignment only */
        if (alignment === 'top') {
            ctx.drawImage(adjustedCanvas, 0, base - probeResult.top - expectedHeight);
        }
        /** Case: Bottom alignment only */
        if (alignment === 'bottom') {
            ctx.drawImage(adjustedCanvas, 0, base - (probeResult.bottom + 1));
        }
    }

    /** Clean up */
    ctx.restore();
    baseCtx.restore();
    adjustedCtx.restore();

    return true;
};

export * from './outline';