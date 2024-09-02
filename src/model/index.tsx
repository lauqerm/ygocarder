import { BackgroundType, CardOpacity, getDefaultCardOpacity } from './canvas';
import { Foil } from './foil-finish';
import { CondenseType } from './font-data-effect';
import { NO_ICON } from './icon';
import { getDefaultNameStyle, NameStyle, NameStyleType } from './name-preset';

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
    setId: '',
    atk: '0',
    def: '0',
    password: '',
    sticker: 'no-sticker',
    isFirstEdition: false,
    isSpeedCard: false,
    isDuelTerminalCard: false,
    creator: '',
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

export * from './icon';
export * from './canvas';
export * from './coordinate-data';
export * from './dictionary';
export * from './foil-finish';
export * from './font-data-effect';
export * from './font-data-name';
export * from './font-data-other';
export * from './format';
export * from './frame';
export * from './link';
export * from './name-preset';
export * from './regex';