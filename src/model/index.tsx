export type ScaleValue = {
	scaleRatio: number,
	translatePercent: string,
};

export type Card = typeof defaultCard;
export const defaultCard = {
    atk: '100',
    attribute: 'DARK',
    frame: 'effect',
    subFamily: 'Level',
    def: '2000',
    type_ability: ['Dragon', 'Pendulum', 'Effect'] as string[],
    effect: `["Blue-Eyes White Dragon" + "Blue-Eyes White Dragon" + "Blue-Eyes White Dragon"]
Your opponent cannot target or destroy this card with card effects. Once per turn: You can target 1 card your opponent controls; destroy it.
* If this card was Fusion Summoned using a monster whose original name is "Blue-Eyes Alternative White Dragon" as material, you can target up to 3 cards your opponent controls instead.
* This card cannot attack the turn this effect is activated.
(This card is always treated as "Blue-Eyes Ultimate Dragon")`,
    link_map: ['1', '2', '3', '8', '9'] as string[],
    name: 'B.F.A - U3 “Eden”',
    passcode: '24907043',
    isPendulum: true,
    pendulum_effect: '',
    red_scale: '0',
    blue_scale: '0',
    picture: 'https://images2.imgbox.com/13/c5/dXPTEORX_o.jpg',
    set_id: 'ROTD-EN081',
    star: 4,
    isFirstEdition: true,
    creator: '©1996 KAZUKI TAKAHASHI',
};
export const defaultMonster = defaultCard;

export {
    defaultMonsterAttribute,
    defaultMonsterCardType,
    defaultMonsterSubFamily,
    defaultMonsterSubTypeAbility,
    defaultMonsterType,
    defaultTypeAbilityList,
    monsterFamily,
} from './monster';
export type {
    TextBoxFontSize,
    TextBoxSize,
} from './textbox';

export const frameType = [
    { name: 'normal', color: '#fff', backgroundColor: '#c49c5e' },
    { name: 'effect', color: '#fff', backgroundColor: '#b96c49' },
    { name: 'fusion', color: '#fff', backgroundColor: '#8948a4' },
    { name: 'synchro', color: '#000', backgroundColor: '#efefef' },
    { name: 'xyz', color: '#fff', backgroundColor: '#000' },
    { name: 'link', color: '#fff', backgroundColor: '#0c8ac6' },
    { name: 'ritual', color: '#fff', backgroundColor: '#5e85c9' },
    { name: 'spell', color: '#fff', backgroundColor: '#1b8f83' },
    { name: 'trap', color: '#fff', backgroundColor: '#98186a' },
    { name: 'token', color: '#fff', backgroundColor: '#6f6c6b' },
];

export const iconList = [
    'NO ICON',
    'FIELD',
    'CONTINUOUS',
    'QUICK-PLAY',
    'RITUAL',
    'COUNTER',
];

export const attributeList = [
    { name: 'DARK', color: '#950db7' },
    { name: 'EARTH', color: '#8d8e8e' },
    { name: 'FIRE', color: '#e51b23' },
    { name: 'LIGHT', color: '#bfae32' },
    { name: 'WATER', color: '#008ecd' },
    { name: 'WIND', color: '#28ab35' },
    { name: 'DIVINE', color: '#ef6300' },
    { name: 'SPELL', color: '#1b8f83' },
    { name: 'TRAP', color: '#98186a' },
];