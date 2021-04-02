import { JSONCrush, JSONUncrush } from '../3rd';

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

const cardFieldShortenMap: Record<string, string | Record<string, string>> = {
    frame: 'fr',
    foil: 'fo',
    name: 'na',
    nameStyleType: 'nst',
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
    link_map: 'lm',
    isPendulum: 'ip',
    pendulum_effect: 'pe',
    red_scale: 'rs',
    blue_scale: 'bs',
    type_ability: 'ta',
    effect: 'ef',
    set_id: 'si',
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
        console.log('🚀 ~ file: condenser.ts ~ line 132 ~ curshedCard', condensedCard, curshedCard);

        return curshedCard;
    }
    return condensedCard;
    // return condensedCard;
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