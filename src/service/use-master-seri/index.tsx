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
    baseDrawLinkArrowMap,
    baseDrawLinkMapFoil,
} from 'src/draw';
import {
    CanvasConst,
    MasterSeriesCanvas,
    NO_ATTRIBUTE,
    getArtCanvasCoordinate,
    getDefaultCardOpacity,
    PendulumEffectFontData,
    PendulumEffectCoordinateMap,
    FinishMap,
    ArtFinishMap,
    CardOpacity,
    DEFAULT_BASE_FILL_COLOR,
    DEFAULT_EFFECT_NORMAL_SIZE,
    DEFAULT_PENDULUM_EFFECT_NORMAL_SIZE,
    PendulumNormalFontData,
    PendulumSizeMap,
    PendulumSize,
    HALF_SCALE_WIDTH_OFFSET,
} from 'src/model';
import {
    checkDiplayLinkRating,
    checkLightFooter,
    checkLightHeader,
    checkLink,
    checkMonster,
    checkNormal,
    checkSpeedSkill,
    checkXyz,
    createCanvas,
    generateLayer,
    resolveFrameStyle,
    resolveNameStyle,
} from 'src/util';
import { useCard } from '../use-card';
import { prepareStyle } from './prepare-style';
import { LanguageDataDictionary } from '../use-i18n';
import { notification } from 'antd';

const {
    height: CanvasHeight,
    width: CanvasWidth,
    finishTypeCardWidth,
    finishTypeCardHeight,
    stickerX,
    stickerY,
    stickerSize,
} = CanvasConst;
type DrawerProp = {
    imageChangeCount: number,
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
        format, region,
        hasBackground, backgroundType,
        frame,
        foil, finish, artFinish, otherFinish, opacity,
        name, nameStyle, nameStyleType,
        effectTextStyle, pendulumTextStyle, typeTextStyle, statTextStyle, otherTextStyle,
        effect,
        effectStyle,
        typeAbility,
        isPendulum, pendulumFrame, pendulumRightFrame, pendulumEffect, pendulumScaleBlue, pendulumScaleRed, pendulumStyle, pendulumSize,
        leftFrame, rightFrame,
        dyeList,
        atk, def, linkMap, linkRating,
        attribute,
        cardIcon, subFamily, star, starAlignment, starList,
        setId,
        password, creator, sticker,
        isLegacyCard,
        isFirstEdition, isDuelTerminalCard, isSpeedCard, isLimitedEdition,
        furiganaHelper,
        flag,
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

    const effectBackground = effectStyle.background;
    const pendulumEffectBackground = pendulumStyle.background;
    const effectMinLine = effectStyle.minLine;
    const pendulumEffectMinLine = pendulumStyle.minLine;
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
    const lightFooter = checkLightFooter(bottomFrame);
    const {
        bottomRightFrame,
    } = resolveFrameStyle(
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
    const lightRightFooter = checkLightFooter(bottomRightFrame);
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
    const foilDyeColor = dyeList[6];

    const normalizedSubFamily = subFamily.toUpperCase();
    const normalizedTypeAbility = typeAbility.map(text => text.trim()).join(format === 'ocg' ? '／' : ' / ');
    const [
        showDefAndLinkFlag,
        linkRatingDisplayMode,
    ] = flag;

    /** One special case where we do not show link rating */
    const isLinkST = !isPendulum && !isMonster && isLink && !(atk || def);
    const showLinkRating = checkDiplayLinkRating(linkRatingDisplayMode, isLink) && !isLinkST;
    const showDefAndLink = showLinkRating && showDefAndLinkFlag;
    const statInEffect = !!(atk || def)
        || showLinkRating
        || !!(isPendulum && setId);
    const typeInEffect = normalizedTypeAbility.length > 0
        ? cardIcon === 'auto'
            ? (isMonster || isSpeedSkill)
            : cardIcon !== 'st'
        : false;
    const withBlueScale = !((pendulumScaleBlue ?? '') === '');
    const withRedScale = !((pendulumScaleRed ?? '') === '');
    const {
        isInitializing,
        imageChangeCount,
        language,
        globalScale,
    } = props;
    const readyToDraw = active && isInitializing === false;

    const loopFinish = useMemo(() => getFinishIterator(finish, FinishMap), [finish]);
    const loopArtFinish = useMemo(() => getFinishIterator([artFinish], ArtFinishMap), [artFinish]);
    const [, iconFinish, stickerFinish] = otherFinish;

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
            const fillBaseColor = (
                ctx: CanvasRenderingContext2D,
                x: number, y: number,
                w: number, h: number,
                customFill?: string,
            ) => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        ctx.fillStyle = hasBackground
                            ? (customFill ?? baseFill)
                            : DEFAULT_BASE_FILL_COLOR;
                        ctx.fillRect(x, y, w, h);
                        resolve(true);
                    }, 0);
                });
            };
            const hasArtBorder = opacityBody > 0 ? true : keepArtBorder;

            const {
                drawAttribute,
                drawBackground,
                drawCardArt,
                drawFrame,
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

                drawNameFinish,
                drawArtFinish,
                drawArtOverlayFinish,
                drawArtBorderFinish,
                drawPendulumArtBorderFinish,
                drawFrameFinish,
                drawFrameBackgroundFinish,
                drawOverlayFinish,
                drawCardBorderFinish,
            } = getLayoutDrawFunction({
                canvas: frameCanvasRef.current,
                artworkCanvas, backgroundCanvas,
                globalScale,
                region,
                frame, leftFrame, pendulumFrame, rightFrame, pendulumRightFrame,
                dyeList,
                effectBackground, pendulumEffectBackground,
                hasBackground,
                backgroundType,
                attribute,
                cardIcon, star, starList,
                foil,
                pendulumSize,
                opacity: normalizedOpacity,
                isLink, isSpeedSkill, isXyz,
                isPendulum,
                pendulumFrameTypeMap: {
                    red: withRedScale ? 'normal' : 'scaleless',
                    blue: withBlueScale ? 'normal' : 'scaleless',
                },
                otherFinish,
                loopFinish,
                loopArtFinish,
            });

            /** Fill color background so the card is not see-through even with transparent artwork */
            await fillBaseColor(ctx, 0, 0, globalScale * CanvasWidth, globalScale * CanvasHeight);

            /** artOnCard canvas ensure the art is drawn correct size and position on the actual card, overlay for art is applied here */
            const {
                canvas: artOnCardCanvas,
                ctx: artOnCardCtx,
            } = createCanvas(CanvasWidth * globalScale, CanvasHeight * globalScale);
            if (artworkCanvas && artOnCardCtx) drawCardArt(artOnCardCtx);
            await drawArtFinish(artOnCardCtx);
            await drawArtOverlayFinish(artOnCardCtx);

            /** Combine background and artwork together, overlay for background is applied here */
            const {
                canvas: combinedArtCanvas,
                ctx: combinedArtCtx,
            } = createCanvas(CanvasWidth * globalScale, CanvasHeight * globalScale);
            await fillBaseColor(combinedArtCtx, 0, 0, globalScale * CanvasWidth, globalScale * CanvasHeight);
            if (backgroundCanvas && combinedArtCtx) await drawBackground(combinedArtCtx, hasArtBorder);
            if (!boundless) combinedArtCtx.drawImage(artOnCardCanvas, 0, 0);

            /** @summary Draw the overall layout */
            /** Start with artwork at the bottom, then main frame, then outer card border. */
            ctx.drawImage(combinedArtCanvas, 0, 0);
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

            /** @summary Draw PENDULUM-LIKE card layout. */
            if (isPendulum && !boundless) {
                /** Since pendulum art boundary is wider, we cannot relies on the artwork under frame, instead we must draw the artwork again, this time with different size. */
                const {
                    artX,
                    artY,
                    artWidth,
                    ratio,
                } = getArtCanvasCoordinate(isPendulum, opacity, undefined, pendulumSize);
                ctx.drawImage(
                    combinedArtCanvas,
                    globalScale * artX, globalScale * artY,
                    globalScale * artWidth, globalScale * artWidth / ratio,
                    globalScale * artX, globalScale * artY,
                    globalScale * artWidth, globalScale * artWidth / ratio,
                );

                await drawNameBackground();
                await drawEffectBackground(true);
                
                /** Scale and pendulum border frame, these will be covered by extended artwork so we doesn't draw them if the artwork is boundless */
                await drawPendulumScaleIcon();
                /** Draw normal border first so we got the shadow ready. Again foiled border DOES NOT have shadow by their own. */
                await drawPendulumBorder(hasArtBorder, 'normal');
                await drawPendulumBorder(hasArtBorder, foil, true);
                await drawPendulumArtBorderFinish();
                if (hasArtBorder) await drawBorderPendulumFinish();
            }

            if (!boundless) {
                await drawFrameFinish();
                await drawNameFinish();
            }
            if (hasArtBorder) await drawFrameBackgroundFinish();

            /** Boundless art behavior here. If rigid frame is off, card image will be placed on top of the art border. The extended card image is still below name (text only), level, attribute, effect (both card and pendulum) and other predefined texts. */
            if (boundless) {
                await drawNameBackground();
                await drawNameFinish();
                await drawNameBorder();
                if (isLink && !isPendulum) {
                    /** For link layout, the artwork is above the art border, but still below the link arrows */
                    await drawArtBorderFinish();
                } else if (isPendulum) {
                    if (hasArtBorder) {
                        await drawPendulumBorder(hasArtBorder, 'normal');
                        await drawPendulumBorder(hasArtBorder, foil, true);
                    }
                    await drawPendulumArtBorderFinish();
                }

                const {
                    artX,
                    artY,
                    artWidth,
                    ratio,
                } = getArtCanvasCoordinate(isPendulum, opacity, 'full', pendulumSize);
                ctx.drawImage(
                    artOnCardCanvas,
                    globalScale * artX, globalScale * artY,
                    globalScale * artWidth, globalScale * artWidth / ratio,
                    globalScale * artX, globalScale * artY,
                    globalScale * artWidth, globalScale * artWidth / ratio,
                );
                /** Redraw various part here because the extended artwork may overlap with those */
                if (isPendulum) {
                    await drawEffectBackground(true);
                    await drawPendulumScaleIcon();
                    await drawPendulumBorder(false, 'normal');
                    await drawPendulumBorder(false, foil, true);
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

            await drawAttribute();
            await drawAttributeFinish();
            await drawStar({ style: levelStyle, starAlignment });
            if (!boundless) await drawNameBorder();
            await drawFrameBorder();
            
            if (showLinkRating && statInEffect) {
                const resetStyle = setTextStyle({ ctx, ...resolvedStatTextStyle, globalScale });
                const normalizedLinkRating = typeof linkRating === 'string' && linkRating.length > 0
                    ? linkRating
                    : `${(Array.isArray(linkMap) ? linkMap.length : 0)}`;
                await drawLinkRatingText(frameCanvasRef.current, normalizedLinkRating, resolvedStatTextStyle, globalScale);
                resetStyle();
            }
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
        attribute,
        backgroundCanvasRef,
        backgroundType,
        cardIcon,
        dyeList,
        effectBackground,
        finish,
        foil,
        format,
        region,
        frame,
        frameCanvasRef,
        hasBackground,
        isDuelTerminalCard,
        isLink,
        isPendulum,
        isSpeedCard,
        isSpeedSkill,
        isXyz,
        leftFrame,
        levelStyle,
        lightFooter,
        linkMap,
        linkRating,
        loopArtFinish,
        loopFinish,
        opacity,
        otherFinish,
        pendulumEffectBackground,
        pendulumFrame,
        pendulumRightFrame,
        pendulumSize,
        resolvedOtherEffectTextStyle,
        resolvedStatTextStyle,
        rightFrame,
        showLinkRating,
        star,
        starList,
        starAlignment,
        statInEffect,
        withBlueScale,
        withRedScale,
        imageChangeCount, // Special dependency, do not remove even though it is not used in the effect itself
    ]);

    /** DRAW PENDULUM SCALE */
    useEffect(() => {
        if (!readyToDraw) return;
        const ctx = pendulumScaleCanvasRef.current?.getContext('2d');

        if (!clearCanvas(ctx)) return;
        if (isPendulum) {
            const { numberBlueX, numberRedX, numberY, fontSize } = PendulumSizeMap[pendulumSize];
            if ((pendulumScaleBlue ?? '') !== '') drawScale(ctx, pendulumScaleBlue, numberBlueX, numberY, fontSize, globalScale);
            if ((pendulumScaleRed ?? '') !== '') drawScale(ctx, pendulumScaleRed, numberRedX, numberY, fontSize, globalScale);
        }
    }, [readyToDraw, globalScale, isPendulum, pendulumSize, pendulumScaleBlue, pendulumScaleRed, pendulumScaleCanvasRef]);

    /** DRAW NAME */
    useEffect(() => {
        if (!readyToDraw) return;
        drawingPipeline.current.name.rerun += 1;
        drawingPipeline.current.name.instructor = async () => {
            const ctx = nameCanvasRef.current?.getContext('2d');

            if (!clearCanvas(ctx)) return;

            await drawName(
                nameCanvasRef.current,
                ctx,
                name,
                format === 'tcg' ? 60 : 68, 116,
                attribute === NO_ATTRIBUTE
                    ? (format === 'tcg' ? 688 : 674)
                    : (format === 'tcg' ? 608 : 598),
                resolveNameStyle({ format, frame, nameStyle, nameStyleType, foil }),
                { isSpeedSkill, format, frame, furiganaHelper, globalScale },
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
        // const hasAtk = !!atk;
        const hasDef = showLinkRating
            ? !!def && showDefAndLink
            : !!def;
        const hasLink = showLinkRating;
        if (atk) {
            const offset = (hasDef ? 168.75 : 0) + (hasLink ? 168.75 : 0);
            drawStatText(ctx, 'ATK', 600.85 - offset, 1106, globalScale);
            drawStat(ctx, atk.trim(), 677.574 - offset, 1106.5, globalScale);
        }
        if (def && (!showLinkRating || showDefAndLink)) {
            const offset = hasLink ? 168.75 : 0;
            drawStatText(ctx, 'DEF', 600.85 - offset, 1106, globalScale);
            drawStat(ctx, def.trim(), 673.865 - offset, 1106.5, globalScale);
        }
        resetStyle();
    }, [readyToDraw, globalScale, atk, def, showLinkRating, isMonster, showDefAndLink, resolvedStatTextStyle, statCanvasRef, statInEffect]);

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
                lightFooter: lightRightFooter,
                textStyle: resolvedOtherEffectTextStyle,
            }
        );
    }, [
        readyToDraw,
        globalScale,
        format,
        isLink,
        isPendulum,
        lightRightFooter,
        setIdCanvasRef,
        setId,
        isSpeedSkill,
        bottomFrame,
        requireShadow,
        resolvedOtherEffectTextStyle,
    ]);

    /** DRAW FIRST EDITION (1st Edition Text) NOTICE AND PASSWORD */
    useEffect(() => {
        if (!readyToDraw) return;
        const ctx = passwordCanvasRef.current?.getContext('2d');
        if (!clearCanvas(ctx)) return;

        const isNumberPassword = /^[0-9]*$/.test(password);
        const mayOffset = isNumberPassword && isPendulum && isLink;
        const willOffset = mayOffset;
        const { rightEdge } = drawPasswordText({
            ctx,
            globalScale,
            value: password,
            lightFooter,
            alignment: 'left',
            edgeOffset: (willOffset ? 80 : 0) * globalScale,
            format,
            hasShadow: bottomFrame === 'zarc' || requireShadow,
            textStyle: resolvedOtherEffectTextStyle,
            fontLevel: !isNumberPassword ? 1 : 0
        });
        if (isFirstEdition) {
            const willDraw = isPendulum
                ? isNumberPassword ? true : false
                : true;
            const left = (isLegacyCard || !isNumberPassword) && !isPendulum
                ? isLink ? 151 : 89
                : Math.max(rightEdge / globalScale + 14.813, 162.2) - (format === 'ocg' ? 7 : 0);
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
                    stroke: false,
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
                lightFooter: lightRightFooter,
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
        lightRightFooter,
        opacity,
        requireShadow,
        resolvedOtherEffectTextStyle,
    ]);

    /** DRAW STICKER */
    useEffect(() => {
        if (!readyToDraw) return;

        drawingPipeline.current.sticker.rerun += 1;
        drawingPipeline.current.sticker.instructor = async () => {
            const ctx = stickerCanvasRef.current?.getContext('2d');
            if (!clearCanvas(ctx)) return;
            const {
                canvas: stickerCanvas,
                ctx: stickerContext,
            } = createCanvas(CanvasWidth * globalScale, CanvasHeight * globalScale);
            await drawSticker({
                ctx: stickerContext,
                sticker,
                globalScale,
                x: stickerX,
                y: stickerY,
            });
            const normalizedStickerFinish = stickerFinish ?? 'normal';
            if (normalizedStickerFinish !== 'normal') {
                const loopStickerFinish = getFinishIterator([normalizedStickerFinish], ArtFinishMap);
                const {
                    canvas: stickerFinishCanvas,
                    ctx: stickerFinishContext,
                } = createCanvas(CanvasWidth * globalScale, CanvasHeight * globalScale);
                stickerFinishContext.drawImage(stickerCanvas, 0, 0);
                stickerFinishContext.scale(globalScale, globalScale);
                await loopStickerFinish(
                    stickerFinishContext,
                    'art',
                    async (finishType) => {
                        return await drawAsset(
                            stickerFinishContext,
                            `finish/finish-typeart-${finishType}.png`,
                            stickerX - finishTypeCardWidth + stickerSize, stickerY - finishTypeCardHeight + stickerSize,
                        );
                    },
                );
                stickerContext.globalCompositeOperation = 'source-in';
                stickerContext.drawImage(stickerFinishCanvas, 0, 0);
                ctx.drawImage(stickerCanvas, 0, 0);
            } else {
                ctx.drawImage(stickerCanvas, 0, 0);
            }
        };
    }, [readyToDraw, globalScale, sticker, stickerFinish, stickerCanvasRef, loopArtFinish]);

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
                    frameType: (isPendulum && pendulumSize === 'large') ? 'pendulumLarge' : 'normal',
                }),
                textStyle: resolvedEffectTextStyle,
                option: {
                    forceRelaxCondenseLimit: DEFAULT_EFFECT_NORMAL_SIZE,
                    defaultSizeLevel: DEFAULT_EFFECT_NORMAL_SIZE - normalizedUpSize,
                    globalScale,
                    minLine: effectMinLine,
                },
            });
            const normalizedIconFinish = iconFinish ?? 'normal';
            const loopIconFinish = normalizedIconFinish !== 'normal' ? getFinishIterator([normalizedIconFinish], ArtFinishMap) : undefined;
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
                    : (isPendulum && pendulumSize === 'large')
                        ? (effectIndexSize <= DEFAULT_EFFECT_NORMAL_SIZE ? 'highPendulumNormal' : 'highPendulumSmaller')
                        : (effectIndexSize <= DEFAULT_EFFECT_NORMAL_SIZE ? 'normal' : 'smaller'),
                subFamily: normalizedSubFamily,
                typeAbility: normalizedTypeAbility,
                loopIconFinish,
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
        effectMinLine,
        format,
        frame,
        isPendulum,
        pendulumSize,
        furiganaHelper,
        iconFinish,
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
            const fontDataKey = `${format}-${pendulumSize}`;
            const coordinateList = PendulumEffectCoordinateMap
                [(withBlueScale && withRedScale) ? 'normal' : 'scaleless']
                [pendulumSize];
            /** Account for half scaleless frame */
            const modifiedCoordinateList = (withBlueScale && withRedScale)
                ? coordinateList
                : coordinateList.map(({
                    trueEdge, trueWidth, ...rest
                }) => ({
                    ...rest,
                    trueEdge: trueEdge + (withBlueScale ? HALF_SCALE_WIDTH_OFFSET : 0),
                    trueWidth: trueWidth
                        - (withBlueScale ? HALF_SCALE_WIDTH_OFFSET : 0)
                        - (withRedScale ? HALF_SCALE_WIDTH_OFFSET : 0),
                }));

            drawEffect({
                ctx,
                content: pendulumEffect,
                isNormal: false,
                useItalic: useItalic,
                fontData: (useItalic
                    ? PendulumNormalFontData
                    : PendulumEffectFontData)[fontDataKey],
                fontDataKey,
                textStyle: resolvedPendulumEffectTextStyle,
                sizeList: modifiedCoordinateList,
                condenseTolerant,
                format,
                furiganaHelper,
                option: {
                    forceRelaxCondenseLimit: DEFAULT_PENDULUM_EFFECT_NORMAL_SIZE,
                    defaultSizeLevel: DEFAULT_PENDULUM_EFFECT_NORMAL_SIZE - normalizedUpSize,
                    globalScale,
                    minLine: pendulumEffectMinLine,
                }
            });
        }
    }, [
        readyToDraw,
        globalScale,
        condenseTolerant,
        format,
        isPendulum,
        withRedScale,
        withBlueScale,
        pendulumSize,
        pendulumEffectCanvasRef,
        pendulumEffect,
        pendulumStyle,
        pendulumTextStyle,
        pendulumEffectMinLine,
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

            if (isLink) {
                const normalizedOpacity = { ...getDefaultCardOpacity(), ...opacity };
                const {
                    artBorder: keepArtBorder,
                    body: opacityBody,
                    boundless,
                } = normalizedOpacity;
                const hasArtBorder = opacityBody > 0 ? true : keepArtBorder;
                await baseDrawLinkArrowMap(ctx, globalScale, linkMap, isPendulum ? 'pendulum' : 'normal', boundless || !hasArtBorder);
                await baseDrawLinkMapFoil(ctx, globalScale, foil, false, isPendulum ? 'pendulum' : 'normal', foilDyeColor);
            }

            ctx.scale(globalScale, globalScale);
            await loopFinish(
                ctx,
                'total-overlay',
                overlayType => drawAsset(ctx, `finish/finish-${overlayType}-total-overlay.png`, 0, 0),
            );
            ctx.resetTransform();
        };
    }, [
        readyToDraw,
        globalScale,
        finishCanvasRef,
        loopFinish,
        foilDyeColor,
        name,
        isLink,
        isPendulum,
        linkMap,
        opacity,
        boundless,
        foil,
        resolvedStatTextStyle,
        statInEffect,
        frameCanvasRef,
    ]);


    const drawHistory = useRef<Record<string, number>>({});
    const onExport = useCallback(async (_exportProps: {
        isPendulum: boolean,
        opacity: Partial<CardOpacity>,
        pendulumSize: PendulumSize,
        // isRelevant: () => boolean,
    }) => {
        // const {
        //     isRelevant,
        //     pendulumSize,
        //     isPendulum = false,
        //     opacity,
        // } = exportProps;
        const exportCanvas = exportCanvasRef.current;
        const exportCtx = exportCanvas?.getContext('2d');

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