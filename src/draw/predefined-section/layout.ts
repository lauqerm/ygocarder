import {
    ArrowPositionList,
    BackgroundType,
    CanvasConst,
    CardOpacity,
    Foil,
    getArtCanvasCoordinate,
    NO_ATTRIBUTE,
} from 'src/model';
import { drawAsset, drawAssetWithSize, drawWithStyle } from '../image';
import { getCardIconFromFrame } from 'src/util';
import { drawStarContent } from './with-image';
import { CanvasTextStyle } from 'src/service';

const {
    topToPendulumStructure,
    pendulumStructureHeight,
    leftToPendulumStructure,
} = CanvasConst;
/** Various function used to draw the layout of a card is abstracted to this factory. */
export const getLayoutDrawFunction = ({
    canvas,
    artworkCanvas,
    backgroundCanvas,
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
    loopFinish,
    loopArtFinish,
}: {
    canvas: HTMLCanvasElement,
    artworkCanvas: HTMLCanvasElement | null,
    backgroundCanvas: HTMLCanvasElement | null,
    format: string,
    frame: string, bottomFrame: string,
    hasBackground: boolean,
    backgroundType: BackgroundType,
    cardIcon: string,
    attribute: string,
    star: number | string,
    foil: Foil,
    pendulumSize: string,
    opacity: CardOpacity,
    isXyz: boolean, isSpeedSkill: boolean, isLink: boolean,
    isPendulum: boolean,
    loopFinish: (
        ctx?: CanvasRenderingContext2D | null,
        name?: string,
        caller?: (finishType: string) => Promise<any>,
    ) => Promise<void>,
    loopArtFinish: (
        ctx?: CanvasRenderingContext2D | null,
        name?: string,
        caller?: (finishType: string) => Promise<any>,
    ) => Promise<void>,
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
    } = getArtCanvasCoordinate(isPendulum, opacity);
    const artBorder = opacityBody > 0 ? true : keepArtBorder;
    const artBoxY = 170, artBoxX = 60;
    const effectBoxY = 860, effectBoxX = 35;
    const backgroundEffectBoxY = effectBoxY + 24, backgroundEffectBoxX = effectBoxX + 19;

    const hasFoil = foil !== 'normal';
    const frameBorderType = isXyz || isSpeedSkill
        ? frame
        : 'normal';
    const nameBorderType = frameBorderType;
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
            } = getArtCanvasCoordinate(isPendulum, normalizedOpacity, customBackgroundType);
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
            };
        },

        /** Main frame consists of top half and bottom half (for pendulum-like) card. */
        drawFrame: async () => {
            if (!ctx) return;

            ctx.globalAlpha = opacityBody / 100;
            await drawAsset(ctx, `frame/frame-${frame}.png`, 0, 0);
            await drawAsset(ctx, `frame-pendulum/frame-pendulum-${bottomFrame}.png`, 0, 0);
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
                artX, artY,
                artWidth, artWidth / (imageWidth / imageHeight),
            );
        },
        drawBackground: (
            boundary?: 'pendulum',
        ) => {
            if (!backgroundCanvas || !ctx || !hasBackground) return;
            const { width: backgroundWidth, height: backgroundHeight } = backgroundCanvas;

            if (backgroundHeight <= 0) return;
            if (boundary === 'pendulum') {
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
                        'fit'
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
                    backgroundDestinationX, backgroundDestinationY,
                    backgroundDestinationWidth, backgroundDestinationHeight,
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
            );
            ctx.drawImage(
                backgroundCanvas,
                0, 0,
                backgroundWidth, backgroundHeight,
                artX, artY,
                artWidth, artWidth / (backgroundWidth / backgroundHeight)
            );
        },
        drawAttribute: async () => {
            await drawAsset(ctx, `attribute/attr-${format}-${attribute.toLowerCase()}.png`, 678, 55);
        },
        drawStar: async ({ style, starAlignment }: { style?: CanvasTextStyle, starAlignment: string }) => {
            const normalizedCardIcon = cardIcon === 'auto' ? getCardIconFromFrame(frame) : cardIcon;
            await drawStarContent({
                ctx,
                cardIcon: normalizedCardIcon,
                text: typeof star === 'string' ? star : null,
                star,
                starAlignment,
                style,
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
        },
        drawPendulumScaleIcon: async () => {
            await drawAsset(ctx, `frame-pendulum/pendulum-scale-${pendulumSize}.png`, 0, 750);
        },
        /** Individual arrows has two state (active/inactive) and two different parts (base and core) */
        drawLinkArrowMap: async (linkMap: string[]) => {
            await Promise.all<any>([1, 2, 3, 4, 6, 7, 8, 9]
                .map(async entry => {
                    const { left, top, height, width } = ArrowPositionList[entry - 1];
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
        },
        drawStatBorder: async (color: string) => {
            await drawWithStyle(
                canvas,
                'frame/frame-stat-border.png',
                0, 1070,
                813, 20,
                { color },
            );
        },

        /** @summary BACKGROUND section */

        drawNameBackground: async () => {
            if (!ctx) return;

            ctx.globalAlpha = opacityName / 100;
            await drawAsset(ctx, `background/background-name-${frame}.png`, 0, 0);
            ctx.globalAlpha = 1;
        },
        /** Background is based on bottom frame. This function draws both background for pendulum part and normal effect part. */
        drawEffectBackground: async (withPendulum = false) => {
            if (!ctx) return;

            ctx.globalAlpha = opacityText / 100;
            await drawAsset(
                ctx,
                `background/background-text-${bottomFrame}.png`,
                backgroundEffectBoxX, backgroundEffectBoxY,
            );
            if (withPendulum) {
                ctx.globalAlpha = opacityPendulum / 100;
                await drawAsset(ctx, `background/background-pendulum-${bottomFrame}.png`, 55, 738);
            }
            ctx.globalAlpha = 1;
        },

        /** @summary BORDER section */

        drawFrameBorder: async () => {
            return drawAsset(ctx, `frame/frame-border-${frameBorderType}.png`, 0, 0);
        },
        drawNameBorder: async () => {
            return nameBorder
                ? drawAsset(ctx, `frame/name-border-${nameBorderType}.png`, 0, 0)
                : Promise.resolve();
        },
        drawArtBorder: async () => {
            if (artBorder) {
                let artFrameSource = '';
                if (isXyz || isSpeedSkill) {
                    artFrameSource = `frame/art-border-${frame}.png`;
                } else if (isLink || ['zarc', 'hamon', 'uria', 'raviel'].includes(frame)) {
                    artFrameSource = 'frame/art-border-special.png';
                } else {
                    artFrameSource = 'frame/art-border.png';
                }
                await drawAsset(ctx, artFrameSource, artBoxX, artBoxY);
            }
        },
        drawPendulumBorder: async (artBorder: boolean, foilType: Foil) => {
            await drawAsset(
                ctx,
                `frame-pendulum/border-pendulum-${pendulumSize}`
                + `-${foilType}`
                + (artBorder ? '' : '-artless')
                + '.png',
                30, 185,
            );
        },
        /** Usually we can draw foil on top of effect border, but speed skill's effect border is thicker so foil cannot cover it properly, in this case we will not draw the effect border knowing foil will be applied.
         * 
         * In fact the effect border of speed skill is kinda buggy and not align really well, but we can't really do anything about it. Speed skill is also just a non-standard frame. */
        drawEffectBorder: async () => {
            if (!hasFoil && bottomFrame === 'speed-skill') {
                await drawAsset(ctx, 'frame/effect-border-speed-skill.png', effectBoxX, effectBoxY);
            } else {
                await drawAsset(ctx, 'frame/effect-border.png', effectBoxX, effectBoxY);
            }
        },
        drawCardBorder: async () => {
            await drawAsset(ctx, `frame/card-border${hasFoil ? `-${foil}` : ''}.png`, 0, 0);
        },

        /** @summary FOIL section */

        drawArtBorderFoil: async () => {
            if (artBorder) await drawAsset(ctx, `frame/art-border-${foil}.png`, artBoxX, artBoxY);
        },
        drawEffectBorderFoil: async () => {
            await drawAsset(ctx, `frame/effect-border-${foil}.png`, effectBoxX, effectBoxY);
        },
        drawLinkMapFoil: async (withBorder = artBorder) => {
            await drawAsset(ctx, `link/link-overlay-arrow-${foil}${withBorder ? '' : '-artless'}.png`, 0, 175);
        },

        /** @summary FINISH section */

        drawNameFinish: async () => {
            if (artBorder || nameBorder) await loopFinish(
                ctx,
                'name',
                async type => {
                    return drawAsset(ctx, `finish/finish-${type}-name.png`, 0, 0);
                },
            );
        },
        drawAttributeFinish: async () => {
            if (attribute !== NO_ATTRIBUTE) {
                await loopFinish(ctx, 'attribute', async type => drawAsset(ctx, `finish/finish-${type}-attribute.png`, 678, 55));
            }
        },
        drawArtFinish: async () => {
            if (applyArtFinish) await loopArtFinish(
                ctx,
                'art',
                async finishType => await drawAsset(
                    ctx,
                    `finish/art-finish-${finishType}${isPendulum ? `-pendulum-${pendulumSize}` : ''}.png`,
                    artFinishX, artFinishY,
                ),
            );
        },
        /**
         * * ArtFinish: Controlled by `artFinish` attribute.
         * * ArtOverlayFinish: Controlled by `finish` attribute, and therfore support multiple layers.
         * 
         * * OverlayFinish type `art`: Apply only when art border is present, for example a dark finish will darken all the card EXCEPT the artwork. But when art border is no longer present (for example full-art card), it will darken the whole card.
         * * OverlayFinish type `unart`: Apply only when art border is not present.
         */
        drawArtOverlayFinish: async () => {
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
        },
        drawArtBorderFinish: async () => {
            if (artBorder) {
                await loopFinish(
                    ctx,
                    'art-border',
                    async finishType => drawAsset(ctx, `finish/finish-${finishType}-art-border.png`, 0, 0),
                );
            }
        },
        drawPendulumArtBorderFinish: async () => {
            if (artBorder) await loopFinish(
                ctx,
                'art-border-pendulum',
                finishType => drawAsset(ctx, `finish/finish-${finishType}-art-border-pendulum-${pendulumSize}.png`, 0, 0)
            );
        },
        drawBorderPendulumFinish: async () => {
            await loopFinish(
                ctx,
                'border-pendulum',
                async finishType => drawAsset(ctx, `finish/finish-${finishType}-border-pendulum-${pendulumSize}.png`, 0, 0)
            );
        },
        drawFrameFinish: async () => {
            await loopFinish(
                ctx,
                'frame',
                async type => {
                    return drawAsset(ctx, `finish/finish-${type}-frame${isPendulum ? `-pendulum-${pendulumSize}` : ''}.png`, 0, 0);
                },
            );
        },
        drawFrameBackgroundFinish: async () => {
            await loopFinish(
                ctx,
                'frame-background',
                async type => {
                    return drawAsset(ctx, `finish/finish-${type}-frame-background${isPendulum ? `-pendulum-${pendulumSize}` : ''}.png`, 0, 0);
                },
            );
        },
        /** Unlike total overlay, this finish layer lies below card text (name, effect, etc...) */
        drawOverlayFinish: async () => {
            await loopFinish(ctx, 'overlay', async overlayType => drawAsset(ctx, `finish/finish-${overlayType}-overlay.png`, 0, 0));
        },
        drawCardBorderFinish: async () => {
            await loopFinish(ctx, 'card-border', async type => drawAsset(ctx, `finish/finish-${type}-card-border.png`, 0, 0));
        },
    };

    return resultAPI;
};