import { clone } from 'ramda';
import { JSONCrush, JSONUncrush } from '../3rd';
import { Card, defaultCard, getDefaultCardOpacity } from '../model';

const cardFieldShortenMap: Record<keyof Card, string | Record<string, string>> = {
    format: 'fm',
    frame: 'fr',
    foil: 'fo',
    opacity: {
        _newKey: 'op',
        body: 'opbd',
        pendulum: 'oppd',
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
    passcode: 'pc',
    sticker: 'sti',
    isFirstEdition: 'ife',
    isSpeedCard: 'isp',
    isDuelTerminalCard: 'idt',
    creator: 'cr',
};

export const cardDataShortener = (
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
                condensedCard[newKey] = cardDataShortener(cardValue, shortenMap[cardKey], false);
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

export const reverseCardDataShortener = (
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
                fullCard[fullKey] = reverseCardDataShortener(normalizedCondensedCard[shortendKey], shortenMap[fullKey]);
            }
        } else {
            if (normalizedCondensedCard[shortendValue] != null) {
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
        fullCard = reverseCardDataShortener(card);
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

    if (migratedCard.version === undefined) migratedCard.version = 1;
    if (migratedCard.format === undefined) migratedCard.format = 'tcg';
    if (migratedCard.pendulumFrame === undefined) migratedCard.pendulumFrame = 'spell';
    if (migratedCard.finish === undefined) migratedCard.finish = [];
    if (migratedCard.artFinish === undefined) migratedCard.artFinish = 'normal';
    if ((migratedCard.picture ?? '') === '') migratedCard.picture = 'https://i.imgur.com/jjtCuG5.png';
    if (migratedCard.opacity === undefined) migratedCard.opacity = getDefaultCardOpacity();
    return migratedCard;
};