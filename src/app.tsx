import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'antd/dist/antd.css';
import './app.scss';
import './responsive.scss';
import './reduce-color-motion.scss';
import {
    CanvasConst,
    Card,
    getDefaultCard,
    getArtCanvasCoordinate,
    CardOpacity,
} from './model';
import {
    cardDataShortener,
    decodeCardWithCompatibility,
    insertUrlParam,
    normalizedCardName,
} from './util';
import { CardInputPanel, CardInputPanelRef } from './page';
import WebFont from 'webfontloader';
import { useMasterSeriDrawer, useSetting } from './service';
import { Modal, notification, Tooltip } from 'antd';
import { Affiliation, AppHeader, TaintedCanvasWarning } from './component';
import { clearCanvas } from './draw';
import { ZoomInOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const LightboxButton = styled.div`
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 101;
    background: var(--main-primary);
    border-color: var(--main-active);
    color: var(--color-contrast);
    padding: 10px;
    line-height: 1;
    font-size: 30px;
    text-align: center;
    width: 51px;
    height: 51px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 0 1px 1px var(--main-level-1);
    display: none;
    &:hover {
        background: var(--sub-primary);
    }
`;

const { height: CanvasHeight, width: CanvasWidth } = CanvasConst;
function App() {
    const [isInitializing, setInitializing] = useState(true);
    const [error, setError] = useState('');
    const [currentCard, setCard] = useState<Card>(getDefaultCard());
    const [sourceType, setSourceType] = useState<'internal' | 'external'>('external');
    const [ocgStyleFile, setOCGStyleFile] = useState('');
    const softMode = useSetting(state => state.setting.reduceMotionColor);
    const [canvasKey, setCanvasKey] = useState(0);
    const [lightboxVisible, setLightboxVisible] = useState(false);

    const cardInputRef = useRef<CardInputPanelRef>(null);
    const previewCanvasRef = useRef<HTMLCanvasElement>(null);
    const drawCanvasRef = useRef<HTMLCanvasElement>(null);
    const frameCanvasRef = useRef<HTMLCanvasElement>(null);
    // const artCanvasRef = useRef<HTMLCanvasElement>(null);
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
    const finishCanvasRef = useRef<HTMLCanvasElement>(null);
    const lightboxCanvasRef = useRef<HTMLCanvasElement>(null);
    const [canvasMap] = useState({
        previewCanvas: previewCanvasRef,
        drawCanvas: drawCanvasRef,
        // artCanvas: artCanvasRef,
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
        finishCanvas: finishCanvasRef,
    });

    const {
        format,
        opacity,
        name,
        pictureCrop,
        isPendulum,
    } = currentCard;

    const [imageChangeCount, setImageChangeCount] = useState(0);
    const { drawingPipeline } = useMasterSeriDrawer(
        true,
        canvasMap,
        currentCard,
        {
            imageChangeCount,
            isInitializing,
        },
    );

    useEffect(() => {
        const ctx = drawCanvasRef.current?.getContext('2d');
        if (ctx) {
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.imageSmoothingQuality = 'high';
            clearCanvas(ctx);
        }

        WebFont.load({
            custom: {
                families: [
                    'Matrix-Bold',
                    'MatrixBoldSmallCaps',
                    'MatrixBook',
                    'MatrixRegularSmallCaps',
                    'Yugioh Rush Duel Numbers V4',
                    'YuGiOhITCStoneSerifBSc',
                    'matrix',
                    'palatino-linotype-bold',
                    'stone-serif-bold',
                    'stone-serif-regular',
                ],
                urls: ['asset/font.css'],
            },
            active: () => {
                try {
                    const localCardVersion = window.localStorage.getItem('card-version');
                    const localCardData = window.localStorage.getItem('card-data');

                    const cardURLData = (new URLSearchParams(window.location.search)).get('data');
                    if (cardURLData) {
                        const decodedCard = decodeCardWithCompatibility(cardURLData);

                        setCard(decodedCard);
                    } else if (localCardData !== null && localCardVersion === process.env.REACT_APP_VERSION) {
                        setCard(JSON.parse(localCardData) as any);
                    }
                } catch (e) {
                    setCard(getDefaultCard());
                }
                setInitializing(false);
            },
            fontinactive(familyName, fvd) {
                console.error('TCG fontinactive', familyName, fvd);
                notification.error({
                    message: `${familyName} font could not be loaded, this will impact your card quality`
                });
            },
            inactive: () => {
                setError('Font could not be loaded');
                setInitializing(false);
            },
        });
    }, []);

    const ocgReady = useRef(false);
    const loadAttempt = useRef(0);
    useEffect(() => {
        if (currentCard.format === 'ocg' && ocgReady.current === false && loadAttempt.current <= 3) {
            loadAttempt.current += 1;
            setOCGStyleFile(`${process.env.PUBLIC_URL}/asset/ocg-font.css`);
            setInitializing(true);
            const ctx = drawCanvasRef.current?.getContext('2d');
            if (ctx) {
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.imageSmoothingQuality = 'high';
                clearCanvas(ctx);
            }

            WebFont.load({
                custom: {
                    families: [
                        'DFHSGothic-W3-WIN-RKSJ-H',
                        'DFKakuTaiHiStd-W4',
                        'FOT-Rodin Pro M',
                        'Yu-Gi-Oh! DF Leisho 3',
                    ],
                    urls: ['asset/ocg-font.css'],
                },
                active: () => {
                    console.info('OCG Data Loaded');
                    ocgReady.current = true;

                    setInitializing(false);
                },
                fontinactive(familyName, fvd) {
                    console.error('TCG fontinactive', familyName, fvd);
                    notification.error({
                        message: `${familyName} font could not be loaded, this will impact your card quality`
                    });
                },
                inactive: () => {
                    ocgReady.current = true;
                    setError('Data for OCG cards could not be loaded');
                    setInitializing(false);
                },
            });
        }
    }, [currentCard.format]);

    const pendingSave = useRef(false);
    const exportRef = useRef({
        currentPipeline: Promise.resolve(),
        queuedPipeline: false,
    });

    const download = useCallback(() => {
        const canvasRef = drawCanvasRef.current;
        if (canvasRef) try {
            const normalizedName = name.replaceAll(/\{([^{}|]*)\|?[^{}|]*\}/g, '$1');
            var link = document.createElement('a');
            link.download = normalizedName
                ? `${normalizedName}.png`
                : 'card.png';
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
                    document.getElementById('export-canvas')?.classList.remove('js-export-available');
                    document.getElementById('export-canvas-guard')?.setAttribute('style', '');
                    document.getElementById('save-button-waiting')?.setAttribute('style', 'display: block');

                    exportRef.current.queuedPipeline = true;
                    // await new Promise(resolve => setTimeout(() => resolve(true), 3000));
                    await exportRef.current.currentPipeline;

                    if (relevant) {
                        exportRef.current.currentPipeline = onExport({ isPendulum, opacity });
                        exportRef.current.queuedPipeline = false;

                        await exportRef.current.currentPipeline;
                        if (relevant) {
                            const condensedCard = cardDataShortener(currentCard);
                            if (typeof condensedCard === 'string') insertUrlParam('data', condensedCard);

                            document.getElementById('export-canvas')?.classList.add('js-export-available');
                            document.getElementById('export-canvas-guard')?.setAttribute('style', 'display: none');
                            document.getElementById('save-button-waiting')?.setAttribute('style', 'display: none');

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

    useEffect(() => {
        let relevant = true;
        setTimeout(() => {
            const normalizedName = normalizedCardName(name);

            if (relevant) {
                document.title = normalizedName
                    ? `${normalizedName} - Yu-Gi-Oh Carder`
                    : 'Yu-Gi-Oh Carder';
            }
        }, 500);

        return () => {
            relevant = false;
        };
    }, [name]);

    useEffect(() => {
        const documentClassList = document.body.classList;

        if (softMode) documentClassList.add('reduced-color-motion');
        else documentClassList.remove('reduced-color-motion');
    }, [softMode]);

    const drawHistory = useRef<Record<string, number>>({});
    const onExport = useRef(async (exportProps: {
        isPendulum: boolean,
        opacity: Partial<CardOpacity>,
    }) => {
        const {
            isPendulum = false
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
            await generateLayer(frameCanvasRef, exportCtx);
            const previewCtx = previewCanvasRef.current;
            if (previewCtx && exportCtx) {
                const { artX, artY, artWidth } = getArtCanvasCoordinate(isPendulum, opacity);
                const { width: imageWidth, height: imageHeight } = previewCtx;

                if (imageHeight > 0) {
                    exportCtx.drawImage(previewCtx, 0, 0, imageWidth, imageHeight, artX, artY, artWidth, artWidth / (imageWidth / imageHeight));
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
                finishCanvasRef,
            ].map(currentlayer => generateLayer(currentlayer, exportCtx)));

            const lightboxCanvas = lightboxCanvasRef.current;
            lightboxCanvas?.getContext('2d')?.drawImage(canvasRef, 0, 0);
        }
    }).current;

    return (
        <div id="app"
            onDrop={() => { }}
            className={[format === 'ocg' ? 'input-ocg' : 'input-tcg', softMode ? 'reduced-color-motion' : ''].join(' ')}
            style={{
                backgroundImage: `url("${process.env.PUBLIC_URL}/asset/image/texture/debut-dark.png"), linear-gradient(180deg, #00000022, #00000044)`,
                ...({
                    '--card-height': `${CanvasConst.height}px`,
                    '--card-width': `${CanvasConst.width}px`,
                }),
            }}
        >
            {ocgStyleFile && <link rel="stylesheet" type="text/css" href={ocgStyleFile} />}
            <div className={'app-container'}>
                {isInitializing && <div className="full-loading">
                    {error.length > 0 ? <span style={{ color: '#e04040' }}>
                        {error}
                    </span> : 'Loading fonts and scripts...'}
                </div>}
                {/* <div className="card-filter-panel"></div> */}
                <div className={`card-preview-panel ${isTainted ? 'export-tainted' : 'export-normal'}`}>
                    <div className="export-button">
                        <div className="imexport">
                            <button onClick={() => {
                                if (sourceType === 'internal') window.alert('Cannot export card data if you use offline image');

                                window.prompt('Save card data for later use', `${cardDataShortener(currentCard)}`);
                            }}>Export Data</button>
                            <button onClick={() => {
                                const cardData = window.prompt('Paste your card data here');

                                if (cardData) {
                                    const decodedCard = decodeCardWithCompatibility(cardData);
                                    setCard(decodedCard);
                                    setImageChangeCount(cnt => cnt + 1);
                                    cardInputRef.current?.forceCardData(decodedCard);
                                }
                            }}>Import Data</button>
                        </div>
                        {!isTainted
                            ? <div className="save-button-container">
                                <div id="save-button-waiting" />
                                <button className="save-button" id="save-button-ready" onClick={() => onSave()}>Download</button>
                            </div>
                            : <div id="save-button-tainted" className="save-button-container">
                                <span>Manual save by right click the card<br />→ "Save image as..." {TaintedCanvasWarning}</span>
                            </div>}
                    </div>
                    <div className="card-canvas-container">
                        <div className="card-canvas-group">
                            <Tooltip title="View full size">
                                <LightboxButton className="lightbox-button" onClick={() => setLightboxVisible(cur => !cur)}>
                                    <ZoomInOutlined />
                                </LightboxButton>
                            </Tooltip>
                            <canvas id="export-canvas" key={canvasKey + 0.1} ref={drawCanvasRef} width={CanvasWidth} height={CanvasHeight} />
                            <div id="export-canvas-guard" onContextMenu={e => e.preventDefault()}>
                                {/* <div className="canvas-guard-alert">Generating...</div> */}
                            </div>
                            {/* <canvas id="artCanvas" ref={artCanvasRef} width={CanvasWidth} height={963} /> */}
                            <canvas id="specialFrameCanvas" key={canvasKey} ref={specialFrameCanvasRef} width={CanvasWidth} height={CanvasHeight} />
                            <canvas id="nameCanvas" ref={nameCanvasRef} width={CanvasWidth} height={148} />
                            <canvas id="attributeCanvas" ref={attributeCanvasRef} width={CanvasWidth} height={148} />
                            <canvas id="subFamilyCanvas" ref={subFamilyCanvasRef} width={CanvasWidth} height={222} />
                            <canvas id="pendulumScaleCanvas" ref={pendulumScaleCanvasRef} width={CanvasWidth} height={889} />
                            <canvas id="pendulumEffectCanvas" ref={pendulumEffectCanvasRef} width={CanvasWidth} height={889} />
                            <canvas id="typeCanvas" ref={typeCanvasRef} width={CanvasWidth} height={1037} />
                            <canvas id="effectCanvas" ref={effectCanvasRef} width={CanvasWidth} height={1111} />
                            <canvas id="statCanvas" ref={statCanvasRef} width={CanvasWidth} height={CanvasHeight} />
                            <canvas id="setIdCanvas" ref={setIdCanvasRef} width={CanvasWidth} height={CanvasHeight} />
                            <canvas id="passcode" ref={passcodeCanvasRef} width={CanvasWidth} height={CanvasHeight} />
                            <canvas id="creator" ref={creatorCanvasRef} width={CanvasWidth} height={CanvasHeight} />
                            <canvas id="sticker" ref={stickerCanvasRef} width={CanvasWidth} height={CanvasHeight} />
                            <canvas id="finish" ref={finishCanvasRef} width={CanvasWidth} height={CanvasHeight} />
                            <canvas className="crop-canvas" ref={previewCanvasRef} />
                        </div>
                    </div>
                </div>
                {isInitializing === false && <CardInputPanel
                    ref={cardInputRef}
                    receivingCanvasRef={previewCanvasRef.current}
                    currentCard={currentCard}
                    onCardChange={setCard}
                    defaultCropInfo={pictureCrop}
                    onSourceLoaded={() => {
                        setCanvasKey(cnt => cnt + 1);
                        setImageChangeCount(cnt => cnt + 1);
                        setTainted(false);
                    }}
                    onCropChange={(cropInfo, sourceType) => {
                        setImageChangeCount(cnt => cnt + 1);
                        setSourceType(sourceType);
                        if (cropInfo) setCard(curr => ({
                            ...curr,
                            pictureCrop: cropInfo,
                        }));
                    }}
                    onTainted={() => {
                        setImageChangeCount(cnt => cnt + 1);
                        setTainted(true);
                    }}
                >
                    <AppHeader />
                    <br />
                    <Affiliation />
                </CardInputPanel>}
            </div>
            <Modal
                width="843px"
                wrapClassName="card-lightbox-overlay"
                visible={lightboxVisible}
                forceRender={true}
                onCancel={() => setLightboxVisible(false)}
                footer={() => null}
            >
                <canvas id="lightbox-canvas" key={canvasKey + 0.1} ref={lightboxCanvasRef} width={CanvasWidth} height={CanvasHeight} />
            </Modal>
            <div className="by-me">Made by Lauqerm</div>
        </div>
    );
}

export default App;
