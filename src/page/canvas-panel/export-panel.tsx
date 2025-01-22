import { Dropdown, Input, Menu, Modal, notification, Tooltip } from 'antd';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';
import { RadioTrain } from 'src/component';
import { LanguageDataDictionary, useCard, useLanguage } from 'src/service';
import styled from 'styled-components';
import { StyledActionIconButton } from './styled';
import copy from 'copy-to-clipboard';
import { downloadBlob, normalizeCardName, ygoCarderToCardMakerData, ygoCarderToExportableData } from 'src/util';
import { DownloadOutlined, CheckOutlined } from '@ant-design/icons';
import { Card } from 'src/model';

const StyledExportContainer = styled.div`
    ${StyledActionIconButton} {
        font-size: var(--fs);
        border-left: var(--bw) solid var(--main-primary);
    }
    .radio-train-input-group {
        flex-wrap: wrap;
    }
    .export-container-result {
        margin-top: var(--spacing-lg);
        display: grid;
        grid-template-columns: 115px auto;
        gap: var(--spacing-lg);
        align-items: center;
    }
    .partial-alert {
        margin-top: var(--spacing-lg);
        padding-bottom: var(--spacing-sm);
        border-bottom: var(--bw) solid var(--sub-secondary);
        + .export-container-result {
            margin-top: var(--spacing-sm);
        }
    }
    .inline-alert {
        grid-row: span 2;
        line-height: 1.25;
    }
    .export-input-raw {
        grid-row: span 3;
        height: 100%;
    }
`;

const StyledCardDataCopyButton = styled(StyledActionIconButton)`
    position: relative;
    .copiable-overlay {
        align-items: center;
        background-color: var(--color-contrast);
        font-size: var(--fs);
        font-weight: bold;
        border-radius: var(--br);
        color: var(--color);
        display: flex;
        height: 100%;
        justify-content: center;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 999;
    }
`;
type CardDataCopyButton = {
    data: string,
    children?: React.ReactNode,
}
const CardDataCopyButton = ({
    data,
    children,
}: CardDataCopyButton) => {
    const [showFlashOverlay, setFlashOverlay] = useState(false);
    const callFlashNotification = (copyingContent: string) => {
        copy(copyingContent);
        setFlashOverlay(true);
        setTimeout(() => {
            setFlashOverlay(false);
        }, 1000);
    };

    return <StyledCardDataCopyButton
        onClick={e => {
            e.stopPropagation();
            callFlashNotification(data);
        }}
    >
        {showFlashOverlay ? <div className="copiable-overlay"><CheckOutlined /></div> : null}
        {children}
    </StyledCardDataCopyButton>;
};

type ExportMode = 'ygocarder' | 'other';
export const getExportModeDataList = (language: LanguageDataDictionary) => [
    {
        label: language['button.import.for-ygocarder.label'],
        value: 'ygocarder' as const,
        converter: ygoCarderToExportableData,
    },
    {
        label: language['button.import.for-other.label'],
        value: 'other' as const,
        converter: ygoCarderToCardMakerData as (card: Card, _artRef?: HTMLCanvasElement | null) => {
            isPartial: boolean;
            result: Record<string, any>;
        },
    },
];

export type ExportPanelRef = {
    setCardData: (card: Card, openModal?: boolean) => void,
};
export type ExportPanel = {
    artworkCanvas: HTMLCanvasElement | null,
    onRequireExportData: () => void,
    onRequireDownload: () => void,
    allowHotkey: boolean,
    onClose: () => void,
};
export const ExportPanel = forwardRef(({
    artworkCanvas,
    onRequireExportData,
    onRequireDownload,
    allowHotkey,
    onClose,
}: ExportPanel, ref: React.ForwardedRef<ExportPanelRef>) => {
    const [visible, setVisible] = useState(false);
    const [mode, setMode] = useState<ExportMode>('ygocarder');
    const [internalCardData, setInternalCardData] = useState<Record<ExportMode, { name: string, data: string, isPartial: boolean }>>({
        other: { name: '', data: '', isPartial: false },
        ygocarder: { name: '', data: '', isPartial: false },
    });
    const language = useLanguage();
    const inputId = 'export-input-raw';
    const focusInput = useCallback(() => {
        const target = document.getElementById(inputId) as HTMLTextAreaElement | null;
        if (target) {
            target.focus();
            target.select();
        }
    }, []);
    const downloadAsFile = (name: string, rawData: string) => {
        const blob = new Blob([rawData], { type: 'application/json' });
        downloadBlob(
            normalizeCardName(name),
            blob,
            'application/json',
        );
    };

    useImperativeHandle(ref, () => ({
        setCardData: (card: Card, openModal = true) => {
            if (openModal) setVisible(true);
            setInternalCardData(getExportModeDataList(language)
                .map(({ value, converter }) => {
                    try {
                        const {
                            isPartial,
                            result,
                        } = converter(card, artworkCanvas);

                        return {
                            value,
                            isPartial,
                            name: normalizeCardName(card.name),
                            data: `${JSON.stringify(result)}`,
                        };
                    } catch (e) {
                        console.error(e);
                        notification.error({
                            message: language['error.export.message'],
                            description: language['error.export.description'],
                        });

                        return {
                            value,
                            isPartial: false,
                            name: 'Unknown',
                            data: '',
                        };
                    }
                })
                .reduce<Record<ExportMode, { name: string, data: string, isPartial: boolean }>>((prev, { data, isPartial, value, name }) => {
                    prev[value] = { name, data, isPartial };

                    return prev;
                }, { ...internalCardData })
            );
        },
    }));

    useEffect(() => {
        setTimeout(() => {
            if (visible && mode === 'ygocarder') focusInput();
        }, 100);
    }, [mode, focusInput, visible]);

    const {
        data,
        isPartial,
        name,
    } = internalCardData[mode];
    return <>
        <Modal
            visible={visible}
            title={language['button.export-modal.label']}
            className="global-overlay"
            onCancel={() => {
                setVisible(false);
                onClose();
            }}
            cancelText={language['converter.cancel.label']}
            okButtonProps={{
                style: { display: 'none' },
            }}
            destroyOnClose={false}
        >
            <StyledExportContainer>
                <RadioTrain<ExportMode>
                    optionList={getExportModeDataList(language)}
                    onChange={mode => setMode(mode)}
                    value={mode}
                />
                {(mode === 'other' && isPartial) && <div className="partial-alert">
                    <b>{language['service.decode.partial.message']}</b>
                    <br />
                    {language['service.decode.partial.description']}
                </div>}
                <div className="export-container-result">
                    <StyledActionIconButton
                        onClick={() => {
                            const blob = new Blob([data], { type: 'application/json' });
                            downloadBlob(
                                normalizeCardName(name),
                                blob,
                                'application/json',
                            );
                        }}
                    >
                        {language['button.export-modal.download-button.label']}
                    </StyledActionIconButton>
                    {(mode === 'ygocarder' && !isPartial) && <Input.TextArea
                        id={inputId}
                        className="export-input-raw"
                        size="small"
                        value={internalCardData.ygocarder.data}
                    />}
                    {(mode === 'ygocarder' && !isPartial) && <CardDataCopyButton
                        data={internalCardData.ygocarder.data}
                    >
                        {language['button.export-modal.copy-button.label']}
                    </CardDataCopyButton>}
                    {((mode === 'other')
                    || (mode === 'ygocarder' && isPartial)) && <div className="inline-alert">
                        {language['prompt.export.offline-warning.message']}
                    </div>}
                    <StyledActionIconButton onClick={onRequireDownload}>
                        {language['button.export-modal.save-button.label']}
                    </StyledActionIconButton>
                </div>
            </StyledExportContainer>
        </Modal>
        <Tooltip overlay={allowHotkey ? <>Ctrl-D / ⌘-D</> : null}>
            <button className="primary-button export-button" onClick={() => {
                onRequireExportData();
                setVisible(true);
            }}>
                {language['button.export.label']}
            </button>
        </Tooltip>
        <Dropdown 
            overlay={<Menu onClick={e => e.domEvent.stopPropagation()}>
                {getExportModeDataList(language).map(({ converter, label }, index) => {
                    return <Menu.Item key={`${index}`}
                        onClick={() => {
                            try {
                                const card = useCard.getState().card;
                                const {
                                    result,
                                } = converter(card, artworkCanvas);

                                downloadAsFile(
                                    normalizeCardName(card.name),
                                    `${JSON.stringify(result)}`,
                                );
                            } catch (e) {
                                console.error(e);
                                notification.error({
                                    message: language['error.export.message'],
                                    description: language['error.export.description'],
                                });
                            }
                        }}
                    >
                        {label}
                    </Menu.Item>;
                })}
            </Menu>}
        >
            <StyledActionIconButton className="secondary-button export-custom">
                <DownloadOutlined />
            </StyledActionIconButton>
        </Dropdown>
    </>;
});