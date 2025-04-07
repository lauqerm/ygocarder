If you are looking for V1, please visit [ygocarder-v1 repo](https://github.com/lauqerm/ygocarder-v1).

## YGO Carder

* Template provided by: [Grezar](https://www.deviantart.com/grezar), [9558able](https://www.deviantart.com/9558able), [SlackerMagician](https://www.deviantart.com/slackermagician) and [icycatelf](https://www.deviantart.com/icycatelf).
* GUI by me, a.k.a @lauqerm

### Thank you

Once again, my deepest gratitude goes to [Grezar](https://www.deviantart.com/grezar), [9558able](https://www.deviantart.com/9558able), [SlackerMagician](https://www.deviantart.com/slackermagician) and [icycatelf](https://www.deviantart.com/icycatelf), for allowing me to use their templates. Their hard work is the reason this project is possible in the first place.

### My goal

Create an easy-to-use GUI to make Yu-Gi-Oh! cards, for anyone who cannot afford Photoshop or the skill needed to use it.

Even though my app supports conversion between cards made by this app and cards made by other vendors such as YGOPro, Dueling Nexus and Neo Card Maker, I do not have any affiliation with them.

### What does it provide?

To put it more correctly: what advantage does my app offer over a dozen Yu-Gi-Oh! card-maker apps out there? In short, there are just 2 things:
* The UI - Most of the changes can be made with just a single click or keystroke. Other apps will need you to constantly cycle through multiple dropdowns.
* Automatic text compression - You may notice modern Yu-Gi-Oh! cards try to compress words to avoid using smaller font sizes. YGO Carder can replicate that behavior rather automatically, while other apps will just simply keep reducing font size and adding new lines, or provide you with a manual slider without solving any edge cases.

Other advantages such as foils and additional card frames come from the template of use, so again, big shout out to template owners who put their time and effort into creating them.

### What does it NOT provide?

The app of course has multiple shortcomings, many of them are by design, while others may become future plans:
* No template for Rush Duel - Template for Rush Duel is already available, so maybe I will revisit this idea in the future.
* No "ultra" card size - While some apps may offer 4K resolution for their card, this app does not. While I think the current card resolution of my app is decently enough, you can always seek for professional up-scale method. Up-scaling is a resource-intense operation that requires a powerful server to do which I cannot provide, while most of the user devices will hang for a good few minutes trying to run it, so there is no out for this problem in the near future.
* No remote saving - This app does not have a dedicated server for such a feature, but thanks to that I can serve the app for a long time completely free without the need for any financial support. The app only provides very simple card information export and import, and your card art should come from online links.

### Can I use your source code in my site?

Yes, you are free to fork it and do whatever, just don't claim it is yours. Also, I will be extra thankful if you keep the credit for me and the template makers.

If you want to modify app's assets, better contact template makers and ask for permission yourself.

You may also contact me through [Reddit](https://www.reddit.com/user/lauqerm/), but I rarely respond in time though, I only visit reddit once in a while.

### How to run

If you are already familiar with a React app, just install all the package with `npm install` and run it with `npm start`.

1. OpenCV.js
OpenCV.js is the JavaScript port of the well-known OpenCV library. It provides a wide range of image processing functions, including edge detection, convolution, and filtering. It’s a great choice if you're familiar with OpenCV’s functionality.

Key features:

Image manipulation (filtering, transformation)

Edge detection (Sobel, Canny, etc.)

Contour finding, morphology operations

Camera and video processing

Getting Started: You can use OpenCV.js in the browser or Node.js. It can be imported via a CDN or installed via npm.

bash
Copy
npm install opencv.js
Example (Sobel Edge Detection):

javascript
Copy
const cv = require('opencv.js');

function sobelEdgeDetection(imageData) {
    let mat = cv.matFromImageData(imageData);
    let gray = new cv.Mat();
    cv.cvtColor(mat, gray, cv.COLOR_RGBA2GRAY);
    let grad_x = new cv.Mat();
    let grad_y = new cv.Mat();
    cv.Sobel(gray, grad_x, cv.CV_64F, 1, 0, 3);
    cv.Sobel(gray, grad_y, cv.CV_64F, 0, 1, 3);
    let magnitude = new cv.Mat();
    cv.magnitude(grad_x, grad_y, magnitude);
    return magnitude;
}
Link: OpenCV.js GitHub

2. P5.js
P5.js is a powerful library for creative coding, especially in the context of visual arts and interactive graphics. It provides basic functions for 2D and 3D graphics, and although it isn't as focused on image processing as OpenCV, it can be extended for image manipulation tasks.

Key features:

Pixel manipulation (e.g., get(), set())

Filtering and image transformations (e.g., grayscale, contrast)

Basic edge detection can be done manually with pixel manipulation.

Example (Basic Edge Detection):

javascript
Copy
function setup() {
    createCanvas(400, 400);
    let img = loadImage('path/to/your/image.jpg', img => {
        img.loadPixels();
        for (let y = 1; y < img.height-1; y++) {
            for (let x = 1; x < img.width-1; x++) {
                let i = (x + y * img.width) * 4;
                let left = (x-1 + y * img.width) * 4;
                let right = (x+1 + y * img.width) * 4;
                let top = (x + (y-1) * img.width) * 4;
                let bottom = (x + (y+1) * img.width) * 4;
                
                let dx = dist(img.pixels[i], img.pixels[left], img.pixels[i+1], img.pixels[right]);
                let dy = dist(img.pixels[i], img.pixels[top], img.pixels[i+1], img.pixels[bottom]);
                let edge = dx + dy;
                img.pixels[i] = img.pixels[i+1] = img.pixels[i+2] = edge;
            }
        }
        img.updatePixels();
        image(img, 0, 0);
    });
}
Link: P5.js Website

3. TensorFlow.js
TensorFlow.js is a JavaScript library for machine learning, but it can also be used for advanced image processing tasks by manipulating tensor data. It's not as focused on traditional image processing (like OpenCV), but if you're working on neural networks or want to use machine learning to enhance image data, this might be useful.

Key features:

Image classification, object detection (via pre-trained models)

Tensor manipulation and math operations (similar to NumPy)

Can be used for advanced image transformations

Link: TensorFlow.js Website

4. Jimp
Jimp is a JavaScript library specifically designed for image processing in Node.js. It's simpler than OpenCV.js but provides a range of functions like resizing, transforming, and applying effects to images.

Key features:

Image manipulation (resize, crop, rotate)

Grayscale conversion, brightness adjustments

Pixel-based operations

Example (Grayscale Conversion):

javascript
Copy
const Jimp = require('jimp');

Jimp.read('image.jpg').then(image => {
    image
        .grayscale()
        .write('grayscale_image.jpg');
}).catch(err => {
    console.error(err);
});
Link: Jimp GitHub

5. Glpk.js
Glpk.js is a library that enables linear programming and optimization problems in JavaScript. While not directly image-processing-focused, it may be useful if you need to perform complex mathematical operations related to image transformations.

Key features:

Linear programming and optimization (may be useful for custom algorithms in image processing)

Mathematical computations similar to NumPy

Link: Glpk.js GitHub

6. Math.js
Math.js is a comprehensive mathematics library for JavaScript, similar to NumPy in Python. It provides an extensive set of functions for algebra, calculus, and matrix operations, which are useful for image processing and numerical computation.

Key features:

Matrix and linear algebra operations

Customizable math functions

Symbolic algebra and computation

Example (Matrix Operations):

javascript
Copy
const math = require('mathjs');

const matrixA = math.matrix([[1, 2], [3, 4]]);
const matrixB = math.matrix([[5, 6], [7, 8]]);
const result = math.add(matrixA, matrixB);
console.log(result);
Link: Math.js Website

function bilateralFilter(imageData, width, height, d, sigmaColor, sigmaSpace) {
    const output = new Uint8ClampedArray(imageData);
    const halfD = Math.floor(d / 2);

    // Helper function to calculate the Gaussian weight for spatial distance
    function spatialWeight(x, y, cx, cy) {
        return Math.exp(-((x - cx) * (x - cx) + (y - cy) * (y - cy)) / (2 * sigmaSpace * sigmaSpace));
    }

    // Helper function to calculate the Gaussian weight for color distance
    function colorWeight(c1, c2) {
        return Math.exp(-((c1 - c2) * (c1 - c2)) / (2 * sigmaColor * sigmaColor));
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
                        const centerIdx = (y * width + x) * 4;
                        const neighborIdx = (ny * width + nx) * 4;

                        // Get the color values for the center pixel and the neighbor pixel
                        const rCenter = imageData[centerIdx];
                        const gCenter = imageData[centerIdx + 1];
                        const bCenter = imageData[centerIdx + 2];
                        const rNeighbor = imageData[neighborIdx];
                        const gNeighbor = imageData[neighborIdx + 1];
                        const bNeighbor = imageData[neighborIdx + 2];

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
            const outputIdx = (y * width + x) * 4;
            output[outputIdx] = rSum / wSum;
            output[outputIdx + 1] = gSum / wSum;
            output[outputIdx + 2] = bSum / wSum;
            output[outputIdx + 3] = imageData[outputIdx + 3];  // Preserve alpha channel
        }
    }

    return output;
}

// Usage example (assuming imageData is the pixel data of an image, and width/height are the dimensions)
const imageData = ... // Get the image data (from a canvas or image file)
const width = 256; // Example width
const height = 256; // Example height
const d = 5;  // Diameter of the neighborhood
const sigmaColor = 75;  // Color space standard deviation
const sigmaSpace = 75;  // Spatial space standard deviation

const filteredImage = bilateralFilter(imageData, width, height, d, sigmaColor, sigmaSpace);
