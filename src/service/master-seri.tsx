import { useCallback, useEffect, useRef } from 'react';
import {
    clearCanvas,
    draw1stEdition,
    drawCreatorText,
    drawEffect,
    drawFromSource,
    drawFromSourceWithSize,
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
    CardArtCanvasConst,
    MasterDuelCanvas,
    NO_ATTRIBUTE,
    PresetNameStyleMap,
    ST_ICON_SYMBOL,
    UP_RATIO,
    arrowPositionList,
    effectMonsterFontData,
    effectSTFontData,
    getDefaultNameStyle,
    iconList,
    monsterCoordinateData,
    pendulumFontList,
    pendulumSizeList,
    specialFontList,
    specialSizeList,
    stSizeList,
} from 'src/model';
import { FinishMap } from 'src/model/finish';
import { checkDarkSynchro, checkLink, checkMonster, checkNormal, checkSpeedSkill, checkXyz, getCardFrame } from 'src/util';

const {
    height: CanvasHeight,
    width: CanvasWidth,
} = CanvasConst;
type DrawerProp = {
    imageChangeCount: number,
    pendulumSize?: 'medium',
    isInitializing: boolean,
}
export const useMasterSeriDrawer = (active: boolean, canvasMap: MasterDuelCanvas, card: Card, props: DrawerProp) => {
    const {
        artCanvas,
        previewCanvas,
        frameCanvas,
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
        frame, foil, finish, artFinish,
        name, nameStyleType, nameStyle,
        effect,
        effectStyle,
        typeAbility,
        isPendulum, pendulumFrame, pendulumEffect, pendulumScaleBlue, pendulumScaleRed,
        atk, def, linkMap,
        attribute,
        subFamily,
        star,
        setId,
        passcode, creator, sticker,
        isFirstEdition, isDuelTerminalCard, isSpeedCard,
    } = card;
    console.log('🚀 ~ useMasterSeriDrawer ~ card:', card);
    const isNormal = checkNormal(card);
    const isXyz = checkXyz(card);
    const isDarkSynchro = checkDarkSynchro(card);
    const isLink = checkLink(card);
    const isMonster = checkMonster(card);
    const isSpeedSkill = checkSpeedSkill(card);
    const lightHeader = isXyz || isDarkSynchro || isSpeedSkill || (isMonster && ['hamon', 'uria', 'raviel'].includes(frame));
    const lightFooter = lightHeader && !isPendulum;
    const {
        isInitializing,
        imageChangeCount,
        pendulumSize = 'medium',
    } = props;

    const loopFinish = useCallback(async (ctx?: CanvasRenderingContext2D | null, caller?: (type: string) => any) => {
        if (!ctx || !Array.isArray(finish) || finish.length <= 0) return Promise.resolve();
        for (const type of finish) {
            ctx.globalCompositeOperation = FinishMap[type].blendMode ?? 'overlay';
            if (caller) await caller(type);
            ctx.globalCompositeOperation = 'source-over';
        }
    }, [finish]);

    const drawingPipeline = useRef<Record<string, { order: number, instructor: () => Promise<any> }>>({
        frame: {
            order: 0,
            instructor: () => Promise.resolve(),
        },
        star: {
            order: 1,
            instructor: () => Promise.resolve(),
        },
        attribute: {
            order: 2,
            instructor: () => Promise.resolve(),
        },
        specialFrame: {
            order: 3,
            instructor: () => Promise.resolve(),
        },
        sticker: {
            order: 4,
            instructor: () => Promise.resolve(),
        },
        overlay: {
            order: 5,
            instructor: () => Promise.resolve(),
        },
    });

    /** GOLD / PLATINUM FOIL + MAIN FRAME */
    useEffect(() => {
        if (active) {
            const ctx = frameCanvas.current?.getContext('2d');

            drawingPipeline.current.frame.instructor = async () => {
                clearCanvas(ctx);
                const cardType = getCardFrame(frame);
                if (!ctx) return;

                // ctx.globalAlpha = 0.6;
                await drawFromSource(ctx, `/asset/image/frame/frame-${cardType}.png`, 0, 0);
                // ctx.globalAlpha = 1;
            };
        }
    }, [active, foil, frame, frameCanvas]);

    /** DRAW CARD STRUCTURE */
    useEffect(() => {
        if (active) {
            const ctx = specialFrameCanvas.current?.getContext('2d');
            const previewCtx = previewCanvas.current;
            const effectBoxY = 860, effectBoxX = 35;
            const artBoxY = 170, artBoxX = 60;

            drawingPipeline.current.specialFrame.instructor = async () => {
                clearCanvas(ctx);
                if (!ctx) return;
                const hasFoil = foil !== 'normal';

                /** Art border for non-pendulum */
                if (!isPendulum) {
                    if (isXyz || isSpeedSkill) {
                        await drawFromSource(ctx, `/asset/image/frame/frame-art-${frame}.png`, artBoxX, artBoxY);
                    } else if (isLink || ['zarc', 'hamon', 'uria', 'raviel'].includes(frame)) {
                        await drawFromSource(ctx, '/asset/image/frame/frame-art-special.png', artBoxX, artBoxY);
                    } else {
                        await drawFromSource(ctx, '/asset/image/frame/frame-art.png', artBoxX, artBoxY);
                    }

                    await drawFromSource(ctx, '/asset/image/frame/frame-effect-box.png', effectBoxX, effectBoxY);
                    if (hasFoil) {
                        await drawFromSource(ctx, `/asset/image/frame/frame-art-${foil}.png`, artBoxX, artBoxY);
                        await drawFromSource(ctx, `/asset/image/frame/frame-effect-box-${foil}.png`, effectBoxX, effectBoxY);
                    } else if (isSpeedSkill) {
                        await drawFromSource(ctx, '/asset/image/frame/frame-effect-box-speed-skill.png', effectBoxX, effectBoxY);
                    }
                    await loopFinish(ctx, type => drawFromSource(ctx, `/asset/image/finish/finish-${type}-frame-art.png`, 0, 0));
                }

                /** General borders for pendulum */
                if (isPendulum && !isLink) {
                    await drawFromSource(ctx, `/asset/image/frame-pendulum/frame-pendulum-${pendulumFrame}.png`, 0, 0);
                }
                /** Actual artwork */
                const { x, y, w } = CardArtCanvasConst[isPendulum ? 'pendulum' : 'normal'];
                if (previewCtx && ctx) {
                    // ctx.clearRect(0, 0, 548 * UP_RATIO, 650 * UP_RATIO);
                    const { width: imageWidth, height: imageHeight } = previewCtx;

                    if (imageHeight > 0) ctx.drawImage(previewCtx, 0, 0, imageWidth, imageHeight, x, y, w, w / (imageWidth / imageHeight));
                }
                if (isPendulum && !isLink) {
                    // ctx.globalAlpha = 0;
                    await drawFromSource(ctx, `/asset/image/pendulum/frame-pendulum-pend-effect-${pendulumSize}.png`, 0, 738);
                    await drawFromSource(ctx, `/asset/image/pendulum/frame-pendulum-monster-effect-${pendulumSize}.png`, effectBoxX, effectBoxY + 20);
                    // ctx.globalAlpha = 1;
                }
                /** Stat border for monster */
                if (isMonster) {
                    await drawFromSource(ctx, '/asset/image/frame/frame-stat-border.png', 0, 1070);
                }
                if (isPendulum) {
                    await drawFromSource(ctx, `/asset/image/finish/art-finish-${artFinish}-pendulum-${pendulumSize}.png`, x, y);
                    await loopFinish(ctx, type => drawFromSource(ctx, `/asset/image/finish/finish-${type}-art-pendulum-${pendulumSize}.png`, x, y));
                } else {
                    await drawFromSource(ctx, `/asset/image/finish/art-finish-${artFinish}.png`, x, y);
                    await loopFinish(ctx, type => drawFromSource(ctx, `/asset/image/finish/finish-${type}-art.png`, x, y));
                }
                /** Scale and pendulum frame */
                if (isPendulum && !isLink) {
                    await drawFromSource(ctx, `/asset/image/pendulum/frame-pendulum-scale-${pendulumSize}.png`, 0, 750);
                    await drawFromSource(ctx, `/asset/image/frame/frame-pendulum-${pendulumSize}.png`, 30, 185);
                    if (hasFoil) await drawFromSource(ctx, `/asset/image/frame/frame-pendulum-${pendulumSize}-${foil}.png`, 30, 185);

                    await loopFinish(
                        ctx,
                        type => drawFromSource(ctx, `/asset/image/finish/finish-${type}-pendulum-frame-art-${pendulumSize}.png`, 0, 0)
                    );
                }

                const foiledBorder = !hasFoil ? '/asset/image/frame/frame-border.png' : `/asset/image/frame/frame-border-${foil}.png`;
                await drawFromSource(ctx, foiledBorder, 0, 0);
                await loopFinish(ctx, type => drawFromSource(ctx, `/asset/image/finish/finish-${type}-border.png`, 0, 0));
                /** Link map */
                if (!isPendulum && isLink) {
                    await Promise.all<any>([1, 2, 3, 4, 6, 7, 8, 9]
                        .map(async entry => {
                            const { left, top, height, width } = arrowPositionList[entry - 1];
                            const isActive = linkMap.includes(`${entry}`);
                            const baseLink = `/asset/image/link/link-inactive-${entry}`;
                            const activeLink = `/asset/image/link/link-active-${entry}`;
                            const coordinate: [number, number, number, number] = [left, top, width, height];

                            await drawFromSourceWithSize(ctx, `${baseLink}-base.png`, ...coordinate);
                            await drawFromSourceWithSize(ctx, `${baseLink}-core.png`, ...coordinate);
                            if (isActive) {
                                await drawFromSourceWithSize(ctx, `${activeLink}-base.png`, ...coordinate);
                                return drawFromSourceWithSize(ctx, `${activeLink}-core.png`, ...coordinate);
                            } else return;
                        })
                    );
                    if (hasFoil) await drawFromSource(ctx, `/asset/image/link/link-overlay-arrow-${foil}.png`, 0, 175);
                    await drawFromSource(ctx, '/asset/image/link/link-text.png', 600, 1080);

                    if (ctx) {
                        ctx.textAlign = 'right';
                        ctx.scale(1.2, 1);
                        ctx.font = `bold ${24 * UP_RATIO}px Yugioh Rush Duel Numbers V4`;
                        ctx.fillText(`${linkMap.length}`, 505 / 1.2 * UP_RATIO, 746 * UP_RATIO);
                        ctx.setTransform(1, 0, 0, 1, 0, 0);
                        ctx.textAlign = 'left';
                    }
                }

                /** Overlay bevel, vì bevel không overlay, không cần chờ tuần tự */
                await Promise.all(isXyz || isSpeedSkill
                    ? [
                        drawFromSource(ctx, `/asset/image/frame/frame-name-bevel-${frame}.png`, 0, 0),
                        drawFromSource(ctx, `/asset/image/frame/frame-border-bevel-${frame}.png`, 0, 0),
                    ]
                    : [
                        drawFromSource(ctx, '/asset/image/frame/frame-name-bevel.png', 0, 0),
                        drawFromSource(ctx, '/asset/image/frame/frame-border-bevel.png', 0, 0),
                    ]);
                /** Overlay frame */
                await loopFinish(ctx, type => {
                    const source = !isPendulum
                        ? `/asset/image/finish/finish-${type}-frame.png`
                        : `/asset/image/finish/finish-${type}-frame-pendulum-${pendulumSize}.png`;

                    return drawFromSource(ctx, source, 0, 0);
                });

                /** Predefined text */
                const predefinedTextColor = lightFooter ? 'white' : 'black';
                if (isDuelTerminalCard) {
                    await drawFromSource(ctx, `/asset/image/text/text-duel-terminal-${predefinedTextColor}.png`, 160, 1120);
                }
                if (isSpeedCard) {
                    const coordinate: [number, number, number, number] = isPendulum
                        ? [200, 1088, 196, 20]
                        : isLink
                            ? [155, 855, 196, 20]
                            : [80, 850, 245, 25];

                    await drawFromSourceWithSize(ctx, `/asset/image/text/text-speed-duel-${predefinedTextColor}.png`, ...coordinate);
                }
            };
        }
    }, [
        active,
        imageChangeCount,
        artCanvas,
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
    ]);

    /** DRAW ATTRIBUTE */
    useEffect(() => {
        if (active) {
            const ctx = attributeCanvas.current?.getContext('2d');
            drawingPipeline.current.attribute.instructor = async () => {
                if (!ctx) return;
                ctx.clearRect(0, 0, CanvasWidth, 100 * UP_RATIO);

                await drawFromSource(ctx, `/asset/image/attribute/attr-${format}-${attribute.toLowerCase()}.png`, 678, 55);
                await loopFinish(ctx, type => drawFromSource(ctx, `/asset/image/finish/finish-${type}-attribute.png`, 678, 55));
            };
        }
    }, [active, attribute, attributeCanvas, format, isSpeedSkill, loopFinish]);

    /** DRAW LEVEL - RANK - ST ICON */
    useEffect(() => {
        if (active) {
            const ctx = subFamilyCanvas.current?.getContext('2d');
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
                            ? (58 * UP_RATIO - starWidth)
                            : 492 * UP_RATIO
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
                            await drawFromSource(ctx, `/asset/image/sub-family/subfamily-${starType}.png`, ...coordinate);
                            return loopFinish(ctx, type => drawFromSource(ctx, `/asset/image/finish/finish-${type}-star.png`, ...coordinate));
                        })
                    );
                } else if (!isMonster && !isSpeedSkill) {
                    const normalizedSubFamily = subFamily.toUpperCase();
                    const hasSTIcon = normalizedSubFamily !== 'NO ICON' && iconList.includes(normalizedSubFamily);

                    return hasSTIcon
                        ? drawFromSourceWithSize(ctx, `/asset/image/sub-family/subfamily-${normalizedSubFamily.toLowerCase()}.png`,
                            image => 715 - image.naturalWidth,
                            153,
                            image => image.naturalWidth,
                            image => image.naturalWidth,
                        )
                        : new Promise(resolve => resolve(true));
                };
                return new Promise(resolve => resolve(true));
            };
        }
    }, [active, isDarkSynchro, isLink, isMonster, isSpeedSkill, isXyz, star, subFamily, subFamilyCanvas, loopFinish]);

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
    }, [isInitializing, pendulumScaleBlue, isPendulum, pendulumScaleRed, active, pendulumScaleCanvas]);

    /** DRAW NAME */
    useEffect(() => {
        if (active) {
            const defaultTextStyle = getDefaultNameStyle();
            const ctx = nameCanvas.current?.getContext('2d');
            if (ctx) {
                const lineWidth = attribute === NO_ATTRIBUTE ? 686 : 606;
                ctx.clearRect(0, 0, CanvasWidth, 100 * UP_RATIO);
                ctx.textAlign = 'left';
                const style = nameStyleType === 'auto'
                    ? foil !== 'normal'
                        ? PresetNameStyleMap[foil as keyof typeof PresetNameStyleMap ?? 'commonB'].value
                        : frame === 'zarc'
                            ? PresetNameStyleMap['animeGold'].value
                            : {
                                ...defaultTextStyle,
                                fillStyle: (!isMonster || lightHeader) ? '#ffffff' : '#000000',
                                headTextFillStyle: (!isMonster || lightHeader) ? '#ffffff' : '#000000',
                            }
                    : nameStyleType === 'predefined'
                        ? PresetNameStyleMap[nameStyle.preset as keyof typeof PresetNameStyleMap ?? 'commonB'].value
                        : nameStyle;
                let regionalStyle = style;
                if (format === 'ocg' && nameStyleType !== 'custom') regionalStyle.font = 'OCG';
                if (nameStyleType === 'auto' && isSpeedSkill) regionalStyle.font = 'Arial';
                const edge = format === 'tcg' ? 60 : 68; // 61 AI Ritual

                drawName(ctx, name, edge, 78 * UP_RATIO, lineWidth, regionalStyle, { isSpeedSkill, format });
            }
        }
    }, [active, attribute, foil, isInitializing, isMonster, isSpeedSkill, frame, lightHeader, name, nameCanvas, nameStyle, nameStyleType, format]);

    /** DRAW STAT */
    useEffect(() => {
        if (active) {
            const ctx = statCanvas.current?.getContext('2d');
            clearCanvas(ctx);
            if (ctx) {
                if (isMonster) {
                    drawStatText(ctx, 'ATK', 432.10, 747 * UP_RATIO);
                    drawStat(ctx, atk, 343.51 * UP_RATIO, 747 * UP_RATIO);
                    if (!isLink) {
                        drawStatText(ctx, 'DEF', 600.85, 747 * UP_RATIO);
                        drawStat(ctx, def, 454.93 * UP_RATIO, 747 * UP_RATIO);
                    }
                }
            }
        }
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
                ctx.fillStyle = lightFooter ? '#fff' : '#000';
                if (format === 'ocg') {
                    spacing = 0.145;
                    offsetY = -1;
                    xOffset = -3;
                    ctx.font = '22px stone-serif-regular';
                } else {
                    ctx.font = '22px stone-serif-regular';
                }

                if (isPendulum) {
                    fillTextLeftWithSpacing(ctx, setId, spacing, 66.65 + xOffset, 1105.01 + offsetY);
                } else if (isLink) {
                    fillTextRightWithSpacing(ctx, setId, spacing, 666.56 + xOffset, 873.94 + offsetY);
                } else fillTextRightWithSpacing(ctx, setId, spacing, 728.78 + xOffset, 871.50 + offsetY);
            }
        }
    }, [active, isInitializing, format, isLink, isPendulum, lightFooter, setIdCanvas, setId, isSpeedSkill]);

    /** DRAW FIRST EDITION NOTICE AND PASSCODE */
    useEffect(() => {
        if (active) {
            const ctx = passcodeCanvas.current?.getContext('2d');
            clearCanvas(ctx);
            if (ctx) {
                ctx.fillStyle = lightFooter ? '#fff' : '#000';
                ctx.font = `${15 * UP_RATIO}px stone-serif-regular`;

                const endOfPasscode = fillTextLeftWithSpacing(ctx, passcode, 0.1, 25 * UP_RATIO, 777 * UP_RATIO);
                if (isFirstEdition && !isDuelTerminalCard) {
                    ctx.fillStyle = lightFooter ? '#fff' : '#000';

                    draw1stEdition(ctx, Math.max(endOfPasscode + 10 * UP_RATIO, 96 * UP_RATIO));
                }
            }
        }
    }, [active, isDuelTerminalCard, isFirstEdition, isInitializing, passcode, passcodeCanvas, lightFooter]);

    /** DRAW CREATOR TEXT */
    useEffect(() => {
        if (active) {
            const ctx = creatorCanvas.current?.getContext('2d');
            clearCanvas(ctx);
            if (ctx) {
                ctx.fillStyle = lightFooter ? '#fff' : '#000';
                drawCreatorText({
                    ctx,
                    format,
                    value: creator,
                    alignment: 'right',
                });
            }
        }
    }, [isInitializing, isLink, isPendulum, lightFooter, creator, active, creatorCanvas, format]);

    /** DRAW STICKER */
    useEffect(() => {
        if (active) {
            const ctx = stickerCanvas.current?.getContext('2d');
            drawingPipeline.current.sticker.instructor = () => {
                clearCanvas(ctx);

                if (sticker === 'no-sticker') return Promise.resolve();
                return drawFromSource(ctx, `/asset/image/sticker/sticker-${sticker.toLowerCase()}.png`, 499 * UP_RATIO, 750 * UP_RATIO);
            };
        }
    }, [active, sticker, stickerCanvas]);

    /** DRAW TYPE / ABILITY */
    const drawTypeAbility = useCallback((
        ctx: CanvasRenderingContext2D | null | undefined,
        textSize: 'small' | 'medium' | 'large',
        alignment: 'left' | 'right' = 'left',
    ) => {
        if (ctx) {
            ctx?.clearRect(0, 0, CanvasWidth, 700 * UP_RATIO);
            const normalizedSubFamily = subFamily.toUpperCase();
            const normalizedTypeAbility = typeAbility.map(text => text.trim()).join('/');
            const typeAbilityWithIcon = (isMonster || normalizedSubFamily === 'NO ICON')
                ? normalizedTypeAbility
                : `${normalizedTypeAbility}${ST_ICON_SYMBOL}`;
            const normalizedTypeAbilityText = format === 'tcg'
                ? textSize === 'large'
                    ? `[  ${typeAbilityWithIcon}  ]`
                    : `[${typeAbilityWithIcon}]`
                : `【${typeAbilityWithIcon}】`;

            drawMonsterType({
                ctx,
                format,
                size: textSize,
                value: normalizedTypeAbilityText,
                alignment,
            });
        }
    }, [subFamily, typeAbility, format, isMonster]);

    /** DRAW MONSTER EFFECT */
    useEffect(() => {
        if (active) {
            const ctx = effectCanvas.current?.getContext('2d');
            const typeCtx = typeCanvas.current?.getContext('2d');
            const condenseTolerant = effectStyle?.condenseTolerant;
            ctx?.clearRect(0, 0, CanvasWidth, 750 * UP_RATIO);
            const drawEffectParam = [ctx, effect, false] as const;

            if (isMonster) {
                const effectIndexSize = drawEffect(
                    ...drawEffectParam,
                    isNormal,
                    effectMonsterFontData[format],
                    monsterCoordinateData[format],
                    condenseTolerant,
                    format,
                );
                drawTypeAbility(typeCtx, effectIndexSize === 0 ? 'medium' : 'small');
            } else if (isSpeedSkill) {
                const effectIndexSize = drawEffect(
                    ...drawEffectParam,
                    isNormal,
                    specialFontList, specialSizeList, condenseTolerant, format);
                drawTypeAbility(typeCtx, effectIndexSize === 0 ? 'medium' : 'small');
            } else {
                drawEffect(
                    ...drawEffectParam,
                    false,
                    effectSTFontData[format], stSizeList, condenseTolerant, format);
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
        effectStyle?.condenseTolerant,
        active,
        effectCanvas,
        typeCanvas,
        isSpeedSkill,
    ]);

    /** DRAW PENDULUM EFFECT */
    useEffect(() => {
        if (active) {
            const ctx = pendulumEffectCanvas.current?.getContext('2d');
            ctx?.clearRect(0, 0, 549 * UP_RATIO, 600 * UP_RATIO);
            if (isMonster && isPendulum) {
                drawEffect(
                    ctx,
                    pendulumEffect,
                    true,
                    false,
                    pendulumFontList[format],
                    pendulumSizeList,
                    effectStyle?.condenseTolerant,
                    format,
                );
            }
        }
    }, [active, effectStyle?.condenseTolerant, isInitializing, format, isMonster, isPendulum, pendulumEffectCanvas, pendulumEffect]);

    /** DRAW FINAL OVERLAY */
    useEffect(() => {
        if (active) {
            const ctx = finishCanvas.current?.getContext('2d');

            drawingPipeline.current.overlay.instructor = async () => {
                ctx?.clearRect(0, 0, CanvasWidth, CanvasHeight);
                if (!ctx) return;
                await loopFinish(ctx, type => drawFromSource(ctx, `/asset/image/finish/finish-${type}-overlay.png`, 0, 0));
            };
        }
    }, [active, isInitializing, finishCanvas, loopFinish]);

    return {
        drawingPipeline,
    };
};