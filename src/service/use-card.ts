import { Card, InternalCard, OtherMakerCard, YgoproDeckCard, getDefaultInternalCard, getEmptyCard } from 'src/model';
import { create } from 'zustand';
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';
import {
    migrateCardData,
    legacyRebuildCardData,
    checkYgoCarderCard,
    checkCompactYgoCarderCard,
    decompressCardData,
    cardMakerToYgoCarderData,
    checkYgoproDeckCard,
    ygoproDeckToYgoCarderData,
} from 'src/util';
import { notification } from 'antd';
import { getLanguage } from './use-i18n';
import { useCardList } from './use-card-list';
import { v4 as uuid } from 'uuid';
import { getCarderDb } from './use-carder-db';

/** This method decode the following data into ygocarder uncompress data:
 * * Compressed legacy ygocarder data
 * * Uncompress ygocarder data (return as is)
 * * Compressed ygocarder data
 * * Other vendor data
 */
export const decodeCard = (
    cardData: Record<string, unknown> | string | null,
    baseCard?: Card,
): {
    card: InternalCard,
    isPartial: boolean,
} => {
    const id = uuid();
    let decodedCard = getEmptyCard();
    let isPartial = false;
    if (!cardData) return { isPartial, card: { ...decodedCard, id } };
    try {
        const normalizedCard = typeof cardData === 'string'
            ? JSON.parse(cardData) as Record<string, unknown> | { data: Record<string, unknown>[] }
            : cardData;

        /** Merge card */
        if (baseCard) {
            const fullCard: Record<string, unknown> = decompressCardData(normalizedCard);

            /** First chance, assume it is a partial compressed card */
            if (Object.keys(fullCard).length > 0) {
                decodedCard = migrateCardData(fullCard, baseCard);
            }
            /** Second chance, assume it is a partial card */
            else {
                decodedCard = migrateCardData(normalizedCard, baseCard);
            }
        }
        else if (checkYgoCarderCard(normalizedCard)) {
            decodedCard = migrateCardData(normalizedCard);
        }
        else if (checkCompactYgoCarderCard(normalizedCard)) {
            const fullCard: Record<string, unknown> = decompressCardData(normalizedCard);

            decodedCard = migrateCardData(fullCard);
        }
        /** User may paste the entire YgoproDeck repsonse, to make it more convenient, we automatically unwrap the first item for them */
        else if (Array.isArray(normalizedCard.data)) {
            const unwrappedCard = Array.isArray(normalizedCard.data) ? normalizedCard.data[0] : normalizedCard;
            const { isPartial: isPartialCard, result } = ygoproDeckToYgoCarderData(unwrappedCard as YgoproDeckCard);
            isPartial = isPartialCard;
            decodedCard = result;
        }
        else if (checkYgoproDeckCard(normalizedCard)) {
            const { isPartial: isPartialCard, result } = ygoproDeckToYgoCarderData(normalizedCard as YgoproDeckCard);
            isPartial = isPartialCard;
            decodedCard = result;
        }
        else {
            const { isPartial: isPartialCard, result } = cardMakerToYgoCarderData(normalizedCard as OtherMakerCard);
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
        card: { ...decodedCard, id },
    };
};

/**
 * Acquire saved card when the session is just initialized. URL source is preferred over local storage source.
 */
export const retrieveSavedCard = async (): Promise<InternalCard> => {
    try {
        const {
            card: localSavedCard,
            version: localCardVersion,
        } = await getCardLocally() ?? {};
        const localCardData = localSavedCard
            ? migrateCardData(localSavedCard)
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
            const { card: decodedCard } = decodeCard(urlCardData);
            const card = migrateCardData(decodedCard);
            const { artSource, backgroundSource, overlaySource, iconImageSource } = card;
            if (
                artSource === 'online'
                && backgroundSource === 'online'
                && overlaySource === 'online'
                && iconImageSource === 'online'
            ) {
                return decodeCard(urlCardData).card;
            }

            const combinedCard = { ...card };
            if (artSource === 'offline') combinedCard.artData = localCardData?.artData ?? '';
            if (backgroundSource === 'offline') combinedCard.backgroundData = localCardData?.backgroundData ?? '';
            if (overlaySource === 'offline') combinedCard.overlayData = localCardData?.overlayData ?? '';
            if (iconImageSource === 'offline') combinedCard.iconImageData = localCardData?.iconImageData ?? '';

            return combinedCard;
        } else if (localCardData !== null && localCardVersion === import.meta.env.APP_VERSION) {
            return localCardData;
        }
        return getDefaultInternalCard();
    } catch (e) {
        console.error(e);
        return getDefaultInternalCard();
    }
};

const VariantConfigMap = {
    debounce: { type: 'debounce' as const, wait: 400 },
    throttle: { type: 'throttle' as const, wait: 1000 },
};
export const isInternalCard = (card: Card | InternalCard): card is InternalCard => {
    return 'id' in card && card.id !== '';
};
export type CardStore = {
    card: InternalCard,
    /**
     * Note: If you pass a whole new card object here, it will skip the purity check by default
     */
    setCard: (
        cardTransform: Card | InternalCard | ((currentCard: InternalCard) => InternalCard),
        forcePurityCheck?: boolean,
    ) => void,
    getUpdater: <Value = unknown>(
        key: string,
        valueTransform?: (value: unknown) => unknown,
        variant?: 'throttle' | 'debounce' | { type: 'throttle', wait: number } | { type: 'debounce', wait: number },
    ) => (e: string | number | unknown[] | ((card: Card) => Value) | { target: { value: Value } }) => void,
};
export const useCard = create<CardStore>((set, get) => {
    return {
        card: getDefaultInternalCard(),
        setCard: (cardTransform, forcePurityCheck) => {
            /** Change some fields inside a card, check list purity afterward */
            const changeActiveCard = useCardList.getState().changeActiveCard;
            if (typeof cardTransform === 'function') {
                set(cur => {
                    const nextCard = cardTransform(cur.card);
                    changeActiveCard(nextCard, forcePurityCheck ?? true);

                    return { card: nextCard };
                });
            }
            /** Change the whole card */
            else if (isInternalCard(cardTransform)) {
                changeActiveCard(cardTransform, forcePurityCheck);
                set({ card: cardTransform });
            }
            else {
                const normalizedCard = { id: uuid(), ...cardTransform };
                changeActiveCard(normalizedCard, forcePurityCheck);
                set({ card: normalizedCard });
            }
        },
        getUpdater: <Value = unknown>(
            key: string,
            valueTransform: (value: unknown) => unknown = (value) => value,
            variant?: 'throttle' | 'debounce' | { type: 'throttle', wait: number } | { type: 'debounce', wait: number },
        ) => {
            const { setCard } = get();
            const returnFunction = (
                e: string | number | unknown[] | ((card: Card) => (Value | boolean)) | { target: { value: (Value | boolean) } }
            ) => {
                setCard(current => ({
                    ...current,
                    [key]: valueTransform(typeof e === 'string' || typeof e === 'number' || Array.isArray(e)
                        ? e
                        : typeof e === 'function'
                            ? e(current)
                            : e?.target?.value),
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

export const getCardLocally = async (): Promise<{ version: string, card: InternalCard } | null> => {
    const db = await getCarderDb();
    if (db) {
        const cardStoreTx = db.transaction('cardStore', 'readonly');
        const latestCard = await cardStoreTx.store.get('latest');
        await cardStoreTx.done;
        if (latestCard) return {
            version: latestCard.version,
            card: latestCard.content,
        };
    }

    const localCardVersion = localStorage.getItem('card-version');
    const stringifedLocalCardData = localStorage.getItem('card-data');

    return stringifedLocalCardData
        ? {
            version: localCardVersion ?? 'unknown',
            card: JSON.parse(stringifedLocalCardData),
        }
        : null;
};

export const saveCardLocally = (card: InternalCard) => {
    const language = getLanguage();
    // No need to wait for service worker to be ready here, we trust it to be ready at the time
    const sw = 'serviceWorker' in navigator
        ? navigator.serviceWorker.controller
        : null;
    const version = import.meta.env.APP_VERSION ?? 'unknown';
    try {
        if (sw) {
            sw.postMessage({
                type: 'SAVE_LATEST',
                content: card,
                version,
            });
        }
        /** Also save to localStorage just in case */
        try {
            localStorage.setItem('card-data', JSON.stringify(card));
            localStorage.setItem('card-version', version);
        } catch (e) {
            const { artData, backgroundData, overlayData, iconImageData, ...shortenedCard } = card;
            localStorage.setItem('card-data', JSON.stringify(shortenedCard));
            localStorage.setItem('card-version', version);
        }
    } catch (e) {
        /** Ensure it does not fire repeatedly */
        const key = 'fail-to-set-storage-notification';
        notification.close(key);
        notification.info({
            key,
            message: language['error.card-max-size.message'],
            description: language['error.card-max-size.description'],
        });
    }
};