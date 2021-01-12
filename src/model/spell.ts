import { CardFamilyInfo } from './family';

export const defaultSpellSubFamily = [
    'NORMAL',
    'FIELD',
    'CONTINUOUS',
    'QUICK-PLAY',
    'RITUAL',
];

export const spellFamily: CardFamilyInfo = {
    name: 'spell',
    attribute: ['Spell'],
    subFamily: defaultSpellSubFamily,
};