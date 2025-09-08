import { Dropdown, Input, Menu, Modal, notification, Tooltip } from 'antd';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';
import { Copiable, CopiableOverlayStyle, InternalPopover, RadioTrain, ResolutionPicker, StyledPopMarkdown, TaintedCanvasPanel } from 'src/component';
import { LanguageDataDictionary, useCard, useLanguage, useSetting } from 'src/service';
import styled from 'styled-components';
import { StyledActionIconButton } from './styled';
import { downloadBlob, mergeClass, normalizeCardName, ygoCarderToCardMakerData, ygoCarderToExportableData } from 'src/util';
import { DownloadOutlined, CheckOutlined, CopyOutlined, FileImageOutlined, LinkOutlined } from '@ant-design/icons';
import { Card } from 'src/model';
import { useShallow } from 'zustand/react/shallow';

const StyledExportContainer = styled.div`
    ${StyledActionIconButton} {
        font-size: var(--fs);
        padding-bottom: var(--spacing-sm);
        .icon {
            font-size: var(--fs-4xl);
        }
        &.export-download-image {
            border-radius: var(--br-lg) var(--br-lg) 0 0;
            border-bottom: var(--bw) solid var(--sub-secondary);
            &:disabled {
                border-bottom: var(--bw) solid var(--main-level-1);
            }
        }
    }
    .radio-train-input-group {
        flex-wrap: wrap;
    }
    .export-container-result {
        margin-top: var(--spacing-lg);
        display: grid;
        gap: var(--spacing-lg);
        align-items: center;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        &.mode_other {
            grid-template-columns: 1fr 1fr;
        }
        button {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            height: 100%;
        }
        > div {
            height: 100%;
        }
    }
    .partial-alert {
        margin-top: var(--spacing-lg);
        padding-bottom: var(--spacing-sm);
        border-bottom: var(--bw) solid var(--sub-secondary);
        + .export-container-result {
            margin-top: var(--spacing-sm);
        }
    }
    .resolution-picker {
        background-color: var(--main-level-4);
        border-radius: 0 0 var(--br-lg) var(--br-lg);
        padding: var(--spacing-xs);
        line-height: 1;
        text-align: center;
        border: var(--bw) solid transparent;
        cursor: pointer;
    }
    .export-input-raw {
        grid-column: 1 / -1;
    }
`;

const StyledCardDataCopyButton = styled(StyledActionIconButton)`
    ${CopiableOverlayStyle}
`;
type CardDataCopyButton = {
    data: string,
    children?: React.ReactNode,
    withText?: boolean,
    disabled: boolean,
}
const CardDataCopyButton = ({
    data,
    children,
    disabled,
    withText,
}: CardDataCopyButton) => {
    return <Copiable
        disabled={disabled}
        data={data}
        container={StyledCardDataCopyButton}
        overlay={withText
            ? <>Copied&nbsp;<CheckOutlined /></>
            : <CheckOutlined />}
    >{children}</Copiable>;
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
    tainted: boolean,
    artworkCanvas: HTMLCanvasElement | null,
    onRequireExportData: () => void,
    onRequireDownload: () => void,
    onClose: () => void,
};
export const ExportPanel = forwardRef(({
    tainted,
    artworkCanvas,
    onRequireExportData,
    onRequireDownload,
    onClose,
}: ExportPanel, ref: React.ForwardedRef<ExportPanelRef>) => {
    const [visible, setVisible] = useState(false);
    const [mode, setMode] = useState<ExportMode>('ygocarder');
    const [internalCardData, setInternalCardData] = useState<Record<ExportMode, { name: string, data: string, isPartial: boolean }>>({
        other: { name: '', data: '', isPartial: false },
        ygocarder: { name: '', data: '', isPartial: false },
    });
    const {
        allowHotkey,
        resolution,
    } = useSetting(useShallow(({
        setting: { allowHotkey, resolution },
    }) => ({
        allowHotkey,
        resolution,
    })));
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
            className="global-overlay export-modal"
            onCancel={() => {
                setVisible(false);
                onClose();
            }}
            cancelText={language['converter.cancel.label']}
            okButtonProps={{
                style: { display: 'none' },
            }}
            width={600}
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
                <div className={mergeClass('export-container-result', `mode_${mode}`)}>
                    <InternalPopover content={(tainted && mode === 'other') ? <TaintedCanvasPanel /> : undefined}>
                        <div>
                            <StyledActionIconButton
                                disabled={tainted && mode === 'other'}
                                onClick={() => {
                                    const blob = new Blob([data], { type: 'application/json' });
                                    downloadBlob(
                                        normalizeCardName(name),
                                        blob,
                                        'application/json',
                                    );
                                }}
                            >
                                <div className="icon"><DownloadOutlined /></div>
                                <div className="label">
                                    {language['button.export-modal.download-button.label']}
                                </div>
                            </StyledActionIconButton>
                        </div>
                    </InternalPopover>
                    {mode === 'ygocarder' && <InternalPopover
                        placement="bottom"
                        content={isPartial
                            ? <StyledPopMarkdown>
                                {language['prompt.export.offline-warning.message']}
                            </StyledPopMarkdown>
                            : undefined}
                    >
                        <div>
                            <CardDataCopyButton
                                disabled={false}
                                data={internalCardData.ygocarder.data}
                                withText
                            >
                                <div className="icon"><CopyOutlined /></div>
                                <div className="label">
                                    {language['button.export-modal.copy-button.label']}
                                </div>
                            </CardDataCopyButton>
                        </div>
                    </InternalPopover>}
                    {mode === 'ygocarder' && <InternalPopover
                        placement="bottom"
                        content={isPartial
                            ? <StyledPopMarkdown>
                                {language['image-cropper.offline-warning']}
                            </StyledPopMarkdown>
                            : undefined}
                    >
                        <div>
                            <CardDataCopyButton
                                disabled={isPartial}
                                data={window.location.href}
                                withText
                            >
                                <div className="icon"><LinkOutlined /></div>
                                <div className="label">
                                    {language['button.export-modal.share-button.label']}
                                </div>
                            </CardDataCopyButton>
                        </div>
                    </InternalPopover>}
                    <div>
                        <InternalPopover content={tainted ? <TaintedCanvasPanel /> : undefined}>
                            <div>
                                <StyledActionIconButton
                                    disabled={tainted}
                                    className="export-download-image"
                                    onClick={onRequireDownload}
                                >
                                    <div className="icon"><FileImageOutlined /></div>
                                    <div className="label">
                                        {language['button.export-modal.save-button.label']}
                                    </div>
                                </StyledActionIconButton>
                            </div>
                        </InternalPopover>
                        <Dropdown overlay={<ResolutionPicker />}>
                            <div className="resolution-picker">
                                {resolution[0]} × {resolution[1]}
                            </div>
                        </Dropdown>
                    </div>
                    {(mode === 'ygocarder' && !isPartial) && <Input.TextArea
                        id={inputId}
                        className="export-input-raw"
                        size="small"
                        value={internalCardData.ygocarder.data}
                        rows={5}
                    />}
                </div>
            </StyledExportContainer>
        </Modal>
        <Tooltip overlay={allowHotkey ? <>Ctrl+D / ⌘+D</> : null}>
            <button className="primary-button export-button" onClick={() => {
                onRequireExportData();
                setVisible(true);
            }}>
                {language['generic.export.label']}
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