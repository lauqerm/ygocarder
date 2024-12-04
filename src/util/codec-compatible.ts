import { Card, CompatibleCard, getDefaultCard, NO_ATTRIBUTE, NO_ICON } from 'src/model';
import { normalizedCardEffect, normalizedCardName } from './normalize';
import { isImageData } from './other';

export const checkYgoCarderCard = (object: Record<string, any>): object is Card => {
    try {
        /** No need to check the whole object (we mainly want to distinguish this with ygopro structure), so just need a few presentative fields */
        return 'isFirstEdition' in object
            && 'art' in object
            && 'background' in object;
    } catch (e) {
        console.error(e);
        return false;
    }
};
export const checkCompactYgoCarderCard = (object: Record<string, any>): object is Card => {
    try {
        return 'ife' in object
            && 'ar' in object
            && 'bg' in object;
    } catch (e) {
        console.error(e);
        return false;
    }
};

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
    const [ocgTerm, tcgTerm] = cur;
    acc[tcgTerm] = ocgTerm;

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
    const [ocgTerm, tcgTerm] = cur;
    acc[tcgTerm] = ocgTerm;

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
    const [ocgTerm, tcgTerm] = cur;
    acc[tcgTerm] = ocgTerm;

    return acc;
}, {});
export const ygoCarderToCardMakerData = (card: Card): { result: CompatibleCard, isPartial: boolean } => {
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
        setId,
        pendulumEffect,
        pendulumScaleBlue,
        pendulumScaleRed,
        isPendulum,
        linkMap,
        frame,
        externalInfo,
    } = card;
    console.log('hi', art,
        artData,
        artSource);
    const normalizedName = normalizedCardName(name);
    const normalizedEffect = normalizedCardEffect(effect);
    const normalizedPendulumEffect = normalizedCardEffect(pendulumEffect);
    const normalizedIcon = cardIconMap[subFamily];
    const normalizedAttribute = attributeMap[attribute];
    const normalizedFrame = frameMap[frame];
    const { pendulum, ...rest } = externalInfo ?? {};

    let isPartial = name !== normalizedName
        || effect !== normalizedEffect
        || pendulumEffect !== normalizedPendulumEffect
        || normalizedIcon === undefined
        || normalizedAttribute === undefined
        || normalizedFrame === undefined;
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
            boxSize: 'Normal',
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
        boxSize: 'Normal',
        rarity: 'Common',
        /** For other card maker, inline art data is preferred over art link */
        image: artSource === 'offline' ? artData : art,
        ...rest,
    };

    return {
        isPartial,
        result,
    };
};

export const cardMakerToYgoCarderData = (card: CompatibleCard): { result: Card, isPartial: boolean } => {
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
        /** @todo Rarity compatible is possible? */
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

    let isPartial = normalizedIcon === undefined
        || normalizedAttribute === undefined
        || normalizedFrame === undefined;
    const result: Card = {
        ...getDefaultCard(),
        name,
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
        artData: useImageData ? image : '',
        artSource: useImageData ? 'offline' : 'online',
        linkMap: [
            link?.topLeft === true ? '1' : null,
            link?.topCenter === true ? '2' : null,
            link?.topRight === true ? '3' : null,
            link?.middleLeft === true ? '4' : null,
            link?.middleRight === true ? '6' : null,
            link?.bottomLeft === true ? '7' : null,
            link?.bottomCenter === true ? '8' : null,
            link?.bottomRight === true ? '9' : null,
        ].filter<string>(entry => typeof entry === 'string'),
        isPendulum: enabled,
        pendulumScaleBlue: blue,
        pendulumScaleRed: red,
        pendulumEffect: pendulumEffect,
        password: serial,
        externalInfo: {
            version,
            variant,
            boxSize,
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