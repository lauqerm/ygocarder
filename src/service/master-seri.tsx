import { useCallback, useEffect, useRef } from 'react';
import {
    clearCanvas,
    draw1stEdition,
    drawCreatorText,
    drawEffect,
    drawFrom,
    drawWithSizeFrom,
    drawMonsterType,
    drawName,
    drawScale,
    drawStat,
    drawStatText,
    drawSetId,
    drawCardIcon,
    drawSticker,
    drawPassword,
} from 'src/draw';
import {
    CanvasConst,
    MasterDuelCanvas,
    NO_ATTRIBUTE,
    ST_ICON_SYMBOL,
    arrowPositionList,
    getArtCanvasCoordinate,
    getDefaultCardOpacity,
    PendulumEffectFontData,
    PendulumEffectCoordinate,
    FinishMap,
    ArtFinishMap,
    FrameInfoMap,
    EffectCoordinateData,
    TCGVanillaTypeStatFontList,
    EffectFontData,
    CardOpacity,
} from 'src/model';
import {
    checkLightFrame,
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
    topToPendulumStructure,
    pendulumStructureHeight,
    leftToPendulumStructure,
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
        creatorCanvas,
        effectCanvasRef,
        nameCanvasRef,
        passwordCanvasRef,
        pendulumEffectCanvasRef,
        pendulumScaleCanvasRef,
        setIdCanvasRef,
        statCanvasRef,
        stickerCanvas,
        cardIconCanvasRef,
        typeCanvasRef,
        finishCanvas,
        lightboxCanvas,
    } = canvasMap;
    const {
        format,
        frame, foil, finish, artFinish, opacity,
        name, nameStyle, nameStyleType,
        effect,
        effectStyle,
        typeAbility,
        isPendulum, pendulumFrame: basePendulumFrame, pendulumEffect, pendulumScaleBlue, pendulumScaleRed,
        atk, def, linkMap,
        attribute,
        cardIcon, subFamily, star,
        setId,
        password, creator, sticker,
        isFirstEdition, isDuelTerminalCard, isSpeedCard,
        furiganaHelper,
    } = card;

    const pendulumFrame = basePendulumFrame === 'auto'
        ? isPendulum
            ? 'spell'
            : frame
        : basePendulumFrame;

    const hasArtFrame = opacity.artFrame;

    const isNormal = checkNormal(card);
    const isXyz = checkXyz(card);
    const isLink = checkLink(card);
    const isMonster = checkMonster(card);
    const isSpeedSkill = checkSpeedSkill(card);

    const lightFooter = ['xyz', 'dark-synchro', 'speed-skill', 'hamon', 'uria', 'raviel'].includes(pendulumFrame);

    const normalizedSubFamily = subFamily.toUpperCase();
    const normalizedTypeAbility = typeAbility.map(text => text.trim()).join('/');
    const statInEffect = basePendulumFrame !== 'auto' || isPendulum
        ? !!(atk || def || (isLink && linkMap.length))
        : isMonster;

    const {
        isInitializing,
        imageChangeCount,
        pendulumSize = 'medium',
    } = props;

    const loopFinish = useCallback(async (
        ctx?: CanvasRenderingContext2D | null,
        name?: string,
        caller?: (finishType: string) => Promise<any>,
    ) => {
        if (!ctx || !Array.isArray(finish) || finish.length <= 0) return Promise.resolve();
        for (const finishType of finish) {
            const finishInformation = FinishMap[finishType];
            if (caller && FinishMap[finishType]) {
                const { partInstructionMap } = finishInformation;
                const instructionList = name ? partInstructionMap[name] ?? [] : [];

                if (instructionList.length) {
                    for (const { blendMode = 'source-over', opacity = 1 } of instructionList) {
                        ctx.globalCompositeOperation = blendMode;
                        ctx.globalAlpha = opacity;

                        await caller(finishType);
                    }
                } else {
                    await caller(finishType);
                }
                ctx.globalAlpha = 1;
                ctx.globalCompositeOperation = 'source-over';
            }
        }
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = 'source-over';
    }, [finish]);

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
        if (active && isInitializing === false) {
            const ctx = specialFrameCanvasRef.current?.getContext('2d');
            const previewCtx = previewCanvasRef.current;
            const effectBoxY = 860, effectBoxX = 35;
            const backgroundEffectBoxY = effectBoxY + 24, backgroundEffectBoxX = effectBoxX + 19;
            const artBoxY = 170, artBoxX = 60;
            const baseFill = '#404040';

            drawingPipeline.current.specialFrame.rerun += 1;
            drawingPipeline.current.specialFrame.instructor = async () => {
                clearCanvas(ctx);
                if (!ctx) return;
                /** Vẽ một lớp màu để loại bỏ các trường hợp transparent */
                ctx.fillStyle = baseFill;
                ctx.fillRect(0, 0, CanvasWidth, CanvasHeight);

                const {
                    artX,
                    artY,
                    artFinishX,
                    artFinishY,
                    artWidth,
                } = getArtCanvasCoordinate(isPendulum, opacity);
                const drawArtwork = () => {
                    if (previewCtx && ctx) {
                        const { width: imageWidth, height: imageHeight } = previewCtx;

                        if (imageHeight > 0) {
                            ctx.drawImage(
                                previewCtx,
                                0, 0,
                                imageWidth, imageHeight,
                                artX, artY,
                                artWidth, artWidth / (imageWidth / imageHeight),
                            );
                        }
                    }
                };

                const {
                    body: opacityBody,
                    name: opacityName,
                    pendulum: opacityPendulum,
                    text: opacityText,
                    artFrame: useArtFrame,
                } = { ...getDefaultCardOpacity(), ...opacity };
                const hasFoil = foil !== 'normal';

                /** Artwork ở dưới cùng */
                if (previewCtx && ctx) drawArtwork();

                /** Frame chính gồm nửa trên và nửa dưới và phần ở name */
                ctx.globalAlpha = useArtFrame ? opacityBody / 100 : 0;
                await drawFrom(ctx, `/asset/image/frame/frame-${frame}.png`, 0, 0);
                await drawFrom(ctx, `/asset/image/frame-pendulum/frame-pendulum-${pendulumFrame}.png`, 0, 0);

                if (useArtFrame) {
                    /** Ta vẽ thêm một box bên dưới để name box không bị xuyên thấu 100% nếu không có frame nền */
                    ctx.fillStyle = `${FrameInfoMap[frame]?.labelBackgroundColor ?? ''}11`;
                    ctx.fillRect(44, 47, 726, 91);
                }
                ctx.globalAlpha = opacityName / 100;

                await drawFrom(ctx, `/asset/image/frame/frame-name-box-${frame}.png`, 0, 0);

                ctx.globalAlpha = 1;

                /** Vẽ card dạng thường, thứ tự các lớp như mô tả */
                if (!isPendulum) {

                    /** 1: Background cho card text dựa trên nửa dưới */
                    ctx.globalAlpha = opacityText / 100;
                    await drawFrom(
                        ctx,
                        `/asset/image/background/background-text-${pendulumFrame}.png`,
                        backgroundEffectBoxX, backgroundEffectBoxY,
                    );
                    ctx.globalAlpha = 1;

                    /** 2: Khung artwork và khung effect */
                    let artFrameSource = '';
                    if (!useArtFrame) { }
                    else if (isXyz || isSpeedSkill) {
                        artFrameSource = `/asset/image/frame/frame-art-${frame}.png`;
                    } else if (isLink || ['zarc', 'hamon', 'uria', 'raviel'].includes(frame)) {
                        artFrameSource = '/asset/image/frame/frame-art-special.png';
                    } else {
                        artFrameSource = '/asset/image/frame/frame-art.png';
                    }
                    await drawFrom(ctx, artFrameSource, artBoxX, artBoxY);
                    /** Foil và khung của speed skill xung đột, nên nếu đè foil thì ta không cần vẽ khung effect cho speed skill */
                    if (!hasFoil && isSpeedSkill && basePendulumFrame === 'auto') {
                        await drawFrom(ctx, '/asset/image/frame/frame-effect-box-speed-skill.png', effectBoxX, effectBoxY);
                    } else {
                        await drawFrom(ctx, '/asset/image/frame/frame-effect-box.png', effectBoxX, effectBoxY);
                    }

                    /** 3: Foil cho các khung */
                    if (hasFoil) {
                        if (useArtFrame) {
                            await drawFrom(ctx, `/asset/image/frame/frame-art-${foil}.png`, artBoxX, artBoxY);
                        }
                        await drawFrom(ctx, `/asset/image/frame/frame-effect-box-${foil}.png`, effectBoxX, effectBoxY);
                    }

                    /** 4: Finish cho khung artwork */
                    if (useArtFrame) {
                        await loopFinish(ctx, 'frame-art', finishType => drawFrom(ctx, `/asset/image/finish/finish-${finishType}-frame-art.png`, 0, 0));
                    }

                }

                /** Vẽ card dạng pendulum, chỉ có card link (có arrow) là không áp dụng được */
                if (isPendulum && !isLink) {
                    /** Vì ta không có frame đặc trưng cho pendulum, mà chỉ là khung pendulum đè lên frame thường, vậy nên artwork sẽ bị giới hạn
                     * bởi frame thường (art pendulum dài hơn). Để khắc phục ta sẽ vẽ lại artwork đè lên frame, nhưng chỉ phần artwork nằm trong khung
                     * pendulum.
                     */
                    if (previewCtx && ctx && previewCtx.height > 0) {
                        const { width: imageWidth, height: imageHeight } = previewCtx;
                        const imageScaledRatio = artWidth / imageWidth;
                        const sourceOffsetX = opacityBody < 100
                            ? (leftToPendulumStructure - artX) / imageScaledRatio
                            : 0;
                        const destinationOffsetX = sourceOffsetX * imageScaledRatio;
                        const sourceOffsetY = opacityBody < 100
                            ? (topToPendulumStructure - artY) / imageScaledRatio
                            : 0;
                        const destinationOffsetY = sourceOffsetY * imageScaledRatio;
                        const offsetHeight = opacityBody < 100
                            ? imageHeight - (pendulumStructureHeight / imageScaledRatio)
                            : 0;

                        /** Vẽ một lớp màu để loại bỏ các trường hợp transparent */
                        ctx.fillStyle = baseFill;
                        ctx.fillRect(
                            artX + destinationOffsetX,
                            artY + destinationOffsetY,
                            artWidth - destinationOffsetX * 2,
                            artWidth / (imageWidth / imageHeight) - offsetHeight * imageScaledRatio,
                        );
                        ctx.drawImage(
                            previewCtx,
                            sourceOffsetX, sourceOffsetY,
                            imageWidth - sourceOffsetX * 2, imageHeight - offsetHeight,
                            artX + destinationOffsetX, artY + destinationOffsetY,
                            artWidth - destinationOffsetX * 2, artWidth / (imageWidth / imageHeight) - offsetHeight * imageScaledRatio,
                        );
                    }
                    /** Vì ảnh tràn viền mới vẽ sẽ đè lên name box, ta vẽ lại ở đây */
                    ctx.globalAlpha = opacityName / 100;
                    await drawFrom(ctx, `/asset/image/frame/frame-name-box-${frame}.png`, 0, 0);

                    ctx.globalAlpha = 1;

                    /** Vẽ background cho card text và pendulum text */
                    ctx.globalAlpha = opacityPendulum / 100;
                    await drawFrom(ctx, `/asset/image/background/background-pendulum-${pendulumFrame}.png`, 55, 738);
                    ctx.globalAlpha = opacityText / 100;
                    await drawFrom(ctx, `/asset/image/background/background-text-${pendulumFrame}.png`, backgroundEffectBoxX, backgroundEffectBoxY);
                    ctx.globalAlpha = 1;
                }
                /** Stat border ngăn cách stat và effect */
                if (statInEffect) {
                    await drawFrom(ctx, '/asset/image/frame/frame-stat-border.png', 0, 1070);
                }

                const pendulumSizeSuffix = isPendulum ? `-pendulum-${pendulumSize}` : '';
                /** Art Finish */
                const applyArtFinish = useArtFrame && opacityBody > 0;
                const artFinishInformation = ArtFinishMap[artFinish];
                if (applyArtFinish && artFinishInformation) {
                    const { instructionList } = artFinishInformation;

                    for (const { blendMode = 'source-over', opacity = 1 } of instructionList) {
                        ctx.globalCompositeOperation = blendMode;
                        ctx.globalAlpha = opacity;
                        await drawFrom(ctx, `/asset/image/finish/art-finish-${artFinish}${pendulumSizeSuffix}.png`, artFinishX, artFinishY);
                    }
                    ctx.globalAlpha = 1;
                    ctx.globalCompositeOperation = 'source-over';
                }
                await loopFinish(ctx, 'art', type => {
                    return drawFrom(
                        ctx,
                        `/asset/image/finish/finish-${type}-${applyArtFinish ? 'art' : 'unart'}${pendulumSizeSuffix}.png`,
                        artFinishX, artFinishY,
                    );
                });
                /** Scale and pendulum frame */
                if (isPendulum && !isLink) {
                    await drawFrom(ctx, `/asset/image/frame-pendulum/frame-pendulum-scale-${pendulumSize}.png`, 0, 750);

                    await drawFrom(ctx, `/asset/image/frame-pendulum/frame${pendulumSizeSuffix}${useArtFrame ? '' : '-artless'}.png`, 30, 185);
                    const pendulumFrameStructureSource = `/asset/image/frame-pendulum/frame${pendulumSizeSuffix}`
                        + (hasFoil ? `-${foil}` : '')
                        + (useArtFrame ? '' : '-artless')
                        + '.png';
                    await drawFrom(ctx, pendulumFrameStructureSource, 30, 185);

                    if (useArtFrame) {
                        await loopFinish(
                            ctx,
                            'pendulum-frame-art',
                            finishType => drawFrom(ctx, `/asset/image/finish/finish-${finishType}-pendulum-frame-art-${pendulumSize}.png`, 0, 0)
                        );
                    }
                }

                /** Outer border và foil tương ứng */
                await drawFrom(ctx, `/asset/image/frame/frame-border${hasFoil ? `-${foil}` : ''}.png`, 0, 0);
                await loopFinish(ctx, 'border', type => drawFrom(ctx, `/asset/image/finish/finish-${type}-border.png`, 0, 0));
                /** Finish cho các loại nền */
                await loopFinish(ctx, 'frame', type => {
                    return drawFrom(ctx, `/asset/image/finish/finish-${type}-frame${pendulumSizeSuffix}.png`, 0, 0);
                });
                if (useArtFrame) {
                    await loopFinish(ctx, 'frame-background', type => {
                        return drawFrom(ctx, `/asset/image/finish/finish-${type}-frame-background${pendulumSizeSuffix}.png`, 0, 0);
                    });
                } else {
                    await loopFinish(ctx, 'name', type => {
                        return drawFrom(ctx, `/asset/image/finish/finish-${type}-name.png`, 0, 0);
                    });
                }

                /** Link map, foil cho link arrow và link number */
                if (!isPendulum && isLink) {
                    if (hasFoil) {
                        await drawFrom(ctx, `/asset/image/link/link-overlay-arrow-${foil}${useArtFrame ? '' : '-artless'}.png`, 0, 175);
                    }
                    /** Ta vẽ lại art frame ở đây, vì art frame cần nằm trên foil nhưng lại phải nằm dưới link arrow, vậy nên ta sẽ vẽ foil trước,
                     * sau đó vẽ frame rồi vẽ foil artless (chỉ có link arrow) sau cùng
                     */
                    if (useArtFrame) {
                        await loopFinish(ctx, 'frame-art', finishType => drawFrom(ctx, `/asset/image/finish/finish-${finishType}-frame-art.png`));
                    }
                    await Promise.all<any>([1, 2, 3, 4, 6, 7, 8, 9]
                        .map(async entry => {
                            const { left, top, height, width } = arrowPositionList[entry - 1];
                            const isActive = linkMap.includes(`${entry}`);
                            const baseLink = `/asset/image/link/link-inactive-${entry}`;
                            const activeLink = `/asset/image/link/link-active-${entry}`;
                            const coordinate = [left, top, width, height] as const;

                            await drawWithSizeFrom(ctx, `${baseLink}-base${useArtFrame ? '' : '-full'}.png`, ...coordinate);
                            await drawWithSizeFrom(ctx, `${baseLink}-core.png`, ...coordinate);
                            if (isActive) {
                                await drawWithSizeFrom(ctx, `${activeLink}-base.png`, ...coordinate);
                                return drawWithSizeFrom(ctx, `${activeLink}-core.png`, ...coordinate);
                            } else return;
                        })
                    );
                    if (hasFoil) {
                        await drawFrom(ctx, `/asset/image/link/link-overlay-arrow-${foil}-artless.png`, 0, 175);
                    }
                    await drawFrom(ctx, '/asset/image/link/link-text.png', 600, 1080);

                    ctx.textAlign = 'right';
                    ctx.scale(1.2, 1);
                    ctx.font = 'bold 35.55px Yugioh Rush Duel Numbers V4';
                    ctx.fillStyle = '#000000';
                    ctx.fillText(`${linkMap.length}`, 623.36, 1105.01);
                    ctx.setTransform(1, 0, 0, 1, 0, 0);
                    ctx.textAlign = 'left';
                }

                /** Overlay bevel, vì các bevel không overlap, không cần chờ tuần tự */
                await Promise.all(isXyz || isSpeedSkill
                    ? [
                        drawFrom(ctx, `/asset/image/frame/frame-name-bevel-${frame}.png`, 0, 0),
                        drawFrom(ctx, `/asset/image/frame/frame-border-bevel-${frame}.png`, 0, 0),
                    ]
                    : [
                        drawFrom(ctx, '/asset/image/frame/frame-name-bevel.png', 0, 0),
                        drawFrom(ctx, '/asset/image/frame/frame-border-bevel.png', 0, 0),
                    ]);

                    /** @todo TESTING extended art over frame */
                    // if (previewCtx && ctx) drawArtwork();
                    // ctx.globalAlpha = opacityText / 100;
                    // await drawFrom(
                    //     ctx,
                    //     `/asset/image/background/background-text-${pendulumFrame}.png`,
                    //     backgroundEffectBoxX, backgroundEffectBoxY,
                    // );
                    // ctx.globalAlpha = 1;
                    // if (!hasFoil && isSpeedSkill && basePendulumFrame === 'auto') {
                    //     await drawFrom(ctx, '/asset/image/frame/frame-effect-box-speed-skill.png', effectBoxX, effectBoxY);
                    // } else {
                    //     await drawFrom(ctx, '/asset/image/frame/frame-effect-box.png', effectBoxX, effectBoxY);
                    // }
                    // if (hasFoil) {
                    //     await drawFrom(ctx, `/asset/image/frame/frame-effect-box-${foil}.png`, effectBoxX, effectBoxY);
                    // }

                /** Predefined text */
                const predefinedTextColor = lightFooter ? 'white' : 'black';
                if (isDuelTerminalCard) {
                    await drawFrom(ctx, `/asset/image/text/text-duel-terminal-${predefinedTextColor}.png`, 160, 1120);
                }
                if (isSpeedCard) {
                    const coordinate: [number, number, number, number] = isPendulum
                        ? [200, 1088, 196, 20]
                        : isLink
                            ? [155, 855, 196, 20]
                            : [80, 850, 245, 25];

                    await drawWithSizeFrom(ctx, `/asset/image/text/text-speed-duel-${predefinedTextColor}.png`, ...coordinate);
                }

                /** Finish cho tổng thể frame, lưu ý lớp finish này vẫn nằm dưới một vài canvas khác như name hay effect */
                await loopFinish(ctx, 'overlay', overlayType => drawFrom(ctx, `/asset/image/finish/finish-${overlayType}-overlay.png`, 0, 0));
            };
        }
    }, [
        active,
        imageChangeCount,
        isInitializing,
        // artCanvas,
        foil,
        loopFinish, artFinish,
        frame,
        isLink,
        isPendulum,
        isXyz,
        isSpeedCard,
        linkMap,
        lightFooter,
        pendulumFrame,
        pendulumSize,
        previewCanvasRef,
        specialFrameCanvasRef,
        isMonster,
        isSpeedSkill,
        isDuelTerminalCard,
        basePendulumFrame,
        opacity,
        statInEffect,
    ]);

    /** DRAW ATTRIBUTE */
    useEffect(() => {
        if (active && isInitializing === false) {
            const ctx = attributeCanvasRef.current?.getContext('2d');
            drawingPipeline.current.attribute.rerun += 1;
            drawingPipeline.current.attribute.instructor = async () => {
                if (!ctx) return;
                ctx.clearRect(0, 0, CanvasWidth, 148.125);

                await drawFrom(ctx, `/asset/image/attribute/attr-${format}-${attribute.toLowerCase()}.png`, 678, 55);
                await loopFinish(ctx, 'attribute', type => drawFrom(ctx, `/asset/image/finish/finish-${type}-attribute.png`, 678, 55));
            };
        }
    }, [active, isInitializing, attribute, attributeCanvasRef, format, isSpeedSkill, loopFinish]);

    /** DRAW STAR (NEG. LEVEL - LEVEL - RANK) - ST ICON */
    useEffect(
        () => {
            if (active && isInitializing === false) {
                const ctx = cardIconCanvasRef.current?.getContext('2d');
                drawingPipeline.current.star.rerun += 1;
                drawingPipeline.current.star.instructor = () => {
                    ctx?.clearRect(0, 0, CanvasWidth, 222);
                    if (isLink) return new Promise(resolve => resolve(true));
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
                                type => drawFrom(ctx, `/asset/image/finish/finish-${type}-star.png`, ...coordinate),
                            ),
                    });
                };
            }
        },
        [
            active,
            isInitializing,
            isLink,
            star,
            cardIconCanvasRef,
            loopFinish,
            cardIcon,
            frame,
        ],
    );

    /** DRAW SCALE */
    useEffect(() => {
        if (active && isInitializing === false) {
            const ctx = pendulumScaleCanvasRef.current?.getContext('2d');

            ctx?.clearRect(0, 0, 813, 889);
            if (ctx && isPendulum) {
                drawScale(ctx, pendulumScaleBlue ?? 0, 84.4, 790);
                drawScale(ctx, pendulumScaleRed ?? 0, 728.0, 790);
            }
        }
    }, [active, isInitializing, isPendulum, pendulumScaleBlue, pendulumScaleRed, pendulumScaleCanvasRef]);

    /** DRAW NAME */
    useEffect(() => {
        if (active && isInitializing === false) {
            const ctx = nameCanvasRef.current?.getContext('2d');
            drawingPipeline.current.name.rerun += 1;
            drawingPipeline.current.name.instructor = async () => {
                const cloneNode = nameCanvasRef.current?.cloneNode() as HTMLCanvasElement | undefined;
                ctx?.clearRect(0, 0, CanvasWidth, 148.125);
                if (!ctx || !cloneNode) return;

                const edge = format === 'tcg' ? 60 : 68;
                const lineWidth = attribute === NO_ATTRIBUTE
                    ? (format === 'tcg' ? 694 : 678)
                    : (format === 'tcg' ? 606 : 598);

                await drawName(
                    ctx,
                    name,
                    edge, 115.5375,
                    lineWidth,
                    resolveNameStyle({ format, frame, nameStyle, nameStyleType, foil }),
                    { isSpeedSkill, format, cloneNode, frame, furiganaHelper },
                );
            };
        }
    }, [
        active,
        isInitializing,
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
        (() => {
            if (!active) return;
            const ctx = statCanvasRef.current?.getContext('2d');
            clearCanvas(ctx);

            if (!ctx || !statInEffect) return;

            drawStatText(ctx, 'ATK', 432.10, 1106.494);
            drawStat(ctx, atk, 508.824, 1106.494);
            if (!isLink) {
                drawStatText(ctx, 'DEF', 600.85, 1106.494);
                drawStat(ctx, def, 673.865, 1106.494);
            }
        })();
    }, [active, isInitializing, atk, def, isLink, isMonster, statCanvasRef, statInEffect]);

    /** DRAW SET ID */
    useEffect(() => {
        if (active && isInitializing === false) {
            const ctx = setIdCanvasRef.current?.getContext('2d');
            clearCanvas(ctx);
            drawSetId(
                ctx,
                setId,
                {
                    isLink, isPendulum,
                    withShadow: pendulumFrame === 'zarc' || hasArtFrame === false,
                    format,
                    lightFooter,
                }
            );
        }
    }, [active, isInitializing, format, isLink, isPendulum, lightFooter, setIdCanvasRef, setId, isSpeedSkill, pendulumFrame, hasArtFrame]);

    /** DRAW FIRST EDITION NOTICE AND PASSWORD */
    useEffect(() => {
        if (active && isInitializing === false) {
            const ctx = passwordCanvasRef.current?.getContext('2d');
            clearCanvas(ctx);
            if (!ctx) return;

            const endOfPassword = drawPassword({
                ctx,
                password,
                lightFooter,
                hasShadow: hasArtFrame === false,
            });
            if (isFirstEdition && !isDuelTerminalCard) {
                ctx.fillStyle = lightFooter ? '#fff' : '#000';

                draw1stEdition(
                    ctx,
                    Math.max(endOfPassword + 14.813, 142.2) - (format === 'ocg' ? 10 : 0),
                    isSpeedSkill ? -2 : 0,
                );
            }
        }
    }, [
        active,
        isInitializing,
        isDuelTerminalCard,
        isFirstEdition,
        password,
        passwordCanvasRef,
        lightFooter,
        format,
        pendulumFrame,
        hasArtFrame,
        isPendulum,
        isSpeedSkill,
    ]);

    /** DRAW CREATOR TEXT */
    useEffect(() => {
        (() => {
            if (!active || isInitializing) return;

            drawCreatorText({
                ctx: creatorCanvas.current?.getContext('2d'),
                format,
                value: creator,
                alignment: 'right',
                baselineOffset: isSpeedSkill ? -2 : 0,
                hasShadow: hasArtFrame === false,
                lightFooter,
            });
        })();
    }, [active, isInitializing, isPendulum, lightFooter, creator, creatorCanvas, format, hasArtFrame, isSpeedSkill]);

    /** DRAW STICKER */
    useEffect(() => {
        if (active && isInitializing === false) {
            drawingPipeline.current.sticker.rerun += 1;
            drawingPipeline.current.sticker.instructor = async () => {
                return await drawSticker({
                    ctx: stickerCanvas.current?.getContext('2d'),
                    sticker,
                });
            };
        }
    }, [active, isInitializing, sticker, stickerCanvas]);

    /** DRAW CARD EFFECT + TYPE ABILITY */
    const drawTypeAbility = useCallback(async (
        ctx: CanvasRenderingContext2D | null | undefined,
        size: 'small' | 'medium' | 'large',
    ) => {
        if (ctx) {
            ctx?.clearRect(0, 0, CanvasWidth, 1037);
            const willDrawTypeAbility = normalizedTypeAbility.length > 0;
            const willDrawIcon = normalizedSubFamily !== 'NO ICON' && size === 'large';
            const typeAbilityWithIcon = normalizedTypeAbility
                + (willDrawIcon ? ST_ICON_SYMBOL : '');
            const normalizedTypeAbilityText = willDrawTypeAbility
                ? format === 'tcg'
                    ? size === 'large'
                        ? `[  ${typeAbilityWithIcon}  ]`
                        : `[${typeAbilityWithIcon}]`
                    : `【${typeAbilityWithIcon}】`
                : '';
            if (!willDrawTypeAbility) return;

            /** Special treatment for speed skill */
            ctx.fillStyle = checkLightFrame(frame) && !checkSpeedSkill({ frame }) && size === 'large'
                ? '#ffffff'
                : '#000000';
            const { iconPositionList, xRatio } = drawMonsterType({
                ctx,
                format,
                size,
                value: normalizedTypeAbilityText,
                metricMethod: !isMonster ? 'compact' : undefined,
                furiganaHelper,
            });
            let offsetY = format === 'ocg' ? -4 : 0;
            let offsetX = format === 'ocg' ? -3 : 0;

            if (willDrawIcon) {
                const { edge, baseline } = iconPositionList[0];
                await drawWithSizeFrom(
                    ctx,
                    `/asset/image/sub-family/subfamily-${normalizedSubFamily.toLowerCase()}.png`,
                    image => edge + image.naturalWidth * 0.175 * xRatio + offsetX,
                    image => baseline - image.naturalWidth * 0.8 + offsetY,
                    image => image.naturalWidth,
                    image => image.naturalWidth,
                );
            } else {
                /** Currently, draw icon in place of monster type is undesirable, as the icon seems out of place and user may not know how to turn them off properly if they want to. */
                // await Promise.all(iconPositionList.map(({ edge, baseline, size }) => {
                //     const iconSize = size * 0.9;

                //     return drawWithSizeFrom(
                //         ctx,
                //         `/asset/image/sub-family/subfamily-${normalizedSubFamily.toLowerCase()}.png`,
                //         () => edge + size * 0.125,
                //         baseline - size * 0.850,
                //         () => iconSize,
                //         () => iconSize,
                //     );
                // }));
            }

            return iconPositionList;
        }
    }, [normalizedTypeAbility, normalizedSubFamily, format, isMonster, furiganaHelper, frame]);
    useEffect(() => {
        if (active && isInitializing === false) {
            const ctx = effectCanvasRef.current?.getContext('2d');
            const typeCtx = typeCanvasRef.current?.getContext('2d');

            drawingPipeline.current.typeAbility.rerun += 1;
            drawingPipeline.current.typeAbility.instructor = async () => {
                ctx?.clearRect(0, 0, CanvasWidth, 1110.938);
                if (!ctx || !typeCtx) return;
                const typeInEffect = cardIcon === 'auto'
                    ? isMonster || isSpeedSkill
                    : cardIcon !== 'st' || isLink;
                const coordinateKey = [format, typeInEffect ? 'type' : '', statInEffect ? 'stat' : '']
                    .filter(entry => entry !== '').join('-');
                const fontDataKey = [format, typeInEffect ? 'type' : '', statInEffect ? 'stat' : '']
                    .filter(entry => entry !== '').join('-');

                const fontData = EffectFontData[fontDataKey];
                if (statInEffect && typeInEffect && isNormal && format === 'tcg') fontData.fontList = TCGVanillaTypeStatFontList;

                const effectIndexSize = drawEffect({
                    ctx,
                    content: effect,
                    isNormal,
                    fontData,
                    sizeList: EffectCoordinateData[coordinateKey],
                    condenseTolerant: effectStyle?.condenseTolerant,
                    format,
                    furiganaHelper,
                });
                if (!typeInEffect) {
                    await drawTypeAbility(typeCtx, 'large');
                } else {
                    await drawTypeAbility(typeCtx, effectIndexSize === 0 ? 'medium' : 'small');
                }
            };
        }
    }, [
        active,
        isInitializing,
        cardIcon,
        drawTypeAbility,
        effect,
        effectCanvasRef,
        effectStyle?.condenseTolerant,
        format,
        furiganaHelper,
        isLink,
        isMonster,
        isNormal,
        isSpeedSkill,
        statInEffect,
        typeCanvasRef,
    ]);

    /** DRAW PENDULUM EFFECT */
    useEffect(() => {
        if (active && isInitializing === false) {
            const ctx = pendulumEffectCanvasRef.current?.getContext('2d');
            ctx?.clearRect(0, 0, 813, 889);

            if (isPendulum) {
                drawEffect({
                    ctx,
                    content: pendulumEffect,
                    isNormal: false,
                    fontData: PendulumEffectFontData[format],
                    sizeList: PendulumEffectCoordinate,
                    condenseTolerant: effectStyle?.condenseTolerant,
                    format,
                    furiganaHelper,
                });
            }
        }
    }, [active, isInitializing, effectStyle?.condenseTolerant, format, isPendulum, pendulumEffectCanvasRef, pendulumEffect, furiganaHelper]);

    /** DRAW TOTAL OVERLAY */
    useEffect(() => {
        if (active && isInitializing === false) {
            const ctx = finishCanvas.current?.getContext('2d');

            drawingPipeline.current.overlay.rerun += 1;
            drawingPipeline.current.overlay.instructor = async () => {
                ctx?.clearRect(0, 0, CanvasWidth, CanvasHeight);
                if (!ctx) return;
                await loopFinish(
                    ctx,
                    'total-overlay',
                    overlayType => drawFrom(ctx, `/asset/image/finish/finish-${overlayType}-total-overlay.png`, 0, 0),
                );
            };
        }
    }, [active, isInitializing, finishCanvas, loopFinish, name]);

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
            const previewCtx = previewCanvasRef.current;
            if (previewCtx && exportCtx) {
                const { artX, artY, artWidth } = getArtCanvasCoordinate(isPendulum, opacity);
                const { width: imageWidth, height: imageHeight } = previewCtx;

                if (imageHeight > 0) {
                    exportCtx.drawImage(
                        previewCtx,
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
                creatorCanvas,
                stickerCanvas,
                finishCanvas,
            ].map(currentlayer => generateLayer(currentlayer, exportCtx)));

            lightboxCanvas.current?.getContext('2d')?.drawImage(canvasRef, 0, 0);
        }
    }).current;

    return {
        drawingPipeline,
        onExport,
    };
};
