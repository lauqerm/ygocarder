import { clone } from 'ramda';
import { Card, InternalCard } from 'src/model';
import { create } from 'zustand';
import { v4 as uuid } from 'uuid';
import { isCardDataEqual } from 'src/util';

export const SortFunctionMap = {
    name: {
        key: 'name',
        sortFunction: (cardList: InternalCard[]) => {
            return cardList
                .map(card => {
                    const { name } = card;
                    const sortString = `${name}`;

                    return {
                        card,
                        sortString,
                    };
                })
                .sort((l, r) => l.sortString.localeCompare(r.sortString))
                .map(entry => entry.card);
        },
    },
    atk: {
        key: 'atk',
        sortFunction: (cardList: InternalCard[]) => {
            return cardList
                .map(card => {
                    const { atk } = card;
                    const sortString = `${atk}`;

                    return {
                        card,
                        sortString,
                    };
                })
                .sort((l, r) => l.sortString.localeCompare(r.sortString))
                .map(entry => entry.card);
        },
    },
    def: {
        key: 'def',
        sortFunction: (cardList: InternalCard[]) => {
            return cardList
                .map(card => {
                    const { def } = card;
                    const sortString = `${def}`;

                    return {
                        card,
                        sortString,
                    };
                })
                .sort((l, r) => l.sortString.localeCompare(r.sortString))
                .map(entry => entry.card);
        },
    },
    set: {
        key: 'set',
        sortFunction: (cardList: InternalCard[]) => {
            return cardList
                .map(card => {
                    const { setId } = card;
                    const sortString = `${setId}`;

                    return {
                        card,
                        sortString,
                    };
                })
                .sort((l, r) => l.sortString.localeCompare(r.sortString))
                .map(entry => entry.card);
        },
    },
    level: {
        key: 'level',
        sortFunction: (cardList: InternalCard[]) => {
            return cardList
                .map(card => {
                    const { star } = card;
                    const sortString = `${star}`;

                    return {
                        card,
                        sortString,
                    };
                })
                .sort((l, r) => l.sortString.localeCompare(r.sortString))
                .map(entry => entry.card);
        },
    },
} as const;
export type CardListStore = {
    isListDirty: boolean,
    listName: string,
    visible: boolean,
    activeId: string,
    cardList: InternalCard[],
    changeActiveCard: (nextActiveCard: InternalCard, checkPurity?: boolean) => void,
    changeEditStatus: (event: 'download' | 'load' | 'switch-card' | 'update-card') => void,
    deleteCard: (id: string) => void,
    duplicateCard: (card: Card) => void,
    setActiveId: (id: string) => void,
    setCardList: (cardList: InternalCard[], activeId?: string) => void,
    setListName: (name: string) => void,
    sortList: (type: keyof typeof SortFunctionMap) => void,
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
        },
        sortList: type => {
            set(({ cardList }) => ({
                cardList: SortFunctionMap[type].sortFunction(cardList),
            }));
        }
    };
});

export * from './csv';