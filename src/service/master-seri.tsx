import { useCallback, useEffect, useRef } from 'react';
import {
    arrowPositionList,
    foilPosition,
    pendulumFontList,
    pendulumSizeList,
    stFontList,
    stSizeList,
    typeSizeMap
} from 'src/const';
import {
    clearCanvas,
    draw1stEdition,
    drawStat,
    drawBracketSpaceTemplate,
    drawBracketTemplate,
    drawCreatorText,
    drawEffect,
    drawFromSource,
    drawFromSourceWithSize,
    drawIconSpaceTemplate,
    drawName,
    drawScale,
    drawTextTemplate,
    fillTextLeftWithSpacing,
    fillTextRightWithSpacing
} from 'src/draw';
import { CanvasConst, Card, CardArtCanvasConst, defaultTextStyle, foilStyleMap, iconList, MasterDuelCanvas, UpscaleRatio } from 'src/model';
import { checkDarkSynchro, checkLink, checkMonster, checkNormal, checkXyz, getCardFrame } from 'src/util';

const {
    // height: CanvasHeight,
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
    } = canvasMap;
    const {
        format,
        frame, foil,
        name, nameStyleType, nameStyle,
        effect,
        effectStyle,
        typeAbility,
        isPendulum, pendulumEffect, pendulumScaleBlue, pendulumScaleRed,
        atk, def, linkMap,
        attribute,
        subFamily,
        star,
        setId,
        passcode, isFirstEdition, creator, sticker,
    } = card;
    const isNormal = checkNormal(card);
    const isXyz = checkXyz(card);
    const isDarkSynchro = checkDarkSynchro(card);
    const isLink = checkLink(card);
    const isMonster = checkMonster(card);
    const {
        isInitializing,
        imageChangeCount,
        pendulumSize = 'medium',
    } = props;

    const drawingPipeline = useRef<Record<string, () => Promise<any>>>({
        frame: () => Promise.resolve(),
        star: () => Promise.resolve(),
        attribute: () => Promise.resolve(),
        specialFrame: () => Promise.resolve(),
        sticker: () => Promise.resolve(),
    });

    /** DRAW CARD ART */
    useEffect(() => {
        if (active) {
            const ctx = artCanvas.current?.getContext('2d');
            const previewCtx = previewCanvas.current;
            if (previewCtx && ctx) {
                ctx.clearRect(0, 0, 548 * UpscaleRatio, 650 * UpscaleRatio);
                const { x, y, w, h } = CardArtCanvasConst[isPendulum ? 'pendulum' : 'normal'];

                ctx.drawImage(previewCtx, x, y, w, h);
            }
        }
    }, [active, isPendulum, imageChangeCount, artCanvas, previewCanvas]);

    useEffect(() => {
        if (active) {
            const ctx = frameCanvas.current?.getContext('2d');

            drawingPipeline.current.frame = async () => {
                clearCanvas(ctx);
                const cardType = getCardFrame(frame);
                const hasFoil = foil !== 'normal';

                await drawFromSource(ctx, `/asset/image/frame/frame-${cardType}.png`, 0, 0);
                if (hasFoil) {
                    const { art } = foilPosition[foil];

                    await drawFromSource(ctx, `/asset/image/frame/frame-art-${foil}.png`, art.left, 120);
                    await drawFromSource(ctx, `/asset/image/frame/frame-effect-${foil}.png`, 0, 580);
                }
            };
        }
    }, [active, foil, frame, frameCanvas]);

    useEffect(() => {
        if (active) {
            const ctx = specialFrameCanvas.current?.getContext('2d');

            drawingPipeline.current.specialFrame = async () => {
                clearCanvas(ctx);
                const hasFoil = foil !== 'normal';

                const cardType = getCardFrame(frame);
                if (isPendulum && !isLink) {
                    if (!isXyz) await drawFromSource(ctx, `/asset/image/pendulum/overlay-pendulum-${cardType}.png`, 0, 0);
                    await drawFromSource(ctx, `/asset/image/frame/frame-pendulum-${pendulumSize}.png`, 0, 0);
                    if (hasFoil) await drawFromSource(ctx, `/asset/image/frame/frame-pendulum-${pendulumSize}-${foil}.png`, 0, 0);
                }

                const foiledBorder = !hasFoil ? '/asset/image/frame/frame-border.png' : `/asset/image/frame/frame-border-${foil}.png`;
                await drawFromSource(ctx, foiledBorder, 0, 0);
                if (!isPendulum && isLink) {
                    if (hasFoil) await drawFromSource(ctx, `./asset/image/link/link-overlay-${foil}.png`, 0, 110);
                    else await drawFromSource(ctx, '/asset/image/link/link-overlay.png', 66, 146);
                    if (hasFoil) await drawFromSource(ctx, `/asset/image/link/link-overlay-arrow-${foil}.png`, 0, 110);

                    await Promise.all(linkMap
                        .map(entry => {
                            const { left, top, height, width } = arrowPositionList[parseInt(entry) - 1];
                            if (hasFoil) {
                                return drawFromSourceWithSize(
                                    ctx,
                                    `/asset/image/link/link-arrow-${entry}-${foil}.png`,
                                    left, top,
                                    width, height,
                                );
                            } else {
                                return drawFromSourceWithSize(
                                    ctx,
                                    `/asset/image/link/link-arrow-${entry}.png`,
                                    left, top,
                                    width, height,
                                );
                            }
                        })
                    );
                    if (ctx) {
                        ctx.textAlign = 'right';
                        ctx.scale(1.2, 1);
                        ctx.font = 'bold 24px Yugioh Rush Duel Numbers V4';
                        ctx.fillText(`${linkMap.length}`, 505 / 1.2, 746);
                        ctx.scale(1 / 1.2, 1);
                        ctx.textAlign = 'left';
                    }
                }
            };
        }
    }, [active, foil, frame, isLink, isPendulum, isXyz, linkMap, pendulumSize, specialFrameCanvas]);

    /** DRAW ATTRIBUTE */
    useEffect(() => {
        if (active) {
            const ctx = attributeCanvas.current?.getContext('2d');
            drawingPipeline.current.attribute = () => {
                ctx?.clearRect(0, 0, CanvasWidth, 100 * UpscaleRatio);

                return drawFromSource(
                    ctx,
                    `/asset/image/attribute/attr-${format}-${attribute.toLowerCase()}.png`,
                    458 * UpscaleRatio, 37 * UpscaleRatio,
                );
            };
        }
    }, [active, attribute, attributeCanvas, format]);

    /** DRAW LEVEL - RANK - ST ICON */
    useEffect(() => {
        if (active) {
            const ctx = subFamilyCanvas.current?.getContext('2d');
            drawingPipeline.current.star = () => {
                ctx?.clearRect(0, 0, CanvasWidth, 150 * UpscaleRatio);
                if (isMonster && !isLink) {
                    const starWidth = 34 * UpscaleRatio;
                    const startSpacing = 2.3636 * UpscaleRatio;
                    const starCount = Math.min(13, star ?? 0);
                    const starType = isXyz ? 'rank' : isDarkSynchro ? 'negative-level' : 'level';
                    const totalWidth = starWidth * starCount + startSpacing * (starCount - 1);
                    /** Level 13 được canh giữa thay vì canh từ một trong hai lề */
                    const leftEdge = starCount <= 12
                        ? (isXyz || isDarkSynchro)
                            ? (57 - starWidth) * UpscaleRatio
                            : 492 * UpscaleRatio
                        : (isXyz || isDarkSynchro)
                            ? (CanvasWidth - totalWidth) / 2 - starWidth
                            : (CanvasWidth - totalWidth) / 2 + totalWidth;

                    let offset = 0 - (starWidth + startSpacing);
                    return Promise.all([...Array(starCount)]
                        .map(() => {
                            offset += (starWidth + startSpacing);
                            return drawFromSource(
                                ctx,
                                `/asset/image/sub-family/subfamily-${starType}.png`,
                                leftEdge + (starWidth + offset) * (isXyz || isDarkSynchro ? 1 : -1),
                                99 * UpscaleRatio,
                            );
                        })
                    );
                } else if (!isMonster) {
                    const normalizedSubFamily = subFamily.toUpperCase();
                    const hasSTIcon = normalizedSubFamily !== 'NO ICON' && iconList.includes(normalizedSubFamily);
                    const stIconSpacing = 7 * UpscaleRatio;

                    return hasSTIcon
                        ? drawFromSourceWithSize(ctx, `/asset/image/sub-family/subfamily-${normalizedSubFamily.toLowerCase()}.png`,
                            image => 491 * UpscaleRatio - image.naturalWidth - stIconSpacing,
                            103 * UpscaleRatio,
                            image => image.naturalWidth,
                            image => image.naturalWidth,
                        )
                        : new Promise(resolve => resolve(true));
                };
                return new Promise(resolve => resolve(true));
            };
        }
    }, [active, isDarkSynchro, isLink, isMonster, isXyz, star, subFamily, subFamilyCanvas]);

    useEffect(() => {
        if (active) {
            const fontSize = 43;
            const ctx = pendulumScaleCanvas.current?.getContext('2d');

            ctx?.clearRect(0, 0, 549, 600);
            if (ctx && isPendulum) {
                ctx.font = `${fontSize}px MatrixBoldSmallCaps`;
                ctx.textAlign = 'left';

                drawScale(ctx, pendulumScaleBlue ?? 0, 57, 532 + fontSize);
                drawScale(ctx, pendulumScaleRed ?? 0, 493, 532 + fontSize);
            }
        }
    }, [isInitializing, pendulumScaleBlue, isPendulum, pendulumScaleRed, active, pendulumScaleCanvas]);

    useEffect(() => {
        if (active) {
            const ctx = nameCanvas.current?.getContext('2d');
            if (ctx) {
                ctx.clearRect(0, 0, 549, 100);
                ctx.textAlign = 'left';
                const style = nameStyleType === 'auto'
                    ? foil !== 'normal'
                        ? foilStyleMap[foil] ?? defaultTextStyle
                        : { ...defaultTextStyle, fillStyle: (!isMonster || isLink || isXyz) ? '#ffffff' : '#000000' }
                    : nameStyle;

                drawName(ctx, name, 40.52, 78, 409, style);
            }
        }
    }, [active, foil, isInitializing, isLink, isMonster, isXyz, name, nameCanvas, nameStyle, nameStyleType]);

    useEffect(() => {
        if (active) {
            const ctx = statCanvas.current?.getContext('2d');
            clearCanvas(ctx);
            if (isMonster) {
                drawStat(ctx, atk, 343.51, 747);
                if (!isLink) {
                    drawStat(ctx, def, 454.93, 747);
                }
            }
        }
    }, [isInitializing, atk, def, isLink, isMonster, active, statCanvas]);

    useEffect(() => {
        if (active) {
            const ctx = setIdCanvas.current?.getContext('2d');
            clearCanvas(ctx);
            if (ctx) {
                if (isXyz && !isPendulum) ctx.fillStyle = '#fff';
                else ctx.fillStyle = '#000';
                ctx.font = '15px stone-serif-regular';

                if (isPendulum) {
                    fillTextLeftWithSpacing(ctx, setId, -0.1, 45, 746);
                } else if (isLink) {
                    fillTextRightWithSpacing(ctx, setId, -0.1, 450, 590);
                } else fillTextRightWithSpacing(ctx, setId, -0.1, 492, 589);
            }
        }
    }, [active, isInitializing, isLink, isPendulum, isXyz, setIdCanvas, setId]);

    useEffect(() => {
        if (active) {
            const ctx = passcodeCanvas.current?.getContext('2d');
            clearCanvas(ctx);
            if (ctx) {
                if (isXyz && !isPendulum) ctx.fillStyle = '#fff';
                else ctx.fillStyle = '#000';
                ctx.font = '15px stone-serif-regular';

                const endOfPasscode = fillTextLeftWithSpacing(ctx, passcode, 0.1, 25, 777);
                if (isFirstEdition) {
                    if (isXyz && !isPendulum) ctx.fillStyle = '#fff';
                    else ctx.fillStyle = '#000';

                    draw1stEdition(ctx, Math.max(endOfPasscode + 10, 96));
                }
            }
        }
    }, [active, isFirstEdition, isInitializing, isLink, isPendulum, isXyz, passcode, passcodeCanvas]);

    useEffect(() => {
        if (active) {
            const ctx = creatorCanvas.current?.getContext('2d');
            clearCanvas(ctx);
            if (ctx) {
                if (isXyz && !isPendulum) ctx.fillStyle = '#fff';
                else ctx.fillStyle = '#000';

                drawCreatorText(ctx, creator);
            }
        }
    }, [isInitializing, isLink, isPendulum, isXyz, creator, active, creatorCanvas]);

    /** DRAW STICKER */
    useEffect(() => {
        if (active) {
            const ctx = stickerCanvas.current?.getContext('2d');
            drawingPipeline.current.sticker = () => {
                clearCanvas(ctx);

                if (sticker === 'no-sticker') return Promise.resolve();
                return drawFromSource(ctx, `/asset/image/sticker/sticker-${sticker.toLowerCase()}.png`, 499 * UpscaleRatio, 750 * UpscaleRatio);
            };
        }
    }, [active, sticker, stickerCanvas]);

    const drawTypeAbility = useCallback((
        ctx: CanvasRenderingContext2D | null | undefined,
        textSize: 'small' | 'medium' | 'large',
        alignment: 'left' | 'right' = 'left',
    ) => {
        if (ctx) {
            ctx?.clearRect(0, 0, 549, 700);
            const size = typeSizeMap[textSize] ?? typeSizeMap['medium'];
            const { left } = size;
            const normalizedSubFamily = subFamily.toUpperCase();
            const instructionList = [
                drawBracketTemplate(ctx, '[', size, alignment),
                drawBracketSpaceTemplate(ctx, ' ', size, alignment),
                ...typeAbility.map((entry, index) => drawTextTemplate(
                    ctx,
                    entry,
                    index === typeAbility.length - 1,
                    size, alignment)),
                textSize === 'large'
                    ? normalizedSubFamily === 'NO ICON'
                        ? (edge: number) => edge + 4 * (alignment === 'left' ? 1 : -1)
                        : drawIconSpaceTemplate(ctx, size, alignment)
                    : (edge: number) => edge + 2,
                drawBracketTemplate(ctx, ']', size, alignment),
            ];
            const totalLeft = (alignment === 'left'
                ? instructionList
                : instructionList.reverse()).reduce((prev, curr) => {
                return curr(prev);
            }, left);
            ctx.textAlign = 'left';
            if (totalLeft > 508 && textSize === 'medium') drawTypeAbility(ctx, 'small', alignment);
        }
    }, [subFamily, typeAbility]);

    useEffect(() => {
        if (active) {
            const ctx = effectCanvas.current?.getContext('2d');
            const typeCtx = typeCanvas.current?.getContext('2d');
            ctx?.clearRect(0, 0, 549, 750);
            if (isMonster) {
                const effectIndexSize = drawEffect(ctx, effect, false, isNormal, undefined, undefined, effectStyle?.condenseTolerant);
                drawTypeAbility(typeCtx, effectIndexSize === 0
                    ? 'medium'
                    : 'small');
            } else {
                drawEffect(
                    ctx,
                    effect,
                    false,
                    false,
                    stFontList,
                    stSizeList,
                    effectStyle?.condenseTolerant,
                );
                drawTypeAbility(typeCtx, 'large', 'right');
            }
        }
    }, [isInitializing, drawTypeAbility, effect, isMonster, isNormal, effectStyle?.condenseTolerant, active, effectCanvas, typeCanvas]);

    useEffect(() => {
        if (active) {
            const ctx = pendulumEffectCanvas.current?.getContext('2d');
            ctx?.clearRect(0, 0, 549, 600);
            if (isMonster && isPendulum) {
                drawEffect(
                    ctx,
                    pendulumEffect,
                    true,
                    false,
                    pendulumFontList,
                    pendulumSizeList,
                    effectStyle?.condenseTolerant,
                );
            }
        }
    }, [active, effectStyle?.condenseTolerant, isInitializing, isMonster, isPendulum, pendulumEffectCanvas, pendulumEffect]);

    return {
        drawingPipeline,
    };
};