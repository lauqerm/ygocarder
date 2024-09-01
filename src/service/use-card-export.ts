import { useCallback, useEffect, useRef } from 'react';
import { compressCardData, insertUrlParam, normalizedCardName } from 'src/util';
import { useCard } from './use-card';
import { CardOpacity } from 'src/model';

export type UseCardExport = {
    isTainted: boolean,
    isInitializing: boolean,
    drawCanvasRef: React.RefObject<HTMLCanvasElement>,
    exportRef: React.MutableRefObject<{
        currentPipeline: Promise<void>;
        pipelineRunning: boolean;
    }>,
    onExport: (exportProps: {
        isPendulum: boolean,
        opacity: Partial<CardOpacity>,
        isRelevant: () => boolean,
    }) => Promise<void>,
    onDownloadError: () => void,
    onDownloadComplete: () => void,
};
export const useCardExport = ({
    isTainted,
    isInitializing,
    drawCanvasRef,
    exportRef,
    onExport,
    onDownloadError,
    onDownloadComplete,
}: UseCardExport) => {
    const {
        card: currentCard,
    } = useCard();
    const {
        opacity,
        name,
        isPendulum,
    } = currentCard;
    const pendingSave = useRef(false);

    const download = useCallback(() => {
        const canvasRef = drawCanvasRef.current;
        if (canvasRef && !isTainted) try {
            const normalizedName = normalizedCardName(name);
            var link = document.createElement('a');
            link.download = normalizedName
                ? `${normalizedName}.png`
                : 'card.png';
            link.href = canvasRef.toDataURL('image/png');
            link.click();
        } catch (e) {
            onDownloadError();
        }
        document.querySelector('#export-canvas-guard')?.classList.remove('guard-on');
        onDownloadComplete();
    }, [drawCanvasRef, isTainted, name, onDownloadComplete, onDownloadError]);
    const onSave = () => {
        document.querySelector('#export-canvas-guard')?.classList.add('guard-on');
        /** Prevent split-second download. By using hotkey user is able to perform extremely fast save process before the pipeline start running, thus getting the previous card data instead of the most recent one. */
        setTimeout(() => {
            if (exportRef.current.pipelineRunning === false) {
                download();
            } else pendingSave.current = true;
        }, 200);
    };

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
        let relevant = true;
        let confirmReload = (ev: Event) => {
            ev.preventDefault();
            return 'Leave right now may make you lose unsaved progress, proceed?';
        };
        if (isInitializing === false) {
            localStorage.setItem('card-data', JSON.stringify(currentCard));
            localStorage.setItem('card-version', process.env.REACT_APP_VERSION ?? 'unknown');

            /**
             * Run export pipeline:
             * - Immediately mark the pipeline as running, then run wait for the current pipeline (1).
             * - If the (1) pipeline is no longer relevant, end effect.
             * - Otherwise (the current pipeline is the newest), start export pipeline, this export pipeline is now the current pipeline (2).
             * - If the (2) pipeline is no longer relevant, end effect.
             * - Otherwise finish the pipeline and write result, also mark the pipeline as no longer running.
             */
            (async () => {
                const canvasRef = drawCanvasRef.current;
                if (canvasRef) {
                    window.addEventListener('beforeunload', confirmReload);
                    document.getElementById('export-canvas')?.classList.remove('js-export-available');
                    document.getElementById('export-canvas-guard')?.setAttribute('style', '');
                    document.getElementById('save-button-waiting')?.setAttribute('style', 'display: block');

                    exportRef.current.pipelineRunning = true;
                    /** Artifical delay, turn on to test export timing */
                    // await new Promise(resolve => setTimeout(() => resolve(true), 3000));
                    await exportRef.current.currentPipeline;

                    if (relevant) {
                        exportRef.current.currentPipeline = onExport({ isPendulum, opacity, isRelevant: () => relevant });

                        await exportRef.current.currentPipeline;
                        if (relevant) {
                            const condensedCard = compressCardData(currentCard);
                            if (typeof condensedCard === 'string') insertUrlParam('data', condensedCard);

                            document.getElementById('export-canvas')?.classList.add('js-export-available');
                            document.getElementById('export-canvas-guard')?.setAttribute('style', 'display: none');
                            document.getElementById('save-button-waiting')?.setAttribute('style', 'display: none');
                            window.removeEventListener('beforeunload', confirmReload);
                            exportRef.current.pipelineRunning = false;

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
            window.removeEventListener('beforeunload', confirmReload);
            relevant = false;
        };
    });

    return {
        onSave,
    };
};