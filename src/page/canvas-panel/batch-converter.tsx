import { Modal, notification, Tooltip } from 'antd';
import { StyledActionIconButton } from './styled';
import { RetweetOutlined, ArrowRightOutlined, CloseOutlined } from '@ant-design/icons';
import { decodeCard, LanguageDataDictionary } from 'src/service';
import styled from 'styled-components';
import { useState } from 'react';
import {
    downloadBlob,
    checkYgoCarderCard,
    mergeClass,
    ygoCarderToCardMakerData,
    compressCardData,
    checkCompactYgoCarderCard,
} from 'src/util';
import JSZip from 'jszip';

const StyledBatchConverterModal = styled(Modal)`
    .controller {
        display: flex;
        gap: var(--spacing);
        align-items: center;
        label {
            background: var(--main-level-4);
            border: var(--bw) solid var(--sub-level-4);
            padding: 0 var(--spacing-xs);
            border-radius: var(--br);
        }
        .toggle-button {
            padding: 0;
            /** Alignemnt */
            width: 26px;
            height: 26px;
            background-color: var(--main-primary);
            border: var(--bw) solid var(--sub-primary);
            border-radius: var(--br);
            box-shadow: var(--bs-block);
            cursor: pointer;
            transform: rotate(0deg);
            transition: transform 0.33s ease-in-out;
            &.reverse{
                transform: rotate(-180deg);
                transition: transform 0.33s ease-in-out;
            }
            &:hover {
                background-color: var(--sub-primary);
            }
        }
    }
    .announce {
        text-align: center;
        .warning {
            color: var(--main-danger);
        }
        .in-progress {
            color: var(--main-info);
        }
    }
    .file-panel {
        margin-top: var(--spacing);
        input {
            width: 100%;
            background: var(--main-level-4);
            padding: var(--spacing-xs);
            border-radius: var(--br);
            cursor: pointer;
            margin-bottom: var(--spacing-sm);
        }
        .file-list {
            margin-top: var(--spacing-sm);
            &:empty {
                margin-top: 0;
            }
        }
        .file-entry {
            display: grid;
            grid-template-columns: 1fr max-content;
            gap: var(--spacing-xs);
            background-color: var(--main-level-1);
            border: 1px solid var(--sub-level-3);
            padding: 0 var(--spacing-xs);
            border-radius: var(--br-lg);
            + .file-entry {
                margin-top: var(--spacing-xxs);
            }
            .file-action {
                .anticon:hover {
                    color: var(--sub-danger);
                }
            }
        }
    }
`;

export type BatchConverter = {
    language: LanguageDataDictionary,
}
export const BatchConverter = ({
    language,
}: BatchConverter) => {
    const fileLimit = 50;
    const [visible, setVisible] = useState(false);
    const [isRunning, setRunning] = useState(false);
    const [isReverse, setReverse] = useState(false);
    const [fileList, setFileList] = useState<{ file: File, name: string }[]>([]);
    const isExceedMaxAmount = fileList.length > fileLimit;

    return <>
        <StyledBatchConverterModal
            visible={visible}
            title={language['converter.header.label']}
            okButtonProps={{
                disabled: isExceedMaxAmount || isRunning,
            }}
            okText={language['converter.ok.label']}
            cancelText={language['converter.cancel.label']}
            onCancel={() => setVisible(false)}
            onOk={async () => {
                try {
                    setRunning(true);
                    /** Convert here */
                    const convertedFileList = await Promise.all(fileList.map(({ file, name }) => {
                        return new Promise<{ blob: Blob, name: string }>((resolve, reject) => {
                            const reader = new FileReader();
                            reader.onload = ({ target }) => {
                                if (!target) {
                                    reject('Not a valid target');
                                    return;
                                }

                                const { result } = target;
                                if (typeof result !== 'string') {
                                    reject('Not a valid result');
                                    return;
                                }

                                let resultObject = JSON.parse(result);
                                /** Ensure compact mode, remember we only accept non-compress card data as a quality-of-life. Normal card data should always be in compact mode */
                                if (checkYgoCarderCard(resultObject)) {
                                    resultObject = compressCardData(resultObject);
                                }

                                const isYgoCarderCard = checkCompactYgoCarderCard(resultObject);
                                let convertedCard: Record<string, any> | null = null;
                                if (isReverse) {
                                    /** Ygocarder into other vendor */
                                    convertedCard = isYgoCarderCard
                                        ? ygoCarderToCardMakerData(decodeCard(resultObject).card).result
                                        : resultObject;
                                } else {
                                    /** Other vendor into ygocarder */
                                    convertedCard = isYgoCarderCard
                                        ? resultObject
                                        : compressCardData(decodeCard(resultObject).card);
                                }

                                if (!convertedCard) {
                                    reject('Not a valid converted result');
                                    return;
                                }
                                const blob = new Blob(
                                    [`${JSON.stringify(convertedCard)}`],
                                    { type: 'application/json' },
                                );
                                resolve({ blob, name });
                            };
                            reader.readAsText(file);
                        });
                    }));

                    const zipObject = new JSZip();
                    convertedFileList.forEach(({ blob, name }) => {
                        zipObject.file(name, blob);
                    });
                    const zipBlob = await zipObject.generateAsync({
                        type: 'blob',
                    });
                    downloadBlob(
                        'convert-result.zip',
                        zipBlob,
                        'application/zip',
                    );
                    setRunning(false);
                    setVisible(false);
                } catch (e) {
                    console.error(e);
                    notification.error({
                        message: language['error.convert.message'],
                        description: language['error.convert.description'],
                    });
                    setRunning(false);
                }
            }}
        >
            <div className="controller">
                <label>YGOPro / DuelingNexus / NeoCardMaker</label>
                <div>
                    <button
                        className={mergeClass('toggle-button', isReverse ? 'reverse' : '')}
                        onClick={() => setReverse(cur => !cur)}
                    >
                        <ArrowRightOutlined />
                    </button>
                </div>
                <label>Yugioh Carder</label>
            </div>
            <div className="file-panel">
                <input
                    type="file"
                    accept="application/json"
                    multiple
                    onChange={e => {
                        const fileFromInput = e.target.files;

                        if (fileFromInput) {
                            const nextFileList: { file: File, name: string }[] = [];

                            for (let cnt = 0; cnt <= fileFromInput.length; cnt++) {
                                const targetFile = fileFromInput.item(cnt);
                                if (targetFile) nextFileList.push({ file: targetFile, name: targetFile.name });
                            }

                            setFileList(nextFileList);
                        }
                    }}
                />
                <div className="announce">
                    {language['converter.header.information.label']}
                    {isRunning && <div className="in-progress">
                        {language['converter.header.in-progress.label']}
                    </div>}
                    {isExceedMaxAmount && <div className="warning">
                        {language['converter.header.warning.label'](fileLimit)}
                    </div>}
                </div>
                <div className="file-list">
                    {fileList.map(({ name }) => {
                        return <div key={name} className="file-entry">
                            <div>{name}</div>
                            <div className="file-action">
                                <CloseOutlined
                                    disabled={isRunning}
                                    onClick={() => setFileList(curList => {
                                        return curList.filter(entry => entry.name !== name);
                                    })}
                                />
                            </div>
                        </div>;
                    })}
                </div>
            </div>
        </StyledBatchConverterModal>
        <Tooltip overlay={language['converter.header.label']}>
            <StyledActionIconButton
                className="batch-converter"
                onClick={() => setVisible(true)}
            >
                <RetweetOutlined />
            </StyledActionIconButton>
        </Tooltip>
    </>;
};