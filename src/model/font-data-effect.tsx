import { createFontGetter } from 'src/util';

export type FontSizeData = {
    fontSize: number,
    lineHeight: number,
    lineCount: number,
    offsetY?: number,
    bulletSymbolWidth: number,
    iconSymbolWidth?: number,
    capitalLetterRatio?: number,
    squareBracketRatio?: number,
    largeSymbolRatio?: number,
    letterSpacing?: number,
    wordLetterSpacing?: number,
    headTextFontRatio?: number,
    headTextSpacing?: number,
};
export const DefaultFontSizeData = {
    offsetY: 0,
    capitalLetterRatio: 1,
    squareBracketRatio: 1,
    largeSymbolRatio: 1.35,
    letterSpacing: 0,
    headTextFontRatio: 0.325,
    headTextSpacing: 1,
};
export const DefaultFontData = {
    headTextHeightRatio: 0.800,
    headTextOverflow: 'normal' as 'normal' | 'condense',
};

export type MetricMethod = 'name' | 'standard' | 'compact' | 'creator' | 'furigana';
export type FontData = {
    alphabetFont: string,
    font: string,
    fontList: FontSizeData[],
    furiganaFont: string,
    headTextFillStyle?: string,
    metricMethod?: MetricMethod,
    numberFont?: string,
    numberFontRatio?: number,
    ordinalFont: string,
    headTextHeightRatio?: number,
    fontStyle: string,
    symbolFont: string,
    symbolFontRatio: number,
    weight?: 'bold',
    headTextOverflow?: 'normal' | 'condense',
};
export type TextData = {
    fontData: FontData,
    fontLevel: number,
    currentFont: ReturnType<typeof createFontGetter>,
};

const DefaultEffectFontData = {
    alphabetFont: '"Yu-Gi-Oh! DF Leisho 3"',
    furiganaFont: 'DFHSGothic-W3-WIN-RKSJ-H',
    headTextFontRatio: 0.7,
    headTextHeightRatio: 0.815,
    ordinalFont: '"DFKakuTaiHiStd-W4"',
    symbolFont: 'matrix',
    symbolFontRatio: 1,
};
const DefaultTCGEffectFontData: FontData = {
    ...DefaultEffectFontData,
    font: 'MatrixBook',
    headTextHeightRatio: 0.750,
    fontStyle: 'tcg',
    fontList: [],
};
export const DefaultTCGNormalFontData: FontData = {
    ...DefaultEffectFontData,
    font: '"stone-serif-regular"',
    headTextHeightRatio: 0.750,
    fontStyle: 'tcg',
    fontList: [],
};
const DefaultOCGEffectFontData: FontData = {
    ...DefaultEffectFontData,
    font: '"Yu-Gi-Oh! DF Leisho 3"',
    fontStyle: 'ocg',
    metricMethod: 'compact',
    fontList: [],
};

export const EffectFontData: Record<string, FontData> = {
    'tcg': {
        ...DefaultTCGEffectFontData,
        fontList: [
            { bulletSymbolWidth: 23, fontSize: 24.38, lineHeight: 24.7, lineCount: 8 },
            { bulletSymbolWidth: 23, fontSize: 19.94, lineHeight: 21.15, lineCount: 10 },
        ],
    },
    'tcg-stat': {
        ...DefaultTCGEffectFontData,
        fontList: [
            { bulletSymbolWidth: 23, fontSize: 25.2, lineHeight: 24.9, lineCount: 7 },
        ]
    },
    'tcg-type-stat': {
        ...DefaultTCGEffectFontData,
        fontList: [
            { bulletSymbolWidth: 23, fontSize: 25.2, lineHeight: 24.9, lineCount: 6 },
            { bulletSymbolWidth: 23, fontSize: 19.95, lineHeight: 21.5, lineCount: 7 },
            { bulletSymbolWidth: 23, fontSize: 18.8, lineHeight: 18.8, lineCount: 8 },
            { bulletSymbolWidth: 19, fontSize: 16.7, lineHeight: 16.7, lineCount: 9 },
            { bulletSymbolWidth: 19, fontSize: 15.0, lineHeight: 15.0, lineCount: 10 },
        ]
    },
    'tcg-type': {
        ...DefaultTCGEffectFontData,
        fontList: [
            { bulletSymbolWidth: 23, fontSize: 25.2, lineHeight: 24.9, lineCount: 7 },
        ]
    },
    'ocg': {
        ...DefaultOCGEffectFontData,
        fontList: [
            { bulletSymbolWidth: 16, fontSize: 22, lineHeight: 26, lineCount: 7 },
            { bulletSymbolWidth: 16, fontSize: 22, lineHeight: 26, lineCount: 8 },
        ]
    },
    'ocg-stat': {
        ...DefaultOCGEffectFontData,
        fontList: [
            { bulletSymbolWidth: 16, fontSize: 22.05, lineHeight: 25.8, lineCount: 7 },
        ]
    },
    'ocg-type-stat': {
        ...DefaultOCGEffectFontData,
        fontList: [
            { bulletSymbolWidth: 16, fontSize: 22.05, lineHeight: 25.8, lineCount: 6 },
        ]
    },
    'ocg-type': {
        ...DefaultOCGEffectFontData,
        fontList: [
            { bulletSymbolWidth: 16, fontSize: 22.05, lineHeight: 25.8, lineCount: 7 },
        ]
    },
};

export const TCGVanillaTypeStatFontList = [
    { bulletSymbolWidth: 23, fontSize: 21.8, lineHeight: 24.9, lineCount: 6 },
    { bulletSymbolWidth: 23, fontSize: 17.28, lineHeight: 21.5, lineCount: 7 },
    { bulletSymbolWidth: 23, fontSize: 16.28, lineHeight: 18.8, lineCount: 8 },
    { bulletSymbolWidth: 19, fontSize: 14.46, lineHeight: 16.7, lineCount: 9 },
    { bulletSymbolWidth: 19, fontSize: 12.99, lineHeight: 15.0, lineCount: 10 },
];

export const PendulumEffectFontData: Record<string, FontData> = {
    tcg: {
        ...DefaultTCGEffectFontData,
        fontList: [
            { bulletSymbolWidth: 23, fontSize: 24.3, lineHeight: 24.35, lineCount: 5 },
        ],
    },
    ocg: {
        ...DefaultOCGEffectFontData,
        fontList: [
            {
                bulletSymbolWidth: 16,
                fontSize: 22.05,
                lineHeight: 25.2,
                headTextFontRatio: 0.325,
                lineCount: 5,
            },
        ],
    },
};

export type CondenseType = 'veryStrict' | 'veryLoose' | 'strict' | 'loose' | 'relaxed';
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
        label: '5',
        order: 1,
    },
    strict: {
        label: '4',
        order: 2,
    },
    loose: {
        label: '3',
        order: 3,
    },
    veryLoose: {
        label: '2',
        order: 4,
    },
    relaxed: {
        label: '1',
        order: 5,
    },
};