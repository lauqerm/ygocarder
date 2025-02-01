import { CardOfList, LanguageDataDictionary, useCardList } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { CardThumb } from './card-thumb';
import { useEffect, useState } from 'react';
import { getEmptyCard } from 'src/model';

/**
 * Be careful, all callbacks here must be memoized.
 */
export type ManagerCardList = {
    language: LanguageDataDictionary,
    onSelect: (card: CardOfList) => void,
    onDownload: (card: CardOfList) => void,
};
export const ManagerCardList = ({
    language,
    onSelect,
    onDownload,
}: ManagerCardList) => {
    const {
        cardList,
        activeId,
        duplicateCard,
        deleteCard,
    } = useCardList(useShallow(({
        cardList,
        activeId,
        duplicateCard,
        deleteCard,
    }) => ({
        cardList,
        activeId,
        duplicateCard,
        deleteCard,
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
                    const emptyCard = getEmptyCard();
                    setCardList([emptyCard], emptyCard.name);
                }
            }
        }, 500);

        return () => {
            relevant = false;
        };
    }, [onSelect, reselectCnt]);

    return <div
        style={{
            backgroundImage: `url("${process.env.PUBLIC_URL}/asset/image/texture/dark-denim-3.png")`,
        }}
    >
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
    </div>;
};