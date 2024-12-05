import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import 'antd/dist/antd.css';
import './app.scss';
import './style/index.scss';
import './responsive.scss';
import './reduce-color-motion.scss';
import {
    CanvasConst,
    Card,
    getDefaultCard,
} from './model';
import {
    compressCardData,
    downloadBlob,
    forceRefocus,
    isMobileDevice,
    normalizedCardName,
    ygoCarderToCardMakerData,
} from './util';
import { BatchConverter, CardInputPanel, CardInputPanelRef, DownloadButton, DownloadButtonRef, ImportButton, StyledActionIconButton } from './page';
import WebFont from 'webfontloader';
import {
    changeCardFormat,
    getLanguage,
    retrieveSavedCard,
    decodeCard,
    useCard,
    useI18N,
    useOCGFont,
    useSetting,
} from './service';
import { Dropdown, Menu, Modal, notification, Tooltip } from 'antd';
import { TaintedCanvasWarning } from './component';
import { clearCanvas } from './draw';
import { ZoomInOutlined, ClearOutlined, DownloadOutlined } from '@ant-design/icons';
import {
    ErrorAlert,
    LightboxButton,
    ResetButton,
    StyledAppLoading,
    StyledByMe,
    StyledCardCanvasGroupContainer,
    StyledDataButtonPanelContainer,
} from './app.styled';
import { configure, HotKeys } from 'react-hotkeys';
import { useShallow } from 'zustand/react/shallow';

/** React hotkey setup */
configure({
    ignoreTags: [],
});
const AppGlobalHotkeyMap = {
    EXPORT: ['ctrl+d', 'command+d'],
    IMPORT: ['ctrl+e', 'command+e'],
    MERGE: ['ctrl+g', 'command+g'],
    VIEW: ['ctrl+b', 'command+b'],
    DOWNLOAD: ['ctrl+s', 'command+s'],
};

const { height: CanvasHeight, width: CanvasWidth } = CanvasConst;
function App() {
    const {
        allowHotkey,
        softMode,
    } = useSetting(useShallow(({ setting: { allowHotkey, reduceMotionColor } }) => ({
        softMode: reduceMotionColor,
        allowHotkey,
    })));
    const {
        isInitiating: isLanguageInitiating,
        isLoading: isLanguageLoading,
        language,
        isMetadataReady,
        languageInfo,
        initiate: initiateI18N,
        loadDefaultLanguage,
    } = useI18N(useShallow(({
        isInitiating,
        isLoading,
        language,
        isMetadataReady,
        languageInfo,
        initiate,
        loadDefaultLanguage,
    }) => ({
        isInitiating,
        isLoading,
        language,
        isMetadataReady,
        languageInfo,
        initiate,
        loadDefaultLanguage,
    })));
    const [isInitializing, setInitializing] = useState(true);
    const [error, setError] = useState('');
    const [sourceType, setSourceType] = useState<'offline' | 'online'>('online');
    const [canvasKey, setCanvasKey] = useState(0);
    const [lightboxVisible, setLightboxVisible] = useState(false);

    const cardInputRef = useRef<CardInputPanelRef>(null);
    const artworkCanvasRef = useRef<HTMLCanvasElement>(null);
    const backgroundCanvasRef = useRef<HTMLCanvasElement>(null);
    const drawCanvasRef = useRef<HTMLCanvasElement>(null);
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
        initiateI18N();
    }, [initiateI18N]);
    useEffect(() => {
        if (isMetadataReady) loadDefaultLanguage();
    }, [isMetadataReady, loadDefaultLanguage]);
    /** Dynamic style, we force inline style into body because app component's style cannot affect overlay component. */
    useEffect(() => {
        const applyList = [
            'font-family',
            'letter-spacing',
            '--width-label',
        ];

        applyList.forEach(styleName => {
            document.body.style.setProperty(styleName, languageInfo.style?.[styleName] ?? '' as any);
        });
    }, [languageInfo]);

    useEffect(() => {
        const ctx = drawCanvasRef.current?.getContext('2d');
        const setCard = useCard.getState().setCard;
        if (ctx) {
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.imageSmoothingQuality = 'high';
            clearCanvas(ctx);
        }

        if (isLanguageInitiating === false) WebFont.load({
            custom: {
                families: [
                    'Matrix-Bold',
                    'MatrixBoldSmallCaps',
                    'MatrixBook',
                    'MatrixRegularSmallCaps',
                    'RoGSanSrfStd-Bd',
                    'YuGiOhITCStoneSerifBSc',
                    'matrix',
                    'palatino-linotype-bold',
                    'stone-serif-bold',
                    'stone-serif-regular',
                ],
                urls: ['asset/font.css'],
            },
            active: () => {
                const retrievedCard = retrieveSavedCard();

                setCard(retrievedCard);
                setInitializing(false);
            },
            fontinactive(familyName, fvd) {
                console.error('TCG fontinactive', familyName, fvd);
                notification.error({
                    message: getLanguage()['error.load.font.tcg'](familyName),
                });
            },
            inactive: () => {
                setError(getLanguage()['error.load.font.all-tcg']);
                setInitializing(false);
            },
        });
    }, [isLanguageInitiating]);

    const {
        styleContent: ocgStyleFile,
    } = useOCGFont({
        isLanguageInitiating,
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
            setInitializing(false);
        },
        onInactive: () => {
            setError(getLanguage()['error.load.font.all-ocg']);
            setInitializing(false);
        },
        onFontInactive: (familyName, fvd) => {
            console.error('OCG fontinactive', familyName, fvd);
            notification.error({
                message: getLanguage()['error.load.font.ocg'](familyName),
            });
        }
    });

    const [isTainted, setTainted] = useState(false);

    useEffect(() => {
        const documentClassList = document.body.classList;

        if (softMode) documentClassList.add('reduced-color-motion');
        else documentClassList.remove('reduced-color-motion');
    }, [softMode]);

    const displayLightbox = useCallback((status?: boolean, fromHotkey = false) => {
        if (fromHotkey && !allowHotkey) return;

        setLightboxVisible(cur => typeof status === 'boolean' ? status : !cur);
    }, [allowHotkey]);

    const importData = useCallback((
        event?: { preventDefault: () => void },
        fromHotkey = false,
        directData: string | undefined = undefined,
    ) => {
        if (fromHotkey && !allowHotkey && !directData) return;

        event?.preventDefault();
        try {
            const cardData = directData
                ? directData
                : window.prompt(language['prompt.import.message']);
            const setCard = useCard.getState().setCard;

            if (cardData) {
                const {
                    card: decodedCard,
                    isPartial,
                } = decodeCard(cardData);

                if (isPartial) {
                    notification.info({
                        message: language['service.decode.partial.message'],
                        description: language['service.decode.partial.description'],
                    });
                }

                setCard(decodedCard);
                setImageChangeCount(cnt => cnt + 1);
                cardInputRef.current?.forceCardData(decodedCard);
                /** Allow navigate input panel right away */
                forceRefocus();
            }
        } catch (e) {
            console.error(e);
            notification.error({
                message: language['error.import.error.message'],
                description: language['error.import.error.description'],
            });
        }
    }, [allowHotkey, language]);

    const mergeData = useCallback((event?: { preventDefault: () => void }, fromHotkey = false) => {
        if (fromHotkey && !allowHotkey) return;

        event?.preventDefault();
        try {
            const cardData = window.prompt(language['prompt.import.message']);
            const setCard = useCard.getState().setCard;

            if (cardData) {
                const {
                    card: decodedCard,
                    isPartial,
                } = decodeCard(cardData, useCard.getState().card);

                if (isPartial) {
                    notification.info({
                        message: language['service.decode.partial.message'],
                        description: language['service.decode.partial.description'],
                    });
                }

                setCard(decodedCard);
                setImageChangeCount(cnt => cnt + 1);
                cardInputRef.current?.forceCardData(decodedCard);
                /** Allow navigate input panel right away */
                forceRefocus();
            }
        } catch (e) {
            console.error(e);
            notification.error({
                message: language['error.import.error.message'],
                description: language['error.import.error.description'],
            });
        }
    }, [allowHotkey, language]);

    const exportData = useCallback((
        event?: { preventDefault: () => void },
        fromHotkey = false,
        download = false,
        converter: (
            card: Card,
            artRef: HTMLCanvasElement | null,
        ) => ({ isPartial: boolean, result: Record<string, any> }) = card => ({
            isPartial: false,
            result: compressCardData(card),
        }),
    ) => {
        if (fromHotkey && !allowHotkey && !download) return;

        event?.preventDefault();
        if (sourceType === 'offline' && download === false) {
            window.alert(language['prompt.export.offline-warning.message']);
        }
        if (sourceType === 'online' && cardInputRef.current?.isLoading()) {
            window.alert(language['error.export.image-loading.message']);
            return;
        }

        try {
            const cardData = useCard.getState().card;
            const {
                isPartial,
                result: exportableCard,
            } = converter(cardData, artworkCanvasRef.current);

            if (isPartial) {
                notification.info({
                    message: language['service.decode.partial.message'],
                    description: language['service.decode.partial.description'],
                });
            }
            if (download) {
                const blob = new Blob([`${JSON.stringify(exportableCard)}`], { type: 'application/json' });
                downloadBlob(
                    normalizedCardName(cardData.name),
                    blob,
                    'application/json',
                );
            } else {
                window.prompt(
                    language['prompt.export.message'],
                    `${JSON.stringify(exportableCard)}`,
                );
            }
        } catch (e) {
            console.error(e);
            notification.error({
                message: language['error.export.message'],
                description: language['error.export.description'],
            });
        }
    }, [allowHotkey, language, sourceType]);

    const downloadFromHotkey = useCallback((event?: { preventDefault: () => void }, fromHotkey = false) => {
        if (fromHotkey && !allowHotkey) return;

        event?.preventDefault();
        downloadButtonRef.current?.download();
    }, [allowHotkey]);

    const hotkeyHandlerMap = useMemo(() => {
        return {
            IMPORT: (event?: { preventDefault: () => void }) => importData(event, true),
            MERGE: (event?: { preventDefault: () => void }) => mergeData(event, true),
            EXPORT: (event?: { preventDefault: () => void }) => exportData(event, true),
            VIEW: () => displayLightbox(true, true),
            DOWNLOAD: (event?: { preventDefault: () => void }) => downloadFromHotkey(event, true),
        };
    }, [downloadFromHotkey, exportData, importData, mergeData, displayLightbox]);

    const alertDownloadError = useCallback(() => {
        setTainted(true);
        alert(language['prompt.download.tainted.message']);
    }, [language]);

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

    const isLoading = isLanguageLoading || isInitializing;
    return (
        <HotKeys keyMap={AppGlobalHotkeyMap} handlers={hotkeyHandlerMap}>
            <div id="app"
                /** Prevent accidentally replace the page when dragging image into card art input. */
                onDrop={() => { }}
                className={`language-${languageInfo.codeName}`}
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
                    {isLoading && <StyledAppLoading className="app-loading">
                        {error.length > 0
                            ? <ErrorAlert>
                                {error}
                            </ErrorAlert>
                            : languageInfo.initialMessage ?? ''}
                    </StyledAppLoading>}
                    {/* <div className="card-filter-panel"></div> */}
                    <div className={`card-preview-panel ${isTainted ? 'export-tainted' : 'export-normal'}`}>
                        <StyledDataButtonPanelContainer className="data-button-panel">
                            <div className="imexport">
                                <Tooltip overlay={allowHotkey ? <>Ctrl-D / ⌘-D</> : null}>
                                    <button className="primary-button export-button" onClick={exportData}>
                                        {language['button.export.label']}
                                    </button>
                                </Tooltip>
                                <Dropdown 
                                    overlay={<Menu onClick={e => e.domEvent.stopPropagation()}>
                                        {[
                                            {
                                                label: language['button.export.for-ygocarder.label'],
                                                converter: undefined,
                                            },
                                            {
                                                label: language['button.export.for-other.label'],
                                                converter: ygoCarderToCardMakerData,
                                            },
                                        ].map(({ converter, label }, index) => {
                                            return <Menu.Item key={`${index}`}
                                                onClick={() => exportData(undefined, false, true, converter)}
                                            >
                                                {label}
                                            </Menu.Item>;
                                        })}
                                    </Menu>}
                                >
                                    <StyledActionIconButton className="secondary-button export-custom">
                                        <DownloadOutlined />
                                    </StyledActionIconButton>
                                </Dropdown>
                                <div />
                                <Tooltip
                                    overlay={allowHotkey
                                        ? <div className="center">
                                            <div>Ctrl-E / ⌘-E</div>
                                            <div>Ctrl-G / ⌘-G{language['prompt.import.merge.tooltip']}</div>
                                        </div>
                                        : null}
                                >
                                    <button
                                        className="primary-button import-button"
                                        onClick={importData}
                                    >
                                        {language['button.import.label']}
                                    </button>
                                </Tooltip>
                                <ImportButton importData={importData} language={language} />
                            </div>
                            <BatchConverter language={language} />
                            <DownloadButton ref={downloadButtonRef}
                                canvasMap={canvasMap}
                                imageChangeCount={imageChangeCount}
                                isTainted={isTainted}
                                isInitializing={isInitializing}
                                onDownloadError={alertDownloadError}
                            />
                            {isTainted && <div id="save-button-tainted" className="save-button-container">
                                <span>
                                    {language['alert.download.tainted-first-line']}<br />
                                    {language['alert.download.tainted-second-line']} <TaintedCanvasWarning /></span>
                            </div>}
                        </StyledDataButtonPanelContainer>
                        <div className="card-canvas-container">
                            <StyledCardCanvasGroupContainer className="card-canvas-group">
                                <Tooltip title={language['button.reset.tooltip']}>
                                    <ResetButton className="reset-button" onClick={() => {
                                        const consent = window.confirm(language['prompt.reset.message']);

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
                                <Tooltip title={<div className="center">
                                    {language['button.full-size.label']}
                                    {allowHotkey ? <><br />Ctrl-B / ⌘-B</> : null}
                                </div>}>
                                    <LightboxButton className="lightbox-button" onClick={() => displayLightbox()}>
                                        <ZoomInOutlined />
                                    </LightboxButton>
                                </Tooltip>
                                <canvas id="export-canvas" key={canvasKey + 0.1} ref={drawCanvasRef} width={CanvasWidth} height={CanvasHeight} />
                                {/** Overlay guarding seems very janky, cursor should suffix for now */}
                                <div id="export-canvas-guard" onContextMenu={e => e.preventDefault()}>
                                    {/* <div className="canvas-guard-alert">Generating...</div> */}
                                </div>
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
                    {isLoading === false && <CardInputPanel
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
                    Made by Lauqerm <img src="https://i.imgur.com/RY6IRqn.png" alt="avatar" />
                </StyledByMe>
            </div>
        </HotKeys>
    );
}

export default App;
