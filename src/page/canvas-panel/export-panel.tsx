import { Dropdown, Input, Menu, Modal, notification, Tooltip } from 'antd';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';
import { RadioTrain } from 'src/component';
import { LanguageDataDictionary, useLanguage } from 'src/service';
import styled from 'styled-components';
import { StyledActionIconButton } from './styled';
import copy from 'copy-to-clipboard';
import { downloadBlob, normalizedCardName, ygoCarderToCardMakerData, ygoCarderToExportableData } from 'src/util';
import { DownloadOutlined } from '@ant-design/icons';
import { Card } from 'src/model';

const StyledExportContainer = styled.div`
    ${StyledActionIconButton} {
        font-size: var(--fs);
    }
    .radio-train-input-group {
        flex-wrap: wrap;
    }
    .export-container-result {
        margin-top: var(--spacing-lg);
        display: grid;
        grid-template-columns: 100px auto;
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
        line-height: 1.25;
    }
    .export-input-raw {
        grid-row: span 2;
        height: 100%;
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
    return <StyledActionIconButton
        onClick={() => {
            copy(data);
        }}
    >
        {children}
    </StyledActionIconButton>;
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
    setCardData: (card: Card) => void,
};
export type ExportPanel = {
    artworkCanvas: HTMLCanvasElement | null,
    onRequireExportData: () => void,
    allowHotkey: boolean,
};
export const ExportPanel = forwardRef(({
    artworkCanvas,
    onRequireExportData,
    allowHotkey,
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
            normalizedCardName(name),
            blob,
            'application/json',
        );
    };

    useImperativeHandle(ref, () => ({
        setCardData: (card: Card) => {
            setVisible(true);
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
                            name: normalizedCardName(card.name),
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
            onCancel={() => setVisible(false)}
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
                                normalizedCardName(name),
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
                {getExportModeDataList(language).map(({ value, label }, index) => {
                    return <Menu.Item key={`${index}`}
                        onClick={() => downloadAsFile(
                            internalCardData[value].name,
                            internalCardData[value].data,
                        )}
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