import { useRef } from 'react';
import { MasterDuelCanvas } from 'src/model';
import { useCardExport, useMasterSeriDrawer } from 'src/service';

export type DownloadButton = {
    isTainted: boolean,
    isInitializing: boolean,
    imageChangeCount: number,
    canvasMap: MasterDuelCanvas,
    onDownloadError: () => void,
};
export const DownloadButton = ({
    isTainted,
    isInitializing,
    imageChangeCount,
    canvasMap,
    onDownloadError,
}: DownloadButton) => {
    const { onExport } = useMasterSeriDrawer(
        true,
        canvasMap,
        {
            imageChangeCount,
            isInitializing,
        },
    );
    const {
        drawCanvasRef,
    } = canvasMap;
    const exportRef = useRef({
        currentPipeline: Promise.resolve(),
        queuedPipeline: false,
    });
    const { onSave } = useCardExport({
        isTainted,
        isInitializing,
        drawCanvasRef,
        exportRef,
        onExport,
        onDownloadError,
    });

    if (isTainted) return null;
    return <div className="save-button-container">
        <div id="save-button-waiting" />
        <button className="save-button" id="save-button-ready" onClick={() => onSave()}>Download</button>
    </div>;
};