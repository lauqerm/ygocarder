import { clone, equals } from 'ramda';
import { JSONUncrush } from '../3rd';
import { Card, getDefaultCardOpacity, getDefaultCrop, getDefaultTextStyle, getEmptyCard, InternalCard } from '../model';
import { v4 as uuid } from 'uuid';

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
        boundless: 'opbl',
        /** legacy */
        artFrame: 'opaf',
        artBorder: 'opab',
        nameBorder: 'opnb',
        baseFill: 'opbf',
    },
    finish: 'fn',
    art: 'ar',
    artData: 'ad',
    artFit: 'af',
    artSource: 'as',
    artFinish: 'afn',
    artCrop: {
        _newKey: 'arc',
        x: 'arx',
        y: 'ary',
        width: 'arw',
        height: 'arh',
        unit: 'aru',
        aspect: 'ara',
    },
    hasBackground: 'hbg',
    background: 'bg',
    backgroundFit: 'bf',
    backgroundData: 'bgd',
    backgroundSource: 'bgs',
    backgroundType: 'bgt',
    backgroundCrop: {
        _newKey: 'bgc',
        x: 'bgx',
        y: 'bgy',
        width: 'bgw',
        height: 'bgh',
        unit: 'bgu',
        aspect: 'bga',
    },
    name: 'na',
    nameStyleType: 'nst',
    effectStyle: {
        _newKey: 'es',
        condenseTolerant: 'cdtl',
        fontStyle: 'efs',
        upSize: 'eus',
    },
    pendulumStyle: {
        _newKey: 'ps',
        fontStyle: 'pfs',
        upSize: 'pus',
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
        embossPitch: 'nsep',
        embossYaw: 'nsey',
        hasEmboss: 'nshe',
        preset: 'nspr',
        pattern: 'nspt',
    },
    attribute: 'at',
    subFamily: 'sf',
    star: 'st',
    starAlignment: 'sa',
    cardIcon: 'it',
    linkMap: 'lm',
    isLink: 'il',
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
    isLimitedEdition: 'ile',
    isLegacyCard: 'ilc',
    creator: 'cr',
    furiganaHelper: 'fh',
    effectTextStyle: 'ets',
    pendulumTextStyle: 'pts',
    statTextStyle: 'sts',
    typeTextStyle: 'tts',
    otherTextStyle: 'ots',
    externalInfo: 'ei',
};
const legacyCardFieldShortenMap = {
    passcode: 'pc',
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
};
const cardFieldShortenMap = {
    ...currentCardFieldShortenMap,
    ...legacyCardFieldShortenMap,
};

export const compressCardData = (
    card: Record<string, any>,
    shortenMap: Record<string, any> = cardFieldShortenMap,
) => {
    const condensedCard: Record<string, any> = {};
    const normalizedCard = { ...card };

    Object.keys(normalizedCard).forEach(fieldKey => {
        const fieldValue = normalizedCard[fieldKey];

        if (typeof fieldValue === 'object' && fieldValue !== null && !Array.isArray(fieldValue)) {
            const newKey = shortenMap[fieldKey]?._newKey;

            if (newKey) {
                condensedCard[newKey] = compressCardData(fieldValue, shortenMap[fieldKey]);
            }
        } else {
            const newFieldKey = shortenMap[fieldKey];

            if (typeof newFieldKey === 'string') condensedCard[newFieldKey] = fieldValue;
        }
    });

    return condensedCard;
};

export const decompressCardData = (
    condensedCard: Record<string, any>,
    shortenMap: Record<string, any> = cardFieldShortenMap,
) => {
    const decompressedCard: Record<string, any> = {};
    Object.keys(shortenMap).forEach(fullKey => {
        const shortenKey = shortenMap[fullKey];

        if (typeof shortenKey === 'object' && shortenKey !== null && !Array.isArray(shortenKey)) {
            const shortendKey = shortenKey?._newKey;

            if (shortendKey && condensedCard[shortendKey]) {
                decompressedCard[fullKey] = decompressCardData(condensedCard[shortendKey], shortenMap[fullKey]);
            }
        } else {
            if (condensedCard[shortenKey] != null) {
                decompressedCard[fullKey] = condensedCard[shortenKey];
            }
        }
    });
    return decompressedCard;
};
export const legacyReverseCardDataShortener = (
    condensedCard: Record<string, any> | string,
    shortenMap: Record<string, any> = cardFieldShortenMap,
) => {
    const normalizedCondensedCard = typeof condensedCard === 'string'
        ? JSON.parse(JSONUncrush(decodeURIComponent(condensedCard)))
        : condensedCard;

    const unshortenedCard: Record<string, any> = {};
    Object.keys(shortenMap).forEach(fullKey => {
        const shortenKey = shortenMap[fullKey];

        if (typeof shortenKey === 'object' && shortenKey !== null && !Array.isArray(shortenKey)) {
            const shortendKey = shortenKey?._newKey;

            if (shortendKey && normalizedCondensedCard[shortendKey]) {
                unshortenedCard[fullKey] = legacyReverseCardDataShortener(normalizedCondensedCard[shortendKey], shortenMap[fullKey]);
            }
        } else {
            if (normalizedCondensedCard[shortenKey] != null) {
                unshortenedCard[fullKey] = normalizedCondensedCard[shortenKey];
            }
        }
    });
    return unshortenedCard;
};

export const legacyRebuildCardData = (
    card: Record<string, any> | string,
    isCondensed = false,
) => {
    let rebuiltCard: Record<string, any>;
    if (isCondensed) {
        rebuiltCard = legacyReverseCardDataShortener(card);
    } else {
        rebuiltCard = typeof card === 'string'
            ? JSON.parse(card)
            : card;
    }

    return migrateCardData(rebuiltCard);
};

/** Migrate old version of card data into the new version without information loss */
export const migrateCardData = (card: Record<string, any>, baseCard = getEmptyCard()): InternalCard => {
    const migratedCard = {
        id: uuid(),
        ...baseCard,
        ...clone(card),
    };

    migratedCard.effectStyle = {
        ...getEmptyCard().effectStyle,
        ...migratedCard.effectStyle,
    };

    if (migratedCard.pendulumStyle == null) {
        migratedCard.pendulumStyle = {
            ...getEmptyCard().pendulumStyle,
        };
    } else {
        migratedCard.pendulumStyle = {
            ...getEmptyCard().pendulumStyle,
            ...migratedCard.pendulumStyle,
        };
    }

    if (migratedCard.version == null) migratedCard.version = 1;
    if (migratedCard.format == null) migratedCard.format = 'tcg';
    if (migratedCard.pendulumFrame == null) migratedCard.pendulumFrame = 'auto';
    if (migratedCard.finish == null) migratedCard.finish = [];

    if (migratedCard.artFinish == null) migratedCard.artFinish = 'normal';
    if ((migratedCard as any).picture && !card.art) migratedCard.art = (migratedCard as any).picture;
    delete (migratedCard as any).picture;

    if ((migratedCard as any).pictureCrop && !card.artCrop) migratedCard.artCrop = (migratedCard as any).pictureCrop;
    delete (migratedCard as any).pictureCrop;

    /** Seems like no image is fine for now. */
    // if ((migratedCard.art ?? '') === '') migratedCard.art = 'https://i.imgur.com/jjtCuG5.png';
    if ((migratedCard.art ?? '') === '') migratedCard.art = '';
    if ((migratedCard.artData ?? '') === '') migratedCard.artData = '';
    if ((migratedCard.artSource ?? '') === '') migratedCard.artSource = 'online';
    if (migratedCard.artFit == null) migratedCard.artFit = false;

    if (typeof (migratedCard.opacity as any).artFrame === 'boolean' && migratedCard.opacity.boundless == null) {
        migratedCard.opacity.boundless = !(migratedCard.opacity as any).artFrame;
        delete (migratedCard.opacity as any).artFrame;
    }
    migratedCard.opacity = { ...getDefaultCardOpacity(), ...migratedCard.opacity };
    delete (migratedCard.opacity as any).artFrame;

    if ((migratedCard.background ?? '') === '') migratedCard.background = '';
    if ((migratedCard.backgroundData ?? '') === '') migratedCard.backgroundData = '';
    if ((migratedCard.backgroundSource ?? '') === '') migratedCard.backgroundSource = 'online';
    if (migratedCard.backgroundFit == null) migratedCard.backgroundFit = false;
    if (migratedCard.hasBackground == null
        && (migratedCard.background || migratedCard.backgroundData || migratedCard.opacity.baseFill)
    ) {
        migratedCard.hasBackground = true;
    }
    migratedCard.backgroundCrop = {
        ...getDefaultCrop(),
        ...migratedCard.backgroundCrop,
    };

    if (migratedCard.isLink == null && migratedCard.frame === 'link') {
        migratedCard.isLink = true;
    }

    if ((migratedCard as any).kanjiHelper && !card.furiganaHelper) migratedCard.furiganaHelper = (migratedCard as any).kanjiHelper;
    delete (migratedCard as any).kanjiHelper;
    if (migratedCard.furiganaHelper === undefined) migratedCard.furiganaHelper = true;

    if ((migratedCard as any).passcode && !card.password) migratedCard.password = (migratedCard as any).passcode;
    delete (migratedCard as any).passcode;

    if (!migratedCard.effectTextStyle) migratedCard.effectTextStyle = getDefaultTextStyle();
    if (!migratedCard.pendulumTextStyle) migratedCard.pendulumTextStyle = getDefaultTextStyle();
    if (!migratedCard.typeTextStyle) migratedCard.typeTextStyle = getDefaultTextStyle();
    if (!migratedCard.statTextStyle) migratedCard.statTextStyle = getDefaultTextStyle();
    if (!migratedCard.otherTextStyle) migratedCard.otherTextStyle = getDefaultTextStyle();
    if (typeof migratedCard.isLimitedEdition === 'undefined') migratedCard.isLimitedEdition = false;
    if (typeof migratedCard.isLegacyCard === 'undefined') migratedCard.isLegacyCard = false;
    if (!migratedCard.starAlignment) migratedCard.starAlignment = 'auto';

    return migratedCard;
};

export const checkYgoCarderCard = (object: Record<string, any>): object is Card => {
    try {
        /** No need to check the whole object (we mainly want to distinguish this with YGOPro structure), so just need a few presentative fields */
        return 'isFirstEdition' in object
            && 'typeAbility' in object
            && 'setId' in object;
    } catch (e) {
        console.error(e);
        return false;
    }
};
export const checkCompactYgoCarderCard = (object: Record<string, any>): object is Card => {
    try {
        return 'ife' in object
            && 'ta' in object
            && 'si' in object;
    } catch (e) {
        console.error(e);
        return false;
    }
};

export const ygoCarderToExportableData = (
    card: Card,
    _artRef?: HTMLCanvasElement | null,
) => {
    if (card.artSource === 'offline' || card.backgroundSource === 'offline') {
        return {
            isPartial: true,
            result: compressCardData(card),
        };
    }
    /** Remove art data here, it will easily exceed the limit of text area */
    const normalizedCard = { ...card, artData: '', backgroundData: '' };

    return {
        isPartial: false,
        result: compressCardData(normalizedCard),
    };
};

const ROUNDING_THRESHOLD = 0.1;
const isPartialNumberEqual = (numberLeft: any, numberRight: any) => {
    if (typeof numberLeft !== typeof numberRight) return false;
    if (typeof numberLeft === 'number' && typeof numberRight === 'number') return Math.abs(numberLeft - numberRight) <= ROUNDING_THRESHOLD;
    return numberLeft === numberRight;
};
const isCropDataEqual = (cropLeft: Partial<ReactCrop.Crop>, cropRight: Partial<ReactCrop.Crop>) => {
    const {
        aspect: aspectLeft,
        height: heightLeft,
        width: widthLeft,
        x: xLeft,
        y: yLeft,
        unit: unitLeft,
    } = cropLeft ?? {};
    const {
        aspect: aspectRight,
        height: heightRight,
        width: widthRight,
        x: xRight,
        y: yRight,
        unit: unitRight,
    } = cropRight ?? {};

    return isPartialNumberEqual(aspectLeft, aspectRight)
        && isPartialNumberEqual(heightLeft, heightRight)
        && isPartialNumberEqual(widthLeft, widthRight)
        && isPartialNumberEqual(xLeft, xRight)
        && isPartialNumberEqual(yLeft, yRight)
        && unitLeft === unitRight;
};
/** Cropped data is rather unpredictable, and can produce rounding error that is hard to get a hold off. So when comparing card data we ignore any difference that is smaller than a threshold */
export const isCardDataEqual = (cardLeft: InternalCard, cardRight: InternalCard) => {
    const {
        artCrop: artCropLeft,
        backgroundCrop: backgroundCropLeft,
        ...restLCard
    } = cardLeft;
    const {
        artCrop: artCropRight,
        backgroundCrop: backgroundCropRight,
        ...restRCard
    } = cardRight;

    return equals(restLCard, restRCard)
        && isCropDataEqual(artCropLeft, artCropRight)
        && isCropDataEqual(backgroundCropLeft, backgroundCropRight);
};