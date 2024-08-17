import { useRef } from 'react';
import { MasterDuelCanvas } from 'src/model';
import { useCardExport, useMasterSeriDrawer } from 'src/service';

export type DownloadButton = {
    isInitializing: boolean,
    imageChangeCount: number,
    canvasMap: MasterDuelCanvas,
    onDownloadError: () => void,
};
export const DownloadButton = ({
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
        isInitializing,
        drawCanvasRef,
        exportRef,
        onExport,
        onDownloadError,
    });

    return <div className="save-button-container">
        <div id="save-button-waiting" />
        <button className="save-button" id="save-button-ready" onClick={() => onSave()}>Download</button>
    </div>;
};