import { Card, getDefaultCard } from 'src/model';
import { create } from 'zustand';

export type CardStore = {
    card: Card,
    setCard: (cardTransform: Card | ((currentCard: Card) => Card)) => void,
};
export const useCard = create<CardStore>((set) => {
    return {
        card: getDefaultCard(),
        setCard: cardTransform => {
            if (typeof cardTransform === 'function') set(cur => ({ card: cardTransform(cur.card) }));
            else set({ card: cardTransform });
        }
    };
});