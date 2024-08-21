import { useEffect, useMemo, useRef } from 'react';
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
    drawCardIcon,
    drawSticker,
    drawPassword,
    getFinishIterator,
    drawTypeAbility,
    getEffectSizeAndCoordinate,
    drawAsset,
    getLayoutDrawFunction,
    drawLinkRatingText,
    drawPredefinedMark,
} from 'src/draw';
import {
    CanvasConst,
    MasterDuelCanvas,
    NO_ATTRIBUTE,
    getArtCanvasCoordinate,
    getDefaultCardOpacity,
    PendulumEffectFontData,
    PendulumEffectCoordinate,
    FinishMap,
    ArtFinishMap,
    CardOpacity,
    CardArtCanvasCoordinateMap,
} from 'src/model';
import {
    checkLink,
    checkMonster,
    checkNormal,
    checkSpeedSkill,
    checkXyz,
    getCardIconFromFrame,
    resolveNameStyle,
} from 'src/util';
import { useCard } from './use-card';

const {
    height: CanvasHeight,
    width: CanvasWidth,
} = CanvasConst;
type DrawerProp = {
    imageChangeCount: number,
    pendulumSize?: 'medium',
    isInitializing: boolean,
}
export const useMasterSeriDrawer = (active: boolean, canvasMap: MasterDuelCanvas, props: DrawerProp) => {
    const {
        card,
    } = useCard();
    const {
        drawCanvasRef,
        // artCanvas,
        previewCanvasRef,
        specialFrameCanvasRef,
        attributeCanvasRef,
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
        frame, foil, finish, artFinish, opacity,
        name, nameStyle, nameStyleType,
        effect,
        effectStyle,
        typeAbility,
        isPendulum, pendulumFrame, pendulumEffect, pendulumScaleBlue, pendulumScaleRed,
        atk, def, linkMap,
        attribute,
        cardIcon, subFamily, star,
        setId,
        password, creator, sticker,
        isFirstEdition, isDuelTerminalCard, isSpeedCard,
        furiganaHelper,
    } = card;

    const bottomFrame = pendulumFrame === 'auto'
        ? isPendulum
            ? 'spell'
            : frame
        : pendulumFrame;

    const hasArtFrame = opacity.artFrame;
    const condenseTolerant = effectStyle?.condenseTolerant;

    const isNormal = checkNormal(card);
    const isXyz = checkXyz(card);
    const isLink = checkLink(card);
    const isMonster = checkMonster(card);
    const isSpeedSkill = checkSpeedSkill(card);

    const lightFooter = ['xyz', 'dark-synchro', 'speed-skill', 'hamon', 'uria', 'raviel'].includes(bottomFrame);

    const normalizedSubFamily = subFamily.toUpperCase();
    const normalizedTypeAbility = typeAbility.map(text => text.trim()).join('/');
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

    const drawingPipeline = useRef<Record<string, { name: string, order: number, rerun: number, instructor: () => Promise<any> }>>({
        frame: {
            name: 'frame',
            order: 0,
            rerun: 0,
            instructor: () => Promise.resolve(),
        },
        star: {
            name: 'star',
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
        specialFrame: {
            name: 'specialFrame',
            order: 3,
            rerun: 0,
            instructor: () => Promise.resolve(),
        },
        sticker: {
            name: 'sticker',
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

    /** DRAW CARD STRUCTURE */
    useEffect(() => {
        if (!readyToDraw) return;
        const ctx = specialFrameCanvasRef.current?.getContext('2d');
        const previewCanvas = previewCanvasRef.current;

        drawingPipeline.current.specialFrame.rerun += 1;
        drawingPipeline.current.specialFrame.instructor = async () => {
            if (!clearCanvas(ctx)) return;
            const {
                artBorder: keepArtBorder,
                body: opacityBody,
                artFrame: rigidFrame,
                baseFill,
            } = { ...getDefaultCardOpacity(), ...opacity };

            const fillBaseColor = (x: number, y: number, w: number, h: number) => {
                ctx.fillStyle = baseFill;
                ctx.fillRect(x, y, w, h);
            };
            const artBorder = opacityBody > 0 ? true : keepArtBorder;

            /** Base colored background so the card is not see-through even with transparent artwork */
            fillBaseColor(0, 0, CanvasWidth, CanvasHeight);

            const {
                drawFrame,
                drawCardArt,
                drawPendulumScaleIcon,
                drawLinkArrowMap,

                drawNameBackground,
                drawEffectBackground,

                drawFrameBorder,
                drawNameBorder,
                drawArtBorder,
                drawPendulumBorder,
                drawBorderPendulumFinish,
                drawEffectBorder,
                drawCardBorder,

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
                ctx,
                previewCanvas,
                frame, bottomFrame,
                foil,
                pendulumSize,
                opacity: { ...getDefaultCardOpacity(), ...opacity },
                isLink, isSpeedSkill, isXyz,
                isPendulum,
                loopFinish,
                loopArtFinish,
            });

            /** Start with artwork at the bottom, then main frame, then outer card border. */
            if (previewCanvas && ctx && rigidFrame) drawCardArt();
            await drawFrame();
            await drawCardBorder();
            await drawCardBorderFinish();

            /** @summary Draw NON-PENDULUM card layout */
            if (!isPendulum) {
                if (rigidFrame) {
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
            if (isPendulum && !isLink && rigidFrame) {
                /** Since pendulum art boundary is wider, we cannot relies on the artwork under frame, instead we must draw the artwork again, this time with different size. */
                if (previewCanvas && ctx && previewCanvas.height > 0) {
                    const { width: imageWidth, height: imageHeight } = previewCanvas;
                    const {
                        sourceOffsetX, sourceOffsetY,
                        offsetHeight,
                        destinationX, destinationY,
                        destinationWidth, destinationHeight,
                    } = calculateCardArtRedrawCoordination(previewCanvas);

                    /** To avoid stacking transprency, we clear the area before redrawing */
                    fillBaseColor(
                        destinationX, destinationY,
                        destinationWidth, destinationHeight,
                    );
                    ctx.drawImage(
                        previewCanvas,
                        sourceOffsetX, sourceOffsetY,
                        imageWidth - sourceOffsetX * 2, imageHeight - offsetHeight,
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

            /** Scale and pendulum border frame, these will be covered by extended artwork so we doesn't draw them if rigidFrame is false */
            if (isPendulum && !isLink && rigidFrame) {
                await drawPendulumScaleIcon();
                /** Draw normal border first so we got the shadow ready. Again foiled border DOES NOT have shadow by their own. */
                await drawPendulumBorder(artBorder, 'normal');
                await drawPendulumBorder(artBorder, foil);
                await drawPendulumArtBorderFinish();
                if (artBorder) await drawBorderPendulumFinish();
            }

            if (rigidFrame) {
                await drawFrameFinish();
                await drawNameFinish();
            }
            if (artBorder) await drawFrameBackgroundFinish();

            /** Overlay behavior here. If rigid frame is off, card image will extends beyond the current art border (on top of it). The extended card image is still below name, level, attribute, effect (both card and pendulum) and other predefined texts. */
            if (!rigidFrame) {
                if (isLink) {
                    /** For link layout, the artwork is above the art border, but still below the link arrows */
                    await drawArtBorderFinish();
                } else if (isPendulum) {
                    /** We want to fill the area inside pendulum border only, so that the outside frame remains intact. */
                    const extraHeightRatio = CardArtCanvasCoordinateMap.fullCard.ratio
                        / CardArtCanvasCoordinateMap.extendedPendulum.ratio;
                    /** Fill area with base color before start draw overlay artwork. In this case we do not want to fill everywhere, we just need to fill exactly the area contains inside pendulum border frame. */
                    if (previewCanvas && ctx && previewCanvas.height > 0) {
                        const {
                            destinationX, destinationY,
                            destinationWidth, destinationHeight,
                        } = calculateCardArtRedrawCoordination(
                            previewCanvas,
                            { ...getDefaultCardOpacity(), ...opacity, body: 100, artFrame: true },
                            extraHeightRatio,
                        );
    
                        fillBaseColor(
                            destinationX, destinationY,
                            destinationWidth, destinationHeight,
                        );
                    }
                    if (artBorder) {
                        await drawPendulumBorder(artBorder, 'normal');
                        await drawPendulumBorder(artBorder, foil);
                    }
                    await drawPendulumArtBorderFinish();
                }
                await drawNameBackground();
                await drawNameFinish();
                await drawNameBorder();
                if (previewCanvas && ctx) drawCardArt();
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

            if (statInEffect) await drawAsset(ctx, 'frame/frame-stat-border.png', 0, 1070);

            /** Individual arrows has two state (active/inactive) and two different parts (base and core) */
            if (!isPendulum && isLink) {
                await drawLinkArrowMap(linkMap);
                await drawLinkMapFoil(false);
                await drawLinkRatingText(ctx, linkMap);
            }

            if (rigidFrame) drawNameBorder();

            await drawFrameBorder();

            await drawPredefinedMark({
                ctx,
                type: lightFooter ? 'white' : 'black',
                isDuelTerminalCard, isSpeedCard,
                isLink, isPendulum,
            });

            await drawOverlayFinish();
        };
    }, [
        readyToDraw,
        previewCanvasRef,
        specialFrameCanvasRef,
        frame,
        bottomFrame,
        foil,
        isDuelTerminalCard,
        isLink,
        isPendulum,
        isSpeedCard,
        isSpeedSkill,
        isXyz,
        lightFooter,
        linkMap,
        loopArtFinish,
        loopFinish,
        opacity,
        pendulumSize,
        statInEffect,
        imageChangeCount, // Special dependency
    ]);

    /** DRAW ATTRIBUTE */
    useEffect(() => {
        if (!readyToDraw) return;

        const ctx = attributeCanvasRef.current?.getContext('2d');
        drawingPipeline.current.attribute.rerun += 1;
        drawingPipeline.current.attribute.instructor = async () => {
            if (!clearCanvas(ctx, CanvasWidth, 148.125)) return;

            await drawAsset(ctx, `attribute/attr-${format}-${attribute.toLowerCase()}.png`, 678, 55);
            await loopFinish(ctx, 'attribute', type => drawAsset(ctx, `finish/finish-${type}-attribute.png`, 678, 55));
        };
    }, [readyToDraw, attribute, attributeCanvasRef, format, loopFinish]);

    /** DRAW STAR (NEG. LEVEL - LEVEL - RANK) - ST ICON */
    useEffect(() => {
        if (!readyToDraw) return;

        const ctx = cardIconCanvasRef.current?.getContext('2d');
        drawingPipeline.current.star.rerun += 1;
        drawingPipeline.current.star.instructor = () => {
            if (!clearCanvas(ctx, CanvasWidth, 222) || isLink) return new Promise(resolve => resolve(true));

            const normalizedCardIcon = cardIcon === 'auto' ? getCardIconFromFrame(frame) : cardIcon;
            return drawCardIcon({
                ctx,
                cardIcon: normalizedCardIcon,
                star: star ?? 0,
                onStarDraw: coordinate => normalizedCardIcon === 'st'
                    ? Promise.resolve()
                    : loopFinish(
                        ctx,
                        'star',
                        type => drawAsset(ctx, `finish/finish-${type}-star.png`, ...coordinate),
                    ),
            });
        };
    }, [
        readyToDraw,
        cardIcon,
        cardIconCanvasRef,
        frame,
        isLink,
        loopFinish,
        star,
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
        const ctx = nameCanvasRef.current?.getContext('2d');
        drawingPipeline.current.name.rerun += 1;
        drawingPipeline.current.name.instructor = async () => {
            const cloneNode = nameCanvasRef.current?.cloneNode() as HTMLCanvasElement | undefined;
            if (!clearCanvas(ctx) || !cloneNode) return;

            await drawName(
                ctx,
                name,
                format === 'tcg' ? 60 : 68, 115.5375,
                attribute === NO_ATTRIBUTE
                    ? (format === 'tcg' ? 694 : 678)
                    : (format === 'tcg' ? 606 : 598),
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

        drawStatText(ctx, 'ATK', 432.10, 1106.494);
        drawStat(ctx, atk, 508.824, 1106.494);
        if (!isLink) {
            drawStatText(ctx, 'DEF', 600.85, 1106.494);
            drawStat(ctx, def, 673.865, 1106.494);
        }
    }, [readyToDraw, atk, def, isLink, isMonster, statCanvasRef, statInEffect]);

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
                withShadow: bottomFrame === 'zarc' || !hasArtFrame,
                format,
                lightFooter,
            }
        );
    }, [readyToDraw, format, isLink, isPendulum, lightFooter, setIdCanvasRef, setId, isSpeedSkill, bottomFrame, hasArtFrame]);

    /** DRAW FIRST EDITION NOTICE AND PASSWORD */
    useEffect(() => {
        if (!readyToDraw) return;
        const ctx = passwordCanvasRef.current?.getContext('2d');
        if (!clearCanvas(ctx)) return;

        const endOfPassword = drawPassword({
            ctx,
            password,
            lightFooter,
            withShadow: bottomFrame === 'zarc' || !hasArtFrame,
        });
        if (isFirstEdition && !isDuelTerminalCard) {
            ctx.fillStyle = lightFooter ? '#ffffff' : '#000000';

            draw1stEdition(
                ctx,
                Math.max(endOfPassword + 14.813, 142.2) - (format === 'ocg' ? 10 : 0),
                isSpeedSkill ? -2 : 0,
            );
        }
    }, [
        readyToDraw,
        isDuelTerminalCard,
        isFirstEdition,
        password,
        passwordCanvasRef,
        lightFooter,
        format,
        hasArtFrame,
        isSpeedSkill,
        bottomFrame,
    ]);

    /** DRAW CREATOR TEXT */
    useEffect(() => {
        if (!readyToDraw) return;

        drawCreatorText({
            ctx: creatorCanvasRef.current?.getContext('2d'),
            format,
            value: creator,
            alignment: 'right',
            baselineOffset: isSpeedSkill ? -2 : 0,
            hasShadow: !hasArtFrame,
            lightFooter,
        });
    }, [readyToDraw, isPendulum, lightFooter, creator, creatorCanvasRef, format, hasArtFrame, isSpeedSkill]);

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
                ...getEffectSizeAndCoordinate({
                    format,
                    statInEffect,
                    typeInEffect,
                    isNormal,
                }),
            });
            await drawTypeAbility({
                ctx: typeCtx,
                format,
                frame,
                furiganaHelper,
                isMonster,
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
                sizeList: PendulumEffectCoordinate,
                condenseTolerant,
                format,
                furiganaHelper,
            });
        }
    }, [readyToDraw, condenseTolerant, format, isPendulum, pendulumEffectCanvasRef, pendulumEffect, furiganaHelper]);

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
    const onExport = useRef(async (exportProps: {
        isPendulum: boolean,
        opacity: Partial<CardOpacity>,
    }) => {
        const {
            isPendulum = false,
            opacity,
        } = exportProps;
        const canvasRef = drawCanvasRef.current;
        const exportCtx = canvasRef?.getContext('2d');
        const generateLayer = (canvasLayer: React.RefObject<HTMLCanvasElement>, ctx: CanvasRenderingContext2D | null | undefined) => {
            return new Promise<boolean>(resolve => {
                if (canvasLayer.current && ctx) {
                    let layerData = '';
                    try {
                        layerData = canvasLayer.current.toDataURL('image/png');
                    } catch (e) {
                        console.error(e);
                    }

                    if (layerData) {
                        var layer = new Image();
                        layer.src = layerData;
                        layer.onload = () => {
                            ctx.drawImage(layer, 0, 0);
                            resolve(true);
                        };
                        layer.onerror = () => resolve(false);
                    } else resolve(true);
                } else resolve(false);
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
            const previewCanvas = previewCanvasRef.current;
            if (previewCanvas && exportCtx) {
                const { artX, artY, artWidth } = getArtCanvasCoordinate(isPendulum, opacity);
                const { width: imageWidth, height: imageHeight } = previewCanvas;

                if (imageHeight > 0) {
                    exportCtx.drawImage(
                        previewCanvas,
                        0, 0,
                        imageWidth, imageHeight,
                        artX, artY,
                        artWidth, artWidth / (imageWidth / imageHeight),
                    );
                }
            }
            await generateLayer(specialFrameCanvasRef, exportCtx);
            await Promise.all([
                nameCanvasRef,
                attributeCanvasRef,
                cardIconCanvasRef,
                pendulumScaleCanvasRef,
                pendulumEffectCanvasRef,
                typeCanvasRef,
                effectCanvasRef,
                statCanvasRef,
                setIdCanvasRef,
                passwordCanvasRef,
                creatorCanvasRef,
                stickerCanvasRef,
                finishCanvasRef,
            ].map(currentlayer => generateLayer(currentlayer, exportCtx)));

            lightboxCanvasRef.current?.getContext('2d')?.drawImage(canvasRef, 0, 0);
        }
    }).current;

    return {
        drawingPipeline,
        onExport,
    };
};
