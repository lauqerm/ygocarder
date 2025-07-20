import { Menu, Dropdown, Tooltip, Modal, Input, notification } from 'antd';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import styled from 'styled-components';
import { UploadOutlined } from '@ant-design/icons';
import { decodeCard, LanguageDataDictionary, useCard } from 'src/service';
import { StyledActionIconButton } from './styled';
import { Card, getEmptyCard, YgoproDeckCard } from 'src/model';
import {
    isYgoprodeckImage,
    // uploadToImgur,
} from 'src/util';
import { JSONUncrush } from 'src/3rd';

const StyledImportContainer = styled.div`
    .prompt-alert {
        margin-bottom: var(--spacing-sm);
        .alert {
            color: var(--main-danger);
        }
    }
    .import-container-upload {
        margin-top: var(--spacing-sm);
        text-align: center;
        .import-custom,
        .import-empty {
            font-size: var(--fs);
        }
        .import-custom {
            margin-right: var(--spacing);
        }
        .option-separator {
            display: inline-block;
            margin-right: var(--spacing);
        }
        ${StyledActionIconButton} {
            background-color: var(--main-level-4);
            border: var(--bw) solid var(--color-contrast);
            &:hover {
                background-color: var(--sub-level-4);
            }
        }
    }
`;

export type ImportPanelRef = {
    requestImport: (mode: 'replace' | 'merge' | 'new') => void,
};
export type ImportPanel = {
    language: LanguageDataDictionary,
    allowHotkey: boolean,
    onImport: (
        data: Card,
        option?: {
            forcePurityCheck?: boolean,
            writeOnCurrentCard?: boolean,
            addToList?: boolean,
        },
    ) => void,
    onClose: () => void,
};
export const ImportPanel = forwardRef<ImportPanelRef, ImportPanel>(({
    allowHotkey,
    language,
    onImport,
    onClose,
}, ref) => {
    const directUploadId = 'import-direct-upload';
    const uploadId = 'import-upload';
    const inputId = 'import-textarea';
    const ygoCarderImportDirectInputRef = useRef<HTMLInputElement>(null);
    const ygoCarderImportInputRef = useRef<HTMLInputElement>(null);
    const [inputKey, setInputKey] = useState(0);
    const [mode, setMode] = useState<'merge' | 'replace' | 'new'>('replace');
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const focusInput = useCallback(() => {
        const target = document.getElementById(inputId) as HTMLTextAreaElement | null;
        if (target) {
            target.focus();
            target.select();
        }
    }, []);

    useEffect(() => {
        setTimeout(() => {
            if (visible) focusInput();
        }, 100);
    }, [focusInput, visible]);

    useImperativeHandle(ref, () => ({
        requestImport: mode => {
            setMode(mode);
            setVisible(true);
        }
    }));

    const cleanup = () => {
        setInputKey(cur => cur + 1);
        setVisible(false);
        setLoading(false);
        onClose();
    };
    const startImport = async (
        cardData: string | Record<string, any> | null,
        imageSurvey = false,
    ) => {
        try {
            if (cardData) {
                const {
                    card: decodedCard,
                    isPartial,
                } = decodeCard(
                    cardData,
                    (mode === 'replace' || mode === 'new') ? undefined : useCard.getState().card,
                );

                if (isPartial) {
                    notification.info({
                        message: language['service.decode.partial.message'],
                        description: language['service.decode.partial.description'],
                    });
                }

                /**
                 * Upload image into imgur for usable link. @todo Something need to consider here:
                 * * The image link change each time even for the same card, so it's a huge waste of resource.
                 * * The amount of cards is so large that keeping a dictionary to map them is not feasible, and may require constant update.
                 * * The best method right now is build another dedicated server that can forward resource from YGOPRODeck as an usuable link, which is way more than the scope of this project.
                 * 
                 * Disable imgur import for now, it is nowhere near enough capacity for current user base. We stick with the base import, as even though it taint the canvas, it is guarantee to have image available and also we can always purge the canvas when user swithching source.
                 */
                if (imageSurvey && decodedCard.artSource === 'online' && isYgoprodeckImage(decodedCard.art)) {
                    const surveyedDecodedCard: Card = { ...decodedCard };
                    // try {
                    //     const imgurResponse = await uploadToImgur(decodedCard.art);
                    //     if (imgurResponse.status !== 200) {
                    //         surveyedDecodedCard.art = 'https://i.imgur.com/jjtCuG5.png';
                    //         throw new Error('Imgur response status: ' + imgurResponse.status);
                    //     }
                    //     const imgurResponseData: { data: { link: string } } = await imgurResponse.json();

                    //     surveyedDecodedCard.art = imgurResponseData.data.link;
                    // } catch (e) {
                    //     /** Failing the upload process does not terminate the import process */
                    //     console.error('Upload error:', e);
                    //     notification.error({
                    //         message: language['prompt.import.imgur.message'],
                    //         description: language['prompt.import.imgur.description'],
                    //     });
                    // }
                    onImport(surveyedDecodedCard, {
                        forcePurityCheck: true,
                        writeOnCurrentCard: mode === 'new' ? false : true,
                        addToList: mode === 'new',
                    });
                } else {
                    onImport(decodedCard, {
                        forcePurityCheck: true,
                        writeOnCurrentCard: mode === 'new' ? false : true,
                        addToList: mode === 'new',
                    });
                }
            }
        } catch (e) {
            console.error('Import error:', e);
            notification.error({
                message: language['error.import.error.message'],
                description: language['error.import.error.description'],
            });
        }
    };
    const getFileAndImport = (fileList?: FileList | null) => {
        if (fileList) {
            for (let cnt = 0; cnt <= fileList.length; cnt++) {
                const targetFile = fileList.item(cnt);
                if (!targetFile) continue;

                const reader = new FileReader();
                reader.onload = ({ target }) => {
                    if (!target) return;

                    const { result } = target;
                    if (typeof result !== 'string') return;
                    startImport(result);
                };
                reader.readAsText(targetFile);
                break;
            }
        };
    };
    const startRequest = async () => {
        try {
            const target = document.getElementById(inputId) as HTMLInputElement;
            if (target) {
                const { value } = target;
                const normalizedValue = value.trim() ?? '';
                let uncrushedValue = '';
                try {
                    uncrushedValue = JSONUncrush(decodeURIComponent(normalizedValue));
                } catch (e) {}
                let cardData: string | null | Record<string, any> = null;

                /** Potential JSON data */
                if (normalizedValue.startsWith('{') && normalizedValue.endsWith('}')) {
                    cardData = normalizedValue;
                }
                /** Potential crushed data */
                else if (uncrushedValue.startsWith('{') && uncrushedValue.endsWith('}')) {
                    cardData = JSON.parse(uncrushedValue);
                }
                else {
                    const ygoproDeckApi = normalizedValue.startsWith('https://db.ygoprodeck.com/api')
                        /** Potential ygopro deck API */
                        ? normalizedValue
                        /** Attempt to search as a valid card name, an avid user may found out that the text is append as-is, so it's possible to use a rather complex query */
                        : `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${normalizedValue}&num=10&offset=0&misc=yes`;
                    setLoading(true);
                    const response = await fetch(ygoproDeckApi);
                    if (!response.ok) {
                        throw new Error(`Response status: ${response.status}`);
                    }

                    const baseCardData: { data: YgoproDeckCard[] } = await response.json();
                    /** We find full match here, as fuzzy search may not sort it on top, for example "raigeki" will match "Anti Raigeki" first, instead of the base "Raigeki", if no full match is available, we go for most popular result */
                    cardData = baseCardData.data.find(({ name }) => name.toLowerCase() === normalizedValue.toLowerCase())
                        ?? baseCardData.data.sort((l, r) => {
                            const lMisc = l.misc_info?.[0];
                            const rMisc = r.misc_info?.[0];

                            if (!lMisc || !rMisc) return 0;

                            /** We prioritize most recently popular card, then all-time popular card */
                            const viewWeekRatio = (lMisc.viewsweek + 1) / (rMisc.viewsweek + 1);
                            if (viewWeekRatio > 2) return rMisc.viewsweek - lMisc.viewsweek;

                            return rMisc.views - lMisc.views;
                        })[0];
                }

                await startImport(cardData, true);
            }
        } catch (e) {
            console.error('Import error:', e);
            notification.error({
                message: language['error.import.error.message'],
                description: language['error.import.error.description'],
            });
        } finally {
            cleanup();
        }
    };

    return <>
        <Modal
            visible={visible}
            title={mode === 'merge'
                ? language['button.import.merge.label']
                : language['generic.import.label']}
            className="global-overlay"
            onCancel={cleanup}
            okText={language['prompt.import.ok.label']}
            confirmLoading={loading}
            cancelButtonProps={{
                style: { display: 'none' },
            }}
            destroyOnClose={false}
            onOk={startRequest}
        >
            <StyledImportContainer>
                {mode !== 'merge'
                    ? <div className="prompt-alert">
                        {language['prompt.import.instruction.line-1']}
                        <br />
                        {language['prompt.import.instruction.line-2']}
                        <br />
                        <span className="alert">{language['prompt.import.instruction.alert.line-1']}</span>
                    </div>
                    : null}
                <div className="import-container-input">
                    <Input.TextArea key={`input-${inputKey}`}
                        id={inputId}
                        className="import-input-raw"
                        size="small"
                        placeholder={language['prompt.import.message']}
                        disabled={loading}
                        onPressEnter={startRequest}
                        rows={4}
                    />
                </div>
                {mode !== 'merge'
                    ? <div className="import-container-upload">
                        <span className="option-separator">{language['prompt.import.alternative.label']}</span>
                        <StyledActionIconButton
                            className="import-custom"
                            onClick={() => {
                                const target = document.getElementById(uploadId);
                                if (target) {
                                    target.click();
                                }
                            }}
                        >
                            <input key={`file-input-${inputKey}`} ref={ygoCarderImportInputRef}
                                type="file"
                                id={uploadId}
                                accept="application/json"
                                className="import-upload-input"
                                onChange={() => {
                                    const fileList = ygoCarderImportInputRef.current?.files;

                                    getFileAndImport(fileList);
                                    cleanup();
                                }}
                            />
                            {language['button.import.tooltip']}
                        </StyledActionIconButton>
                        {mode === 'new' && <>
                            <span className="option-separator">{language['prompt.import.alternative.label']}</span>
                            <StyledActionIconButton
                                className="import-empty"
                                onClick={() => {
                                    startImport(getEmptyCard());
                                    cleanup();
                                }}
                            >
                                {language['button.empty.label']}
                            </StyledActionIconButton>
                        </>}
                    </div>
                    : null}
            </StyledImportContainer>
        </Modal>
        <Tooltip
            overlay={allowHotkey
                ? <div className="center">
                    <div>Ctrl-E / ⌘-E</div>
                    <div>Ctrl-G / ⌘-G{language['prompt.import.merge.tooltip']}</div>
                </div>
                : null}
        >
            <button
                className="primary-button import-button"
                onClick={() => {
                    setMode('replace');
                    setVisible(true);
                }}
            >
                {language['generic.import.label']}
            </button>
        </Tooltip>
        <Tooltip overlay={language['button.import.tooltip']}>
            <StyledActionIconButton
                className="secondary-button import-custom"
                onClick={() => {
                    const target = document.getElementById(directUploadId);
                    if (target) {
                        target.click();
                    }
                }}
            >
                <input key={`direct-file-input-${inputKey}`} ref={ygoCarderImportDirectInputRef}
                    type="file"
                    id={directUploadId}
                    accept="application/json"
                    className="import-upload-input"
                    onChange={() => {
                        const fileList = ygoCarderImportDirectInputRef.current?.files;

                        getFileAndImport(fileList);
                        cleanup();
                    }}
                />
                <UploadOutlined />
            </StyledActionIconButton>
        </Tooltip>
    </>;
});

export const StyledImportDropdownOverlay = styled(Menu)`
    .ant-dropdown-menu-item {
        padding: 0;
    }
    .import-upload-button {
        /** Mimic antd */
        cursor: pointer;
        padding: 5px 12px;
        background: transparent;
        border: none;
        width: 100%;
        text-align: left;
    }
    .import-upload-input {
        display: none;
    }
`;
/** Currently the importer can detect both ygocarder and other vendor data, so no need for user to pick. */
export type UnusedImportButton = ImportPanel & {
    importData: (
        event?: {
            preventDefault: () => void;
        },
        fromHotkey?: boolean,
        directData?: string,
    ) => void,
};
export const UnusedImportButton = ({
    language,
    importData,
}: UnusedImportButton) => {
    const ygoCarderImportDirectInputRef = useRef<HTMLInputElement>(null);
    const otherVendorImportInputRef = useRef<HTMLInputElement>(null);

    return <Dropdown
        forceRender={true}
        visible={true}
        overlay={<StyledImportDropdownOverlay onClick={e => e.domEvent.stopPropagation()}>
            {[
                {
                    label: language['button.import.for-ygocarder.label'],
                    id: 'for-ygocarder',
                    ref: ygoCarderImportDirectInputRef,
                    // converter: undefined,
                },
                {
                    label: language['button.import.for-other.label'],
                    id: 'for-other',
                    ref: otherVendorImportInputRef,
                    // converter: ygoCarderToCardMakerData,
                },
            ].map(({ label, id, ref }) => {
                return <Menu.Item key={`${id}`}>
                    <input ref={ref}
                        type="file"
                        id={id}
                        accept="application/json"
                        className="import-upload-input"
                        onChange={() => {
                            const fileList = ref.current?.files;
                            if (fileList) {
                                for (let cnt = 0; cnt <= fileList.length; cnt++) {
                                    const targetFile = fileList.item(cnt);
                                    if (!targetFile) continue;

                                    const reader = new FileReader();
                                    reader.onload = ({ target }) => {
                                        if (!target) return;

                                        const { result } = target;
                                        if (typeof result !== 'string') return;
                                        importData(undefined, false, result);
                                    };
                                    reader.readAsText(targetFile);
                                }
                            }
                        }}
                    />
                    <button
                        className="import-upload-button"
                        type="button"
                        onClick={() => {
                            const target = document.getElementById(id);
                            if (target) {
                                target.click();
                            }
                        }}
                    >
                        {label}
                    </button>
                </Menu.Item>;
            })}
        </StyledImportDropdownOverlay>}
    >
        <button className="secondary-button import-custom">
            <UploadOutlined />
        </button>
    </Dropdown>;
};