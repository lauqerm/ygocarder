import { Card, getDefaultCard } from 'src/model';
import { create } from 'zustand';
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';
import { decodeCardWithCompatibility } from 'src/util';

/**
 * Acquire saved card when the session is just initialized. URL source is preferred over local storage source.
 */
export const retrieveSavedCard = () => {
    try {
        const localCardVersion = window.localStorage.getItem('card-version');
        const localCardData = window.localStorage.getItem('card-data');

        const cardURLData = (new URLSearchParams(window.location.search)).get('data');
        if (cardURLData) {
            const decodedCard = decodeCardWithCompatibility(cardURLData);

            return decodedCard;
        } else if (localCardData !== null && localCardVersion === process.env.REACT_APP_VERSION) {
            return JSON.parse(localCardData) as Card;
        }
        return getDefaultCard();
    } catch (e) {
        console.error(e);
        return getDefaultCard();
    }
};

const VariantConfigMap = {
    debounce: { type: 'debounce' as const, wait: 200 },
    throttle: { type: 'throttle' as const, wait: 1000 },
};
export type CardStore = {
    card: Card,
    setCard: (cardTransform: Card | ((currentCard: Card) => Card)) => void,
    getUpdater: (
        key: string,
        valueTransform?: (value: any) => any,
        variant?: 'throttle' | 'debounce' | { type: 'throttle', wait: number } | { type: 'debounce', wait: number },
    ) => (e: any) => void,
};
export const useCard = create<CardStore>((set, get) => {
    return {
        card: retrieveSavedCard(),
        setCard: cardTransform => {
            if (typeof cardTransform === 'function') set(cur => ({ card: cardTransform(cur.card) }));
            else set({ card: cardTransform });
        },
        getUpdater: (
            key: string,
            valueTransform: (value: any) => any = (value) => value,
            variant,
        ) => {
            const { setCard } = get();
            const returnFunction = (e: any) => {
                setCard(current => ({
                    ...current,
                    [key]: valueTransform(typeof e === 'string' || typeof e === 'number' || Array.isArray(e) ? e : e?.target?.value),
                }));
            };

            if (!variant) return returnFunction;
            const variantConfig = typeof variant === 'string'
                ? VariantConfigMap[variant] ?? undefined
                : variant;

            if (!variantConfig) return returnFunction;
            const { wait, type } = variantConfig;

            if (type === 'debounce') return debounce(returnFunction, wait);
            if (type === 'throttle') return throttle(returnFunction, wait);

            return returnFunction;
        }
    };
});