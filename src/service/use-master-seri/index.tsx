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
    DEFAULT_EFFECT_NORMAL_SIZE,
    DEFAULT_PENDULUM_EFFECT_NORMAL_SIZE,
    PendulumNormalFontData,
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
import { LanguageDataDictionary } from '../use-i18n';
import { notification } from 'antd';

const {
    height: CanvasHeight,
    width: CanvasWidth,
} = CanvasConst;
type DrawerProp = {
    imageChangeCount: number,
    pendulumSize?: 'medium',
    isInitializing: boolean,
    language: LanguageDataDictionary,
    globalScale: number,
};
type DrawingPipeline = {
    name: string,
    order: number,
    rerun: number,
    instructor: () => Promise<any>,
};
/**
 * To ensure correct layer order, each efffect that involve asynchronous image drawing will register an operation in `drawingPipeline` instead of immediately draw their part, these operations will be iterated sequentially by another effect when export.
 */
export const useMasterSeriDrawer = (active: boolean, canvasMap: MasterSeriesCanvas, props: DrawerProp) => {
    const {
        card,
    } = useCard();
    const {
        exportCanvasRef,
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
        lightboxRef,
        previewCanvasRef,
    } = canvasMap;
    const {
        format,
        hasBackground, backgroundType,
        frame, foil, finish, artFinish, opacity,
        name, nameStyle, nameStyleType,
        effectTextStyle, pendulumTextStyle, typeTextStyle, statTextStyle, otherTextStyle,
        effect,
        effectStyle,
        typeAbility,
        isPendulum, pendulumFrame, pendulumEffect, pendulumScaleBlue, pendulumScaleRed, pendulumStyle,
        atk, def, linkMap,
        attribute,
        cardIcon, subFamily, star, starAlignment,
        setId,
        password, creator, sticker,
        isLegacyCard,
        isFirstEdition, isDuelTerminalCard, isSpeedCard, isLimitedEdition,
        furiganaHelper,
    } = card;

    const drawingPipeline = useRef<Record<string, DrawingPipeline>>({
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
        resolvedOtherEffectTextStyle,
    } = useMemo(() => {
        return prepareStyle({
            lightFooter,
            lightHeader,
            requireShadow,
            effectTextStyle,
            pendulumTextStyle,
            otherTextStyle,
            statTextStyle,
            typeTextStyle,
        });
    }, [
        lightFooter,
        lightHeader,
        requireShadow,
        effectTextStyle,
        pendulumTextStyle,
        otherTextStyle,
        statTextStyle,
        typeTextStyle,
    ]);

    const normalizedSubFamily = subFamily.toUpperCase();
    const normalizedTypeAbility = typeAbility.map(text => text.trim()).join(format === 'ocg' ? '／' : ' / ');
    const statInEffect = (pendulumFrame !== 'auto' || isPendulum)
        ? !!(atk || def || (isLink && linkMap.length))
        : isMonster;
    const typeInEffect = cardIcon === 'auto'
        ? isMonster || isSpeedSkill
        : cardIcon !== 'st' || isLink;

    const {
        isInitializing,
        imageChangeCount,
        pendulumSize = 'medium',
        language,
        globalScale,
    } = props;
    const readyToDraw = active && isInitializing === false;

    const loopFinish = useMemo(() => getFinishIterator(finish, FinishMap), [finish]);
    const loopArtFinish = useMemo(() => getFinishIterator([artFinish], ArtFinishMap), [artFinish]);

    /** DRAW CARD STRUCTURE */
    useEffect(() => {
        if (!readyToDraw) return;
        drawingPipeline.current.frame.rerun += 1;
        drawingPipeline.current.frame.instructor = async () => {
            const ctx = frameCanvasRef.current?.getContext('2d');
            const artworkCanvas = artworkCanvasRef.current;
            const backgroundCanvas = backgroundCanvasRef.current;

            if (!clearCanvas(ctx) || !frameCanvasRef.current) return;

            const normalizedOpacity = { ...getDefaultCardOpacity(), ...opacity };
            const {
                artBorder: keepArtBorder,
                body: opacityBody,
                boundless,
                baseFill,
            } = normalizedOpacity;

            /** Extremely weird bug in Chrome Mobile that make this frame draw twice and overlapping each other. The bug appear and disappear consistently with seemingly unrelated actions:
             * * Choose a finish type with overlay finish fixex the problem, but draw the same overlay manually won't fix it.
             * * Set default base fill to transparency fix the problem.
             * 
             * Because the issue happens on mobile with limited debug capability, we can't quite figure out what is the root cause, but put the fillRect call inside a promise is the only consistent way to resolve this issue.
             */
            const fillBaseColor = (x: number, y: number, w: number, h: number) => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        ctx.fillStyle = hasBackground ? baseFill : DEFAULT_BASE_FILL_COLOR;
                        ctx.fillRect(x, y, w, h);
                        resolve(true);
                    }, 0);
                });
            };
            const hasArtBorder = opacityBody > 0 ? true : keepArtBorder;

            /** Base colored background so the card is not see-through even with transparent artwork */
            await fillBaseColor(0, 0, globalScale * CanvasWidth, globalScale * CanvasHeight);

            const {
                drawAttribute,
                drawBackground,
                drawCardArt,
                drawFrame,
                drawLinkArrowMap,
                drawPendulumScaleIcon,
                drawStar,

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
                globalScale,
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
                    await fillBaseColor(
                        globalScale * destinationX, globalScale * destinationY,
                        globalScale * destinationWidth, globalScale * destinationHeight,
                    );

                    drawBackground('pendulum');
                    ctx.drawImage(
                        artworkCanvas,
                        sourceOffsetX, sourceOffsetY,
                        artWidth - sourceOffsetX * 2, artHeight - offsetHeight,
                        globalScale * destinationX, globalScale * destinationY,
                        globalScale * destinationWidth, globalScale * destinationHeight,
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
    
                        await fillBaseColor(
                            globalScale * destinationX, globalScale * destinationY,
                            globalScale * destinationWidth, globalScale * destinationHeight,
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

            if (statInEffect) await drawStatBorder({
                color: '#000000',
                ...resolvedStatTextStyle,
            });

            /** Individual arrows has two state (active/inactive) and two different parts (base and core) */
            if (!isPendulum && isLink) {
                await drawLinkArrowMap(linkMap);
                await drawLinkMapFoil(false);
                const resetStyle = setTextStyle({ ctx, ...resolvedStatTextStyle, globalScale });
                if (statInEffect) await drawLinkRatingText(frameCanvasRef.current, linkMap ?? [], resolvedStatTextStyle, globalScale);
                resetStyle();
            }

            await drawAttribute();
            await drawAttributeFinish();
            if (!isLink && !isSpeedSkill) await drawStar({ style: levelStyle, starAlignment });
            if (!boundless) await drawNameBorder();
            await drawFrameBorder();
            await drawPredefinedMark({
                canvas: frameCanvasRef.current,
                globalScale,
                type: (lightFooter && !isPendulum) ? 'white' : 'black',
                bordered: (opacityBody < 50 || boundless) && !isPendulum,
                isDuelTerminalCard, isSpeedCard,
                isLink, isPendulum,
                textStyle: resolvedOtherEffectTextStyle,
            });
            await drawOverlayFinish();
        };
    }, [
        readyToDraw,
        globalScale,
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
        resolvedOtherEffectTextStyle,
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
            drawScale(ctx, pendulumScaleBlue ?? '0', 84.4, 790, globalScale);
            drawScale(ctx, pendulumScaleRed ?? '0', 728.0, 790, globalScale);
        }
    }, [readyToDraw, globalScale, isPendulum, pendulumScaleBlue, pendulumScaleRed, pendulumScaleCanvasRef]);

    /** DRAW NAME */
    useEffect(() => {
        if (!readyToDraw) return;
        drawingPipeline.current.name.rerun += 1;
        drawingPipeline.current.name.instructor = async () => {
            const ctx = nameCanvasRef.current?.getContext('2d');
            const cloneNode = nameCanvasRef.current?.cloneNode() as HTMLCanvasElement | undefined;

            if (!clearCanvas(ctx) || !cloneNode) return;

            await drawName(
                nameCanvasRef.current,
                ctx,
                name,
                format === 'tcg' ? 60 : 68, 116,
                attribute === NO_ATTRIBUTE
                    ? (format === 'tcg' ? 688 : 674)
                    : (format === 'tcg' ? 608 : 598),
                resolveNameStyle({ format, frame, nameStyle, nameStyleType, foil }),
                { isSpeedSkill, format, cloneNode, frame, furiganaHelper, globalScale },
            );
        };
    }, [
        readyToDraw,
        globalScale,
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

        const resetStyle = setTextStyle({ ctx, ...resolvedStatTextStyle, globalScale });
        drawStatText(ctx, 'ATK', 432.10, 1106.494, globalScale);
        drawStat(ctx, atk, 508.824, 1106.494, globalScale);
        if (!isLink) {
            drawStatText(ctx, 'DEF', 600.85, 1106.494, globalScale);
            drawStat(ctx, def, 673.865, 1106.494, globalScale);
        }
        resetStyle();
    }, [readyToDraw, globalScale, atk, def, isLink, isMonster, resolvedStatTextStyle, statCanvasRef, statInEffect]);

    /** DRAW SET ID */
    useEffect(() => {
        if (!readyToDraw) return;
        const ctx = setIdCanvasRef.current?.getContext('2d');

        if (!clearCanvas(ctx)) return;

        drawSetId(
            ctx,
            setId,
            {
                globalScale,
                isLink, isPendulum,
                withShadow: requireShadow && !isPendulum,
                format,
                lightFooter,
                textStyle: resolvedOtherEffectTextStyle,
            }
        );
    }, [
        readyToDraw,
        globalScale,
        format,
        isLink,
        isPendulum,
        lightFooter,
        setIdCanvasRef,
        setId,
        isSpeedSkill,
        bottomFrame,
        requireShadow,
        resolvedOtherEffectTextStyle,
    ]);

    /** DRAW FIRST EDITION NOTICE AND PASSWORD */
    useEffect(() => {
        if (!readyToDraw) return;
        const ctx = passwordCanvasRef.current?.getContext('2d');
        if (!clearCanvas(ctx)) return;

        const {
            rightEdge,
            isNumberPassword,
        } = drawPasswordText({
            ctx,
            globalScale,
            value: password,
            lightFooter,
            alignment: 'left',
            format,
            hasShadow: bottomFrame === 'zarc' || requireShadow,
            textStyle: resolvedOtherEffectTextStyle,
        });
        if (isFirstEdition) {
            const willDraw = isPendulum
                ? isNumberPassword ? true : false
                : true;
            const left = (isLegacyCard || !isNumberPassword) && !isPendulum
                ? isLink ? 151 : 89
                : Math.max(rightEdge / globalScale + 14.813, 142.2) - (format === 'ocg' ? 7 : 0);
            const bottom = (isLegacyCard || !isNumberPassword) && !isPendulum
                ? 871
                : 1150.93;
            const bottomOffset = (isLegacyCard || !isNumberPassword) && !isPendulum
                ? 0
                : isSpeedSkill ? -2 : -1;

            if (willDraw) draw1stEdition(
                ctx,
                left,
                bottom,
                bottomOffset,
                {
                    globalScale,
                    textStyle: {
                        color: lightFooter ? '#ffffff' : '#000000',
                        ...resolvedOtherEffectTextStyle,
                    }
                },
            );
        }
    }, [
        readyToDraw,
        globalScale,
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
        resolvedOtherEffectTextStyle,
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
            const endOfCreatorText = drawCreatorText({
                ctx: creatorCanvasRef.current?.getContext('2d'),
                format,
                value: creator,
                alignment: 'right',
                baselineOffset: isSpeedSkill ? -2 : 0,
                hasShadow: requireShadow,
                lightFooter,
                textStyle: resolvedOtherEffectTextStyle,
                globalScale,
            });
            const compactThreshold = (format === 'tcg' ? 390 : 350) * globalScale;
            const compactOffset = (format === 'tcg' ? 30 : 40) * globalScale;

            if (isLimitedEdition && creatorCanvasRef.current) {
                await drawLimitedEditionMark({
                    canvas: creatorCanvasRef.current,
                    ctx,
                    globalScale,
                    type: (lightFooter && !isPendulum) ? 'white' : 'black',
                    bordered: (opacityBody < 50 || boundless) && !isPendulum,
                    isLink, isPendulum,
                    widthOffset: (endOfCreatorText?.leftEdge ?? compactThreshold) < compactThreshold
                        ? compactOffset
                        : 0,
                    isLegacyCard,
                    textStyle: resolvedOtherEffectTextStyle,
                });
            }
        };
    }, [
        readyToDraw,
        globalScale,
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
        resolvedOtherEffectTextStyle,
    ]);

    /** DRAW STICKER */
    useEffect(() => {
        if (!readyToDraw) return;

        drawingPipeline.current.sticker.rerun += 1;
        drawingPipeline.current.sticker.instructor = async () => {
            return await drawSticker({
                ctx: stickerCanvasRef.current?.getContext('2d'),
                sticker,
                globalScale,
            });
        };
    }, [readyToDraw, globalScale, sticker, stickerCanvasRef]);

    /** DRAW CARD EFFECT + TYPE ABILITY */
    useEffect(() => {
        if (!readyToDraw) return;

        const ctx = effectCanvasRef.current?.getContext('2d');
        const typeCtx = typeCanvasRef.current?.getContext('2d');

        drawingPipeline.current.typeAbility.rerun += 1;
        drawingPipeline.current.typeAbility.instructor = async () => {
            if (!clearCanvas(ctx) || !clearCanvas(typeCtx)) return;

            const { condenseTolerant, upSize, fontStyle } = effectStyle ?? {};
            const customizeEffectStyle = effectTextStyle[0];
            const normalizedUpSize = customizeEffectStyle ? upSize : 0;
            const useItalic = customizeEffectStyle
                ? (isNormal && fontStyle === 'auto') || (format === 'tcg' && fontStyle === 'italic')
                : isNormal;
            const effectIndexSize = drawEffect({
                ctx,
                content: effect,
                isNormal,
                useItalic,
                condenseTolerant,
                format,
                furiganaHelper,
                ...getEffectFontAndCoordinate({
                    format,
                    statInEffect,
                    typeInEffect,
                    useItalic,
                }),
                textStyle: resolvedEffectTextStyle,
                option: {
                    forceRelaxCondenseLimit: DEFAULT_EFFECT_NORMAL_SIZE,
                    defaultSizeLevel: DEFAULT_EFFECT_NORMAL_SIZE - normalizedUpSize,
                    globalScale,
                },
            });
            await drawTypeAbility({
                ctx: typeCtx,
                globalScale,
                format,
                frame,
                furiganaHelper,
                isMonster,
                textStyle: resolvedTypeTextStyle,
                size: !typeInEffect
                    ? 'large'
                    : effectIndexSize <= DEFAULT_EFFECT_NORMAL_SIZE ? 'medium' : 'small',
                subFamily: normalizedSubFamily,
                typeAbility: normalizedTypeAbility,
            });
        };
    }, [
        readyToDraw,
        globalScale,
        typeInEffect,
        statInEffect,
        effectStyle,
        effect,
        effectTextStyle,
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
            const { upSize, fontStyle } = pendulumStyle ?? {};
            const customPendulumStyle = pendulumTextStyle[0];
            const normalizedUpSize = customPendulumStyle ? upSize : 0;
            const useItalic = customPendulumStyle ? (format === 'tcg' && fontStyle === 'italic') : false;
            drawEffect({
                ctx,
                content: pendulumEffect,
                isNormal: false,
                useItalic: useItalic,
                fontData: (useItalic
                    ? PendulumNormalFontData
                    : PendulumEffectFontData)[format],
                textStyle: resolvedPendulumEffectTextStyle,
                sizeList: PendulumEffectCoordinate,
                condenseTolerant,
                format,
                furiganaHelper,
                option: {
                    forceRelaxCondenseLimit: DEFAULT_PENDULUM_EFFECT_NORMAL_SIZE,
                    defaultSizeLevel: DEFAULT_PENDULUM_EFFECT_NORMAL_SIZE - normalizedUpSize,
                    globalScale,
                }
            });
        }
    }, [
        readyToDraw,
        globalScale,
        condenseTolerant,
        format,
        isPendulum,
        pendulumEffectCanvasRef,
        pendulumEffect,
        pendulumStyle,
        pendulumTextStyle,
        furiganaHelper,
        resolvedPendulumEffectTextStyle,
    ]);

    /** DRAW TOTAL OVERLAY */
    useEffect(() => {
        if (!readyToDraw) return;
        const ctx = finishCanvasRef.current?.getContext('2d');

        drawingPipeline.current.overlay.rerun += 1;
        drawingPipeline.current.overlay.instructor = async () => {
            if (!clearCanvas(ctx)) return;
            ctx.scale(globalScale, globalScale);
            await loopFinish(
                ctx,
                'total-overlay',
                overlayType => drawAsset(ctx, `finish/finish-${overlayType}-total-overlay.png`, 0, 0),
            );
            ctx.resetTransform();
        };
    }, [readyToDraw, globalScale, finishCanvasRef, loopFinish, name]);

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
        const exportCanvas = exportCanvasRef.current;
        const exportCtx = exportCanvas?.getContext('2d');
        /** Delay queue and relevant checker is used for potential performance improvement, but currently performance is not making a hard impact to the app. */
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
                            /** Draw directly into export canvas, which will tainted the export canvas afterward. */
                            exportCtx.drawImage(canvasLayer.current, 0, 0);
                            console.error(e);
                            resolve(false);
                        }
                    }
                }, delayQueue * 25);
            });
        };

        if (exportCanvas && exportCtx) {
            clearCanvas(exportCtx);
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
                })).catch(e => {
                    console.error(e);
                    /** Ensure it does not fire repeatedly */
                    const key = 'fail-to-draw-notification';
                    notification.close(key);
                    notification.error({
                        key,
                        message: language['error.draw.error.message'],
                        description: language['error.draw.error.description'],
                    });
                });
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

            lightboxRef.current?.draw(exportCanvas);
            previewCanvasRef.current?.getContext('2d')?.drawImage(
                exportCanvas,
                0,
                0,
                exportCanvas.width,
                exportCanvas.height,
                0,
                0,
                CanvasWidth,
                CanvasHeight,
            );
        }
    }, [
        language,
        artworkCanvasRef, 
        cardIconCanvasRef, 
        creatorCanvasRef, 
        exportCanvasRef, 
        effectCanvasRef, 
        finishCanvasRef, 
        lightboxRef, 
        nameCanvasRef, 
        passwordCanvasRef, 
        pendulumEffectCanvasRef, 
        pendulumScaleCanvasRef, 
        setIdCanvasRef, 
        frameCanvasRef, 
        statCanvasRef, 
        stickerCanvasRef, 
        typeCanvasRef,
        previewCanvasRef,
    ]);

    return {
        drawingPipeline,
        onExport,
    };
};

export * from './prepare-style';