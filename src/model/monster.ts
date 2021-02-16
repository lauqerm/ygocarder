import { CardFamilyInfo } from './family';

export const defaultMonsterType = [
    'Aqua',
    'Beast',
    'Beast-Warrior',
    'Creator God',
    'Cyberse',
    'Dinosaur',
    'Divine-Beast',
    'Dragon',
    'Fairy',
    'Fiend',
    'Fish',
    'Insect',
    'Machine',
    'Plant',
    'Psychic',
    'Pyro',
    'Reptile',
    'Rock',
    'Sea Serpent',
    'Spellcaster',
    'Thunder',
    'Warrior',
    'Winged Beast',
    'Wyrm',
    'Zombie',
];

export const defaultMonsterCardType = [
    'Pendulum',
    'Effect',
    'Normal',
    'Token',
    'Fusion',
    'Ritual',
    'Synchro',
    'Xyz',
    'Link',
];

export const defaultMonsterSubTypeAbility = [
    'Effect',
    'Normal',
    'Tuner',
    'Special Summon',
    'Toon',
    'Union',
    'Spirit',
    'Gemini',
    'Flip',
];

export const defaultTypeAbilityList = defaultMonsterSubTypeAbility;
export const sequentialTypeAbility = [
    defaultMonsterType,
    defaultMonsterCardType,
    defaultMonsterSubTypeAbility,
];

export const defaultMonsterAttribute = [
    'DARK',
    'EARTH',
    'FIRE',
    'LIGHT',
    'WATER',
    'WIND',
    'DIVINE',
];

export const defaultMonsterSubFamily = [
    'LEVEL',
    'RANK',
    'LINK',
];

export const monsterFamily: CardFamilyInfo = {
    name: 'monster',
    attribute: defaultMonsterAttribute,
    subFamily: defaultMonsterSubFamily,
};