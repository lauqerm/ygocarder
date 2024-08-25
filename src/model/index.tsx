import { BackgroundType, CardOpacity, getDefaultCardOpacity } from './canvas';
import { CondenseType } from './font-data-effect';
import { getDefaultNameStyle, NameStyle, NameStyleType } from './name-preset';
import { CloseCircleOutlined } from '@ant-design/icons';

export type Card = ReturnType<typeof getDefaultCard>;
export const getDefaultCard = () => ({
    version: 0,
    format: 'tcg',
    frame: 'fusion',
    foil: 'normal' as Foil,
    opacity: getDefaultCardOpacity() as Partial<CardOpacity>,
    finish: [] as string[],
    artFinish: 'normal',
    name: 'Junko',
    nameStyleType: 'auto' as NameStyleType,
    nameStyle: getDefaultNameStyle() as Partial<NameStyle>,
    attribute: 'LIGHT',
    subFamily: NO_ICON,
    cardIcon: 'auto',
    star: 6,
    art: 'https://i.imgur.com/h5kXZeC.png',
    artCrop: {
        x: 0,
        y: 4,
        width: 100,
        height: 89.5,
        unit: '%',
        aspect: 1,
    } as Partial<ReactCrop.Crop>,
    hasBackground: false,
    background: '',
    backgroundType: 'fit' as BackgroundType,
    backgroundCrop: {
        x: 0,
        y: 4,
        width: 100,
        height: 89.5,
        unit: '%',
        aspect: 1,
    } as Partial<ReactCrop.Crop>,
    linkMap: [
        '1',
        '3',
        '7',
        '9',
    ] as string[],
    isPendulum: false,
    pendulumFrame: 'auto',
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
    password: '18111996',
    sticker: 'holo5',
    isFirstEdition: true,
    isSpeedCard: false,
    isDuelTerminalCard: false,
    creator: '©2020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI',
    furiganaHelper: true,
});
export const getEmptyCard = (): Card => ({
    version: 0,
    format: 'tcg',
    frame: 'effect',
    foil: 'normal',
    opacity: getDefaultCardOpacity(),
    finish: [],
    artFinish: 'normal',
    name: '',
    nameStyleType: 'auto',
    nameStyle: getDefaultNameStyle(),
    attribute: 'LIGHT',
    subFamily: NO_ICON,
    cardIcon: 'auto',
    star: 6,
    art: 'https://i.imgur.com/jjtCuG5.png',
    artCrop: {
        x: 0,
        y: 4,
        width: 100,
        height: 89.5,
        unit: '%',
        aspect: 1,
    },
    hasBackground: false,
    background: '',
    backgroundType: 'fit',
    backgroundCrop: {
        x: 0,
        y: 4,
        width: 100,
        height: 89.5,
        unit: '%',
        aspect: 1,
    },
    linkMap: [],
    isPendulum: false,
    pendulumFrame: 'auto',
    pendulumEffect: '',
    pendulumScaleRed: '4',
    pendulumScaleBlue: '4',
    typeAbility: [],
    effectStyle: {
        condenseTolerant: 'strict',
    },
    effect: '',
    setId: 'YGOC-EN001',
    atk: '0',
    def: '0',
    password: '',
    sticker: 'no-sticker',
    isFirstEdition: false,
    isSpeedCard: false,
    isDuelTerminalCard: false,
    creator: '©2020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI',
    furiganaHelper: true,
});

export const OpacityList = [
    {
        type: 'body' as const,
        subType: 'artBorder' as const,
        label: 'Card',
        tooltip: 'Keep art border even if the card\'s body is transparent.',
    },
    {
        type: 'name' as const,
        subType: 'nameBorder' as const,
        label: 'Name',
        tooltip: 'Draw name\'s border and finish whenever possible.',
    },
    {
        type: 'pendulum' as const,
        label: 'Pendulum',
        tooltip: null,
    },
    {
        type: 'text' as const,
        label: 'Effect',
        tooltip: null,
    },
];

export type FrameInfo = {
    name: string,
    edition: 'normal' | 'extendend',
    labelColor: string,
    labelBackgroundColor?: string,
    labelBackgroundColorList?: string[],
    labelBackgroundImage?: string,
};
export const FrameInfoMap: Record<string, FrameInfo> = {
    'normal': {
        name: 'normal',
        labelColor: '#ffffff',
        edition: 'normal',
        labelBackgroundColor: '#c49c5e',
    },
    'effect': {
        name: 'effect',
        labelColor: '#ffffff',
        edition: 'normal',
        labelBackgroundColor: '#b96c49',
    },
    'fusion': {
        name: 'fusion',
        labelColor: '#ffffff',
        edition: 'normal',
        labelBackgroundColor: '#8948a4',
    },
    'synchro': {
        name: 'synchro',
        labelColor: '#000',
        edition: 'normal',
        labelBackgroundColor: '#efefef',
    },
    'xyz': {
        name: 'xyz',
        labelColor: '#ffffff',
        edition: 'normal',
        labelBackgroundColor: '#000000',
    },
    'link': {
        name: 'link',
        labelColor: '#ffffff',
        edition: 'normal',
        labelBackgroundColor: '#0c8ac6',
    },
    'ritual': {
        name: 'ritual',
        labelColor: '#ffffff',
        edition: 'normal',
        labelBackgroundColor: '#5e85c9',
    },
    'spell': {
        name: 'spell',
        labelColor: '#ffffff',
        edition: 'normal',
        labelBackgroundColor: '#1b8f83',
    },
    'trap': {
        name: 'trap',
        labelColor: '#ffffff',
        edition: 'normal',
        labelBackgroundColor: '#c32a8c',
    },
    'token': {
        name: 'token',
        labelColor: '#ffffff',
        edition: 'normal',
        labelBackgroundColor: '#6f6c6b',
    },
    'dark-synchro': {
        name: 'dark-synchro',
        labelColor: '#ffffff',
        edition: 'extendend',
        labelBackgroundColor: '#4d4543',
    },
    'obelisk': {
        name: 'obelisk',
        labelColor: '#ffffff',
        edition: 'extendend',
        labelBackgroundColor: '#515eb0',
    },
    'osiris': {
        name: 'osiris',
        labelColor: '#ffffff',
        edition: 'extendend',
        labelBackgroundColor: '#bd5044',
    },
    'ra': {
        name: 'ra',
        labelColor: '#000',
        edition: 'extendend',
        labelBackgroundColor: '#b9ad34',
    },
    'raviel': {
        name: 'raviel',
        labelColor: '#ffffff',
        edition: 'extendend',
        labelBackgroundColor: '#313c5f',
    },
    'uria': {
        name: 'uria',
        labelColor: '#ffffff',
        edition: 'extendend',
        labelBackgroundColor: '#623320',
    },
    'hamon': {
        name: 'hamon',
        labelColor: '#ffffff',
        edition: 'extendend',
        labelBackgroundColor: '#534a19',
    },
    'lg-dragon': {
        name: 'lg-dragon',
        labelColor: '#ffffff',
        edition: 'extendend',
        labelBackgroundColor: '#4e84a4',
    },
    'speed-skill': {
        name: 'speed-skill',
        labelColor: '#ffffff',
        edition: 'extendend',
        labelBackgroundColor: '#199cd5',
    },
    'zarc': {
        name: 'zarc',
        labelColor: '#000',
        edition: 'extendend',
        labelBackgroundColorList: [
            'rgba(185,108,73,1)',
            'rgba(137,72,164,1)',
            'rgba(239,239,239,1)',
            'rgba(0,0,0,1)',
        ],
        labelBackgroundImage: 'linear-gradient(90deg, rgba(185,108,73,1) 23%, rgba(137,72,164,1) 27%, rgba(137,72,164,1) 48%, rgba(239,239,239,1) 52%, rgba(239,239,239,1) 73%, rgba(0,0,0,1) 77%)',
    },
};
export const frameList = Object.values(FrameInfoMap);

export const NO_ICON = 'NO ICON';
export const IconList = [
    { label: <CloseCircleOutlined />, value: NO_ICON },
    { label: 'Field', value: 'FIELD' },
    { label: 'Continuous', value: 'CONTINUOUS' },
    { label: 'Quick-Play', value: 'QUICK-PLAY' },
    { label: 'Ritual', value: 'RITUAL' },
    { label: 'Equip', value: 'EQUIP' },
    { label: 'Counter', value: 'COUNTER' },
];
export const IconValueList = IconList.map(entry => entry.value);

export const FoilList = [
    {
        name: 'normal' as const,
        label: 'None',
        color: '#747b95',
    },
    {
        name: 'gold' as const,
        label: 'Gold',
        color: '#cfa65f',
    },
    {
        name: 'platinum' as const,
        label: 'Platinum',
        color: '#b1b1b1',
    },
];
export type Foil = typeof FoilList[0]['name'];

export const StickerList = [
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
export const AttributeList = [
    {
        name: NO_ATTRIBUTE,
        color: '#000000',
    },
    {
        name: 'DARK',
        color: '#b41dda',
    },
    {
        name: 'EARTH',
        color: '#8d8e8e',
    },
    {
        name: 'FIRE',
        color: '#e51b23',
    },
    {
        name: 'LIGHT',
        color: '#bfae32',
    },
    {
        name: 'WATER',
        color: '#008ecd',
    },
    {
        name: 'WIND',
        color: '#28ab35',
    },
    {
        name: 'DIVINE',
        color: '#ef6300',
    },
    {
        name: 'SPELL',
        color: '#1b8f83',
    },
    {
        name: 'TRAP',
        color: '#c32a8c',
    },
];

export * from './canvas';
export * from './coordinate-data';
export * from './dictionary';
export * from './finish';
export * from './font-data-effect';
export * from './font-data-name';
export * from './font-data-other';
export * from './format';
export * from './link';
export * from './name-preset';
export * from './regex';