import { Button, Dropdown, notification, Tooltip } from 'antd';
import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { UseCardExport, useCardExport, useLanguage, useSetting } from 'src/service';
import { GatewayOutlined } from '@ant-design/icons';
import { useShallow } from 'zustand/react/shallow';
import { forceRefocus } from 'src/util';
import { ResolutionPicker } from 'src/component';
import styled from 'styled-components';
import { ResolutionButton } from './download-button.styled';

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
    download: (size?: [number, number]) => void,
    isPipelineRunning: () => boolean,
};
export type UnconnectedDownloadButton = {
    onExport: (param: Parameters<UseCardExport['onExport']>[0]) => Promise<void>,
    exportCanvasRef: React.RefObject<HTMLCanvasElement>,
} & Pick<UseCardExport, 'isTainted'
| 'isInitializing'
| 'onDownloadError'>;
/** To ensure the best performance, all of this hook's paramter must be memozied. */
export const UnconnectedDownloadButton = forwardRef<DownloadButtonRef, UnconnectedDownloadButton>(({
    isTainted,
    onExport,
    isInitializing,
    onDownloadError,
    exportCanvasRef,
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