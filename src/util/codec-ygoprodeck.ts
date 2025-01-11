import {
    Card,
    getEmptyCard,
    NO_ATTRIBUTE,
    NO_ICON,
    YgoproDeckCard,
    getDefaultYgoproDeckCard,
    copyrightMap,
} from 'src/model';
import { normalizeImageLink } from './normalize';

export const checkYgoproDeckCard = (object: Record<string, any>): object is YgoproDeckCard => {
    try {
        /** No need to check the whole object (we mainly want to distinguish this with YGOPro structure), so just need a few presentative fields */
        return 'id' in object
            && 'frameType' in object
            && 'card_sets' in object;
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
    'QUICK-PLAY': 'Quick-Play',
    RITUAL: 'Ritual',
    [NO_ICON]: 'None',
};
const reverseCardIconMap = Object.entries(cardIconMap).reduce<Record<string, string>>((acc, cur) => {
    const [vendorValue, ourValue] = cur;
    acc[ourValue] = vendorValue;

    return acc;
}, {});

const attributeMap: Record<string, string> = {
    EARTH: 'EARTH',
    LIGHT: 'LIGHT',
    DARK: 'DARK',
    FIRE: 'FIRE',
    WIND: 'WIND',
    WATER: 'WATER',
    SPELL: 'SPELL',
    TRAP: 'TRAP',
    DIVINE: 'DIVINE',
};
const reverseAttributeMap = Object.entries(attributeMap).reduce<Record<string, string>>((acc, cur) => {
    const [vendorValue, ourValue] = cur;
    acc[ourValue] = vendorValue;

    return acc;
}, {});

const frameMap: Record<string, string> = {
    normal: 'normal',
    effect: 'effect',
    ritual: 'ritual',
    fusion: 'fusion',
    synchro: 'synchro',
    xyz: 'xyz',
    link: 'link',
    token: 'token',
    spell: 'spell',
    trap: 'trap',
    'speed-skill': 'skill',
    normal_pendulum: 'normal_pendulum',
    effect_pendulum: 'effect_pendulum',
    ritual_pendulum: 'ritual_pendulum',
    fusion_pendulum: 'fusion_pendulum',
    synchro_pendulum: 'synchro_pendulum',
    xyz_pendulum: 'xyz_pendulum',
};
const reverseFrameMap = Object.entries(frameMap).reduce<Record<string, string>>((acc, cur) => {
    const [vendorValue, ourValue] = cur;
    acc[ourValue] = vendorValue;

    return acc;
}, {});

const reverseLinkMap: Record<string, string> = {
    'Top-Left': '1',
    'Top': '2',
    'Top-Right': '3',
    'Left': '4',
    'Right': '6',
    'Bottom-Left': '7',
    'Bottom': '8',
    'Bottom-Right': '9',
};

// const reverseRarityMap: Record<string, { key: string, text?: string, artFinish?: string, finish?: string[] }> = {
//     'common': {
//         key: '',
//     },
//     'rare': {
//         key: 'rare--',
//         text: 'rare',
//     },
//     'secret': {
//         key: 'secretGradient-type3-',
//         text: 'secretGradient',
//         artFinish: 'type3',
//     },
//     'ultra': {
//         key: 'ultra-type3-',
//         text: 'ultra',
//         artFinish: 'type3',
//     },
//     'rainbow': {
//         key: 'platinum-type1-type1',
//         text: 'platinum',
//         artFinish: 'type1',
//         finish: ['type1'],
//     },
// };
// const rarityMap = Object.entries(reverseRarityMap).reduce<Record<string, string>>((acc, cur) => {
//     const [vendorKey, vendorValue] = cur;
//     acc[vendorValue.key] = vendorKey;

//     return acc;
// }, {});

/**
 * We have no use case to convert ygoCarder into YgoproDeck yet.
 */
export const ygoCarderToYgoproDeckData = (
    _card: Card,
    _artRef?: HTMLCanvasElement | null,
): { result: YgoproDeckCard, isPartial: boolean } => {
    return {
        isPartial: false,
        result: getDefaultYgoproDeckCard(),
    };
};

export const ygoproDeckToYgoCarderData = (card: YgoproDeckCard): { result: Card, isPartial: boolean } => {
    const {
        atk,
        attribute,
        card_images,
        card_sets,
        def,
        desc,
        frameType,
        id,
        level,
        monster_desc,
        name,
        pend_desc,
        race,
        scale,
        typeline,
        linkval,
        linkmarkers,
    } = card;
    const normalizedIcon = reverseCardIconMap[race];
    const normalizedAttribute = reverseAttributeMap[attribute];
    const [normalizedFrame, subFrame] = reverseFrameMap[frameType].split('_');

    /** Normal description is wrapped inside a double single quotes, we have no use for it here. */
    const normalizedEffect = desc
        ? desc.replaceAll(/^''|''$/g, '')
        : '';
    const normalizedMonsterEffect = monster_desc
        ? monster_desc.replaceAll(/^''|''$/g, '')
        : undefined;
    const normalizedPendulumEffect = pend_desc
        ? pend_desc.replaceAll(/^''|''$/g, '')
        : '';
    const cardImage = normalizeImageLink(card_images[0].image_url_cropped);

    const baseCard = getEmptyCard();
    const result: Card = {
        ...baseCard,
        name,
        atk: (atk < 0 || atk == null) ? '?' : `${atk}`,
        def: def
            ? (def < 0 || def == null) ? '?' : `${def}`
            : '0',
        attribute: normalizedAttribute ?? NO_ATTRIBUTE,
        effect: normalizedMonsterEffect ?? normalizedEffect,
        subFamily: normalizedIcon ?? NO_ICON,
        setId: card_sets[card_sets.length - 1]?.set_code ?? '',
        frame: normalizedFrame ?? 'normal',
        star: frameType === 'link' && linkval ? linkval : level,
        typeAbility: typeline
            ? typeline
            : frameType === 'spell'
                ? ['Spell Card']
                : frameType === 'trap'
                    ? ['Trap Card']
                    : [],
        art: cardImage,
        artSource: 'online',
        artCrop: {
            ...baseCard.artCrop,
            y: 0,
        },
        linkMap: (linkmarkers ?? []).map(marker => reverseLinkMap[marker]),
        isPendulum: subFrame === 'pendulum',
        pendulumScaleBlue: `${scale}`,
        pendulumScaleRed: `${scale}`,
        pendulumEffect: normalizedPendulumEffect,
        password: `${id}`.padStart(8, '0'),
        creator: copyrightMap.tcg[0],
    };

    return {
        isPartial: false,
        result,
    };
};