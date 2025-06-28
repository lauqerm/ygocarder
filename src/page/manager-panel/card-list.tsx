import { LanguageDataDictionary, useCardList, useSetting } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { CardThumb, THUMB_SIZE } from './card-thumb';
import { useCallback, useEffect, useState } from 'react';
import { getEmptyCard, InternalCard } from 'src/model';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import { Button, Dropdown, Menu } from 'antd';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ListChildComponentProps, FixedSizeList as List } from 'react-window';
import { BatchDownloadButton } from './batch-download-button';
import { CaretDownFilled } from '@ant-design/icons';

const StyledMenuItem = styled(Menu.Item)`
    &.menu-active {
        background-color: var(--main-active);
    }
`;
const StyledManagerCardList = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    .list-container {
        flex: 1;
        overflow: auto;
    }
    .batch-download-button {
        margin-bottom: var(--spacing-xs);
    }
    .select-panel {
        display: grid;
        grid-template-columns: max-content max-content 1fr;
        padding: var(--spacing-xs);
        gap: var(--spacing-xs);
        text-align: right;
        .ant-checkbox-wrapper span {
            padding-right: 0;
        }
        .scheme-button {
            display: inline-block;
        }
    }
    .no-card {
        padding: var(--spacing);
        text-align: center;
        position: absolute;
        width: 100%;
        .reset-filter {
            cursor: pointer;
            color: var(--main-active);
            &:hover {
                color: var(--sub-active);
            }
        }
    }
    .add-card {
        flex: 0;
        width: 100%;
        border-radius: 0;
        background: var(--main-primary);
        border-color: var(--main-active);
        &:hover {
            background: var(--sub-primary);
        }
    }
`;
type CardThumbRowData = {
    list: InternalCard[],
    activeId: string,
    selectedMap: Record<string, string>,
    language: LanguageDataDictionary,
    onDuplicate: (card: InternalCard) => void,
    onActive: (card: InternalCard) => void,
    onDelete: (id: string) => void,
} & Pick<CardThumb, 'onSelect'>;
const CardThumbRow = ({
    data,
    index,
    style,
}: ListChildComponentProps<CardThumbRowData>) => {
    const {
        activeId,
        selectedMap,
        language,
        list,
        onDelete,
        onDuplicate,
        onActive,
        onSelect,
    } = data;

    return <CardThumb
        index={index}
        card={list[index]}
        active={list[index].id === activeId}
        selected={!!selectedMap[list[index].id]}
        language={language}
        onDuplicate={onDuplicate}
        onActive={onActive}
        onDelete={onDelete}
        onSelect={onSelect}
        style={style}
    />;
};

/**
 * Be careful, all callbacks for card thumb here must be memoized.
 */
export type ManagerCardList = {
    language: LanguageDataDictionary,
    onActive: (card: InternalCard) => void,
    onRequestImport: () => void,
};
export const ManagerCardList = ({
    language,
    onActive,
    onRequestImport,
}: ManagerCardList) => {
    const {
        activeId,
        cardDisplayList,
        selectedMap,
        selectCard,
        deleteCard,
        duplicateCard,
        setSelectMap,
        resetFilter,
    } = useCardList(useShallow(({
        activeId,
        cardDisplayList,
        selectedMap,
        selectCard,
        deleteCard,
        duplicateCard,
        setSelectMap,
        resetFilter,
    }) => ({
        activeId,
        cardDisplayList,
        selectedMap,
        selectCard,
        deleteCard,
        duplicateCard,
        setSelectMap,
        resetFilter,
    })));
    const {
        exportScheme,
        updateSetting,
    } = useSetting(useShallow(({
        setting: { exportScheme },
        updateSetting,
    }) => ({
        exportScheme,
        updateSetting,
    })));

    const [reselectCnt, setReselectCnt] = useState(0);

    const onSelect: CardThumbRowData['onSelect'] = useCallback((card, type) => {
        selectCard(card.id, type);
    }, [selectCard]);
    const deleteAndReselect = (id: string) => {
        deleteCard(id);
        setReselectCnt(cnt => cnt + 1);
    };
    /** Throttle re-select after delete */
    useEffect(() => {
        let relevant = true;
        setTimeout(() => {
            if (relevant && reselectCnt > 0) {
                const { activeId, cardList, setCardList } = useCardList.getState();
                const nextCard = cardList.find(card => card.id === activeId);
                if (nextCard) {
                    onActive(nextCard);
                } else {
                    /** Empty list, create placeholder card */
                    const emptyCard = { id: uuid(), ...getEmptyCard() };
                    setCardList([emptyCard], emptyCard.name);
                }
            }
        }, 500);

        return () => {
            relevant = false;
        };
    }, [onActive, reselectCnt]);

    return <StyledManagerCardList
        style={{
            backgroundImage: `url("${process.env.PUBLIC_URL}/asset/image/texture/dark-denim-3.png")`,
        }}
    >
        {cardDisplayList.length > 0 && <div className="select-panel">
            <Button
                size="small"
                onClick={() => setSelectMap([], 'replace')}
            >
                {language['manager.batch.batch-download.clear.label']}
            </Button>
            <Button
                size="small"
                onClick={() => setSelectMap(cardDisplayList, 'add')}
            >
                {language['manager.batch.batch-download.all.label']}
            </Button>
            <div>
                <Dropdown
                    overlay={<Menu>
                        {[
                            {
                                value: 'with-name',
                                label: language['manager.batch.batch-download.export-option.with-name.label'],
                            },
                            {
                                value: 'with-id',
                                label: language['manager.batch.batch-download.export-option.with-id.label'],
                            },
                        ].map(({ value, label }) => {
                            return <StyledMenuItem
                                key={value}
                                onClick={() => updateSetting({ exportScheme: value })}
                                className={value === exportScheme ? 'menu-active' : ''}
                            >
                                {label}
                            </StyledMenuItem>;
                        })}
                    </Menu>}
                >
                    <div
                        className="scheme-button"
                    >
                        {language['manager.batch.batch-download.export-scheme.label']} <CaretDownFilled />
                    </div>
                </Dropdown>
            </div>
        </div>}
        <div className="list-container">
            <AutoSizer>
                {({ height, width }) => (
                    <List<CardThumbRowData>
                        className="List"
                        height={height}
                        itemCount={cardDisplayList.length}
                        itemSize={THUMB_SIZE}
                        itemData={{
                            list: cardDisplayList,
                            language,
                            activeId,
                            selectedMap,
                            onDuplicate: duplicateCard,
                            onActive,
                            onDelete: deleteAndReselect,
                            onSelect,
                        }}
                        overscanCount={5}
                        width={width}
                    >
                        {CardThumbRow}
                    </List>
                )}
            </AutoSizer>
        </div>
        {cardDisplayList.length === 0 && <div className="no-card">
            <div>{language['manager.button.search.no-card.message']}</div>
            <div className="reset-filter" onClick={resetFilter}>
                {language['manager.button.search.button.reset.label']}
            </div>
        </div>}
        {cardDisplayList.length !== 0 && <BatchDownloadButton
            language={language}
            onActive={onActive}
        />}
        <Button
            className="add-card"
            onClick={onRequestImport}
        >
            {language['manager.button.add.label']}
        </Button>
    </StyledManagerCardList>;
};