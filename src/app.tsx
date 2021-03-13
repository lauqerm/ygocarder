
import React, { useCallback, useEffect, useRef, useState } from 'react';
import './app.scss';
import 'antd/dist/antd.css';
import { Button, Slider } from 'antd';
import {
    Card,
    CardFamily,
    defaultMonster,
    defaultSpell,
    defaultTrap,
    ScaleValue,
} from './model';
import { debounce } from 'lodash';
import {
    AttributeIcon,
    CardFrame,
    defaultMonsterFontList,
    defaultSTFontList,
    LinkMarker,
    Star,
    STSubFamily,
    TextBox,
    TextBoxTitle,
} from './component';
import { checkLink, checkMonster, checkNormal, checkPendulum, checkXyz, scaleCalc } from './util';
import html2canvas from 'html2canvas';
import { defaultMonsterSizeList, defaultPendulumFontList, defaultPendulumSizeList, defaultSTSizeList } from './component/textbox';
import { getCardFrame } from './component/image';
import { CardInputPanel } from './page';
import './asset/font.css';
import { monsterFontList, monsterSizeList, pendulumFontList, pendulumSizeList } from './const';

const createCondenser = (minThreshold = 0, maxThreshold = 1000) => {
    let min = minThreshold;
    let max = maxThreshold;
    let median = max;
    let lastEffective = median;
    let iterateCount = 30;
    let magnitude = 100;

    const reverseSearch = () => {
        if (magnitude === 1) finish();
        else {
            median += magnitude;
            magnitude /= 10;
            median -= magnitude;
        }

        return Math.min(median, max);
    };

    const searchDown = () => {
        median -= magnitude;
        iterateCount -= 1;

        return median;
    };

    const reset = (minThreshold = min, maxThreshold = max) => {
        min = minThreshold;
        max = maxThreshold;
        median = maxThreshold;
        iterateCount = 30;
        magnitude = 100;
        lastEffective = maxThreshold;
    };

    const getMedian = () => median;
    const setMedian = (newMedian: number) => median = newMedian;
	
    const setLastEffective = (forceMedian = median) => lastEffective = forceMedian;
    const getLastEffective = () => lastEffective;
    const applyLastEffective = () => {
        median = lastEffective;
        iterateCount = -1;
        return median;
    };
	
    const getIterateCount = () => iterateCount;
    const finish = () => iterateCount = -1;

    return {
        reset,
        searchDown,
        reverseSearch,
        finish,
        getMedian,
        setMedian,
        setLastEffective,
        getLastEffective,
        applyLastEffective,
        getIterateCount,
    };
};

const defaultZoomScaleRatio = 100;
const defaultScale: Record<string, ScaleValue> = {
    zoom: {
        scaleRatio: 1,
        translatePercent: '0%',
    },
    effect: {
        scaleRatio: 1,
        translatePercent: '0%',
    },
};

const prepareCanvas = async () => {
    const findEl = document.getElementById('card-capture-container');
    if (findEl !== null) return html2canvas(findEl, {
        scrollX: 0,
        scrollY: -window.scrollY,
        imageTimeout: 20000,
        removeContainer: false,
        allowTaint: true,
    });
    else return null;
};

const drawFromSource = async (
    ctx: CanvasRenderingContext2D | null | undefined,
    source: string,
    sx: number | ((image: HTMLImageElement) => number),
    sy: number | ((image: HTMLImageElement) => number),
) => {
    if (!ctx) return new Promise<boolean>(resolve => resolve(false));
    return new Promise<boolean>(resolve => {
        const cardBorder = new Image();
        cardBorder.onload = () => {
            let normalizedX = typeof sx === 'number' ? sx : sx(cardBorder);
            let normalizedY = typeof sy === 'number' ? sy : sy(cardBorder);
            ctx.drawImage(cardBorder, normalizedX, normalizedY);
            resolve(true);
        };
        cardBorder.onerror = () => {
            resolve(false);
        };
        cardBorder.src = source;
    });
};
const drawFromSourceWithSize = async (ctx: CanvasRenderingContext2D | null | undefined, source: string, sx: number, sy: number, dw: number, dh: number) => {
    if (!ctx) return new Promise<boolean>(resolve => resolve(false));
    return new Promise<boolean>(resolve => {
        const cardBorder = new Image();
        cardBorder.onload = () => {
            ctx.drawImage(cardBorder, sx, sy, dw, dh);
            resolve(true);
        };
        cardBorder.onerror = () => {
            resolve(false);
        };
        cardBorder.src = source;
    });
};

function App() {
    const [, setRefresh] = useState(0);
    const refresh = (message?: string | number) => {
        if (message !== undefined) console.log(message);
        setRefresh(cur => cur + 1);
    };

    const [isPreparing, setPreparing] = useState(false);
    const prepareForExport = () => {
        $onZoomChange(100);
        setPreparing(true);
    };
    useEffect(() => {
        (async () => {
            if (isPreparing) {
                const canvas = await prepareCanvas();
                
                if (canvas) {
                    const link = document.createElement('a');
                    document.body.appendChild(link);
                    link.download = 'cmp-image.png';
                    link.href = canvas.toDataURL();
                    link.click();
                    link.remove();
                } else alert('Could not export');
                $onZoomChange(100);
                setPreparing(false);
            }
        })();
    }, [isPreparing]);

    const [selectedPage, setPage] = useState<CardFamily>('Monster');
    const [currentCardPage, setCardPage] = useState<Record<string, Card>>({
        Monster: defaultMonster,
        Spell: defaultSpell,
        Trap: defaultTrap,
    });
    const [zoomValue, setZoom] = useState({
        scaleRatio: 1,
        translatePercent: '0%',
    });
    const [scaleValue, setScaleValue] = useState({
        effect: defaultScale,
    });
    const cardRef = useRef({
        effectIndexSize: 0,
        effectRatio: 0,
        effectLine: 0,
        pendulumEffectLine: 0,
    });
    const previewCanvasRef = useRef<HTMLCanvasElement>(null);
    const drawCanvasRef = useRef<HTMLCanvasElement>(null);

    const $onZoomChange = (value: number) => setZoom(scaleCalc(value, 100));
    const onZoomChange = debounce($onZoomChange, 100);

    useEffect(() => {
        $onZoomChange(defaultZoomScaleRatio);
    }, []);

    const {
        scaleRatio
    } = zoomValue;
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
    const [effectRatio, setEffectRatio] = useState(1);
    const {
        effectIndexSize,
        effectLine,
        pendulumEffectLine,
    } = cardRef.current;
    const effectSize = isMonster
        ? effectLine > 6 ? 'small' : 'normal'
        : effectLine > 8 ? 'small' : 'normal';
    // const pendulumSize = pendulumEffectLine === 0
    //     ? 'small'
    //     : 'medium';
    const pendulumSize = 'medium';

    useEffect(() => {

    }, [currentCard.attribute]);

    const drawCardFrame = useCallback(async (ctx: CanvasRenderingContext2D | null | undefined) => {
        const cardType = getCardFrame(family, subFamily, type_ability);

        await drawFromSource(ctx, `/asset/image/frame/frame-${cardType}.png`, 0, 0);
    }, [family, subFamily, type_ability]);

    const drawCardImage  = useCallback(async (ctx: CanvasRenderingContext2D | null | undefined) => {
        const previewCtx = previewCanvasRef.current;
        if (previewCtx && ctx) {
            if (isPendulum) {
                ctx.drawImage(previewCtx, 38, 144, 474, 470);
            } else {
                ctx.drawImage(previewCtx, 67, 147, 416, 416);
            }
        }
    }, [isPendulum]);

    const drawCardContentFrame  = useCallback(async (ctx: CanvasRenderingContext2D | null | undefined) => {
        const cardType = getCardFrame(family, subFamily, type_ability);
        if (isPendulum) {
            await drawFromSource(ctx, `/asset/image/pendulum/overlay-pendulum-${cardType}.png`, 0, 0);
            await drawFromSource(ctx, `/asset/image/frame/frame-pendulum-${pendulumSize}.png`, 0, 0);
        }
        await drawFromSource(ctx, '/asset/image/frame/frame-border.png', 0, 0);
    }, [family, subFamily, type_ability, isPendulum, pendulumSize]);

    const drawLinkMarker = useCallback(async (ctx: CanvasRenderingContext2D | null | undefined) => {
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
    }, [isPendulum, isLink, link_map]);

    const drawAttribute  = useCallback(async (ctx: CanvasRenderingContext2D | null | undefined) => {
        await drawFromSource(ctx, `/asset/image/attribute/attr-${attribute.toLowerCase()}.png`, 458, 37);
    }, [attribute]);

    const drawStar  = useCallback(async (ctx: CanvasRenderingContext2D | null | undefined) => {
        if (isMonster && !isLink) {
            let counter = Math.min(13, star ?? 0);
            let type = isXyz ? 'rank' : 'level';
            let offset = 0 - (34 + 2.3636);
            let totalWidth = 34 * counter + 2.3636 * (counter - 1);
            let startPoint = counter <= 12
                ? 492
                : (549 - totalWidth) / 2 + totalWidth;
            await Promise.all([...Array(counter)]
                .map(() => {
                    offset += (34 + 2.3636);
                    return drawFromSource(ctx, `/asset/image/sub-family/subfamily-${type}.png`, startPoint - 34 - offset, 99);
                })
            );
        } else if (!isMonster) {
            const normalizedFamily = family.toLowerCase();
            const normalizedSubFamily = subFamily.toLowerCase();
            const hasIcon = normalizedSubFamily !== 'normal';

            await drawFromSource(ctx, `/asset/image/sub-family/subfamily-container-${normalizedFamily}${hasIcon ? '-icon' : ''}.png`,
                (image) => 491 - image.naturalWidth,
                103);
            if (hasIcon) await drawFromSource(ctx, `/asset/image/sub-family/subfamily-${normalizedSubFamily}.png`,
                (image) => 491 - image.naturalWidth - 10,
                103 - 2);
        }
    }, [family, isLink, isMonster, isXyz, star, subFamily]);

    const drawPendulumScale  = useCallback(async (ctx: CanvasRenderingContext2D | null | undefined) => {
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

    const drawName  = useCallback(async (ctx: CanvasRenderingContext2D | null | undefined) => {
        if (ctx) {
            ctx.font = '64.59px MatrixRegularSmallCaps';
            ctx.textAlign = 'left';
            const nameWidth = ctx.measureText(name).width;

            if (nameWidth > 0) {
                const condenseRatio = Math.min(409 / nameWidth, 1);
                ctx.scale(condenseRatio, 1);
                ctx.fillText(name, 40.52 / condenseRatio, 81);
                ctx.scale(1 / condenseRatio, 1);
            }
        }
    }, [name]);

    const drawAD  = useCallback(async (ctx: CanvasRenderingContext2D | null | undefined) => {
        if (ctx) {
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
    }, [atk, def, isLink]);

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
        fontList = monsterFontList,
        sizeList = monsterSizeList,
    ) => {
        if (ctx) {
            const tolerantPerSentence: Record<string, number> = {
                '1': 645,
                '2': 660,
                '3': 675,
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
            const defaultLineCount = Math.max(sentencizeText.length, isPendulum ? 5 : 6);

            let effectIndexSize = 0;
            while(effectIndexSize < fontList.length) {
                const condenser = createCondenser();
                let effectiveRatio = 1000;
                const maxLine = defaultLineCount + effectIndexSize;
                const { fontSize, lineHeight } = fontList[effectIndexSize];
                const { height, left, width, top } = sizeList[effectIndexSize];
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
    const drawCardEffect = useCallback(async (ctx: CanvasRenderingContext2D | null | undefined) => {
        await drawCondenseText(ctx, effect, false);
    }, [drawCondenseText, effect]);
    const drawPendulumEffect = useCallback(async (ctx: CanvasRenderingContext2D | null | undefined) => {
        if (isPendulum) await drawCondenseText(
            ctx,
            pendulum_effect,
            true,
            pendulumFontList,
            pendulumSizeList,
        );
    }, [drawCondenseText, isPendulum, pendulum_effect]);

    const drawRefrenceImage  = useCallback(async (ctx: CanvasRenderingContext2D | null | undefined) => {
        // let leftOffset = -100;
        // let topOffset = 5;
        let leftOffset = -4;
        let topOffset = 220;
        // let leftOffset = -300;
        // let topOffset = -4;
        await drawFromSourceWithSize(ctx, '/asset/image/LDS2-EN-C-1E.png', -leftOffset, -topOffset, 541, 800 * (541 / 549));
    }, []);

    const startDraw = useCallback(async () => {
        const ctx = drawCanvasRef.current?.getContext('2d');
        await drawCardFrame(ctx);
        await drawCardImage(ctx);
        await drawCardContentFrame(ctx);
        await drawLinkMarker(ctx);
        await drawAttribute(ctx);
        await drawStar(ctx);
        await drawPendulumScale(ctx);
        await drawName(ctx);
        await drawAD(ctx);
        await drawCardEffect(ctx);
        await drawPendulumEffect(ctx);
        // await drawRefrenceImage(ctx);
    }, [drawAD, drawAttribute, drawCardContentFrame, drawCardEffect, drawCardFrame, drawCardImage, drawLinkMarker, drawName, drawPendulumEffect, drawPendulumScale, drawStar]);

    useEffect(() => {
        const ctx = drawCanvasRef.current?.getContext('2d');
        if (ctx) {
            const pixelRatio = window.devicePixelRatio;
            ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            ctx.imageSmoothingQuality = 'high';
            ctx.clearRect(0, 0, 549, 800);
            startDraw();
        }
    }, []);

    return (
        <div className={`app-container ${isPreparing ? 'app-container-export' : ''}`} style={{
            '--zoom-ratio': zoomValue.scaleRatio,
            '--translate-percent': zoomValue.translatePercent,
        } as any}>
            <div className="card-filter-panel">
                <canvas ref={drawCanvasRef} width={549} height={800} />
            </div>
            <CardInputPanel
                receivingCanvasRef={previewCanvasRef.current}
                currentCard={currentCard}
                currentPage={selectedPage}
                onCardChange={setCardPage}
                onCardPageChange={setPage}
                zoomValue={zoomValue}
            />
            <div className="card-preview-panel">
                <div className="control-board">
                    <div className="control-zoom">
                        <Slider
                            min={1}
                            max={100}
                            defaultValue={defaultZoomScaleRatio}
                            onChange={onZoomChange}
                        />
                        <span>{Math.round(zoomValue.scaleRatio * 100)}%</span>
                        <Button type="primary" onClick={() => prepareForExport()}>Save As Image</Button>
                        <Button type="primary" onClick={async () => {
                            await startDraw();
                            // await drawCardImage(drawCanvasRef.current?.getContext('2d'));
                        }}>Draw</Button>
                    </div>
                </div>
                <div id="card-capture-container" className="card-preview">
                    <div className="preview preview-name">
                        <TextBoxTitle name="name" zoom={scaleRatio} value={name} font={{
                            fontSize: 64.59,
                            lineHeight: 46.45,
                        }} />
                    </div>
                    <div className="preview preview-attribute">
                        <AttributeIcon type={attribute} />
                    </div>
                    {isPendulum && <>
                        <div key="left" className={`preview-scale-number left-scale size-${pendulumSize}`}>{pendulum_scale}</div>
                        <TextBox className={`preview-pendulum-effect preview-pendulum-effect-${pendulumSize}`} zoom={scaleRatio}
                            value={pendulum_effect}
                            sizeChangeThreshold={900}
                            name={'pendulum-effect'}
                            type={'monster'}
                            onSizeChange={value => {
                                cardRef.current.pendulumEffectLine = value;
                                refresh();
                            }}
                            fontList={defaultPendulumFontList}
                            sizeList={defaultPendulumSizeList}
                        />
                        <div key="right" className={`preview-scale-number right-scale size-${pendulumSize}`}>{pendulum_scale}</div>
                    </>}
                    {family === 'Monster'
                        ? <div className={`preview preview-star ${star > 12 ? 'preview-star-oversize' : ''}`}>
                            {!isLink && <Star count={star} type={isXyz ? 'rank' : 'level'} />}
                        </div>
                        : <div className="preview preview-st-sub-family">
                            <STSubFamily family={family} subFamily={subFamily} />
                        </div>}
                    {isLink && <div className="preview preview-link-marker">
                        <LinkMarker arrow={link_map} />
                    </div>}
                    {isMonster
                        ? <TextBox key="monster" className={`preview-effect preview-effect-${effectSize}`} zoom={scaleRatio}
                            isFlavorText={isNormal}
                            value={effect}
                            typeAbilityValue={type_ability}
                            name={'monster-effect'}
                            type={'monster'}
                            fontList={defaultMonsterFontList}
                            sizeList={defaultMonsterSizeList}
                            onSizeChange={value => cardRef.current.effectIndexSize = value}
                            onRatioChange={value => {
                                console.log(value);
                                setEffectRatio(value / 1000);
                            }} />
                        : <TextBox key="s/t" className={`preview-effect preview-effect-${effectSize}`} zoom={scaleRatio}
                            value={effect}
                            typeAbilityValue={type_ability}
                            name={'st-effect'}
                            type={'st'}
                            fontList={defaultSTFontList}
                            sizeList={defaultSTSizeList} />}
                    {isMonster && <div className="preview preview-atk">
                        <TextBoxTitle name="atk" zoom={scaleRatio} value={atk} alignment="right" font={{
                            fontSize: 24.61,
                            lineHeight: 29.532,
                        }} />
                    </div>}
                    {isMonster && (
                        !isLink
                            ? <div className="preview preview-def">
                                <TextBoxTitle name="def" zoom={scaleRatio} value={def} alignment="right" font={{
                                    fontSize: 24.61,
                                    lineHeight: 29.532,
                                }} />
                            </div>
                            : <div className="preview preview-link">
                                {link_map.length > 0 && <img src={`./asset/image/link-number/link-corner-${link_map.length}.png`} alt="link number" />}
                            </div>
                    )}
                    <div className="preview preview-frame">
                        <CardFrame family={family} subFamily={subFamily} typeAbility={type_ability} size={pendulumSize}>
                            <div className={`preview preview-picture ${isPendulum ? 'picture-pendulum' : ''}`}>
                                <div className="canvas-container">
                                    <canvas className="crop-canvas" ref={previewCanvasRef} />
                                </div>
                            </div>
                        </CardFrame>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
