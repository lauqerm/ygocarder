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
};

export const OtherFinishTypeMap = {
    art: {
        key: 'art' as const,
        labelKey: 'input.art-finish.label',
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
export type OtherFinish = [attribute: string, icon: string, sticker: string];

export type FoilDictionary = {
    normal: string,
    gold: string,
    platinum: string,
};
export const FoilNameMap = {
    normal: 'normal' as const,
    gold: 'gold' as const,
    platinum: 'platinum' as const,
};
export const getFoilList = (dictionary?: FoilDictionary) => [
    {
        name: FoilNameMap['normal' as const],
        label: dictionary?.normal,
        color: '#747b95',
        isOption: false,
    },
    {
        name: FoilNameMap['gold' as const],
        label: dictionary?.gold,
        color: '#cfa65f',
        isOption: true,
    },
    {
        name: FoilNameMap['platinum' as const],
        label: dictionary?.platinum,
        color: '#b1b1b1',
        isOption: true,
    },
];
export type Foil = ReturnType<typeof getFoilList>[0]['name'];