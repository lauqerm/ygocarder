export type ScaleValue = {
	scaleRatio: number,
	translatePercent: string,
}

export type Card = typeof defaultCard;
export const defaultCard = {
    atk: '',
    attribute: '',
    def: '',
    type_ability: [] as string[],
    effect: 'You cannot Special Summon from the Extra Deck, except Machine monsters. If this card is Normal or Special Summoned: You can send 1 Xyz Machine monster from your Extra Deck to the GY; add 1 “B.F.A” Spell/Trap from your Deck to your hand. If this card is in your GY: You can banish 1 Xyz Machine monster from your Extra Deck; add this card to your hand. You can only use each effect of “B.F.A - U3 ”Eden”” once per turn.',
    link_count: 0 as number,
    link_map: [] as string[],
    name: '',
    passcode: '',
    pendulum_effect: '',
    pendulum_scale: -1,
    pic: '',
    set_id: '',
    st_type: '',
    star: 0,
};

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
    'Normal',
    'Effect',
    'Fusion',
    'Ritual',
    'Synchro',
    'Pendulum',
    'Xyz',
    'Link',
    'Token',
];

export const defaultMonsterSubTypeAbility = [
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

export const defaultAttribute = [
    'DARK',
    'EARTH',
    'FIRE',
    'LIGHT',
    'WATER',
    'WIND',
    'DIVINE',
];

export type { TextBoxSize } from './textbox';