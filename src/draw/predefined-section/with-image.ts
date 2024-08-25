
import { CanvasConst } from 'src/model';
import { drawAsset, drawAssetWithSize } from '../image';
import { clearCanvas } from '../canvas-util';

const {
    width: CanvasWidth,
} = CanvasConst;

export const drawStarIcon = async ({
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
            await drawAsset(ctx, `sub-family/subfamily-${cardIcon}.png`, ...coordinate);
            return await onStarDraw(coordinate);
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
    if (!clearCanvas(ctx)) return;

    if (sticker === 'no-sticker') return Promise.resolve();
    return drawAsset(ctx, `sticker/sticker-${sticker.toLowerCase()}.png`, 739.1438, 1110.938);
};

/** Duel terminal mark and Speed card mark */
export const drawPredefinedMark = async ({
    ctx,
    type,
    isPendulum,
    isLink,
    isDuelTerminalCard,
    isSpeedCard,
    bordered,
}: {
    ctx: CanvasRenderingContext2D | null | undefined,
    type: string,
    isPendulum: boolean,
    isLink: boolean,
    isDuelTerminalCard: boolean,
    isSpeedCard: boolean,
    bordered: boolean,
}) => {
    if (!ctx) return;

    if (isDuelTerminalCard) {
        const coordinate: [number, number, number, number] = isPendulum
            ? [250, 1087, 180, 20]
            : isLink
                ? [151, 848, 216, 24]
                : [80, 843, 270, 30];

        await drawAssetWithSize(ctx, `text/text-duel-terminal-${type}${bordered ? '-bordered' : ''}.png`, ...coordinate);
    }
    if (isSpeedCard) {
        const coordinate: [number, number, number, number] = isPendulum
            ? [250, 1090, 176.4, 18]
            : isLink
                ? [151, 855, 215.6, 22]
                : [80, 850, 245, 25];

        await drawAssetWithSize(ctx, `text/text-speed-duel-${type}${bordered ? '-bordered' : ''}.png`, ...coordinate);
    }
};

export const drawLinkRatingText = async (
    ctx?: CanvasRenderingContext2D | null,
    linkMap?: string[],
) => {
    if (!ctx || !Array.isArray(linkMap)) return;

    await drawAsset(ctx, 'link/link-text.png', 600, 1080);
    ctx.textAlign = 'right';
    ctx.scale(1.2, 1);
    ctx.font = 'bold 35.55px Yugioh Rush Duel Numbers V4';
    ctx.fillStyle = '#000000';
    ctx.fillText(`${linkMap.length}`, 623.36, 1105.01);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.textAlign = 'left';
};