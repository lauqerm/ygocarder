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
    const {
        effectLine,
        pendulumEffectLine,
    } = cardRef.current;
    const effectSize = isMonster
        ? effectLine > 6 ? 'small' : 'normal'
        : effectLine > 8 ? 'small' : 'normal';
    const pendulumSize = pendulumEffectLine === 0
        ? 'small'
        : 'medium';

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
            let fontSize = pendulumSize === 'small' ? 41 : 43;
            let top = (pendulumSize === 'small' ? 547 : 532) + fontSize;

            ctx.font = `${fontSize}px MatrixBoldSmallCaps`;
            ctx.textAlign = 'center';
            ctx.fillText(pendulum_scale, 57.06, top);
            ctx.fillText(pendulum_scale, 492.61, top);
        }
    }, [isPendulum, pendulumSize, pendulum_scale]);

    const drawTypeAbility  = useCallback(async (ctx: CanvasRenderingContext2D | null | undefined) => {
        if (ctx && isMonster) {
            const defaultTop = 620.80;
            const drawBracketTemplate = (content: string, top: number = defaultTop) => {
                return (left: number) => {
                    ctx.font = 'bold 19.69px stone-serif-bold';
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
                    ctx.font = 'bold 21px stone-serif-bold';
                    ctx.fillText(firstLetter, totalOffset, top);
                    totalOffset += ctx.measureText(firstLetter).width;

                    const restLetter = upperCaseContent.slice(1, upperCaseContent.length);
                    ctx.font = 'bold 19px stone-serif-bold';
                    ctx.scale(0.95, 1);
                    ctx.fillText(restLetter, totalOffset / 0.95, top);
                    totalOffset += ctx.measureText(restLetter).width * 0.95;
                    ctx.scale(1 / 0.95, 1);

                    if (!isLast) {
                        ctx.font = 'bold 5px stone-serif-bold';
                        ctx.fillText(' ', totalOffset, top);
                        totalOffset += ctx.measureText(' ').width;

                        ctx.font = 'oblique bold 23px stone-serif-bold';
                        ctx.scale(0.65, 1);
                        ctx.fillText('/', totalOffset / 0.65, top);
                        totalOffset += ctx.measureText('/').width * 0.65;
                        ctx.scale(1 / 0.65, 1);

                        ctx.font = 'bold 15px stone-serif-bold';
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

    const drawRefrenceImage  = useCallback(async (ctx: CanvasRenderingContext2D | null | undefined) => {
        // let leftOffset = -100;
        // let topOffset = 5;
        let leftOffset = -4;
        let topOffset = 220;
        await drawFromSourceWithSize(ctx, '/asset/image/WBbt0jk.png', -leftOffset, -topOffset, 541, 800 / (541 / 549));
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
        await drawTypeAbility(ctx);
        await drawRefrenceImage(ctx);
    }, [drawAttribute, drawCardContentFrame, drawCardFrame, drawCardImage, drawLinkMarker, drawPendulumScale, drawRefrenceImage, drawStar, drawTypeAbility]);

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
                            sizeList={defaultMonsterSizeList} />
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
