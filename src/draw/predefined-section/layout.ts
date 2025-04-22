import {
    ArrowPositionMap,
    BackgroundType,
    CanvasConst,
    CardArtCanvasCoordinateMap,
    CardOpacity,
    Foil,
    getArtCanvasCoordinate,
    NO_ATTRIBUTE,
    PendulumSize,
    PendulumSizeMap,
    PendulumSizeMapException,
} from 'src/model';
import { drawAsset, drawAssetWithSize, drawWithStyle } from '../image';
import { getCardIconFromFrame } from 'src/util';
import { drawStarContent } from './with-image';
import { CanvasTextStyle } from 'src/service';
import { getFinishIterator } from '../canvas-util';

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
    pendulumStructureHeight,
    leftToPendulumStructure,
    effectBoxHeight,
    effectBoxWidth,
    leftToEffectBox,
    topToEffectBox,
} = CanvasConst;
/** Various function used to draw the layout of a card is abstracted to this factory. */
export const getLayoutDrawFunction = ({
    canvas,
    artworkCanvas,
    backgroundCanvas,
    globalScale,
    format,
    hasBackground,
    frame, bottomFrame,
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
    loopFinish,
    loopArtFinish,
}: {
    canvas: HTMLCanvasElement,
    artworkCanvas: HTMLCanvasElement | null,
    backgroundCanvas: HTMLCanvasElement | null,
    globalScale: number,
    format: string,
    frame: string, bottomFrame: string,
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
        ? ['normal', 'xyz'] /** This produce more accurate effect */
        : [frameBorderType];
    const applyArtFinish = !boundless && artBorder;

    const resultAPI = {
        /** Calculate new art coordination for creative mode, some configurations may result in the art getting drawn at different location compare to default one used by `drawArtwork` function. A lots of calculation is involved here since we:
         * 
         *  * Trying to draw only a portion of the image.
         *  * The source image has totally different size compare to the destination boundary.
         *  * Various anchor points must be located based on the current card layout. Kinda regret making this feature, but they work pretty well so.
         */
        calculateCardArtRedrawCoordination(
            imageCanvas: HTMLCanvasElement,
            customOpacity?: CardOpacity,
            extraHeightRatio = 1,
            customBackgroundType?: BackgroundType,
        ) {
            const normalizedOpacity = customOpacity ?? opacity;
            const {
                body: bodyOpacity
            } = normalizedOpacity;
            const {
                artX,
                artY,
                artWidth,
                artFrameWidth,
            } = getArtCanvasCoordinate(isPendulum, normalizedOpacity, customBackgroundType, pendulumSize);
            const { width: imageWidth, height: imageHeight } = imageCanvas;
            const imageScaledRatio = artWidth / imageWidth;
            const sourceOffsetX = bodyOpacity < 100
                ? (leftToPendulumStructure - artX) / imageScaledRatio
                : 0;
            const destinationOffsetX = sourceOffsetX * imageScaledRatio;
            const sourceOffsetY = bodyOpacity < 100
                ? (topToPendulumStructure - artY) / imageScaledRatio
                : 0;
            const destinationOffsetY = sourceOffsetY * imageScaledRatio;
            const offsetHeight = bodyOpacity < 100
                ? imageHeight - (pendulumStructureHeight / imageScaledRatio)
                : 0;

            const destinationX = artX + destinationOffsetX;
            const destinationY = artY + destinationOffsetY;
            const destinationWidth = artWidth - destinationOffsetX * 2;
            const destinationHeight = artWidth / (imageWidth / imageHeight) * extraHeightRatio - offsetHeight * imageScaledRatio;

            return {
                imageScaledRatio,
                sourceOffsetX,
                sourceOffsetY,
                destinationOffsetX,
                destinationOffsetY,
                offsetHeight,
                destinationX,
                destinationY,
                destinationWidth,
                destinationHeight,
                /** Background fill is not depend on art size */
                fillWidth: artFrameWidth,
                fillHeight: pendulumStructureHeight,
            };
        },

        /** Main frame consists of top half and bottom half (for pendulum-like) card. */
        drawFrame: async () => {
            if (!ctx) return;

            ctx.globalAlpha = opacityBody / 100;
            ctx.scale(globalScale, globalScale);
            await drawAsset(ctx, `frame/frame-${frame}.png`, 0, 0);
            await drawAsset(ctx, `frame-pendulum/frame-pendulum-${bottomFrame}.png`, 0, 0);
            ctx.resetTransform();
            if (hasBackground && backgroundCanvas && backgroundType === 'frame') {
                const { width: backgroundWidth, height: backgroundHeight } = backgroundCanvas;
                const clonedCanvas = backgroundCanvas.cloneNode() as HTMLCanvasElement | null;

                const clonedCanvasContext = clonedCanvas?.getContext('2d');
                if (clonedCanvas && clonedCanvasContext) {
                    /** Clone background to create a new frame */
                    clonedCanvas.width = cardWidth * globalScale;
                    clonedCanvas.height = cardHeight * globalScale;
                    clonedCanvasContext.drawImage(
                        backgroundCanvas,
                        0, 0, backgroundWidth, backgroundHeight,
                        0, 0, cardWidth * globalScale, cardHeight * globalScale,
                    );
                    /** Clear slot for card art */
                    clonedCanvasContext.clearRect(
                        globalScale * CardArtCanvasCoordinateMap.normal.artX,
                        globalScale * CardArtCanvasCoordinateMap.normal.artY,
                        globalScale * CardArtCanvasCoordinateMap.normal.artWidth,
                        globalScale * CardArtCanvasCoordinateMap.normal.artWidth / CardArtCanvasCoordinateMap.normal.artRatio,
                    );
                    /** Clear slot for effect box */
                    clonedCanvasContext.clearRect(
                        globalScale * leftToEffectBox,
                        globalScale * topToEffectBox,
                        globalScale * effectBoxWidth,
                        globalScale * effectBoxHeight,
                    );
                    ctx.drawImage(
                        clonedCanvas,
                        0, 0,
                        globalScale * cardWidth, globalScale * cardHeight,
                        0, 0,
                        globalScale * cardWidth, globalScale * cardHeight,
                    );
                }
            }
            ctx.globalAlpha = 1;
        },
        /** Draw card artwork is synchronous because the image is already loaded from cropper's canvas. */
        drawCardArt: () => {
            if (!artworkCanvas || !ctx) return;
            const { width: imageWidth, height: imageHeight } = artworkCanvas;

            if (imageHeight <= 0) return;
            ctx.drawImage(
                artworkCanvas,
                0, 0,
                imageWidth, imageHeight,
                globalScale * artX, globalScale * artY,
                globalScale * artWidth, globalScale * artWidth / (imageWidth / imageHeight),
            );
        },
        drawBackground: (
            boundary?: 'pendulum',
        ) => {
            if (!backgroundCanvas || !ctx || !hasBackground) return;
            const { width: backgroundWidth, height: backgroundHeight } = backgroundCanvas;

            if (backgroundHeight <= 0) return;
            if (boundary === 'pendulum' && backgroundType !== 'frame') {
                let redrawCoordination = resultAPI.calculateCardArtRedrawCoordination(backgroundCanvas);

                if (backgroundType === 'full') {
                    redrawCoordination = resultAPI.calculateCardArtRedrawCoordination(
                        backgroundCanvas,
                        { ...opacity, body: 0 },
                        undefined,
                        'full',
                    );
                } else if (backgroundType === 'fit') {
                    redrawCoordination = resultAPI.calculateCardArtRedrawCoordination(
                        backgroundCanvas,
                        opacity,
                        undefined,
                        'fit',
                    );
                }

                const {
                    sourceOffsetX: backgroundSourceOffsetX, sourceOffsetY: backgroundSourceOffsetY,
                    offsetHeight: backgroundOffsetHeight,
                    destinationX: backgroundDestinationX, destinationY: backgroundDestinationY,
                    destinationWidth: backgroundDestinationWidth, destinationHeight: backgroundDestinationHeight,
                } = redrawCoordination;
                ctx.drawImage(
                    backgroundCanvas,
                    backgroundSourceOffsetX, backgroundSourceOffsetY,
                    backgroundWidth - backgroundSourceOffsetX * 2, backgroundHeight - backgroundOffsetHeight,
                    globalScale * backgroundDestinationX, globalScale * backgroundDestinationY,
                    globalScale * backgroundDestinationWidth, globalScale * backgroundDestinationHeight,
                );
                return;
            }

            const {
                artX,
                artY,
                artWidth,
            } = getArtCanvasCoordinate(
                isPendulum,
                { ...opacity, boundless: true },
                backgroundType,
                pendulumSize,
            );
            ctx.drawImage(
                backgroundCanvas,
                0, 0,
                backgroundWidth, backgroundHeight,
                globalScale * artX, globalScale * artY,
                globalScale * artWidth, globalScale * artWidth / (backgroundWidth / backgroundHeight)
            );
        },
        drawAttribute: async () => {
            if (!ctx) return;
            ctx.scale(globalScale, globalScale);
            await drawAsset(
                ctx,
                `attribute/attr-${format}-${attribute.toLowerCase()}.png`,
                678, 55,
            );
            ctx.resetTransform();
        },
        drawStar: async ({ style, starAlignment }: { style?: CanvasTextStyle, starAlignment: string }) => {
            const normalizedCardIcon = cardIcon === 'auto' ? getCardIconFromFrame(frame) : cardIcon;

            if (!ctx) return;
            ctx.scale(globalScale, globalScale);
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
            });
            ctx.resetTransform();
        },
        drawPendulumScaleIcon: async () => {
            if (!ctx) return;
            /** We create a new canvas for easier manipulation. */
            const pendulumIconCanvas = document.createElement('canvas');
            pendulumIconCanvas.width = pendulumIconFrameWidth;
            pendulumIconCanvas.height = pendulumIconFrameHeight;
            const pendulumIconContext = pendulumIconCanvas.getContext('2d');
            await drawAsset(pendulumIconContext, `frame-pendulum/pendulum-scale-${pendulumSize}.png`, 0, 0);

            if (pendulumFrameTypeMap.blue === 'scaleless') {
                pendulumIconContext.clearRect(0, 0, pendulumIconFrameWidth / 2, pendulumIconFrameHeight);
            }
            if (pendulumFrameTypeMap.red === 'scaleless') {
                pendulumIconContext.clearRect(pendulumIconFrameWidth / 2, 0, pendulumIconFrameWidth / 2, pendulumIconFrameHeight);
            }

            ctx.scale(globalScale, globalScale);
            ctx.drawImage(pendulumIconCanvas, 0, 750);
            ctx.resetTransform();
        },
        /** Individual arrows has two state (active/inactive) and two different parts (base and core) */
        drawLinkArrowMap: async (linkMap: string[], positionType: keyof typeof ArrowPositionMap) => {
            return baseDrawLinkArrowMap(ctx, globalScale, linkMap, positionType, boundless);
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
            ctx.globalAlpha = opacityName / 100;
            await drawAsset(ctx, `background/background-name-${frame}.png`, 0, 0);
            ctx.globalAlpha = 1;
            ctx.resetTransform();
        },
        /** Background is based on bottom frame. This function draws both background for pendulum part and normal effect part. */
        drawEffectBackground: async (withPendulum = false) => {
            if (!ctx) return;

            ctx.scale(globalScale, globalScale);
            ctx.globalAlpha = opacityText / 100;

            if (withPendulum) {
                await drawAssetWithSize(
                    ctx,
                    `background/background-text-${bottomFrame}.png`,
                    backgroundEffectBoxX, backgroundEffectBoxY + effectBoxOffsetY,
                    backgroundEffectBoxWidth, backgroundEffectBoxHeight,
                    0, 0 + effectBoxOffsetY,
                    backgroundEffectBoxWidth, backgroundEffectBoxHeight,
                );
            } else {
                await drawAsset(
                    ctx,
                    `background/background-text-${bottomFrame}.png`,
                    backgroundEffectBoxX, backgroundEffectBoxY,
                );
            }
            if (withPendulum) {
                ctx.globalAlpha = opacityPendulum / 100;
                const {
                    exceptionFrameType = frameType,
                    exceptionPendulumBoxOffsetHeight = 0,
                } = PendulumSizeMapException[pendulumSize][bottomFrame] ?? {};
                await drawAssetWithSize(
                    ctx,
                    `background/background-${exceptionFrameType}-${bottomFrame}.png`,
                    pendulumBoxX, pendulumBoxY + pendulumBoxOffsetY,
                    pendulumBoxWidth, pendulumBoxHeight,
                    0, pendulumBoxOffsetY + exceptionPendulumBoxOffsetHeight,
                    pendulumBoxWidth, pendulumBoxHeight + exceptionPendulumBoxOffsetHeight,
                );
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
            const pendulumBorderCanvas = document.createElement('canvas');
            pendulumBorderCanvas.width = cardWidth;
            pendulumBorderCanvas.height = cardHeight;
            const pendulumBorderContext = pendulumBorderCanvas.getContext('2d');
            await drawAssetWithSize(
                pendulumBorderContext,
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
                pendulumBorderContext,
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
                pendulumBorderContext.clearRect(0, 0, cardWidth, artlessFrameY + topToPendulumStructureFrame);
                await drawAsset(
                    pendulumBorderContext,
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
            if (!hasFoil && bottomFrame === 'speed-skill') {
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
        drawLinkMapFoil: async (withBorder = artBorder, positionType: keyof typeof ArrowPositionMap) => {
            return baseDrawLinkMapFoil(ctx, globalScale, foil, withBorder, positionType);
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
        drawArtFinish: async () => {
            if (applyArtFinish && ctx) {
                ctx.scale(globalScale, globalScale);
                await loopArtFinish(
                    ctx,
                    'art',
                    async (finishType, pendulumSuffix) => {
                        return await drawAssetWithSize(
                            ctx,
                            `finish/art-finish-${finishType}${isPendulum ? pendulumSuffix : ''}.png`,
                            artFinishX, artFinishY,
                            artWidth, artWidth / artRatio,
                        );
                    },
                    pendulumSize,
                );
                ctx.resetTransform();
            }
        },
        /**
         * * ArtFinish: Controlled by `artFinish` attribute.
         * * ArtOverlayFinish: Controlled by `finish` attribute, and therfore support multiple layers.
         * 
         * * OverlayFinish type `art`: Apply only when art border is present, for example a dark finish will darken all the card EXCEPT the artwork. But when art border is no longer present (for example full-art card), it will darken the whole card.
         * * OverlayFinish type `unart`: Apply only when art border is not present.
         */
        drawArtOverlayFinish: async () => {
            if (!ctx) return;
            ctx.scale(globalScale, globalScale);
            await loopFinish(
                ctx,
                'art-overlay',
                async type => {
                    return drawAsset(
                        ctx,
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
            ctx.resetTransform();
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