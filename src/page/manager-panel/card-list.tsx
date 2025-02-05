import { LanguageDataDictionary, useCardList } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { CardThumb } from './card-thumb';
import { useEffect, useState } from 'react';
import { getEmptyCard, InternalCard } from 'src/model';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import { Button } from 'antd';

const StyledManagerCardList = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    .list-container {
        flex: 1;
        overflow: auto;
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
        cardList,
        deleteCard,
        duplicateCard,
    } = useCardList(useShallow(({
        activeId,
        cardList,
        deleteCard,
        duplicateCard,
    }) => ({
        activeId,
        cardList,
        deleteCard,
        duplicateCard,
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
            {cardList.map(card => <CardThumb
                key={card.id}
                card={card}
                active={card.id === activeId}
                language={language}
                onDuplicate={duplicateCard}
                onSelect={onSelect}
                onDownload={onDownload}
                onDelete={deleteAndReselect}
            />)}
        </div>
        <Button
            className="add-card"
            onClick={onRequestImport}
        >
            {language['manager.button.add.label']}
        </Button>
    </StyledManagerCardList>;
};