import { Dropdown, Menu, notification } from 'antd';
import { useRef, useState } from 'react';
import { csvToCardList, decodeCard, LanguageDataDictionary, useCardList } from 'src/service';
import styled from 'styled-components';
import {
    UploadOutlined,
    LoadingOutlined,
} from '@ant-design/icons';
import { useShallow } from 'zustand/react/shallow';
import { ImportFormatList, InternalCard } from 'src/model';

const StyledUploadMenu = styled(Menu)`
    width: 260px;
    input {
        display: none;
    }
`;
export type ManagerUploadPanel = {
    language: LanguageDataDictionary,
    inputKey: number,
    setInputKey: React.Dispatch<React.SetStateAction<number>>,
    onSelect: (card: InternalCard) => void,
};
export const ManagerUploadPanel = ({
    language,
    inputKey,
    setInputKey,
    onSelect,
}: ManagerUploadPanel) => {
    const listUploadId = 'list-upload-id';
    const listUploadRef = useRef<HTMLInputElement>(null);
    const jsonUploadId = 'json-upload-id';
    const jsonUploadRef = useRef<HTMLInputElement>(null);
    const [readingFile, setReadingFile] = useState(false);
    const {
        cardList,
        setCardList,
        setListName,
    } = useCardList(useShallow(({
        cardList,
        setCardList,
        setListName,
    }) => ({
        cardList,
        setCardList,
        setListName,
    })));

    return <Dropdown
        forceRender
        overlay={<StyledUploadMenu className="convert-menu">
            <Menu.ItemGroup
                title={<div>
                    <b>{language['manager.header.button.upload.tooltip']}</b>
                </div>}
            >
                <Menu.Item
                    key={'upload-csv'}
                    onClick={() => {
                        const target = document.getElementById(listUploadId);
                        if (target && !readingFile) {
                            target.click();
                        }
                    }}
                >
                    <div
                        className="manager-button"
                    >
                        <input key={`upload-${inputKey}`} ref={listUploadRef}
                            type="file"
                            id={listUploadId}
                            accept={[
                                '.csv',
                                'application/vnd.ms-excel',
                                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                            ].join(',')}
                            className="import-upload-input"
                            onChange={async () => {
                                const fileList = listUploadRef.current?.files;
                                const { isListDirty } = useCardList.getState();
                                const announceError = () => {
                                    setInputKey(cnt => cnt + 1);
                                    setReadingFile(false);
                                    notification.error({
                                        message: language['error.file-import.message'],
                                        description: language['error.csv-import.description'],
                                    });
                                };
                                let willImport = true;

                                if (isListDirty) {
                                    willImport = window.confirm(language['prompt.warning.on-import.label']);
                                }
                                if (willImport && fileList && fileList[0]) {
                                    setReadingFile(true);
                                    try {
                                        const file = await fileList[0].arrayBuffer();
                                        const fileName = fileList[0].name.replace(/\.[^/.]+$/, '');

                                        /** Assume data from only the very first sheet */
                                        /** 65001 codepage allow display unicode characters such as Japanese */
                                        const XLSX = await import('xlsx');
                                        const workbook = XLSX.read(file, { codepage: 65001 });
                                        const csvBook = XLSX.utils.sheet_to_json<string[]>(
                                            workbook.Sheets[workbook.SheetNames[0]],
                                            { header: 1, raw: false },
                                        );
                                        const nextCardList = csvToCardList(csvBook);

                                        if (nextCardList.length > 0) {
                                            setCardList(nextCardList, nextCardList[0].id);
                                            setListName(fileName);
                                            setInputKey(cnt => cnt + 1);
                                            onSelect(nextCardList[0]);
                                            setReadingFile(false);
                                        } else {
                                            announceError();
                                        }
                                    } catch (e) {
                                        console.error(e);
                                        announceError();
                                    }
                                } else {
                                    setInputKey(cnt => cnt + 1);
                                    setReadingFile(false);
                                }
                            }}
                        />
                        {ImportFormatList[0].label}
                    </div>
                </Menu.Item>
                <Menu.Item
                    key={'upload-json'}
                    onClick={() => {
                        const target = document.getElementById(jsonUploadId);
                        if (target && !readingFile) {
                            target.click();
                        }
                    }}
                >
                    <div
                        className="manager-button"
                    >
                        <input key={`upload-${inputKey}`} ref={jsonUploadRef}
                            type="file"
                            id={jsonUploadId}
                            multiple
                            accept={[
                                '.json',
                                'application/json',
                            ].join(',')}
                            className="import-upload-input"
                            onChange={async () => {
                                const fileList = jsonUploadRef.current?.files;
                                const announceError = (successCount = 0, partialCount = 0, failedCount = 0) => {
                                    setInputKey(cnt => cnt + 1);
                                    setReadingFile(false);
                                    notification.error({
                                        message: language['error.file-import.message'],
                                        description: `${language['error.json-import.success.description'](successCount)} ${language['error.json-import.failed.description'](failedCount)} ${language['error.json-import.partial.description'](partialCount)}`,
                                    });
                                };

                                if (fileList && fileList.length > 0) {
                                    setReadingFile(true);
                                    const jsonList = Array.from(fileList);
                                    let successCount = 0;
                                    let partialCount = 0;
                                    let failedCount = 0;
                                    const nextCardList: InternalCard[] = [...cardList];
                                    for (let cnt = 0; cnt < jsonList.length; cnt++) {
                                        const entry = jsonList[cnt];
                                        try {
                                            const cardData = await entry.text();
                                            const {
                                                card: decodedCard,
                                                isPartial,
                                            } = decodeCard(cardData, undefined, false);

                                            if (isPartial) {
                                                partialCount += 1;
                                            } else {
                                                successCount += 1;
                                            }
                                            nextCardList.push(decodedCard);
                                        } catch (e) {
                                            console.error(e);
                                            failedCount += 1;
                                        }
                                    }

                                    if (nextCardList.length > 0) {
                                        setCardList(nextCardList, nextCardList[0].id);
                                        setListName('card-list');
                                        setInputKey(cnt => cnt + 1);
                                        onSelect(nextCardList[0]);
                                        setReadingFile(false);
                                    }
                                    if (partialCount > 0 || failedCount > 0) announceError(successCount, partialCount, failedCount);
                                } else {
                                    setInputKey(cnt => cnt + 1);
                                    setReadingFile(false);
                                }
                            }}
                        />
                        {ImportFormatList[1].label}
                    </div>
                </Menu.Item>
            </Menu.ItemGroup>
        </StyledUploadMenu>}
    >
        <div
            className="manager-button"
        >
            {readingFile ? <LoadingOutlined /> : <UploadOutlined />}
        </div>
    </Dropdown>;
};