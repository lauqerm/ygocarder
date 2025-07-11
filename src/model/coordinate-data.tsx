export type CoordinateData = {
    edgeAlignment?: 'left' | 'right',
    trueWidth: number,
    trueBaseline: number,
    trueEdge: number,
    trueHeightCap?: number,
};

export const EffectCoordinateData: Record<string, CoordinateData[]> = {
    'tcg': [
        { trueWidth: 684, trueBaseline: 890.23, trueEdge: 64.8, trueHeightCap: 211 },
    ],
    'tcg-stat': [
        { trueWidth: 684, trueBaseline: 890.23, trueEdge: 64.8, trueHeightCap: 182 },
    ],
    'tcg-type-stat': [
        { trueWidth: 684, trueBaseline: 920.8, trueEdge: 64.5, trueHeightCap: 152 },
    ],
    'tcg-type': [
        { trueWidth: 684, trueBaseline: 921.8, trueEdge: 64.5, trueHeightCap: 182 },
    ],
    'ocg': [
        { trueWidth: 684, trueBaseline: 895.23, trueEdge: 64.8, trueHeightCap: 211 },
    ],
    'ocg-stat': [
        { trueWidth: 684, trueBaseline: 891.23, trueEdge: 64.8, trueHeightCap: 182 },
    ],
    'ocg-type-stat': [
        { trueWidth: 684, trueBaseline: 918.5, trueEdge: 64.5, trueHeightCap: 152 },
    ],
    'ocg-type': [
        { trueWidth: 684, trueBaseline: 918.5, trueEdge: 64.5, trueHeightCap: 182 },
    ],
    'tcg-pendulumLarge': [
        { trueWidth: 684, trueBaseline: 920.73, trueEdge: 64.8, trueHeightCap: 173 },
    ],
    'tcg-pendulumLarge-stat': [
        { trueWidth: 684, trueBaseline: 920.73, trueEdge: 64.8, trueHeightCap: 144 },
    ],
    'tcg-pendulumLarge-type-stat': [
        { trueWidth: 684, trueBaseline: 953.5, trueEdge: 64.5, trueHeightCap: 118 },
    ],
    'tcg-pendulumLarge-type': [
        { trueWidth: 684, trueBaseline: 954.5, trueEdge: 64.5, trueHeightCap: 144 },
    ],
    'ocg-pendulumLarge': [
        { trueWidth: 684, trueBaseline: 923.23, trueEdge: 64.8, trueHeightCap: 173 },
    ],
    'ocg-pendulumLarge-stat': [
        { trueWidth: 684, trueBaseline: 921.23, trueEdge: 64.8, trueHeightCap: 144 },
    ],
    'ocg-pendulumLarge-type-stat': [
        { trueWidth: 684, trueBaseline: 951.5, trueEdge: 64.5, trueHeightCap: 118 },
    ],
    'ocg-pendulumLarge-type': [
        { trueWidth: 684, trueBaseline: 948.5, trueEdge: 64.5, trueHeightCap: 144 },
    ],
};

export const HALF_SCALE_WIDTH_OFFSET = 64.44;
export const PendulumEffectCoordinateMap: Record<'normal' | 'scaleless', Record<string, CoordinateData[]>> = {
    normal: {
        small: [
            { trueWidth: 555.47, trueBaseline: 789.65, trueEdge: 128.94, trueHeightCap: 80 },
        ],
        medium: [
            { trueWidth: 555.47, trueBaseline: 746.29, trueEdge: 128.94, trueHeightCap: 122.6 },
        ],
        large: [
            { trueWidth: 555.47, trueBaseline: 746.29, trueEdge: 128.94, trueHeightCap: 155.8 },
        ],
    },
    scaleless: {
        small: [
            { trueWidth: 684.35, trueBaseline: 789.65, trueEdge: 64.5, trueHeightCap: 79.8 },
        ],
        medium: [
            { trueWidth: 684.35, trueBaseline: 746.29, trueEdge: 64.5, trueHeightCap: 126.1 },
        ],
        large: [
            { trueWidth: 684.35, trueBaseline: 746.29, trueEdge: 64.5, trueHeightCap: 155.5 },
        ],
    },
};

export type TypeAbilityCoordinateType = 'smaller' | 'normal' | 'large' | 'highPendulumNormal' | 'highPendulumSmaller';
export const TypeAbilityCoordinateMap: Record<string, Record<TypeAbilityCoordinateType, CoordinateData>> = {
    tcg: {
        smaller: {
            trueBaseline: 919,
            trueEdge: 62.50,
            trueWidth: 684.5,
        },
        normal: {
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
        highPendulumNormal: {
            trueBaseline: 950.5,
            trueEdge: 62.50,
            trueWidth: 684.5,
        },
        highPendulumSmaller: {
            trueBaseline: 949.5,
            trueEdge: 62.50,
            trueWidth: 684.5,
        },
    },
    ocg: {
        smaller: {
            trueBaseline: 917,
            trueEdge: 63.70,
            trueWidth: 684.5,
        },
        normal: {
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
        highPendulumNormal: {
            trueBaseline: 949,
            trueEdge: 62.50,
            trueWidth: 684.5,
        },
        highPendulumSmaller: {
            trueBaseline: 949,
            trueEdge: 62.50,
            trueWidth: 684.5,
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