import { BackgroundType, CanvasConst, CardOpacity, compileCoordinate, getDefaultCardOpacity, MoveableRegionMap } from './canvas';
import { Foil, getDefaultDyeList, OtherFinish } from './foil-finish-dye';
import { CondenseType } from './condense';
import { AttributeType, NO_ATTRIBUTE, NO_ICON, NO_STICKER } from './icon';
import { getDefaultNameStyle, getDefaultTextStyle, NameStyle, NameStyleType } from './name-preset';
import { v4 as uuid } from 'uuid';
import { DEFAULT_PENDULUM_SIZE } from './pendulum';
import { getDefaultCardFlag } from './flag';
import { DEFAULT_TEXT_COLOR } from './font-data-effect';
import { getDefaultImageStyle, ImageSourceType } from './image';

export const getDefaultCrop = () => ({
    x: 0,
    y: 4,
    width: 100,
    height: 89.5,
    unit: '%' as '%' | 'px',
    aspect: 1,
});
export const getDefaultOverlayCrop = () => ({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    unit: '%' as '%' | 'px',
    aspect: 0.685,
});
export const getDefaultIconCrop = () => ({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    unit: '%' as '%' | 'px',
    aspect: 1,
});
export const getDefaultCoordinateMap = (): Record<keyof typeof MoveableRegionMap, string | undefined> => ({
    effectBox: compileCoordinate(CanvasConst.effectBox),
    starBox: compileCoordinate(CanvasConst.starBox),
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
    legacyTemplate: false,
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
    attributeImage: '',
    attributeImageData: '',
    attributeImageFit: true,
    attributeImageStyle: getDefaultImageStyle(),
    attributeImageSource: 'online' as AttributeType,
    attributeImageCrop: getDefaultIconCrop() as Partial<ReactCrop.Crop>,
    subFamily: NO_ICON,
    cardIcon: 'auto',
    star: 6 as number | string,
    starAlignment: 'auto',
    starList: [] as string[],
    art: 'https://i.imgur.com/h5kXZeC.png',
    artData: '',
    artFit: false,
    artStyle: getDefaultImageStyle(),
    artSource: 'online' as ImageSourceType,
    artCrop: getDefaultCrop() as Partial<ReactCrop.Crop>,
    hasBackground: false,
    background: '',
    backgroundData: '',
    backgroundFit: false,
    backgroundStyle: getDefaultImageStyle(),
    backgroundSource: 'online' as ImageSourceType,
    backgroundType: 'fit' as BackgroundType,
    backgroundCrop: getDefaultCrop() as Partial<ReactCrop.Crop>,
    overlay: '',
    overlayData: '',
    overlayFit: true,
    overlayType: 'border,source-in|frame,none',
    overlayStyle: getDefaultImageStyle(),
    overlaySource: 'online' as ImageSourceType,
    overlayCrop: getDefaultOverlayCrop() as Partial<ReactCrop.Crop>,
    iconImage: '',
    iconImageData: '',
    iconImageFit: true,
    iconImageStyle: getDefaultImageStyle(),
    iconImageSource: 'online' as ImageSourceType,
    iconImageCrop: getDefaultIconCrop() as Partial<ReactCrop.Crop>,
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
    firstEditionText: '1<st> Edition',
    isFirstEdition: true,
    cornerText: '',
    hasCornerText: false,
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
    coordinateMap: getDefaultCoordinateMap(),
    /** Extra information come from different card source such as YGOPro custom card maker */
    externalInfo: {} as Record<string, unknown>,
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
    legacyTemplate: false,
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
    attributeImage: '',
    attributeImageData: '',
    attributeImageFit: true,
    attributeImageStyle: getDefaultImageStyle(),
    attributeImageSource: 'auto' as AttributeType,
    attributeImageCrop: getDefaultIconCrop() as Partial<ReactCrop.Crop>,
    subFamily: NO_ICON,
    cardIcon: 'auto',
    star: 6,
    starList: [] as string[],
    starAlignment: 'auto',
    art: 'https://i.imgur.com/jjtCuG5.png',
    artData: '',
    artSource: 'online' as ImageSourceType,
    artFit: false,
    artStyle: getDefaultImageStyle(),
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
    backgroundStyle: getDefaultImageStyle(),
    backgroundSource: 'online' as ImageSourceType,
    backgroundType: 'fit',
    backgroundCrop: {
        x: 0,
        y: 4,
        width: 100,
        height: 89.5,
        unit: '%',
        aspect: 1,
    },
    overlay: '',
    overlayData: '',
    overlayFit: true,
    overlayType: 'border,source-in|frame,none',
    overlayStyle: getDefaultImageStyle(),
    overlaySource: 'online' as ImageSourceType,
    overlayCrop: {
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        unit: '%',
        aspect: 0.685,
    },
    iconImage: '',
    iconImageData: '',
    iconImageFit: true,
    iconImageStyle: getDefaultImageStyle(),
    iconImageSource: 'online' as ImageSourceType,
    iconImageCrop: getDefaultIconCrop() as Partial<ReactCrop.Crop>,
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
    firstEditionText: '1<st> Edition',
    isFirstEdition: false,
    cornerText: '',
    hasCornerText: false,
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
    coordinateMap: getDefaultCoordinateMap(),
    flag: getDefaultCardFlag(),
    externalInfo: {},
});

export const LayoutSettingList = [
    {
        subType: 'artBorder' as const,
        labelKey: 'input.opacity.art-border.label',
        tooltipKey: 'input.opacity.art-border.tooltip',
    },
    {
        subType: 'nameBorder' as const,
        labelKey: 'input.opacity.name-border.label',
        tooltipKey: 'input.opacity.name-border.tooltip',
    },
    {
        subType: 'effectBox' as const,
        labelKey: 'input.opacity.effect-box.label',
        tooltipKey: 'input.opacity.effect-box.tooltip',
    },
];
export const OpacityList = [
    {
        type: 'body' as const,
        label: 'Card',
        labelKey: 'input.opacity.body.label',
    },
    {
        type: 'name' as const,
        label: 'Name',
        labelKey: 'input.opacity.name.label',
    },
    {
        type: 'pendulum' as const,
        label: 'Pendulum',
        labelKey: 'input.opacity.pendulum.label',
    },
    {
        type: 'text' as const,
        label: 'Effect',
        labelKey: 'input.opacity.effect.label',
    },
];

export const DefaultColorList = [
    '#4D4D4D', '#999999', '#FFFFFF', '#FF7F7F', '#FFD27F', '#FFFF7F',
    '#7FFF7F', '#7FBF7F', '#7FFFFF', '#7F7FFF', '#BF7FBF', '#FF7FFF',

    DEFAULT_TEXT_COLOR, '#808080', '#cccccc', '#FF0000', '#FFA500', '#FFFF00',
    '#00FF00', '#008000', '#00FFFF', '#0000FF', '#800080', '#FF00FF',

    '#000000', '#666666', '#B3B3B3', '#7F0000', '#7F5200', '#7F7F00',
    '#007F00', '#004000', '#007F7F', '#00007F', '#400040', '#7F007F',
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
export const getSlindingTypeList = (language: Record<string, string>) => [
    {
        value: 'auto' as const,
        label: language['setting.option.sliding-type.auto.label'],
    },
    {
        value: 'manual' as const,
        label: language['setting.option.sliding-type.manual.label'],
    },
];

export type WritingDirection = 'ltr' | 'rtl';