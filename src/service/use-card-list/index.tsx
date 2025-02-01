import { Card } from 'src/model';
import { create } from 'zustand';

export type CardListStore = {
    visible: boolean,
    activeIndex: number,
    cardList: Card[],
    toggleVisible: (status?: boolean) => void,
    setActiveCard: (card: Card) => void,
    setCardList: (cardList: Card[], activeCardName: string) => void,
};
export const useCardList = create<CardListStore>((set) => {
    return {
        visible: localStorage.getItem('manager-panel-visible') === 'true',
        activeIndex: -1,
        cardList: [],
        toggleVisible: status => set(({ visible }) => ({ visible: status ?? !visible })),
        setActiveCard: activeCard => {
            set(({ cardList, activeIndex }) => ({
                cardList: cardList.map((card, index) => {
                    if (index === activeIndex) return activeCard;
                    return card;
                })
            }));
        },
        setCardList: (cardList, activeCardName) => {
            set({
                activeIndex: Math.max(0, cardList.findIndex(card => card.name === activeCardName)),
                cardList,
            });
        },
    };
});