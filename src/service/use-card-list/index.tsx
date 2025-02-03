import { clone } from 'ramda';
import { Card, InternalCard } from 'src/model';
import { create } from 'zustand';
import { v4 as uuid } from 'uuid';
import { isCardDataEqual } from 'src/util';

export type CardListStore = {
    isListDirty: boolean,
    listName: string,
    visible: boolean,
    activeId: string,
    cardList: InternalCard[],
    changeActiveCard: (nextActiveCard: InternalCard, checkPurity?: boolean) => void,
    deleteCard: (id: string) => void,
    duplicateCard: (card: Card) => void,
    setActiveId: (id: string) => void,
    setCardList: (cardList: InternalCard[], activeId?: string) => void,
    setListName: (name: string) => void,
    changeEditStatus: (event: 'download' | 'load' | 'switch-card' | 'update-card') => void,
    toggleVisible: (status?: boolean) => void,
};
export const useCardList = create<CardListStore>((set) => {
    return {
        isListDirty: false,
        listName: 'card-list',
        visible: localStorage.getItem('manager-panel-visible') === 'true',
        activeId: '',
        cardList: [],
        changeEditStatus: event => {
            if (event === 'load') set({ isListDirty: false });
            if (event === 'download') set({ isListDirty: false });
        },
        toggleVisible: status => set(({ visible }) => ({ visible: status ?? !visible })),
        setListName: name => set({ listName: name }),
        changeActiveCard: (nextActiveCard, checkPurity = false) => {
            set(({ cardList, isListDirty }) => {
                let nextIsListDirty = isListDirty;

                if (nextIsListDirty === false && checkPurity) {
                    const targetCard = cardList.find(card => card.id === nextActiveCard.id);

                    nextIsListDirty = targetCard
                        ? !isCardDataEqual(nextActiveCard, targetCard)
                        : true;
                }
                const nextCardList = cardList.map(card => {
                    if (card.id === nextActiveCard.id) return { ...nextActiveCard };
                    return card;
                });
                return {
                    isListDirty: nextIsListDirty,
                    cardList: nextCardList,
                };
            });
        },
        setActiveId: id => set({ activeId: id }),
        setCardList: (cardList, activeId) => {
            set({
                isListDirty: false,
                activeId: activeId ?? cardList[0]?.id,
                cardList: cardList,
            });
        },
        deleteCard: id => {
            set(({ cardList, activeId }) => {
                const normalizedCardList = cardList.filter(card => card.id !== id);
                const currentActiveId = cardList.findIndex(card => card.id === activeId);
                const nextActiveId = activeId === id
                    ? normalizedCardList[currentActiveId - 1]?.id ?? normalizedCardList[0]?.id ?? ''
                    : activeId;

                return {
                    activeId: nextActiveId,
                    cardList: normalizedCardList,
                };
            });
        },
        duplicateCard: card => {
            set(({ cardList }) => {
                const targetIndex = cardList.findIndex(({ name }) => name === card.name);
                const clonedCard = {
                    ...clone(card),
                    name: `${card.name} - Copy`,
                    id: uuid(),
                };

                if (targetIndex < 0) return {
                    cardList: [...cardList, clonedCard],
                };
                return {
                    cardList: [
                        ...cardList.slice(0, targetIndex),
                        cardList[targetIndex],
                        clonedCard,
                        ...cardList.slice(targetIndex + 1, cardList.length),
                    ],
                };
            });
        }
    };
});

export * from './csv';