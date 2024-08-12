type FinishInstruction = { opacity?: number, blendMode?: GlobalCompositeOperation };
const type8CommonInstruction: FinishInstruction[] = [{ blendMode: 'overlay', opacity: 0.65 }, { blendMode: 'multiply', opacity: 0.55 }];

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
            art: [{ blendMode: 'overlay', opacity: 1 }],
            attribute: [{ blendMode: 'overlay', opacity: 1 }],
            frame: [{ blendMode: 'overlay', opacity: 1 }],
            'frame-art': [{ blendMode: 'overlay', opacity: 1 }],
            'frame-pendulum': [{ blendMode: 'overlay', opacity: 1 }],
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
            frame: type8CommonInstruction,
            'frame-background': type8CommonInstruction,
            'frame-art': type8CommonInstruction,
            'art': type8CommonInstruction,
            'pendulum-frame-art': type8CommonInstruction,
            'name': type8CommonInstruction,
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

export type ArtFinishInformation = {
    value: string,
    label: React.ReactNode,
    instructionList: FinishInstruction[],
};
export const ArtFinishMap: Record<string, ArtFinishInformation> = {
    type1: {
        value: 'type1',
        label: '1',
        instructionList: [{}],
    },
    type2: {
        value: 'type2',
        label: '2',
        instructionList: [
            { opacity: 0.08, blendMode: 'darken' },
            { opacity: 0.28, blendMode: 'color-dodge' },
            { opacity: 0.48, blendMode: 'multiply' },
        ],
    },
    type3: {
        value: 'type3',
        label: '3',
        instructionList: [{ opacity: 0.66, blendMode: 'color-dodge' }, { opacity: 0.64, blendMode: 'multiply' }],
    },
    type4: {
        value: 'type4',
        label: '4',
        instructionList: [{ opacity: 0.31, blendMode: 'color-dodge' }, { opacity: 0.6, blendMode: 'multiply' }],
    },
    type5: {
        value: 'type5',
        label: '5',
        instructionList: [{ opacity: 0.19, blendMode: 'color-dodge' }, { opacity: 0.6, blendMode: 'multiply' }],
    },
    type6: {
        value: 'type6',
        label: '6',
        instructionList: [{ opacity: 0.25, blendMode: 'color-dodge' }, { opacity: 0.6, blendMode: 'multiply' }],
    },
    type7: {
        value: 'type7',
        label: '7',
        instructionList: [{}],
    },
};