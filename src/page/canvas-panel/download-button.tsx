import { notification } from 'antd';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { MasterDuelCanvas } from 'src/model';
import { useCardExport, useMasterSeriDrawer, useSetting } from 'src/service';

export type DownloadButtonRef = {
    download: () => void,
}
export type DownloadButton = {
    isTainted: boolean,
    isInitializing: boolean,
    imageChangeCount: number,
    canvasMap: MasterDuelCanvas,
    onDownloadError: () => void,
};
export const DownloadButton = forwardRef<DownloadButtonRef, DownloadButton>(({
    isTainted,
    isInitializing,
    imageChangeCount,
    canvasMap,
    onDownloadError,
}, ref) => {
    const allowHotkey = useSetting(state => state.setting.allowHotkey);
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

    useImperativeHandle(ref, () => ({
        download: () => {
            if (isTainted) {
                notification.error({
                    message: 'Your card is tainted, you must save manually',
                    description: 'Right click the card → Choose "Save image as..."',
                });
                return;
            }
            onSave();
            return;
        }
    }));

    if (isTainted) return null;
    return <div className="save-button-container">
        <div id="save-button-waiting" />
        <button className="save-button" id="save-button-ready" onClick={onSave}>
            Download{allowHotkey ? <> (Ctrl-S / ⌘-S)</> : null}
        </button>
    </div>;
});