import { clone } from 'ramda';
import { Card, FrameInfoMap, InternalCard } from 'src/model';
import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { v4 as uuid } from 'uuid';
import { checkSpeedSkill, isCardDataEqual, normalizeCardEffect, normalizeCardName } from 'src/util';

const compareInt = (statLeft: string | number | undefined, statRight: string | number | undefined) => {
    const parsedStatLeft = typeof statLeft === 'string' ? parseInt(statLeft) : statLeft;
    const parsedStatRight = typeof statRight === 'string' ? parseInt(statRight) : statRight;
    const isLeftFinite = parsedStatLeft ? isFinite(parsedStatLeft) : false;
    const isRightFinite = parsedStatRight ? isFinite(parsedStatRight) : false;

    if (isLeftFinite && !isRightFinite) return -1;
    if (!isLeftFinite && isRightFinite) return 1;
    if (isLeftFinite && isRightFinite) return (parsedStatRight ?? 0) - (parsedStatLeft ?? 0);

    const fallbackStatLeft = statLeft === '?'
        ? 1
        : statLeft === ''
            ? -1
            : 0;
    const fallbackStatRight = statRight === '?'
        ? 1
        : statRight === ''
            ? -1
            : 0;

    if (
        fallbackStatRight - fallbackStatLeft === 0
        && typeof statLeft === 'string'
        && typeof statRight === 'string'
    ) return (statLeft ?? '').localeCompare(statRight);
    return fallbackStatRight - fallbackStatLeft;
};
const compareName = (l: InternalCard, r: InternalCard) => l.name.localeCompare(r.name);
const compareSetId = (l: InternalCard, r: InternalCard) => l.setId.localeCompare(r.setId);
const compareAtk = (l: InternalCard, r: InternalCard) => compareInt(l.atk, r.atk);
const compareDef = (l: InternalCard, r: InternalCard) => compareInt(l.def, r.def);
const compareStar = (l: InternalCard, r: InternalCard) => {
    if (l.isLink && r.isLink) return r.linkMap.length - l.linkMap.length;
    return compareInt(l.star, r.star);
};
const compareFrame = (l: InternalCard, r: InternalCard) => {
    try {
        const frameResult = FrameInfoMap[r.frame].sortWeight - FrameInfoMap[l.frame].sortWeight;

        if (frameResult !== 0) return frameResult;

        /** Assume we do not find frame result because it is "auto", and auto is the highest order */
        const bottomFrameResult = (FrameInfoMap[r.pendulumFrame]?.sortWeight ?? 1000) - (FrameInfoMap[l.pendulumFrame]?.sortWeight ?? 1000);

        return bottomFrameResult;
    } catch (e) {
        return 0;
    }
};
const normalizeCard = (card: InternalCard) => {
    const normalizedCard = { ...card };
    const { frame, isLink } = normalizedCard;

    if (frame === 'spell' || frame === 'trap' || checkSpeedSkill(normalizedCard)) {
        normalizedCard.atk = '';
        normalizedCard.def = '';
        normalizedCard.star = 0;
    }
    if (isLink) {
        normalizedCard.def = '';
        normalizedCard.star = 0;
    }

    return normalizedCard;
};
const chainCompare = (compareList: ((l: InternalCard, r: InternalCard) => number)[], lCard: InternalCard, rCard: InternalCard) => {
    for (let cnt = 0; cnt < compareList.length; cnt++) {
        const result = compareList[cnt](lCard, rCard);

        if (result !== 0) return result;
    }
    return 0;
};
export const SortFunctionMap = {
    name: {
        key: 'name',
        sortFunction: (cardList: InternalCard[]) => {
            return cardList
                .map(normalizeCard)
                .sort((l, r) => chainCompare(
                    [
                        compareName,
                        compareStar,
                        compareFrame,
                        compareSetId,
                        compareAtk,
                        compareDef,
                    ],
                    l,
                    r,
                ));
        },
    },
    atk: {
        key: 'atk',
        sortFunction: (cardList: InternalCard[]) => {
            return cardList
                .map(normalizeCard)
                .sort((l, r) => chainCompare(
                    [
                        compareAtk,
                        compareDef,
                        compareStar,
                        compareFrame,
                        compareName,
                        compareSetId,
                    ],
                    l,
                    r,
                ));
        },
    },
    def: {
        key: 'def',
        sortFunction: (cardList: InternalCard[]) => {
            return cardList
                .map(normalizeCard)
                .sort((l, r) => chainCompare(
                    [
                        compareDef,
                        compareAtk,
                        compareStar,
                        compareFrame,
                        compareName,
                        compareSetId,
                    ],
                    l,
                    r,
                ));
        },
    },
    set: {
        key: 'set',
        sortFunction: (cardList: InternalCard[]) => {
            return cardList
                .map(normalizeCard)
                .sort((l, r) => chainCompare(
                    [
                        compareSetId,
                        compareFrame,
                        compareStar,
                        compareName,
                        compareAtk,
                        compareDef,
                    ],
                    l,
                    r,
                ));
        },
    },
    level: {
        key: 'level',
        sortFunction: (cardList: InternalCard[]) => {
            return cardList
                .map(normalizeCard)
                .sort((l, r) => chainCompare(
                    [
                        compareFrame,
                        compareStar,
                        compareName,
                        compareSetId,
                        compareAtk,
                        compareDef,
                    ],
                    l,
                    r,
                ));
        },
    },
} as const;
const applyFilter = (
    cardList: InternalCard[],
    filterMap: Partial<Record<CardFilterType, (cardList: InternalCard[]) => InternalCard[]>>,
) => {
    const filterList = Object
        .values(filterMap)
        .filter((entry): entry is (cardList: InternalCard[]) => InternalCard[] => entry != null);

    if (filterList.length === 0) return cardList;
    return filterList.reduce((filteredList, currentFilter) => {
        return currentFilter(filteredList);
    }, cardList);
};
type CardFilter = {
    type: 'text',
    value: string,
};
type CardFilterType = CardFilter['type'];
export type CardListStore = {
    activeId: string,
    cardDisplayList: InternalCard[],
    cardList: InternalCard[],
    filterFunctionMap: Partial<Record<CardFilterType, (cardList: InternalCard[]) => InternalCard[]>>,
    filterResetSignal: number,
    isListDirty: boolean,
    listName: string,
    pendingActiveCard?: InternalCard,
    visible: boolean,
    addCard: (card: Card) => void,
    changeActiveCard: (nextActiveCard: InternalCard, checkPurity?: boolean) => void,
    changeEditStatus: (event: 'download' | 'load' | 'switch-card' | 'update-card') => void,
    deleteCard: (id: string) => void,
    duplicateCard: (card: Card, ) => void,
    resetFilter: () => void,
    setActiveId: (id: string) => void,
    setCardList: (cardList: InternalCard[], activeId?: string) => void,
    setFilterFunction: (type: CardFilter) => void,
    setListName: (name: string) => void,
    setPendingActiveCard: (card?: InternalCard) => void,
    sortList: (type: keyof typeof SortFunctionMap) => void,
    toggleVisible: (status?: boolean) => void,
};
export const useCardList = create<
    CardListStore,
    [['zustand/subscribeWithSelector', never]]
>(subscribeWithSelector((set) => {
    return {
        activeId: '',
        cardDisplayList: [],
        cardList: [],
        filterFunctionMap: {},
        filterResetSignal: 0,
        isListDirty: false,
        listName: 'card-list',
        pendingActiveCard: undefined,
        visible: localStorage.getItem('manager-panel-visible') === 'true',
        setFilterFunction: ({ type, value }) => set(({
            cardList,
            filterFunctionMap,
        }) => {
            const nextFilterFunctionMap = { ...filterFunctionMap };
            if (type === 'text') {
                const normalizedValue = value.toLowerCase();
                nextFilterFunctionMap[type] = cardList => {
                    return cardList.filter(({ name, effect, pendulumEffect }) => {
                        return (normalizeCardName(name).toLowerCase()
                            + normalizeCardEffect(effect).toLowerCase()
                            + normalizeCardEffect(pendulumEffect).toLowerCase()).includes(normalizedValue);
                    });
                };
            }

            return {
                filterFunctionMap: nextFilterFunctionMap,
                cardDisplayList: applyFilter(cardList, nextFilterFunctionMap),
            };
        }),
        resetFilter: () => {
            set(({ filterResetSignal, cardList }) => {
                return {
                    filterFunctionMap: {},
                    filterResetSignal: filterResetSignal + 1,
                    cardDisplayList: [...cardList],
                };
            });
        },
        addCard: card => set(({ cardList }) => {
            const id = uuid();
            const newCard = { id, ...card };

            return {
                activeId: newCard.id,
                cardList: [...cardList, newCard],
                /** It maybe better to always display the new card regardless of current search, so user does not confuse about missing the card */
                cardDisplayList: [...cardList, newCard],
            };
        }),
        changeEditStatus: event => {
            if (event === 'load') set({ isListDirty: false });
            if (event === 'download') set({ isListDirty: false });
        },
        toggleVisible: status => set(({ visible }) => ({ visible: status ?? !visible })),
        setListName: name => set({ listName: name }),
        setPendingActiveCard: card => set({ pendingActiveCard: card }),
        changeActiveCard: (nextActiveCard, checkPurity = false) => {
            set(({ cardList, cardDisplayList, isListDirty }) => {
                let nextIsListDirty = isListDirty;

                /** There is multiple interactions that does not change list's purity, such as switch card inside the current list, or automatic adjustment of cropped canvas upon receiving new image. */
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
                const nextCardDisplayList = cardDisplayList.map(card => {
                    if (card.id === nextActiveCard.id) return { ...nextActiveCard };
                    return card;
                });
                return {
                    isListDirty: nextIsListDirty,
                    cardList: nextCardList,
                    cardDisplayList: nextCardDisplayList,
                };
            });
        },
        setActiveId: id => set({ activeId: id }),
        setCardList: (cardList, activeId) => {
            /** Reset all filter each time a new list is coming */
            set({
                filterFunctionMap: {},
                isListDirty: false,
                activeId: activeId ?? cardList[0]?.id,
                cardList: cardList,
                cardDisplayList: [...cardList],
            });
        },
        deleteCard: id => {
            set(({ cardList, activeId, cardDisplayList }) => {
                const normalizedCardList = cardList.filter(card => card.id !== id);
                const normalizedCardDisplayList = cardDisplayList.filter(card => card.id !== id);
                const currentActiveId = normalizedCardDisplayList.findIndex(card => card.id === activeId);
                const nextActiveId = activeId === id
                    ? normalizedCardDisplayList[currentActiveId - 1]?.id ?? normalizedCardDisplayList[0]?.id ?? ''
                    : activeId;

                return {
                    activeId: nextActiveId,
                    cardList: normalizedCardList,
                    cardDisplayList: normalizedCardDisplayList,
                };
            });
        },
        duplicateCard: card => {
            set(({ cardList, filterFunctionMap }) => {
                const targetIndex = cardList.findIndex(({ name }) => name === card.name);
                const clonedId = uuid();
                const clonedCard = {
                    ...clone(card),
                    name: `${card.name} - Copy`,
                    id: clonedId,
                };
                const nextCardList = targetIndex < 0
                    ? [...cardList, clonedCard]
                    : [
                        ...cardList.slice(0, targetIndex),
                        cardList[targetIndex],
                        clonedCard,
                        ...cardList.slice(targetIndex + 1, cardList.length),
                    ];

                return {
                    activeId: clonedId,
                    pendingActiveCard: clonedCard,
                    cardList: nextCardList,
                    cardDisplayList: applyFilter(nextCardList, filterFunctionMap),
                };
            });
        },
        sortList: type => {
            set(({ cardDisplayList, cardList }) => {
                const sortedDisplayList = SortFunctionMap[type].sortFunction(cardDisplayList);
                const sortedList = SortFunctionMap[type].sortFunction(cardList);

                return {
                    cardDisplayList: sortedDisplayList,
                    /** We must also sort the main list here, because user can export the file right after sort, which should be reflect the current sort they see on the screen */
                    cardList: sortedList,
                };
            });
        },
    };
}));

export * from './csv';