// import distanceTransform from 'distance-transform';
import ndarray from 'ndarray';
import { getDefaultHeightToNormalMapOption, HeightToNormalMap, SHADER_FILTER_TYPE } from './shader';
import { bilateralFilter } from './bilateral-filter';
import { distanceTransform } from './distance-transform';

export const angleToVector = (lightYaw: number, lightPitch: number) => {
    const angleRadian = (lightYaw + 90) * Math.PI / 180;
    const verticalAngleRadian = (lightPitch + 90) * Math.PI / 180;
    const x = Math.cos(angleRadian) * Math.cos(verticalAngleRadian);
    const y = Math.sin(angleRadian) * Math.cos(verticalAngleRadian);
    const z = Math.sin(verticalAngleRadian);

    return [Math.round(x * 100) / 100, Math.round(y * 100) / 100, Math.round(z * 100) / 100] as [number, number, number];
};
export const applyEmboss = ({
    inputCanvas,
    maxHeight = 8,
    lightColorVec = [255, 255, 255],
    /** Shine parallel with the surface, from rightside. */
    lightAngleVec,
    lightPitch,
    lightYaw,
    minIntensity = -1,
    maxIntensity = 1,
}: {
    inputCanvas: HTMLCanvasElement,
    maxHeight?: number,
    lightColorVec?: [number, number, number],
    lightAngleVec?: [number, number, number],
    lightPitch?: number,
    lightYaw?: number,
    minIntensity?: number,
    maxIntensity?: number,
}) => {
    const ctx = inputCanvas.getContext('2d');

    if (!ctx) return;

    const { width, height } = inputCanvas;
    /** @todo Typescript current does not recognize `willReadFrequently` option yet */
    const imageData = ctx.getImageData(0, 0, width, height, { willReadFrequently: true } as any);
    const data = imageData.data;

    const computedLightAngleVec: [number, number, number] = lightAngleVec
        ? lightAngleVec
        : (typeof lightPitch === 'number' && typeof lightYaw === 'number')
            ? angleToVector(lightPitch, lightYaw)
            : [1, 0, 0];
    const angleVecMagnitude = Math.sqrt(computedLightAngleVec[0] ** 2 + computedLightAngleVec[1] ** 2 + computedLightAngleVec[2] ** 2);
    const normalizedLightAngleVec = [
        computedLightAngleVec[0] / angleVecMagnitude,
        computedLightAngleVec[1] / angleVecMagnitude,
        computedLightAngleVec[2] / angleVecMagnitude
    ];

    if (!data) return;

    try {
        /**
         * Step 1: Create heightmap. We will run an algorithm that transform the flat text image into a heightmap. Pixels that is near the transparent background has lower height and vice versa. We use a distance transform algorithm for this.
         */
        /** Any pixel that is not transparent will be the foreground. */
        const validPixelList = new Uint8ClampedArray(width * height);
        for (let i = 0; i < data.length; i += 4) {
            if ((data[i] || data[i + 1] || data[i + 2] || data[i + 3])) {
                validPixelList[i / 4] = 0;
            } else {
                validPixelList[i / 4] = 1;
            }
        }
        const dtImageData = distanceTransform(ndarray(validPixelList, [height, width]));
        const row = dtImageData.shape[0], column = dtImageData.shape[1];
        const nextDtBitmap = new Uint8ClampedArray(width * height * 4);

        /** Heightmap will be resprented by a grayscale image. If we print it out, the lighter a pixel, the higher it is in the heightmap. */
        const heightIntensityRatio = Math.floor(255 / maxHeight);
        for (let rowIndex = 0; rowIndex < row; rowIndex++) {
            for (let colIndex = 0; colIndex < column; colIndex++) {
                const currentIndex = (rowIndex * width + colIndex) * 4;
                const heightValue = dtImageData.get(rowIndex, colIndex);

                nextDtBitmap[currentIndex] = heightValue * heightIntensityRatio;
                nextDtBitmap[currentIndex + 1] = heightValue * heightIntensityRatio;
                nextDtBitmap[currentIndex + 2] = heightValue * heightIntensityRatio;
                nextDtBitmap[currentIndex + 3] = heightValue === 0 ? 0 : 255;
            }
        }

        // if (Math.random() >= 0) return new ImageData(nextDtBitmap, width, height);
        const heightmapCanvas = document.createElement('canvas');
        heightmapCanvas.width = width;
        heightmapCanvas.height = height;
        heightmapCanvas.getContext('2d').putImageData(
            new ImageData(nextDtBitmap, width, height),
            0,
            0,
        );

        /**
         * Step 2: Create normal map. We will run another algorithm to transform height map into normal map, which each pixel hold the information about how light will reflect when shine into it.
         */
        const normalMapCanvas = document.createElement('canvas');
        normalMapCanvas.width = width;
        normalMapCanvas.height = height;
        const heightToNormalMapConverter = new HeightToNormalMap(getDefaultHeightToNormalMapOption(), normalMapCanvas);
        heightToNormalMapConverter.apply(heightmapCanvas, {
            blurSharp: 0,
            level: 9,
            strength: 2.5,
            invertedRed: false,
            invertedGreen: false,
            invertedSource: true,
            type: SHADER_FILTER_TYPE.SOBEL,
        });

        /**
         * Step 2b: We run the normal map through a simple bilateral filter to soften it, ensure the surface is smooth so we get a more even result.
         */
        const softenNormalMapCanvas = document.createElement('canvas');
        softenNormalMapCanvas.width = width;
        softenNormalMapCanvas.height = height;

        const softenNormalMapContext = softenNormalMapCanvas.getContext('2d');
        softenNormalMapContext.drawImage(
            normalMapCanvas,
            0,
            0,
            width,
            height,
        );
        const filteredData = bilateralFilter(
            softenNormalMapContext.getImageData(0, 0, width, height).data,
            width,
            height,
            9,
            70,
            20,
        );

        /**
         * Step 3: We shine the defined light into the normal map. The product between the normal vector and the light vector will produce a single number which is the light intensity of that pixel. After that we combine the color of light (affected by intensity) with the native color of the original image to produce desired result.
         * 
         * Even though in physical world the original image is not a light source and therefore not produce additive color with our light source. We ignore that to produce a more intuitive result. But also for the sake of an easy to control effect, we do not allow user to customize light color, and instead only allow pure white light (#ffffff).
         */
        const resultData = new Uint8ClampedArray(width * height * 4);
        for (let pixelCnt = 0; pixelCnt < data.length; pixelCnt += 4) {
            let nx = (filteredData[pixelCnt] / 127.5) - 1.0;
            let ny = (filteredData[pixelCnt + 1] / 127.5) - 1.0;
            let nz = (filteredData[pixelCnt + 2] / 127.5) - 1.0;
            const baseIntensity = nx * normalizedLightAngleVec[0]
                + ny * normalizedLightAngleVec[1]
                + nz * normalizedLightAngleVec[2];
            const enhancedIntensity = baseIntensity / 2 * (Math.abs(minIntensity) + Math.abs(maxIntensity));
            const intensity = Math.max(minIntensity, Math.min(enhancedIntensity, maxIntensity));

            /** Step 3b: We apply the original alpha channel into the result pixel to soften it, removing rough edges. */
            resultData[pixelCnt] = Math.round(data[pixelCnt] + lightColorVec[0] * intensity);
            resultData[pixelCnt + 1] = Math.round(data[pixelCnt + 1] + lightColorVec[1] * intensity);
            resultData[pixelCnt + 2] = Math.round(data[pixelCnt + 2] + lightColorVec[2] * intensity);
            resultData[pixelCnt + 3] = data[pixelCnt + 3];
        }

        return new ImageData(resultData, width, height);
    } catch (e) {
        console.error('Could not apply emboss effect', e);
        return null;
    }
};