type FinishInstruction = { opacity?: number, blendMode?: GlobalCompositeOperation };
const type3CommonInstruction: FinishInstruction[] = [{ blendMode: 'overlay', opacity: 1 }];
const type8CommonInstruction: FinishInstruction[] = [
    { blendMode: 'overlay', opacity: 0.65 },
    { blendMode: 'multiply', opacity: 0.55 },
];

/** @summary Web engine has less blend mode than photoshop (or any desktop image manipulators for that matter), the behavior of similar blend mode is also different, so we currently we cannot have a 1:1 conversion between photoshop layer into canvas. */

export const ART_FINISH_TYPE = 'art';
export type FinishInformation = {
    value: string,
    label: React.ReactNode,
    labelKey?: string,
    tooltipKey?: string,
    partInstructionMap: Record<string, FinishInstruction[]>,
    pendulumSubstituteMap: Record<string, string>,
};
export const FinishMap: Record<string, FinishInformation> = {
    type1: {
        value: 'type1',
        label: '1',
        partInstructionMap: {},
        pendulumSubstituteMap: {},
    },
    type2: {
        value: 'type2',
        label: '2',
        partInstructionMap: {},
        pendulumSubstituteMap: {},
    },
    type3: {
        value: 'type3',
        label: '3',
        partInstructionMap: {
            'card-border': type3CommonInstruction,
            'art-overlay': type3CommonInstruction,
            'art-border': type3CommonInstruction,
            'art-border-pendulum': type3CommonInstruction,
            'border-pendulum': type3CommonInstruction,
            'attribute': type3CommonInstruction,
            'frame': type3CommonInstruction,
        },
        pendulumSubstituteMap: {},
    },
    type4: {
        value: 'type4',
        label: '4',
        partInstructionMap: {},
        pendulumSubstituteMap: {},
    },
    type5: {
        value: 'type5',
        label: '5',
        partInstructionMap: {},
        pendulumSubstituteMap: {},
    },
    type6: {
        value: 'type6',
        label: '6',
        partInstructionMap: {},
        pendulumSubstituteMap: {},
    },
    type7: {
        value: 'type7',
        label: '7',
        partInstructionMap: {
            'total-overlay': [{ blendMode: 'screen', opacity: 0.175 }, { blendMode: 'color-dodge', opacity: 0.125 }],
        },
        pendulumSubstituteMap: {},
    },
    type8: {
        value: 'type8',
        label: '8',
        partInstructionMap: {
            'card-border': type8CommonInstruction,
            'art-border': type8CommonInstruction,
            'art-border-pendulum': type8CommonInstruction,
            'border-pendulum': type8CommonInstruction,
            'frame': type8CommonInstruction,
            'frame-background': type8CommonInstruction,
            'name': type8CommonInstruction,
            'star': type8CommonInstruction,
        },
        pendulumSubstituteMap: {},
    },
    type9: {
        value: 'type9',
        label: '9',
        partInstructionMap: {
            'total-overlay': [{ blendMode: 'screen', opacity: 0.45 }],
        },
        pendulumSubstituteMap: {},
    },
    type10: {
        value: 'type10',
        label: '10',
        partInstructionMap: {
            'total-overlay': [],
        },
        pendulumSubstituteMap: {},
    },
    type11: {
        value: 'type11',
        label: '11',
        partInstructionMap: {
            'total-overlay': [],
        },
        pendulumSubstituteMap: {},
    },
    type12: {
        value: 'type12',
        label: '12',
        partInstructionMap: {
            'total-overlay': [{ blendMode: 'source-over', opacity: 0.45 }],
        },
        pendulumSubstituteMap: {},
    },
    type13: {
        value: 'type13',
        label: '13',
        partInstructionMap: {
            'total-overlay': [],
        },
        pendulumSubstituteMap: {},
    },
};

export const ArtFinishMap: Record<string, FinishInformation> = {
    type1: {
        value: 'type1',
        label: '1',
        partInstructionMap: {
            art: [{}],
        },
        pendulumSubstituteMap: {
            small: '-pendulum-small',
            medium: '-pendulum-medium',
            large: '-pendulum-medium',
        },
    },
    type2: {
        value: 'type2',
        label: '2',
        partInstructionMap: {
            art: [
                { opacity: 0.08, blendMode: 'darken' },
                { opacity: 0.28, blendMode: 'color-dodge' },
                { opacity: 0.48, blendMode: 'multiply' },
            ],
        },
        pendulumSubstituteMap: {
            small: '',
            medium: '-pendulum-medium',
            large: '-pendulum-medium',
        },
    },
    type3: {
        value: 'type3',
        label: '3',
        partInstructionMap: {
            art: [{ opacity: 0.66, blendMode: 'color-dodge' }, { opacity: 0.64, blendMode: 'multiply' }],
        },
        pendulumSubstituteMap: {
            small: '',
            medium: '-pendulum-medium',
            large: '-pendulum-medium',
        },
    },
    type4: {
        value: 'type4',
        label: '4',
        partInstructionMap: {
            art: [{ opacity: 0.31, blendMode: 'color-dodge' }, { opacity: 0.6, blendMode: 'multiply' }]
        },
        pendulumSubstituteMap: {
            small: '',
            medium: '-pendulum-medium',
            large: '-pendulum-medium',
        },
    },
    type5: {
        value: 'type5',
        label: '5',
        partInstructionMap: {
            art: [{ opacity: 0.19, blendMode: 'color-dodge' }, { opacity: 0.6, blendMode: 'multiply' }]
        },
        pendulumSubstituteMap: {
            small: '',
            medium: '-pendulum-medium',
            large: '-pendulum-medium',
        },
    },
    type6: {
        value: 'type6',
        label: '6',
        partInstructionMap: {
            art: [{ opacity: 0.25, blendMode: 'color-dodge' }, { opacity: 0.6, blendMode: 'multiply' }]
        },
        pendulumSubstituteMap: {
            small: '',
            medium: '-pendulum-medium',
            large: '-pendulum-medium',
        },
    },
    type7: {
        value: 'type7',
        label: '7',
        partInstructionMap: {
            art: [{}],
        },
        pendulumSubstituteMap: {
            small: '-pendulum-small',
            medium: '-pendulum-medium',
            large: '-pendulum-medium',
        },
    },
    type8: {
        value: 'type8',
        label: '8',
        partInstructionMap: {
            art: [{ opacity: 0.66, blendMode: 'color-dodge' }, { opacity: 0.64, blendMode: 'multiply' }],
        },
        pendulumSubstituteMap: {
            small: '',
            medium: '-pendulum-medium',
            large: '-pendulum-medium',
        },
    },
    type9: {
        value: 'type9',
        label: '9',
        partInstructionMap: {
            art: [
                { blendMode: 'darken', opacity: 1 },
                { blendMode: 'multiply', opacity: 1 },
                { blendMode: 'overlay', opacity: 1 },
            ],
        },
        pendulumSubstituteMap: {
            small: '',
            medium: '-pendulum-medium',
            large: '-pendulum-medium',
        },
    },
};

export const OtherFinishTypeMap = {
    art: {
        key: 'art' as const,
        labelKey: 'input.art-finish.label',
    },
    background: {
        key: 'background' as const,
        labelKey: 'input.background.label',
    },
    attribute: {
        key: 'attribute' as const,
        labelKey: 'input.attribute.label',
    },
    icon: {
        key: 'icon' as const,
        labelKey: 'input.icon-type.icon.label',
    },
    sticker: {
        key: 'sticker' as const,
        labelKey: 'input.sticker.label',
    },
};
export type OtherFinish = [attribute: string, icon: string, sticker: string, background: string];

export type FoilDictionary = {
    normal: string,
    gold: string,
    platinum: string,
};
export const FoilMap = {
    normal: {
        name: 'normal' as const,
        color: '#747b95',
        isOption: false,
    },
    gold: {
        name: 'gold' as const,
        color: '#cfa65f',
        isOption: true,
    },
    platinum: {
        name: 'platinum' as const,
        color: '#b1b1b1',
        isOption: true,
    },
};
export const getFoilList = (dictionary?: FoilDictionary) => [
    {
        label: dictionary?.normal,
        ...FoilMap.normal,
    },
    {
        label: dictionary?.gold,
        ...FoilMap.gold,
    },
    {
        label: dictionary?.platinum,
        ...FoilMap.platinum,
    },
];
export type Foil = ReturnType<typeof getFoilList>[0]['name'];

export type FrameDyeList = [
    topLeft: string,
    topRight: string,
    bottomLeft: string,
    bottomRight: string,
    effect: string,
    pendulumEffect: string,
    foil: string,
];
export const getDefaultDyeList = () => ['', '', '', '', '', '', ''] as FrameDyeList;
export const DYE_LIST_LENGTH = getDefaultDyeList().length;

export const DyeIndexMap = {
    topLeftFrame: 0,
    topRightFrame: 1,
    bottomLeftFrame: 2,
    bottomRightFrame: 3,
    effectBackground: 4,
    pendulumEffectBackground: 5,
    foil: 6,
};