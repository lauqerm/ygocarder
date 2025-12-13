import {
    Card,
    OtherMakerCard,
    getEmptyCard,
    NO_ATTRIBUTE,
    NO_ICON,
    PresetNameStyle,
    PresetNameStyleMap,
    getDefaultNameStyle,
    PendulumSize,
} from 'src/model';
import { normalizeCardEffect, normalizeCardName } from './normalize';
import { isImageData } from './other';

const cardIconMap: Record<string, string> = {
    CONTINUOUS: 'Continuous',
    COUNTER: 'Counter',
    EQUIP: 'Equip',
    FIELD: 'Field',
    'QUICK-PLAY': 'Quick-play',
    RITUAL: 'Ritual',
    [NO_ICON]: 'None',
};
const reverseCardIconMap = Object.entries(cardIconMap).reduce<Record<string, string>>((acc, cur) => {
    const [vendorValue, ourValue] = cur;
    acc[ourValue] = vendorValue;

    return acc;
}, {});

const boxSizeMap: Record<string, string> = {
    large: 'Large',
    medium: 'Normal',
    small: 'Small',
};
const reverseBoxSizeMap = Object.entries(boxSizeMap).reduce<Record<string, PendulumSize>>((acc, cur) => {
    const [vendorValue, ourValue] = cur;
    acc[ourValue] = vendorValue as PendulumSize;

    return acc;
}, {});

const attributeMap: Record<string, string> = {
    EARTH: 'Earth',
    LIGHT: 'Light',
    DARK: 'Dark',
    FIRE: 'Fire',
    WIND: 'Wind',
    WATER: 'Water',
    SPELL: 'Spell',
    TRAP: 'Trap',
    DIVINE: 'Divine',
};
const reverseAttributeMap = Object.entries(attributeMap).reduce<Record<string, string>>((acc, cur) => {
    const [vendorValue, ourValue] = cur;
    acc[ourValue] = vendorValue;

    return acc;
}, {});

const frameMap: Record<string, string> = {
    normal: 'Normal',
    effect: 'Effect',
    ritual: 'Ritual',
    fusion: 'Fusion',
    synchro: 'Synchro',
    xyz: 'Xyz',
    link: 'Link',
    token: 'Token',
    spell: 'Spell',
    trap: 'Trap',
    'dark-synchro': 'Dark Synchro',
    zarc: 'Unity',
    'speed-skill': 'Skill',
};
const reverseFrameMap = Object.entries(frameMap).reduce<Record<string, string>>((acc, cur) => {
    const [vendorValue, ourValue] = cur;
    acc[ourValue] = vendorValue;

    return acc;
}, {});

const reverseRarityMap: Record<string, { key: string, text?: string, artFinish?: string, finish?: string[] }> = {
    'common': {
        key: '',
    },
    'rare': {
        key: 'rare--',
        text: 'rare',
    },
    'secret': {
        key: 'secretGradient-type3-',
        text: 'secretGradient',
        artFinish: 'type3',
    },
    'ultra': {
        key: 'ultra-type3-',
        text: 'ultra',
        artFinish: 'type3',
    },
    'rainbow': {
        key: 'platinum-type1-type1',
        text: 'platinum',
        artFinish: 'type1',
        finish: ['type1'],
    },
};
const rarityMap = Object.entries(reverseRarityMap).reduce<Record<string, string>>((acc, cur) => {
    const [vendorKey, vendorValue] = cur;
    acc[vendorValue.key] = vendorKey;

    return acc;
}, {});

/**
 * Why does artRef here?
 * 
 * The main problem is that ygocarder deal with a full image and allow user to crop their best fit, while:
 * * Other vendors merely squeeze them to fit inside the boundary (and therefore may destroy its ratio).
 * * Other vendor do not store online link, even if you use online link, it will get the data and converted them into base64 regardless.
 * 
 * That means the crop and full image information only matter for ygocarder data, as other vendor does not support any operation regarding the full image, and only care about the cropped part. So when we export ygocarder data, we will retain full image information / image link, but when export other vendor data, we only get the cropped part of the image, hence while we need the ref here.
 */
export const ygoCarderToCardMakerData = (
    card: Card,
    artRef?: HTMLCanvasElement | null,
): { result: OtherMakerCard, isPartial: boolean } => {
    const {
        name,
        star,
        typeAbility,
        subFamily,
        effect,
        atk,
        def,
        art,
        artData,
        artSource,
        password,
        creator,
        attribute,
        attributeType,
        setId,
        pendulumEffect,
        pendulumScaleBlue,
        pendulumScaleRed,
        pendulumSize,
        isPendulum,
        linkMap,
        frame,
        externalInfo,
        nameStyle,
        nameStyleType,
        artFinish,
        finish,
    } = card;
    const normalizedName = normalizeCardName(name);
    const normalizedEffect = normalizeCardEffect(effect);
    const normalizedPendulumEffect = normalizeCardEffect(pendulumEffect);
    const normalizedIcon = cardIconMap[subFamily];
    const normalizedAttribute = attributeType === 'auto' ? attributeMap[attribute] : attributeMap['LIGHT'];
    const normalizedFrame = frameMap[frame];
    const normalizedRarity = nameStyleType === 'predefined'
        ? rarityMap[
            [
                nameStyle.preset,
                artFinish,
                finish.join('|'),
            ].join('-')
        ]
        : 'common';
    const { pendulum, rarity, ...rest } = externalInfo ?? {};

    let isPartial = name !== normalizedName
        || effect !== normalizedEffect
        || pendulumEffect !== normalizedPendulumEffect
        || normalizedIcon === undefined
        || normalizedAttribute === undefined
        || normalizedFrame === undefined
        || normalizedRarity === undefined;
    const result = {
        version: '1.0.0',
        name: normalizedName,
        level: `${star}`,
        type: typeAbility.join('/'),
        icon: normalizedIcon ?? '',
        effect: normalizedEffect,
        atk,
        def,
        serial: password,
        copyright: creator,
        attribute: normalizedAttribute ?? 'None',
        id: setId,
        pendulum: {
            enabled: isPendulum,
            effect: normalizedPendulumEffect,
            blue: pendulumScaleBlue,
            red: pendulumScaleRed,
            boxSize: boxSizeMap[pendulumSize],
            boxSizeEnabled: true,
            ...pendulum,
        },
        variant: 'Normal',
        link: {
            topLeft: linkMap.includes('1') ? true : false,
            topCenter: linkMap.includes('2') ? true : false,
            topRight: linkMap.includes('3') ? true : false,
            middleLeft: linkMap.includes('4') ? true : false,
            middleRight: linkMap.includes('6') ? true : false,
            bottomLeft: linkMap.includes('7') ? true : false,
            bottomCenter: linkMap.includes('8') ? true : false,
            bottomRight: linkMap.includes('9') ? true : false,
        },
        layout: normalizedFrame ?? 'Normal',
        boxSize: pendulumSize === 'large' ? 'Small' : 'Normal',
        rarity: normalizedRarity ?? rarity,
        /** For other card maker, inline art data is preferred over art link */
        image: artRef
            ? artRef.toDataURL('image/jpeg')
            : artSource === 'offline'
                ? artData
                : art,
        ...rest,
    };

    return {
        isPartial,
        result,
    };
};

export const cardMakerToYgoCarderData = (card: OtherMakerCard): { result: Card, isPartial: boolean } => {
    const {
        name,
        atk,
        def,
        attribute,
        effect,
        boxSize,
        copyright,
        icon,
        id,
        image,
        layout,
        level,
        link,
        pendulum,
        rarity,
        serial,
        type,
        variant,
        version,
    } = card;
    const { red, blue, boxSize: pendulumBoxSize, boxSizeEnabled, effect: pendulumEffect, enabled } = pendulum;
    const normalizedIcon = reverseCardIconMap[icon];
    const normalizedAttribute = reverseAttributeMap[attribute];
    const normalizedFrame = reverseFrameMap[layout];
    const useImageData = isImageData(image);
    const levelAsNumber = parseInt(level);
    const normalizedRarity = rarity ? reverseRarityMap[rarity.toLowerCase()] : undefined;

    let isPartial = normalizedIcon === undefined
        || normalizedAttribute === undefined
        || normalizedFrame === undefined
        || normalizedRarity === undefined;
    const {
        finish,
        artFinish,
        text,
    } = normalizedRarity ?? {};
    const namePreset = text ? PresetNameStyleMap[text as PresetNameStyle] : null;
    const baseCard = getEmptyCard();
    const result: Card = {
        ...baseCard,
        finish: finish ?? [],
        name,
        nameStyleType: text ? 'predefined' : 'auto',
        nameStyle: namePreset
            ? namePreset.value
            : getDefaultNameStyle(),
        atk,
        def,
        attribute: normalizedAttribute ?? NO_ATTRIBUTE,
        effect,
        creator: copyright,
        subFamily: normalizedIcon ?? NO_ICON,
        setId: id,
        frame: normalizedFrame ?? 'normal',
        star: `${levelAsNumber}` === level && levelAsNumber <= 13 ? levelAsNumber : level,
        typeAbility: type.split('/').map(entry => entry.trim()),
        art: useImageData ? '' : image,
        artFit: true,
        artData: useImageData ? image : '',
        artSource: useImageData ? 'offline' : 'online',
        artFinish: artFinish ?? 'normal',
        isLink: normalizedFrame === 'link' && link != null,
        linkMap: [
            link?.topLeft === true ? '1' : null,
            link?.topCenter === true ? '2' : null,
            link?.topRight === true ? '3' : null,
            link?.middleLeft === true ? '4' : null,
            link?.middleRight === true ? '6' : null,
            link?.bottomLeft === true ? '7' : null,
            link?.bottomCenter === true ? '8' : null,
            link?.bottomRight === true ? '9' : null,
        ].filter(entry => typeof entry === 'string'),
        isPendulum: enabled,
        pendulumScaleBlue: blue,
        pendulumScaleRed: red,
        pendulumEffect: pendulumEffect,
        pendulumSize: reverseBoxSizeMap[pendulumBoxSize],
        password: serial,
        externalInfo: {
            version,
            variant,
            boxSize,
            rarity,
            pendulum: {
                boxSize: pendulumBoxSize,
                boxSizeEnabled,
            },
        }
    };

    return {
        isPartial,
        result,
    };
};