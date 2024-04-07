import { UP_RATIO } from './canvas';
import { CondenseType } from './text';

export type FontSize = {
    fontSize: number,
    lineHeight: number,
    lineCount: number,
};
export type BoxSize = {
	width: number,
	top: number,
	left: number,
};

export const monsterFontList: FontSize[] = [
    { fontSize: 17 * UP_RATIO, lineHeight: 17 * UP_RATIO, lineCount: 6 },
    { fontSize: 14 * UP_RATIO, lineHeight: 14 * UP_RATIO, lineCount: 7 },
    { fontSize: 12 * UP_RATIO, lineHeight: 12 * UP_RATIO, lineCount: 8 },
    { fontSize: 11 * UP_RATIO, lineHeight: 11 * UP_RATIO, lineCount: 9 },
    { fontSize: 10 * UP_RATIO, lineHeight: 10 * UP_RATIO, lineCount: 10 },
    { fontSize: 9 * UP_RATIO, lineHeight: 9 * UP_RATIO, lineCount: 11 },
    { fontSize: 8 * UP_RATIO, lineHeight: 8 * UP_RATIO, lineCount: 12 },
];
export const monsterSizeList: BoxSize[] = [
    { width: 463 * UP_RATIO, top: 620 * UP_RATIO, left: 43.89 * UP_RATIO },
    { width: 463 * UP_RATIO, top: 624 * UP_RATIO, left: 43.89 * UP_RATIO },
    { width: 463 * UP_RATIO, top: 624 * UP_RATIO, left: 43.89 * UP_RATIO },
    { width: 463 * UP_RATIO, top: 624 * UP_RATIO, left: 43.89 * UP_RATIO },
    { width: 463 * UP_RATIO, top: 624 * UP_RATIO, left: 43.89 * UP_RATIO },
    { width: 463 * UP_RATIO, top: 624 * UP_RATIO, left: 43.89 * UP_RATIO },
    { width: 463 * UP_RATIO, top: 624 * UP_RATIO, left: 43.89 * UP_RATIO },
];
export const monsterVanillaFontList: FontSize[] = [
    { fontSize: 16.74 * UP_RATIO, lineHeight: 17.01 * UP_RATIO, lineCount: 6 },
    { fontSize: 16.74 * UP_RATIO, lineHeight: 17.01 * UP_RATIO, lineCount: 7 },
    { fontSize: 16.74 * UP_RATIO, lineHeight: 17.01 * UP_RATIO, lineCount: 8 },
];

export const pendulumFontList: FontSize[] = [
    { fontSize: 16.41 * UP_RATIO, lineHeight: 16.44 * UP_RATIO, lineCount: 5 },
    { fontSize: 16.41 * UP_RATIO, lineHeight: 16.44 * UP_RATIO, lineCount: 5 },
];
export const pendulumSizeList: BoxSize[] = [
    { width: 375 * UP_RATIO, top: 504.5 * UP_RATIO, left: 87.05 * UP_RATIO },
    { width: 375 * UP_RATIO, top: 504.5 * UP_RATIO, left: 87.05 * UP_RATIO },
];

export const stFontList: FontSize[] = [
    { fontSize: 16.41 * UP_RATIO, lineHeight: 16.74 * UP_RATIO, lineCount: 8 },
    { fontSize: 13.46 * UP_RATIO, lineHeight: 14.28 * UP_RATIO, lineCount: 10 },
];
export const stSizeList: BoxSize[] = [
    { width: 461 * UP_RATIO, top: 601 * UP_RATIO, left: 45 * UP_RATIO },
    { width: 461 * UP_RATIO, top: 601 * UP_RATIO, left: 45 * UP_RATIO },
];

/** Speed skill không có dòng ATK / DEF, nhưng lại có dòng type / ability */
export const specialFontList: FontSize[] = [
    { fontSize: 16.41 * UP_RATIO, lineHeight: 16.74 * UP_RATIO, lineCount: 7 },
    { fontSize: 13.46 * UP_RATIO, lineHeight: 14.28 * UP_RATIO, lineCount: 8 },
];
export const specialSizeList: BoxSize[] = [
    { width: 461 * UP_RATIO, top: 620 * UP_RATIO, left: 45 * UP_RATIO },
    { width: 461 * UP_RATIO, top: 624 * UP_RATIO, left: 45 * UP_RATIO },
];

export const CondenseTolerantMap: Record<CondenseType, Record<string, number>> = {
    strict: {
        '1': 645,
        '2': 665,
        '3': 685,
    },
    loose: {
        '1': 700,
        '2': 710,
        '3': 720,
    },
    veryLoose: {
        '1': 740,
        '2': 770,
        '3': 800,
    },
    relaxed: {
        '1': 800,
        '2': 850,
        '3': 900,
    },
};
export const CondenseTolerantLabelMap: Record<CondenseType, { label: string, order: number }> = {
    strict: {
        label: 'Strict',
        order: 1,
    },
    loose: {
        label: 'Loose',
        order: 2,
    },
    veryLoose: {
        label: 'Very Loose',
        order: 3,
    },
    relaxed: {
        label: 'Relax',
        order: 4,
    },
};