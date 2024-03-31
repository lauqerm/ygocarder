export type TextStyleType = 'auto' | 'custom' | 'predefined';
export type TextStyle = ReturnType<typeof getDefaultTextStyle>;
export const getDefaultTextStyle = () => ({
    font: 'Default',
    fillStyle: '#000000',
    shadowColor: '#000000',
    shadowOffsetY: 0,
    shadowOffsetX: 0,
    shadowBlur: 0,
    hasShadow: false,
    lineColor: '#000000',
    lineWidth: 0,
    lineOffsetY: 0,
    lineOffsetX: 0,
    hasOutline: false,
    gradientAngle: 0,
    gradientColor: '#000000',
    hasGradient: false,
    preset: 'commonB',
});

const createPreset = (presetValue: Partial<TextStyle>): Partial<TextStyle> => ({
    font: 'Default',
    hasGradient: false,
    hasOutline: false,
    hasShadow: false,
    ...presetValue
});
export const PresetMap = {
    commonB: {
        key: 'commonB',
        label: 'Common (Black)',
        image: '/asset/image/other/name-common-b.png',
        value: createPreset({
            fillStyle: '#000000',
        }),
    },
    commonW: {
        key: 'commonW',
        label: 'Common (White)',
        image: '/asset/image/other/name-common-w.png',
        value: createPreset({
            fillStyle: '#ffffff',
        }),
    },
    skillDefault: {
        key: 'skillDefault',
        label: 'Skill (Default)',
        image: '/asset/image/other/name-skill-default.png',
        value: createPreset({
            font: 'default',
            fillStyle: '#ffffff',
            lineWidth: 6,
            lineColor: '#000',
            hasOutline: true,
        }),
    },
    skillArial: {
        key: 'skillArial',
        label: 'Skill (Arial)',
        image: '/asset/image/other/name-skill-arial.png',
        value: createPreset({
            font: 'Arial',
            fillStyle: '#ffffff',
            lineWidth: 6,
            lineColor: '#000',
            hasOutline: true,
        }),
    },
    rare: {
        key: 'rare',
        label: 'Rare',
        image: '/asset/image/other/name-rare.png',
        value: createPreset({
            fillStyle: '#cfc6de',
        }),
    },
    secretGradient: {
        key: 'secretGradient',
        label: 'Secret (Gradient)',
        image: '/asset/image/other/name-secret-gradient.png',
        value: createPreset({
            gradientAngle: 180,
            gradientColor: '0.000|#7a71a6,1.000|#a8c1e5',
            hasGradient: true,
        }),
    },
    secret: {
        key: 'secret',
        label: 'Secret',
        image: '/asset/image/other/name-secret.png',
        value: createPreset({
            fillStyle: '#8a8381',
        }),
    },
    platinum: {
        key: 'platinum',
        label: 'Platinum',
        image: '/asset/image/other/name-platinum.png',
        value: createPreset({
            fillStyle: '#a49f9e',
        }),
    },
    ultra: {
        key: 'ultra',
        label: 'Ultra',
        image: '/asset/image/other/name-ultra.png',
        value: createPreset({
            fillStyle: '#dbb473',
        }),
    },
    ultra2: {
        key: 'ultra2',
        label: 'Ultra (Type 2)',
        image: '/asset/image/other/name-ultra-2.png',
        value: createPreset({
            fillStyle: '#fee002',
        }),
    },
    animeRed: {
        key: 'animeRed',
        label: 'Anime (Type Red)',
        image: '/asset/image/other/name-anime-red.png',
        value: createPreset({
            gradientAngle: 180,
            gradientColor: '0.000|#d81961,0.220|#b81654,0.270|#9e1348,0.330|#95093e,0.380|#95093e,0.450|#ba3264,0.530|#ff5e99,0.620|#ffa0c3,0.690|#ffffff,0.770|#ff5e99,0.870|#d81961,1.000|#b81654',
            hasGradient: true,
            hasOutline: true,
            hasShadow: true,
            lineColor: '#333333',
            lineOffsetX: 1,
            lineOffsetY: 0,
            lineWidth: 3,
            shadowBlur: 2,
            shadowColor: '#383838',
            shadowOffsetX: 2,
            shadowOffsetY: 3,
        }),
    },
    animeSilver: {
        key: 'animeSilver',
        label: 'Anime (Type Silver)',
        image: '/asset/image/other/name-anime-silver.png',
        value: createPreset({
            shadowColor: '#383838',
            shadowOffsetY: 3,
            shadowOffsetX: 2,
            shadowBlur: 2,
            hasShadow: true,
            lineColor: '#333333',
            lineWidth: 3,
            lineOffsetX: 1,
            lineOffsetY: 0,
            hasOutline: true,
            gradientAngle: 180,
            gradientColor: '0.000|#cecbb8,0.220|#b0ad9b,0.270|#94917e,0.330|#797768,0.380|#797768,0.450|#d9d9d9,0.610|#ffffff,0.700|#ffffff,0.870|#d6d7c7,1.000|#c9cbb6',
            hasGradient: true,
        }),
    },
    animeGold: {
        key: 'animeGold',
        label: 'Anime (Type Gold)',
        image: '/asset/image/other/name-anime-gold.png',
        value: createPreset({
            shadowColor: '#383838',
            shadowOffsetY: 3,
            shadowOffsetX: 2,
            shadowBlur: 2,
            hasShadow: true,
            lineColor: '#333333',
            lineWidth: 3,
            lineOffsetX: 1,
            lineOffsetY: 0,
            hasOutline: true,
            gradientAngle: 180,
            gradientColor: '0.000|#eee317,0.220|#dbbe15,0.270|#d0920c,0.330|#b57f0b,0.380|#d0920c,0.450|#ffff6b,0.610|#ffffff,0.700|#ffffff,0.870|#e5dd2d,1.000|#e3da23',
            hasGradient: true,
        }),
    },
    promo: {
        key: 'promo',
        label: 'Promo',
        image: '/asset/image/other/name-promo.png',
        value: createPreset({
            fillStyle: '#c7080b',
            shadowColor: '#333333',
            shadowOffsetY: 0,
            shadowOffsetX: 0,
            shadowBlur: 1,
            hasShadow: true,
            lineColor: '#8a1801',
            lineWidth: 3,
            lineOffsetX: 0,
            hasOutline: true,
            preset: 'animeSilver',
            lineOffsetY: 0
        }),
    },
};
export const PresetList = Object.values(PresetMap);

export type CondenseType = 'veryLoose' | 'strict' | 'loose' | 'relaxed';

export type Card = typeof defaultCard;
export const defaultCard = {
    format: 'tcg',
    frame: 'fusion',
    foil: 'normal',
    name: 'Junko',
    nameStyleType: 'auto' as TextStyleType,
    nameStyle: getDefaultTextStyle() as Partial<TextStyle>,
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
    linkMap: ['1', '3', '7', '9'] as string[],
    isPendulum: false,
    pendulumEffect: 'Once per turn: You can pay 800 LP, increase this card\'s Pendulum Scale by 1.',
    pendulumScaleRed: '4',
    pendulumScaleBlue: '4',
    typeAbility: ['Fairy', 'Fusion', 'Effect'] as string[],
    effectStyle: {
        condenseTolerant: 'strict' as CondenseType,
    },
    effect: `[2+ Effect Monsters on your field]
Each time an opponent's monster activates its effect, place 1 Pure Counter on that opponent's monster (max. 1) after that effect resolves. Unaffected by activated effects from monster with a Pure Counter. Cannot be destroyed by battle with monsters with a Pure Counter.`,
    setId: 'YGOC-EN001',
    atk: '2000',
    def: '2000',
    passcode: '18111996',
    sticker: 'holo5',
    isFirstEdition: true,
    isSpeedCard: false,
    isDuelTerminalCard: false,
    creator: '©2020 Studio Dice/SHUEISHA TV TOKYO, KONAMI',
};

export const frameType = [
    { name: 'normal', labelColor: '#fff', labelBackgroundColor: '#c49c5e' },
    { name: 'effect', labelColor: '#fff', labelBackgroundColor: '#b96c49' },
    { name: 'fusion', labelColor: '#fff', labelBackgroundColor: '#8948a4' },
    { name: 'synchro', labelColor: '#000', labelBackgroundColor: '#efefef' },
    { name: 'xyz', labelColor: '#fff', labelBackgroundColor: '#000000' },
    { name: 'link', labelColor: '#fff', labelBackgroundColor: '#0c8ac6' },
    { name: 'ritual', labelColor: '#fff', labelBackgroundColor: '#5e85c9' },
    { name: 'spell', labelColor: '#fff', labelBackgroundColor: '#1b8f83' },
    { name: 'trap', labelColor: '#fff', labelBackgroundColor: '#c32a8c' },
    { name: 'token', labelColor: '#fff', labelBackgroundColor: '#6f6c6b' },
    { name: 'dark-synchro', labelColor: '#fff', labelBackgroundColor: '#4d4543' },
    { name: 'obelisk', labelColor: '#fff', labelBackgroundColor: '#515eb0' },
    { name: 'osiris', labelColor: '#fff', labelBackgroundColor: '#bd5044' },
    { name: 'ra', labelColor: '#000', labelBackgroundColor: '#b9ad34' },
    { name: 'hamon', labelColor: '#fff', labelBackgroundColor: '#534a19' },
    { name: 'raviel', labelColor: '#fff', labelBackgroundColor: '#2b344e' },
    { name: 'uria', labelColor: '#fff', labelBackgroundColor: '#623320' },
    { name: 'lg-dragon', labelColor: '#fff', labelBackgroundColor: '#4e84a4' },
    { name: 'speed-skill', labelColor: '#fff', labelBackgroundColor: '#199cd5' },
    { name: 'zarc', labelColor: '#000', labelBackgroundImage: 'linear-gradient(90deg, rgba(185,108,73,1) 23%, rgba(137,72,164,1) 27%, rgba(137,72,164,1) 48%, rgba(239,239,239,1) 52%, rgba(239,239,239,1) 73%, rgba(0,0,0,1) 77%)' },
];

export const iconList = [
    'NO ICON',
    'FIELD',
    'CONTINUOUS',
    'QUICK-PLAY',
    'RITUAL',
    'EQUIP',
    'COUNTER',
];

export const foilStyleMap: Record<string, TextStyle> = {
    gold: {
        ...getDefaultTextStyle(),
        fillStyle: '#b88c43',
        shadowColor: '#FCC400',
        shadowOffsetY: 1,
        shadowOffsetX: 0,
        shadowBlur: 1,
        hasShadow: true,
    },
    platinum: {
        ...getDefaultTextStyle(),
        fillStyle: '#CCCCCC',
        shadowColor: '#FFFFFF',
        shadowOffsetY: 1,
        shadowOffsetX: 0,
        shadowBlur: 1,
        hasShadow: true,
    },
};
export const foilList = [
    { name: 'normal', color: '#747b95', textStyle: getDefaultTextStyle() },
    { name: 'gold', color: '#cfa65f' },
    { name: 'platinum', color: '#b1b1b1' },
];

export const stickerList = [
    'no-sticker',
    'gold',
    'silver',
    'beta',
    'holo5',
    'holo4',
    'holo3',
    'holo2',
    'holo1',
    'limited',
    'unlimited',
];

export const NO_ATTRIBUTE = 'NONE';
export const attributeList = [
    { name: NO_ATTRIBUTE, color: '#000000' },
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

export * from './canvas';
export type {
    MasterDuelCanvas
} from './card-seri';
