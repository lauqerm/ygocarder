export type TextStyleType = 'auto' | 'custom';
export type TextStyle = typeof defaultTextStyle;
export const defaultTextStyle = {
    fillStyle: '#000000',
    shadowColor: '#000000',
    shadowOffsetY: 0,
    shadowOffsetX: 0,
    shadowBlur: 0,
    globalAlpha: 1,
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
● If this card was Fusion Summoned using a monster whose original name is "Blue-Eyes Alternative White Dragon" as material, you can target up to 3 cards your opponent controls instead.
● This card cannot attack the turn this effect is activated.
(This card is always treated as "Blue-Eyes Ultimate Dragon")`,
    link_map: ['1', '2', '3', '8', '9'] as string[],
    name: 'B.F.A - U3 “Eden”',
    nameStyleType: 'auto' as TextStyleType,
    nameStyle: {
        fillStyle: '#000000',
        shadowColor: '#000000',
        shadowOffsetY: 0,
        shadowOffsetX: 0,
        shadowBlur: 0,
        globalAlpha: 1,
    } as TextStyle,
    passcode: '24907043',
    foil: 'normal',
    sticker: 'holo2',
    isPendulum: true,
    pendulum_effect: 'You can pay 1000 LP; add 1 "Abyss Actor" Pendulum Monster from your Deck to your hand, except "Abyss Actor - Mellow Madonna", also you cannot Special Summon monsters for the rest of this turn, except "Abyss Actor" Pendulum Monsters (even if this card leaves the field). You can only use this effect of "Abyss Actor - Mellow Madonna" once per turn.',
    red_scale: '0',
    blue_scale: '13',
    picture: 'https://i.imgur.com/h5kXZeC.png',
    pictureCrop: {
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        aspect: 1,
        unit: 'px',
    } as Partial<ReactCrop.Crop>,
    set_id: 'ROTD-EN081',
    star: 4,
    isFirstEdition: true,
    creator: '©2020 Studio Dice/SHUEISHA TV TOKYO, KONAMI',
};
export const defaultMonster = defaultCard;

export const frameType = [
    { name: 'normal', color: '#fff', backgroundColor: '#c49c5e' },
    { name: 'effect', color: '#fff', backgroundColor: '#b96c49' },
    { name: 'fusion', color: '#fff', backgroundColor: '#8948a4' },
    { name: 'synchro', color: '#000', backgroundColor: '#efefef' },
    { name: 'xyz', color: '#fff', backgroundColor: '#000' },
    { name: 'link', color: '#fff', backgroundColor: '#0c8ac6' },
    { name: 'ritual', color: '#fff', backgroundColor: '#5e85c9' },
    { name: 'spell', color: '#fff', backgroundColor: '#1b8f83' },
    { name: 'trap', color: '#fff', backgroundColor: '#c32a8c' },
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

export const foilStyleMap: Record<string, TextStyle> = {
    gold: {
        fillStyle: '#b88c43',
        shadowColor: '#FCC400',
        shadowOffsetY: 1,
        shadowOffsetX: 0,
        shadowBlur: 1,
        globalAlpha: 1,
    },
    platinum: {
        fillStyle: '#CCCCCC',
        shadowColor: '#FFFFFF',
        shadowOffsetY: 1,
        shadowOffsetX: 0,
        shadowBlur: 1,
        globalAlpha: 1,
    },
};
export const foilList = [
    { name: 'normal', color: '#747b95', textStyle: defaultTextStyle },
    { name: 'gold', color: '#cfa65f' },
    { name: 'platinum', color: '#b1b1b1' },
];

export const stickerList = [
    'gold',
    'silver',
    'beta',
    'holo5',
    'holo4',
    'holo3',
    'holo2',
    'holo1',
];

export const attributeList = [
    { name: 'DARK', color: '#b41dda' },
    { name: 'EARTH', color: '#8d8e8e' },
    { name: 'FIRE', color: '#e51b23' },
    { name: 'LIGHT', color: '#bfae32' },
    { name: 'WATER', color: '#008ecd' },
    { name: 'WIND', color: '#28ab35' },
    { name: 'DIVINE', color: '#ef6300' },
    { name: 'SPELL', color: '#1b8f83' },
    { name: 'TRAP', color: '#c32a8c' },
];