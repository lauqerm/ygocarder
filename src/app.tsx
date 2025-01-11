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
    forceRefocus,
    isMobileDevice,
} from './util';
import {
    BatchConverter,
    CardInputPanel,
    CardInputPanelRef,
    DownloadButton,
    DownloadButtonRef,
    ExportPanel,
    ExportPanelRef,
    ImportPanel,
    ImportPanelRef,
} from './page';
import WebFont from 'webfontloader';
import {
    changeCardFormat,
    getLanguage,
    retrieveSavedCard,
    useCard,
    useI18N,
    useOCGFont,
    useSetting,
} from './service';
import { Modal, notification, Tooltip } from 'antd';
import { TaintedCanvasWarning } from './component';
import { clearCanvas } from './draw';
import { ZoomInOutlined, ClearOutlined } from '@ant-design/icons';
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
import * as Sentry from '@sentry/react';

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
    const exportCanvasRef = useRef<HTMLCanvasElement>(null);
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
        exportCanvasRef,
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
    const exportPanelRef = useRef<ExportPanelRef>(null);
    const importPanelRef = useRef<ImportPanelRef>(null);

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
        const ctx = exportCanvasRef.current?.getContext('2d');
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
            const ctx = exportCanvasRef.current?.getContext('2d');
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

    const sentryInitialized = useRef(false);
    const reportTarget = document.getElementById('sentry-bug-report');
    useEffect(() => {
        if (reportTarget && language && sentryInitialized.current === false && Sentry.isInitialized() === false) {
            sentryInitialized.current = true;

            Sentry.init({
                dsn: 'https://32e20d849c5724b2e63eab9d0a57c165@o4508424630697984.ingest.us.sentry.io/4508424632401920',
                integrations: [
                    Sentry.browserTracingIntegration(),
                    Sentry.replayIntegration(),
                    Sentry.feedbackIntegration({
                        colorScheme: 'system',
                        autoInject: false,
                    }).attachTo(reportTarget, {
                        formTitle: language['contributor.bug-report.tooltip'],
                        nameLabel: language['contributor.bug-report.name.label'],
                        namePlaceholder: language['contributor.bug-report.name.placeholder'],
                        isEmailRequired: false,
                        showEmail: false,
                        messageLabel: language['contributor.bug-report.message.label'],
                        messagePlaceholder: language['contributor.bug-report.message.placeholder'],
                        addScreenshotButtonLabel: language['contributor.bug-report.screenshot.label'],
                        removeScreenshotButtonLabel: language['contributor.bug-report.remove-screenshot.label'],
                        cancelButtonLabel: language['contributor.bug-report.cancel.label'],
                        submitButtonLabel: language['contributor.bug-report.submit.label'],
                        isRequiredLabel: language['contributor.bug-report.required.label'],
                        successMessageText: language['contributor.bug-report.success.label'],
                    }),
                ],
                /** @todo Should we enable dialog here? Because there is no way for us to contact the user back, we will have a very hard time fighting against false positive error. */
                // beforeSend(event) {
                //     // Check if it is an exception, and if so, show the report dialog
                //     if (event.exception && event.event_id) {
                //         Sentry.showReportDialog({
                //             eventId: event.event_id,
                //         });
                //     }
                //     return event;
                // },
                // Tracing
                tracesSampleRate: 1.0, //  Capture 100% of the transactions
                // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
                tracePropagationTargets: ['lauqerm.github.io'],
                // Session Replay
                replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
                replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
            });
        }
    }, [language, reportTarget]);

    const importData = useCallback(async (
        event?: { preventDefault: () => void },
        fromHotkey = false,
    ) => {
        if (fromHotkey && !allowHotkey) return;

        event?.preventDefault();
        importPanelRef.current?.requestImport('replace');
    }, [allowHotkey]);

    const mergeData = useCallback((
        event?: { preventDefault: () => void },
        fromHotkey = false,
    ) => {
        if (fromHotkey && !allowHotkey) return;

        event?.preventDefault();
        importPanelRef.current?.requestImport('merge');
    }, [allowHotkey]);

    const exportData = useCallback((
        event?: { preventDefault: () => void },
        fromHotkey = false,
    ) => {
        if (fromHotkey && !allowHotkey) return;

        event?.preventDefault();
        if (sourceType === 'online' && cardInputRef.current?.isLoading()) {
            window.alert(language['error.export.image-loading.message']);
            return;
        }

        try {
            const cardData = useCard.getState().card;

            exportPanelRef.current?.setCardData(cardData);
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
                                <ExportPanel ref={exportPanelRef}
                                    artworkCanvas={artworkCanvasRef.current}
                                    allowHotkey={allowHotkey}
                                    onRequireExportData={exportData}
                                    onClose={forceRefocus}
                                />
                                <div />
                                <ImportPanel ref={importPanelRef}
                                    onImport={decodedCard => {
                                        const setCard = useCard.getState().setCard;

                                        setCard(decodedCard);
                                        setImageChangeCount(cnt => cnt + 1);
                                        cardInputRef.current?.forceCardData(decodedCard);
                                        /** Allow navigate input panel right away */
                                        forceRefocus();
                                    }}
                                    onClose={forceRefocus}
                                    allowHotkey={allowHotkey}
                                    language={language}
                                />
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
                                    <ResetButton
                                        className="reset-button"
                                        onClick={() => {
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
                                        }}
                                    >
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
                                <canvas
                                    key={canvasKey + 0.1}
                                    id="export-canvas"
                                    ref={exportCanvasRef}
                                    width={CanvasWidth}
                                    height={CanvasHeight}
                                />
                                {/** Overlay guarding seems very janky, cursor should suffix for now */}
                                <div id="export-canvas-guard" onContextMenu={e => e.preventDefault()}>
                                    {/* <div className="canvas-guard-alert">Generating...</div> */}
                                </div>
                                <canvas id="frameCanvas"
                                    key={canvasKey}
                                    ref={frameCanvasRef}
                                    width={CanvasWidth}
                                    height={CanvasHeight}
                                />
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
