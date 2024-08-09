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
    fillTextLeftWithSpacing,
    fillTextRightWithSpacing,
} from 'src/draw';
import {
    CanvasConst,
    Card,
    MasterDuelCanvas,
    NO_ATTRIBUTE,
    PresetNameStyleMap,
    ST_ICON_SYMBOL,
    UP_RATIO,
    arrowPositionList,
    effectMonsterFontData,
    effectSTFontData,
    getArtCanvasCoordinate,
    getDefaultCardOpacity,
    getDefaultNameStyle,
    iconValueList,
    monsterCoordinateData,
    pendulumFontList,
    pendulumSizeList,
    specialFontData,
    specialCoordinateData,
    stCoordinateData,
    FinishMap,
    ArtFinishMap,
    frameMap,
    vanillaMonsterFontData,
    NameStyle,
} from 'src/model';
import { checkDarkSynchro, checkLink, checkMonster, checkNormal, checkSpeedSkill, checkXyz, getCardFrame } from 'src/util';

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
export const useMasterSeriDrawer = (active: boolean, canvasMap: MasterDuelCanvas, card: Card, props: DrawerProp) => {
    const {
        // artCanvas,
        previewCanvas,
        specialFrameCanvas,
        attributeCanvas,
        creatorCanvas,
        effectCanvas,
        nameCanvas,
        passcodeCanvas,
        pendulumEffectCanvas,
        pendulumScaleCanvas,
        setIdCanvas,
        statCanvas,
        stickerCanvas,
        subFamilyCanvas,
        typeCanvas,
        finishCanvas,
    } = canvasMap;
    const {
        format,
        frame, foil, finish, artFinish, opacity,
        name, nameStyleType, nameStyle,
        effect,
        effectStyle,
        typeAbility,
        isPendulum, pendulumFrame: basePendulumFrame, pendulumEffect, pendulumScaleBlue, pendulumScaleRed,
        atk, def, linkMap,
        attribute,
        subFamily,
        star,
        setId,
        passcode, creator, sticker,
        isFirstEdition, isDuelTerminalCard, isSpeedCard,
        furiganaHelper,
    } = card;
    /** @todo clean log */
    console.log('🚀 ~ useMasterSeriDrawer ~ card:', card);
    const pendulumFrame = basePendulumFrame === 'auto' && isPendulum ? 'spell' : basePendulumFrame;
    const isNormal = checkNormal(card);
    const isXyz = checkXyz(card);
    const isDarkSynchro = checkDarkSynchro(card);
    const isLink = checkLink(card);
    const isMonster = checkMonster(card);
    const isSpeedSkill = checkSpeedSkill(card);
    const lightFooter = ['xyz', 'dark-synchro', 'speed-skill', 'hamon', 'uria', 'raviel']
        .includes(isPendulum
            ? basePendulumFrame === 'auto'
                ? 'spell'
                : pendulumFrame
            : basePendulumFrame === 'auto'
                ? frame
                : pendulumFrame);
    const lightHeader = !isMonster || ['xyz', 'dark-synchro', 'speed-skill', 'hamon', 'uria', 'raviel'].includes(frame);
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
        overlay: {
            name: 'overlay',
            order: 6,
            rerun: 0,
            instructor: () => Promise.resolve(),
        },
    });

    /** DRAW CARD STRUCTURE */
    useEffect(() => {
        if (active) {
            const ctx = specialFrameCanvas.current?.getContext('2d');
            const previewCtx = previewCanvas.current;
            const effectBoxY = 860, effectBoxX = 35;
            const backgroundEffectBoxY = effectBoxY + 24, backgroundEffectBoxX = effectBoxX + 19;
            const artBoxY = 170, artBoxX = 60;

            drawingPipeline.current.specialFrame.rerun += 1;
            drawingPipeline.current.specialFrame.instructor = async () => {
                clearCanvas(ctx);
                if (!ctx) return;
                /** Vẽ một lớp màu để loại bỏ các trường hợp transparent */
                ctx.fillStyle = '#121013';
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
                const trueFrame = getCardFrame(frame);
                const hasFoil = foil !== 'normal';

                /** Artwork ở dưới cùng */
                if (previewCtx && ctx) drawArtwork();

                /** Frame chính gồm nửa trên và nửa dưới và phần ở name */
                ctx.globalAlpha = useArtFrame ? opacityBody / 100 : 0;
                await drawFrom(ctx, `/asset/image/frame/frame-${trueFrame}.png`, 0, 0);
                await drawFrom(ctx, `/asset/image/frame-pendulum/frame-pendulum-${pendulumFrame}.png`, 0, 0);

                if (useArtFrame) {
                    /** Ta vẽ thêm một box bên dưới để name box không bị xuyên thấu 100% nếu không có frame nền */
                    ctx.fillStyle = `${frameMap[trueFrame]?.labelBackgroundColor ?? ''}11`;
                    ctx.fillRect(44, 47, 726, 91);
                }
                ctx.globalAlpha = opacityName / 100;

                await drawFrom(ctx, `/asset/image/frame/frame-name-box-${trueFrame}.png`, 0, 0);

                ctx.globalAlpha = 1;

                /** Vẽ card dạng thường, thứ tự các lớp như mô tả */
                if (!isPendulum) {

                    /** 1: Background cho card text dựa trên nửa dưới */
                    ctx.globalAlpha = opacityText / 100;
                    await drawFrom(
                        ctx,
                        `/asset/image/background/background-text-${pendulumFrame === 'auto' ? trueFrame : pendulumFrame}.png`,
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
                    if (!hasFoil && isSpeedSkill) {
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
                        ctx.fillStyle = '#121013';
                        ctx.fillRect(artX + destinationOffsetX, artY + destinationOffsetY, artWidth - destinationOffsetX * 2, artWidth / (imageWidth / imageHeight) - offsetHeight * imageScaledRatio);
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
                    await drawFrom(ctx, `/asset/image/frame/frame-name-box-${trueFrame}.png`, 0, 0);

                    ctx.globalAlpha = 1;

                    /** Vẽ background cho card text và pendulum text */
                    ctx.globalAlpha = opacityPendulum / 100;
                    await drawFrom(ctx, `/asset/image/background/background-pendulum-${pendulumFrame}.png`, 55, 738);
                    ctx.globalAlpha = opacityText / 100;
                    await drawFrom(ctx, `/asset/image/background/background-text-${pendulumFrame}.png`, backgroundEffectBoxX, backgroundEffectBoxY);
                    ctx.globalAlpha = 1;
                }
                /** Stat border ngăn cách stat và effect */
                if (isMonster || isPendulum) {
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
        previewCanvas,
        specialFrameCanvas,
        isMonster,
        isSpeedSkill,
        isDuelTerminalCard,
        opacity,
    ]);

    /** DRAW ATTRIBUTE */
    useEffect(() => {
        if (active) {
            const ctx = attributeCanvas.current?.getContext('2d');
            drawingPipeline.current.attribute.rerun += 1;
            drawingPipeline.current.attribute.instructor = async () => {
                if (!ctx) return;
                ctx.clearRect(0, 0, CanvasWidth, 148.125);

                await drawFrom(ctx, `/asset/image/attribute/attr-${format}-${attribute.toLowerCase()}.png`, 678, 55);
                await loopFinish(ctx, 'attribute', type => drawFrom(ctx, `/asset/image/finish/finish-${type}-attribute.png`, 678, 55));
            };
        }
    }, [active, attribute, attributeCanvas, format, isSpeedSkill, loopFinish]);

    /** DRAW LEVEL - RANK - ST ICON */
    useEffect(() => {
        if (active) {
            const ctx = subFamilyCanvas.current?.getContext('2d');
            drawingPipeline.current.star.rerun += 1;
            drawingPipeline.current.star.instructor = () => {
                ctx?.clearRect(0, 0, CanvasWidth, 150 * UP_RATIO);
                if (isMonster && !isLink) {
                    const starWidth = 50, startSpacing = 4;
                    const starCount = Math.min(13, star ?? 0);
                    const starType = isXyz ? 'rank' : isDarkSynchro ? 'negative-level' : 'level';
                    const reverseAlign = isXyz || isDarkSynchro;
                    const totalWidth = starWidth * starCount + startSpacing * (starCount - 1);
                    /** Level 13 được canh giữa thay vì canh từ một trong hai lề */
                    const leftEdge = starCount <= 12
                        ? reverseAlign
                            ? 85.9125 - starWidth
                            : 728.775
                        : reverseAlign
                            ? (CanvasWidth - totalWidth) / 2 - starWidth
                            : (CanvasWidth - totalWidth) / 2 + totalWidth;

                    let offset = 0 - (starWidth + startSpacing);
                    return Promise.all([...Array(starCount)]
                        .map(async () => {
                            offset += (starWidth + startSpacing);
                            let coordinate: [number, number] = [
                                leftEdge + (starWidth + offset) * (reverseAlign ? 1 : -1),
                                145,
                            ];
                            await drawFrom(ctx, `/asset/image/sub-family/subfamily-${starType}.png`, ...coordinate);
                            return loopFinish(ctx, 'star', type => drawFrom(ctx, `/asset/image/finish/finish-${type}-star.png`, ...coordinate));
                        })
                    );
                } else if (!isMonster && !isSpeedSkill) {
                    const normalizedSubFamily = subFamily.toUpperCase();
                    const hasSTIcon = normalizedSubFamily !== 'NO ICON' && iconValueList.includes(normalizedSubFamily);

                    return hasSTIcon
                        ? drawWithSizeFrom(
                            ctx,
                            `/asset/image/sub-family/subfamily-${normalizedSubFamily.toLowerCase()}.png`,
                            image => 717 - image.naturalWidth,
                            153,
                            image => image.naturalWidth,
                            image => image.naturalWidth,
                        )
                        : new Promise(resolve => resolve(true));
                };
                return new Promise(resolve => resolve(true));
            };
        }
    }, [active, format, isDarkSynchro, isLink, isMonster, isSpeedSkill, isXyz, star, subFamily, subFamilyCanvas, loopFinish]);

    /** DRAW SCALE */
    useEffect(() => {
        if (active) {
            const fontSize = 60.5;
            const ctx = pendulumScaleCanvas.current?.getContext('2d');

            ctx?.clearRect(0, 0, 549 * UP_RATIO, 600 * UP_RATIO);
            if (ctx && isPendulum) {
                ctx.font = `${fontSize}px MatrixBoldSmallCaps`;
                ctx.textAlign = 'left';

                drawScale(ctx, pendulumScaleBlue ?? 0, 84.4, 790 + fontSize);
                drawScale(ctx, pendulumScaleRed ?? 0, 728.0, 790 + fontSize);
            }
        }
    }, [active, isInitializing, pendulumScaleBlue, isPendulum, pendulumScaleRed, pendulumScaleCanvas]);

    /** DRAW NAME */
    useEffect(() => {
        if (active) {
            const ctx = nameCanvas.current?.getContext('2d');
            drawingPipeline.current.name.rerun += 1;
            drawingPipeline.current.name.instructor = async () => {
                const defaultTextStyle = getDefaultNameStyle();
                const cloneNode = nameCanvas.current?.cloneNode() as HTMLCanvasElement | undefined;
                if (!ctx || !cloneNode) return;
                ctx.clearRect(0, 0, CanvasWidth, 148.125);
                ctx.textAlign = 'left';

                const contextualStyle = {
                    font: isSpeedSkill
                        ? 'Arial'
                        : format === 'ocg' ? 'OCG' : 'Default',
                    fillStyle: (!isMonster || lightHeader) ? '#ffffff' : '#000000',
                    headTextFillStyle: (!isMonster || lightHeader) ? '#ffffff' : '#000000',
                };
                const regionalStyle: Partial<NameStyle> = nameStyleType === 'auto'
                    ? foil !== 'normal'
                        ? {
                            ...contextualStyle,
                            ...PresetNameStyleMap[foil ?? 'commonB'].value,
                        }
                        : frame === 'zarc'
                            ? PresetNameStyleMap['animeGold'].value
                            : {
                                ...defaultTextStyle,
                                ...contextualStyle,
                            }
                    : nameStyleType === 'predefined'
                        ? {
                            ...contextualStyle,
                            ...PresetNameStyleMap[nameStyle.preset ?? 'commonB'].value,
                        }
                        : {
                            ...contextualStyle,
                            ...nameStyle,
                        };

                const edge = format === 'tcg' ? 60 : 68;
                const lineWidth = attribute === NO_ATTRIBUTE
                    ? (format === 'tcg' ? 686 : 678)
                    : 606;

                await drawName(ctx, name, edge, 115.5375, lineWidth, regionalStyle, { isSpeedSkill, format, cloneNode, frame, furiganaHelper });
            };
        }
    }, [
        active,
        attribute,
        foil,
        isInitializing,
        isMonster,
        isSpeedSkill,
        frame,
        lightHeader,
        name,
        nameCanvas,
        nameStyle,
        nameStyleType,
        format,
        furiganaHelper,
    ]);

    /** DRAW STAT (ATK / DEF) */
    useEffect(() => {
        (() => {
            if (!active) return;
            const ctx = statCanvas.current?.getContext('2d');
            clearCanvas(ctx);

            if (!ctx || !isMonster) return;
            drawStatText(ctx, 'ATK', 432.10, 1106.494);
            drawStat(ctx, atk, 343.51 * UP_RATIO, 1106.494);
            if (!isLink) {
                drawStatText(ctx, 'DEF', 600.85, 1106.494);
                drawStat(ctx, def, 454.93 * UP_RATIO, 1106.494);
            }
        })();
    }, [isInitializing, atk, def, isLink, isMonster, active, statCanvas]);

    /** DRAW SET ID */
    useEffect(() => {
        if (active) {
            const ctx = setIdCanvas.current?.getContext('2d');
            clearCanvas(ctx);
            if (ctx) {
                let spacing = 0.175;
                let offsetY = 0;
                let xOffset = 0;
                ctx.fillStyle = (lightFooter && !isPendulum) ? '#fff' : '#000';
                ctx.shadowColor = (pendulumFrame === 'zarc' || opacity.artFrame === false) ? '#fff' : '#000';
                ctx.shadowOffsetY = 0;
                ctx.shadowOffsetX = 0;
                ctx.shadowBlur = (pendulumFrame === 'zarc' || opacity.artFrame === false) && !isPendulum ? 1 : 0;
                ctx.font = '22px stone-serif-regular';
                if (format === 'ocg') {
                    spacing = 0.145;
                    offsetY = -1;
                    xOffset = -3;
                }

                if (isPendulum) {
                    fillTextLeftWithSpacing(ctx, setId, spacing, 66.65 + xOffset, 1105.01 + offsetY);
                } else if (isLink) {
                    fillTextRightWithSpacing(ctx, setId, spacing, 666.56 + xOffset, 873.94 + offsetY);
                } else {
                    fillTextRightWithSpacing(ctx, setId, spacing, 728.78 + xOffset, 871.50 + offsetY);
                }
            }
        }
    }, [active, isInitializing, format, isLink, isPendulum, lightFooter, setIdCanvas, setId, isSpeedSkill, pendulumFrame, opacity.artFrame]);

    /** DRAW FIRST EDITION NOTICE AND PASSCODE */
    useEffect(() => {
        if (active) {
            const ctx = passcodeCanvas.current?.getContext('2d');
            clearCanvas(ctx);
            if (ctx) {
                ctx.fillStyle = lightFooter ? '#fff' : '#000';
                ctx.font = `${15 * UP_RATIO}px stone-serif-regular`;
                ctx.shadowColor = opacity.artFrame === false ? '#fff' : '#000';
                ctx.shadowOffsetY = 0;
                ctx.shadowOffsetX = 0;
                ctx.shadowBlur = opacity.artFrame === false ? 1 : 0;

                const endOfPasscode = fillTextLeftWithSpacing(ctx, passcode, 0.1, 25 * UP_RATIO, 777 * UP_RATIO);
                if (isFirstEdition && !isDuelTerminalCard) {
                    ctx.fillStyle = lightFooter ? '#fff' : '#000';

                    draw1stEdition(ctx, Math.max(endOfPasscode + 10 * UP_RATIO, 96 * UP_RATIO) - (format === 'ocg' ? 10 : 0));
                }
            }
        }
    }, [
        active,
        isDuelTerminalCard,
        isFirstEdition,
        isInitializing,
        passcode,
        passcodeCanvas,
        lightFooter,
        format,
        pendulumFrame,
        opacity.artFrame,
        isPendulum,
    ]);

    /** DRAW CREATOR TEXT */
    useEffect(() => {
        (() => {
            if (!active) return;
            const ctx = creatorCanvas.current?.getContext('2d');
            clearCanvas(ctx);

            if (!ctx) return;

            ctx.fillStyle = lightFooter ? '#fff' : '#000';
            ctx.shadowColor = opacity.artFrame === false ? '#fff' : '#000';
            ctx.shadowOffsetY = 0;
            ctx.shadowOffsetX = 0;
            ctx.shadowBlur = opacity.artFrame === false ? 1 : 0;
            drawCreatorText({
                ctx,
                format,
                value: creator,
                alignment: 'right',
            });
        })();
    }, [isInitializing, isPendulum, lightFooter, creator, active, creatorCanvas, format, opacity.artFrame]);

    /** DRAW STICKER */
    useEffect(() => {
        if (active) {
            const ctx = stickerCanvas.current?.getContext('2d');
            drawingPipeline.current.sticker.rerun += 1;
            drawingPipeline.current.sticker.instructor = () => {
                clearCanvas(ctx);

                if (sticker === 'no-sticker') return Promise.resolve();
                return drawFrom(ctx, `/asset/image/sticker/sticker-${sticker.toLowerCase()}.png`, 499 * UP_RATIO, 1110.938);
            };
        }
    }, [active, sticker, stickerCanvas]);

    /** DRAW CARD EFFECT + TYPE ABILITY */
    const drawTypeAbility = useCallback((
        ctx: CanvasRenderingContext2D | null | undefined,
        size: 'small' | 'medium' | 'large',
        alignment: 'left' | 'right' = 'left',
    ) => {
        if (ctx) {
            ctx?.clearRect(0, 0, CanvasWidth, 700 * UP_RATIO);
            const normalizedSubFamily = subFamily.toUpperCase();
            const normalizedTypeAbility = typeAbility.map(text => text.trim()).join('/');
            const typeAbilityWithIcon = (isMonster || normalizedSubFamily === 'NO ICON')
                ? normalizedTypeAbility
                : `${normalizedTypeAbility}${ST_ICON_SYMBOL}`;
            const normalizedTypeAbilityText = typeAbilityWithIcon.length > 0
                ? format === 'tcg'
                    ? size === 'large'
                        ? `[  ${typeAbilityWithIcon}  ]`
                        : `[${typeAbilityWithIcon}]`
                    : `【${typeAbilityWithIcon}】`
                : '';

            drawMonsterType({
                ctx,
                format,
                size,
                value: normalizedTypeAbilityText,
                metricMethod: !isMonster ? 'compact' : undefined,
                alignment,
                furiganaHelper,
            });
        }
    }, [subFamily, typeAbility, format, isMonster, furiganaHelper]);
    useEffect(() => {
        if (active) {
            const ctx = effectCanvas.current?.getContext('2d');
            const typeCtx = typeCanvas.current?.getContext('2d');
            const condenseTolerant = effectStyle?.condenseTolerant;
            ctx?.clearRect(0, 0, CanvasWidth, 1110.938);
            const drawEffectStartParam = [ctx, effect, false] as const;
            const drawEffectEndParam = [condenseTolerant, format, furiganaHelper] as const;

            if (isMonster) {
                const effectIndexSize = drawEffect(
                    ...drawEffectStartParam,
                    isNormal,
                    (isNormal ? vanillaMonsterFontData : effectMonsterFontData)[format],
                    monsterCoordinateData[format],
                    ...drawEffectEndParam,
                );
                drawTypeAbility(typeCtx, effectIndexSize === 0 ? 'medium' : 'small');
            } else if (isSpeedSkill) {
                const effectIndexSize = drawEffect(
                    ...drawEffectStartParam,
                    isNormal,
                    specialFontData[isPendulum ? 'pendulum' : 'normal'],
                    specialCoordinateData[isPendulum ? 'pendulum' : 'normal'],
                    ...drawEffectEndParam,
                );
                drawTypeAbility(typeCtx, effectIndexSize === 0 ? 'medium' : 'small');
            } else {
                drawEffect(
                    ...drawEffectStartParam,
                    false,
                    effectSTFontData[format + (isPendulum ? '-pendulum' : '')],
                    stCoordinateData[format + (isPendulum ? '-pendulum' : '')],
                    ...drawEffectEndParam,
                );
                drawTypeAbility(typeCtx, 'large', 'right');
            }
        }
    }, [
        isInitializing,
        drawTypeAbility,
        format,
        effect,
        isMonster,
        isNormal,
        isPendulum,
        effectStyle?.condenseTolerant,
        active,
        effectCanvas,
        typeCanvas,
        isSpeedSkill,
        furiganaHelper,
    ]);

    /** DRAW PENDULUM EFFECT */
    useEffect(() => {
        if (active) {
            const ctx = pendulumEffectCanvas.current?.getContext('2d');
            ctx?.clearRect(0, 0, 549 * UP_RATIO, 600 * UP_RATIO);
            if (isPendulum) {
                drawEffect(
                    ctx,
                    pendulumEffect,
                    true,
                    false,
                    pendulumFontList[format],
                    pendulumSizeList,
                    effectStyle?.condenseTolerant,
                    format,
                    furiganaHelper,
                );
            }
        }
    }, [active, effectStyle?.condenseTolerant, isInitializing, format, isPendulum, pendulumEffectCanvas, pendulumEffect, furiganaHelper]);

    /** DRAW TOTAL OVERLAY */
    useEffect(() => {
        if (active) {
            const ctx = finishCanvas.current?.getContext('2d');

            drawingPipeline.current.overlay.rerun += 1;
            drawingPipeline.current.overlay.instructor = async () => {
                ctx?.clearRect(0, 0, CanvasWidth, CanvasHeight);
                if (!ctx) return;
                await loopFinish(ctx, 'total-overlay', overlayType => drawFrom(ctx, `/asset/image/finish/finish-${overlayType}-total-overlay.png`, 0, 0));
            };
        }
    }, [active, isInitializing, finishCanvas, loopFinish]);

    return {
        drawingPipeline,
    };
};