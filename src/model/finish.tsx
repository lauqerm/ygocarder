export type FinishInformation = {
    value: string,
    label: React.ReactNode,
    blendMode: CanvasRenderingContext2D['globalCompositeOperation'],
};
export const FinishMap: Record<string, FinishInformation> = {
    type1: {
        value: 'type1',
        label: '1',
        blendMode: 'source-over',
    },
    type2: {
        value: 'type2',
        label: '2',
        blendMode: 'source-over',
    },
    type3: {
        value: 'type3',
        label: '3',
        blendMode: 'overlay',
    },
    type4: {
        value: 'type4',
        label: '4',
        blendMode: 'source-over',
    },
    type5: {
        value: 'type5',
        label: '5',
        blendMode: 'source-over',
    },
    type6: {
        value: 'type6',
        label: '6',
        blendMode: 'source-over',
    },
};

export const ArtFinishMap = {
    type1: {
        value: 'type1',
        label: '1',
    },
    type2: {
        value: 'type2',
        label: '2',
    },
    type3: {
        value: 'type3',
        label: '3',
    },
    type4: {
        value: 'type4',
        label: '4',
    },
    type5: {
        value: 'type5',
        label: '5',
    },
    type6: {
        value: 'type6',
        label: '6',
    },
};