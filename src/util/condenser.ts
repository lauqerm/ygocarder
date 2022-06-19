import { clone } from 'ramda';
import { JSONCrush, JSONUncrush } from '../3rd';
import { Card, defaultCard } from '../model';

export const createCondenser = (minThreshold = 0, maxThreshold = 1000) => {
    let min = minThreshold;
    let max = maxThreshold;
    let median = max;
    let lastEffective = median;
    let iterateCount = 30;
    let magnitude = 100;

    const reverseSearch = () => {
        if (magnitude === 1) finish();
        else {
            median += magnitude;
            magnitude /= 10;
            median -= magnitude;
        }

        return Math.min(median, max);
    };

    const searchDown = () => {
        median -= magnitude;
        iterateCount -= 1;

        return median;
    };

    const reset = (minThreshold = min, maxThreshold = max) => {
        min = minThreshold;
        max = maxThreshold;
        median = maxThreshold;
        iterateCount = 30;
        magnitude = 100;
        lastEffective = maxThreshold;
    };

    const getMedian = () => median;
    const setMedian = (newMedian: number) => median = newMedian;

    const setLastEffective = (forceMedian = median) => lastEffective = forceMedian;
    const getLastEffective = () => lastEffective;
    const applyLastEffective = () => {
        median = lastEffective;
        iterateCount = -1;
        return median;
    };

    const getIterateCount = () => iterateCount;
    const finish = () => iterateCount = -1;

    return {
        reset,
        searchDown,
        reverseSearch,
        finish,
        getMedian,
        setMedian,
        setLastEffective,
        getLastEffective,
        applyLastEffective,
        getIterateCount,
    };
};

const cardFieldShortenMap: Record<keyof Card | string, string | Record<string, string>> = {
    frame: 'fr',
    foil: 'fo',
    name: 'na',
    nameStyleType: 'nst',
    effectStyle: {
        _newKey: 'es',
        condenseTolerant: 'cdtl',
    },
    nameStyle: {
        _newKey: 'ns',
        fillStyle: 'nsfs',
        shadowColor: 'nssc',
        shadowOffsetY: 'nssoy',
        shadowOffsetX: 'nssox',
        shadowBlur: 'nssb',
        hasShadow: 'nshs',
    },
    attribute: 'at',
    subFamily: 'sf',
    star: 'st',
    picture: 'pt',
    pictureCrop: {
        _newKey: 'ptc',
        x: 'ptx',
        y: 'pty',
        width: 'ptw',
        height: 'pth',
        unit: 'ptu',
        aspect: 'pta',
    },
    linkMap: 'lm',
    isPendulum: 'ip',
    pendulumEffect: 'pe',
    pendulumScaleRed: 'rs',
    pendulumScaleBlue: 'bs',
    typeAbility: 'ta',
    effect: 'ef',
    setId: 'si',
    atk: 'atk',
    def: 'def',
    passcode: 'pc',
    sticker: 'sti',
    isFirstEdition: 'ife',
    creator: 'cr',
};

export const cardDataCondenser = (
    card: Record<string, any>,
    shortenMap: Record<string, any> = cardFieldShortenMap,
    crush = true,
) => {
    const condensedCard: Record<string, any> = {};
    Object.keys(card).forEach(cardKey => {
        const cardValue = card[cardKey];

        if (typeof cardValue === 'object' && cardValue !== null && !Array.isArray(cardValue)) {
            const newKey = shortenMap[cardKey]?._newKey;

            if (newKey) {
                condensedCard[newKey] = cardDataCondenser(cardValue, shortenMap[cardKey], false);
            }
        } else {
            const newKey = shortenMap[cardKey];

            if (typeof newKey === 'string') condensedCard[newKey] = cardValue;
        }
    });

    if (crush) {
        const curshedCard = JSONCrush(JSON.stringify(condensedCard));

        return curshedCard;
    }
    return condensedCard;
};

export const reverseCardDataCondenser = (
    condensedCard: Record<string, any> | string,
    shortenMap: Record<string, any> = cardFieldShortenMap,
) => {
    const normalizedCondensedCard = typeof condensedCard === 'string'
        ? JSON.parse(JSONUncrush(decodeURIComponent(condensedCard)))
        : condensedCard;

    const fullCard: Record<string, any> = {};
    Object.keys(shortenMap).forEach(fullKey => {
        const shortendValue = shortenMap[fullKey];

        if (typeof shortendValue === 'object' && shortendValue !== null && !Array.isArray(shortendValue)) {
            const shortendKey = shortendValue?._newKey;

            if (shortendKey && normalizedCondensedCard[shortendKey]) {
                fullCard[fullKey] = reverseCardDataCondenser(normalizedCondensedCard[shortendKey], shortenMap[fullKey]);
            }
        } else {
            if (normalizedCondensedCard[shortendValue]) {
                fullCard[fullKey] = normalizedCondensedCard[shortendValue];
            }
        }
    });
    return fullCard;
};

export const rebuildCardData = (
    card: Record<string, any> | string,
    isCondensed = false,
) => {
    let fullCard: Record<string, any>;
    if (isCondensed) {
        fullCard = reverseCardDataCondenser(card);
    } else {
        fullCard = typeof card === 'string'
            ? JSON.parse(card)
            : card;
    }

    return migrateCardData(fullCard);
};

// Try to match old version card data with newer model
const migrateCardData = (card: Record<string, any>) => {
    const migratedCard = clone(card);

    if (migratedCard.effectStyle === undefined) {
        migratedCard.effectStyle = {
            ...defaultCard.effectStyle
        };
    }

    if (migratedCard.version === undefined) {
        migratedCard.version = 1;
    }
    return migratedCard;
};