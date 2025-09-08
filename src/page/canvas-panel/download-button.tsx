import { Button, Dropdown, notification, Tooltip } from 'antd';
import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { MasterSeriesCanvas } from 'src/model';
import { useCardExport, useLanguage, useMasterSeriDrawer, useSetting } from 'src/service';
import { GatewayOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useShallow } from 'zustand/react/shallow';
import { forceRefocus } from 'src/util';
import { ResolutionPicker } from 'src/component';

export const ResolutionButton = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    padding: var(--spacing-xs) var(--spacing);
    border-left: var(--bw) solid var(--sub-secondary);
    border-radius: 0 var(--br-lg) var(--br-lg) 0;
    color: var(--color);
    cursor: pointer;
    .anticon {
        font-size: var(--fs-2xl);
        margin-left: 0;
    }
    .resolution-overlay {
        position: absolute;
        left: 50%;
        bottom: 3px; // Alignment
        font-size: var(--fs-xs);
        text-align: center;
        transform: translateX(-50%);
    }
    .resolution-icon {
        transform: translateY(-5px); // Alignment
    }
`;
const StyledDownloadButton = styled(Button)`
    padding: 0;
    .button-label {
        height: 100%; // Alignment
        align-content: center;
        border-radius: var(--br-lg);
        line-height: 1.5;
        .label-content {
            padding: 4px 15px;
            border: var(--bw) solid transparent;
            border-radius: var(--br-lg);
            line-height: 29px; // Alignment
        }
    }
`;
export type DownloadButtonRef = {
    download: () => void,
    isPipelineRunning: () => boolean,
}
export type DownloadButton = {
    isTainted: boolean,
    isInitializing: boolean,
    imageChangeCount: number,
    globalScale: number,
    canvasMap: MasterSeriesCanvas,
    onDownloadError: () => void,
};
export const DownloadButton = forwardRef<DownloadButtonRef, DownloadButton>(({
    isTainted,
    isInitializing,
    imageChangeCount,
    globalScale,
    canvasMap,
    onDownloadError,
}, ref) => {
    const language = useLanguage();
    const {
        allowHotkey,
        resolution,
    } = useSetting(useShallow(({
        setting: { allowHotkey, resolution },
    }) => ({
        allowHotkey, resolution,
    })));
    const { onExport } = useMasterSeriDrawer(
        true,
        canvasMap,
        {
            imageChangeCount,
            isInitializing,
            language,
            globalScale,
        },
    );
    const {
        exportCanvasRef,
    } = canvasMap;
    const exportRef = useRef({
        currentPipeline: Promise.resolve(),
        pipelineRunning: false,
    });
    const [isDownloading, setDownloading] = useState(false);
    const onDownloadComplete = useCallback(() => {
        setDownloading(false);
    }, []);
    const { onSave, isPipelineRunning } = useCardExport({
        isTainted,
        isInitializing,
        exportCanvasRef,
        exportRef,
        onExport,
        onDownloadError,
        onDownloadComplete,
    });

    const download = (size?: [number, number]) => {
        if (isDownloading) return;
        if (isTainted) {
            notification.error({
                message: language['prompt.download.tainted.message'],
            });
            return;
        }
        setDownloading(true);
        onSave(size);
        return;
    };
    useImperativeHandle(ref, () => ({
        download,
        isPipelineRunning,
    }));

    if (isTainted) return null;
    return <div className="save-button-container">
        <div id="save-button-waiting" />
        <StyledDownloadButton className="save-button" id="save-button-ready">
            <Tooltip overlay={allowHotkey ? <>Ctrl+S / ⌘+S</> : null}>
                <div className="button-label">
                    <div className="label-content" onClick={() => download()}>
                        {isDownloading
                            ? language['button.download.ongoing.label']
                            : language['button.download.label']}
                    </div>
                </div>
            </Tooltip>
            <Dropdown
                disabled={isDownloading}
                className="save-button-dropdown"
                placement="bottomRight"
                overlay={<ResolutionPicker onChange={() => forceRefocus()} />}
            >
                <ResolutionButton className="resolution-option" onClick={e => e.stopPropagation()}>
                    <GatewayOutlined className="resolution-icon" />
                    <span className="resolution-overlay">{resolution[1]}</span>
                </ResolutionButton>
            </Dropdown>
        </StyledDownloadButton>
    </div>;
});