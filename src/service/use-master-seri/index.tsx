import { useCallback, useEffect, useMemo, useRef } from 'react';
import {
    clearCanvas,
    draw1stEdition,
    drawCreatorText,
    drawEffect,
    drawName,
    drawScale,
    drawStat,
    drawStatText,
    drawSetId,
    drawSticker,
    getFinishIterator,
    drawTypeAbility,
    getEffectFontAndCoordinate,
    drawAsset,
    getLayoutDrawFunction,
    drawLinkRatingText,
    drawPredefinedMark,
    setTextStyle,
    drawPasswordText,
    drawLimitedEditionMark,
} from 'src/draw';
import {
    CanvasConst,
    MasterSeriesCanvas,
    NO_ATTRIBUTE,
    getArtCanvasCoordinate,
    getDefaultCardOpacity,
    PendulumEffectFontData,
    PendulumEffectCoordinate,
    FinishMap,
    ArtFinishMap,
    CardOpacity,
    CardArtCanvasCoordinateMap,
    DEFAULT_BASE_FILL_COLOR,
} from 'src/model';
import {
    checkLightHeader,
    checkLink,
    checkMonster,
    checkNormal,
    checkSpeedSkill,
    checkXyz,
    resolveNameStyle,
} from 'src/util';
import { useCard } from '../use-card';
import { prepareStyle } from './prepare-style';

const {
    height: CanvasHeight,
    width: CanvasWidth,
} = CanvasConst;
type DrawerProp = {
    imageChangeCount: number,
    pendulumSize?: 'medium',
    isInitializing: boolean,
};
/**
 * To ensure correct layer order, each efffect that involve asynchronous image drawing will register an operation in `drawingPipeline`.
 */
export const useMasterSeriDrawer = (active: boolean, canvasMap: MasterSeriesCanvas, props: DrawerProp) => {
    const {
        card,
    } = useCard();
    const {
        drawCanvasRef,
        artworkCanvasRef,
        backgroundCanvasRef,
        frameCanvasRef,
        creatorCanvasRef,
        effectCanvasRef,
        nameCanvasRef,
        passwordCanvasRef,
        pendulumEffectCanvasRef,
        pendulumScaleCanvasRef,
        setIdCanvasRef,
        statCanvasRef,
        stickerCanvasRef,
        cardIconCanvasRef,
        typeCanvasRef,
        finishCanvasRef,
        lightboxCanvasRef,
    } = canvasMap;
    const {
        format,
        hasBackground, backgroundType,
        frame, foil, finish, artFinish, opacity,
        name, nameStyle, nameStyleType,
        effectTextStyle, pendulumTextStyle, typeTextStyle, statTextStyle,
        effect,
        effectStyle,
        typeAbility,
        isPendulum, pendulumFrame, pendulumEffect, pendulumScaleBlue, pendulumScaleRed,
        atk, def, linkMap,
        attribute,
        cardIcon, subFamily, star, starAlignment,
        setId,
        password, creator, sticker,
        isLegacyCard,
        isFirstEdition, isDuelTerminalCard, isSpeedCard, isLimitedEdition,
        furiganaHelper,
    } = card;

    const drawingPipeline = useRef<Record<string, { name: string, order: number, rerun: number, instructor: () => Promise<any> }>>({
        frame: {
            name: 'frame',
            order: 1,
            rerun: 0,
            instructor: () => Promise.resolve(),
        },
        attribute: {
            name: 'attribute',
            order: 2,
            rerun: 0,
            instructor: () => Promise.resolve(),
        },
        sticker: {
            name: 'sticker',
            order: 3,
            rerun: 0,
            instructor: () => Promise.resolve(),
        },
        creator: {
            name: 'creator',
            order: 4,
            rerun: 0,
            instructor: () => Promise.resolve(),
        },
        name: {
            name: 'name',
            order: 5,
            rerun: 0,
            instructor: () => Promise.resolve(),
        },
        typeAbility: {
            name: 'typeAbility',
            order: 6,
            rerun: 0,
            instructor: () => Promise.resolve(),
        },
        overlay: {
            name: 'overlay',
            order: 7,
            rerun: 0,
            instructor: () => Promise.resolve(),
        },
    });

    const bottomFrame = pendulumFrame === 'auto'
        ? isPendulum
            ? 'spell'
            : frame
        : pendulumFrame;

    const condenseTolerant = effectStyle?.condenseTolerant;

    const isNormal = checkNormal(card);
    const isXyz = checkXyz(card);
    const isLink = checkLink(card);
    const isMonster = checkMonster(card);
    const isSpeedSkill = checkSpeedSkill(card);

    const { body = 100, boundless } = opacity;
    const requireShadow = !!(body < 50 || boundless);
    const lightFooter = ['xyz', 'dark-synchro', 'speed-skill', 'hamon', 'uria', 'raviel'].includes(bottomFrame);
    const lightHeader = checkLightHeader(frame);
    const {
        levelStyle,
        resolvedEffectTextStyle,
        resolvedPendulumEffectTextStyle,
        resolvedStatTextStyle,
        resolvedTypeTextStyle,
    } = useMemo(() => {
        return prepareStyle({
            lightFooter,
            lightHeader,
            requireShadow,
            effectTextStyle,
            pendulumTextStyle,
            statTextStyle,
            typeTextStyle,
        });
    }, [
        lightFooter,
        lightHeader,
        requireShadow,
        effectTextStyle,
        pendulumTextStyle,
        statTextStyle,
        typeTextStyle,
    ]);

    const normalizedSubFamily = subFamily.toUpperCase();
    const normalizedTypeAbility = typeAbility.map(text => text.trim()).join(format === 'ocg' ? '／' : '/');
    const statInEffect = pendulumFrame !== 'auto' || isPendulum
        ? !!(atk || def || (isLink && linkMap.length))
        : isMonster;
    const typeInEffect = cardIcon === 'auto'
        ? isMonster || isSpeedSkill
        : cardIcon !== 'st' || isLink;

    const {
        isInitializing,
        imageChangeCount,
        pendulumSize = 'medium',
    } = props;
    const readyToDraw = active && isInitializing === false;

    const loopFinish = useMemo(() => getFinishIterator(finish, FinishMap), [finish]);
    const loopArtFinish = useMemo(() => getFinishIterator([artFinish], ArtFinishMap), [artFinish]);

    /** DRAW CARD STRUCTURE */
    useEffect(() => {
        if (!readyToDraw) return;
        const ctx = frameCanvasRef.current?.getContext('2d');
        const artworkCanvas = artworkCanvasRef.current;
        const backgroundCanvas = backgroundCanvasRef.current;

        drawingPipeline.current.frame.rerun += 1;
        drawingPipeline.current.frame.instructor = async () => {
            if (!frameCanvasRef.current || !clearCanvas(ctx)) return;

            const normalizedOpacity = { ...getDefaultCardOpacity(), ...opacity };
            const {
                artBorder: keepArtBorder,
                body: opacityBody,
                boundless,
                baseFill,
            } = normalizedOpacity;

            const fillBaseColor = (x: number, y: number, w: number, h: number) => {
                ctx.fillStyle = hasBackground ? baseFill : DEFAULT_BASE_FILL_COLOR;
                ctx.fillRect(x, y, w, h);
            };
            const hasArtBorder = opacityBody > 0 ? true : keepArtBorder;

            /** Base colored background so the card is not see-through even with transparent artwork */
            fillBaseColor(0, 0, CanvasWidth, CanvasHeight);

            const {
                drawFrame,
                drawCardArt,
                drawBackground,
                drawPendulumScaleIcon,
                drawLinkArrowMap,
                drawStar,
                drawAttribute,

                drawNameBackground,
                drawEffectBackground,

                drawFrameBorder,
                drawNameBorder,
                drawArtBorder,
                drawPendulumBorder,
                drawBorderPendulumFinish,
                drawEffectBorder,
                drawCardBorder,
                drawStatBorder,

                drawAttributeFinish,
                drawArtBorderFoil,
                drawEffectBorderFoil,
                drawLinkMapFoil,

                drawNameFinish,
                drawArtFinish,
                drawArtOverlayFinish,
                drawArtBorderFinish,
                drawPendulumArtBorderFinish,
                drawFrameFinish,
                drawFrameBackgroundFinish,
                drawOverlayFinish,
                drawCardBorderFinish,

                calculateCardArtRedrawCoordination,
            } = getLayoutDrawFunction({
                canvas: frameCanvasRef.current,
                artworkCanvas, backgroundCanvas,
                format,
                frame, bottomFrame,
                hasBackground,
                backgroundType,
                attribute,
                cardIcon, star,
                foil,
                pendulumSize,
                opacity: normalizedOpacity,
                isLink, isSpeedSkill, isXyz,
                isPendulum,
                loopFinish,
                loopArtFinish,
            });

            /** Start with artwork at the bottom, then main frame, then outer card border. */
            if (backgroundCanvas && ctx) drawBackground();
            if (artworkCanvas && ctx && !boundless) drawCardArt();
            await drawFrame();
            await drawCardBorder();
            await drawCardBorderFinish();

            /** @summary Draw NON-PENDULUM card layout */
            if (!isPendulum) {
                if (!boundless) {
                    await drawNameBackground();
                    await drawEffectBackground();
                    await drawEffectBorder();
                    /** Foil DOES NOT contains shadow, so it relies on the shadow of the border below. */
                    await drawEffectBorderFoil();
                }
                await drawArtBorder();
                await drawArtBorderFoil();
                await drawArtBorderFinish();
            }

            /** @summary Draw PENDULUM-LIKE card layout. Does not apply to Link frame since it contains link arrows. */
            if (isPendulum && !isLink && !boundless) {
                /** Since pendulum art boundary is wider, we cannot relies on the artwork under frame, instead we must draw the artwork again, this time with different size. */
                if (artworkCanvas && ctx && artworkCanvas.height > 0) {
                    const { width: artWidth, height: artHeight } = artworkCanvas;
                    const {
                        sourceOffsetX, sourceOffsetY,
                        offsetHeight,
                        destinationX, destinationY,
                        destinationWidth, destinationHeight,
                    } = calculateCardArtRedrawCoordination(artworkCanvas);

                    /** To avoid stacking transprency, we clear the area before redrawing */
                    fillBaseColor(
                        destinationX, destinationY,
                        destinationWidth, destinationHeight,
                    );

                    drawBackground('pendulum');
                    ctx.drawImage(
                        artworkCanvas,
                        sourceOffsetX, sourceOffsetY,
                        artWidth - sourceOffsetX * 2, artHeight - offsetHeight,
                        destinationX, destinationY,
                        destinationWidth, destinationHeight,
                    );
                }

                await drawNameBackground();
                await drawEffectBackground(true);
            }

            /** We must draw art finish first because pendulum's border have those little corners that spread into the artwork. */
            await drawArtFinish();
            await drawArtOverlayFinish();

            /** Scale and pendulum border frame, these will be covered by extended artwork so we doesn't draw them if the artwork is boundless */
            if (isPendulum && !isLink && !boundless) {
                await drawPendulumScaleIcon();
                /** Draw normal border first so we got the shadow ready. Again foiled border DOES NOT have shadow by their own. */
                await drawPendulumBorder(hasArtBorder, 'normal');
                await drawPendulumBorder(hasArtBorder, foil);
                await drawPendulumArtBorderFinish();
                if (hasArtBorder) await drawBorderPendulumFinish();
            }

            if (!boundless) {
                await drawFrameFinish();
                await drawNameFinish();
            }
            if (hasArtBorder) await drawFrameBackgroundFinish();

            /** Boundless art behavior here. If rigid frame is off, card image will extends beyond the current art border (on top of it). The extended card image is still below name, level, attribute, effect (both card and pendulum) and other predefined texts. */
            if (boundless) {
                if (isLink) {
                    /** For link layout, the artwork is above the art border, but still below the link arrows */
                    await drawArtBorderFinish();
                } else if (isPendulum) {
                    /** We want to fill the area inside pendulum border only, so that the outside frame remains intact. */
                    const extraHeightRatio = CardArtCanvasCoordinateMap.fullCard.ratio
                        / CardArtCanvasCoordinateMap.extendedPendulum.ratio;
                    /** Fill area with base color before start draw overlay artwork. In this case we do not want to fill everywhere, we just need to fill exactly the area contains inside pendulum border frame. */
                    if (artworkCanvas && ctx && artworkCanvas.height > 0) {
                        const {
                            destinationX, destinationY,
                            destinationWidth, destinationHeight,
                        } = calculateCardArtRedrawCoordination(
                            artworkCanvas,
                            { ...getDefaultCardOpacity(), ...opacity, body: 100, boundless: false },
                            extraHeightRatio,
                        );
    
                        fillBaseColor(
                            destinationX, destinationY,
                            destinationWidth, destinationHeight,
                        );
                        drawBackground('pendulum');
                    }
                    if (hasArtBorder) {
                        await drawPendulumBorder(hasArtBorder, 'normal');
                        await drawPendulumBorder(hasArtBorder, foil);
                    }
                    await drawPendulumArtBorderFinish();
                }
                await drawNameBackground();
                await drawNameFinish();
                await drawNameBorder();
                if (artworkCanvas && ctx) drawCardArt();
                await drawArtOverlayFinish();

                /** Redraw various part here because the extended artwork may overlap with those */
                if (isPendulum && !isLink) {
                    await drawEffectBackground(true);
                    await drawPendulumScaleIcon();
                    await drawPendulumBorder(false, 'normal');
                    await drawPendulumBorder(false, foil);
                    await drawBorderPendulumFinish();
                } else {
                    await drawEffectBackground();
                    await drawEffectBorder();
                    await drawEffectBorderFoil();
                }
                await drawFrameFinish();
            }

            if (statInEffect) await drawStatBorder(resolvedStatTextStyle.color ?? '#000000');

            /** Individual arrows has two state (active/inactive) and two different parts (base and core) */
            if (!isPendulum && isLink) {
                await drawLinkArrowMap(linkMap);
                await drawLinkMapFoil(false);
                const resetStyle = setTextStyle({ ctx, ...resolvedStatTextStyle });
                await drawLinkRatingText(frameCanvasRef.current, linkMap ?? [], resolvedStatTextStyle);
                resetStyle();
            }

            await drawAttribute();
            await drawAttributeFinish();
            if (!isLink) await drawStar({ style: levelStyle, starAlignment });
            if (!boundless) await drawNameBorder();
            await drawFrameBorder();
            await drawPredefinedMark({
                ctx,
                type: (lightFooter && !isPendulum) ? 'white' : 'black',
                bordered: (opacityBody < 50 || boundless) && !isPendulum,
                isDuelTerminalCard, isSpeedCard,
                isLink, isPendulum,
            });
            await drawOverlayFinish();
        };
    }, [
        readyToDraw,
        artworkCanvasRef,
        backgroundCanvasRef,
        frameCanvasRef,
        frame,
        format,
        hasBackground,
        backgroundType,
        attribute,
        bottomFrame,
        foil,
        star,
        starAlignment,
        cardIcon,
        isDuelTerminalCard,
        isLink,
        isPendulum,
        isSpeedCard,
        isSpeedSkill,
        isXyz,
        lightFooter,
        linkMap,
        resolvedStatTextStyle,
        loopArtFinish,
        loopFinish,
        opacity,
        pendulumSize,
        statInEffect,
        levelStyle,
        imageChangeCount, // Special dependency, do not remove even though it is not used in the effect itself
    ]);

    /** DRAW SCALE */
    useEffect(() => {
        if (!readyToDraw) return;
        const ctx = pendulumScaleCanvasRef.current?.getContext('2d');

        if (!clearCanvas(ctx)) return;
        if (isPendulum) {
            drawScale(ctx, pendulumScaleBlue ?? 0, 84.4, 790);
            drawScale(ctx, pendulumScaleRed ?? 0, 728.0, 790);
        }
    }, [readyToDraw, isPendulum, pendulumScaleBlue, pendulumScaleRed, pendulumScaleCanvasRef]);

    /** DRAW NAME */
    useEffect(() => {
        if (!readyToDraw) return;
        drawingPipeline.current.name.rerun += 1;
        drawingPipeline.current.name.instructor = async () => {
            const ctx = nameCanvasRef.current?.getContext('2d');
            const cloneNode = nameCanvasRef.current?.cloneNode() as HTMLCanvasElement | undefined;

            if (!clearCanvas(ctx) || !cloneNode) return;

            await drawName(
                ctx,
                name,
                format === 'tcg' ? 60 : 68, 116,
                attribute === NO_ATTRIBUTE
                    ? (format === 'tcg' ? 688 : 674)
                    : (format === 'tcg' ? 608 : 598),
                resolveNameStyle({ format, frame, nameStyle, nameStyleType, foil }),
                { isSpeedSkill, format, cloneNode, frame, furiganaHelper },
            );
        };
    }, [
        readyToDraw,
        attribute,
        foil,
        format,
        frame,
        furiganaHelper,
        isSpeedSkill,
        name,
        nameCanvasRef,
        nameStyle,
        nameStyleType,
    ]);

    /** DRAW STAT (ATK / DEF) */
    useEffect(() => {
        if (!readyToDraw) return;
        const ctx = statCanvasRef.current?.getContext('2d');

        if (!clearCanvas(ctx) || !statInEffect) return;

        const resetStyle = setTextStyle({ ctx, ...resolvedStatTextStyle });
        drawStatText(ctx, 'ATK', 432.10, 1106.494);
        drawStat(ctx, atk, 508.824, 1106.494);
        if (!isLink) {
            drawStatText(ctx, 'DEF', 600.85, 1106.494);
            drawStat(ctx, def, 673.865, 1106.494);
        }
        resetStyle();
    }, [readyToDraw, atk, def, isLink, isMonster, resolvedStatTextStyle, statCanvasRef, statInEffect]);

    /** DRAW SET ID */
    useEffect(() => {
        if (!readyToDraw) return;
        const ctx = setIdCanvasRef.current?.getContext('2d');

        if (!clearCanvas(ctx)) return;

        drawSetId(
            ctx,
            setId,
            {
                isLink, isPendulum,
                withShadow: requireShadow && !isPendulum,
                format,
                lightFooter,
            }
        );
    }, [readyToDraw, format, isLink, isPendulum, lightFooter, setIdCanvasRef, setId, isSpeedSkill, bottomFrame, requireShadow]);

    /** DRAW FIRST EDITION NOTICE AND PASSWORD */
    useEffect(() => {
        if (!readyToDraw) return;
        const ctx = passwordCanvasRef.current?.getContext('2d');
        if (!clearCanvas(ctx)) return;

        const endOfPassword = drawPasswordText({
            ctx,
            value: password,
            lightFooter,
            alignment: 'left',
            format,
            hasShadow: bottomFrame === 'zarc' || requireShadow,
        });
        if (isFirstEdition) {
            ctx.fillStyle = lightFooter ? '#ffffff' : '#000000';
            const left = isLegacyCard && !isPendulum
                ? isLink ? 151 : 89
                : Math.max(endOfPassword + 14.813, 142.2) - (format === 'ocg' ? 10 : 0);
            const bottom = isLegacyCard && !isPendulum
                ? 871
                : 1150.93;
            const bottomOffset = isLegacyCard && !isPendulum
                ? 0
                : isSpeedSkill ? -2 : -1;

            draw1stEdition(
                ctx,
                left,
                bottom,
                bottomOffset,
            );
        }
    }, [
        readyToDraw,
        isFirstEdition,
        password,
        passwordCanvasRef,
        lightFooter,
        format,
        requireShadow,
        isLink,
        isSpeedSkill,
        isPendulum,
        isLegacyCard,
        bottomFrame,
    ]);

    /** DRAW CREATOR (COPYRIGHT) TEXT */
    useEffect(() => {
        if (!readyToDraw) return;

        const ctx = creatorCanvasRef.current?.getContext('2d');

        drawingPipeline.current.creator.rerun += 1;
        drawingPipeline.current.creator.instructor = async () => {
            if (!clearCanvas(ctx)) return;

            const normalizedOpacity = { ...getDefaultCardOpacity(), ...opacity };
            const {
                body: opacityBody,
                boundless,
            } = normalizedOpacity;
            const endOfCreator = drawCreatorText({
                ctx: creatorCanvasRef.current?.getContext('2d'),
                format,
                value: creator,
                alignment: 'right',
                baselineOffset: isSpeedSkill ? -2 : 0,
                hasShadow: requireShadow,
                lightFooter,
            });

            if (isLimitedEdition) {
                await drawLimitedEditionMark({
                    ctx,
                    type: (lightFooter && !isPendulum) ? 'white' : 'black',
                    bordered: (opacityBody < 50 || boundless) && !isPendulum,
                    isLink, isPendulum,
                    compacted: (endOfCreator?.trueEdge ?? 390) < 390,
                    isLegacyCard,
                });
            }
        };
    }, [
        readyToDraw,
        creator,
        creatorCanvasRef,
        effectCanvasRef,
        format,
        isLegacyCard,
        isLimitedEdition,
        isLink,
        isPendulum,
        isSpeedSkill,
        lightFooter,
        opacity,
        requireShadow,
    ]);

    /** DRAW STICKER */
    useEffect(() => {
        if (!readyToDraw) return;

        drawingPipeline.current.sticker.rerun += 1;
        drawingPipeline.current.sticker.instructor = async () => {
            return await drawSticker({
                ctx: stickerCanvasRef.current?.getContext('2d'),
                sticker,
            });
        };
    }, [readyToDraw, sticker, stickerCanvasRef]);

    /** DRAW CARD EFFECT + TYPE ABILITY */
    useEffect(() => {
        if (!readyToDraw) return;

        const ctx = effectCanvasRef.current?.getContext('2d');
        const typeCtx = typeCanvasRef.current?.getContext('2d');

        drawingPipeline.current.typeAbility.rerun += 1;
        drawingPipeline.current.typeAbility.instructor = async () => {
            if (!clearCanvas(ctx) || !clearCanvas(typeCtx)) return;

            const effectIndexSize = drawEffect({
                ctx,
                content: effect,
                isNormal,
                condenseTolerant,
                format,
                furiganaHelper,
                ...getEffectFontAndCoordinate({
                    format,
                    statInEffect,
                    typeInEffect,
                    isNormal,
                }),
                textStyle: resolvedEffectTextStyle,
            });
            await drawTypeAbility({
                ctx: typeCtx,
                format,
                frame,
                furiganaHelper,
                isMonster,
                textStyle: resolvedTypeTextStyle,
                size: !typeInEffect
                    ? 'large'
                    : effectIndexSize === 0 ? 'medium' : 'small',
                subFamily: normalizedSubFamily,
                typeAbility: normalizedTypeAbility,
            });
        };
    }, [
        readyToDraw,
        typeInEffect,
        statInEffect,
        condenseTolerant,
        effect,
        effectCanvasRef,
        format,
        frame,
        furiganaHelper,
        isMonster,
        isNormal,
        resolvedTypeTextStyle,
        resolvedEffectTextStyle,
        normalizedSubFamily,
        normalizedTypeAbility,
        typeCanvasRef,
    ]);

    /** DRAW PENDULUM EFFECT */
    useEffect(() => {
        if (!readyToDraw) return;
        const ctx = pendulumEffectCanvasRef.current?.getContext('2d');

        if (!clearCanvas(ctx)) return;
        if (isPendulum) {
            drawEffect({
                ctx,
                content: pendulumEffect,
                isNormal: false,
                fontData: PendulumEffectFontData[format],
                textStyle: resolvedPendulumEffectTextStyle,
                sizeList: PendulumEffectCoordinate,
                condenseTolerant,
                format,
                furiganaHelper,
            });
        }
    }, [readyToDraw, condenseTolerant, format, isPendulum, pendulumEffectCanvasRef, pendulumEffect, furiganaHelper, resolvedPendulumEffectTextStyle]);

    /** DRAW TOTAL OVERLAY */
    useEffect(() => {
        if (!readyToDraw) return;
        const ctx = finishCanvasRef.current?.getContext('2d');

        drawingPipeline.current.overlay.rerun += 1;
        drawingPipeline.current.overlay.instructor = async () => {
            if (!clearCanvas(ctx)) return;
            await loopFinish(
                ctx,
                'total-overlay',
                overlayType => drawAsset(ctx, `finish/finish-${overlayType}-total-overlay.png`, 0, 0),
            );
        };
    }, [readyToDraw, finishCanvasRef, loopFinish, name]);

    const drawHistory = useRef<Record<string, number>>({});
    const onExport = useCallback(async (exportProps: {
        isPendulum: boolean,
        opacity: Partial<CardOpacity>,
        // isRelevant: () => boolean,
    }) => {
        const {
            // isRelevant,
            isPendulum = false,
            opacity,
        } = exportProps;
        const canvasRef = drawCanvasRef.current;
        const exportCtx = canvasRef?.getContext('2d');
        /** Delay queue and relevant checker is used for potential performance improvement, but currently performance is not a making a hard impact to the app. */
        const generateLayer = (
            canvasLayer: React.RefObject<HTMLCanvasElement>,
            exportCtx: CanvasRenderingContext2D | null | undefined,
            delayQueue: number = 0,
        ) => {
            return new Promise<boolean>(resolve => {
                setTimeout(() => {
                    if (!canvasLayer.current || !exportCtx) resolve(false);
                    else {
                        try {
                            canvasLayer.current.toBlob(blob => {
                                if (!blob) resolve(false);
                                else {
                                    const url = URL.createObjectURL(blob);
                                    if (!url) resolve(false);
                                    else {
                                        const layer = new Image();
                                        layer.src = url;
                                        layer.onload = () => {
                                            exportCtx.drawImage(layer, 0, 0);
                                            URL.revokeObjectURL(url);
                                            resolve(true);
                                        };
                                        layer.onerror = () => {
                                            URL.revokeObjectURL(url);
                                            resolve(false);
                                        };
                                    }
                                }
                            });
                        } catch (e) {
                            console.error(e);
                            resolve(false);
                        }
                    }
                }, delayQueue * 25);
            });
        };

        if (canvasRef && exportCtx) {
            exportCtx.clearRect(0, 0, CanvasConst.width, CanvasConst.height);
            await Promise.all(Object
                .values(drawingPipeline.current)
                .sort((l, r) => l.order - r.order)
                .map(({ instructor, rerun, name }) => {
                    if (
                        (rerun !== 0 && drawHistory.current[name] !== rerun)
                        || !drawHistory.current[name]
                    ) {
                        drawHistory.current[name] = rerun;

                        return instructor();
                    }
                    return Promise.resolve();
                }));
            // await generateLayer(frameCanvas, exportCtx);
            const artworkCanvas = artworkCanvasRef.current;
            if (artworkCanvas && exportCtx) {
                const { artX, artY, artWidth } = getArtCanvasCoordinate(isPendulum, opacity);
                const { width: imageWidth, height: imageHeight } = artworkCanvas;

                if (imageHeight > 0) {
                    exportCtx.drawImage(
                        artworkCanvas,
                        0, 0,
                        imageWidth, imageHeight,
                        artX, artY,
                        artWidth, artWidth / (imageWidth / imageHeight),
                    );
                }
            }
            /** It is not worth to use promise all here, just let them go sequentially to avoid too much blob generating call. */
            await generateLayer(frameCanvasRef, exportCtx, 0);
            await generateLayer(nameCanvasRef, exportCtx, 0);
            await generateLayer(cardIconCanvasRef, exportCtx, 0);
            await generateLayer(pendulumScaleCanvasRef, exportCtx, 0);
            await generateLayer(pendulumEffectCanvasRef, exportCtx, 0);
            await generateLayer(typeCanvasRef, exportCtx, 0);
            await generateLayer(effectCanvasRef, exportCtx, 0);
            await generateLayer(statCanvasRef, exportCtx, 0);
            await generateLayer(setIdCanvasRef, exportCtx, 0);
            await generateLayer(passwordCanvasRef, exportCtx, 0);
            await generateLayer(creatorCanvasRef, exportCtx, 0);
            await generateLayer(stickerCanvasRef, exportCtx, 0);
            await generateLayer(finishCanvasRef, exportCtx, 0);

            lightboxCanvasRef.current?.getContext('2d')?.drawImage(canvasRef, 0, 0);
        }
    }, [
        artworkCanvasRef, 
        cardIconCanvasRef, 
        creatorCanvasRef, 
        drawCanvasRef, 
        effectCanvasRef, 
        finishCanvasRef, 
        lightboxCanvasRef, 
        nameCanvasRef, 
        passwordCanvasRef, 
        pendulumEffectCanvasRef, 
        pendulumScaleCanvasRef, 
        setIdCanvasRef, 
        frameCanvasRef, 
        statCanvasRef, 
        stickerCanvasRef, 
        typeCanvasRef,
    ]);

    return {
        drawingPipeline,
        onExport,
    };
};

export * from './prepare-style';