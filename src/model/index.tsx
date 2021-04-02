export type TextStyleType = 'auto' | 'custom';
export type TextStyle = typeof defaultTextStyle;
export const defaultTextStyle = {
    fillStyle: '#000000',
    shadowColor: '#000000',
    shadowOffsetY: 0,
    shadowOffsetX: 0,
    shadowBlur: 0,
    hasShadow: false,
};

export type Card = typeof defaultCard;
export const defaultCard = {
    frame: 'fusion',
    foil: 'normal',
    name: 'Junko',
    nameStyleType: 'auto' as TextStyleType,
    nameStyle: {
        fillStyle: '#000000',
        shadowColor: '#000000',
        shadowOffsetY: 0,
        shadowOffsetX: 0,
        shadowBlur: 0,
        hasShadow: false,
    } as TextStyle,
    attribute: 'LIGHT',
    subFamily: 'NO ICON',
    star: 6,
    picture: 'https://i.imgur.com/h5kXZeC.png',
    pictureCrop: {
        x: 0,
        y: 12,
        width: 269,
        height: 269,
        unit: 'px',
        aspect: 1,
    } as Partial<ReactCrop.Crop>,
    link_map: ['1', '3', '7', '9'] as string[],
    isPendulum: false,
    pendulum_effect: 'Once per turn: You can pay 800 LP, increase this card\'s Pendulum Scale by 1.',
    red_scale: '4',
    blue_scale: '4',
    type_ability: ['Fairy', 'Fusion', 'Effect'] as string[],
    effect: `[2+ Effect Monsters]
Each time an opponent's monster activates its effect, place 1 Pure Counter on that opponent's monster (max. 1) after that effect resolves. Unaffected by activated effects from monster with a Pure Counter. Cannot be destroyed by battle with monsters with a Pure Counter.`,
    set_id: 'YGOC-EN001',
    atk: '2000',
    def: '2000',
    passcode: '18111996',
    sticker: 'holo5',
    isFirstEdition: true,
    creator: '©2020 Studio Dice/SHUEISHA TV TOKYO, KONAMI',
};

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
        hasShadow: true,
    },
    platinum: {
        fillStyle: '#CCCCCC',
        shadowColor: '#FFFFFF',
        shadowOffsetY: 1,
        shadowOffsetX: 0,
        shadowBlur: 1,
        hasShadow: true,
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