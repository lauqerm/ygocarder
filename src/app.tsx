import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'antd/dist/antd.css';
import './app.scss';
import './responsive.scss';
import './reduce-color-motion.scss';
import {
    CanvasConst,
    getDefaultCard,
} from './model';
import {
    compressCardData,
    decodeCardWithCompatibility,
} from './util';
import { CardInputPanel, CardInputPanelRef, DownloadButton } from './page';
import WebFont from 'webfontloader';
import { changeCardFormat, retrieveSavedCard, useCard, useOCGFont, useSetting } from './service';
import { Modal, notification, Tooltip } from 'antd';
import { TaintedCanvasWarning } from './component';
import { clearCanvas } from './draw';
import { ZoomInOutlined, ClearOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const ErrorAlert = styled.span`
    color: var(--main-danger);
`;
const OverlayButton = styled.div`
    position: absolute;
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
    box-shadow: 0 0 0 1px var(--main-level-1);
    display: none;
    &:hover {
        background: var(--sub-primary);
    }
`;
const LightboxButton = styled(OverlayButton)`
    top: 5px;
    right: 5px;
`;
const ResetButton = styled(OverlayButton)`
    top: 5px;
    right: 61px;
`;

const { height: CanvasHeight, width: CanvasWidth } = CanvasConst;
function App() {
    const softMode = useSetting(state => state.setting.reduceMotionColor);
    const [isInitializing, setInitializing] = useState(true);
    const [error, setError] = useState('');
    const [sourceType, setSourceType] = useState<'internal' | 'external'>('external');
    const [canvasKey, setCanvasKey] = useState(0);
    const [lightboxVisible, setLightboxVisible] = useState(false);

    const cardInputRef = useRef<CardInputPanelRef>(null);
    const previewCanvasRef = useRef<HTMLCanvasElement>(null);
    const drawCanvasRef = useRef<HTMLCanvasElement>(null);
    // const artCanvasRef = useRef<HTMLCanvasElement>(null);
    const specialFrameCanvasRef = useRef<HTMLCanvasElement>(null);
    const cardIconCanvasRef = useRef<HTMLCanvasElement>(null);
    const pendulumScaleCanvasRef = useRef<HTMLCanvasElement>(null);
    const pendulumEffectCanvasRef = useRef<HTMLCanvasElement>(null);
    const typeCanvasRef = useRef<HTMLCanvasElement>(null);
    const effectCanvasRef = useRef<HTMLCanvasElement>(null);
    const nameCanvasRef = useRef<HTMLCanvasElement>(null);
    const attributeCanvasRef = useRef<HTMLCanvasElement>(null);
    const statCanvasRef = useRef<HTMLCanvasElement>(null);
    const setIdCanvasRef = useRef<HTMLCanvasElement>(null);
    const passwordCanvasRef = useRef<HTMLCanvasElement>(null);
    const creatorCanvasRef = useRef<HTMLCanvasElement>(null);
    const stickerCanvasRef = useRef<HTMLCanvasElement>(null);
    const finishCanvasRef = useRef<HTMLCanvasElement>(null);
    const lightboxCanvasRef = useRef<HTMLCanvasElement>(null);
    const [canvasMap] = useState({
        previewCanvas: previewCanvasRef,
        drawCanvasRef,
        // artCanvas: artCanvasRef,
        specialFrameCanvas: specialFrameCanvasRef,
        cardIconCanvas: cardIconCanvasRef,
        pendulumScaleCanvas: pendulumScaleCanvasRef,
        pendulumEffectCanvas: pendulumEffectCanvasRef,
        typeCanvas: typeCanvasRef,
        effectCanvas: effectCanvasRef,
        nameCanvas: nameCanvasRef,
        attributeCanvas: attributeCanvasRef,
        statCanvas: statCanvasRef,
        setIdCanvas: setIdCanvasRef,
        passwordCanvasRef,
        creatorCanvas: creatorCanvasRef,
        stickerCanvas: stickerCanvasRef,
        finishCanvas: finishCanvasRef,
        lightboxCanvas: lightboxCanvasRef,
    });

    const [imageChangeCount, setImageChangeCount] = useState(0);

    useEffect(() => {
        const ctx = drawCanvasRef.current?.getContext('2d');
        const setCard = useCard.getState().setCard;
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
                setCard(retrieveSavedCard());
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

    const {
        styleContent: ocgStyleFile,
    } = useOCGFont({
        onBeforeLoad: () => {
            setInitializing(true);
            const ctx = drawCanvasRef.current?.getContext('2d');
            if (ctx) {
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.imageSmoothingQuality = 'high';
                clearCanvas(ctx);
            }
        },
        onActive: () => {
            console.info('OCG Data Loaded');

            setInitializing(false);
        },
        onInactive: () => {
            setError('Data for OCG cards could not be loaded');
            setInitializing(false);
        },
        onFontInactive: (familyName, fvd) => {
            console.error('OCG fontinactive', familyName, fvd);
            notification.error({
                message: `${familyName} font could not be loaded, this will impact your card quality`
            });
        }
    });

    const [isTainted, setTainted] = useState(false);

    useEffect(() => {
        const documentClassList = document.body.classList;

        if (softMode) documentClassList.add('reduced-color-motion');
        else documentClassList.remove('reduced-color-motion');
    }, [softMode]);

    const alertDownloadError = useCallback(() => {
        setTainted(true);
        alert('Could not save card, please manually save it by right click the card → Choose "Save image as..."');
    }, []);

    const rerenderAllImage = useCallback(() => {
        setCanvasKey(cnt => cnt + 1);
        setImageChangeCount(cnt => cnt + 1);
        setTainted(false);
    }, []);

    const rerenderCardImage: NonNullable<CardInputPanel['onCropChange']> = useCallback((_, sourceType) => {
        setImageChangeCount(cnt => cnt + 1);
        setSourceType(sourceType);
    }, []);

    const markTaintedImage = useCallback(() => {
        setImageChangeCount(cnt => cnt + 1);
        setTainted(true);
    }, []);

    return (
        <div id="app"
            /** Prevent accidentally replace the page when dragging image into card art input. */
            onDrop={() => { }}
            className={softMode ? 'reduced-color-motion' : ''}
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
                    {error.length > 0
                        ? <ErrorAlert>
                            {error}
                        </ErrorAlert>
                        : 'Loading fonts and scripts...'}
                </div>}
                {/* <div className="card-filter-panel"></div> */}
                <div className={`card-preview-panel ${isTainted ? 'export-tainted' : 'export-normal'}`}>
                    <div className="export-button">
                        <div className="imexport">
                            <button onClick={() => {
                                if (sourceType === 'internal') window.alert('Cannot export card data if you use offline image');
                                const exportableCard = useCard.getState().card;

                                window.prompt(
                                    'Save card data for later use',
                                    `${compressCardData(exportableCard)}`,
                                );
                            }}>Export Data</button>
                            <button onClick={() => {
                                const cardData = window.prompt('Paste your card data here');
                                const setCard = useCard.getState().setCard;

                                if (cardData) {
                                    const decodedCard = decodeCardWithCompatibility(cardData);
                                    setCard(decodedCard);
                                    setImageChangeCount(cnt => cnt + 1);
                                    cardInputRef.current?.forceCardData(decodedCard);
                                }
                            }}>Import Data</button>
                        </div>
                        {!isTainted
                            ? <DownloadButton
                                canvasMap={canvasMap}
                                imageChangeCount={imageChangeCount}
                                isInitializing={isInitializing}
                                onDownloadError={alertDownloadError}
                            />
                            : <div id="save-button-tainted" className="save-button-container">
                                <span>Manual save by right click the card<br />→ "Save image as..." {TaintedCanvasWarning}</span>
                            </div>}
                    </div>
                    <div className="card-canvas-container">
                        <div className="card-canvas-group">
                            <Tooltip title="Reset">
                                <ResetButton className="reset-button" onClick={() => {
                                    const consent = window.confirm('This will reset your card information back to default, make sure you export the current data first!');

                                    if (consent) {
                                        const { setCard, card } = useCard.getState();
                                        const defaultCard = getDefaultCard();
                                        const contextualDefaultCardData = card.format === 'tcg'
                                            ? defaultCard
                                            : changeCardFormat(defaultCard, 'ocg');

                                        setCard(contextualDefaultCardData);
                                        setImageChangeCount(cnt => cnt + 1);
                                        cardInputRef.current?.forceCardData(contextualDefaultCardData);
                                    }
                                }}>
                                    <ClearOutlined />
                                </ResetButton>
                            </Tooltip>
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
                            <canvas id="cardIconCanvas" ref={cardIconCanvasRef} width={CanvasWidth} height={222} />
                            <canvas id="pendulumScaleCanvas" ref={pendulumScaleCanvasRef} width={CanvasWidth} height={889} />
                            <canvas id="pendulumEffectCanvas" ref={pendulumEffectCanvasRef} width={CanvasWidth} height={889} />
                            <canvas id="typeCanvas" ref={typeCanvasRef} width={CanvasWidth} height={1037} />
                            <canvas id="effectCanvas" ref={effectCanvasRef} width={CanvasWidth} height={1111} />
                            <canvas id="statCanvas" ref={statCanvasRef} width={CanvasWidth} height={CanvasHeight} />
                            <canvas id="setIdCanvas" ref={setIdCanvasRef} width={CanvasWidth} height={CanvasHeight} />
                            <canvas id="password" ref={passwordCanvasRef} width={CanvasWidth} height={CanvasHeight} />
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
                    onSourceLoaded={rerenderAllImage}
                    onCropChange={rerenderCardImage}
                    onTainted={markTaintedImage}
                />}
            </div>
            {/** Pixel perfect for card image */}
            <Modal
                width="843px"
                wrapClassName="card-lightbox-overlay"
                visible={lightboxVisible}
                forceRender={true}
                onCancel={() => setLightboxVisible(false)}
                footer={null}
            >
                <canvas key={canvasKey + 0.1}
                    id="lightbox-canvas"
                    ref={lightboxCanvasRef}
                    width={CanvasWidth}
                    height={CanvasHeight}
                />
            </Modal>
            <div className="by-me">Made by Lauqerm</div>
        </div>
    );
}

export default App;
