import { Button, notification, Tooltip } from 'antd';
import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { MasterSeriesCanvas } from 'src/model';
import { useCardExport, useMasterSeriDrawer, useSetting } from 'src/service';

export type DownloadButtonRef = {
    download: () => void,
}
export type DownloadButton = {
    isTainted: boolean,
    isInitializing: boolean,
    imageChangeCount: number,
    canvasMap: MasterSeriesCanvas,
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
        pipelineRunning: false,
    });
    const [isDownloading, setDownloading] = useState(false);
    const onDownloadComplete = useCallback(() => {
        setDownloading(false);
    }, []);
    const { onSave } = useCardExport({
        isTainted,
        isInitializing,
        drawCanvasRef,
        exportRef,
        onExport,
        onDownloadError,
        onDownloadComplete,
    });

    const download = () => {
        if (isTainted) {
            notification.error({
                message: 'Your card is tainted, you must save manually',
                description: 'Right click the card → Choose "Save image as..."',
            });
            return;
        }
        setDownloading(true);
        onSave();
        return;
    };
    useImperativeHandle(ref, () => ({
        download,
    }));

    if (isTainted) return null;
    return <div className="save-button-container">
        <div id="save-button-waiting" />
        <Tooltip overlay={allowHotkey ? <>Ctrl-S / ⌘-S</> : null}>
            <Button className="save-button" loading={isDownloading} id="save-button-ready" onClick={download}>
                Download
            </Button>
        </Tooltip>
    </div>;
});