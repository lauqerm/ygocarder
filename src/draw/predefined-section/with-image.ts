
import { CanvasConst, NO_STICKER } from 'src/model';
import { drawAsset, drawWithStyle } from '../image';
import { clearCanvas, getFinishIterator, setTextStyle } from '../canvas-util';
import { CanvasTextStyle } from 'src/service';
import { createCanvas, scaleDrawCoordinate } from 'src/util';

const {
    width: CanvasWidth,
    finishTypeCardWidth,
    stickerSize,
} = CanvasConst;

export const drawStarContent = async ({
    ctx,
    globalScale,
    cardIcon,
    text,
    star,
    starAlignment = 'auto',
    style,
    useArtFinish,
    onStarDraw,
    loopArtFinish,
}: {
    ctx: CanvasRenderingContext2D | null | undefined,
    globalScale: number,
    cardIcon: string,
    text: string | null,
    star: string | number,
    starAlignment: string,
    style?: CanvasTextStyle,
    useArtFinish: boolean,
    onStarDraw: (coordinate: [number, number]) => Promise<void>,
    loopArtFinish: ReturnType<typeof getFinishIterator>,
}) => {
    const starWidth = 50;
    const startSpacing = 4;
    let normalizedStarCount = typeof star === 'string'
        ? star === '' ? 0 : 1
        : typeof star === 'number' ? star : 0;
    let totalWidth = starWidth * normalizedStarCount + startSpacing * (normalizedStarCount - 1);
    const baseline = 145;

    let alignment = 'right';
    if (['rank', 'negative-level'].includes(cardIcon)) alignment = 'left';
    alignment = starAlignment === 'auto'
        ? alignment
        : starAlignment;
    if (normalizedStarCount > 12) alignment = 'center';

    if (text && alignment === 'center') {
        normalizedStarCount = 0;
        totalWidth = 0;
    }

    /** Level / Rank 13 is center-aligned. */
    const leftEdge = alignment === 'center'
        ? (CanvasWidth + totalWidth) / 2
        : alignment === 'left'
            ? 85.9125 + totalWidth
            : 728.775;

    let offset = 0 - (starWidth + startSpacing);

    if (ctx && text && cardIcon !== 'st') {
        const fontSize = 50;
        const resetShadow = setTextStyle({ ctx, ...style, globalScale });
        ctx.textAlign = alignment === 'left' || alignment === 'right'
            ? alignment
            : 'left';
        ctx.font = `bold ${fontSize}px RoGSanSrfStd-Bd`;
        const offset = alignment === 'center'
            ? ctx.measureText(text).width / -2
            : alignment === 'left'
                ? startSpacing
                : (starWidth + startSpacing * 2) * -1;
        ctx.fillText(text, leftEdge + offset, baseline + fontSize * 0.9);
        ctx.textAlign = 'left';
        resetShadow();
    }

    const {
        canvas: starCanvas,
        context: starContext,
    } = createCanvas(CanvasWidth * globalScale, (baseline + starWidth) * globalScale);
    await Promise.all([...Array(normalizedStarCount)]
        .map(async () => {
            offset += (starWidth + startSpacing);
            let coordinate: [number, number] = [
                leftEdge - (starWidth + offset),
                baseline,
            ];
            await drawAsset(starContext, `subfamily/subfamily-${cardIcon}.png`, ...coordinate);
            return await onStarDraw(coordinate);
        })
    );
    if (loopArtFinish && useArtFinish) {
        const {
            canvas: starFinishCanvas,
            context: starFinishContext,
        } = createCanvas(CanvasWidth, (baseline + starWidth));
        starFinishContext.drawImage(starCanvas, 0, 0);
        await loopArtFinish(
            starFinishContext,
            'art',
            async (finishType) => {
                return await drawAsset(
                    starFinishContext,
                    `finish/finish-typeart-${finishType}.png`,
                    (CanvasWidth - finishTypeCardWidth) / 2, stickerSize,
                );
            },
        );
        starContext.globalCompositeOperation = 'source-in';
        starContext.drawImage(starFinishCanvas, 0, 0);
        ctx.drawImage(starCanvas, 0, 0);
    } else {
        ctx.drawImage(starCanvas, 0, 0);
    }
};

export const drawSticker = async ({
    ctx,
    sticker,
    globalScale,
    x, y,
}: {
    ctx: CanvasRenderingContext2D | null | undefined,
    sticker: string,
    globalScale: number,
    x: number,
    y: number,
}) => {
    if (!clearCanvas(ctx)) return;

    if (sticker === NO_STICKER) return Promise.resolve();
    ctx.scale(globalScale, globalScale);
    await drawAsset(ctx, `sticker/sticker-${sticker.toLowerCase()}.png`, x, y);
    ctx.resetTransform();
    return;
};

/** Duel terminal mark and Speed card mark. */
export const drawPredefinedMark = async ({
    canvas,
    globalScale,
    type,
    isPendulum,
    isLink,
    isDuelTerminalCard,
    isSpeedCard,
    bordered,
    textStyle,
}: {
    canvas: HTMLCanvasElement,
    globalScale: number,
    type: string,
    isPendulum: boolean,
    isLink: boolean,
    isDuelTerminalCard: boolean,
    isSpeedCard: boolean,
    bordered: boolean,
    textStyle?: CanvasTextStyle,
}) => {
    const ctx = canvas?.getContext('2d');

    if (!ctx) return;

    if (isDuelTerminalCard) {
        const coordinate: [number, number, number, number] = isPendulum
            ? [255, 1072, 175, 35]
            : isLink
                ? [151, 848, 216, 24]
                : [80, 843, 270, 30];

        await drawWithStyle(
            canvas,
            `text/text-duel-terminal-${type}${bordered ? '-bordered' : ''}.png`,
            ...scaleDrawCoordinate(coordinate, globalScale),
            globalScale,
            textStyle?.shadowColor ? { ...textStyle, blur: 3, x: 0, y: 0 } : textStyle,
        );
    }
    if (isSpeedCard) {
        const coordinate: [number, number, number, number] = isPendulum
            ? [255, 1084, 176.4, 25]
            : isLink
                ? [151, 854, 215.6, 22]
                : [80, 850, 245, 25];

        await drawWithStyle(
            canvas,
            `text/text-speed-duel-${type}${bordered ? '-bordered' : ''}.png`,
            ...scaleDrawCoordinate(coordinate, globalScale),
            globalScale,
            textStyle?.shadowColor ? { ...textStyle, blur: 3, x: 0, y: 0 } : textStyle,
        );
    }
};

export const drawLimitedEditionMark = async ({
    canvas,
    type,
    globalScale,
    isPendulum,
    isLink,
    isLegacyCard,
    widthOffset,
    bordered,
    textStyle,
}: {
    ctx: CanvasRenderingContext2D | null | undefined,
    canvas: HTMLCanvasElement,
    globalScale: number,
    type: string,
    isPendulum: boolean,
    isLink: boolean,
    isLegacyCard: boolean,
    /** When the creator text is too long, this mark must be compressed */
    widthOffset: number,
    bordered: boolean,
    textStyle?: CanvasTextStyle,
}) => {
    const coordinate: [number, number, number, number] = !isLegacyCard || isPendulum
        ? [145, 1123, 240 - widthOffset / globalScale, 37]
        : isLink
            ? [151, 846, 216, 36]
            : [80, 843, 240, 40];

    await drawWithStyle(
        canvas,
        `text/text-limited-edition-${type}${bordered ? '-bordered' : ''}.png`,
        ...scaleDrawCoordinate(coordinate, globalScale),
        globalScale,
        textStyle?.shadowColor ? { ...textStyle, blur: 3, x: 0, y: 0 } : textStyle,
    );
};

export const drawLinkRatingText = async (
    canvas: HTMLCanvasElement,
    linkMap: string[],
    style: CanvasTextStyle,
    globalScale: number,
) => {
    const ctx = canvas.getContext('2d');

    if (!ctx || !Array.isArray(linkMap)) return;

    await drawWithStyle(
        canvas,
        'link/link-text.png',
        ...scaleDrawCoordinate([600, 1080, 120, 30], globalScale),
        globalScale,
        style,
    );
    const resetStyle = setTextStyle({ ctx, ...style, globalScale });
    ctx.textAlign = 'right';
    ctx.scale(1.2, 1);
    ctx.font = `bold ${26.55 * globalScale}px RoGSanSrfStd-Bd`;
    ctx.fillText(`${linkMap.length}`, 622.75 * globalScale, 1105 * globalScale);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.textAlign = 'left';
    resetStyle();
};