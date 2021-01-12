import { monsterFamily } from './monster';
import { spellFamily } from './spell';
import { trapFamily } from './trap';

export type ScaleValue = {
	scaleRatio: number,
	translatePercent: string,
}

export type CardFamily = keyof typeof defaultCardFamily;
export const defaultCardFamily = {
    Monster: monsterFamily,
    Spell: spellFamily,
    Trap: trapFamily,
};

export type Card = typeof defaultCard;
export const defaultCard = {
    atk: '100',
    attribute: 'DARK',
    family: 'Monster' as CardFamily,
    subFamily: 'Level',
    def: '2000',
    type_ability: ['Machine', 'Effect'] as string[],
    effect: 'You cannot Special Summon from the Extra Deck, except Machine monsters. If this card is Normal or Special Summoned: You can send 1 Xyz Machine monster from your Extra Deck to the GY; add 1 “B.F.A” Spell/Trap from your Deck to your hand. If this card is in your GY: You can banish 1 Xyz Machine monster from your Extra Deck; add this card to your hand. You can only use each effect of “B.F.A - U3 ”Eden”” once per turn.',
    link_count: 0 as number,
    link_map: [] as string[],
    name: 'B.F.A - U3 “Eden”',
    passcode: '',
    pendulum_effect: '',
    pendulum_scale: -1,
    pic: '',
    set_id: '',
    st_type: '',
    star: 4,
};
export const defaultMonster = defaultCard;
export const defaultSpell = {
    ...defaultCard,
    family: 'Spell' as CardFamily,
    attribute: 'Spell',
    subFamily: 'Normal',
};
export const defaultTrap = {
    ...defaultCard,
    family: 'Trap' as CardFamily,
    attribute: 'Trap',
    subFamily: 'Normal',
};

export {
    defaultMonsterAttribute,
    defaultMonsterCardType,
    sequentialTypeAbility,
    defaultMonsterSubFamily,
    defaultMonsterSubTypeAbility,
    defaultMonsterType,
    defaultTypeAbilityList,
    monsterFamily,
} from './monster';
export {
    defaultSpellSubFamily,
    spellFamily,
} from './spell';
export {
    defaultTrapAttribute,
    trapFamily
} from './trap';
export type { TextBoxFontSize } from './textbox';