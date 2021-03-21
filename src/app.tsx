
import React, { useCallback, useEffect, useRef, useState } from 'react';
import './app.scss';
import 'antd/dist/antd.css';
import {
    Card,
    defaultMonster,
    iconList,
} from './model';
import { debounce } from 'lodash';
import {
    checkLink,
    checkMonster,
    checkNormal,
    checkXyz,
    getCardFrame,
    drawFromSource,
    drawFromSourceWithSize,
} from './util';
import { CardInputPanel } from './page';
import {
    arrowPositionList,
    pendulumFontList,
    pendulumSizeList,
    stFontList,
    stSizeList,
    TypeSize,
    typeSizeMap,
} from './const';
import './asset/font.css';
import {
    draw1stEdition,
    drawAD,
    drawBracketSpaceTemplate,
    drawBracketTemplate,
    drawCreatorText,
    drawEffect,
    drawIconSpaceTemplate,
    drawScale,
    drawTextTemplate,
    fillTextLeftWithLimit,
    fillTextLeftWithSpacing,
} from './draw';
import WebFont from 'webfontloader';

function App() {
    const [isInitializing, setInitializing] = useState(true);
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

    const {
        frame,
        name,
        effect,
        type_ability,
        isPendulum, pendulum_effect, blue_scale, red_scale,
        atk, def, link_map,
        attribute,
        subFamily,
        star,
        set_id,
        passcode, isFirstEdition, creator,
    } = currentCard;
    const isNormal = checkNormal(currentCard);
    const isXyz = checkXyz(currentCard);
    const isLink = checkLink(currentCard);
    const isMonster = checkMonster(currentCard);
    const pendulumSize = 'medium';

    const drawingStatus = useRef<Record<string, Promise<any>>>({
        frame: Promise.resolve(),
        star: Promise.resolve(),
        attribute: Promise.resolve(),
        specialFrame: Promise.resolve(),
    });
    const [imageChangeCount, setImageChangeCount] = useState(0);

    useEffect(() => {
        const ctx = frameCanvasRef.current?.getContext('2d');
        const cardType = getCardFrame(frame);
        
        ctx?.clearRect(0, 0, 549, 800);
        drawingStatus.current.frame = drawFromSource(ctx, `/asset/image/frame/frame-${cardType}.png`, 0, 0);
    }, [frame]);

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
        ctx?.clearRect(0, 0, 549, 800);
        
        const cardType = getCardFrame(frame);
        drawingStatus.current.specialFrame = (async () => {
            if (isPendulum && !isLink) {
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
    }, [frame, isLink, isPendulum, link_map]);

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
                ? isXyz
                    ? 57 - 34
                    : 492
                : isXyz
                    ? (549 - totalWidth) / 2 - 34
                    : (549 - totalWidth) / 2 + totalWidth;
            drawingStatus.current.star = Promise.all([...Array(counter)]
                .map(() => {
                    offset += (34 + 2.3636);
                    return drawFromSource(
                        ctx,
                        `/asset/image/sub-family/subfamily-${type}.png`,
                        startPoint + (34 + offset) * (isXyz ? 1 : -1),
                        99,
                    );
                })
            );
        } else if (!isMonster) {
            const normalizedSubFamily = subFamily.toUpperCase();
            const hasSTIcon = normalizedSubFamily !== 'no icon'
                && iconList.includes(normalizedSubFamily);

            drawingStatus.current.star = hasSTIcon
                ? drawFromSourceWithSize(ctx, `/asset/image/sub-family/subfamily-${normalizedSubFamily}.png`,
                    (image) => 491 - image.naturalWidth - 7,
                    103,
                    29, 29)
                : new Promise(resolve => resolve(true));
        }
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
            ctx.font = '64.59px MatrixRegularSmallCaps';
            ctx.textAlign = 'left';
            ctx.fillStyle = isXyz ? '#ffffff' : '#000000';

            fillTextLeftWithLimit(ctx, name, 40.52, 81, 409);
        }
    }, [isInitializing, isXyz, name]);

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
            ctx.font = '18px stone-serif-regular';

            if (isPendulum) {
                fillTextLeftWithSpacing(ctx, set_id, -0.15, 46, 746);
            } else if (isLink) {
                fillTextLeftWithSpacing(ctx, set_id, -0.15, 352, 590);
            } else fillTextLeftWithSpacing(ctx, set_id, -0.15, 396, 589);
        }
    }, [isInitializing, isLink, isPendulum, isXyz, set_id]);

    useEffect(() => {
        const ctx = passcodeRef.current?.getContext('2d');
        ctx?.clearRect(0, 0, 549, 800);
        if (ctx) {
            if (isXyz && !isPendulum) ctx.fillStyle = '#fff';
            else ctx.fillStyle = '#000';
            ctx.font = '18px stone-serif-regular';

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

    const drawRefrenceImage  = useCallback(async (ctx: CanvasRenderingContext2D | null | undefined) => {
        let leftOffset = -5;
        let topOffset = -150;
        // let leftOffset = -4;
        // let topOffset = 300;
        // let leftOffset = -300;
        // let topOffset = -7;
        // let leftOffset = -1;
        // let topOffset = 100;
        // await drawFromSourceWithSize(ctx, '/asset/image/MP18-EN-C-1E.png', -leftOffset, -topOffset, 541, 800 * (541 / 549));
    }, []);

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
                    'palatino-linotype-bold',
                    'MatrixBook',
                    'ITCStoneSerifMedium',
                    'ITCStoneSerifBold',
                    'ITCStoneSerifSmallCapsBold',
                    'MatrixBoldSmallCaps',
                    'MatrixRegularSmallCaps',
                ],
                urls: ['./asset/font.css']
            },
            active: () => {
                // fontLoaded = true;
                setInitializing(false);
            }
        });
    }, []);

    useEffect(() => {
        // let relevant = true;
        let abortExport = () => {};

        (async () => {
            const canvasRef = drawCanvasRef.current;
            if (canvasRef) {
                await Promise.any([
                    onExport({ isPendulum }),
                    new Promise((resolve, reject) => abortExport = reject),
                ]);
            }
        })();

        return () => {
            // relevant = false;
            abortExport();
        };
    });

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

        if (canvasRef && exportCtx) {
            exportCtx.clearRect(0, 0, 549, 800);
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
            ];
            await Promise.all([
                layerList.map(currentlayer => generateLayer(currentlayer, exportCtx)),
            ]);
            await drawRefrenceImage(exportCtx);
        }
    }, 100)).current;

    return (
        <div className={'app-container'} style={{
            backgroundImage: 'url("/asset/image/texture/debut-dark.png"), linear-gradient(180deg, #00000022, #00000044)',
        }}>
            {isInitializing && <div className="full-loading">
                Initializing...
            </div>}
            <div className="card-filter-panel">
            </div>
            <CardInputPanel
                receivingCanvasRef={previewCanvasRef.current}
                currentCard={currentCard}
                onCardChange={setCard}
                onImageChange={() => {
                    setImageChangeCount(cnt => cnt + 1);
                }}
            />
            <div className="card-preview-panel">
                <button className="export-button">Save Card: Right click → "Save image as..."</button>
                <div className="card-canvas-group">
                    <canvas className="export-canvas" ref={drawCanvasRef} width={549} height={800} />
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
                    <canvas className="crop-canvas" ref={previewCanvasRef} />
                </div>
            </div>
        </div>
    );
}

export default App;
