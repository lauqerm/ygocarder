import { Drawer, Dropdown, Input, Menu, notification, Tooltip } from 'antd';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { csvToCardList, LanguageDataDictionary, SortFunctionMap, useCardList, useSetting } from 'src/service';
import styled from 'styled-components';
import { ManagerCardList } from './card-list';
import { useShallow } from 'zustand/react/shallow';
import {
    DownloadOutlined,
    UploadOutlined,
    CloseOutlined,
    UnorderedListOutlined,
    LoadingOutlined,
    // FilterOutlined,
} from '@ant-design/icons';
import { cardListToCsv } from 'src/service';
import { downloadBlob, getNaivePseudoRandomizer } from 'src/util';
import { InternalCard } from 'src/model';
import { ManagerSample } from './manager-sample';
import debounce from 'lodash.debounce';
import XLSX from 'xlsx';

const chanceToRemindBackup = getNaivePseudoRandomizer();
const StyledCardManagerPanel = styled.div`
    position: absolute;
    right: 0;
    top: 125px;
`;
const StyledCardManagerDrawer = styled(Drawer)`
    .ant-drawer-header {
        padding: 0;
    }
    .ant-drawer-content {
        box-shadow: 0 0 3px 2px #202020;
    }
    .ant-drawer-body {
        padding: 0;
        height: 100%;
    }
    .ant-drawer-close {
        display: none;
    }
    .ant-drawer-content {
        background-color: #484848;
    }

    .manager-label-container {
        padding: var(--spacing-sm) 0 0 var(--spacing-sm);
    }
    .manager-button-container {
        padding: var(--spacing-sm) var(--spacing-sm) 0 var(--spacing-sm);
        .manager-button {
            cursor: pointer;
            input {
                display: none;
            }
            &:hover {
                color: var(--main-active);
                .anticon {
                    color: var(--main-active);
                }
            }
            &.close-button:hover {
                .anticon {
                    color: var(--main-danger);
                }
            }
        }
    }
    .card-manager-header {
        display: grid;
        grid-template-columns: 1fr max-content;
        .card-manager-filter {
            grid-column: span 2;
            padding: var(--spacing-xs);
            .card-manager-search {
                width: 100%;
            }
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
    onSelect: (card: InternalCard) => void,
    onDownload: (card: InternalCard) => void,
    onRequestImport: () => void,
};
export const CardManagerPanel = forwardRef(({
    language,
    onVisibleChange,
    onSelect,
    onDownload,
    onRequestImport,
}: CardManagerPanel, ref: React.ForwardedRef<CardManagerPanelRef>) => {
    const listUploadId = 'list-upload-id';
    const listUploadRef = useRef<HTMLInputElement>(null);
    const {
        cardList,
        changeEditStatus,
        pendingActiveCard,
        setActiveId,
        setCardList,
        setFilterFunction,
        setListName,
        setPendingActiveCard,
        sortList,
        toggleVisible,
        visible,
    } = useCardList(useShallow(({
        cardList,
        changeEditStatus,
        pendingActiveCard,
        setActiveId,
        setCardList,
        setFilterFunction,
        setListName,
        setPendingActiveCard,
        sortList,
        toggleVisible,
        visible,
    }) => ({
        cardList,
        changeEditStatus,
        pendingActiveCard,
        setActiveId,
        setCardList,
        setFilterFunction,
        setListName,
        setPendingActiveCard,
        sortList,
        toggleVisible,
        visible,
    })));
    const exportFormat = useSetting(state => state.setting.exportFormat);
    const [inputKey, setInputKey] = useState(0);
    const [readingFile, setReadingFile] = useState(false);
    const [savingFile, setSavingFile] = useState(false);
    const debounceSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterFunction({ type: 'text', value: e.target.value });
    }, 250);

    const activeCard = useCallback((card: InternalCard) => {
        onSelect(card);
        setActiveId(card.id);
    }, [onSelect, setActiveId]);

    useEffect(() => {
        if (pendingActiveCard) {
            onSelect(pendingActiveCard);
            setActiveId(pendingActiveCard.id);
            setPendingActiveCard();
        }
    }, [onSelect, pendingActiveCard, setActiveId, setPendingActiveCard]);

    useEffect(() => {
        localStorage.setItem('manager-panel-visible', visible.toString());
        onVisibleChange(visible);
    }, [onVisibleChange, visible]);

    useEffect(() => {
        const unsub = useCardList.subscribe(
            state => state.filterResetSignal,
            nextSignal => {
                if (nextSignal) {
                    setInputKey(cnt => cnt + 1);
                }
            }
        );

        return () => {
            unsub();
        };
    }, []);

    /** Currently no need for direct control */
    useImperativeHandle(ref, () => ({}), []);

    return <StyledCardManagerPanel>
        <StyledCardManagerDrawer
            title={<div className="card-manager-header truncate">
                <CardManagerMonitor className="manager-label-container truncate" language={language}>
                    {cardList.length}
                </CardManagerMonitor>
                <div className="manager-button-container">
                    <div
                        className="manager-button"
                    >
                        <ManagerSample language={language} />
                    </div>
                    <Dropdown
                        overlay={<Menu>
                            {[
                                {
                                    value: SortFunctionMap.level.key,
                                    label: language['manager.button.sort.level.label'],
                                },
                                {
                                    value: SortFunctionMap.name.key,
                                    label: language['manager.button.sort.name.label'],
                                },
                                {
                                    value: SortFunctionMap.atk.key,
                                    label: language['manager.button.sort.atk.label'],
                                },
                                {
                                    value: SortFunctionMap.def.key,
                                    label: language['manager.button.sort.def.label'],
                                },
                                {
                                    value: SortFunctionMap.set.key,
                                    label: language['manager.button.sort.set-id.label'],
                                },
                            ].map(({ value, label }) => {
                                return <Menu.Item key={value} onClick={() => sortList(value)}>
                                    {label}
                                </Menu.Item>;
                            })}
                        </Menu>}
                    >
                        <div
                            className="manager-button"
                        >
                            <UnorderedListOutlined />
                        </div>
                    </Dropdown>
                    {/* <Tooltip title={language['manager.header.button.filter.tooltip']}>
                        <div
                            className="manager-button"
                        >
                            <FilterOutlined />
                        </div>
                    </Tooltip> */}
                    <Tooltip title={language['manager.header.button.download.tooltip']}>
                        <div
                            className="manager-button"
                            onClick={async () => {
                                let wouldDownload = true;
                                setSavingFile(true);
                                if (chanceToRemindBackup.check()) {
                                    wouldDownload = window.confirm(language['prompt.remind.backup.label']);
                                }

                                if (wouldDownload) {
                                    try {
                                        const {
                                            error,
                                            value: csvdata,
                                        } = cardListToCsv(useCardList.getState().cardList);

                                        if (error) {
                                            let errorMessage = '';
                                            let errorDescription = '';
                                            switch (error) {
                                                case 'offline-data': {
                                                    errorMessage = language['error.export.offline-data.message'];
                                                    errorDescription = language['error.export.offline-data.description'];
                                                    break;
                                                }
                                            }

                                            if (errorMessage || errorDescription) {
                                                notification.error({
                                                    message: errorMessage,
                                                    description: errorDescription,
                                                });
                                            }
                                        }
                                        switch (exportFormat) {
                                            case 'xlsx': {
                                                const exportWorkbook = XLSX.read(csvdata, { type: 'string' });
                                                XLSX.writeFile(exportWorkbook, `${useCardList.getState().listName}.xlsx`);
                                                break;
                                            }
                                            default: {
                                                downloadBlob(
                                                    useCardList.getState().listName,
                                                    new Blob([csvdata], { type: 'text/csv' }),
                                                    'text/csv',
                                                );
                                            }
                                        }
                                        changeEditStatus('download');
                                    } catch (e) {}
                                }
                                setSavingFile(false);
                            }}
                        >
                            {savingFile ? <LoadingOutlined /> : <DownloadOutlined />}
                        </div>
                    </Tooltip>
                    <Tooltip key={`${readingFile}`} overlay={language['manager.header.button.upload.tooltip']}>
                        <div
                            className="manager-button"
                            onClick={() => {
                                const target = document.getElementById(listUploadId);
                                if (target && !readingFile) {
                                    target.click();
                                }
                            }}
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
                                onChange={async (e) => {
                                    const fileList = listUploadRef.current?.files;
                                    const { isListDirty } = useCardList.getState();
                                    const announceError = () => {
                                        setInputKey(cnt => cnt + 1);
                                        setReadingFile(false);
                                        notification.error({
                                            message: language['error.csv-import.message'],
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
                                            /** 65001 codepage allow display unicode characters such as japanese */
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
                            {readingFile ? <LoadingOutlined /> : <UploadOutlined />}
                        </div>
                    </Tooltip>
                    <div
                        className="manager-button close-button"
                        onClick={() => toggleVisible(false)}
                    >
                        <CloseOutlined />
                    </div>
                </div>
                <div className="card-manager-filter">
                    <Input key={`search-${inputKey}`}
                        className="card-manager-search"
                        placeholder={language['manager.button.search.text.placeholder']}
                        onChange={debounceSearch}
                        allowClear
                    />
                </div>
            </div>}
            visible={visible}
            maskClosable={false}
            mask={false}
            destroyOnClose={false}
            forceRender={true}
            closeIcon={() => null}
            onClose={() => toggleVisible(false)}
            width={280}
        >
            <ManagerCardList
                language={language}
                onSelect={activeCard}
                onDownload={onDownload}
                onRequestImport={onRequestImport}
            />
        </StyledCardManagerDrawer>
    </StyledCardManagerPanel>;
});

const StyledCardManagerMonitor = styled.div`
    .header-warning {
        color: var(--main-danger);
    }
`;
type CardManagerMonitor = {
    language: LanguageDataDictionary,
} & React.HTMLAttributes<HTMLDivElement>;
const CardManagerMonitor = ({
    language,
    children,
    ...rest
}: CardManagerMonitor) => {
    const {
        isListDirty,
        cardList,
    } = useCardList(useShallow(({
        isListDirty,
        cardList,
    }) => ({
        isListDirty,
        cardList,
    })));

    useEffect(() => {
        let confirmReload = (ev: Event) => {
            ev.preventDefault();
            return language['prompt.warning.on-leave.label'];
        };
        /** If card list only have 1 card, its data is saved on the url and therefore can be retreived after reload. */
        if (isListDirty && cardList.length > 1) {
            window.addEventListener('beforeunload', confirmReload);
        }

        return () => {
            window.removeEventListener('beforeunload', confirmReload);
        };
    }, [cardList.length, isListDirty, language]);

    return <StyledCardManagerMonitor {...rest}>
        {children}{(isListDirty && cardList.length > 1) && <span className="header-warning">&nbsp;*</span>}
    </StyledCardManagerMonitor>;
};