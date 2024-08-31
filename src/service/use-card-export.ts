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
        queuedPipeline: boolean;
    }>,
    onExport: (exportProps: {
        isPendulum: boolean;
        opacity: Partial<CardOpacity>;
    }) => Promise<void>,
    onDownloadError: () => void,
};
export const useCardExport = ({
    isTainted,
    isInitializing,
    drawCanvasRef,
    exportRef,
    onExport,
    onDownloadError,
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
    }, [drawCanvasRef, isTainted, name, onDownloadError]);
    const onSave = () => {
        document.querySelector('#export-canvas-guard')?.classList.add('guard-on');
        if (exportRef.current.queuedPipeline === false) {
            download();
        } else pendingSave.current = true;
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
             * Run export pipeline
             * - While it is running, every effect just mark pipeline as queued, then wait the current pipeline
             * - If the pipeline is complete and there is no effect, run another pipeline and remove the queue
             */
            (async () => {
                const canvasRef = drawCanvasRef.current;
                if (canvasRef) {
                    window.addEventListener('beforeunload', confirmReload);
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
                            const condensedCard = compressCardData(currentCard);
                            if (typeof condensedCard === 'string') insertUrlParam('data', condensedCard);

                            document.getElementById('export-canvas')?.classList.add('js-export-available');
                            document.getElementById('export-canvas-guard')?.setAttribute('style', 'display: none');
                            document.getElementById('save-button-waiting')?.setAttribute('style', 'display: none');
                            window.removeEventListener('beforeunload', confirmReload);

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