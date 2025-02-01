import { Drawer, notification, Tooltip } from 'antd';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { CardOfList, csvToCardList, LanguageDataDictionary, useCardList } from 'src/service';
import styled from 'styled-components';
import { ManagerCardList } from './card-list';
import { useShallow } from 'zustand/react/shallow';
import { DownloadOutlined, UploadOutlined } from '@ant-design/icons';
import { cardListToCsv, CardCsv } from 'src/service';
import { downloadBlob } from 'src/util';
import { Card } from 'src/model';
import Papa from 'papaparse';

const StyledCardManagerPanel = styled.div`
    position: absolute;
    right: 0;
    top: 125px;
`;
const StyledCardManagerDrawer = styled(Drawer)`
    .ant-drawer-header {
        padding: var(--spacing-sm);
    }
    .ant-drawer-content {
        box-shadow: 0 0 3px 2px #202020;
    }
    .ant-drawer-body {
        padding: 0;
    }
    .ant-drawer-close {
        display: none;
    }
    .ant-drawer-content {
        background-color: #484848;
    }

    .manager-button {
        cursor: pointer;
        input {
            display: none;
        }
        &:hover {
            color: var(--main-active);
        }
    }
    .manager-button-container {
        display: inline-flex;
        gap: var(--spacing-sm);
    }
`;
export type CardManagerPanelRef = {};
export type CardManagerPanel = {
    language: LanguageDataDictionary,
    onVisibleChange: (status: boolean) => void,
    onSelect: (card: Card) => void,
    onDownload: (card: CardOfList) => void,
};
export const CardManagerPanel = forwardRef(({
    language,
    onVisibleChange,
    onSelect,
    onDownload,
}: CardManagerPanel, ref: React.ForwardedRef<CardManagerPanelRef>) => {
    const listUploadId = 'list-upload-id';
    const listUploadRef = useRef<HTMLInputElement>(null);
    const {
        visible,
        toggleVisible,
        toggleDirty,
        setActiveId,
        setCardList,
    } = useCardList(useShallow(({
        visible,
        toggleVisible,
        toggleDirty,
        setActiveId,
        setCardList,
    }) => ({
        visible,
        toggleVisible,
        toggleDirty,
        setActiveId,
        setCardList,
    })));
    const [inputKey, setInputKey] = useState(0);

    const activeCard = useCallback((card: CardOfList) => {
        const { id, ...normalizedCard } = card;

        onSelect(normalizedCard);
        setActiveId(id);
    }, [onSelect, setActiveId]);

    useEffect(() => {
        localStorage.setItem('manager-panel-visible', visible.toString());
        onVisibleChange(visible);
    }, [onVisibleChange, visible]);

    /** Currently no need for direct control */
    useImperativeHandle(ref, () => ({}), []);

    return <StyledCardManagerPanel>
        <StyledCardManagerDrawer
            title={<div>
                <CardManagerMonitor language={language} />
                <div className="manager-button-container">
                    <Tooltip title={language['manager.header.button.download.tooltip']}>
                        <div
                            className="manager-button"
                            onClick={async () => {
                                const csvdata = cardListToCsv(useCardList.getState().cardList);

                                downloadBlob(
                                    useCardList.getState().listName,
                                    new Blob([csvdata], { type: 'text/csv' }),
                                    'text/csv',
                                );
                                toggleDirty(false);
                            }}
                        >
                            <DownloadOutlined />
                        </div>
                    </Tooltip>
                    <Tooltip overlay={language['manager.header.button.upload.tooltip']}>
                        <div
                            className="manager-button"
                            onClick={() => {
                                const target = document.getElementById(listUploadId);
                                if (target) {
                                    target.click();
                                }
                            }}
                        >
                            <input key={`upload-${inputKey}`} ref={listUploadRef}
                                type="file"
                                id={listUploadId}
                                accept=".csv"
                                className="import-upload-input"
                                onChange={() => {
                                    const fileList = listUploadRef.current?.files;
                                    const { dirty } = useCardList.getState();
                                    let willImport = true;

                                    if (dirty) {
                                        willImport = window.confirm(language['prompt.warning.on-import.label']);
                                    }
                                    if (willImport && fileList && fileList[0]) {
                                        Papa.parse<CardCsv>(fileList[0], {
                                            complete(result) {
                                                const nextCardList = csvToCardList(result);
                                                if (nextCardList.length > 0) {
                                                    setCardList(nextCardList, nextCardList[0].name);
                                                    setInputKey(cnt => cnt + 1);
                                                    onSelect(nextCardList[0]);
                                                } else {
                                                    setInputKey(cnt => cnt + 1);
                                                    notification.error({
                                                        message: language['error.csv-import.message'],
                                                        description: language['error.csv-import.description'],
                                                    });
                                                }
                                            },
                                        });
                                    } else {
                                        setInputKey(cnt => cnt + 1);
                                    }
                                }}
                            />
                            <UploadOutlined />
                        </div>
                    </Tooltip>
                </div>
            </div>}
            visible={visible}
            maskClosable={false}
            mask={false}
            closeIcon={() => null}
            onClose={() => toggleVisible(false)}
            width={280}
        >
            <ManagerCardList
                language={language}
                onSelect={activeCard}
                onDownload={onDownload}
            />
        </StyledCardManagerDrawer>
    </StyledCardManagerPanel>;
});

type CardManagerMonitor = {
    language: LanguageDataDictionary,
}
const CardManagerMonitor = ({
    language,
}: CardManagerMonitor) => {
    const {
        dirty,
        cardList,
    } = useCardList(useShallow(({
        dirty,
        cardList,
    }) => ({
        dirty,
        cardList,
    })));

    useEffect(() => {
        let confirmReload = (ev: Event) => {
            ev.preventDefault();
            return language['prompt.warning.on-leave.label'];
        };
        /** If card list only have 1 card, its data is saved on the url and therefore can be retreived after reload. */
        if (dirty && cardList.length > 1) {
            window.addEventListener('beforeunload', confirmReload);
        }

        return () => {
            window.removeEventListener('beforeunload', confirmReload);
        };
    }, [cardList.length, dirty, language]);

    return <div></div>;
};