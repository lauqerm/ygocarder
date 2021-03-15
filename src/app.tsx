
import React, { useCallback, useEffect, useRef, useState } from 'react';
import './app.scss';
import 'antd/dist/antd.css';
import { notification } from 'antd';
import {
    Card,
    CardFamily,
    defaultMonster,
    defaultSpell,
    defaultTrap,
} from './model';
import { debounce } from 'lodash';
import {
    checkLink,
    checkMonster,
    checkNormal,
    checkPendulum,
    checkXyz,
    createCondenser,
    getCardFrame,
    drawFromSource,
    drawFromSourceWithSize,
} from './util';
import { CardInputPanel } from './page';
import { BoxSize, FontSize, monsterFontList, monsterSizeList, pendulumFontList, pendulumSizeList, stFontList, stSizeList } from './const';
import './asset/font.css';

function App() {
    const [selectedPage, setPage] = useState<CardFamily>('Monster');
    const [currentCardPage, setCardPage] = useState<Record<string, Card>>({
        Monster: defaultMonster,
        Spell: defaultSpell,
        Trap: defaultTrap,
    });
    const previewCanvasRef = useRef<HTMLCanvasElement>(null);
    const drawCanvasRef = useRef<HTMLCanvasElement>(null);
    const frameCanvasRef = useRef<HTMLCanvasElement>(null);
    const artCanvasRef = useRef<HTMLCanvasElement>(null);
    const specialFrameCanvasRef = useRef<HTMLCanvasElement>(null);
    const subFamilyCanvasRef = useRef<HTMLCanvasElement>(null);
    const pendulumScaleCanvasRef = useRef<HTMLCanvasElement>(null);
    const pendulumEffectCanvasRef = useRef<HTMLCanvasElement>(null);
    const effectCanvasRef = useRef<HTMLCanvasElement>(null);
    const nameCanvasRef = useRef<HTMLCanvasElement>(null);
    const attributeCanvasRef = useRef<HTMLCanvasElement>(null);
    const ADCanvasRef = useRef<HTMLCanvasElement>(null);

    const currentCard = currentCardPage[selectedPage];
    const {
        family,
        name,
        effect,
        type_ability,
        pendulum_effect,
        pendulum_scale,
        atk, def, link_map,
        attribute,
        subFamily,
        star,
    } = currentCard;
    const isNormal = checkNormal(currentCard);
    const isXyz = checkXyz(currentCard);
    const isLink = checkLink(currentCard);
    const isMonster = checkMonster(currentCard);
    const isPendulum = checkPendulum(currentCard);
    const pendulumSize = 'medium';

    useEffect(() => {

    }, [currentCard.attribute]);

    const drawingStatus = useRef<Record<string, Promise<any>>>({
        frame: Promise.resolve(),
        star: Promise.resolve(),
        attribute: Promise.resolve(),
        specialFrame: Promise.resolve(),
    });
    const [imageChangeCount, setImageChangeCount] = useState(0);

    useEffect(() => {
        const ctx = frameCanvasRef.current?.getContext('2d');
        const cardType = getCardFrame(family, subFamily, type_ability);
        
        ctx?.clearRect(0, 0, 549, 800);
        drawingStatus.current.frame = drawFromSource(ctx, `/asset/image/frame/frame-${cardType}.png`, 0, 0);
    }, [family, subFamily, type_ability]);

    useEffect(() => {
        const ctx = artCanvasRef.current?.getContext('2d');
        const previewCtx = previewCanvasRef.current;
        if (previewCtx && ctx) {
            ctx.clearRect(0, 0, 548, 650);
            if (isPendulum) {
                ctx.drawImage(previewCtx, 38, 144, 474, 470);
            } else {
                ctx.drawImage(previewCtx, 67, 147, 416, 416);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPendulum, imageChangeCount]);

    useEffect(() => {
        const arrowPositionList = [
            { top: 126, left: 46, width: 50, height: 51 },
            { top: 116, left: 226, width: 99, height: 32 },
            { top: 126, left: 453, width: 51, height: 51 },
            { top: 305, left: 35, width: 33, height: 99 },
            { top: 0, left: 0, width: 0, height: 0 },   // Middle
            { top: 305, left: 482, width: 32, height: 99 },
            { top: 534, left: 46, width: 50, height: 50 },
            { top: 562, left: 226, width: 99, height: 33 },
            { top: 534, left: 453, width: 51, height: 50 },
        ];
        const ctx = specialFrameCanvasRef.current?.getContext('2d');
        ctx?.clearRect(0, 0, 549, 800);
        
        const cardType = getCardFrame(family, subFamily, type_ability);
        drawingStatus.current.specialFrame = (async () => {
            if (isPendulum) {
                await drawFromSource(ctx, `/asset/image/pendulum/overlay-pendulum-${cardType}.png`, 0, 0);
                await drawFromSource(ctx, `/asset/image/frame/frame-pendulum-${pendulumSize}.png`, 0, 0);
            }
            await drawFromSource(ctx, '/asset/image/frame/frame-border.png', 0, 0);
            if (!isPendulum && isLink) {
                await drawFromSource(ctx, '/asset/image/link/link-overlay.png', 66, 146);
                await Promise.all(link_map
                    .map(entry => {
                        const { left, top, height, width } = arrowPositionList[parseInt(entry) - 1];
                        return drawFromSourceWithSize(ctx, `/asset/image/link/link-arrow-${entry}.png`, left, top, width, height);
                    })
                );
                if (link_map.length > 0) await drawFromSource(ctx, `./asset/image/link-number/link-corner-${link_map.length}.png`, 549 - 61, 800 - 69);
            }
        })();
    }, [family, isLink, isPendulum, link_map, subFamily, type_ability]);

    useEffect(() => {
        const ctx = attributeCanvasRef.current?.getContext('2d');
        ctx?.clearRect(0, 0, 549, 100);
        drawingStatus.current.attribute = drawFromSource(ctx, `/asset/image/attribute/attr-${attribute.toLowerCase()}.png`, 458, 37);
    }, [attribute]);

    useEffect(() => {
        const ctx = subFamilyCanvasRef.current?.getContext('2d');
        ctx?.clearRect(0, 0, 549, 150);
        if (isMonster && !isLink) {
            let counter = Math.min(13, star ?? 0);
            let type = isXyz ? 'rank' : 'level';
            let offset = 0 - (34 + 2.3636);
            let totalWidth = 34 * counter + 2.3636 * (counter - 1);
            let startPoint = counter <= 12
                ? isXyz ? 57 - 34 : 492
                : (549 - totalWidth) / 2 + totalWidth;
            drawingStatus.current.star = Promise.all([...Array(counter)]
                .map(() => {
                    offset += (34 + 2.3636);
                    return drawFromSource(
                        ctx,
                        `/asset/image/sub-family/subfamily-${type}.png`,
                        isXyz ? startPoint + (34 + offset) : startPoint - (34 + offset),
                        99,
                    );
                })
            );
        } else if (!isMonster) {
            const normalizedFamily = family.toLowerCase();
            const normalizedSubFamily = subFamily.toLowerCase();
            const hasIcon = normalizedSubFamily !== 'normal';

            drawingStatus.current.star = Promise.all([
                drawFromSource(
                    ctx, `/asset/image/sub-family/subfamily-container-${normalizedFamily}${hasIcon ? '-icon' : ''}.png`,
                    (image) => 491 - image.naturalWidth,
                    103,
                ),
                hasIcon
                    ? drawFromSource(ctx, `/asset/image/sub-family/subfamily-${normalizedSubFamily}.png`,
                        (image) => 491 - image.naturalWidth - 10,
                        103 - 2)
                    : new Promise(resolve => resolve(true)),
            ]);
        }
    }, [family, isLink, isMonster, isXyz, star, subFamily]);

    useEffect(() => {
        const ctx = pendulumScaleCanvasRef.current?.getContext('2d');
        ctx?.clearRect(0, 0, 549, 600);
        if (ctx && isPendulum) {
            let fontSize = 43;
            let top = 532 + fontSize;

            ctx.font = `${fontSize}px MatrixBoldSmallCaps`;
            ctx.textAlign = 'center';
            ctx.fillText(pendulum_scale, 57.06, top);
            ctx.fillText(pendulum_scale, 492.61, top);
        }
    }, [isPendulum, pendulum_scale]);

    const drawTypeAbility  = useCallback(async (ctx: CanvasRenderingContext2D | null | undefined, size: 'medium' | 'small' = 'medium') => {
        if (ctx && isMonster) {
            const defaultTop = size === 'medium' ? 620.80 : 622;
            const drawBracketTemplate = (content: string, top: number = defaultTop) => {
                return (left: number) => {
                    ctx.font = `bold ${size === 'medium' ? 19.69 : 18.71}px stone-serif-bold`;
                    ctx.textAlign = 'left';
                    ctx.fillText(content, left, top);
                    return left + ctx.measureText(content).width;
                };
            };
            const drawBracketSpaceTemplate = (content: string, top: number = defaultTop) => {
                return (left: number) => {
                    ctx.font = 'bold 8.51px stone-serif-bold';
                    ctx.textAlign = 'left';
                    ctx.fillText(content, left, top);
                    return left + ctx.measureText(content).width;
                };
            };
            const drawTextTemplate = (content: string, top: number = defaultTop, isLast = false) => {
                return (left: number) => {
                    let totalOffset = left;
                    const upperCaseContent = content.toLocaleUpperCase();
                    ctx.textAlign = 'left';

                    const firstLetter = upperCaseContent[0];
                    ctx.font = `bold ${size === 'medium' ? 21 : 20}px stone-serif-bold`;
                    ctx.fillText(firstLetter, totalOffset, top);
                    totalOffset += ctx.measureText(firstLetter).width;

                    const restLetter = upperCaseContent.slice(1, upperCaseContent.length);
                    const restScale = size === 'medium' ? 0.95 : 1.1;
                    ctx.font = `bold ${size === 'medium' ? 19 : 16}px stone-serif-bold`;
                    ctx.scale(restScale, 1);
                    ctx.fillText(restLetter, totalOffset / restScale, top);
                    totalOffset += ctx.measureText(restLetter).width * restScale;
                    ctx.scale(1 / restScale, 1);

                    if (!isLast) {
                        ctx.font = `bold ${size === 'medium' ? 5 : 5}px stone-serif-bold`;
                        ctx.fillText(' ', totalOffset, top);
                        totalOffset += ctx.measureText(' ').width;

                        ctx.font = `oblique bold ${size === 'medium' ? 23 : 21}px stone-serif-bold`;
                        ctx.scale(0.65, 1);
                        ctx.fillText('/', totalOffset / 0.65, top);
                        totalOffset += ctx.measureText('/').width * 0.65;
                        ctx.scale(1 / 0.65, 1);

                        ctx.font = `bold ${size === 'medium' ? 15 : 15}px stone-serif-bold`;
                        ctx.fillText(' ', totalOffset, top);
                        totalOffset += ctx.measureText(' ').width;
                    }
                    return totalOffset;
                };
            };
            const instructionList = [
                drawBracketTemplate('[', defaultTop - 1.64),
                drawBracketSpaceTemplate(' '),
                ...type_ability.map((entry, index) => drawTextTemplate(entry, undefined, index === type_ability.length - 1)),
                drawBracketTemplate(']', defaultTop - 1.64),
            ];
            instructionList.reduce((prev, curr) => {
                return curr(prev);
            }, 43);
        }
    }, [isMonster, type_ability]);

    useEffect(() => {
        const ctx = nameCanvasRef.current?.getContext('2d');
        if (ctx) {
            ctx.clearRect(0, 0, 549, 100);
            ctx.font = '64.59px MatrixRegularSmallCaps';
            ctx.textAlign = 'left';
            ctx.fillStyle = isXyz ? '#ffffff' : '#000000';
            const nameWidth = ctx.measureText(name).width;

            if (nameWidth > 0) {
                const condenseRatio = Math.min(409 / nameWidth, 1);
                ctx.scale(condenseRatio, 1);
                ctx.fillText(name, 40.52 / condenseRatio, 81);
                ctx.scale(1 / condenseRatio, 1);
                ctx.fillStyle = '#000000';
            }
        }
    }, [isXyz, name]);

    useEffect(() => {
        const ctx = ADCanvasRef.current?.getContext('2d');
        if (ctx && isMonster) {
            ctx.clearRect(0, 0, 549, 800);
            ctx.font = '25px MatrixBoldSmallCaps';
            ctx.textAlign = 'right';
            const top = 752 - 25 * 0.2;
            const atkWidth = ctx.measureText(atk).width;

            if (atkWidth > 0) {
                const condenseRatio = Math.min(49.94 / atkWidth, 1);
                ctx.scale(condenseRatio, 1);
                ctx.fillText(atk, (343.51 + 49.94) / condenseRatio, top);
                ctx.scale(1 / condenseRatio, 1);
            }
            
            if (!isLink) {
                const defWidth = ctx.measureText(def).width;

                if (defWidth > 0) {
                    const condenseRatio = Math.min(49.94 / defWidth, 1);
                    ctx.scale(condenseRatio, 1);
                    ctx.fillText(def, (454.93 + 49.94) / condenseRatio, top);
                    ctx.scale(1 / condenseRatio, 1);
                }
            }
        }
    }, [atk, def, isLink, isMonster]);

    const splitEffect = useCallback((effect: string) => {
        let effectBody = effect;

        let effectMaterial = '';
        const materialRegex = /^(\[([^\]]*)\]\s*)/m;
        const materialReplacement = materialRegex.exec(effectBody)?.[1];
        const material = materialRegex.exec(effectBody)?.[2];
        if (material && materialReplacement) {
            effectMaterial = material;
            effectBody = effectBody.replace(materialReplacement, '');
        } else effectMaterial = '';

        let effectFlavorCondition = '';
        const flavorConditionRegex = /\n(^[\r\t\f\v \u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*\([\w\W]+\))\s*$/m;
        const flavorCondition = flavorConditionRegex.exec(effect)?.[1];
        if (flavorCondition && isNormal) {
            effectFlavorCondition = flavorCondition;
            effectBody = effectBody.replace(flavorCondition, '');
        } else effectFlavorCondition = '';

        return {
            material: effectMaterial,
            body: effectBody,
            flavorCondition: effectFlavorCondition
        };
    }, [isNormal]);
    const drawCondenseText = useCallback(async (
        ctx: CanvasRenderingContext2D | null | undefined,
        text: string,
        isPendulum = false,
        fontList: FontSize[] = monsterFontList,
        sizeList: BoxSize[] = monsterSizeList,
    ) => {
        if (ctx) {
            const tolerantPerSentence: Record<string, number> = {
                '1': 645,
                '2': 665,
                '3': 685,
            };
            const {
                body: effectBody,
                flavorCondition: effectFlavorCondition,
                material: effectMaterial,
            } = isPendulum
                ? {
                    body: text,
                    flavorCondition: '',
                    material: '',
                } : splitEffect(text);

            const additionalLineCount = (effectMaterial.length > 0 ? 1 : 0) + (effectFlavorCondition.length > 0 ? 1 : 0);
            const sentencizeText = effectBody.split('\n');

            let effectIndexSize = 0;
            while(effectIndexSize < fontList.length) {
                const { fontSize, lineHeight, lineCount } = fontList[effectIndexSize];
                const { left, width, top } = sizeList[effectIndexSize];
                const condenser = createCondenser();
                let effectiveRatio = 1000;
                const maxLine = Math.max(sentencizeText.length, lineCount);
                ctx.font = `${fontSize}px MatrixBook`;
                ctx.textAlign = 'left';

                let lineList: { text: string, width: number, isLast: boolean }[] = [];
                const isOverflow = () => {
                    lineList = [];

                    return sentencizeText.reduce((prev, curr) => {
                        const hypoWidth = width / (condenser.getMedian() / 1000);
                        const tokenizeText = curr.split(/([\s-])/g);
                        let currentLineCount = 1;
                        let tokenSentence: string[] = [];
                        let totalWidth = 0;
                        for (let cnt = 0; cnt < tokenizeText.length; cnt++) {
                            const tokenWidth = ctx.measureText(tokenizeText[cnt]).width;
                            if (totalWidth + tokenWidth > hypoWidth) {
                                const fullString = tokenSentence.join('').trim();
                                lineList.push({
                                    text: fullString,
                                    width: ctx.measureText(fullString).width,
                                    isLast: false,
                                });
                                totalWidth = tokenWidth;
                                tokenSentence = [tokenizeText[cnt]];
                                currentLineCount += 1;
                            } else {
                                totalWidth += tokenWidth;
                                tokenSentence.push(tokenizeText[cnt]);
                            }
                        }

                        const fullString = tokenSentence.join('').trim();
                        lineList.push({
                            text: fullString,
                            width: ctx.measureText(fullString).width,
                            isLast: true,
                        });
        
                        return prev + currentLineCount;
                    }, 0) + additionalLineCount;
                };

                while (condenser.getIterateCount() >= 0) {
                    if (condenser.getIterateCount() <= 0) {
                        // When out of iteration, return the concluded median
                        effectiveRatio = condenser.getMedian();
                        break;
                    } else {
                        const lineCount = isOverflow();

                        if (lineCount > maxLine) {
                            // If overflow, lower the median and apply it
                            condenser.searchDown();
                        } else {
                            if (condenser.getMedian() === 1000) break;
                            else effectiveRatio = condenser.reverseSearch();
                        }
                    }
                }

                if (effectiveRatio < (tolerantPerSentence[`${sentencizeText.length}`] ?? tolerantPerSentence['3'])) {
                    effectIndexSize += 1;
                } else {
                    let baseline = top + lineHeight;
                    if (effectMaterial.length > 0) {
                        let actualWidth = ctx.measureText(effectMaterial).width;
                        let condenseRatio = Math.min(width / actualWidth, 1);

                        ctx.scale(condenseRatio, 1);
                        ctx.fillText(effectMaterial, left / condenseRatio, baseline);
                        baseline += lineHeight;
                        ctx.scale(1 / condenseRatio, 1);
                    }

                    const sigmoidRatio = effectiveRatio / 1000; // Fancy way to force ratio in to 0-1 range
                    lineList.forEach(({ text, width: actualWidth, isLast }, index) => {
                        const condenseRatio = isLast
                            ? Math.min(sigmoidRatio, 1)
                            : width / actualWidth;

                        if (condenseRatio <= 1) {
                            ctx.scale(condenseRatio, 1);
                            ctx.fillText(text, left / condenseRatio, baseline);
                            baseline += lineHeight;
                            ctx.scale(1 / condenseRatio, 1);
                        } else {
                            const spaceSeparatedText = text.split(' ');
                            ctx.scale(1, 1);
                            let currentLeft = left;
                            let widthPerEntry: number[] = [];

                            spaceSeparatedText.forEach(entry => {
                                widthPerEntry.push(ctx.measureText(entry).width);
                            });
                            // Split text by "space", then distribute remaining width to those spaces, resulting in "widen" space
                            const spaceWidth = (width - widthPerEntry.reduce((prev, cur) => prev + cur, 0)) / (spaceSeparatedText.length - 1);

                            spaceSeparatedText.forEach((entry, index) => {
                                ctx.fillText(entry, currentLeft, baseline);
                                currentLeft += widthPerEntry[index] + spaceWidth;
                            });
                            baseline += lineHeight;
                        }
                    });

                    if (effectFlavorCondition.length > 0) {
                        let actualWidth = ctx.measureText(effectFlavorCondition).width;
                        let condenseRatio = Math.min(width / actualWidth, 1);

                        ctx.scale(condenseRatio, 1);
                        ctx.fillText(effectFlavorCondition, left / condenseRatio, baseline);
                        baseline += lineHeight;
                        ctx.scale(1 / condenseRatio, 1);
                    }
                    break;
                }
            }

            !isPendulum && await drawTypeAbility(ctx, effectIndexSize === 0 ? 'medium' : 'small');
        }
    }, [drawTypeAbility, splitEffect]);
    useEffect(() => {
        const ctx = effectCanvasRef.current?.getContext('2d');
        if (isMonster) {
            ctx?.clearRect(0, 0, 549, 750);
            drawCondenseText(ctx, effect, false);
        }
    }, [drawCondenseText, effect, isMonster]);
    useEffect(() => {
        const ctx = effectCanvasRef.current?.getContext('2d');
        if (!isMonster) {
            ctx?.clearRect(0, 0, 549, 750);
            drawCondenseText(
                ctx,
                effect,
                false,
                stFontList,
                stSizeList,
            );
        }
    }, [drawCondenseText, effect, isMonster]);
    useEffect(() => {
        const ctx = pendulumEffectCanvasRef.current?.getContext('2d');
        if (isPendulum) {
            ctx?.clearRect(0, 0, 549, 600);
            drawCondenseText(
                ctx,
                pendulum_effect,
                true,
                pendulumFontList,
                pendulumSizeList,
            );
        }
    }, [drawCondenseText, isPendulum, pendulum_effect]);

    // const drawRefrenceImage  = useCallback(async (ctx: CanvasRenderingContext2D | null | undefined) => {
    // let leftOffset = -100;
    // let topOffset = 5;
    // let leftOffset = -4;
    // let topOffset = 200;
    //     let leftOffset = -300;
    //     let topOffset = -7;
    //     await drawFromSourceWithSize(ctx, '/asset/image/MP18-EN-C-1E.png', -leftOffset, -topOffset, 541, 800 * (541 / 549));
    // }, []);

    useEffect(() => {
        const ctx = drawCanvasRef.current?.getContext('2d');
        if (ctx) {
            const pixelRatio = window.devicePixelRatio;
            ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            ctx.imageSmoothingQuality = 'high';
            ctx.clearRect(0, 0, 549, 800);
        }
    }, []);

    const onExport = useRef(debounce(async (exportProps: {
        isPendulum: boolean,
    }) => {
        const {
            isPendulum = false
        } = exportProps;
        const canvasRef = drawCanvasRef.current;
        const exportCtx = canvasRef?.getContext('2d');
        const generateLayer = (canvasLayer: React.RefObject<HTMLCanvasElement>, ctx: CanvasRenderingContext2D | null | undefined) => {
            return new Promise<boolean>(resolve => {
                if (canvasLayer.current && ctx) {
                    const layerData = canvasLayer.current.toDataURL('image/png');

                    if (layerData) {
                        var layer = new Image();
                        layer.src = layerData;
                        layer.onload = () => {
                            ctx.drawImage(layer, 0, 0);
                            resolve(true);
                        };
                    }
                }
            });
        };

        exportCtx?.clearRect(0, 0, 549, 800);
        if (canvasRef && exportCtx) {
            canvasRef.style.display = 'none';
            await Promise.all(Object.values(drawingStatus));
            await generateLayer(frameCanvasRef, exportCtx);
            const previewCtx = previewCanvasRef.current;
            if (previewCtx && exportCtx) {
                if (isPendulum) {
                    exportCtx.drawImage(previewCtx, 38, 144, 474, 470);
                } else {
                    exportCtx.drawImage(previewCtx, 67, 147, 416, 416);
                }
            }
            const layerList = [
                specialFrameCanvasRef,
                nameCanvasRef,
                attributeCanvasRef,
                subFamilyCanvasRef,
                pendulumScaleCanvasRef,
                pendulumEffectCanvasRef,
                effectCanvasRef,
                ADCanvasRef,
            ];
            await Promise.all([
                layerList.map(currentlayer => generateLayer(currentlayer, exportCtx)),
                new Promise(function(resolve) { 
                    setTimeout(() => resolve(true), 100);
                }), // Avoid stutter
            ]);
            canvasRef.style.display = 'block';
        }
    }, 100)).current;

    return (
        <div className={'app-container'}>
            <div className="card-filter-panel">
            </div>
            <CardInputPanel
                receivingCanvasRef={previewCanvasRef.current}
                currentCard={currentCard}
                currentPage={selectedPage}
                onCardChange={setCardPage}
                onCardPageChange={setPage}
                onImageChange={() => {
                    setImageChangeCount(cnt => cnt + 1);
                }}
            />
            <div className="card-preview-panel">
                <button className="export-button" onClick={async () => {
                    await onExport({
                        isPendulum
                    });
                    notification.success({
                        message: 'Your card is ready to save',
                        description: 'Right click the card and choose "Save image as..."',
                        duration: 3,
                    });
                }}>Generate</button>
                <div className="card-canvas-group">
                    <canvas className="export-canvas" ref={drawCanvasRef} width={549} height={800} />
                    <canvas ref={frameCanvasRef} width={549} height={800} />
                    <canvas ref={artCanvasRef} width={549} height={650} />
                    <canvas ref={specialFrameCanvasRef} width={549} height={800} />
                    <canvas ref={nameCanvasRef} width={549} height={100} />
                    <canvas ref={attributeCanvasRef} width={549} height={100} />
                    <canvas ref={subFamilyCanvasRef} width={549} height={150} />
                    <canvas ref={pendulumScaleCanvasRef} width={549} height={600} />
                    <canvas ref={pendulumEffectCanvasRef} width={549} height={600} />
                    <canvas ref={effectCanvasRef} width={549} height={750} />
                    <canvas ref={ADCanvasRef} width={549} height={800} />
                    <canvas className="crop-canvas" ref={previewCanvasRef} />
                </div>
            </div>
        </div>
    );
}

export default App;
