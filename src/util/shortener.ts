import { clone } from 'ramda';
import { JSONUncrush } from '../3rd';
import { Card, getDefaultCardOpacity, getEmptyCard } from '../model';
import { notification } from 'antd';

const currentCardFieldShortenMap: Record<keyof Card, string | Record<string, string>> = {
    version: 've',
    format: 'fm',
    frame: 'fr',
    foil: 'fo',
    opacity: {
        _newKey: 'op',
        body: 'opbd',
        pendulum: 'oppd',
        name: 'opnm',
        text: 'optx',
        artFrame: 'opaf',
    },
    finish: 'fn',
    artFinish: 'afn',
    name: 'na',
    nameStyleType: 'nst',
    effectStyle: {
        _newKey: 'es',
        condenseTolerant: 'cdtl',
    },
    nameStyle: {
        _newKey: 'ns',
        font: 'nsft',
        fillStyle: 'nsfs',
        headTextFillStyle: 'nshfs',
        shadowColor: 'nssc',
        shadowOffsetY: 'nssoy',
        shadowOffsetX: 'nssox',
        shadowBlur: 'nssb',
        hasShadow: 'nshs',
        lineColor: 'nslc',
        lineWidth: 'nslw',
        lineOffsetY: 'nsloy',
        lineOffsetX: 'nslox',
        hasOutline: 'nshl',
        gradientAngle: 'nsgd',
        gradientColor: 'nscg',
        hasGradient: 'nshg',
        preset: 'nspr',
        pattern: 'nspt',
    },
    attribute: 'at',
    subFamily: 'sf',
    star: 'st',
    cardIcon: 'it',
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
    pendulumFrame: 'pf',
    pendulumEffect: 'pe',
    pendulumScaleRed: 'rs',
    pendulumScaleBlue: 'bs',
    typeAbility: 'ta',
    effect: 'ef',
    setId: 'si',
    atk: 'atk',
    def: 'def',
    password: 'pw',
    sticker: 'sti',
    isFirstEdition: 'ife',
    isSpeedCard: 'isp',
    isDuelTerminalCard: 'idt',
    creator: 'cr',
    furiganaHelper: 'fh',
};
const legacyCardFieldShortenMap = {
    passcode: 'pc',
};
const cardFieldShortenMap = {
    ...currentCardFieldShortenMap,
    ...legacyCardFieldShortenMap,
};

export const decodeCardWithCompatibility = (cardData: Record<string, any> | string | null): Card => {
    let decodedCard = getEmptyCard();
    if (!cardData) return decodedCard;
    try {
        decodedCard = rebuildCardData(cardData) as Card;
    } catch (e) {
        console.error('decodedCard', cardData, e);
        try {
            decodedCard = legacyRebuildCardData(cardData, true) as Card;
            notification.info({
                message: 'Card data has outdated format',
                description: 'System will automatically convert it into newer version.',
            });
        } catch (e) {
            console.error('cardData', cardData, e);
            notification.error({
                message: 'Card data cannot be decoded',
                description: 'It is either malformed or not compatible.',
            });
        }
    }
    return decodedCard;
};

export const cardDataShortener = (
    card: Record<string, any>,
    shortenMap: Record<string, any> = cardFieldShortenMap,
    serialize = true,
) => {
    const condensedCard: Record<string, any> = {};
    Object.keys(card).forEach(fieldKey => {
        const fieldValue = card[fieldKey];

        if (typeof fieldValue === 'object' && fieldValue !== null && !Array.isArray(fieldValue)) {
            const newKey = shortenMap[fieldKey]?._newKey;

            if (newKey) {
                condensedCard[newKey] = cardDataShortener(fieldValue, shortenMap[fieldKey], false);
            }
        } else {
            const newFieldKey = shortenMap[fieldKey];

            if (typeof newFieldKey === 'string') condensedCard[newFieldKey] = fieldValue;
        }
    });

    if (serialize) return JSON.stringify(condensedCard);
    return condensedCard;
};

export const reverseCardDataShortener = (
    condensedCard: Record<string, any>,
    shortenMap: Record<string, any> = cardFieldShortenMap,
) => {
    const fullCard: Record<string, any> = {};
    Object.keys(shortenMap).forEach(fullKey => {
        const shortenKey = shortenMap[fullKey];

        if (typeof shortenKey === 'object' && shortenKey !== null && !Array.isArray(shortenKey)) {
            const shortendKey = shortenKey?._newKey;

            if (shortendKey && condensedCard[shortendKey]) {
                fullCard[fullKey] = reverseCardDataShortener(condensedCard[shortendKey], shortenMap[fullKey]);
            }
        } else {
            if (condensedCard[shortenKey] != null) {
                fullCard[fullKey] = condensedCard[shortenKey];
            }
        }
    });
    return fullCard;
};
export const legacyReverseCardDataShortener = (
    condensedCard: Record<string, any> | string,
    shortenMap: Record<string, any> = cardFieldShortenMap,
) => {
    const normalizedCondensedCard = typeof condensedCard === 'string'
        ? JSON.parse(JSONUncrush(decodeURIComponent(condensedCard)))
        : condensedCard;

    const fullCard: Record<string, any> = {};
    Object.keys(shortenMap).forEach(fullKey => {
        const shortenKey = shortenMap[fullKey];

        if (typeof shortenKey === 'object' && shortenKey !== null && !Array.isArray(shortenKey)) {
            const shortendKey = shortenKey?._newKey;

            if (shortendKey && normalizedCondensedCard[shortendKey]) {
                fullCard[fullKey] = legacyReverseCardDataShortener(normalizedCondensedCard[shortendKey], shortenMap[fullKey]);
            }
        } else {
            if (normalizedCondensedCard[shortenKey] != null) {
                fullCard[fullKey] = normalizedCondensedCard[shortenKey];
            }
        }
    });
    return fullCard;
};

export const rebuildCardData = (
    card: Record<string, any> | string,
) => {
    const normalizedCard = typeof card === 'string'
        ? JSON.parse(card)
        : card;
    const fullCard: Record<string, any> = reverseCardDataShortener(normalizedCard);

    return migrateCardData(fullCard);
};
export const legacyRebuildCardData = (
    card: Record<string, any> | string,
    isCondensed = false,
) => {
    let fullCard: Record<string, any>;
    if (isCondensed) {
        fullCard = legacyReverseCardDataShortener(card);
    } else {
        fullCard = typeof card === 'string'
            ? JSON.parse(card)
            : card;
    }

    return migrateCardData(fullCard);
};

// Try to match old version card data with newer model
const migrateCardData = (card: Record<string, any>) => {
    const migratedCard = {
        ...getEmptyCard(),
        ...clone(card)
    };

    if (migratedCard.effectStyle === undefined) {
        migratedCard.effectStyle = {
            ...getEmptyCard().effectStyle
        };
    }

    if (migratedCard.version === undefined) migratedCard.version = 1;
    if (migratedCard.format === undefined) migratedCard.format = 'tcg';
    if (migratedCard.pendulumFrame === undefined) migratedCard.pendulumFrame = 'auto';
    if (migratedCard.finish === undefined) migratedCard.finish = [];
    if (migratedCard.artFinish === undefined) migratedCard.artFinish = 'normal';
    if ((migratedCard.picture ?? '') === '') migratedCard.picture = 'https://i.imgur.com/jjtCuG5.png';
    if (migratedCard.opacity === undefined) migratedCard.opacity = getDefaultCardOpacity();
    if (migratedCard.furiganaHelper === undefined) migratedCard.furiganaHelper = true;
    if ((migratedCard as any).kanjiHelper) {
        if (!migratedCard.furiganaHelper) migratedCard.furiganaHelper = (migratedCard as any).kanjiHelper;
        delete (migratedCard as any).kanjiHelper;
    }
    if ((migratedCard as any).passcode) {
        if (!migratedCard.password) migratedCard.password = (migratedCard as any).passcode;
        delete (migratedCard as any).passcode;
    }
    return migratedCard;
};