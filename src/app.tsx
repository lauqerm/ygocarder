import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import 'antd/dist/antd.css';
import './app.scss';
import './style/index.scss';
import './responsive.scss';
import './reduce-color-motion.scss';
import {
    CanvasConst,
    getDefaultCard,
} from './model';
import {
    compressCardData,
    decodeCardWithCompatibility,
    isMobileDevice,
} from './util';
import { CardInputPanel, CardInputPanelRef, DownloadButton } from './page';
import WebFont from 'webfontloader';
import { changeCardFormat, retrieveSavedCard, useCard, useOCGFont, useSetting } from './service';
import { Modal, notification, Tooltip } from 'antd';
import { TaintedCanvasWarning } from './component';
import { clearCanvas } from './draw';
import { ZoomInOutlined, ClearOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import {
    StyledAppLoading,
    StyledByMe,
    StyledCardCanvasGroupContainer,
    StyledDataButtonPanelContainer,
} from './app.styled';
import { configure, HotKeys } from 'react-hotkeys';
import { DownloadButtonRef } from './page/canvas-panel/download-button';
import { useShallow } from 'zustand/react/shallow';

configure({
    ignoreTags: [],
});
const AppGlobalHotkeyMap = {
    EXPORT: ['ctrl+d', 'command+d'],
    IMPORT: ['ctrl+e', 'command+e'],
    VIEW: ['ctrl+b', 'command+b'],
    DOWNLOAD: ['ctrl+s', 'command+s'],
};

const ErrorAlert = styled.span`
    color: var(--main-danger);
`;
const OverlayButton = styled.div`
    --overlay-size: 51px;
    position: absolute;
    z-index: 101;
    background: var(--main-primary);
    border-color: var(--main-active);
    color: var(--color-heavy);
    padding: var(--spacing);
    line-height: 1;
    font-size: var(--fs-3xl);
    text-align: center;
    width: var(--overlay-size);
    height: var(--overlay-size);
    border-radius: var(--br-lg);
    cursor: pointer;
    box-shadow: var(--bs-1);
    display: none;
    &:hover {
        background: var(--sub-primary);
    }
`;
const LightboxButton = styled(OverlayButton)`
    top: var(--spacing-xs);
    right: var(--spacing-xs);
`;
const ResetButton = styled(OverlayButton)`
    top: var(--spacing-xs);
    right: calc(var(--overlay-size) + 2 * var(--spacing-xs));
`;

const { height: CanvasHeight, width: CanvasWidth } = CanvasConst;
function App() {
    const {
        allowHotkey,
        softMode,
    } = useSetting(useShallow(({ setting: { allowHotkey, reduceMotionColor } }) => ({
        softMode: reduceMotionColor,
        allowHotkey,
    })));
    const [isInitializing, setInitializing] = useState(true);
    const [error, setError] = useState('');
    const [sourceType, setSourceType] = useState<'internal' | 'external'>('external');
    const [canvasKey, setCanvasKey] = useState(0);
    const [lightboxVisible, setLightboxVisible] = useState(false);

    const cardInputRef = useRef<CardInputPanelRef>(null);
    const artworkCanvasRef = useRef<HTMLCanvasElement>(null);
    const backgroundCanvasRef = useRef<HTMLCanvasElement>(null);
    const drawCanvasRef = useRef<HTMLCanvasElement>(null);
    // const artCanvasRef = useRef<HTMLCanvasElement>(null);
    const frameCanvasRef = useRef<HTMLCanvasElement>(null);
    const cardIconCanvasRef = useRef<HTMLCanvasElement>(null);
    const pendulumScaleCanvasRef = useRef<HTMLCanvasElement>(null);
    const pendulumEffectCanvasRef = useRef<HTMLCanvasElement>(null);
    const typeCanvasRef = useRef<HTMLCanvasElement>(null);
    const effectCanvasRef = useRef<HTMLCanvasElement>(null);
    const nameCanvasRef = useRef<HTMLCanvasElement>(null);
    const statCanvasRef = useRef<HTMLCanvasElement>(null);
    const setIdCanvasRef = useRef<HTMLCanvasElement>(null);
    const passwordCanvasRef = useRef<HTMLCanvasElement>(null);
    const creatorCanvasRef = useRef<HTMLCanvasElement>(null);
    const stickerCanvasRef = useRef<HTMLCanvasElement>(null);
    const finishCanvasRef = useRef<HTMLCanvasElement>(null);
    const lightboxCanvasRef = useRef<HTMLCanvasElement>(null);
    const [canvasMap] = useState({
        artworkCanvasRef,
        backgroundCanvasRef,
        drawCanvasRef,
        // artCanvas: artCanvasRef,
        frameCanvasRef,
        cardIconCanvasRef,
        pendulumScaleCanvasRef,
        pendulumEffectCanvasRef,
        typeCanvasRef,
        effectCanvasRef,
        nameCanvasRef,
        statCanvasRef,
        setIdCanvasRef,
        passwordCanvasRef,
        creatorCanvasRef,
        stickerCanvasRef,
        finishCanvasRef,
        lightboxCanvasRef,
    });

    const downloadButtonRef = useRef<DownloadButtonRef>(null);

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

    const importData = useCallback((event?: { preventDefault: () => void }) => {
        if (!allowHotkey) return;

        event?.preventDefault();
        const cardData = window.prompt('Paste your card data here');
        const setCard = useCard.getState().setCard;

        if (cardData) {
            const decodedCard = decodeCardWithCompatibility(cardData);
            setCard(decodedCard);
            setImageChangeCount(cnt => cnt + 1);
            cardInputRef.current?.forceCardData(decodedCard);
            /** Allow navigate input panel right away */
            document.querySelector<HTMLElement>('.radio-train-input-group')?.focus();
        }
    }, [allowHotkey]);

    const exportData = useCallback((event?: { preventDefault: () => void }) => {
        if (!allowHotkey) return;

        event?.preventDefault();
        if (sourceType === 'internal') window.alert('Cannot export card data if you use offline image');
        const exportableCard = useCard.getState().card;

        window.prompt(
            'Save card data for later use',
            `${compressCardData(exportableCard)}`,
        );
    }, [allowHotkey, sourceType]);

    const downloadFromHotkey = useCallback((event?: { preventDefault: () => void }) => {
        if (!allowHotkey) return;

        event?.preventDefault();
        downloadButtonRef.current?.download();
    }, [allowHotkey]);

    const hotkeyHandlerMap = useMemo(() => {
        return {
            IMPORT: importData,
            EXPORT: exportData,
            VIEW: () => setLightboxVisible(true),
            DOWNLOAD: downloadFromHotkey,
        };
    }, [downloadFromHotkey, exportData, importData]);

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
        <HotKeys keyMap={AppGlobalHotkeyMap} handlers={hotkeyHandlerMap}>
            <div id="app"
                /** Prevent accidentally replace the page when dragging image into card art input. */
                onDrop={() => { }}
                style={{
                    backgroundImage: `url("${process.env.PUBLIC_URL}/asset/image/texture/debut-dark.png"), linear-gradient(180deg, #00000022, #00000044)`,
                    height: isMobileDevice() ? '-webkit-fill-available' : '100vh',
                    ...({
                        '--card-height': `${CanvasConst.height}px`,
                        '--card-width': `${CanvasConst.width}px`,
                    }),
                }}
            >
                {ocgStyleFile && <link rel="stylesheet" type="text/css" href={ocgStyleFile} />}
                <div
                    className={'app-container'}
                    style={{
                        backgroundImage: `url("${process.env.PUBLIC_URL}/asset/image/texture/dark-denim-3.png")`,
                    }}
                >
                    {isInitializing && <StyledAppLoading className="app-loading">
                        {error.length > 0
                            ? <ErrorAlert>
                                {error}
                            </ErrorAlert>
                            : 'Loading fonts and scripts...'}
                    </StyledAppLoading>}
                    {/* <div className="card-filter-panel"></div> */}
                    <div className={`card-preview-panel ${isTainted ? 'export-tainted' : 'export-normal'}`}>
                        <StyledDataButtonPanelContainer className="data-button-panel">
                            <div className="imexport">
                                <Tooltip overlay={allowHotkey ? <>Ctrl-D / ⌘-D</> : null}>
                                    <button onClick={exportData}>Export Data</button>
                                </Tooltip>
                                <Tooltip overlay={allowHotkey ? <>Ctrl-E / ⌘-E</> : null}>
                                    <button onClick={importData}>Import Data</button>
                                </Tooltip>
                            </div>
                            <DownloadButton ref={downloadButtonRef}
                                canvasMap={canvasMap}
                                imageChangeCount={imageChangeCount}
                                isTainted={isTainted}
                                isInitializing={isInitializing}
                                onDownloadError={alertDownloadError}
                            />
                            {isTainted && <div id="save-button-tainted" className="save-button-container">
                                <span>Manual save by right click the card<br />→ "Save image as..." {TaintedCanvasWarning}</span>
                            </div>}
                        </StyledDataButtonPanelContainer>
                        <div className="card-canvas-container">
                            <StyledCardCanvasGroupContainer className="card-canvas-group">
                                <Tooltip title="Reset">
                                    <ResetButton className="reset-button" onClick={() => {
                                        const consent = window.confirm(
                                            'This will reset your card information back to default, make sure you export the current data first!',
                                        );

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
                                <Tooltip title={<>
                                    Original size
                                    {allowHotkey ? <><br />Ctrl-B / ⌘-B</> : null}
                                </>}>
                                    <LightboxButton className="lightbox-button" onClick={() => setLightboxVisible(cur => !cur)}>
                                        <ZoomInOutlined />
                                    </LightboxButton>
                                </Tooltip>
                                <canvas id="export-canvas" key={canvasKey + 0.1} ref={drawCanvasRef} width={CanvasWidth} height={CanvasHeight} />
                                {/** Overlay guarding seems very janky, cursor should suffix for now */}
                                <div id="export-canvas-guard" onContextMenu={e => e.preventDefault()}>
                                    {/* <div className="canvas-guard-alert">Generating...</div> */}
                                </div>
                                {/* <canvas id="artCanvas" ref={artCanvasRef} width={CanvasWidth} height={963} /> */}
                                <canvas id="frameCanvas" key={canvasKey} ref={frameCanvasRef} width={CanvasWidth} height={CanvasHeight} />
                                <canvas id="nameCanvas" ref={nameCanvasRef} width={CanvasWidth} height={148} />
                                <canvas id="cardIconCanvas" ref={cardIconCanvasRef} width={CanvasWidth} height={222} />
                                <canvas id="pendulumScaleCanvas" ref={pendulumScaleCanvasRef} width={CanvasWidth} height={889} />
                                <canvas id="pendulumEffectCanvas" ref={pendulumEffectCanvasRef} width={CanvasWidth} height={889} />
                                <canvas id="typeCanvas" ref={typeCanvasRef} width={CanvasWidth} height={1037} />
                                <canvas id="effectCanvas" ref={effectCanvasRef} width={CanvasWidth} height={1111} />
                                <canvas id="statCanvas" ref={statCanvasRef} width={CanvasWidth} height={CanvasHeight} />
                                <canvas id="setIdCanvas" ref={setIdCanvasRef} width={CanvasWidth} height={CanvasHeight} />
                                <canvas id="passwordCanvas" ref={passwordCanvasRef} width={CanvasWidth} height={CanvasHeight} />
                                <canvas id="creatorCanvas" ref={creatorCanvasRef} width={CanvasWidth} height={CanvasHeight} />
                                <canvas id="stickerCanvas" ref={stickerCanvasRef} width={CanvasWidth} height={CanvasHeight} />
                                <canvas id="finishCanvas" ref={finishCanvasRef} width={CanvasWidth} height={CanvasHeight} />
                                <canvas className="crop-canvas" ref={artworkCanvasRef} />
                                <canvas className="crop-canvas" ref={backgroundCanvasRef} />
                            </StyledCardCanvasGroupContainer>
                        </div>
                    </div>
                    {isInitializing === false && <CardInputPanel
                        ref={cardInputRef}
                        artworkCanvas={artworkCanvasRef.current}
                        backgroundCanvas={backgroundCanvasRef.current}
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
                <StyledByMe className="by-me">
                    Made by Lauqerm <img src="https://i.imgur.com/Ix5cq8k.png" alt="avatar" />
                </StyledByMe>
            </div>
        </HotKeys>
    );
}

export default App;
