import { clone } from 'ramda';
import { Card, FrameInfoMap, InternalCard } from 'src/model';
import { create } from 'zustand';
import { v4 as uuid } from 'uuid';
import { checkSpeedSkill, isCardDataEqual } from 'src/util';

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
    const frameResult = FrameInfoMap[r.frame].sortWeight - FrameInfoMap[l.frame].sortWeight;

    if (frameResult !== 0) return frameResult;

    /** Assume we do not find frame result because it is "auto", and auto is the highest order */
    const bottomFrameResult = (FrameInfoMap[r.pendulumFrame]?.sortWeight ?? 1000) - (FrameInfoMap[l.pendulumFrame]?.sortWeight ?? 1000);

    return bottomFrameResult;
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
const defaultFilterFunction = (card: InternalCard) => card;
export type CardListStore = {
    isListDirty: boolean,
    listName: string,
    visible: boolean,
    activeId: string,
    cardList: InternalCard[],
    cardDisplayList: InternalCard[],
    pendingActiveCard?: InternalCard,
    filterFunction: (cardList: InternalCard) => InternalCard,
    addCard: (card: Card) => void,
    changeActiveCard: (nextActiveCard: InternalCard, checkPurity?: boolean) => void,
    changeEditStatus: (event: 'download' | 'load' | 'switch-card' | 'update-card') => void,
    deleteCard: (id: string) => void,
    duplicateCard: (card: Card, ) => void,
    setActiveId: (id: string) => void,
    setCardList: (cardList: InternalCard[], activeId?: string) => void,
    setListName: (name: string) => void,
    setFilterFunction: (func: (card: InternalCard) => InternalCard) => void,
    setPendingActiveCard: (card?: InternalCard) => void,
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
        cardDisplayList: [],
        pendingActiveCard: undefined,
        filterFunction: defaultFilterFunction,
        setFilterFunction: nextFilterFunction => set(({
            cardList,
        }) => ({
            filterFunction: nextFilterFunction,
            cardDisplayList: cardList.filter(nextFilterFunction),
        })),
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
            set(({ cardList, isListDirty }) => {
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
                return {
                    isListDirty: nextIsListDirty,
                    cardList: nextCardList,
                    cardDisplayList: [...nextCardList],
                };
            });
        },
        setActiveId: id => set({ activeId: id }),
        setCardList: (cardList, activeId) => {
            /** Reset all filter each time a new list is coming */
            set({
                filterFunction: defaultFilterFunction,
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
            set(({ cardList, cardDisplayList }) => {
                const targetIndex = cardDisplayList.findIndex(({ name }) => name === card.name);
                const clonedId = uuid();
                const clonedCard = {
                    ...clone(card),
                    name: `${card.name} - Copy`,
                    id: clonedId,
                };

                if (targetIndex < 0) return {
                    activeId: clonedId,
                    pendingActiveCard: clonedCard,
                    cardList: [...cardList, clonedCard],
                    cardDisplayList: [...cardDisplayList, clonedCard],
                };
                return {
                    activeId: clonedId,
                    pendingActiveCard: clonedCard,
                    cardList: [
                        ...cardList.slice(0, targetIndex),
                        cardList[targetIndex],
                        clonedCard,
                        ...cardList.slice(targetIndex + 1, cardList.length),
                    ],
                    cardDisplayList: [
                        ...cardDisplayList.slice(0, targetIndex),
                        cardDisplayList[targetIndex],
                        clonedCard,
                        ...cardDisplayList.slice(targetIndex + 1, cardDisplayList.length),
                    ],
                };
            });
        },
        sortList: type => {
            set(({ cardDisplayList }) => {
                const sortedList = SortFunctionMap[type].sortFunction(cardDisplayList);

                return {
                    cardDisplayList: sortedList,
                };
            });
        },
    };
});

export * from './csv';