
import { CanvasConst } from 'src/model';
import { drawFrom } from './image';
import { clearCanvas } from './canvas-util';

const {
    width: CanvasWidth,
} = CanvasConst;

export const drawCardIcon = async ({
    ctx,
    cardIcon,
    star,
    onStarDraw,
}: {
    ctx: CanvasRenderingContext2D | null | undefined,
    cardIcon: string,
    star: number,
    onStarDraw: (coordinate: [number, number]) => Promise<void>,
}) => {
    const starWidth = 50;
    const startSpacing = 4;
    const starCount = Math.min(13, star);
    const reverseAlign = ['rank', 'negative-level'].includes(cardIcon);
    const totalWidth = starWidth * starCount + startSpacing * (starCount - 1);
    /** Level 13 được canh giữa thay vì canh từ một trong hai lề */
    const leftEdge = starCount <= 12
        ? reverseAlign
            ? 85.9125 - starWidth
            : 728.775
        : reverseAlign
            ? (CanvasWidth - totalWidth) / 2 - starWidth
            : (CanvasWidth - totalWidth) / 2 + totalWidth;

    let offset = 0 - (starWidth + startSpacing);
    return Promise.all([...Array(starCount)]
        .map(async () => {
            offset += (starWidth + startSpacing);
            let coordinate: [number, number] = [
                leftEdge + (starWidth + offset) * (reverseAlign ? 1 : -1),
                145,
            ];
            await drawFrom(ctx, `/asset/image/sub-family/subfamily-${cardIcon}.png`, ...coordinate);
            return onStarDraw(coordinate);
        })
    );
};

export const drawSticker = async ({
    ctx,
    sticker,
}: {
    ctx: CanvasRenderingContext2D | null | undefined,
    sticker: string,
}) => {
    clearCanvas(ctx);

    if (sticker === 'no-sticker') return Promise.resolve();
    return drawFrom(ctx, `/asset/image/sticker/sticker-${sticker.toLowerCase()}.png`, 739.1438, 1110.938);
};