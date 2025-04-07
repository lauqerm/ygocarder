export const bilateralFilter = (
    imageData: Uint8ClampedArray<ArrayBuffer | ArrayBufferLike>,
    width: number,
    height: number,
    diameter: number,
    sigmaColor: number,
    sigmaSpace: number,
) => {
    const output = new Uint8ClampedArray(width * height * 4);
    const halfD = Math.floor(diameter / 2);

    // Helper function to calculate the Gaussian weight for spatial distance
    function spatialWeight(x: number, y: number, cx: number, cy: number) {
        return Math.exp(-((x - cx) ** 2 + (y - cy) ** 2) / (2 * sigmaSpace ** 2));
    }

    // Helper function to calculate the Gaussian weight for color distance
    function colorWeight(c1: number, c2: number) {
        return Math.exp(-((c1 - c2) ** 2) / (2 * sigmaColor ** 2));
    }

    // Loop through each pixel in the image
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let rSum = 0, gSum = 0, bSum = 0, wSum = 0;

            // Apply the filter to a local neighborhood around the current pixel
            for (let ky = -halfD; ky <= halfD; ky++) {
                for (let kx = -halfD; kx <= halfD; kx++) {
                    const nx = x + kx;
                    const ny = y + ky;

                    // Check if the neighbor is within the image bounds
                    if (nx >= 0 && ny >= 0 && nx < width && ny < height) {
                        const centerPixel = (y * width + x) * 4;
                        const neighborPixel = (ny * width + nx) * 4;

                        // Get the color values for the center pixel and the neighbor pixel
                        const rCenter = imageData[centerPixel];
                        const gCenter = imageData[centerPixel + 1];
                        const bCenter = imageData[centerPixel + 2];
                        const rNeighbor = imageData[neighborPixel];
                        const gNeighbor = imageData[neighborPixel + 1];
                        const bNeighbor = imageData[neighborPixel + 2];

                        // Compute spatial and color weights
                        const spatial = spatialWeight(nx, ny, x, y);
                        const colorR = colorWeight(rCenter, rNeighbor);
                        const colorG = colorWeight(gCenter, gNeighbor);
                        const colorB = colorWeight(bCenter, bNeighbor);

                        const weight = spatial * colorR * colorG * colorB;

                        // Accumulate weighted sum of colors
                        rSum += rNeighbor * weight;
                        gSum += gNeighbor * weight;
                        bSum += bNeighbor * weight;
                        wSum += weight;
                    }
                }
            }

            // Normalize the result and assign it to the output image
            const outputPixel = (y * width + x) * 4;
            output[outputPixel] = rSum / wSum;
            output[outputPixel + 1] = gSum / wSum;
            output[outputPixel + 2] = bSum / wSum;
            output[outputPixel + 3] = imageData[outputPixel + 3];  // Preserve alpha channel
        }
    }

    return output;
};