import { useEffect, useState } from 'react';

const threshold = 25;//75;
const mutatePixel = (layerData: ImageDataArray, pixel: number, r?: number, g?: number, b?: number, a?: number) => {
    layerData[pixel + 0] = r ?? 0;
    layerData[pixel + 1] = g ?? 0;
    layerData[pixel + 2] = b ?? 0;
    layerData[pixel + 3] = a ?? 0;
};
const probe = ({
    canvas,
    topX,
    topStart,
    topIgnore = 0,
    bottomX,
    bottomStart,
    bottomIgnore = 0,
    debug = false,
}: {
    canvas: HTMLCanvasElement,
    topX: number,
    topStart?: number,
    topIgnore?: number,
    bottomX: number,
    bottomStart?: number,
    bottomIgnore?: number,
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
            if (layerData[pixel + 3] > threshold) {
                if (debug) mutatePixel(layerData, pixel, 255, 0, 0, 255);
                foundInk = true;
                break;
            } else {
                if (debug) mutatePixel(layerData, pixel, 0, 0, 255, 255);
            }
        }
        /**
         * * When any part of the probe touch an ink line: we are now inside an inked part.
         * * If the ignored number is 0, we record that as the probe has touch the target point
         * * Otherwise, keep going until we goes outside of an inked part (all of the probe no longer touch any ink)
         * * Now, we decrease the ignored number by 1, and keep going - basically, we just ignore an inked part
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
            if (layerData[pixel + 3] > threshold) {
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

export const TestGlyphFit = () => {
    const [refreshCnt, setRefreshCnt] = useState(0);

    useEffect(() => {
        const appliedScale = 1;
        const size = 100;
        const startX = 10;
        const startY = 80;
        const scaleX = 1;
        const glyph = 'B';
        /** Step 1: Find the top and bottom boundaries of the letter */
        const canvas1 = document.getElementById('canvas-1') as HTMLCanvasElement | null;
        if (!canvas1) return;

        canvas1.width = size * appliedScale;
        canvas1.height = size * appliedScale;
        const ctx1 = canvas1.getContext('2d');
        if (!ctx1) return;

        ctx1.scale(scaleX, 1);
        ctx1.font = `${appliedScale * 91}px MatrixBoldSmallCaps, Times New Roman`;
        ctx1.fillText(glyph, startX * appliedScale, startY * appliedScale);

        const width1 = size * appliedScale;
        const height1 = size * appliedScale;
        const imageData1 = ctx1.getImageData(0, 0, width1, height1);
        const layerData1 = imageData1.data;

        let top = -1;
        for (let x = 0; x < height1; x++) {
            for (let y = 0; y < width1; y++) {
                const pixel = (x * width1 + y) * 4;
                if (layerData1[pixel + 3] > threshold) {
                    // mutatePixel(layerData, pixel, 255, 0, 0, 255);
                    top = x;
                    break;
                }
            }
            if (top > -1) break;
        }
        let bottom = -1;
        for (let x = height1; x >= 0; x--) {
            for (let y = 0; y < width1; y++) {
                const pixel = (x * width1 + y) * 4;
                if (layerData1[pixel + 3] > threshold) {
                    // mutatePixel(layerData, pixel, 255, 0, 0, 255);
                    bottom = x;
                    break;
                }
            }
            if (bottom > -1) break;
        }
        ctx1.putImageData(new ImageData(layerData1, imageData1.width, imageData1.height), 0, 0);
        const height = bottom - top + 1;
        console.log('🚀 ~ TestGlyphFit ~ initial:', top, bottom, height);

        const canvas2 = document.getElementById('canvas-2') as HTMLCanvasElement | null;
        if (!canvas2) return;

        canvas2.width = size * appliedScale;
        canvas2.height = bottom - top + 1;
        const ctx2 = canvas2.getContext('2d');
        if (!ctx2) return;

        ctx2.scale(scaleX, 1);
        ctx2.font = `${appliedScale * 91}px MatrixBoldSmallCaps, Times New Roman`;
        ctx2.fillText(glyph, startX * appliedScale, startY * appliedScale - top - 1);

        /** Step 2: Add probe lines to find abnomality in height1 and position */
        const probeTopX = Math.round(41 * appliedScale * scaleX);
        const probeBotX = Math.round(19 * appliedScale * scaleX);
        const initialProbeResult = probe({ canvas: canvas2, topX: probeTopX, bottomX: probeBotX });
        const expectedHeight = 54;
        const probeVerdict = initialProbeResult.height === expectedHeight
            ? 0
            : initialProbeResult.height < expectedHeight
                ? 1
                : -1;
        if (probeVerdict === 0) {
            console.log('Perfectly match', expectedHeight);
            return;
        }
        console.log('🚀 ~ TestGlyphFit ~ probed:', probeVerdict, initialProbeResult.top, initialProbeResult.bottom, initialProbeResult.height);

        /** Step 3: Testing with adjustment until probe return ok */
        const canvas3 = document.getElementById('canvas-3') as HTMLCanvasElement | null;
        if (!canvas3) return;

        canvas3.width = size * appliedScale;
        canvas3.height = size * appliedScale;
        const ctx3 = canvas3.getContext('2d');
        if (!ctx3) return;

        ctx3.scale(scaleX, 1);
        let probeResult = { top: -1, bottom: -1, height: 0, matched: false };
        const stretchingThreshold = 5;
        for (let i = 1; i < stretchingThreshold; i++) {
            canvas3.height = canvas2.height + i * probeVerdict;
            ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
            ctx3.drawImage(canvas2, 0, 0, canvas2.width, canvas2.height, 0, 0, canvas3.width, canvas3.height);
            const currentProbeResult = probe({ canvas: canvas3, topX: probeTopX, bottomX: probeBotX, debug: true });
            console.log('🚀 ~ TestGlyphFit ~ probeResult:', probeResult);
            if (currentProbeResult.height === expectedHeight) {
                probeResult = { ...currentProbeResult, matched: true };
                break;
            }
        }
        console.log('🚀 ~ TestGlyphFit ~ probeResult:', probeResult);
        /** Step 4: Test final result */
        const canvas4 = document.getElementById('canvas-4') as HTMLCanvasElement | null;
        if (!canvas4) return;

        const ctx4 = canvas4.getContext('2d');
        if (ctx4) {
            ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
            ctx4.fillStyle = '#aaaaaa';
            ctx4.fillRect(0, 0, canvas4.width, canvas4.height);
            ctx4.drawImage(canvas1, 0, 0);
            if (probeResult.matched) {
                ctx4.drawImage(canvas3, 55 * appliedScale, top);
                ctx4.drawImage(canvas3, 110 * appliedScale, startY * appliedScale - probeResult.height);
            }
        }
    }, [refreshCnt]);

    return <div>
        <div>
            <button onClick={() => setRefreshCnt(cnt => cnt + 1)}>Refresh</button>
        </div>
        <canvas key={refreshCnt + 1} id="canvas-1" width={140} height={140} />
        <canvas key={refreshCnt + 2} id="canvas-2" width={140} />
        <canvas key={refreshCnt + 3} id="canvas-3" width={140} />
        <hr />
        <canvas key={refreshCnt + 4} id="canvas-4" width={700} height={300} />
    </div>;
};