import { clone, equals } from 'ramda';
import { JSONUncrush } from '../3rd';
import { ART_FINISH_TYPE, RegionMap, Card, CardFlag, FrameDyeList, getDefaultCardFlag, getDefaultCardOpacity, getDefaultCrop, getDefaultDyeList, getDefaultTextStyle, getEmptyCard, InternalCard } from '../model';
import { v4 as uuid } from 'uuid';
import { checkMonster } from './categorize';

const currentCardFieldShortenMap: Record<keyof Card, string | Record<string, string>> = {
    version: 've',
    format: 'fm',
    region: 'rg',
    frame: 'fr',
    rightFrame: 'rf',
    leftFrame: 'lf',
    pendulumRightFrame: 'rpf',
    foil: 'fo',
    opacity: {
        _newKey: 'op',
        body: 'opbd',
        pendulum: 'oppd',
        name: 'opnm',
        text: 'optx',
        boundless: 'opbl',
        artBorder: 'opab',
        effectBox: 'opeb',
        frameBorder: 'opfb',
        nameBorder: 'opnb',
        baseFill: 'opbf',
        /** legacy */
        artFrame: 'opaf',
    },
    finish: 'fn',
    otherFinish: 'of',
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
        background: 'ebg',
        minLine: 'eml',
        justifyRatio: 'ejr',
    },
    pendulumStyle: {
        _newKey: 'ps',
        fontStyle: 'pfs',
        upSize: 'pus',
        background: 'pbg',
        minLine: 'pml',
        justifyRatio: 'pjr',
    },
    nameStyle: {
        _newKey: 'ns',
        embossPitch: 'nsep',
        embossThickness: 'nset',
        embossYaw: 'nsey',
        fillStyle: 'nsfs',
        font: 'nsft',
        gradientAngle: 'nsgd',
        gradientColor: 'nscg',
        hasEmboss: 'nshe',
        hasGradient: 'nshg',
        hasOutline: 'nshl',
        hasShadow: 'nshs',
        headTextFillStyle: 'nshfs',
        lineColor: 'nslc',
        lineOffsetX: 'nslox',
        lineOffsetY: 'nsloy',
        lineWidth: 'nslw',
        pattern: 'nspt',
        preset: 'nspr',
        shadowBlur: 'nssb',
        shadowColor: 'nssc',
        shadowOffsetX: 'nssox',
        shadowOffsetY: 'nssoy',
    },
    attribute: 'at',
    attributeType: 'att',
    subFamily: 'sf',
    starList: 'stl',
    star: 'st',
    starAlignment: 'sa',
    cardIcon: 'it',
    linkMap: 'lm',
    linkRating: 'lr',
    isLink: 'il',
    isPendulum: 'ip',
    pendulumFrame: 'pf',
    pendulumEffect: 'pe',
    pendulumScaleRed: 'rs',
    pendulumScaleBlue: 'bs',
    pendulumSize: 'psi',
    typeAbility: 'ta',
    effect: 'ef',
    setId: 'si',
    atk: 'atk',
    def: 'def',
    password: 'pw',
    sticker: 'sti',
    firstEditionText: 'fe',
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
    dyeList: 'dl',
    flag: 'fl',
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
    /** Ensure that we detect the actual version from incoming cards. */
    delete (baseCard as Record<string, unknown>).version;
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
    if (card.region == null) migratedCard.region = RegionMap[migratedCard.format === 'tcg' ? 'en' : 'jp'].key;
    if (migratedCard.pendulumFrame == null) migratedCard.pendulumFrame = 'auto';
    if (migratedCard.pendulumSize == null) migratedCard.pendulumSize = 'medium';
    if (migratedCard.rightFrame == null) migratedCard.rightFrame = 'auto';
    if (migratedCard.leftFrame == null) migratedCard.leftFrame = 'auto';
    if (migratedCard.pendulumRightFrame == null) migratedCard.pendulumRightFrame = 'auto';
    if (migratedCard.finish == null) migratedCard.finish = [];
    if (!Array.isArray(migratedCard.starList)) migratedCard.starList = [];

    if (migratedCard.artFinish == null) migratedCard.artFinish = 'normal';
    if (migratedCard.finish) {
        const finishList = migratedCard.finish;

        if (finishList.includes(ART_FINISH_TYPE)) {
            migratedCard.finish = finishList.filter(entry => entry !== ART_FINISH_TYPE);
            migratedCard.otherFinish = [
                migratedCard.artFinish,
                migratedCard.artFinish,
                migratedCard.artFinish,
                migratedCard.artFinish,
            ];
        }
    }
    if (Array.isArray(migratedCard.otherFinish)
        && ((migratedCard.otherFinish as unknown[]).length === 3 || migratedCard.otherFinish[3] == null)
    ) {
        migratedCard.otherFinish[3] = getEmptyCard().otherFinish[3];
    }
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
    if (typeof migratedCard.opacity.frameBorder !== 'boolean') migratedCard.opacity.frameBorder = false;
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
    if (migratedCard.linkRating == null) migratedCard.linkRating = '';

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
    
    if (migratedCard.attributeType == null) migratedCard.attributeType = 'custom';

    const defaultFlagList = getDefaultCardFlag();
    if (!Array.isArray(migratedCard.flag)) migratedCard.flag = defaultFlagList;
    else if (migratedCard.flag.length < defaultFlagList.length) {
        const currentFlagList = [...migratedCard.flag];
        migratedCard.flag = defaultFlagList.map((entry, index) => {
            if (typeof currentFlagList[index] === 'number') return currentFlagList[index];
            return entry;
        }) as CardFlag;
    }

    const defaultDyeList = getDefaultDyeList();
    if (!Array.isArray(migratedCard.dyeList)) migratedCard.dyeList = defaultDyeList;
    else if (migratedCard.dyeList.length < defaultDyeList.length) {
        const currentDyeList = [...migratedCard.dyeList];
        migratedCard.dyeList = defaultDyeList.map((entry, index) => {
            if (typeof currentDyeList[index] === 'string') return currentDyeList[index];
            return entry;
        }) as FrameDyeList;
    }

    if (migratedCard.version === 0 || migratedCard.version === 1) {
        migratedCard.version = 2;

        const { pendulumFrame, isPendulum, atk, def, isLink, linkMap, frame } = migratedCard;
        /**
         * For older card, we have a detailed check to decide whether to display stats or not.
         * 
         * In newer card, we simplify the test, if stat is a valid value, it will be shown. When user change to spell frame for example, the stat field is cleared. This is much less a headache, even though we always want to preserve data whenever possible.
         */
        const isMonster = checkMonster({ frame });
        const statInEffect = (pendulumFrame !== 'auto' || isPendulum)
            ? !!(atk || def || (isLink && linkMap.length))
            : isMonster;

        if (!statInEffect) {
            migratedCard.atk = '';
            migratedCard.def = '';
        }
    }
    if (migratedCard.version === 2) {
        migratedCard.version = 3;
        const font = migratedCard.nameStyle.font;
        /**
         * For older cards, we dynamically switch font every time user switch the format, which lead to ambiguous situation where user want to keep the font for whatever reason. From ver 3 onward we introduce "Auto" font for the switch behavior, and keep the current font otherwise.
         */
        if (font === 'Default' || font === 'OCG') migratedCard.nameStyle.font = 'Auto';
    }

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
    if (card.artSource === 'offline' || (card.hasBackground && card.backgroundSource === 'offline')) {
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