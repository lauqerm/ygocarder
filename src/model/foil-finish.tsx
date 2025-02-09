type FinishInstruction = { opacity?: number, blendMode?: GlobalCompositeOperation };
const type3CommonInstruction: FinishInstruction[] = [{ blendMode: 'overlay', opacity: 1 }];
const type8CommonInstruction: FinishInstruction[] = [
    { blendMode: 'overlay', opacity: 0.65 },
    { blendMode: 'multiply', opacity: 0.55 },
];

/** @summary Web engine has less blend mode than photoshop (or any desktop image manipulators for that matter), the behavior of similar blend mode is also different, so we currently we cannot have a 1:1 conversion between photoshop layer into canvas. */

export type FinishInformation = {
    value: string,
    label: React.ReactNode,
    partInstructionMap: Record<string, FinishInstruction[]>,
};
export const FinishMap: Record<string, FinishInformation> = {
    type1: {
        value: 'type1',
        label: '1',
        partInstructionMap: {},
    },
    type2: {
        value: 'type2',
        label: '2',
        partInstructionMap: {},
    },
    type3: {
        value: 'type3',
        label: '3',
        partInstructionMap: {
            'art-overlay': type3CommonInstruction,
            'art-border': type3CommonInstruction,
            'art-border-pendulum': type3CommonInstruction,
            'border-pendulum': type3CommonInstruction,
            'attribute': type3CommonInstruction,
            'frame': type3CommonInstruction,
        },
    },
    type4: {
        value: 'type4',
        label: '4',
        partInstructionMap: {},
    },
    type5: {
        value: 'type5',
        label: '5',
        partInstructionMap: {},
    },
    type6: {
        value: 'type6',
        label: '6',
        partInstructionMap: {},
    },
    type7: {
        value: 'type7',
        label: '7',
        partInstructionMap: {
            'total-overlay': [{ blendMode: 'screen', opacity: 0.175 }, { blendMode: 'color-dodge', opacity: 0.125 }],
        },
    },
    type8: {
        value: 'type8',
        label: '8',
        partInstructionMap: {
            'art-border': type8CommonInstruction,
            'art-border-pendulum': type8CommonInstruction,
            'border-pendulum': type8CommonInstruction,
            'frame': type8CommonInstruction,
            'frame-background': type8CommonInstruction,
            'name': type8CommonInstruction,
            'star': type8CommonInstruction,
        },
    },
    type9: {
        value: 'type9',
        label: '9',
        partInstructionMap: {
            'total-overlay': [{ blendMode: 'screen', opacity: 0.45 }],
        },
    },
};

export const ArtFinishMap: Record<string, FinishInformation> = {
    type1: {
        value: 'type1',
        label: '1',
        partInstructionMap: {
            art: [{}],
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
    },
    type3: {
        value: 'type3',
        label: '3',
        partInstructionMap: {
            art: [{ opacity: 0.66, blendMode: 'color-dodge' }, { opacity: 0.64, blendMode: 'multiply' }],
        },
    },
    type4: {
        value: 'type4',
        label: '4',
        partInstructionMap: {
            art: [{ opacity: 0.31, blendMode: 'color-dodge' }, { opacity: 0.6, blendMode: 'multiply' }]
        },
    },
    type5: {
        value: 'type5',
        label: '5',
        partInstructionMap: {
            art: [{ opacity: 0.19, blendMode: 'color-dodge' }, { opacity: 0.6, blendMode: 'multiply' }]
        },
    },
    type6: {
        value: 'type6',
        label: '6',
        partInstructionMap: {
            art: [{ opacity: 0.25, blendMode: 'color-dodge' }, { opacity: 0.6, blendMode: 'multiply' }]
        },
    },
    type7: {
        value: 'type7',
        label: '7',
        partInstructionMap: {
            art: [{}],
        },
    },
};

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