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
    NameStyle,
} from './model';
import {
    forceRefocus,
    isMobileDevice,
    isTouchDevice,
    mergeClass,
} from './util';
import {
    BatchConverter,
    CardInputPanel,
    CardInputPanelRef,
    CardManagerPanel,
    DownloadButton,
    DownloadButtonRef,
    ExportPanel,
    ExportPanelRef,
    ImportPanel,
    ImportPanelRef,
    ResolutionButton,
} from './page';
import WebFont from 'webfontloader';
import {
    changeCardFormat,
    FramePreset,
    getLanguage,
    retrieveSavedCard,
    useCard,
    useCarderDb,
    useCardList,
    useGlobal,
    useGlobalMemory,
    useI18N,
    useOCGFont,
    useSetting,
} from './service';
import { Dropdown, notification, Tooltip } from 'antd';
import { CROPPER_WIDTH, Lightbox, LightboxRef, ResolutionPicker, TaintedCanvasWarning } from './component';
import { clearCanvas } from './draw';
import { ZoomInOutlined, ClearOutlined, GatewayOutlined } from '@ant-design/icons';
import {
    CardPreviewContainer,
    ErrorAlert,
    LightboxButton,
    ResetButton,
    StyledAppLoading,
    StyledByMe,
    CardCanvasGroupContainer,
    StyledDataButtonPanelContainer,
} from './app.styled';
import { configure, HotKeys } from 'react-hotkeys';
import { useShallow } from 'zustand/react/shallow';
import * as Sentry from '@sentry/react';
import Moveable from 'react-moveable';

/** React hotkey setup */
configure({
    ignoreTags: [],
});
const AppGlobalHotkeyMap = {
    EXPORT: ['ctrl+d', 'command+d'],
    IMPORT: ['ctrl+e', 'command+e'],
    MERGE: ['ctrl+g', 'command+g'],
    VIEW: ['ctrl+y', 'command+y'],
    DOWNLOAD: ['ctrl+s', 'command+s'],
};

const { height: CanvasHeight, width: CanvasWidth } = CanvasConst;
function App() {
    const {
        allowHotkey,
        softMode,
        globalScale,
        resolution,
        slidingType,
    } = useSetting(useShallow(({ setting: {
        allowHotkey,
        reduceMotionColor,
        globalScale,
        resolution,
        slidingType,
    } }) => ({
        softMode: reduceMotionColor,
        allowHotkey,
        globalScale,
        resolution,
        slidingType,
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
    const isMobile = isMobileDevice();
    const windowSlidable = !isMobile && !isTouchDevice();
    const [isInitializing, setInitializing] = useState(true);
    const [, setActiveDropzone] = useGlobal('activeDropzone');
    const [error, setError] = useState('');
    const [sourceType, setSourceType] = useState<'offline' | 'online'>('online');
    const { db, dbReady } = useCarderDb();
    const [managerVisible, setManagerVisible] = useState(false);
    const slidingWindowRef = useRef<HTMLDivElement>(null);
    const containerWindowRef = useRef<HTMLDivElement>(null);
    const moveableRef = useRef<Moveable>(null);

    const cardInputRef = useRef<CardInputPanelRef>(null);
    const artworkCanvasRef = useRef<HTMLCanvasElement>(null);
    const backgroundCanvasRef = useRef<HTMLCanvasElement>(null);
    const exportCanvasRef = useRef<HTMLCanvasElement>(null);
    const previewCanvasRef = useRef<HTMLCanvasElement>(null);
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
    const lightboxRef = useRef<LightboxRef>(null);
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
        lightboxRef,
        previewCanvasRef,
    });

    const downloadButtonRef = useRef<DownloadButtonRef>(null);
    const exportPanelRef = useRef<ExportPanelRef>(null);
    const importPanelRef = useRef<ImportPanelRef>(null);

    const [imageChangeCount, setImageChangeCount] = useState(0);

    useEffect(() => {
        /** Each time a drag over event is fired, we keep the heartbeat, and stop it if there is no heartbeat after a while. */
        const stopDrag = () => {
            setActiveDropzone(0);
        };
        let timeoutHandle = window.setTimeout(stopDrag, 200);
        const checkDragHeartbeat: Document['ondragover'] = () => {
            setActiveDropzone(1);
            window.clearTimeout(timeoutHandle);
            timeoutHandle = window.setTimeout(stopDrag, 200);
        };

        document.addEventListener('dragover', checkDragHeartbeat);

        return () => {
            document.removeEventListener('dragover', checkDragHeartbeat);
        };
    }, [setActiveDropzone]);

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
    /** Fix weird issue when frame layer does not render correctly when manager's visibility is changed. Happens on Opera GX */
    useEffect(() => {
        setImageChangeCount(cnt => cnt + 1);
    }, [managerVisible]);
    useEffect(() => {
        setImageChangeCount(cnt => cnt + 1);
        if (slidingType === 'auto' && slidingWindowRef.current) {
            slidingWindowRef.current.style.transform = '';
        }
    }, [slidingType]);
    useEffect(() => {
        (async () => {
            try {
                if (db && isLanguageLoading === false && language) {
                    const layoutPresetTx = db.transaction('presetLayoutStore', 'readonly');
                    const layoutPresetList: {
                        key: string,
                        content: FramePreset,
                    }[] = [];

                    for await (const cursor of layoutPresetTx.store) {
                        const { content, key } = cursor.value;
                        layoutPresetList.push({
                            key,
                            content: JSON.parse(content) as FramePreset,
                        });
                    }
                    await layoutPresetTx.done;
                    useGlobalMemory.getState().updateGlobalMemory({ layoutPresetList });

                    const nameStylePresetTx = db.transaction('presetNameStyleStore', 'readonly');
                    const nameStylePresetList: {
                        key: string,
                        content: Partial<NameStyle>,
                    }[] = [];

                    for await (const cursor of nameStylePresetTx.store) {
                        const { content, key } = cursor.value;
                        nameStylePresetList.push({
                            key,
                            content: JSON.parse(content) as Partial<NameStyle>,
                        });
                    }
                    await nameStylePresetTx.done;
                    useGlobalMemory.getState().updateGlobalMemory({ nameStylePresetList });
                }
            } catch (e) {
                console.error('Error reading database', e);
                notification.error({
                    message: language['error.database-initialize.message'],
                    description: language['error.database-initialize.description'],
                });
            }
        })();
    }, [db, isLanguageLoading, language]);
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
                    'SVN-Times New Roman Italic',
                    'StoneSerif-Italic',
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
                useCardList.getState().setCardList([retrievedCard], retrievedCard.id);
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

        lightboxRef.current?.setVisible(cur => typeof status === 'boolean' ? status : !cur);
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

    const treatNewCard = useCallback((
        decodedCard: Card,
        option?: {
            forcePurityCheck?: boolean,
            writeOnCurrentCard?: boolean,
            addToList?: boolean,
        },
    ) => {
        const {
            addToList,
            forcePurityCheck,
            writeOnCurrentCard,
        } = option ?? {};

        const { setCard, card } = useCard.getState();
        const normalizedCard = writeOnCurrentCard
            ? { ...decodedCard, id: card.id }
            : decodedCard;

        if (addToList) {
            useCardList.getState().addCard(normalizedCard);
        }
        setCard(normalizedCard, forcePurityCheck);
        setImageChangeCount(cnt => cnt + 1);
        cardInputRef.current?.forceCardData(normalizedCard);
        /** Allow navigate input panel right away */
        forceRefocus();
    }, []);

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
        data?: Card,
    ) => {
        if (fromHotkey && !allowHotkey) return;

        event?.preventDefault();
        if (sourceType === 'online' && cardInputRef.current?.isLoading()) {
            window.alert(language['error.export.image-loading.message']);
            return;
        }

        try {
            const cardData = data ?? useCard.getState().card;

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

    const rerenderAllImage = useCallback((crossorigin?: string) => {
        if (crossorigin === 'anonymous') {
            setTainted(false);
            lightboxRef.current?.refresh();
        }
        setImageChangeCount(cnt => cnt + 1);
    }, []);

    const rerenderCardImage: NonNullable<CardInputPanel['onCropChange']> = useCallback((_, sourceType) => {
        setImageChangeCount(cnt => cnt + 1);
        setSourceType(sourceType);
    }, []);

    const markTaintedImage = useCallback(() => {
        setImageChangeCount(cnt => cnt + 1);
        setTainted(true);
    }, []);

    const toggleManagerMode = useCallback((value: boolean) => {
        setManagerVisible(value);
    }, []);

    const isLoading = isLanguageLoading || isInitializing || !dbReady;
    return (
        <HotKeys keyMap={AppGlobalHotkeyMap} handlers={hotkeyHandlerMap}>
            <div id="app"
                /** Prevent accidentally replace the page when dragging image into card art input. */
                onDrop={() => { }}
                onScroll={e => {
                    const currentScrollY = e.currentTarget.scrollTop;
                    if (slidingWindowRef.current && containerWindowRef.current && slidingType === 'auto') {
                        const viewportWidth = document.body.clientWidth;
                        // const viewportHeight = window.innerHeight;
                        const padding = viewportWidth < 1600 ? 0 : 10;
                        const viewportHeight = e.currentTarget.getBoundingClientRect().height;
                        const slidingWindowHeight = slidingWindowRef.current.getBoundingClientRect().height;
                        /** If the sliding window fit entirely inside viewport, just keep their position updated */
                        if (viewportHeight > slidingWindowHeight + padding) {
                            const threshold = Math.max(
                                0,
                                containerWindowRef.current.getBoundingClientRect().height - slidingWindowHeight
                            );
                            slidingWindowRef.current.style.transform = `translateY(${Math.max(
                                0,
                                Math.min(threshold, currentScrollY) - padding,
                            )}px)`;
                        } else {
                            /** It's not worth to deal with this case right now, as the UX here is very complex */
                            slidingWindowRef.current.style.transform = '';
                        }
                    }
                }}
                className={`language-${languageInfo.codeName} manager_${managerVisible ? 'visible' : 'hidden'}`}
                style={{
                    backgroundImage: `url("${process.env.PUBLIC_URL
                        }/asset/image/texture/debut-dark.png"), linear-gradient(180deg, #00000022, #00000044)`,
                    height: isMobile ? '-webkit-fill-available' : '100vh',
                    ...({
                        '--card-height': `${CanvasHeight * globalScale}px`,
                        '--card-width': `${CanvasWidth * globalScale}px`,
                        '--global-scale': `${globalScale}`,
                        '--cropper-width': `${CROPPER_WIDTH}px`,
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
                    <div ref={containerWindowRef} className={mergeClass(
                        'card-preview-panel',
                        isTainted ? 'export-tainted' : 'export-normal',
                        `sliding-type_${slidingType}`,
                    )}>
                        <div ref={slidingWindowRef} className="preview-sliding-window">
                            <StyledDataButtonPanelContainer className="data-button-panel">
                                <div className="imexport">
                                    <ExportPanel ref={exportPanelRef}
                                        tainted={isTainted}
                                        artworkCanvas={artworkCanvasRef.current}
                                        onRequireExportData={exportData}
                                        onRequireDownload={() => downloadButtonRef.current?.download()}
                                        onClose={forceRefocus}
                                    />
                                    <div />
                                    <ImportPanel ref={importPanelRef}
                                        onImport={treatNewCard}
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
                                    globalScale={globalScale}
                                    onDownloadError={alertDownloadError}
                                />
                                {isTainted && <div id="save-button-tainted" className="save-button-container save-button-tainted">
                                    <div className="alert-label">
                                        {language['alert.download.tainted-first-line']}<br />
                                        {language['alert.download.tainted-second-line']} <TaintedCanvasWarning />
                                    </div>
                                    <Dropdown
                                        className="save-button-dropdown"
                                        placement="bottomRight"
                                        overlay={<ResolutionPicker onChange={() => forceRefocus()} />}
                                    >
                                        <ResolutionButton className="resolution-option" onClick={e => e.stopPropagation()}>
                                            <GatewayOutlined className="resolution-icon" />
                                            <span className="resolution-overlay">{resolution[1]}</span>
                                        </ResolutionButton>
                                    </Dropdown>
                                </div>}
                            </StyledDataButtonPanelContainer>
                            <CardPreviewContainer className="card-preview-container">
                                <Tooltip title={language['generic.reset.tooltip']}>
                                    <ResetButton
                                        className="reset-button"
                                        onClick={() => {
                                            const consent = window.confirm(language['prompt.reset.message']);

                                            if (consent) {
                                                const { setCard, card } = useCard.getState();
                                                const defaultCard = { id: card.id, ...getDefaultCard() };
                                                const contextualDefaultCardData = card.format === 'tcg'
                                                    ? defaultCard
                                                    : changeCardFormat(defaultCard, 'ocg');

                                                setCard(contextualDefaultCardData, true);
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
                                    {allowHotkey ? <><br />Ctrl+Y / ⌘+Y</> : null}
                                </div>}>
                                    <LightboxButton className="lightbox-button" onClick={() => displayLightbox()}>
                                        <ZoomInOutlined />
                                    </LightboxButton>
                                </Tooltip>
                                {/** Preview canvas is used to display a presentable card for user, in contrast of the actual rendered card below.
                                 * The reason is because when the card become bigger, we must resize it down to display it fully, which lead to a blurry or too sharp image. Canvas resizing is better than css resizing, so we use a separate smaller canvas to preview, but forward all user-action through it so user can still copy the card as full-size.
                                 */}
                                <canvas
                                    key={(lightboxRef.current?.getCanvasKey() ?? 0) + 0.2}
                                    id="preview-canvas"
                                    ref={previewCanvasRef}
                                    width={CanvasWidth}
                                    height={CanvasHeight}
                                />
                                <CardCanvasGroupContainer className="card-canvas-group">
                                    <canvas
                                        key={(lightboxRef.current?.getCanvasKey() ?? 0) + 0.1}
                                        id="export-canvas"
                                        ref={exportCanvasRef}
                                        width={CanvasWidth * globalScale}
                                        height={CanvasHeight * globalScale}
                                    />
                                    {/** Overlay guarding seems very janky, cursor should suffix for now */}
                                    <div id="export-canvas-guard" onContextMenu={e => e.preventDefault()}>
                                        {/* <div className="canvas-guard-alert">Generating...</div> */}
                                    </div>
                                    <canvas id="frameCanvas"
                                        key={(lightboxRef.current?.getCanvasKey() ?? 0)}
                                        ref={frameCanvasRef}
                                        width={CanvasWidth * globalScale}
                                        height={CanvasHeight * globalScale}
                                    />
                                    <canvas id="nameCanvas"
                                        ref={nameCanvasRef}
                                        width={CanvasWidth * globalScale}
                                        height={148 * globalScale}
                                    />
                                    <canvas id="cardIconCanvas"
                                        ref={cardIconCanvasRef}
                                        width={CanvasWidth * globalScale}
                                        height={222 * globalScale}
                                    />
                                    <canvas id="pendulumScaleCanvas"
                                        ref={pendulumScaleCanvasRef}
                                        width={CanvasWidth * globalScale}
                                        height={920 * globalScale}
                                    />
                                    <canvas id="pendulumEffectCanvas"
                                        ref={pendulumEffectCanvasRef}
                                        width={CanvasWidth * globalScale}
                                        height={920 * globalScale}
                                    />
                                    <canvas id="typeCanvas"
                                        ref={typeCanvasRef}
                                        width={CanvasWidth * globalScale}
                                        height={CanvasHeight * globalScale}
                                    />
                                    <canvas id="effectCanvas"
                                        ref={effectCanvasRef}
                                        width={CanvasWidth * globalScale}
                                        height={CanvasHeight * globalScale}
                                    />
                                    <canvas id="statCanvas"
                                        ref={statCanvasRef}
                                        width={CanvasWidth * globalScale}
                                        height={CanvasHeight * globalScale}
                                    />
                                    <canvas id="setIdCanvas"
                                        ref={setIdCanvasRef}
                                        width={CanvasWidth * globalScale}
                                        height={CanvasHeight * globalScale}
                                    />
                                    <canvas id="passwordCanvas"
                                        ref={passwordCanvasRef}
                                        width={CanvasWidth * globalScale}
                                        height={CanvasHeight * globalScale}
                                    />
                                    <canvas id="creatorCanvas"
                                        ref={creatorCanvasRef}
                                        width={CanvasWidth * globalScale}
                                        height={CanvasHeight * globalScale}
                                    />
                                    <canvas id="stickerCanvas"
                                        ref={stickerCanvasRef}
                                        width={CanvasWidth * globalScale}
                                        height={CanvasHeight * globalScale}
                                    />
                                    <canvas id="finishCanvas"
                                        ref={finishCanvasRef}
                                        width={CanvasWidth * globalScale}
                                        height={CanvasHeight * globalScale}
                                    />
                                    <canvas className="crop-canvas"
                                        ref={artworkCanvasRef}
                                    />
                                    <canvas className="crop-canvas"
                                        ref={backgroundCanvasRef}
                                    />
                                </CardCanvasGroupContainer>
                            </CardPreviewContainer>
                        </div>
                        {windowSlidable && <Moveable
                            ref={moveableRef}
                            target={slidingWindowRef}
                            className="sliding-movable-window"
                            draggable={true}
                            throttleDrag={1}
                            edgeDraggable={false}
                            startDragRotate={0}
                            throttleDragRotate={0}
                            throttleScale={0}
                            snappable={true}
                            pinchable={true}
                            snapContainer={'.card-preview-panel'}
                            bounds={{
                                left: 0,
                                top: 0,
                                right: 0,
                                bottom: 0,
                                position: 'css',
                            }}
                            onDrag={e => {
                                if (slidingType === 'manual') e.target.style.transform = e.transform;
                            }}
                        />}
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
                <CardManagerPanel
                    language={language}
                    onVisibleChange={toggleManagerMode}
                    onSelect={treatNewCard}
                    onRequestImport={() => {
                        importPanelRef.current?.requestImport('new');
                    }}
                />
                {/** Pixel perfect for card image */}
                <Lightbox
                    ref={lightboxRef}
                    globalScale={globalScale}
                />
                <StyledByMe className="by-me">
                    Made by Lauqerm <img src="https://i.imgur.com/RY6IRqn.png" alt="avatar" />
                </StyledByMe>
            </div>
        </HotKeys>
    );
}

export default App;
