import { CanvasConst } from 'src/model';

const {
    width: cardWidth,
    height: cardHeight,
} = CanvasConst;

export const createCanvas = (width = cardWidth, height = cardHeight) => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    return {
        canvas,
        ctx,
    };
};