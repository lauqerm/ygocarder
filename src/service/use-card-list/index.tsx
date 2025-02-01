import { clone } from 'ramda';
import { Card } from 'src/model';
import { create } from 'zustand';
import { v4 as uuid } from 'uuid';

export type CardOfList = Card & { id: string };
export type CardListStore = {
    dirty: boolean,
    listName: string,
    visible: boolean,
    activeId: string,
    cardList: CardOfList[],
    changeActiveCard: (card: Card) => void,
    deleteCard: (id: string) => void,
    duplicateCard: (card: Card) => void,
    setActiveId: (id: string) => void,
    setCardList: (cardList: Card[], activeCardName: string) => void,
    setListName: (name: string) => void,
    toggleDirty: (status?: boolean) => void,
    toggleVisible: (status?: boolean) => void,
};
export const useCardList = create<CardListStore>((set) => {
    return {
        dirty: false,
        listName: 'card-list',
        visible: localStorage.getItem('manager-panel-visible') === 'true',
        activeId: '',
        cardList: [],
        toggleDirty: status => set(({ dirty }) => ({ dirty: status ?? !dirty })),
        toggleVisible: status => set(({ visible }) => ({ visible: status ?? !visible })),
        setListName: name => set({ listName: name }),
        changeActiveCard: activeCard => {
            set(({ cardList, activeId }) => ({
                dirty: true,
                cardList: cardList.map(card => {
                    if (card.id === activeId) return { ...activeCard, id: card.id };
                    return card;
                })
            }));
        },
        setActiveId: id => set({ activeId: id }),
        setCardList: (cardList, activeCardName) => {
            const normalizedCardList = cardList.map((card) => ({ ...card, id: uuid() }));
            set({
                dirty: false,
                activeId: normalizedCardList.find(card => card.name === activeCardName)?.id ?? '',
                cardList: normalizedCardList,
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