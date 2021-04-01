
import React, { useCallback, useEffect, useRef, useState } from 'react';
import './app.scss';
import 'antd/dist/antd.css';
import {
    Card,
    defaultMonster,
    defaultTextStyle,
    iconList,
} from './model';
import {
    checkLink,
    checkMonster,
    checkNormal,
    checkXyz,
    getCardFrame,
} from './util';
import { CardInputPanel } from './page';
import {
    arrowPositionList,
    foilPosition,
    pendulumFontList,
    pendulumSizeList,
    stFontList,
    stSizeList,
    TypeSize,
    typeSizeMap,
} from './const';
import {
    draw1stEdition,
    drawAD,
    drawBracketSpaceTemplate,
    drawBracketTemplate,
    drawCreatorText,
    drawEffect,
    drawIconSpaceTemplate,
    drawName,
    drawScale,
    drawTextTemplate,
    fillTextLeftWithSpacing,
    fillTextRightWithSpacing,
    drawFromSource,
    drawFromSourceWithSize,
} from './draw';
import WebFont from 'webfontloader';
import { ExclamationCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import { Popover } from 'antd';

function App() {
    const [isInitializing, setInitializing] = useState(true);
    const [error, setError] = useState('');
    const [currentCard, setCard] = useState<Card>(defaultMonster);
    const previewCanvasRef = useRef<HTMLCanvasElement>(null);
    const drawCanvasRef = useRef<HTMLCanvasElement>(null);
    const frameCanvasRef = useRef<HTMLCanvasElement>(null);
    const artCanvasRef = useRef<HTMLCanvasElement>(null);
    const specialFrameCanvasRef = useRef<HTMLCanvasElement>(null);
    const subFamilyCanvasRef = useRef<HTMLCanvasElement>(null);
    const pendulumScaleCanvasRef = useRef<HTMLCanvasElement>(null);
    const pendulumEffectCanvasRef = useRef<HTMLCanvasElement>(null);
    const typeCanvasRef = useRef<HTMLCanvasElement>(null);
    const effectCanvasRef = useRef<HTMLCanvasElement>(null);
    const nameCanvasRef = useRef<HTMLCanvasElement>(null);
    const attributeCanvasRef = useRef<HTMLCanvasElement>(null);
    const ADCanvasRef = useRef<HTMLCanvasElement>(null);
    const setIdRef = useRef<HTMLCanvasElement>(null);
    const passcodeRef = useRef<HTMLCanvasElement>(null);
    const firstEditionRef = useRef<HTMLCanvasElement>(null);
    const creatorRef = useRef<HTMLCanvasElement>(null);
    const stickerRef = useRef<HTMLCanvasElement>(null);

    const {
        frame, foil,
        name, nameStyleType, nameStyle,
        pictureCrop,
        effect,
        type_ability,
        isPendulum, pendulum_effect, blue_scale, red_scale,
        atk, def, link_map,
        attribute,
        subFamily,
        star,
        set_id,
        passcode, isFirstEdition, creator, sticker,
    } = currentCard;
    const isNormal = checkNormal(currentCard);
    const isXyz = checkXyz(currentCard);
    const isLink = checkLink(currentCard);
    const isMonster = checkMonster(currentCard);
    const pendulumSize = 'medium';

    const drawingPipeline = useRef<Record<string, () => Promise<any>>>({
        frame: () => Promise.resolve(),
        star: () => Promise.resolve(),
        attribute: () => Promise.resolve(),
        specialFrame: () => Promise.resolve(),
        sticker: () => Promise.resolve(),
    });
    const [imageChangeCount, setImageChangeCount] = useState(0);

    useEffect(() => {
        const ctx = frameCanvasRef.current?.getContext('2d');

        drawingPipeline.current.frame = async () => {
            ctx?.clearRect(0, 0, 549, 800);
            const cardType = getCardFrame(frame);
            const hasFoil = foil !== 'normal';

            await drawFromSource(ctx, `/asset/image/frame/frame-${cardType}.png`, 0, 0);
            if (hasFoil) {
                const { art } = foilPosition[foil];

                await drawFromSource(ctx, `/asset/image/frame/frame-art-${foil}.png`, art.left, 120);
                await drawFromSource(ctx, `/asset/image/frame/frame-effect-${foil}.png`, 0, 580);
            }
        };
    }, [foil, frame]);

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
        const ctx = specialFrameCanvasRef.current?.getContext('2d');
        
        drawingPipeline.current.specialFrame = async () => {
            ctx?.clearRect(0, 0, 549, 800);
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

                await Promise.all(link_map
                    .map(entry => {
                        const { left, top, height, width } = arrowPositionList[parseInt(entry) - 1];
                        if (hasFoil) return drawFromSourceWithSize(ctx, `/asset/image/link/link-arrow-${entry}-${foil}.png`, left, top, width, height);
                        else return drawFromSourceWithSize(ctx, `/asset/image/link/link-arrow-${entry}.png`, left, top, width, height);
                    })
                );
                if (ctx) {
                    ctx.textAlign = 'right';
                    ctx.scale(1.2, 1);
                    ctx.font = 'bold 24px Yugioh Rush Duel Numbers V4';
                    ctx.fillText(`${link_map.length}`, 505 / 1.2, 746);
                    ctx.scale(1 / 1.2, 1);
                    ctx.textAlign = 'left';
                }
            }
        };
    }, [foil, frame, isLink, isPendulum, isXyz, link_map]);

    useEffect(() => {
        const ctx = attributeCanvasRef.current?.getContext('2d');
        drawingPipeline.current.attribute = () => {
            ctx?.clearRect(0, 0, 549, 100);

            return drawFromSource(ctx, `/asset/image/attribute/attr-${attribute.toLowerCase()}.png`, 458, 37);
        };
    }, [attribute]);

    useEffect(() => {
        const ctx = subFamilyCanvasRef.current?.getContext('2d');
        drawingPipeline.current.star = () => {
            ctx?.clearRect(0, 0, 549, 150);
            if (isMonster && !isLink) {
                let counter = Math.min(13, star ?? 0);
                let type = isXyz ? 'rank' : 'level';
                let offset = 0 - (34 + 2.3636);
                let totalWidth = 34 * counter + 2.3636 * (counter - 1);
                let edge = counter <= 12
                    ? isXyz
                        ? 57 - 34
                        : 492
                    : isXyz
                        ? (549 - totalWidth) / 2 - 34
                        : (549 - totalWidth) / 2 + totalWidth;
    
                return Promise.all([...Array(counter)]
                    .map(() => {
                        offset += (34 + 2.3636);
                        return drawFromSource(
                            ctx,
                            `/asset/image/sub-family/subfamily-${type}.png`,
                            edge + (34 + offset) * (isXyz ? 1 : -1),
                            99,
                        );
                    })
                );
            } else if (!isMonster) {
                const normalizedSubFamily = subFamily.toUpperCase();
                const hasSTIcon = normalizedSubFamily !== 'no icon'
                        && iconList.includes(normalizedSubFamily);
    
                return hasSTIcon
                    ? drawFromSourceWithSize(ctx, `/asset/image/sub-family/subfamily-${normalizedSubFamily}.png`,
                        (image) => 491 - image.naturalWidth - 7,
                        103,
                        29, 29)
                    : new Promise(resolve => resolve(true));
            };
            return new Promise(resolve => resolve(true));
        };
    }, [isLink, isMonster, isXyz, star, subFamily]);

    useEffect(() => {
        const ctx = pendulumScaleCanvasRef.current?.getContext('2d');
        ctx?.clearRect(0, 0, 549, 600);
        if (ctx && isPendulum) {
            let fontSize = 43;
            let top = 532 + fontSize;

            ctx.font = `${fontSize}px MatrixBoldSmallCaps`;
            ctx.textAlign = 'left';

            drawScale(ctx, blue_scale ?? 0, 57, top);
            drawScale(ctx, red_scale ?? 0, 493, top);
        }
    }, [isInitializing, blue_scale, isPendulum, red_scale]);

    useEffect(() => {
        const ctx = nameCanvasRef.current?.getContext('2d');
        if (ctx) {
            ctx.clearRect(0, 0, 549, 100);
            ctx.textAlign = 'left';
            const style = nameStyleType === 'auto'
                ? { ...defaultTextStyle, fillStyle: isXyz ? '#ffffff' : '#000000' }
                : nameStyle;

            drawName(ctx, name, 40.52, 78, 409, style);
        }
    }, [isInitializing, isXyz, name, nameStyle, nameStyleType]);

    useEffect(() => {
        const ctx = ADCanvasRef.current?.getContext('2d');
        ctx?.clearRect(0, 0, 549, 800);
        if (isMonster) {
            drawAD(ctx, atk, 343.51, 747);
            if (!isLink) {
                drawAD(ctx, def, 454.93, 747);
            }
        }
    }, [isInitializing, atk, def, isLink, isMonster]);

    useEffect(() => {
        const ctx = setIdRef.current?.getContext('2d');
        ctx?.clearRect(0, 0, 549, 800);
        if (ctx) {
            if (isXyz && !isPendulum) ctx.fillStyle = '#fff';
            else ctx.fillStyle = '#000';
            ctx.font = '15px stone-serif-regular';

            if (isPendulum) {
                fillTextLeftWithSpacing(ctx, set_id, -0.1, 44, 746);
            } else if (isLink) {
                fillTextLeftWithSpacing(ctx, set_id, -0.1, 367, 590);
            } else fillTextRightWithSpacing(ctx, set_id, -0.1, 492, 589);
        }
    }, [isInitializing, isLink, isPendulum, isXyz, set_id]);

    useEffect(() => {
        const ctx = passcodeRef.current?.getContext('2d');
        ctx?.clearRect(0, 0, 549, 800);
        if (ctx) {
            if (isXyz && !isPendulum) ctx.fillStyle = '#fff';
            else ctx.fillStyle = '#000';
            ctx.font = '15px stone-serif-regular';

            fillTextLeftWithSpacing(ctx, passcode, -0.1, 25, 777);
        }
    }, [isInitializing, isLink, isPendulum, isXyz, passcode]);

    useEffect(() => {
        const ctx = firstEditionRef.current?.getContext('2d');
        ctx?.clearRect(0, 0, 549, 800);
        if (ctx && isFirstEdition === true) {
            if (isXyz && !isPendulum) ctx.fillStyle = '#fff';
            else ctx.fillStyle = '#000';

            draw1stEdition(ctx);
        }
    }, [isInitializing, isLink, isPendulum, isXyz, isFirstEdition]);

    useEffect(() => {
        const ctx = creatorRef.current?.getContext('2d');
        ctx?.clearRect(0, 0, 549, 800);
        if (ctx) {
            if (isXyz && !isPendulum) ctx.fillStyle = '#fff';
            else ctx.fillStyle = '#000';
            
            drawCreatorText(ctx, creator);
        }
    }, [isInitializing, isLink, isPendulum, isXyz, creator]);

    useEffect(() => {
        const ctx = stickerRef.current?.getContext('2d');
        drawingPipeline.current.sticker = () => {
            ctx?.clearRect(0, 0, 549, 800);

            return drawFromSource(ctx, `/asset/image/sticker/sticker-${sticker.toLowerCase()}.png`, 499, 750);
        };
    }, [sticker]);

    const drawTypeAbility  = useCallback((
        ctx: CanvasRenderingContext2D | null | undefined,
        size: TypeSize = typeSizeMap['medium'],
        alignment: 'left' | 'right' = 'left',
    ) => {
        if (ctx) {
            ctx?.clearRect(0, 0, 549, 700);
            const { left } = size;
            const normalizedSubFamily = subFamily.toUpperCase();
            const instructionList = [
                drawBracketTemplate(ctx, '[', size, alignment),
                drawBracketSpaceTemplate(ctx, ' ', size, alignment),
                ...type_ability.map((entry, index) => drawTextTemplate(
                    ctx,
                    entry,
                    index === type_ability.length - 1,
                    size, alignment)),
                normalizedSubFamily === 'NO ICON'
                    ? (edge: number) => edge + 4 * (alignment === 'left' ? 1 : -1)
                    : drawIconSpaceTemplate(ctx, size, alignment),
                drawBracketTemplate(ctx, ']', size, alignment),
            ];
            (alignment === 'left'
                ? instructionList
                : instructionList.reverse()).reduce((prev, curr) => {
                return curr(prev);
            }, left);
            ctx.textAlign = 'left';
        }
    }, [subFamily, type_ability]);
    useEffect(() => {
        const ctx = effectCanvasRef.current?.getContext('2d');
        const typeCtx = typeCanvasRef.current?.getContext('2d');
        ctx?.clearRect(0, 0, 549, 750);
        if (isMonster) {
            const effectIndexSize = drawEffect(ctx, effect, false, isNormal);
            drawTypeAbility(typeCtx, effectIndexSize === 0
                ? typeSizeMap['medium']
                : typeSizeMap['small']);
        } else {
            drawEffect(
                ctx,
                effect,
                false,
                false,
                stFontList,
                stSizeList,
            );
            drawTypeAbility(typeCtx, typeSizeMap['large'], 'right');
        }
    }, [isInitializing, drawTypeAbility, effect, isMonster, isNormal]);
    useEffect(() => {
        const ctx = pendulumEffectCanvasRef.current?.getContext('2d');
        ctx?.clearRect(0, 0, 549, 600);
        if (isMonster && isPendulum) {
            drawEffect(
                ctx,
                pendulum_effect,
                true,
                false,
                pendulumFontList,
                pendulumSizeList,
            );
        }
    }, [isInitializing, isMonster, isPendulum, pendulum_effect]);

    // const drawRefrenceImage = useCallback(async (ctx: CanvasRenderingContext2D | null | undefined) => {
    //     let leftOffset = -5;
    //     let topOffset = 150;
    // let leftOffset = -4;
    // let topOffset = 300;
    // let leftOffset = -300;
    // let topOffset = -7;
    // let leftOffset = -1;
    // let topOffset = 100;
    // await drawFromSourceWithSize(ctx, '/asset/image/MP19-EN-C-1E.png', -leftOffset, -topOffset, 541, 800 * (541 / 549));
    // }, []);

    useEffect(() => {
        const ctx = drawCanvasRef.current?.getContext('2d');
        if (ctx) {
            const pixelRatio = window.devicePixelRatio;
            ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            ctx.imageSmoothingQuality = 'high';
            ctx.clearRect(0, 0, 549, 800);
        }
        
        // let fontLoaded = false;
        WebFont.load({
            custom: {
                families: [
                    'stone-serif-bold',
                    'stone-serif-bold',
                    'stone-serif-regular',
                    'matrix',
                    'palatino-linotype-bold',
                    'MatrixBook',
                    'MatrixBoldSmallCaps',
                    'MatrixRegularSmallCaps',
                    'Yugioh Rush Duel Numbers V4',
                ],
                urls: ['asset/font.css']
            },
            active: () => {
                const localCardVersion = window.localStorage.getItem('card-version');
                const localCardData = window.localStorage.getItem('card-data');

                if (localCardData !== null && localCardVersion === process.env.REACT_APP_VERSION) {
                    setCard(JSON.parse(localCardData));
                }
                setInitializing(false);
            },
            inactive: () => {
                setError('Font could not be loaded');
                setInitializing(false);
            },
        });
    }, []);

    const exportRef = useRef({
        currentPipeline: Promise.resolve(),
        queuedPipeline: false,
    });
    useEffect(() => {
        let relevant = true;
        if (isInitializing === false) {
            localStorage.setItem('card-data', JSON.stringify(currentCard));
            localStorage.setItem('card-version', process.env.REACT_APP_VERSION ?? 'unknown');
        }
        // localStorage.setItem('card-created', new Date().toISOString());

        /**
         * Run export pipeline
         * - While it is running, every effect just mark pipeline as queued, then wait the current pipeline
         * - If the pipeline is complete and there is no effect, run another pipeline and remove the queue
         */
        (async () => {
            const canvasRef = drawCanvasRef.current;
            if (canvasRef) {
                document.querySelector('#export-canvas-guard')?.setAttribute('style', '');
                exportRef.current.queuedPipeline = true;
                await exportRef.current.currentPipeline;

                if (relevant) {
                    exportRef.current.currentPipeline = onExport({ isPendulum });
                    exportRef.current.queuedPipeline = false;

                    await exportRef.current.currentPipeline;
                    if (relevant) {
                        document.querySelector('#export-canvas-guard')?.setAttribute('style', 'display: none');
                    }
                }
                // onExport({ isPendulum })
            }
        })();

        return () => {
            relevant = false;
        };
    });

    const onExport = useRef(async (exportProps: {
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
                        layer.onerror = () => resolve(false);
                    } else resolve(false);
                } else resolve(false);
            });
        };

        if (canvasRef && exportCtx) {
            exportCtx.clearRect(0, 0, 549, 800);
            await Promise.all(Object
                .values(drawingPipeline.current)
                .map(callDraw => {
                    return callDraw();
                }));
            await generateLayer(frameCanvasRef, exportCtx);
            const previewCtx = previewCanvasRef.current;
            if (previewCtx && exportCtx) {
                if (isPendulum) {
                    exportCtx.drawImage(previewCtx, 38, 144, 474, 470);
                } else {
                    exportCtx.drawImage(previewCtx, 67, 147, 416, 416);
                }
            }
            await generateLayer(specialFrameCanvasRef, exportCtx);
            const layerList = [
                nameCanvasRef,
                attributeCanvasRef,
                subFamilyCanvasRef,
                pendulumScaleCanvasRef,
                pendulumEffectCanvasRef,
                typeCanvasRef,
                effectCanvasRef,
                ADCanvasRef,
                setIdRef,
                firstEditionRef,
                passcodeRef,
                creatorRef,
                stickerRef,
            ];
            await Promise.all([
                layerList.map(currentlayer => generateLayer(currentlayer, exportCtx)),
            ]);
            // await drawRefrenceImage(exportCtx);
        }
    }).current;

    return (
        <div className={'app-container'} style={{
            backgroundImage: `url("${process.env.PUBLIC_URL}/asset/image/texture/debut-dark.png"), linear-gradient(180deg, #00000022, #00000044)`,
        }}>
            {isInitializing && <div className="full-loading">
                {error.length > 0 ? <span style={{ color: '#e04040' }}>
                    {error}
                </span> : 'Loading fonts and scripts...'}
            </div>}
            <div className="card-filter-panel">
            </div>
            {isInitializing === false && <CardInputPanel
                receivingCanvasRef={previewCanvasRef.current}
                currentCard={currentCard}
                onCardChange={setCard}
                defaultCropInfo={pictureCrop}
                onImageChange={cropInfo => {
                    setImageChangeCount(cnt => cnt + 1);
                    if (cropInfo) setCard(curr => ({
                        ...curr,
                        pictureCrop: cropInfo,
                    }));
                }}
            >
                <div className="app-header">
                    <img alt="app-logo" src={`${process.env.PUBLIC_URL}/logo192.png`} width={48} />
                    <div className="app-description">
                        <h1>Yugioh Carder <small>v{process.env.REACT_APP_VERSION ?? 'unknown'}</small></h1>
                        <div className="app-contribution">
                            <span>GUI: <b>Lauqerm</b></span>
                            <span>Template: <b>Grezar</b> and others (<a
                                href="https://www.deviantart.com/grezar/art/SKILL-UPDATE-Series-10-Card-Proxy-Template-686736691"
                                target="_blank"
                                rel="noreferrer">Deviant Art</a>)</span>
                            <Popover overlayClassName="disclaimer-overlay" content={<div className="disclaimer">
                                <h2>Disclaimer</h2>
                                <ul>
                                    <li>This is a personal project, not an "official" card maker.</li>
                                    <li>I holds no liability for cards created by this app, including picture, card text and any product that related to it.</li>
                                    <li>I do not own any of Yu-Gi-Oh card layers and fonts use in this project.</li>
                                </ul>
                            </div>}>
                                <ExclamationCircleOutlined className="disclaimer-icon" />
                            </Popover>
                        </div>
                    </div>
                </div>
                <br />
            </CardInputPanel>}
            <div className="card-preview-panel">
                <button className="export-button">Save Card:<br />Right click the card → "Save image as..." / "Copy Image"</button>
                <div className="card-canvas-group">
                    <canvas id="export-canvas" ref={drawCanvasRef} width={549} height={800} />
                    <div id="export-canvas-guard">
                        <div className="canvas-guard-alert">Generating...</div>
                        <LoadingOutlined />
                    </div>
                    <canvas id="frameCanvas" ref={frameCanvasRef} width={549} height={800} />
                    <canvas id="artCanvas" ref={artCanvasRef} width={549} height={650} />
                    <canvas id="specialFrameCanvas" ref={specialFrameCanvasRef} width={549} height={800} />
                    <canvas id="nameCanvas" ref={nameCanvasRef} width={549} height={100} />
                    <canvas id="attributeCanvas" ref={attributeCanvasRef} width={549} height={100} />
                    <canvas id="subFamilyCanvas" ref={subFamilyCanvasRef} width={549} height={150} />
                    <canvas id="pendulumScaleCanvas" ref={pendulumScaleCanvasRef} width={549} height={600} />
                    <canvas id="pendulumEffectCanvas" ref={pendulumEffectCanvasRef} width={549} height={600} />
                    <canvas id="typeCanvas" ref={typeCanvasRef} width={549} height={700} />
                    <canvas id="effectCanvas" ref={effectCanvasRef} width={549} height={750} />
                    <canvas id="ADCanvas" ref={ADCanvasRef} width={549} height={800} />
                    <canvas id="setId" ref={setIdRef} width={549} height={800} />
                    <canvas id="passcode" ref={passcodeRef} width={549} height={800} />
                    <canvas id="firstEdition" ref={firstEditionRef} width={549} height={800} />
                    <canvas id="creator" ref={creatorRef} width={549} height={800} />
                    <canvas id="sticker" ref={stickerRef} width={549} height={800} />
                    <canvas className="crop-canvas" ref={previewCanvasRef} />
                </div>
            </div>
        </div>
    );
}

export default App;
