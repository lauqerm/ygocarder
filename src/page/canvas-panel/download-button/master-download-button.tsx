import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { MasterSeriesCanvas } from 'src/model';
import { UseCardExport, useMasterSeriDrawer } from 'src/service';
import { UnconnectedDownloadButton, DownloadButtonRef } from './unconnected-download-button';

export type MasterDownloadButtonRef = DownloadButtonRef;
export type MasterDownloadButton = {
    imageChangeCount: number,
    globalScale: number,
    canvasMap: MasterSeriesCanvas,
    onTainted: () => void,
    onExportSucess: () => void,
} & Pick<UseCardExport, 'isTainted'
| 'isInitializing'
| 'onDownloadError'>;
export const MasterDownloadButton = forwardRef<MasterDownloadButtonRef, MasterDownloadButton>(({
    isTainted,
    isInitializing,
    imageChangeCount,
    globalScale,
    canvasMap,
    onTainted,
    onExportSucess,
    onDownloadError,
}, ref) => {
    const unconnectedDownloadButtonRef = useRef<DownloadButtonRef>(null);
    const { onExport } = useMasterSeriDrawer(
        true,
        canvasMap,
        {
            imageChangeCount,
            isInitializing,
            globalScale,
        },
    );
    const onExportWithCallback = useCallback(async (param: Parameters<UseCardExport['onExport']>[0]) => {
        return onExport({
            ...param,
            onError: e => {
                if (!isTainted && String(e).includes('Tainted canvases')) {
                    onTainted();
                }
            },
            onSuccess: onExportSucess,
        });
    }, [isTainted, onExport, onExportSucess, onTainted]);

    useImperativeHandle(ref, () => ({
        download: unconnectedDownloadButtonRef.current!.download,
        isPipelineRunning: unconnectedDownloadButtonRef.current!.isPipelineRunning,
    }));

    return <UnconnectedDownloadButton ref={unconnectedDownloadButtonRef}
        isTainted={isTainted}
        exportCanvasRef={canvasMap.exportCanvasRef}
        isInitializing={isInitializing}
        onDownloadError={onDownloadError}
        onExport={onExportWithCallback}
    />;
});