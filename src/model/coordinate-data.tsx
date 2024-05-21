import { UP_RATIO } from './canvas';

export type CoordinateDate = {
    trueWidth: number,
    trueBaseline: number,
    trueEdge: number,
};

export const monsterSizeList: CoordinateDate[] = [
    { trueWidth: 684, trueBaseline: 919.8, trueEdge: 64.5 },
    { trueWidth: 684, trueBaseline: 919.8, trueEdge: 64.5 },
    { trueWidth: 684, trueBaseline: 919.8, trueEdge: 64.5 },
    { trueWidth: 684, trueBaseline: 919.8, trueEdge: 64.5 },
    { trueWidth: 684, trueBaseline: 919.8, trueEdge: 64.5 },
    { trueWidth: 684, trueBaseline: 919.8, trueEdge: 64.5 },
    { trueWidth: 684, trueBaseline: 919.8, trueEdge: 64.5 },
];

export const stSizeList: CoordinateDate[] = [
    { trueWidth: 684, trueBaseline: 890.23, trueEdge: 64.8 },
    { trueWidth: 684, trueBaseline: 890.23, trueEdge: 64.8 },
];

export const pendulumSizeList: CoordinateDate[] = [
    { trueWidth: 375 * UP_RATIO, trueBaseline: 504.5 * UP_RATIO, trueEdge: 87.05 * UP_RATIO },
    { trueWidth: 375 * UP_RATIO, trueBaseline: 504.5 * UP_RATIO, trueEdge: 87.05 * UP_RATIO },
];

export const specialSizeList: CoordinateDate[] = [
    { trueWidth: 461 * UP_RATIO, trueBaseline: 620 * UP_RATIO, trueEdge: 45 * UP_RATIO },
    { trueWidth: 461 * UP_RATIO, trueBaseline: 624 * UP_RATIO, trueEdge: 45 * UP_RATIO },
];

export const TypeAbilityCoordinateMap: Record<string, Record<string, CoordinateDate>> = {
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
            trueEdge: 773.00,
            trueWidth: 648.5,
        },
    },
};

export const CreatorCoordinateMap: Record<string, CoordinateDate> = {
    ocg: {
        trueBaseline: 1146.5,
        trueEdge: 736,
        trueWidth: 430,
    },
    tcg: {
        trueBaseline: 1149.5,
        trueEdge: 733,
        trueWidth: 380,
    },
};