export type CoordinateData = {
    edgeAlignment?: 'left' | 'right',
    trueWidth: number,
    trueBaseline: number,
    trueEdge: number,
};

export const EffectCoordinateData: Record<string, CoordinateData[]> = {
    'tcg': [
        { trueWidth: 684, trueBaseline: 890.23, trueEdge: 64.8 },
    ],
    'tcg-stat': [
        { trueWidth: 684, trueBaseline: 890.23, trueEdge: 64.8 },
    ],
    'tcg-type-stat': [
        { trueWidth: 684, trueBaseline: 920.8, trueEdge: 64.5 },
    ],
    'tcg-type': [
        { trueWidth: 684, trueBaseline: 921.8, trueEdge: 64.5 },
    ],
    'ocg': [
        { trueWidth: 684, trueBaseline: 895.23, trueEdge: 64.8 },
    ],
    'ocg-stat': [
        { trueWidth: 684, trueBaseline: 891.23, trueEdge: 64.8 },
    ],
    'ocg-type-stat': [
        { trueWidth: 684, trueBaseline: 918.5, trueEdge: 64.5 },
    ],
    'ocg-type': [
        { trueWidth: 684, trueBaseline: 918.5, trueEdge: 64.5 },
    ],
};

export const PendulumEffectCoordinate: CoordinateData[] = [
    { trueWidth: 555.47, trueBaseline: 746.29, trueEdge: 128.94 },
    { trueWidth: 555.47, trueBaseline: 746.29, trueEdge: 128.94 },
];

export const TypeAbilityCoordinateMap: Record<string, Record<string, CoordinateData>> = {
    tcg: {
        small: {
            trueBaseline: 919,
            trueEdge: 62.50,
            trueWidth: 684.5,
        },
        medium: {
            trueBaseline: 920,
            trueEdge: 62.50,
            trueWidth: 684.5,
        },
        large: {
            trueBaseline: 187.5,
            trueEdge: 732.00,
            edgeAlignment: 'right',
            trueWidth: 648.5,
        },
    },
    ocg: {
        small: {
            trueBaseline: 917,
            trueEdge: 63.70,
            trueWidth: 684.5,
        },
        medium: {
            trueBaseline: 917,
            trueEdge: 63.70,
            trueWidth: 684.5,
        },
        large: {
            trueBaseline: 190.5,
            trueEdge: 728.00,
            edgeAlignment: 'right',
            trueWidth: 642.5,
        },
    },
};

export const CreatorCoordinateMap: Record<string, CoordinateData> = {
    ocg: {
        trueBaseline: 1146.5,
        trueEdge: 736,
        trueWidth: 435,
    },
    tcg: {
        trueBaseline: 1149.5,
        trueEdge: 733,
        trueWidth: 380,
    },
};

export const PasswordCoordinateMap: Record<string, CoordinateData> = {
    ocg: {
        trueBaseline: 1148.931,
        trueEdge: 37.031,
        trueWidth: 258,
    },
    tcg: {
        trueBaseline: 1149.431,
        trueEdge: 37.031,
        trueWidth: 311,
    },
};