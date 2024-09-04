import { Button, Dropdown, Menu, notification, Tooltip } from 'antd';
import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { MasterSeriesCanvas } from 'src/model';
import { useCardExport, useLanguage, useMasterSeriDrawer, useSetting } from 'src/service';
import { MenuOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useShallow } from 'zustand/react/shallow';
import { forceRefocus } from 'src/util';

const StyledDownloadDropdownLabel = styled(Menu.Item)`
    color: var(--color);
    padding: 1px 12px 5px 12px; // Alignment
    font-size: var(--fs-sm);
    border-bottom: var(--bw) solid var(--sub-level-4);
    cursor: default;
    &.ant-dropdown-menu-item.ant-dropdown-menu-item-disabled:hover {
        cursor: default;
        background: var(--main-level-3);
    }
`;
const StyledDownloadDropdownOption = styled(Menu.Item)`
    &.active-resolution {
        background-color: var(--sub-active);
    }
`;
const StyledDownloadButton = styled(Button)`
    padding: 0;
    .button-label {
        padding: 4px 15px;
        height: 100%; // Alignment
        align-content: center;
        border-radius: var(--br-lg);
        line-height: 1.5;
    }
    .button-option {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        display: flex;
        align-items: center;
        padding: var(--spacing);
        border-left: var(--bw) solid var(--sub-secondary);
        border-radius: 0 var(--br-lg) var(--br-lg) 0;
        .anticon {
            font-size: var(--fs-2xl);
            margin-left: 0;
        }
        &:hover {
            background: #399af9;
        }
    }
`;
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
    const language = useLanguage();
    const {
        allowHotkey,
        resolution,
        updateSetting,
    } = useSetting(useShallow(({
        setting: { allowHotkey, resolution },
        updateSetting,
    }) => ({
        allowHotkey,
        resolution,
        updateSetting,
    })));
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

    const download = (size?: [number, number]) => {
        if (isDownloading) return;
        if (isTainted) {
            notification.error({
                message: 'Your card is tainted, you must save manually',
                description: 'Right click the card → Choose "Save image as..."',
            });
            return;
        }
        setDownloading(true);
        onSave(size);
        return;
    };
    useImperativeHandle(ref, () => ({
        download,
    }));

    if (isTainted) return null;
    return <div className="save-button-container">
        <div id="save-button-waiting" />
        <Tooltip overlay={allowHotkey ? <>Ctrl-S / ⌘-S</> : null}>
            <StyledDownloadButton className="save-button" id="save-button-ready" onClick={() => download()}>
                <div className="button-label">
                    {isDownloading
                        ? language['button.download.ongoing.label']
                        : language['button.download.label']}
                </div>
                <Dropdown
                    disabled={isDownloading}
                    className="save-button-dropdown"
                    placement="bottomRight"
                    overlay={<Menu onClick={e => e.domEvent.stopPropagation()}>
                        <StyledDownloadDropdownLabel disabled>{language['button.download.resolution.label']}</StyledDownloadDropdownLabel>
                        {[
                            { width: 549, height: 800 },
                            { width: 813, height: 1185 },
                        ].map(({ width, height }) => {
                            return <StyledDownloadDropdownOption key={`${width}-${height}`}
                                className={resolution[0] === width && resolution[1] === height ? 'active-resolution' : ''}
                                onClick={() => {
                                    updateSetting({
                                        resolution: [width, height],
                                    });
                                    forceRefocus();
                                }}
                            >
                                {width} × {height}
                            </StyledDownloadDropdownOption>;
                        })}
                    </Menu>}
                >
                    <div className="button-option" onClick={e => e.stopPropagation()}>
                        <MenuOutlined />
                    </div>
                </Dropdown>
            </StyledDownloadButton>
        </Tooltip>
    </div>;
});