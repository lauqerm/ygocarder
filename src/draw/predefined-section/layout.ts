import {
    ArrowPositionMap,
    ArtFinishMap,
    BackgroundType,
    CanvasConst,
    CardOpacity,
    Foil,
    FrameDyeList,
    getArtCanvasCoordinate,
    NO_ATTRIBUTE,
    OtherFinish,
    PendulumSize,
    PendulumSizeMap,
    PendulumSizeMapException,
} from 'src/model';
import { drawAsset, drawAssetWithSize, drawWithStyle } from '../image';
import { createCanvas, dyeCanvas, getCardIconFromFrame, resolveFrameStyle } from 'src/util';
import { drawStarContent } from './with-image';
import { CanvasTextStyle } from 'src/service';
import { getFinishIterator } from '../canvas-util';
import { applyAlphaMask, MaskPromise } from './mask';

export const baseDrawLinkArrowMap = async (
    ctx: CanvasRenderingContext2D,
    globalScale: number,
    linkMap: string[],
    positionType: keyof typeof ArrowPositionMap,
    boundless: boolean,
) => {
    if (!ctx) return;
    ctx.scale(globalScale, globalScale);
    await Promise.all<any>([1, 2, 3, 4, 6, 7, 8, 9]
        .map(async entry => {
            const { left, top, height, width } = ArrowPositionMap[positionType][entry - 1];
            const isActive = linkMap.includes(`${entry}`);
            const baseLink = `link/link-inactive-${entry}`;
            const activeLink = `link/link-active-${entry}`;
            const coordinate = [left, top, width, height] as const;

            await drawAssetWithSize(ctx, `${baseLink}-base${boundless ? '-full' : ''}.png`, ...coordinate);
            await drawAssetWithSize(ctx, `${baseLink}-core.png`, ...coordinate);
            if (isActive) {
                await drawAssetWithSize(ctx, `${activeLink}-base.png`, ...coordinate);
                return drawAssetWithSize(ctx, `${activeLink}-core.png`, ...coordinate);
            } else return;
        })
    );
    ctx.resetTransform();
};
export const baseDrawLinkMapFoil = async (
    ctx: CanvasRenderingContext2D,
    globalScale: number,
    foil: string,
    withBorder: boolean,
    positionType: keyof typeof ArrowPositionMap,
) => {
    if (!ctx) return;
    if (foil === 'normal') return;

    ctx.scale(globalScale, globalScale);
    if (withBorder) {
        await drawAsset(ctx, `link/link-overlay-arrow-${foil}.png`, 0, 175);
    } else {
        await Promise.all<any>([1, 2, 3, 4, 6, 7, 8, 9]
            .map(async entry => {
                const { left, top, height, width } = ArrowPositionMap[positionType][entry - 1];
                const coordinate = [left, top, width, height] as const;

                await drawAssetWithSize(ctx, `link/link-overlay-${entry}-${foil}.png`, ...coordinate);
            })
        );
    }
    ctx.resetTransform();
};

const {
    width: cardWidth,
    height: cardHeight,
    topToPendulumStructure,
    topToPendulumStructureFrame,
    pendulumIconFrameHeight,
    pendulumIconFrameWidth,
    pendulumFrameHeight,
    pendulumFrameWidth,
    attributeSize,
    attributeX,
    attributeY,
    finishTypeCardWidth,
    stickerSize,
} = CanvasConst;
/** Various function used to draw the layout of a card is abstracted to this factory. */
export const getLayoutDrawFunction = ({
    canvas,
    artworkCanvas,
    backgroundCanvas,
    globalScale,
    format,
    hasBackground,
    frame, leftFrame, pendulumFrame, rightFrame, pendulumRightFrame,
    dyeList,
    effectBackground, pendulumEffectBackground,
    backgroundType,
    cardIcon,
    attribute,
    star,
    foil,
    pendulumSize,
    opacity,
    isLink, isSpeedSkill, isXyz,
    isPendulum,
    pendulumFrameTypeMap,
    otherFinish,
    loopFinish,
    loopArtFinish,
}: {
    canvas: HTMLCanvasElement,
    artworkCanvas: HTMLCanvasElement | null,
    backgroundCanvas: HTMLCanvasElement | null,
    globalScale: number,
    format: string,
    frame: string, leftFrame: string, pendulumFrame: string, rightFrame: string, pendulumRightFrame: string,
    dyeList: FrameDyeList,
    effectBackground: string, pendulumEffectBackground: string,
    hasBackground: boolean,
    backgroundType: BackgroundType,
    cardIcon: string,
    attribute: string,
    star: number | string,
    foil: Foil,
    pendulumSize: PendulumSize,
    opacity: CardOpacity,
    isXyz: boolean, isSpeedSkill: boolean, isLink: boolean,
    isPendulum: boolean,
    pendulumFrameTypeMap: { blue: 'normal' | 'scaleless', red: 'normal' | 'scaleless' },
    otherFinish: OtherFinish,
    loopFinish: (
        ctx?: CanvasRenderingContext2D | null,
        name?: string,
        caller?: (finishType: string) => Promise<any>,
    ) => Promise<void>,
    loopArtFinish: ReturnType<typeof getFinishIterator>,
}) => {
    const ctx = canvas.getContext('2d');
    const {
        artBorder: keepArtBorder,
        nameBorder,
        body: opacityBody,
        name: opacityName,
        pendulum: opacityPendulum,
        text: opacityText,
        boundless,
    } = opacity;
    const {
        artX,
        artY,
        artFrameX,
        artFrameY,
        artFrameHeight,
        artFrameWidth,
        artFinishX,
        artFinishY,
        artWidth,
        artRatio,
    } = getArtCanvasCoordinate(isPendulum, opacity, undefined, pendulumSize);
    const {
        frameType,
        effectBoxOffsetY,
        pendulumBoxX, pendulumBoxY, pendulumBoxWidth, pendulumBoxHeight,
        pendulumBoxOffsetY,
        artlessFrameY,
    } = PendulumSizeMap[pendulumSize];
    const artBorder = opacityBody > 0 ? true : keepArtBorder;
    const artBoxY = 170, artBoxX = 60;
    const effectBoxY = 860, effectBoxX = 35;
    const backgroundEffectBoxY = effectBoxY + 25, backgroundEffectBoxX = effectBoxX + 19;
    const backgroundEffectBoxWidth = 705, backgroundEffectBoxHeight = 231;

    const hasFoil = foil !== 'normal';
    const frameBorderType = isXyz || isSpeedSkill
        ? frame
        : 'normal';
    const nameBorderTypeList = frame === 'synchro'
        ? ['normal', 'xyz', 'xyz', 'xyz', 'xyz'] /** This produce more accurate effect */
        : [frameBorderType];
    const applyArtFinish = !boundless && artBorder;

    const resolvedLayoutStyle = resolveFrameStyle(
        {
            frame,
            topLeftFrame: leftFrame,
            topRightFrame: rightFrame,
            bottomLeftFrame: pendulumFrame,
            bottomRightFrame: pendulumRightFrame,
            effectBackground: effectBackground,
            pendulumEffectBackground: pendulumEffectBackground,
        },
        isPendulum,
    );
    const {
        topLeftFrame,
        topRightFrame,
        bottomLeftFrame,
        bottomRightFrame,
        effectBackground: resolvedEffectBackground,
        pendulumEffectBackground: resolvedPendulumEffectBackground,
    } = resolvedLayoutStyle;

    const resultAPI = {
        /** Main frame consists of top half and bottom half (for pendulum-like) card. */
        drawFrame: async () => {
            if (!ctx) return;

            /** Combine layer frame here */
            const { ctx: topFrameCtx, canvas: topFrameCanvas } = createCanvas();
            await drawAsset(topFrameCtx, `frame/frame-${topLeftFrame}.png`, 0, 0);
            const { canvas: dyedTopFrameCanvas, ctx: dyedTopFrameCtx } = dyeCanvas(topFrameCanvas, dyeList[0]);
            if (topLeftFrame !== topRightFrame || dyeList[0] !== '' || dyeList[1] !== '') {
                const topRightCanvas = await applyAlphaMask(
                    `frame/frame-${topRightFrame}.png`,
                    await MaskPromise.topRight,
                    cardWidth,
                    cardHeight,
                );
                const { canvas: dyedTopRightCanvas } = dyeCanvas(topRightCanvas, dyeList[1]);
                dyedTopFrameCtx.drawImage(dyedTopRightCanvas, 0, 0);
            }

            const { ctx: bottomFrameCtx, canvas: bottomFrameCanvas } = createCanvas();
            await drawAsset(bottomFrameCtx, `frame-pendulum/frame-pendulum-${bottomLeftFrame}.png`, 0, 0);
            const { canvas: dyedBottomFrameCanvas, ctx: dyedBottomFrameCtx } = dyeCanvas(bottomFrameCanvas, dyeList[2]);
            if (bottomLeftFrame !== bottomRightFrame || dyeList[2] !== '' || dyeList[3] !== '') {
                /** What is this?
                 * 
                 * Because the "bottom left" frame is not actually bottom, but both bottom left and bottom right with transparency. If we draw it first, then draw our "bottom right" frame on top of it, it will mixed with the bottom left frame (because both contains transparency), instead of replacing it, create an unintended side effect. Therefore we cut the part that may cause mixing color from the bottom left frame, before drawing the bottom right part.
                 */
                dyedBottomFrameCtx.clearRect(714, 0, 99, cardHeight);
                const bottomRightCanvas = await applyAlphaMask(
                    `frame/frame-${bottomRightFrame}.png`,
                    await MaskPromise.bottomRight,
                    cardWidth,
                    cardHeight,
                );
                const { canvas: dyedBottomRightCanvas } = dyeCanvas(bottomRightCanvas, dyeList[3]);
                dyedBottomFrameCtx.drawImage(dyedBottomRightCanvas, 0, 0);
            }

            ctx.globalAlpha = opacityBody / 100;
            ctx.scale(globalScale, globalScale);
            /** Leave empty space for card art */
            if (isPendulum) {
                dyedTopFrameCtx.clearRect(artFrameX, artFrameY, artFrameWidth, artFrameHeight);
                dyedBottomFrameCtx.clearRect(artFrameX, artFrameY, artFrameWidth, artFrameHeight);
            }
            /** Start assembling the canvas */
            ctx.drawImage(dyedTopFrameCanvas, 0, 0);
            ctx.drawImage(dyedBottomFrameCanvas, 0, 0);
            ctx.resetTransform();

            /** Check for background that replace the frame here */
            if (!hasBackground || !backgroundCanvas || backgroundType !== 'frame') {
                ctx.globalAlpha = 1;
                return;
            }

            const { width: backgroundWidth, height: backgroundHeight } = backgroundCanvas;
            const clonedCanvas = backgroundCanvas.cloneNode() as HTMLCanvasElement | null;
            const clonedCanvasCtx = clonedCanvas?.getContext('2d');
            if (!clonedCanvas || !clonedCanvasCtx) {
                ctx.globalAlpha = 1;
                return;
            }

            /** Clone background to create a new frame */
            clonedCanvas.width = cardWidth * globalScale;
            clonedCanvas.height = cardHeight * globalScale;
            clonedCanvasCtx.drawImage(
                backgroundCanvas,
                0, 0, backgroundWidth, backgroundHeight,
                0, 0, cardWidth * globalScale, cardHeight * globalScale,
            );
            ctx.drawImage(
                clonedCanvas,
                0, 0,
                globalScale * cardWidth, globalScale * cardHeight,
                0, 0,
                globalScale * cardWidth, globalScale * cardHeight,
            );
            ctx.globalAlpha = 1;
        },
        /** Draw card artwork is synchronous because the image is already loaded from cropper's canvas. */
        drawCardArt: (
            externalCtx = ctx,
        ) => {
            if (!artworkCanvas || !externalCtx) return;
            const { width: imageWidth, height: imageHeight } = artworkCanvas;

            if (imageHeight <= 0) return;
            externalCtx.drawImage(
                artworkCanvas,
                0, 0,
                imageWidth, imageHeight,
                globalScale * artX, globalScale * artY,
                globalScale * artWidth, globalScale * artWidth / (imageWidth / imageHeight),
            );
        },
        drawBackground: async (
            externalCtx = ctx,
            hasArtBorder = false,
        ) => {
            if (!backgroundCanvas || !externalCtx || !hasBackground) return;
            const { width: backgroundWidth, height: backgroundHeight } = backgroundCanvas;

            if (backgroundHeight <= 0) return;

            const {
                artX,
                artY,
                artWidth,
                artFrameWidth,
                artFrameX,
                artFrameY,
                ratio,
                artRatio,
            } = getArtCanvasCoordinate(
                isPendulum,
                opacity,
                backgroundType,
                pendulumSize,
            );
            externalCtx.drawImage(
                backgroundCanvas,
                0, 0,
                backgroundWidth, backgroundHeight,
                globalScale * artX, globalScale * artY,
                globalScale * artWidth, globalScale * artWidth / ratio,
            );
            const backgroundFinish = otherFinish[3] ?? 'normal';
            if (backgroundFinish !== 'normal' && hasArtBorder) {
                const loopBackgroundFinish = getFinishIterator([backgroundFinish], ArtFinishMap);
                await loopBackgroundFinish(
                    externalCtx,
                    'art',
                    async type => drawAssetWithSize(
                        externalCtx,
                        `finish/art-finish-${type}.png`,
                        globalScale * artFrameX, globalScale * artFrameY,
                        globalScale * artFrameWidth, globalScale * artFrameWidth / artRatio,
                    ),
                );
            }
        },
        drawAttribute: async () => {
            if (!ctx) return;
            ctx.scale(globalScale, globalScale);
            const {
                canvas: attributeCanvas,
                ctx: attributeCtx,
            } = createCanvas(cardWidth * globalScale, (attributeY + attributeSize) * globalScale);
            await drawAsset(
                attributeCtx,
                `attribute/attr-${format}-${attribute.toLowerCase()}.png`,
                attributeX, attributeY,
            );
            const attributeFinish = otherFinish[0] ?? 'normal';
            if (attributeFinish !== 'normal') {
                const loopAttributeFinish = getFinishIterator([attributeFinish], ArtFinishMap);
                const {
                    canvas: attributeFinishCanvas,
                    ctx: attributeFinishCtx,
                } = createCanvas(cardWidth, (attributeY + attributeSize));
                attributeFinishCtx.drawImage(attributeCanvas, 0, 0);
                await loopAttributeFinish(
                    attributeFinishCtx,
                    'art',
                    async (finishType) => {
                        return await drawAsset(
                            attributeFinishCtx,
                            `finish/finish-typeart-${finishType}.png`,
                            (cardWidth - finishTypeCardWidth) / 2, stickerSize,
                        );
                    },
                );
                attributeCtx.globalCompositeOperation = 'source-in';
                attributeCtx.drawImage(attributeFinishCanvas, 0, 0);
                ctx.drawImage(attributeCanvas, 0, 0);
            } else {
                ctx.drawImage(attributeCanvas, 0, 0);
            }
            ctx.resetTransform();
        },
        drawStar: async ({ style, starAlignment }: { style?: CanvasTextStyle, starAlignment: string }) => {
            const normalizedCardIcon = cardIcon === 'auto' ? getCardIconFromFrame(frame) : cardIcon;

            if (!ctx) return;
            ctx.scale(globalScale, globalScale);
            const starFinish = otherFinish[1] ?? 'normal';
            const loopStarFinish = starFinish !== 'normal' ? getFinishIterator([starFinish], ArtFinishMap) : undefined;
            await drawStarContent({
                ctx,
                cardIcon: normalizedCardIcon,
                text: typeof star === 'string' ? star : null,
                star,
                starAlignment,
                style,
                globalScale,
                onStarDraw: async coordinate => {
                    return normalizedCardIcon === 'st'
                        ? Promise.resolve()
                        : await loopFinish(
                            ctx,
                            'star',
                            async type => drawAsset(ctx, `finish/finish-${type}-star.png`, ...coordinate),
                        );
                },
                loopStarFinish,
            });
            ctx.resetTransform();
        },
        drawPendulumScaleIcon: async () => {
            if (!ctx) return;
            const {
                canvas: pendulumIconCanvas,
                ctx: pendulumIconCtx,
            } = createCanvas(pendulumIconFrameWidth, pendulumIconFrameHeight);
            await drawAsset(pendulumIconCtx, `frame-pendulum/pendulum-scale-${pendulumSize}.png`, 0, 0);

            if (pendulumFrameTypeMap.blue === 'scaleless') {
                pendulumIconCtx.clearRect(0, 0, pendulumIconFrameWidth / 2, pendulumIconFrameHeight);
            }
            if (pendulumFrameTypeMap.red === 'scaleless') {
                pendulumIconCtx.clearRect(pendulumIconFrameWidth / 2, 0, pendulumIconFrameWidth / 2, pendulumIconFrameHeight);
            }

            ctx.scale(globalScale, globalScale);
            ctx.drawImage(pendulumIconCanvas, 0, 750);
            ctx.resetTransform();
        },
        drawStatBorder: async (style: CanvasTextStyle) => {
            if (!ctx) return;
            ctx.scale(globalScale, globalScale);
            await drawWithStyle(
                canvas,
                'frame/frame-stat-border.png',
                0, 1070,
                813, 20,
                globalScale,
                style,
            );
            ctx.resetTransform();
        },

        /** @summary BACKGROUND section */

        drawNameBackground: async () => {
            if (!ctx) return;

            ctx.scale(globalScale, globalScale);
            const { ctx: nameBackgroundCtx, canvas: nameBackgroundCanvas } = createCanvas(cardWidth, topToPendulumStructure);
            await drawAsset(nameBackgroundCtx, `background/background-name-${topLeftFrame}.png`, 0, 0);
            const {
                canvas: dyedLeftNameCanvas,
                ctx: dyedLeftNameCtx
            } = dyeCanvas(nameBackgroundCanvas, dyeList[0]);
            if (topLeftFrame !== topRightFrame || dyeList[0] !== '' || dyeList[1] !== '') {
                const nameRightCanvas = await applyAlphaMask(
                    `background/background-name-${topRightFrame}.png`,
                    await MaskPromise.name,
                    cardWidth,
                    topToPendulumStructure,
                );
                const dyedRightNameCanvas = dyeCanvas(nameRightCanvas, dyeList[1]).canvas;
                dyedLeftNameCtx.drawImage(dyedRightNameCanvas, 0, 0);
            }
            ctx.globalAlpha = opacityName / 100;
            ctx.drawImage(dyedLeftNameCanvas, 0, 0);
            ctx.globalAlpha = 1;
            ctx.resetTransform();
        },
        /** Background is based on bottom frame. This function draws both background for pendulum part and normal effect part. */
        drawEffectBackground: async (withPendulum = false) => {
            if (!ctx) return;

            ctx.scale(globalScale, globalScale);

            const { ctx: effectBackgroundCtx, canvas: effectBackgroundCanvas } = createCanvas();
            if (withPendulum) {
                await drawAssetWithSize(
                    effectBackgroundCtx,
                    `background/background-text-${resolvedEffectBackground}.png`,
                    backgroundEffectBoxX, backgroundEffectBoxY + effectBoxOffsetY,
                    backgroundEffectBoxWidth, backgroundEffectBoxHeight,
                    0, 0 + effectBoxOffsetY,
                    backgroundEffectBoxWidth, backgroundEffectBoxHeight,
                );
            } else {
                await drawAsset(
                    effectBackgroundCtx,
                    `background/background-text-${resolvedEffectBackground}.png`,
                    backgroundEffectBoxX, backgroundEffectBoxY,
                );
            }
            const dyedEffectBackgroundCanvas = dyeCanvas(effectBackgroundCanvas, dyeList[4]).canvas;
            ctx.globalAlpha = opacityText / 100;
            ctx.drawImage(dyedEffectBackgroundCanvas, 0, 0);

            if (withPendulum) {
                const { ctx: pendulumEffectBackgroundCtx, canvas: pendulumEffectBackgroundCanvas } = createCanvas();
                const {
                    exceptionFrameType = frameType,
                    exceptionPendulumBoxOffsetHeight = 0,
                } = PendulumSizeMapException[pendulumSize][resolvedPendulumEffectBackground] ?? {};
                await drawAssetWithSize(
                    pendulumEffectBackgroundCtx,
                    `background/background-${exceptionFrameType}-${resolvedPendulumEffectBackground}.png`,
                    pendulumBoxX, pendulumBoxY + pendulumBoxOffsetY,
                    pendulumBoxWidth, pendulumBoxHeight,
                    0, pendulumBoxOffsetY + exceptionPendulumBoxOffsetHeight,
                    pendulumBoxWidth, pendulumBoxHeight + exceptionPendulumBoxOffsetHeight,
                );
                const dyedPendulumEffectBackgroundCanvas = dyeCanvas(pendulumEffectBackgroundCanvas, dyeList[5]).canvas;
                ctx.globalAlpha = opacityPendulum / 100;
                ctx.drawImage(dyedPendulumEffectBackgroundCanvas, 0, 0);
            }
            ctx.globalAlpha = 1;
            ctx.resetTransform();
        },

        /** @summary BORDER section */

        drawFrameBorder: async () => {
            if (!ctx) return;
            ctx.scale(globalScale, globalScale);
            await drawAsset(ctx, `frame/frame-border-${frameBorderType}.png`, 0, 0);
            ctx.resetTransform();
            return;
        },
        drawNameBorder: async () => {
            if (nameBorder && ctx) {
                ctx.scale(globalScale, globalScale);
                for (let index = 0; index < nameBorderTypeList.length; index++) {
                    await drawAsset(ctx, `frame/name-border-${nameBorderTypeList[index]}.png`, 0, 0);
                }
                ctx.resetTransform();
            } else {
                Promise.resolve();
            }
            return;
        },
        drawArtBorder: async () => {
            if (artBorder && ctx) {
                let artFrameSource = '';
                if (isXyz || isSpeedSkill) {
                    artFrameSource = `frame/art-border-${frame}.png`;
                } else if (isLink || ['zarc', 'hamon', 'uria', 'raviel'].includes(frame)) {
                    artFrameSource = 'frame/art-border-special.png';
                } else {
                    artFrameSource = 'frame/art-border.png';
                }
                ctx.scale(globalScale, globalScale);
                await drawAsset(ctx, artFrameSource, artBoxX, artBoxY);
                ctx.resetTransform();
            }
        },
        drawPendulumBorder: async (artBorder: boolean, foilType: Foil) => {
            if (!ctx) return;
            /** We create a new canvas for easier manipulation. */
            const { canvas: pendulumBorderCanvas, ctx: pendulumBorderCtx } = createCanvas();
            await drawAssetWithSize(
                pendulumBorderCtx,
                `frame-pendulum/border-pendulum-${pendulumSize}`
                    + `-${foilType}`
                    + '-artless'
                    + (pendulumFrameTypeMap.blue === 'scaleless' ? '-scaleless' : '')
                    + '.png',
                30, topToPendulumStructureFrame,
                pendulumFrameWidth / 2, pendulumFrameHeight,
                0, 0,
                pendulumFrameWidth / 2, pendulumFrameHeight,
            );
            await drawAssetWithSize(
                pendulumBorderCtx,
                `frame-pendulum/border-pendulum-${pendulumSize}`
                    + `-${foilType}`
                    + '-artless'
                    + (pendulumFrameTypeMap.red === 'scaleless' ? '-scaleless' : '')
                    + '.png',
                30 + pendulumFrameWidth / 2, topToPendulumStructureFrame,
                pendulumFrameWidth / 2, pendulumFrameHeight,
                pendulumFrameWidth / 2, 0,
                pendulumFrameWidth / 2, pendulumFrameHeight,
            );
            if (artBorder) {
                /**
                 * In artless border, the top of the pendulum effect box has shadow. But there is no shadow in normal border, so if art border is present, we cut the top of the artless border to remove the shadow, before seemlessly join it with the art border part.
                 */
                pendulumBorderCtx.clearRect(0, 0, cardWidth, artlessFrameY + topToPendulumStructureFrame);
                await drawAsset(
                    pendulumBorderCtx,
                    `frame-pendulum/border-pendulum-${pendulumSize}`
                        + `-${foilType}`
                        + '.png',
                    30, topToPendulumStructureFrame,
                );
            }

            ctx.scale(globalScale, globalScale);
            ctx.drawImage(pendulumBorderCanvas, 0, 0);
            ctx.resetTransform();
        },
        /** Usually we can draw foil on top of effect border, but speed skill's effect border is thicker so foil cannot cover it properly, in this case we will not draw the effect border knowing foil will be applied.
         * 
         * In fact the effect border of speed skill is kinda buggy and not align really well, but we can't really do anything about it. Speed skill is also just a non-standard frame. */
        drawEffectBorder: async () => {
            if (!ctx) return;
            ctx.scale(globalScale, globalScale);
            if (!hasFoil && bottomLeftFrame === 'speed-skill') {
                await drawAsset(ctx, 'frame/effect-border-speed-skill.png', effectBoxX, effectBoxY);
            } else {
                await drawAsset(ctx, 'frame/effect-border.png', effectBoxX, effectBoxY);
            }
            ctx.resetTransform();
        },
        drawCardBorder: async () => {
            if (!ctx) return;
            ctx.scale(globalScale, globalScale);
            await drawAsset(ctx, `frame/card-border${hasFoil ? `-${foil}` : ''}.png`, 0, 0);
            ctx.resetTransform();
        },

        /** @summary FOIL section */

        drawArtBorderFoil: async () => {
            if (!ctx) return;
            ctx.scale(globalScale, globalScale);
            if (artBorder) await drawAsset(ctx, `frame/art-border-${foil}.png`, artBoxX, artBoxY);
            ctx.resetTransform();
        },
        drawEffectBorderFoil: async () => {
            if (!ctx) return;
            ctx.scale(globalScale, globalScale);
            await drawAsset(ctx, `frame/effect-border-${foil}.png`, effectBoxX, effectBoxY);
            ctx.resetTransform();
        },

        /** @summary FINISH section */

        drawNameFinish: async () => {
            if ((artBorder || nameBorder) && ctx) {
                ctx.scale(globalScale, globalScale);
                await loopFinish(
                    ctx,
                    'name',
                    async type => {
                        return drawAsset(ctx, `finish/finish-${type}-name.png`, 0, 0);
                    },
                );
                ctx.resetTransform();
            }
        },
        drawAttributeFinish: async () => {
            if (attribute !== NO_ATTRIBUTE && ctx) {
                ctx.scale(globalScale, globalScale);
                await loopFinish(ctx, 'attribute', async type => drawAsset(ctx, `finish/finish-${type}-attribute.png`, 678, 55));
                ctx.resetTransform();
            }
        },
        drawArtFinish: async (
            artCtx = ctx,
        ) => {
            if (!applyArtFinish || !artCtx) return;
            artCtx.scale(globalScale, globalScale);
            await loopArtFinish(
                artCtx,
                'art',
                async (finishType, pendulumSuffix) => {
                    return await drawAssetWithSize(
                        artCtx,
                        `finish/art-finish-${finishType}${isPendulum ? pendulumSuffix : ''}.png`,
                        artFinishX, artFinishY,
                        artFrameWidth, artFrameWidth / artRatio,
                    );
                },
                pendulumSize,
            );
            artCtx.resetTransform();
        },
        /**
         * * ArtFinish: Controlled by `artFinish` attribute.
         * * ArtOverlayFinish: Controlled by `finish` attribute, and therfore support multiple layers.
         * 
         * * OverlayFinish type `art`: Apply only when art border is present, for example a dark finish will darken all the card EXCEPT the artwork. But when art border is no longer present (for example full-art card), it will darken the whole card.
         * * OverlayFinish type `unart`: Apply only when art border is not present.
         */
        drawArtOverlayFinish: async (
            artCtx = ctx,
        ) => {
            if (!artCtx) return;
            artCtx.scale(globalScale, globalScale);
            await loopFinish(
                artCtx,
                'art-overlay',
                async type => {
                    return drawAsset(
                        artCtx,
                        'finish/finish'
                        + `-${type}`
                        + `-${applyArtFinish ? 'art' : 'unart'}`
                        + '-overlay'
                        + (isPendulum ? `-pendulum-${pendulumSize}` : '')
                        + '.png',
                        artFinishX, artFinishY,
                    );
                },
            );
            artCtx.resetTransform();
        },
        drawArtBorderFinish: async () => {
            if (artBorder && ctx) {
                ctx.scale(globalScale, globalScale);
                await loopFinish(
                    ctx,
                    'art-border',
                    async finishType => drawAsset(ctx, `finish/finish-${finishType}-art-border.png`, 0, 0),
                );
                ctx.resetTransform();
            }
        },
        drawPendulumArtBorderFinish: async () => {
            if (!ctx) return;
            ctx.scale(globalScale, globalScale);
            if (artBorder) await loopFinish(
                ctx,
                'art-border-pendulum',
                finishType => drawAsset(
                    ctx,
                    `finish/finish-${finishType}-art-border-pendulum-${pendulumSize}.png`,
                    0, 0,
                ),
            );
            ctx.resetTransform();
        },
        drawBorderPendulumFinish: async () => {
            if (!ctx) return;
            ctx.scale(globalScale, globalScale);
            await loopFinish(
                ctx,
                'border-pendulum',
                async finishType => {
                    const finishLinkBase = `finish/finish-${finishType}-border-pendulum-${pendulumSize}`;
                    await drawAssetWithSize(
                        ctx,
                        `${finishLinkBase}${pendulumFrameTypeMap.blue === 'scaleless' ? '-scaleless' : ''}.png`,
                        0, 0,
                        cardWidth / 2, cardHeight,
                        0, 0,
                        cardWidth / 2, cardHeight,
                    );
                    await drawAssetWithSize(
                        ctx,
                        `${finishLinkBase}${pendulumFrameTypeMap.red === 'scaleless' ? '-scaleless' : ''}.png`,
                        0 + cardWidth / 2, 0,
                        cardWidth / 2, cardHeight,
                        cardWidth / 2, 0,
                        cardWidth / 2, cardHeight,
                    );
                }
            );
            ctx.resetTransform();
        },
        drawFrameFinish: async () => {
            if (!ctx) return;
            ctx.scale(globalScale, globalScale);
            await loopFinish(
                ctx,
                'frame',
                async type => {
                    return drawAsset(ctx, `finish/finish-${type}-frame${isPendulum ? `-pendulum-${pendulumSize}` : ''}.png`, 0, 0);
                },
            );
            ctx.resetTransform();
        },
        drawFrameBackgroundFinish: async () => {
            if (!ctx) return;
            ctx.scale(globalScale, globalScale);
            await loopFinish(
                ctx,
                'frame-background',
                async type => {
                    return drawAsset(ctx, `finish/finish-${type}-frame-background${isPendulum ? '-pendulum' : ''}.png`, 0, 0);
                },
            );
            ctx.resetTransform();
        },
        /** Unlike total overlay, this finish layer lies below card text (name, effect, etc...) */
        drawOverlayFinish: async () => {
            if (!ctx) return;
            ctx.scale(globalScale, globalScale);
            await loopFinish(ctx, 'overlay', async overlayType => drawAsset(ctx, `finish/finish-${overlayType}-overlay.png`, 0, 0));
            ctx.resetTransform();
        },
        drawCardBorderFinish: async () => {
            if (!ctx) return;
            ctx.scale(globalScale, globalScale);
            await loopFinish(ctx, 'card-border', async type => drawAsset(ctx, `finish/finish-${type}-card-border.png`, 0, 0));
            ctx.resetTransform();
        },
    };

    return resultAPI;
};