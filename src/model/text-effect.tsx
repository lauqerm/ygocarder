import { UP_RATIO } from './canvas';
import { CondenseType } from './text';

export type FontSize = {
    fontSize: number,
    lineHeight: number,
    lineCount: number,
    bulletSymbolWidth: number,
};
export type BoxSize = {
    width: number,
    top: number,
    left: number,
};

export type FontData = {
    font: string,
    alphabetFont: string,
    symbolFont: string,
    ordinalFont: string,
    fontList: FontSize[],
}

export const tcgEffectMonsterFontData: FontData = {
    font: 'MatrixBook',
    alphabetFont: '"Yu-Gi-Oh! DF Leisho 3"',
    symbolFont: 'matrix',
    ordinalFont: '"DFKakuTaiHiStd-W4"',
    fontList: [
        { bulletSymbolWidth: 21, fontSize: 25.2, lineHeight: 25.2, lineCount: 6 },
        { bulletSymbolWidth: 21, fontSize: 20.7, lineHeight: 21.4, lineCount: 7 },
        { bulletSymbolWidth: 21, fontSize: 12 * UP_RATIO, lineHeight: 12 * UP_RATIO, lineCount: 8 },
        { bulletSymbolWidth: 19, fontSize: 11 * UP_RATIO, lineHeight: 11 * UP_RATIO, lineCount: 9 },
        { bulletSymbolWidth: 19, fontSize: 10 * UP_RATIO, lineHeight: 10 * UP_RATIO, lineCount: 10 },
        { bulletSymbolWidth: 19, fontSize: 9 * UP_RATIO, lineHeight: 9 * UP_RATIO, lineCount: 11 },
        { bulletSymbolWidth: 17, fontSize: 8 * UP_RATIO, lineHeight: 8 * UP_RATIO, lineCount: 12 },
    ]
};
export const ocgEffectMonsterFontData: FontData = {
    font: '"Yu-Gi-Oh! DF Leisho 3"',
    alphabetFont: '"Yu-Gi-Oh! DF Leisho 3"',
    symbolFont: 'matrix',
    ordinalFont: '"DFKakuTaiHiStd-W4"',
    fontList: [
        { bulletSymbolWidth: 16, fontSize: 22, lineHeight: 25.8, lineCount: 6 },
        // { bulletSymbolWidth: 16, fontSize: 12 * UP_RATIO, lineHeight: 21.5, lineCount: 7 },
        // { bulletSymbolWidth: 14, fontSize: 11 * UP_RATIO, lineHeight: 19, lineCount: 8 },
        // { bulletSymbolWidth: 14, fontSize: 10 * UP_RATIO, lineHeight: 16.7, lineCount: 9 },
        // { bulletSymbolWidth: 14, fontSize: 9 * UP_RATIO, lineHeight: 15.2, lineCount: 10 },
        // { bulletSymbolWidth: 12, fontSize: 8 * UP_RATIO, lineHeight: 13.8, lineCount: 11 },
    ]
};
export const effectMonsterFontData: Record<string, FontData> = {
    tcg: tcgEffectMonsterFontData,
    ocg: ocgEffectMonsterFontData,
};
export const getEffectMonsterFontData = (format: string) => {
    return effectMonsterFontData[format ?? 'tcg'] ?? effectMonsterFontData['tcg'];
};

export const monsterSizeList: BoxSize[] = [
    { width: 685, top: 620 * UP_RATIO, left: 64 },
    { width: 685, top: 624 * UP_RATIO, left: 64 },
    { width: 685, top: 624 * UP_RATIO, left: 64 },
    { width: 685, top: 624 * UP_RATIO, left: 64 },
    { width: 685, top: 624 * UP_RATIO, left: 64 },
    { width: 685, top: 624 * UP_RATIO, left: 64 },
    { width: 685, top: 624 * UP_RATIO, left: 64 },
];

export const tcgVanillaMonsterFontData: FontData = {
    font: 'MatrixBook',
    symbolFont: 'matrix',
    ordinalFont: '"DFKakuTaiHiStd-W4"',
    alphabetFont: '"Yu-Gi-Oh! DF Leisho 3"',
    fontList: [
        { bulletSymbolWidth: 21, fontSize: 16.74 * UP_RATIO, lineHeight: 17.01 * UP_RATIO, lineCount: 6 },
        { bulletSymbolWidth: 21, fontSize: 16.74 * UP_RATIO, lineHeight: 17.01 * UP_RATIO, lineCount: 7 },
        { bulletSymbolWidth: 21, fontSize: 16.74 * UP_RATIO, lineHeight: 17.01 * UP_RATIO, lineCount: 8 },
    ]
};
export const ocgVanillaMonsterFontData: FontData = {
    font: '"Yu-Gi-Oh! DF Leisho 3"',
    symbolFont: 'matrix',
    ordinalFont: '"DFKakuTaiHiStd-W4"',
    alphabetFont: '"Yu-Gi-Oh! DF Leisho 3"',
    fontList: [
        { bulletSymbolWidth: 16, fontSize: 17 * UP_RATIO, lineHeight: 30, lineCount: 5 },
        { bulletSymbolWidth: 16, fontSize: 14 * UP_RATIO, lineHeight: 25, lineCount: 6 },
        { bulletSymbolWidth: 16, fontSize: 12 * UP_RATIO, lineHeight: 21.5, lineCount: 7 },
    ]
};
export const vanillaMonsterFontData: Record<string, FontData> = {
    tcg: tcgVanillaMonsterFontData,
    ocg: ocgVanillaMonsterFontData,
};
export const getVanillaMonsterFontData = (format: string) => {
    return vanillaMonsterFontData[format ?? 'tcg'] ?? vanillaMonsterFontData['tcg'];
};

export const pendulumFontList: FontData = {
    font: 'MatrixBook',
    symbolFont: 'matrix',
    ordinalFont: '"DFKakuTaiHiStd-W4"',
    alphabetFont: '"Yu-Gi-Oh! DF Leisho 3"',
    fontList: [
        { bulletSymbolWidth: 21, fontSize: 16.41 * UP_RATIO, lineHeight: 16.44 * UP_RATIO, lineCount: 5 },
        { bulletSymbolWidth: 21, fontSize: 16.41 * UP_RATIO, lineHeight: 16.44 * UP_RATIO, lineCount: 5 },
    ]
};
export const pendulumSizeList: BoxSize[] = [
    { width: 375 * UP_RATIO, top: 504.5 * UP_RATIO, left: 87.05 * UP_RATIO },
    { width: 375 * UP_RATIO, top: 504.5 * UP_RATIO, left: 87.05 * UP_RATIO },
];

export const tcgSTFontData: FontData = {
    font: 'MatrixBook',
    symbolFont: 'matrix',
    ordinalFont: '"DFKakuTaiHiStd-W4"',
    alphabetFont: '"Yu-Gi-Oh! DF Leisho 3"',
    fontList: [
        { bulletSymbolWidth: 21, fontSize: 16.41 * UP_RATIO, lineHeight: 16.74 * UP_RATIO, lineCount: 8 },
        { bulletSymbolWidth: 21, fontSize: 13.46 * UP_RATIO, lineHeight: 14.28 * UP_RATIO, lineCount: 10 },
    ]
};
export const ocgSTFontData: FontData = {
    font: '"Yu-Gi-Oh! DF Leisho 3"',
    symbolFont: 'matrix',
    ordinalFont: '"DFKakuTaiHiStd-W4"',
    alphabetFont: '"Yu-Gi-Oh! DF Leisho 3"',
    fontList: [
        { bulletSymbolWidth: 16, fontSize: 16.41 * UP_RATIO, lineHeight: 16.74 * UP_RATIO, lineCount: 8 },
        { bulletSymbolWidth: 16, fontSize: 13.46 * UP_RATIO, lineHeight: 14.28 * UP_RATIO, lineCount: 10 },
    ]
};
export const effectSTFontData: Record<string, FontData> = {
    tcg: tcgSTFontData,
    ocg: ocgSTFontData,
};
export const getEffectSTFontData = (format: string) => {
    return effectSTFontData[format ?? 'tcg'] ?? effectSTFontData['tcg'];
};


export const stSizeList: BoxSize[] = [
    { width: 461 * UP_RATIO, top: 601 * UP_RATIO, left: 45 * UP_RATIO },
    { width: 461 * UP_RATIO, top: 601 * UP_RATIO, left: 45 * UP_RATIO },
];

/** Speed skill không có dòng ATK / DEF, nhưng lại có dòng type / ability */
export const specialFontList: FontData = {
    font: 'MatrixBook',
    symbolFont: 'matrix',
    ordinalFont: '"DFKakuTaiHiStd-W4"',
    alphabetFont: '"Yu-Gi-Oh! DF Leisho 3"',
    fontList: [
        { bulletSymbolWidth: 21, fontSize: 16.41 * UP_RATIO, lineHeight: 16.74 * UP_RATIO, lineCount: 7 },
        { bulletSymbolWidth: 21, fontSize: 13.46 * UP_RATIO, lineHeight: 14.28 * UP_RATIO, lineCount: 8 },
    ]
};
export const specialSizeList: BoxSize[] = [
    { width: 461 * UP_RATIO, top: 620 * UP_RATIO, left: 45 * UP_RATIO },
    { width: 461 * UP_RATIO, top: 624 * UP_RATIO, left: 45 * UP_RATIO },
];

export const CondenseTolerantMap: Record<CondenseType, Record<string, number>> = {
    veryStrict: {
        '1': 600,
        '2': 620,
        '3': 640,
    },
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
    veryStrict: {
        label: '1',
        order: 1,
    },
    strict: {
        label: '2',
        order: 2,
    },
    loose: {
        label: '3',
        order: 3,
    },
    veryLoose: {
        label: '4',
        order: 4,
    },
    relaxed: {
        label: '5',
        order: 5,
    },
};