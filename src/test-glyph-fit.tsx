import { useEffect, useState } from 'react';

const threshold = 25;
const mutatePixel = (layerData: ImageDataArray, pixel: number, r?: number, g?: number, b?: number, a?: number) => {
    layerData[pixel + 0] = r ?? 0;
    layerData[pixel + 1] = g ?? 0;
    layerData[pixel + 2] = b ?? 0;
    layerData[pixel + 3] = a ?? 0;
};
const probe = (canvas: HTMLCanvasElement, probeX: number, debug = false) => {
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
    for (let x = 0; x < height2; x++) {
        for (let y = probeX; y <= probeX + probeThreshold; y++) {
            const pixel = (x * width2 + y) * 4;
            if (layerData[pixel + 3] > threshold) {
                if (debug) mutatePixel(layerData, pixel, 255, 0, 0, 255);
                probedTop = x;
                break;
            } else {
                if (debug) mutatePixel(layerData, pixel, 0, 0, 255, 255);
            }
        }
        if (probedTop > -1) break;
    }
    let probedBottom = -1;
    for (let x = height2; x >= 0; x--) {
        for (let y = probeX; y <= probeX + probeThreshold; y++) {
            const pixel = (x * width2 + y) * 4;
            if (layerData[pixel + 3] > threshold) {
                if (debug) mutatePixel(layerData, pixel, 255, 0, 0, 255);
                probedBottom = x;
                break;
            } else {
                if (debug) mutatePixel(layerData, pixel, 0, 0, 255, 255);
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
        const size = 140;
        const startX = 20;
        const startY = 100;
        const scaleX = 1.0;
        /** Step 1: Find the top and bottom boundaries of the letter */
        const baseCanvas = document.getElementById('canvas-1') as HTMLCanvasElement | null;
        if (!baseCanvas) return;

        baseCanvas.width = size * appliedScale;
        baseCanvas.height = size * appliedScale;
        const baseCtx = baseCanvas.getContext('2d');
        if (!baseCtx) return;

        baseCtx.scale(scaleX, 1);
        baseCtx.font = `${appliedScale * 91}px MatrixBoldSmallCaps, Times New Roman`;
        baseCtx.fillText('N', startX * appliedScale, startY * appliedScale);

        const width1 = size * appliedScale;
        const height1 = size * appliedScale;
        const imageData1 = baseCtx.getImageData(0, 0, width1, height1);
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
        baseCtx.putImageData(new ImageData(layerData1, imageData1.width, imageData1.height), 0, 0);
        const height = bottom - top + 1;
        console.log('🚀 ~ TestGlyphFit ~ initial:', top, bottom, height);

        const baseCanvas2 = document.getElementById('canvas-2') as HTMLCanvasElement | null;
        if (!baseCanvas2) return;

        baseCanvas2.height = bottom - top + 1;
        const baseCtx2 = baseCanvas2.getContext('2d');
        if (!baseCtx2) return;

        baseCtx2.scale(scaleX, 1);
        baseCtx2.font = `${appliedScale * 91}px MatrixBoldSmallCaps, Times New Roman`;
        baseCtx2.fillText('N', startX * appliedScale, (startY - top - 1) * appliedScale);

        /** Step 2: Add probe lines to find abnomality in height1 and position */
        const probeX = 29 * appliedScale * scaleX;
        const initialProbeResult = probe(baseCanvas2, probeX);
        const expectedHeight = 50;
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
        const baseCanvas3 = document.getElementById('canvas-3') as HTMLCanvasElement | null;
        if (!baseCanvas3) return;

        const baseCtx3 = baseCanvas3.getContext('2d');
        if (!baseCtx3) return;

        baseCtx3.scale(scaleX, 1);
        let probeResult = { top: -1, bottom: -1, height: 0 };
        for (let i = 1; i < 5; i++) {
            baseCanvas3.height = baseCanvas2.height + i * probeVerdict;
            baseCtx3.clearRect(0, 0, baseCanvas3.width, baseCanvas3.height);
            baseCtx3.drawImage(baseCanvas2, 0, 0, baseCanvas2.width, baseCanvas2.height, 0, 0, baseCanvas3.width, baseCanvas3.height);
            probeResult = probe(baseCanvas3, probeX, true);
            console.log('🚀 ~ TestGlyphFit ~ probeResult:', probeResult);
            if (probeResult.height === expectedHeight) break;
        }
        console.log('🚀 ~ TestGlyphFit ~ probeResult:', probeResult);
    }, [refreshCnt]);

    return <div>
        <div>
            <button onClick={() => setRefreshCnt(cnt => cnt + 1)}>Refresh</button>
        </div>
        <canvas key={refreshCnt + 1} id="canvas-1" width={140} height={140} />
        <canvas key={refreshCnt + 2} id="canvas-2" width={140} />
        <canvas key={refreshCnt + 3} id="canvas-3" width={140} />
    </div>;
};