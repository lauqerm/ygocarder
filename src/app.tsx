import React, { useCallback, useEffect, useRef, useState } from 'react';
import './app.scss';
import 'antd/dist/antd.css';
import {
    CanvasConst,
    Card,
    defaultCard,
} from './model';
import {
    cardDataCondenser,
    insertUrlParam,
    rebuildCardData,
} from './util';
import { AppHeader, CardInputPanel, CardInputPanelRef, taintedCanvasWarning } from './page';
import WebFont from 'webfontloader';
import { LoadingOutlined } from '@ant-design/icons';
import { useMasterSeriDrawer } from './service';

const { height: CanvasHeight, width: CanvasWidth } = CanvasConst;
const clearCanvas = (
    ctx: CanvasRenderingContext2D | null | undefined,
) => {
    if (ctx) {
        ctx.clearRect(0, 0, CanvasWidth, CanvasHeight);
    };
};

function App() {
    const [isInitializing, setInitializing] = useState(true);
    const [error, setError] = useState('');
    const [currentCard, setCard] = useState<Card>(defaultCard);
    const [sourceType, setSourceType] = useState<'internal' | 'external'>('external');

    const cardInputRef = useRef<CardInputPanelRef>(null);
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
    const statCanvasRef = useRef<HTMLCanvasElement>(null);
    const setIdCanvasRef = useRef<HTMLCanvasElement>(null);
    const passcodeCanvasRef = useRef<HTMLCanvasElement>(null);
    const creatorCanvasRef = useRef<HTMLCanvasElement>(null);
    const stickerCanvasRef = useRef<HTMLCanvasElement>(null);
    const [canvasMap] = useState({
        previewCanvas: previewCanvasRef,
        drawCanvas: drawCanvasRef,
        frameCanvas: frameCanvasRef,
        artCanvas: artCanvasRef,
        specialFrameCanvas: specialFrameCanvasRef,
        subFamilyCanvas: subFamilyCanvasRef,
        pendulumScaleCanvas: pendulumScaleCanvasRef,
        pendulumEffectCanvas: pendulumEffectCanvasRef,
        typeCanvas: typeCanvasRef,
        effectCanvas: effectCanvasRef,
        nameCanvas: nameCanvasRef,
        attributeCanvas: attributeCanvasRef,
        statCanvas: statCanvasRef,
        setIdCanvas: setIdCanvasRef,
        passcodeCanvas: passcodeCanvasRef,
        creatorCanvas: creatorCanvasRef,
        stickerCanvas: stickerCanvasRef,
    });

    const {
        name,
        pictureCrop,
        isPendulum,
    } = currentCard;

    const [imageChangeCount, setImageChangeCount] = useState(0);
    const { drawingPipeline } = useMasterSeriDrawer(true, canvasMap, currentCard, {
        imageChangeCount,
        isInitializing,
    });

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
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.imageSmoothingQuality = 'high';
            clearCanvas(ctx);
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
                try {
                    const localCardVersion = window.localStorage.getItem('card-version');
                    const localCardData = window.localStorage.getItem('card-data');

                    const urlParam = (new URLSearchParams(window.location.search)).get('data');
                    if (urlParam) {
                        setCard(rebuildCardData(urlParam, true) as any);
                    } else if (localCardData !== null && localCardVersion === process.env.REACT_APP_VERSION) {
                        setCard(rebuildCardData(localCardData) as any);
                    }
                } catch (e) {
                    setCard(defaultCard);
                }
                setInitializing(false);
            },
            inactive: () => {
                setError('Font could not be loaded');
                setInitializing(false);
            },
        });
    }, []);

    const pendingSave = useRef(false);
    const exportRef = useRef({
        currentPipeline: Promise.resolve(),
        queuedPipeline: false,
    });

    const download = useCallback(() => {
        const canvasRef = drawCanvasRef.current;
        if (canvasRef) try {
            var link = document.createElement('a');
            link.download = `${name}.png`;
            link.href = canvasRef.toDataURL('image/png');
            link.click();
        } catch (e) {
            setTainted(true);
            alert('Could not save card, please manually save it by right click the card → Choose "Save image as..."');
        }
        document.querySelector('#export-canvas-guard')?.classList.remove('guard-on');
    }, [name]);
    const [isTainted, setTainted] = useState(false);
    const onSave = () => {
        document.querySelector('#export-canvas-guard')?.classList.add('guard-on');
        if (exportRef.current.queuedPipeline === false) {
            download();
        } else pendingSave.current = true;
    };

    useEffect(() => {
        let relevant = true;
        if (isInitializing === false) {
            localStorage.setItem('card-data', JSON.stringify(currentCard));
            localStorage.setItem('card-version', process.env.REACT_APP_VERSION ?? 'unknown');

            /**
             * Run export pipeline
             * - While it is running, every effect just mark pipeline as queued, then wait the current pipeline
             * - If the pipeline is complete and there is no effect, run another pipeline and remove the queue
             */
            (async () => {
                const canvasRef = drawCanvasRef.current;
                if (canvasRef) {
                    document.getElementById('export-canvas-guard')?.setAttribute('style', '');
                    document.getElementById('save-button-waiting')?.setAttribute('style', 'display: block');
                    document.getElementById('save-button-ready')?.setAttribute('style', 'display: none');

                    exportRef.current.queuedPipeline = true;
                    await exportRef.current.currentPipeline;

                    if (relevant) {
                        exportRef.current.currentPipeline = onExport({ isPendulum });
                        exportRef.current.queuedPipeline = false;

                        await exportRef.current.currentPipeline;
                        if (relevant) {
                            const condensedCard = cardDataCondenser(currentCard);
                            if (typeof condensedCard === 'string') insertUrlParam('data', condensedCard);

                            document.getElementById('export-canvas-guard')?.setAttribute('style', 'display: none');
                            document.getElementById('save-button-waiting')?.setAttribute('style', 'display: none');
                            document.getElementById('save-button-ready')?.setAttribute('style', 'display: block');

                            if (pendingSave.current) {
                                pendingSave.current = false;
                                download();
                            }
                        }
                    }
                }
            })();
        }

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
            await Promise.all([
                nameCanvasRef,
                attributeCanvasRef,
                subFamilyCanvasRef,
                pendulumScaleCanvasRef,
                pendulumEffectCanvasRef,
                typeCanvasRef,
                effectCanvasRef,
                statCanvasRef,
                setIdCanvasRef,
                passcodeCanvasRef,
                creatorCanvasRef,
                stickerCanvasRef,
            ].map(currentlayer => generateLayer(currentlayer, exportCtx)));
            // await drawRefrenceImage(exportCtx);
        }
    }).current;

    return (
        <div id="app"
            onDrop={() => { }}
            style={{
                backgroundImage: `url("${process.env.PUBLIC_URL}/asset/image/texture/debut-dark.png"), linear-gradient(180deg, #00000022, #00000044)`,
            }}
        >
            <div className={'app-container'}>
                {isInitializing && <div className="full-loading">
                    {error.length > 0 ? <span style={{ color: '#e04040' }}>
                        {error}
                    </span> : 'Loading fonts and scripts...'}
                </div>}
                {/* <div className="card-filter-panel">
                </div> */}
                <div className={`card-preview-panel ${isTainted ? 'export-tainted' : 'export-normal'}`}>
                    <div className="export-button">
                        {!isTainted
                            ? <>
                                <button id="save-button-waiting" disabled>Generating...</button>
                                <button id="save-button-ready" onClick={() => onSave()}>Save</button>
                            </>
                            : <div id="save-button-tainted">
                                Manually save by right click the card → "Save image as..." {taintedCanvasWarning}
                            </div>}
                        <div className="imexport">
                            <button onClick={() => {
                                if (sourceType === 'internal') window.alert('Cannot export card data if you use offline image');

                                window.prompt('Save card data for later use', `${cardDataCondenser(currentCard)}`);
                            }}>Export Card Data</button>
                            <button onClick={() => {
                                const cardData = window.prompt('Paste your card data');

                                if (cardData) {
                                    const decodedCard = rebuildCardData(cardData, true) as Card;
                                    setCard(decodedCard);
                                    cardInputRef.current?.forceCardData(decodedCard);
                                }
                            }}>Import Card Data</button>
                        </div>
                    </div>
                    <div className="card-canvas-group">
                        <canvas id="export-canvas" ref={drawCanvasRef} width={CanvasWidth} height={CanvasHeight} />
                        <div id="export-canvas-guard">
                            <div className="canvas-guard-alert">Generating...</div>
                            <LoadingOutlined />
                        </div>
                        <canvas id="frameCanvas" ref={frameCanvasRef} width={CanvasWidth} height={CanvasHeight} />
                        <canvas id="artCanvas" ref={artCanvasRef} width={CanvasWidth} height={650} />
                        <canvas id="specialFrameCanvas" ref={specialFrameCanvasRef} width={CanvasWidth} height={CanvasHeight} />
                        <canvas id="nameCanvas" ref={nameCanvasRef} width={CanvasWidth} height={100} />
                        <canvas id="attributeCanvas" ref={attributeCanvasRef} width={CanvasWidth} height={100} />
                        <canvas id="subFamilyCanvas" ref={subFamilyCanvasRef} width={CanvasWidth} height={150} />
                        <canvas id="pendulumScaleCanvas" ref={pendulumScaleCanvasRef} width={CanvasWidth} height={600} />
                        <canvas id="pendulumEffectCanvas" ref={pendulumEffectCanvasRef} width={CanvasWidth} height={600} />
                        <canvas id="typeCanvas" ref={typeCanvasRef} width={CanvasWidth} height={700} />
                        <canvas id="effectCanvas" ref={effectCanvasRef} width={CanvasWidth} height={750} />
                        <canvas id="statCanvas" ref={statCanvasRef} width={CanvasWidth} height={CanvasHeight} />
                        <canvas id="setIdCanvas" ref={setIdCanvasRef} width={CanvasWidth} height={CanvasHeight} />
                        <canvas id="passcode" ref={passcodeCanvasRef} width={CanvasWidth} height={CanvasHeight} />
                        <canvas id="creator" ref={creatorCanvasRef} width={CanvasWidth} height={CanvasHeight} />
                        <canvas id="sticker" ref={stickerCanvasRef} width={CanvasWidth} height={CanvasHeight} />
                        <canvas className="crop-canvas" ref={previewCanvasRef} />
                    </div>
                </div>
                {isInitializing === false && <CardInputPanel
                    ref={cardInputRef}
                    receivingCanvasRef={previewCanvasRef.current}
                    currentCard={currentCard}
                    onCardChange={setCard}
                    defaultCropInfo={pictureCrop}
                    onImageChange={(cropInfo, sourceType) => {
                        setImageChangeCount(cnt => cnt + 1);
                        setSourceType(sourceType);
                        if (cropInfo) setCard(curr => ({
                            ...curr,
                            pictureCrop: cropInfo,
                        }));
                    }}
                    onTainted={() => setTainted(true)}
                >
                    <AppHeader /><br />
                </CardInputPanel>}
            </div>
        </div>
    );
}

export default App;
