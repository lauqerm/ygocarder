import { BackgroundType, CardOpacity, getDefaultCardOpacity } from './canvas';
import { Foil } from './foil-finish';
import { CondenseType } from './font-data-effect';
import { NO_ICON } from './icon';
import { getDefaultNameStyle, getDefaultTextStyle, NameStyle, NameStyleType } from './name-preset';

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
    star: 6 as number | string,
    starAlignment: 'auto',
    art: 'https://i.imgur.com/h5kXZeC.png',
    artData: '',
    artFit: false,
    artSource: 'online',
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
    backgroundData: '',
    backgroundFit: false,
    backgroundSource: 'online',
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
    typeAbility: [
        'Fairy',
        'Fusion',
        'Effect',
    ] as string[],
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
    isLimitedEdition: false,
    isDuelTerminalCard: false,
    isLegacyCard: false,
    creator: '©2020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI',
    furiganaHelper: true,
    statTextStyle: getDefaultTextStyle(),
    typeTextStyle: getDefaultTextStyle(),
    effectTextStyle: getDefaultTextStyle(),
    pendulumTextStyle: getDefaultTextStyle(),
    /** Extra information come from different card source such as YGOPro custom card maker */
    externalInfo: {} as Record<string, any>,
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
    setId: '',
    atk: '0',
    def: '0',
    password: '',
    sticker: 'no-sticker',
    isFirstEdition: false,
    isSpeedCard: false,
    isLimitedEdition: false,
    isDuelTerminalCard: false,
    isLegacyCard: false,
    /** Or copyright */
    creator: '',
    furiganaHelper: true,
    statTextStyle: getDefaultTextStyle(),
    typeTextStyle: getDefaultTextStyle(),
    effectTextStyle: getDefaultTextStyle(),
    pendulumTextStyle: getDefaultTextStyle(),
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
        label: 'Effect',
        labelKey: 'input.opacity.effect.label',
        tooltipKey: null,
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

export * from './canvas';
export * from './compatible-card';
export * from './coordinate-data';
export * from './dictionary';
export * from './foil-finish';
export * from './font-data-effect';
export * from './font-data-name';
export * from './font-data-other';
export * from './format';
export * from './frame';
export * from './icon';
export * from './link';
export * from './name-preset';
export * from './regex';