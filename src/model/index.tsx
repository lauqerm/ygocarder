import { CondenseType } from './font-data-effect';
import { getDefaultNameStyle, NameStyle, NameStyleType } from './name-preset';

export type Card = typeof defaultCard;
export const defaultCard = {
    format: 'tcg',
    frame: 'fusion',
    foil: 'normal',
    opacity: {
        body: 100,
        pendulum: 100,
        text: 100,
    },
    finish: [] as string[],
    artFinish: 'normal',
    name: 'Junko',
    nameStyleType: 'auto' as NameStyleType,
    nameStyle: getDefaultNameStyle() as Partial<NameStyle>,
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
    linkMap: ['1',
        '3',
        '7',
        '9'] as string[],
    isPendulum: false,
    pendulumFrame: 'spell',
    pendulumEffect: 'Once per turn: You can pay 800 LP, increase this card\'s Pendulum Scale by 1.',
    pendulumScaleRed: '4',
    pendulumScaleBlue: '4',
    typeAbility: ['Fairy',
        'Fusion',
        'Effect'] as string[],
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

export const OpacityList = [
    { value: 'body' as const, label: 'Card' },
    { value: 'pendulum' as const, label: 'Pendulum Text' },
    { value: 'text' as const, label: 'Main Text' },
];

export type FrameInfo = { name: string, labelColor: string, labelBackgroundColor?: string, labelBackgroundImage?: string };
export const frameMap: Record<string, FrameInfo> = {
    'normal': {
        name: 'normal',
        labelColor: '#ffffff',
        labelBackgroundColor: '#c49c5e',
    },
    'effect': {
        name: 'effect',
        labelColor: '#ffffff',
        labelBackgroundColor: '#b96c49',
    },
    'fusion': {
        name: 'fusion',
        labelColor: '#ffffff',
        labelBackgroundColor: '#8948a4',
    },
    'synchro': {
        name: 'synchro',
        labelColor: '#000',
        labelBackgroundColor: '#efefef',
    },
    'xyz': {
        name: 'xyz',
        labelColor: '#ffffff',
        labelBackgroundColor: '#000000',
    },
    'link': {
        name: 'link',
        labelColor: '#ffffff',
        labelBackgroundColor: '#0c8ac6',
    },
    'ritual': {
        name: 'ritual',
        labelColor: '#ffffff',
        labelBackgroundColor: '#5e85c9',
    },
    'spell': {
        name: 'spell',
        labelColor: '#ffffff',
        labelBackgroundColor: '#1b8f83',
    },
    'trap': {
        name: 'trap',
        labelColor: '#ffffff',
        labelBackgroundColor: '#c32a8c',
    },
    'token': {
        name: 'token',
        labelColor: '#ffffff',
        labelBackgroundColor: '#6f6c6b',
    },
    'dark-synchro': {
        name: 'dark-synchro',
        labelColor: '#ffffff',
        labelBackgroundColor: '#4d4543',
    },
    'obelisk': {
        name: 'obelisk',
        labelColor: '#ffffff',
        labelBackgroundColor: '#515eb0',
    },
    'osiris': {
        name: 'osiris',
        labelColor: '#ffffff',
        labelBackgroundColor: '#bd5044',
    },
    'ra': {
        name: 'ra',
        labelColor: '#000',
        labelBackgroundColor: '#b9ad34',
    },
    'raviel': {
        name: 'raviel',
        labelColor: '#ffffff',
        labelBackgroundColor: '#2b344e',
    },
    'uria': {
        name: 'uria',
        labelColor: '#ffffff',
        labelBackgroundColor: '#623320',
    },
    'hamon': {
        name: 'hamon',
        labelColor: '#ffffff',
        labelBackgroundColor: '#534a19',
    },
    'lg-dragon': {
        name: 'lg-dragon',
        labelColor: '#ffffff',
        labelBackgroundColor: '#4e84a4',
    },
    'speed-skill': {
        name: 'speed-skill',
        labelColor: '#ffffff',
        labelBackgroundColor: '#199cd5',
    },
    'zarc': {
        name: 'zarc',
        labelColor: '#000',
        labelBackgroundImage: 'linear-gradient(90deg, rgba(185,108,73,1) 23%, rgba(137,72,164,1) 27%, rgba(137,72,164,1) 48%, rgba(239,239,239,1) 52%, rgba(239,239,239,1) 73%, rgba(0,0,0,1) 77%)',
    },
};
export const frameList = Object.values(frameMap);

export const iconList = [
    'NO ICON',
    'FIELD',
    'CONTINUOUS',
    'QUICK-PLAY',
    'RITUAL',
    'EQUIP',
    'COUNTER',
];

export const foilList = [
    {
        name: 'normal',
        label: 'None',
        color: '#747b95',
    },
    {
        name: 'gold',
        label: 'Gold',
        color: '#cfa65f',
    },
    {
        name: 'platinum',
        label: 'Platinum',
        color: '#b1b1b1',
    },
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
    { name: NO_ATTRIBUTE, color: '#000000',

    },
    { name: 'DARK',
        color: '#b41dda',
    },
    { name: 'EARTH',
        color: '#8d8e8e',
    },
    { name: 'FIRE',
        color: '#e51b23',
    },
    { name: 'LIGHT',
        color: '#bfae32',
    },
    { name: 'WATER',
        color: '#008ecd',
    },
    { name: 'WIND',
        color: '#28ab35',
    },
    { name: 'DIVINE',
        color: '#ef6300',
    },
    { name: 'SPELL',
        color: '#1b8f83',
    },
    { name: 'TRAP',
        color: '#c32a8c',
    },
];

export * from './canvas';
export * from './canvas-map';
export * from './coordinate-data';
export * from './dictionary';
export * from './font-data-other';
export * from './format';
export * from './link';
export * from './name-preset';
export * from './regex';
export * from './font-data-name';
export * from './font-data-effect';