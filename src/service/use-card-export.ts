import { useCallback, useEffect, useRef } from 'react';
import { compressCardData, insertUrlParam, normalizeCardName } from 'src/util';
import { useCard } from './use-card';
import { CardOpacity, PendulumSize } from 'src/model';
import { useSetting } from './use-setting';
import { notification } from 'antd';
import { useLanguage } from './use-i18n';
import { useBatchDownload } from './use-batch-download';

export type UseCardExport = {
    isTainted: boolean,
    isInitializing: boolean,
    exportCanvasRef: React.RefObject<HTMLCanvasElement>,
    exportRef: React.MutableRefObject<{
        currentPipeline: Promise<void>;
        pipelineRunning: boolean;
    }>,
    onExport: (exportProps: {
        isPendulum: boolean,
        opacity: Partial<CardOpacity>,
        pendulumSize: PendulumSize,
        isRelevant: () => boolean,
    }) => Promise<void>,
    onDownloadError: () => void,
    onDownloadComplete: () => void,
};
export const useCardExport = ({
    isTainted,
    isInitializing,
    exportCanvasRef,
    exportRef,
    onExport,
    onDownloadError,
    onDownloadComplete,
}: UseCardExport) => {
    const language = useLanguage();
    const {
        card: currentCard,
    } = useCard();
    const {
        addToBatch,
        batchDataMap,
        isBatchDownloading,
    } = useBatchDownload();
    const resolution = useSetting(state => state.setting.resolution);
    const exportScheme = useSetting(state => state.setting.exportScheme);
    const {
        opacity,
        name,
        isPendulum,
        pendulumSize,
    } = currentCard;
    const normalizedName = normalizeCardName(name);
    const pendingSave = useRef(false);

    const getCardDataUrl = useCallback((size: [number, number] = resolution) => {
        const drawCanvas = exportCanvasRef.current;
        /** Clone node so we can resize it as will */
        const clonedCanvas = drawCanvas?.cloneNode() as HTMLCanvasElement | null;
        const drawCanvasContext = drawCanvas?.getContext('2d');
        const clonedCanvasContext = clonedCanvas?.getContext('2d');
        if (drawCanvas && drawCanvasContext
            && clonedCanvas && clonedCanvasContext
            && !isTainted
        ) {
            if (size) {
                clonedCanvas.width = size[0];
                clonedCanvas.height = size[1];
            }
            /** Resize here */
            clonedCanvasContext.drawImage(
                drawCanvas,
                0, 0, drawCanvas.width, drawCanvas.height,
                0, 0, clonedCanvas.width, clonedCanvas.height,
            );

            return clonedCanvas.toDataURL('image/png');
        }
    }, [exportCanvasRef, isTainted, resolution]);
    const addToCurrentBatch = useCallback(async (
        cardName: string,
        cardId: string,
        size: [number, number] = resolution,
    ) => {
        try {
            const cardData = getCardDataUrl(size);
            if (typeof cardData !== 'string') throw new Error('Failed to add card to batch');
            const fetchedDataUrl = await fetch(cardData);
            const blob = await fetchedDataUrl.blob();
            if (isBatchDownloading) addToBatch(cardId, cardName, blob);
        } catch (e) {
            onDownloadError();
        }
        document.querySelector('#export-canvas-guard')?.classList.remove('guard-on');
        onDownloadComplete();
    }, [addToBatch, getCardDataUrl, isBatchDownloading, onDownloadComplete, onDownloadError, resolution]);
    const download = useCallback((size: [number, number] = resolution) => {
        try {
            const normalizedName = normalizeCardName(name);
            const cardData = getCardDataUrl(size);
            if (typeof cardData !== 'string') throw new Error('Failed to trigger automatic download');
            var link = document.createElement('a');
            link.download = normalizedName
                ? `${normalizedName}.png`
                : 'card.png';
            link.href = cardData;
            link.click();
        } catch (e) {
            onDownloadError();
        }
        document.querySelector('#export-canvas-guard')?.classList.remove('guard-on');
        onDownloadComplete();
    }, [resolution, onDownloadComplete, name, getCardDataUrl, onDownloadError]);
    const onSave = (size?: [number, number]) => {
        document.querySelector('#export-canvas-guard')?.classList.add('guard-on');
        const queuingSize = size ? [...size] as [number, number] : undefined;
        /** Prevent split-second download. By using hotkey user is able to perform extremely fast save process before the pipeline start running, thus getting the previous card data instead of the most recent one. */
        setTimeout(() => {
            if (exportRef.current.pipelineRunning === false) {
                download(queuingSize);
            } else pendingSave.current = true;
        }, 200);
    };

    useEffect(() => {
        let relevant = true;
        setTimeout(() => {
            if (relevant) {
                document.title = normalizedName
                    ? `${normalizedName} - Yu-Gi-Oh Carder`
                    : 'Yu-Gi-Oh Carder';
            }
        }, 500);

        return () => {
            relevant = false;
        };
    }, [normalizedName]);

    useEffect(() => {
        let saveBeforeReload = () => {
            localStorage.setItem('card-data', JSON.stringify(currentCard));
            localStorage.setItem('card-version', process.env.REACT_APP_VERSION ?? 'unknown');
        };
        window.addEventListener('beforeunload', saveBeforeReload);

        return () => {
            window.removeEventListener('beforeunload', saveBeforeReload);
        };
    });

    useEffect(() => {
        let relevant = true;
        let confirmReload = (ev: Event) => {
            ev.preventDefault();
            return language['prompt.warning.on-leave.label'];
        };
        if (isInitializing === false) {
            try {
                localStorage.setItem('card-data', JSON.stringify(currentCard));
                localStorage.setItem('card-version', process.env.REACT_APP_VERSION ?? 'unknown');
            } catch (e) {
                /** Ensure it does not fire repeatedly */
                const key = 'fail-to-set-storage-notification';
                notification.close(key);
                notification.error({
                    key,
                    message: language['error.card-max-size.message'],
                    description: language['error.card-max-size.description'],
                });
            }

            /**
             * Run export pipeline:
             * - Immediately mark the pipeline as running, then run wait for the current pipeline (1).
             * - If the (1) pipeline is no longer relevant, end effect.
             * - Otherwise (the current pipeline is the newest), start export pipeline, this export pipeline is now the current pipeline (2).
             * - If the (2) pipeline is no longer relevant, end effect.
             * - Otherwise finish the pipeline and write result, also mark the pipeline as no longer running.
             */
            (async () => {
                const canvasRef = exportCanvasRef.current;
                if (canvasRef) {
                    window.addEventListener('beforeunload', confirmReload);
                    document.getElementById('export-canvas')?.classList.remove('js-export-available');
                    document.getElementById('preview-canvas')?.classList.remove('js-export-available');
                    document.getElementById('export-canvas-guard')?.setAttribute('style', '');
                    document.getElementById('save-button-waiting')?.setAttribute('style', 'display: block');

                    exportRef.current.pipelineRunning = true;
                    /** Artifical delay, turn on to test export timing */
                    // await new Promise(resolve => setTimeout(() => resolve(true), 3000));
                    await exportRef.current.currentPipeline;

                    if (relevant) {
                        exportRef.current.currentPipeline = onExport({
                            isPendulum,
                            opacity,
                            pendulumSize,
                            isRelevant: () => relevant,
                        });

                        await exportRef.current.currentPipeline;
                        if (relevant) {
                            /** Never include art data here, it will easily exceed the limit of url length */
                            const normalizedCard = { ...currentCard, artData: '', backgroundData: '' };
                            const condensedCard = JSON.stringify(compressCardData(normalizedCard));
                            if (typeof condensedCard === 'string') insertUrlParam('data', condensedCard);

                            document.getElementById('export-canvas')?.classList.add('js-export-available');
                            document.getElementById('preview-canvas')?.classList.add('js-export-available');
                            document.getElementById('export-canvas-guard')?.setAttribute('style', 'display: none');
                            document.getElementById('save-button-waiting')?.setAttribute('style', 'display: none');
                            window.removeEventListener('beforeunload', confirmReload);
                            exportRef.current.pipelineRunning = false;

                            if (pendingSave.current) {
                                pendingSave.current = false;
                                download();
                            }
                            if (isBatchDownloading && !batchDataMap[normalizedCard.id]) {
                                setTimeout(() => {
                                    addToCurrentBatch(
                                        exportScheme === 'with-name'
                                            ? `${normalizedName}.png`
                                            : `${normalizedCard.setId} - ${normalizedName}.png`,
                                        normalizedCard.id,
                                    );
                                }, 200);
                            }
                        }
                    }
                }
            })();
        }

        return () => {
            window.removeEventListener('beforeunload', confirmReload);
            relevant = false;
        };
    });

    return {
        onSave,
        isPipelineRunning: () => exportRef.current.pipelineRunning,
    };
};