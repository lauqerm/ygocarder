import { arrowPositionList, CanvasConst, CardOpacity, Foil, getArtCanvasCoordinate } from 'src/model';
import { drawAsset, drawAssetWithSize } from '../image';

const {
    topToPendulumStructure,
    pendulumStructureHeight,
    leftToPendulumStructure,
} = CanvasConst;
export const getLayoutDrawFunction = ({
    ctx,
    previewCanvas,
    frame, bottomFrame,
    foil,
    pendulumSize,
    opacity,
    isLink, isSpeedSkill, isXyz,
    isPendulum,
    loopFinish,
    loopArtFinish,
}: {
    ctx: CanvasRenderingContext2D,
    previewCanvas: HTMLCanvasElement | null,
    frame: string, bottomFrame: string,
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
    const {
        artBorder: keepArtBorder,
        nameBorder,
        body: opacityBody,
        name: opacityName,
        pendulum: opacityPendulum,
        text: opacityText,
        artFrame: rigidFrame,
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
    const applyArtFinish = rigidFrame && artBorder;

    return {
        /** Main frame consists of top half and bottom half (for pendulum-like) card */
        drawFrame: async () => {
            ctx.globalAlpha = opacityBody / 100;
            await drawAsset(ctx, `frame/frame-${frame}.png`, 0, 0);
            await drawAsset(ctx, `frame-pendulum/frame-pendulum-${bottomFrame}.png`, 0, 0);
            ctx.globalAlpha = 1;
        },
        /** Draw card artwork is synchronous because the image is already loaded from cropper's canvas */
        drawCardArt: () => {
            if (!previewCanvas || !ctx) return;
            const { width: imageWidth, height: imageHeight } = previewCanvas;

            if (imageHeight <= 0) return;
            ctx.drawImage(
                previewCanvas,
                0, 0,
                imageWidth, imageHeight,
                artX, artY,
                artWidth, artWidth / (imageWidth / imageHeight),
            );
        },
        drawPendulumScaleIcon: async () => {
            await drawAsset(ctx, `frame-pendulum/pendulum-scale-${pendulumSize}.png`, 0, 750);
        },
        /** Individual arrows has two state (active/inactive) and two different parts (base and core) */
        drawLinkArrowMap: async (linkMap: string[]) => {
            await Promise.all<any>([1, 2, 3, 4, 6, 7, 8, 9]
                .map(async entry => {
                    const { left, top, height, width } = arrowPositionList[entry - 1];
                    const isActive = linkMap.includes(`${entry}`);
                    const baseLink = `link/link-inactive-${entry}`;
                    const activeLink = `link/link-active-${entry}`;
                    const coordinate = [left, top, width, height] as const;

                    await drawAssetWithSize(ctx, `${baseLink}-base${rigidFrame ? '' : '-full'}.png`, ...coordinate);
                    await drawAssetWithSize(ctx, `${baseLink}-core.png`, ...coordinate);
                    if (isActive) {
                        await drawAssetWithSize(ctx, `${activeLink}-base.png`, ...coordinate);
                        return drawAssetWithSize(ctx, `${activeLink}-core.png`, ...coordinate);
                    } else return;
                })
            );
        },

        /** @summary BACKGROUND section */

        drawNameBackground: async () => {
            ctx.globalAlpha = opacityName / 100;
            await drawAsset(ctx, `background/background-name-${frame}.png`, 0, 0);
            ctx.globalAlpha = 1;
        },
        /** Background is based on bottom frame. This function draws both background for pendulum part and normal effect part. */
        drawEffectBackground: async (withPendulum = false) => {
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
        /** Usually we can draw foil on top of effect border, but speed skill's effect border is thicker so foil cannot cover it properly, in this case we will not draw the effect border knowing foil will be applied. */
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
                type => {
                    return drawAsset(ctx, `finish/finish-${type}-name.png`, 0, 0);
                },
            );
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
                type => {
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
                    finishType => drawAsset(ctx, `finish/finish-${finishType}-art-border.png`, 0, 0),
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
                finishType => drawAsset(ctx, `finish/finish-${finishType}-border-pendulum-${pendulumSize}.png`, 0, 0)
            );
        },
        drawFrameFinish: async () => {
            await loopFinish(
                ctx,
                'frame',
                type => {
                    return drawAsset(ctx, `finish/finish-${type}-frame${isPendulum ? `-pendulum-${pendulumSize}` : ''}.png`, 0, 0);
                },
            );
        },
        drawFrameBackgroundFinish: async () => {
            await loopFinish(
                ctx,
                'frame-background',
                type => {
                    return drawAsset(ctx, `finish/finish-${type}-frame-background${isPendulum ? `-pendulum-${pendulumSize}` : ''}.png`, 0, 0);
                },
            );
        },
        /** Unlike total overlay, this finish lies below card text (name, effect, etc...) */
        drawOverlayFinish: async () => {
            await loopFinish(ctx, 'overlay', overlayType => drawAsset(ctx, `finish/finish-${overlayType}-overlay.png`, 0, 0));
        },
        drawCardBorderFinish: async () => {
            await loopFinish(ctx, 'card-border', type => drawAsset(ctx, `finish/finish-${type}-card-border.png`, 0, 0));
        },

        /** Calculate new art coordination for creative mode, some configuration may result in the art getting drawn at different location compare to default one use by `drawArtwork` function */
        calculateCardArtRedrawCoordination: (
            previewCanvas: HTMLCanvasElement,
            customOpacity?: CardOpacity,
            extraHeightRatio = 1,
        ) => {
            const normalizedOpacity = customOpacity ?? opacity;
            const {
                body: bodyOpacity
            } = normalizedOpacity;
            const {
                artX,
                artY,
                artWidth,
            } = getArtCanvasCoordinate(isPendulum, normalizedOpacity);
            const { width: imageWidth, height: imageHeight } = previewCanvas;
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
        }
    };
};