export type ImageMemory = { src: string, width?: number, height?: number, offsetX?: number, offsetY?: number };
export type ImageDrawMemory = ImageMemory & { type: 'img', isInternalSource: boolean };
export type DrawMemory = {
    image: Record<string, ImageMemory>,
};