import { LanguageDataDictionary, useCardList } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { CardThumb, THUMB_SIZE } from './card-thumb';
import { useEffect, useState } from 'react';
import { getEmptyCard, InternalCard } from 'src/model';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import { Button } from 'antd';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ListChildComponentProps, FixedSizeList as List } from 'react-window';

const StyledManagerCardList = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    .list-container {
        flex: 1;
        overflow: auto;
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
    language: LanguageDataDictionary,
    onDuplicate: (card: InternalCard) => void,
    onDownload: (card: InternalCard) => void,
    onSelect: (card: InternalCard) => void,
    onDelete: (id: string) => void,
}
const CardThumbRow = ({
    data,
    index,
    style,
}: ListChildComponentProps<CardThumbRowData>) => {
    const {
        activeId,
        language,
        list,
        onDelete,
        onDownload,
        onDuplicate,
        onSelect,
    } = data;

    return <CardThumb
        index={index}
        card={list[index]}
        active={list[index].id === activeId}
        language={language}
        onDuplicate={onDuplicate}
        onSelect={onSelect}
        onDownload={onDownload}
        onDelete={onDelete}
        style={style}
    />;
};

/**
 * Be careful, all callbacks for card thumb here must be memoized.
 */
export type ManagerCardList = {
    language: LanguageDataDictionary,
    onSelect: (card: InternalCard) => void,
    onDownload: (card: InternalCard) => void,
    onRequestImport: () => void,
};
export const ManagerCardList = ({
    language,
    onSelect,
    onDownload,
    onRequestImport,
}: ManagerCardList) => {
    const {
        activeId,
        cardDisplayList,
        deleteCard,
        duplicateCard,
        resetFilter,
    } = useCardList(useShallow(({
        activeId,
        cardDisplayList,
        deleteCard,
        duplicateCard,
        resetFilter,
    }) => ({
        activeId,
        cardDisplayList,
        deleteCard,
        duplicateCard,
        resetFilter,
    })));
    const [reselectCnt, setReselectCnt] = useState(0);

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
                    onSelect(nextCard);
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
    }, [onSelect, reselectCnt]);

    return <StyledManagerCardList
        style={{
            backgroundImage: `url("${process.env.PUBLIC_URL}/asset/image/texture/dark-denim-3.png")`,
        }}
    >
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
                            onDuplicate: duplicateCard,
                            onSelect: onSelect,
                            onDownload: onDownload,
                            onDelete: deleteAndReselect,
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
        <Button
            className="add-card"
            onClick={onRequestImport}
        >
            {language['manager.button.add.label']}
        </Button>
    </StyledManagerCardList>;
};