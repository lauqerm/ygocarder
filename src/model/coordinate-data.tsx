export type CoordinateData = {
    trueWidth: number,
    trueBaseline: number,
    trueEdge: number,
};

export const monsterCoordinateData: Record<string, CoordinateData[]> = {
    tcg: [
        { trueWidth: 684, trueBaseline: 919.8, trueEdge: 64.5 },
        { trueWidth: 684, trueBaseline: 919.8, trueEdge: 64.5 },
        { trueWidth: 684, trueBaseline: 919.8, trueEdge: 64.5 },
        { trueWidth: 684, trueBaseline: 919.8, trueEdge: 64.5 },
        { trueWidth: 684, trueBaseline: 919.8, trueEdge: 64.5 },
        { trueWidth: 684, trueBaseline: 919.8, trueEdge: 64.5 },
        { trueWidth: 684, trueBaseline: 919.8, trueEdge: 64.5 },
    ],
    ocg: [
        { trueWidth: 684, trueBaseline: 918.5, trueEdge: 64.5 },
    ],
    'tcg-pendulum': [
        { trueWidth: 684, trueBaseline: 919.8, trueEdge: 64.5 },
        { trueWidth: 684, trueBaseline: 919.8, trueEdge: 64.5 },
        { trueWidth: 684, trueBaseline: 919.8, trueEdge: 64.5 },
        { trueWidth: 684, trueBaseline: 919.8, trueEdge: 64.5 },
        { trueWidth: 684, trueBaseline: 919.8, trueEdge: 64.5 },
        { trueWidth: 684, trueBaseline: 919.8, trueEdge: 64.5 },
        { trueWidth: 684, trueBaseline: 919.8, trueEdge: 64.5 },
    ],
    'ocg-pendulum': [
        { trueWidth: 684, trueBaseline: 918.5, trueEdge: 64.5 },
    ],
};

export const stCoordinateData: Record<string, CoordinateData[]> = {
    tcg: [
        { trueWidth: 684, trueBaseline: 890.23, trueEdge: 64.8 },
        { trueWidth: 684, trueBaseline: 890.23, trueEdge: 64.8 },
    ],
    ocg: [
        { trueWidth: 684, trueBaseline: 895.23, trueEdge: 64.8 },
    ],
    'tcg-pendulum': [
        { trueWidth: 684, trueBaseline: 890.23, trueEdge: 64.8 },
        { trueWidth: 684, trueBaseline: 890.23, trueEdge: 64.8 },
    ],
    'ocg-pendulum': [
        { trueWidth: 684, trueBaseline: 891.23, trueEdge: 64.8 },
    ],
};

export const pendulumSizeList: CoordinateData[] = [
    { trueWidth: 555.47, trueBaseline: 746.29, trueEdge: 128.94 },
    { trueWidth: 555.47, trueBaseline: 746.29, trueEdge: 128.94 },
];

export const specialCoordinateData: Record<string, Record<string, CoordinateData[]>> = {
    tcg: {
        normal: [
            { trueWidth: 684, trueBaseline: 921.8, trueEdge: 64.5 },
        ],
        pendulum: [
            { trueWidth: 684, trueBaseline: 919.8, trueEdge: 64.5 },
            { trueWidth: 684, trueBaseline: 919.8, trueEdge: 64.5 },
        ],
    },
    ocg: {
        normal: [
            { trueWidth: 684, trueBaseline: 918.5, trueEdge: 64.5 },
        ],
        pendulum: [
            { trueWidth: 684, trueBaseline: 918.5, trueEdge: 64.5 },
        ],
    }
};

export const TypeAbilityCoordinateMap: Record<string, Record<string, CoordinateData>> = {
    tcg: {
        small: {
            trueBaseline: 919,
            trueEdge: 62.50,
            trueWidth: 648.5,
        },
        medium: {
            trueBaseline: 920,
            trueEdge: 62.50,
            trueWidth: 648.5,
        },
        large: {
            trueBaseline: 187.5,
            trueEdge: 732.00,
            trueWidth: 648.5,
        },
    },
    ocg: {
        small: {
            trueBaseline: 917,
            trueEdge: 45.70,
            trueWidth: 648.5,
        },
        medium: {
            trueBaseline: 917,
            trueEdge: 45.70,
            trueWidth: 648.5,
        },
        large: {
            trueBaseline: 190.5,
            trueEdge: 763.82,
            trueWidth: 648.5,
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