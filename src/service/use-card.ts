import { Card, CompatibleCard, getDefaultCard, getEmptyCard } from 'src/model';
import { create } from 'zustand';
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';
import { migrateCardData, legacyRebuildCardData, checkYgoCarderCard, checkCompactYgoCarderCard, decompressCardData, cardMakerToYgoCarderData } from 'src/util';
import { notification } from 'antd';
import { getLanguage } from './use-i18n';

export const decodeCardWithCompatibility = (
    cardData: Record<string, any> | string | null,
    baseCard?: Card,
): {
    card: Card,
    isPartial: boolean,
} => {
    let decodedCard = getEmptyCard();
    let isPartial = false;
    if (!cardData) return { isPartial, card: decodedCard };
    try {
        const normalizedCard = typeof cardData === 'string'
            ? JSON.parse(cardData) as Record<string, any>
            : cardData;

        if (checkYgoCarderCard(normalizedCard)) {
            decodedCard = migrateCardData(normalizedCard, baseCard);
        }
        else if (checkCompactYgoCarderCard(normalizedCard)) {
            const fullCard: Record<string, any> = decompressCardData(normalizedCard);
    
            decodedCard = migrateCardData(fullCard, baseCard);
        }
        else {
            const { isPartial: isPartialCard, result } = cardMakerToYgoCarderData(normalizedCard as CompatibleCard);
            isPartial = isPartialCard;
            decodedCard = result;
        }
    } catch (e) {
        console.error('decodedCard', cardData, e);
        try {
            decodedCard = legacyRebuildCardData(cardData, true) as Card;
            notification.info({
                message: getLanguage()['service.decode.outdated.message'],
                description: getLanguage()['service.decode.outdated.description'],
            });
        } catch (e) {
            console.error('cardData', cardData, e);
            notification.error({
                message: getLanguage()['service.decode.error.message'],
                description: getLanguage()['service.decode.error.description'],
            });
        }
    }
    return {
        isPartial,
        card: decodedCard,
    };
};

/**
 * Acquire saved card when the session is just initialized. URL source is preferred over local storage source.
 */
export const retrieveSavedCard = (): Card => {
    try {
        const localCardVersion = window.localStorage.getItem('card-version');
        const stringifedLocalCardData = window.localStorage.getItem('card-data');
        const localCardData = stringifedLocalCardData
            ? migrateCardData(JSON.parse(stringifedLocalCardData))
            : null;

        const urlCardData = (new URLSearchParams(window.location.search)).get('data');
        if (urlCardData) {
            /**
             * Because url card does not store offline image, we search for local storage to match the image if possible.
             * The trick here is that everytime user want to unload the tab, we save the current card data (including the offline image) into local storage first. That way:
             *   * If they reload the tab, the offline image can be restored from local storage. Even if they have many tabs, the tab they are going to reload will save (become the newest one) before reloading, and display the exact image.
             *   * If they duplicate the tab, the new tab will read from the local storage so the offline will be duplicated as well.
             *   * If they re-open the tab, the latest tab already save before being closed, so re-open it restore the exact image.
             *   * If they close multiple tab, and want to re-open the one that is not the latest tab, we have no luck here.
             */
            const { card } = decodeCardWithCompatibility(urlCardData);
            const { artSource, backgroundSource } = card;
            if (artSource === 'online' && backgroundSource === 'online') {
                return decodeCardWithCompatibility(urlCardData).card;
            }

            const combinedCard = { ...card };
            if (artSource === 'offline') combinedCard.artData = localCardData?.artData ?? '';
            if (backgroundSource === 'offline') combinedCard.backgroundData = localCardData?.backgroundData ?? '';

            return combinedCard;
        } else if (localCardData !== null && localCardVersion === process.env.REACT_APP_VERSION) {
            return localCardData;
        }
        return getDefaultCard();
    } catch (e) {
        console.error(e);
        return getDefaultCard();
    }
};

const VariantConfigMap = {
    debounce: { type: 'debounce' as const, wait: 400 },
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
        card: getDefaultCard(),
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