import {
    ArrowPositionMap,
    ArtFinishMap,
    RegionMap,
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
    Card,
    AttributeOffsetMap,
    ExtraAttributeMap,
    OverlayComposite,
} from 'src/model';
import { drawAsset, drawAssetWithSize, drawFromWithSizeAndFallback, drawWithStyle } from '../image';
import { blendCanvas, createCanvas, dyeCanvas, getCardIconFromFrame, HexColorRegex, resolveFrameStyle } from 'src/util';
import { drawStarContent } from './with-image';
import { CanvasTextStyle } from 'src/service';
import { getFinishIterator } from '../canvas-util';
import { applyAlphaMask, MaskPromise } from './mask';

export const baseDrawMasterLinkArrowMap = async (
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
export const baseDrawRushLinkMapFoil = async (
    ctx: CanvasRenderingContext2D,
    globalScale: number,
    foil: string,
    withBorder: boolean,
    positionType: keyof typeof ArrowPositionMap,
    dyeColor: string,
) => {
    if (!ctx) return;
    const willDyed = HexColorRegex.test(dyeColor);
    if (foil === 'normal' && !willDyed) return;
    /** Because we do not have "normal" foil, we use platinum as a base to dye. */
    const usedFoil = willDyed ? 'platinum' : foil;
    const drawFunction = async (ctx: CanvasRenderingContext2D) => {
        if (withBorder) {
            await drawAsset(ctx, `link/link-overlay-arrow-${usedFoil}.png`, 0, 175);
        } else {
            await Promise.all<any>([1, 2, 3, 4, 6, 7, 8, 9]
                .map(async entry => {
                    const { left, top, height, width } = ArrowPositionMap[positionType][entry - 1];
                    const coordinate = [left, top, width, height] as const;

                    await drawAssetWithSize(ctx, `link/link-overlay-${entry}-${usedFoil}.png`, ...coordinate);
                })
            );
        }
    };

    ctx.scale(globalScale, globalScale);
    if (willDyed) {
        const { ctx: linkMapFoilCtx, canvas: linkMapFoilCanvas } = createCanvas();
        if (linkMapFoilCtx) await drawFunction(linkMapFoilCtx);
        const { canvas: dyedLinkMapFoilCanvas } = dyeCanvas(linkMapFoilCanvas, dyeColor);
        ctx.drawImage(dyedLinkMapFoilCanvas, 0, 0);
    } else {
        await drawFunction(ctx);
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
    pendulumStructureHeight,
} = CanvasConst;
/** Various function used to draw the layout of a card is abstracted to this factory. */
export const getMasterLayoutDrawFunction = ({
    canvas,
    artworkCanvas,
    backgroundCanvas,
    overlayCanvas,
    globalScale,
    region,
    legacyTemplate,
    hasBackground,
    hasOverlay,
    overlayType,
    frame, leftFrame, pendulumFrame, rightFrame, pendulumRightFrame,
    dyeList,
    effectBackground, pendulumEffectBackground,
    backgroundType,
    cardIcon,
    attribute,
    attributeType,
    star,
    starList,
    foil,
    pendulumSize,
    opacity,
    isLink, isSpeedSkill, isXyz,
    isPendulum,
    pendulumFrameTypeMap,
    otherFinish,
    controlString,
    loopFinish,
    loopArtFinish,
}: {
    canvas: HTMLCanvasElement,
    artworkCanvas: HTMLCanvasElement | null,
    backgroundCanvas: HTMLCanvasElement | null,
    overlayCanvas: HTMLCanvasElement | null,
    globalScale: number,
    region: string,
    legacyTemplate: boolean,
    frame: string, leftFrame: string, pendulumFrame: string, rightFrame: string, pendulumRightFrame: string,
    dyeList: FrameDyeList,
    effectBackground: string, pendulumEffectBackground: string,
    hasBackground: boolean,
    hasOverlay: boolean,
    overlayType: string,
    backgroundType: BackgroundType,
    cardIcon: string,
    attribute: string,
    star: number | string,
    starList: string[],
    foil: Foil,
    pendulumSize: PendulumSize,
    opacity: CardOpacity,
    isXyz: boolean, isSpeedSkill: boolean, isLink: boolean,
    isPendulum: boolean,
    pendulumFrameTypeMap: { blue: 'normal' | 'scaleless', red: 'normal' | 'scaleless' },
    otherFinish: OtherFinish,
    controlString?: string,
    loopFinish: (
        ctx?: CanvasRenderingContext2D | null,
        name?: string,
        caller?: (finishType: string) => Promise<any>,
    ) => Promise<void>,
    loopArtFinish: ReturnType<typeof getFinishIterator>,
} & Pick<Card, 'attributeType'>) => {
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
    const backgroundEffectBoxY = effectBoxY + 24, backgroundEffectBoxX = effectBoxX + 19;
    const backgroundEffectBoxWidth = 705, backgroundEffectBoxHeight = 231;
    const overlayMethodList = overlayType.split('|');
    const borderOverlayType: OverlayComposite = hasOverlay
        ? (overlayMethodList
            .find(entry => entry.includes('border,'))?.split(',')?.[1] as OverlayComposite | undefined) ?? 'source-in'
        : 'none';
    const frameOverlayType: OverlayComposite = hasOverlay
        ? (overlayMethodList
            .find(entry => entry.includes('frame,'))?.split(',')?.[1] as OverlayComposite | undefined) ?? 'none'
        : 'none';
    const willBlendBorder = hasOverlay && borderOverlayType !== 'none';
    if (controlString) console.info('Control String', controlString);

    const hasFoil = foil !== 'normal';
    const frameBorderType = isXyz || isSpeedSkill
        ? frame
        : 'normal';
    const nameBorderTypeList = legacyTemplate
        ? frame === 'synchro'
            ? ['normal', 'xyz', 'xyz', 'xyz', 'xyz'] /** This produce more accurate effect */
            : [frameBorderType]
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

            const willReplaceFrame = hasBackground && backgroundCanvas && backgroundType === 'frame';

            /** Combine layer frame here */
            const { ctx: topFrameCtx, canvas: topFrameCanvas } = createCanvas();
            await drawAsset(topFrameCtx, `${legacyTemplate ? 'legacy-' : ''}frame/frame-${topLeftFrame}.png`, 0, 0);
            const { canvas: dyedTopFrameCanvas, ctx: dyedTopFrameCtx } = dyeCanvas(
                await blendCanvas({
                    canvas: topFrameCanvas,
                    customFoilCanvas: overlayCanvas,
                    method: frameOverlayType,
                }),
                dyeList[0],
            );
            /** No need to dye if background is gonna replace the frame */
            if (
                !willReplaceFrame
                && (topLeftFrame !== topRightFrame || dyeList[0] !== '' || dyeList[1] !== '')
                && dyedTopFrameCtx
            ) {
                const topRightCanvas = await applyAlphaMask(
                    `${legacyTemplate ? 'legacy-' : ''}frame/frame-${topRightFrame}.png`,
                    await MaskPromise.topRight,
                    cardWidth,
                    cardHeight,
                );
                const { canvas: dyedTopRightCanvas } = dyeCanvas(
                    await blendCanvas({
                        canvas: topRightCanvas,
                        customFoilCanvas: overlayCanvas,
                        method: frameOverlayType,
                    }),
                    dyeList[1],
                );
                dyedTopFrameCtx.drawImage(dyedTopRightCanvas, 0, 0);
            }

            const { ctx: bottomFrameCtx, canvas: bottomFrameCanvas } = createCanvas();
            await drawAsset(bottomFrameCtx, `${legacyTemplate ? 'legacy-' : ''}frame-pendulum/frame-pendulum-${bottomLeftFrame}.png`, 0, 0);
            const { canvas: dyedBottomFrameCanvas, ctx: dyedBottomFrameCtx } = dyeCanvas(
                    await blendCanvas({
                        canvas: bottomFrameCanvas,
                        customFoilCanvas: overlayCanvas,
                        method: frameOverlayType,
                    }),
                    dyeList[2],
                );
            if (
                !willReplaceFrame
                && (bottomLeftFrame !== bottomRightFrame || dyeList[2] !== '' || dyeList[3] !== '')
                && dyedBottomFrameCtx
            ) {
                /** What is this?
                 * 
                 * Because the "bottom left" frame is not actually bottom, but both bottom left and bottom right with transparency. If we draw it first, then draw our "bottom right" frame on top of it, it will mixed with the bottom left frame (because both contains transparency), instead of replacing it, create an unintended side effect. Therefore we cut the part that may cause mixing color from the bottom left frame, before drawing the bottom right part.
                 */
                dyedBottomFrameCtx.clearRect(714, 0, 99, cardHeight);
                const bottomRightCanvas = await applyAlphaMask(
                    `${legacyTemplate ? 'legacy-' : ''}frame/frame-${bottomRightFrame}.png`,
                    await MaskPromise.bottomRight,
                    cardWidth,
                    cardHeight,
                );
                const { canvas: dyedBottomRightCanvas } = dyeCanvas(
                    await blendCanvas({
                        canvas: bottomRightCanvas,
                        customFoilCanvas: overlayCanvas,
                        method: frameOverlayType,
                    }),
                    dyeList[3],
                );
                dyedBottomFrameCtx.drawImage(dyedBottomRightCanvas, 0, 0);
            }

            ctx.globalAlpha = opacityBody / 100;
            ctx.scale(globalScale, globalScale);
            /** Leave empty space for card art and pendulum effect */
            if (isPendulum) {
                dyedTopFrameCtx?.clearRect(artFrameX, artFrameY, artFrameWidth, pendulumStructureHeight);
                dyedBottomFrameCtx?.clearRect(artFrameX, artFrameY, artFrameWidth, pendulumStructureHeight);
            }
            /** Background replace frame */
            if (willReplaceFrame && dyedTopFrameCtx && dyedBottomFrameCtx) {
                const { width: backgroundWidth, height: backgroundHeight } = backgroundCanvas;
                dyedTopFrameCtx.globalCompositeOperation = 'source-atop';
                dyedTopFrameCtx.drawImage(
                    backgroundCanvas,
                    0, 0, backgroundWidth, backgroundHeight,
                    0, 0, cardWidth, cardHeight,
                );
                dyedBottomFrameCtx.globalCompositeOperation = 'source-atop';
                dyedBottomFrameCtx.drawImage(
                    backgroundCanvas,
                    0, 0, backgroundWidth, backgroundHeight,
                    0, 0, cardWidth, cardHeight,
                );
            }
            /** Start assembling the canvas */
            ctx.drawImage(dyedTopFrameCanvas, 0, 0);
            ctx.drawImage(dyedBottomFrameCanvas, 0, 0);
            ctx.resetTransform();
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
            if (backgroundType !== 'frame') {
                externalCtx.drawImage(
                    backgroundCanvas,
                    0, 0,
                    backgroundWidth, backgroundHeight,
                    globalScale * artX, globalScale * artY,
                    globalScale * artWidth, globalScale * artWidth / ratio,
                );
            } else {
                externalCtx.drawImage(
                    backgroundCanvas,
                    0, 0,
                    backgroundWidth, backgroundHeight,
                    0, 0,
                    globalScale * cardWidth, globalScale * cardHeight,
                );
            }
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
            if (attributeType === 'custom') {
                await drawFromWithSizeAndFallback(
                    attributeCtx,
                    attribute,
                    image => {
                        const { naturalWidth, naturalHeight } = image;
                        const actualWidth = attributeSize / naturalHeight * naturalWidth;
                        const offsetX = (actualWidth - attributeSize) / 2;

                        return attributeX - offsetX;
                    },
                    attributeY,
                    undefined, attributeSize,
                    undefined, undefined,
                    undefined, undefined,
                    { internalImage: false, crossorigin: 'anonymous' },
                );
            } else {
                const offsetX = AttributeOffsetMap[region]?.[attribute]?.offsetX ?? 0;
                const isExtraAttribute = ExtraAttributeMap[attribute];
                const attributeName = isExtraAttribute
                    ? 'tcg'
                    : RegionMap[region].fileKey;

                await drawAssetWithSize(
                    attributeCtx,
                    `attribute/attr-${attributeName}-${attribute.toLowerCase()}.png`,
                    attributeX + offsetX, attributeY,
                    undefined, attributeSize,
                );
            }
            const attributeFinish = otherFinish[0] ?? 'normal';
            if (attributeFinish !== 'normal') {
                const loopAttributeFinish = getFinishIterator([attributeFinish], ArtFinishMap);
                const {
                    canvas: attributeFinishCanvas,
                    ctx: attributeFinishCtx,
                } = createCanvas(cardWidth, (attributeY + attributeSize));
                attributeFinishCtx?.drawImage(attributeCanvas, 0, 0);
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
                if (attributeCtx) {
                    attributeCtx.globalCompositeOperation = 'source-in';
                    attributeCtx.drawImage(attributeFinishCanvas, 0, 0);
                }
                ctx.drawImage(attributeCanvas, 0, 0);
            } else {
                ctx.drawImage(attributeCanvas, 0, 0);
            }
            ctx.resetTransform();
        },
        drawStar: async ({
            style,
            starAlignment,
            iconImage,
        }: {
            style?: CanvasTextStyle,
            starAlignment: string,
            iconImage?: HTMLCanvasElement | null,
        }) => {
            const normalizedCardIcon = cardIcon === 'auto' ? getCardIconFromFrame(frame) : cardIcon;

            if (!ctx) return;
            ctx.scale(globalScale, globalScale);
            const starFinish = otherFinish[1] ?? 'normal';
            const loopStarFinish = starFinish !== 'normal' ? getFinishIterator([starFinish], ArtFinishMap) : undefined;
            await drawStarContent({
                ctx,
                iconImage,
                cardIcon: normalizedCardIcon,
                text: typeof star === 'string' ? star : null,
                star,
                starList,
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
            const {
                canvas: pendulumIconCanvas,
                ctx: pendulumIconCtx,
            } = createCanvas(pendulumIconFrameWidth, pendulumIconFrameHeight);
            if (!ctx || !pendulumIconCtx) return;
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
            await drawAsset(nameBackgroundCtx, `${legacyTemplate ? 'legacy-' : ''}background/background-name-${topLeftFrame}.png`, 0, 0);
            const {
                canvas: dyedLeftNameCanvas,
                ctx: dyedLeftNameCtx
            } = dyeCanvas(
                await blendCanvas({
                    canvas: nameBackgroundCanvas,
                    customFoilCanvas: overlayCanvas,
                    method: frameOverlayType,
                }),
                dyeList[0],
            );
            if (topLeftFrame !== topRightFrame || dyeList[0] !== '' || dyeList[1] !== '') {
                const nameRightCanvas = await applyAlphaMask(
                    `${legacyTemplate ? 'legacy-' : ''}background/background-name-${topRightFrame}.png`,
                    await MaskPromise.name,
                    cardWidth,
                    topToPendulumStructure,
                );
                const dyedRightNameCanvas = dyeCanvas(nameRightCanvas, dyeList[1]).canvas;
                dyedLeftNameCtx?.drawImage(dyedRightNameCanvas, 0, 0);
            }
            ctx.globalAlpha = opacityName / 100;
            ctx.drawImage(dyedLeftNameCanvas, 0, 0);
            ctx.globalAlpha = 1;
            ctx.resetTransform();
        },
        /** Background is based on bottom frame. This function draws both background for pendulum part and normal effect part. */
        drawEffectBackground: async ({ withPendulum = false, blendWithBackground = true, externalCtx = ctx }) => {
            if (!externalCtx) return;

            externalCtx.scale(globalScale, globalScale);

            const { ctx: effectBackgroundCtx, canvas: effectBackgroundCanvas } = createCanvas();
            if (withPendulum) {
                await drawAssetWithSize(
                    effectBackgroundCtx,
                    `${legacyTemplate ? 'legacy-' : ''}background/background-text-${resolvedEffectBackground}.png`,
                    backgroundEffectBoxX, backgroundEffectBoxY + effectBoxOffsetY,
                    backgroundEffectBoxWidth, backgroundEffectBoxHeight,
                    0, 0 + effectBoxOffsetY,
                    backgroundEffectBoxWidth, backgroundEffectBoxHeight,
                );
            } else {
                await drawAsset(
                    effectBackgroundCtx,
                    `${legacyTemplate ? 'legacy-' : ''}background/background-text-${resolvedEffectBackground}.png`,
                    backgroundEffectBoxX, backgroundEffectBoxY,
                );
            }
            const dyedEffectBackgroundCanvas = dyeCanvas(effectBackgroundCanvas, dyeList[4]).canvas;
            externalCtx.globalAlpha = (blendWithBackground ? opacityText : 100) / 100;
            externalCtx.drawImage(dyedEffectBackgroundCanvas, 0, 0);

            if (withPendulum) {
                const { ctx: pendulumEffectBackgroundCtx, canvas: pendulumEffectBackgroundCanvas } = createCanvas();
                const {
                    exceptionFrameType = frameType,
                    exceptionPendulumBoxOffsetHeight = 0,
                } = PendulumSizeMapException[pendulumSize][resolvedPendulumEffectBackground] ?? {};
                await drawAssetWithSize(
                    pendulumEffectBackgroundCtx,
                    `${legacyTemplate ? 'legacy-' : ''}background/background-${exceptionFrameType}-${resolvedPendulumEffectBackground}.png`,
                    pendulumBoxX, pendulumBoxY + pendulumBoxOffsetY,
                    pendulumBoxWidth, pendulumBoxHeight,
                    0, pendulumBoxOffsetY + exceptionPendulumBoxOffsetHeight,
                    pendulumBoxWidth, pendulumBoxHeight + exceptionPendulumBoxOffsetHeight,
                );
                const dyedPendulumEffectBackgroundCanvas = dyeCanvas(pendulumEffectBackgroundCanvas, dyeList[5]).canvas;
                externalCtx.globalAlpha = (blendWithBackground ? opacityPendulum : 100) / 100;
                externalCtx.drawImage(dyedPendulumEffectBackgroundCanvas, 0, 0);
            }
            externalCtx.globalAlpha = 1;
            externalCtx.resetTransform();
        },

        /** @summary BORDER section */

        drawFrameBorder: async () => {
            if (!ctx) return;
            ctx.scale(globalScale, globalScale);
            await drawAsset(ctx, `frame/frame-border-${frameBorderType}.png`, 0, 0);
            if (isPendulum && !isXyz) await drawAsset(ctx, 'frame/frame-border-pendulum.png', 0, 0);
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
                    artFrameSource = 'frame/art-border-base.png';
                }
                ctx.scale(globalScale, globalScale);
                await drawAsset(ctx, artFrameSource, artBoxX, artBoxY);
                ctx.resetTransform();
            }
        },
        drawPendulumBorder: async (artBorder: boolean) => {
            if (!ctx) return;
            /** We create a new canvas for easier manipulation. */
            const { canvas: operateCanvas, ctx: operateCtx } = createCanvas();
            const halfPendulumWidth = Math.round(pendulumFrameWidth / 2);
            await drawAssetWithSize(
                operateCtx,
                `frame-pendulum/border-pendulum-${pendulumSize}`
                    + '-base'
                    + '-artless'
                    + (pendulumFrameTypeMap.blue === 'scaleless' ? '-scaleless' : '')
                    + '.png',
                30, topToPendulumStructureFrame,
                halfPendulumWidth, pendulumFrameHeight,
                0, 0,
                halfPendulumWidth, pendulumFrameHeight,
            );
            await drawAssetWithSize(
                operateCtx,
                `frame-pendulum/border-pendulum-${pendulumSize}`
                    + '-base'
                    + '-artless'
                    + (pendulumFrameTypeMap.red === 'scaleless' ? '-scaleless' : '')
                    + '.png',
                30 + halfPendulumWidth, topToPendulumStructureFrame,
                pendulumFrameWidth - halfPendulumWidth, pendulumFrameHeight,
                halfPendulumWidth, 0,
                pendulumFrameWidth - halfPendulumWidth, pendulumFrameHeight,
            );
            if (artBorder) {
                /**
                 * In artless border, the top of the pendulum effect box has shadow. But there is no shadow in normal border, so if art border is present, we cut the top of the artless border to remove the shadow, before seemlessly join it with the art border part.
                 */
                operateCtx?.clearRect(0, 0, cardWidth, artlessFrameY + topToPendulumStructureFrame);
                await drawAsset(
                    operateCtx,
                    `frame-pendulum/border-pendulum-${pendulumSize}`
                        + '-base'
                        + '.png',
                    30, topToPendulumStructureFrame,
                );
            }

            ctx.scale(globalScale, globalScale);
            ctx.drawImage(operateCanvas, 0, 0);
            ctx.resetTransform();
        },
        drawPendulumBorderFoil: async (artBorder: boolean) => {
            if (!ctx) return;
            // /** We create a new canvas for easier manipulation. */
            const { canvas: operateCanvas, ctx: operateCtx } = createCanvas();
            const halfPendulumWidth = Math.round(pendulumFrameWidth / 2);
            await drawAssetWithSize(
                operateCtx,
                `frame-pendulum/border-pendulum-${pendulumSize}`
                    + `-${foil}`
                    + '-artless'
                    + (pendulumFrameTypeMap.blue === 'scaleless' ? '-scaleless' : '')
                    + '.png',
                30, topToPendulumStructureFrame,
                halfPendulumWidth, pendulumFrameHeight,
                0, 0,
                halfPendulumWidth, pendulumFrameHeight,
            );
            await drawAssetWithSize(
                operateCtx,
                `frame-pendulum/border-pendulum-${pendulumSize}`
                    + `-${foil}`
                    + '-artless'
                    + (pendulumFrameTypeMap.red === 'scaleless' ? '-scaleless' : '')
                    + '.png',
                30 + halfPendulumWidth, topToPendulumStructureFrame,
                pendulumFrameWidth - halfPendulumWidth, pendulumFrameHeight,
                halfPendulumWidth, 0,
                pendulumFrameWidth - halfPendulumWidth, pendulumFrameHeight,
            );
            if (artBorder) {
                await drawAsset(
                    operateCtx,
                    `frame-pendulum/border-pendulum-${pendulumSize}`
                        + `-${foil}`
                        + '.png',
                    30, topToPendulumStructureFrame,
                );
            }
            const operateCanvasAfterCustom = await blendCanvas({
                canvas: operateCanvas,
                customFoilCanvas: overlayCanvas,
                method: borderOverlayType,
            });
            const operateCanvasAfterDye = dyeCanvas(
                operateCanvasAfterCustom,
                dyeList[6],
            ).canvas;

            ctx.scale(globalScale, globalScale);
            ctx.drawImage(operateCanvasAfterDye, 0, 0);
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
                await drawAsset(ctx, 'frame/effect-border-base.png', effectBoxX, effectBoxY);
            }
            ctx.resetTransform();
        },
        drawCardBorder: async () => {
            if (!ctx) return;
            ctx.scale(globalScale, globalScale);
            const { ctx: operateCtx, canvas: operateCanvas } = createCanvas();
            await drawAsset(operateCtx, `frame/card-border-${foil}.png`, 0, 0);
            ctx.drawImage(operateCanvas, 0, 0);
            const willMix = HexColorRegex.test(dyeList[6]) || willBlendBorder;
            if (willMix) {
                const operateCanvasAfterCustom = await blendCanvas({
                    canvas: operateCanvas,
                    customFoilCanvas: overlayCanvas,
                    method: borderOverlayType,
                });
                const operateCanvasAfterDye = dyeCanvas(
                    operateCanvasAfterCustom,
                    dyeList[6],
                ).canvas;
                ctx.drawImage(operateCanvasAfterDye, 0, 0);
            }
            ctx.resetTransform();
        },

        /** @summary FOIL section */

        drawArtBorderFoil: async () => {
            if (!ctx) return;
            ctx.scale(globalScale, globalScale);
            if (artBorder) {
                const { ctx: operateCtx, canvas: operateCanvas } = createCanvas();

                await drawAsset(operateCtx, `frame/art-border-${foil}.png`, artBoxX, artBoxY);
                const operateCanvasAfterCustom = await blendCanvas({
                    canvas: operateCanvas,
                    customFoilCanvas: overlayCanvas,
                    method: borderOverlayType,
                });
                const operateCanvasAfterDye = dyeCanvas(
                    operateCanvasAfterCustom,
                    dyeList[6],
                ).canvas;
                ctx.drawImage(operateCanvasAfterDye, 0, 0);
            }
            ctx.resetTransform();
        },
        drawEffectBorderFoil: async () => {
            if (!ctx) return;
            ctx.scale(globalScale, globalScale);
            const { ctx: operateCtx, canvas: operateCanvas } = createCanvas();

            await drawAsset(operateCtx, `frame/effect-border-${foil}.png`, effectBoxX, effectBoxY);
            const operateCanvasAfterCustom = await blendCanvas({
                canvas: operateCanvas,
                customFoilCanvas: overlayCanvas,
                method: borderOverlayType,
            });
            const operateCanvasAfterDye = dyeCanvas(
                operateCanvasAfterCustom,
                dyeList[6],
            ).canvas;
            ctx.drawImage(operateCanvasAfterDye, 0, 0);
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
                await loopFinish(ctx, 'attribute', async type => drawAsset(ctx, `finish/finish-${type}-attribute.png`, attributeX, attributeY));
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