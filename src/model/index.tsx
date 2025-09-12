import { BackgroundType, CardOpacity, getDefaultCardOpacity } from './canvas';
import { Foil, getDefaultDyeList, OtherFinish } from './foil-finish-dye';
import { CondenseType } from './condense';
import { NO_ATTRIBUTE, NO_ICON, NO_STICKER } from './icon';
import { getDefaultNameStyle, getDefaultTextStyle, NameStyle, NameStyleType } from './name-preset';
import { v4 as uuid } from 'uuid';
import { DEFAULT_PENDULUM_SIZE } from './pendulum';
import { getDefaultCardFlag } from './flag';
import { LanguageDataDictionary } from 'src/service';

export const getDefaultCrop = () => ({
    x: 0,
    y: 4,
    width: 100,
    height: 89.5,
    unit: '%' as '%' | 'px',
    aspect: 1,
});

/**
 * Check following things when adding new attributes:
 * * Default card and empty card
 * * Convert codec
 * * Shorten codec
 * * Card thumb
 * * Legacy version
 * * Import / export / template
 */
export type Card = ReturnType<typeof getDefaultCard>;
export const getDefaultCard = () => ({
    version: 2,
    format: 'tcg',
    region: 'en',
    frame: 'fusion',
    leftFrame: 'auto',
    rightFrame: 'auto',
    pendulumRightFrame: 'auto',
    foil: 'normal' as Foil,
    opacity: getDefaultCardOpacity() as Partial<CardOpacity>,
    finish: [] as string[],
    otherFinish: ['normal', 'normal', 'normal', 'normal'] as OtherFinish,
    artFinish: 'normal',
    name: 'Junko',
    nameStyleType: 'auto' as NameStyleType,
    nameStyle: getDefaultNameStyle() as Partial<NameStyle>,
    attribute: 'LIGHT',
    subFamily: NO_ICON,
    cardIcon: 'auto',
    star: 6 as number | string,
    starAlignment: 'auto',
    starList: [] as string[],
    art: 'https://i.imgur.com/h5kXZeC.png',
    artData: '',
    artFit: false,
    artSource: 'online',
    artCrop: getDefaultCrop() as Partial<ReactCrop.Crop>,
    hasBackground: false,
    background: '',
    backgroundData: '',
    backgroundFit: false,
    backgroundSource: 'online',
    backgroundType: 'fit' as BackgroundType,
    backgroundCrop: getDefaultCrop() as Partial<ReactCrop.Crop>,
    linkMap: [
        '1',
        '3',
        '7',
        '9',
    ] as string[],
    linkRating: '',
    isLink: false as boolean | null,
    isPendulum: false,
    pendulumFrame: 'auto',
    pendulumEffect: 'Once per turn: You can pay 800 LP, increase this card\'s Pendulum Scale by 1.',
    pendulumScaleRed: '4',
    pendulumScaleBlue: '4',
    pendulumSize: DEFAULT_PENDULUM_SIZE,
    typeAbility: [
        'Fairy',
        'Fusion',
        'Effect',
    ] as string[],
    effectStyle: {
        condenseTolerant: 'strict' as CondenseType,
        fontStyle: 'auto',
        upSize: 0,
        background: 'auto',
        minLine: 0,
        justifyRatio: 100,
    },
    pendulumStyle: {
        fontStyle: 'auto',
        upSize: 0,
        background: 'auto',
        minLine: 0,
        justifyRatio: 100,
    },
    effect: `[2+ Effect Monsters on your field]
Each time an opponent's monster activates its effect, place 1 Pure Counter on that opponent's monster (max. 1) after that effect resolves. Unaffected by activated effects from monster with a Pure Counter. Cannot be destroyed by battle with monsters with a Pure Counter.`,
    setId: 'YGOC-EN001',
    atk: '2000',
    def: '2000',
    password: '18199611',
    sticker: 'holo5',
    isFirstEdition: true,
    isSpeedCard: false,
    isLimitedEdition: false,
    isDuelTerminalCard: false,
    isLegacyCard: false,
    creator: '©2020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI',
    furiganaHelper: true,
    statTextStyle: getDefaultTextStyle(),
    typeTextStyle: getDefaultTextStyle(),
    effectTextStyle: getDefaultTextStyle(),
    pendulumTextStyle: getDefaultTextStyle(),
    otherTextStyle: getDefaultTextStyle(),
    flag: getDefaultCardFlag(),
    dyeList: getDefaultDyeList(),
    /** Extra information come from different card source such as YGOPro custom card maker */
    externalInfo: {} as Record<string, any>,
});
/** We avoid storing unique id for card, as it does not contribute to the card's identity. Id only matter when we are managing the card inside the app. */
export type InternalCard = ReturnType<typeof getDefaultInternalCard>;
export const getDefaultInternalCard = () => ({
    id: uuid(),
    ...getDefaultCard(),
});

export const getEmptyCard = (): Card => ({
    version: 3,
    format: 'tcg',
    region: 'en',
    /** Why we split frame and left frame here? Because there is more nuance to the card other than individual frames, for example name bevel, border bevel, effect bevel etc..., so "frame" here is a kind of "main frame" that dictates all those nuance, why the actual card background is constructed from those 4 corner frames. */
    frame: 'effect',
    leftFrame: 'auto',
    rightFrame: 'auto',
    pendulumRightFrame: 'auto',
    foil: 'normal',
    opacity: getDefaultCardOpacity(),
    finish: [],
    artFinish: 'normal',
    otherFinish: ['normal', 'normal', 'normal', 'normal'],
    name: '',
    nameStyleType: 'auto',
    nameStyle: getDefaultNameStyle(),
    attribute: NO_ATTRIBUTE,
    subFamily: NO_ICON,
    cardIcon: 'auto',
    star: 6,
    starList: [] as string[],
    starAlignment: 'auto',
    art: 'https://i.imgur.com/jjtCuG5.png',
    artData: '',
    artSource: 'online',
    artFit: false,
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
    backgroundData: '',
    backgroundFit: false,
    backgroundSource: 'online',
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
    linkRating: '',
    isLink: null,
    isPendulum: false,
    pendulumFrame: 'auto',
    pendulumEffect: '',
    pendulumScaleRed: '4',
    pendulumScaleBlue: '4',
    pendulumSize: DEFAULT_PENDULUM_SIZE,
    typeAbility: [],
    effectStyle: {
        condenseTolerant: 'strict',
        fontStyle: 'auto',
        upSize: 0,
        background: 'auto',
        minLine: 0,
        justifyRatio: 100,
    },
    pendulumStyle: {
        fontStyle: 'auto',
        upSize: 0,
        background: 'auto',
        minLine: 0,
        justifyRatio: 100,
    },
    effect: '',
    setId: '',
    atk: '0',
    def: '0',
    password: '',
    sticker: NO_STICKER,
    isFirstEdition: false,
    isSpeedCard: false,
    isLimitedEdition: false,
    isDuelTerminalCard: false,
    isLegacyCard: false,
    /** A.k.a copyright */
    creator: '',
    furiganaHelper: true,
    statTextStyle: getDefaultTextStyle(),
    typeTextStyle: getDefaultTextStyle(),
    effectTextStyle: getDefaultTextStyle(),
    pendulumTextStyle: getDefaultTextStyle(),
    otherTextStyle: getDefaultTextStyle(),
    dyeList: getDefaultDyeList(),
    flag: getDefaultCardFlag(),
    externalInfo: {},
});

export const OpacityList = [
    {
        type: 'body' as const,
        subType: 'artBorder' as const,
        label: 'Card',
        labelKey: 'input.opacity.body.label',
        tooltipKey: 'input.opacity.art-border.tooltip',
    },
    {
        type: 'name' as const,
        subType: 'nameBorder' as const,
        label: 'Name',
        labelKey: 'input.opacity.name.label',
        tooltipKey: 'input.opacity.name-border.tooltip',
    },
    {
        type: 'pendulum' as const,
        label: 'Pendulum',
        labelKey: 'input.opacity.pendulum.label',
        tooltipKey: null,
    },
    {
        type: 'text' as const,
        subType: 'effectBox' as const,
        label: 'Effect',
        labelKey: 'input.opacity.effect.label',
        tooltipKey: 'input.opacity.effect-box.tooltip',
    },
];

export const DefaultColorList = [
    '#4D4D4D', '#999999', '#FFFFFF', '#FF7F7F', '#FFD27F', '#FFFF7F',
    '#7FFF7F', '#7FBF7F', '#7FFFFF', '#7F7FFF', '#BF7FBF', '#FF7FFF',

    '#333333', '#808080', '#cccccc', '#FF0000', '#FFA500', '#FFFF00',
    '#00FF00', '#008000', '#00FFFF', '#0000FF', '#800080', '#FF00FF',

    '#000000', '#666666', '#B3B3B3', '#7F0000', '#7F5200', '#7F7F00',
    '#007F00', '#004000', '#007F7F', '#00007F', '#400040', '#7F007F',
];

export const ResolutionMap = {
    '549x800': {
        label: '549 × 800',
        width: 549,
        height: 800,
        scale: 1,
        settingValue: [549, 800] as [number, number],
    },
    '561x818': {
        label: '561 × 818',
        width: 561,
        height: 818,
        scale: 1,
        settingValue: [561, 818] as [number, number],
    },
    '813x1185': {
        label: '813 × 1185',
        width: 813,
        height: 1185,
        scale: 1,
        settingValue: [813, 1185] as [number, number],
    },
    '1122x1636': {
        label: <div style={{ color: 'var(--main-warning)' }}>1122 × 1636</div>,
        width: 1122,
        height: 1636,
        scale: 2,
        settingValue: [1122, 1636] as [number, number],
    },
    '1388x2026': {
        label: <div style={{ color: 'var(--main-warning)' }}>1388 × 2026</div>,
        width: 1388,
        height: 2026,
        scale: 2,
        settingValue: [1388, 2026] as [number, number],
    },
    '1626x2370': {
        label: <div style={{ color: 'var(--main-warning)' }}>1626 × 2370</div>,
        width: 1626,
        height: 2370,
        scale: 2,
        settingValue: [1626, 2370] as [number, number],
    },
};
export const ResolutionList = [
    ResolutionMap['549x800'],
    ResolutionMap['561x818'],
    ResolutionMap['813x1185'],
    ResolutionMap['1122x1636'],
    ResolutionMap['1388x2026'],
    ResolutionMap['1626x2370'],
];

export type ExportFormat = typeof ExportFormatList[0]['value'];
export const ExportFormatList = [
    {
        value: 'csv' as const,
        label: '.csv',
    },
    {
        value: 'xlsx' as const,
        label: '.xlsx',
    },
];

export type SlindingType = ReturnType<typeof getSlindingTypeList>[0]['value'];
export const getSlindingTypeList = (language: LanguageDataDictionary) => [
    {
        value: 'auto' as const,
        label: language['setting.option.sliding-type.auto.label'],
    },
    {
        value: 'manual' as const,
        label: language['setting.option.sliding-type.manual.label'],
    },
];

export * from './canvas';
export * from './compatible-card';
export * from './condense';
export * from './coordinate-data';
export * from './dictionary';
export * from './flag';
export * from './foil-finish-dye';
export * from './font-data-effect';
export * from './font-data-name';
export * from './font-data-other';
export * from './font-data-pendulum-effect';
export * from './format';
export * from './frame';
export * from './icon';
export * from './link';
export * from './name-preset';
export * from './other';
export * from './pendulum';
export * from './regex';