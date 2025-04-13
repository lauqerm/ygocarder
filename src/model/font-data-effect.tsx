export type FontGetter = {
    getFont: () => string,
    getFontInfo: () => {
        style: '' | 'italic' | 'small-caps',
        size: `${number}px`,
        sizeAsNumber: number,
        family: string,
        weight: '' | 'bold',
    },
    setWeight(nextWeight: '' | 'bold'): FontGetter,
    setStyle(nextStyle: '' | 'italic' | 'small-caps'): FontGetter,
    setSize(nextSize: number | `${number}px` | ((currentSize: number) => number | `${number}px`)): FontGetter,
    setFamily(nextFamily: string): FontGetter,
};

export type FontSizeData = {
    allRightSymbolOffset?: number,
    bulletSymbolOffset?: number,
    bulletSymbolWidth: number,
    capitalLetterRatio?: number,
    fontSize: number,
    headTextFontRatio?: number,
    headTextSpacing?: number,
    iconSymbolWidth?: number,
    largeSymbolRatio?: number,
    letterSpacing?: number,
    lineCount: number,
    lineHeight: number,
    offsetY?: number,
    ordinalFontOffsetY?: number,
    ordinalFontRatio?: number,
    squareBracketRatio?: number,
    wordLetterSpacing?: number,
};
export const DefaultFontSizeData = {
    allRightSymbolOffset: 1,
    bulletSymbolWidth: 23,
    fontSize: 24.5,
    lineHeight: 24.7,
    lineCount: 6,
    bulletSymbolOffset: 0,
    capitalLetterRatio: 1,
    headTextFontRatio: 0.355,
    headTextSpacing: 1.5,
    largeSymbolRatio: 1.35,
    letterSpacing: 0,
    offsetY: 0,
    ordinalFontOffsetY: -2,
    ordinalFontRatio: 1 / 1.1,
    squareBracketRatio: 1,
};

/**
 * @summary For some weird reasons, letter sometime just got deviated from current baseline compare to other letters of the same font only in 1:1 scale. The only known case is with MatrixRegularSmallCaps font with font size bigger than around 85px. This deviation create a small but noticeable disruption in baseline, which currently we are unable to fix. We cannot fix this in canvas, and modify the font directly give no positive result.
 * 
 * So for now we can only hardcode a list of problematic letters with their correpsonding treatment. This is just baffling.
 */
export type FontDeviation = {
    uniformBoxDescent?: number,
};
export type FontDeviationMap = {
    threshold: number,
    letterMap: Record<string, FontDeviation>,
}

export type MetricMethod = 'name' | 'standard' | 'compact' | 'creator' | 'furigana';
export type FontData = {
    alphabetFont: string,
    font: string,
    fontList: FontSizeData[],
    letterDeviationMap?: Record<string, FontDeviationMap>,
    fontStyle: string,
    furiganaFont: string,
    headTextBold?: boolean,
    headTextFillStyle?: string,
    headTextGapRatio?: number,
    headTextHeightRatio?: number,
    headTextOverflow?: 'normal' | 'condense',
    metricMethod?: MetricMethod,
    numberFont?: string,
    numberFontRatio?: number,
    ordinalFont: string,
    symbolFont: string,
    symbolFontRatio: number,
    weight?: 'bold',
};
export const DefaultFontData = {
    headTextHeightRatio: 0.800,
    headTextOverflow: 'normal' as 'normal' | 'condense',
    headTextBold: true,
    headTextGapRatio: 0.03125,
};
export type TextData = {
    fontData: FontData,
    fontLevel: number,
    currentFont: FontGetter,
};

const DefaultEffectFontData = {
    alphabetFont: '"Yu-Gi-Oh! DF Leisho 3"',
    furiganaFont: 'DFHSGothic-W3-WIN-RKSJ-H',
    headTextFontRatio: 0.7,
    headTextHeightRatio: 0.815,
    ordinalFont: '"DFKakuTaiHiStd-W4"',
    symbolFont: 'matrix',
    symbolFontRatio: 1,
    headTextGapRatio: 0,
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
    font: '"StoneSerif-Italic"',
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

export const NormalFontData: Record<string, FontData> = {
    'tcg': {
        ...DefaultTCGNormalFontData,
        fontList: [
            { bulletSymbolWidth: 38, fontSize: 40.2, lineHeight: 42.1, lineCount: 5, bulletSymbolOffset: 1 },
            { bulletSymbolWidth: 30, fontSize: 33.2, lineHeight: 35.1, lineCount: 6 },
            { bulletSymbolWidth: 26, fontSize: 28.2, lineHeight: 30.3, lineCount: 7 },
            { bulletSymbolWidth: 23, fontSize: 24.38, lineHeight: 24.7, lineCount: 8 },
            { bulletSymbolWidth: 23, fontSize: 19.94, lineHeight: 21.15, lineCount: 10, bulletSymbolOffset: 1 },
            { bulletSymbolWidth: 21, fontSize: 18.5, lineHeight: 19.2, lineCount: 11, bulletSymbolOffset: 1 },
            { bulletSymbolWidth: 19, fontSize: 17.0, lineHeight: 17.6, lineCount: 12, bulletSymbolOffset: 1 },
            { bulletSymbolWidth: 17, fontSize: 15.6, lineHeight: 16.3, lineCount: 13, bulletSymbolOffset: 1 },
        ],
    },
    'tcg-stat': {
        ...DefaultTCGNormalFontData,
        fontList: [
            { bulletSymbolWidth: 40, fontSize: 44.2, lineHeight: 47.1, lineCount: 4, bulletSymbolOffset: 2 },
            { bulletSymbolWidth: 30, fontSize: 34.2, lineHeight: 36.5, lineCount: 5 },
            { bulletSymbolWidth: 26, fontSize: 28.2, lineHeight: 30.5, lineCount: 6 },
            { bulletSymbolWidth: 23, fontSize: 24.5, lineHeight: 24.7, lineCount: 7 },
            { bulletSymbolWidth: 21, fontSize: 19.01, lineHeight: 20.15, lineCount: 9, bulletSymbolOffset: 1 },
            { bulletSymbolWidth: 20, fontSize: 17.5, lineHeight: 18.2, lineCount: 10, bulletSymbolOffset: 1 },
            { bulletSymbolWidth: 17, fontSize: 15.7, lineHeight: 16.5, lineCount: 11, bulletSymbolOffset: 1 },
        ]
    },
    'tcg-type-stat': {
        ...DefaultTCGNormalFontData,
        fontList: [
            { bulletSymbolWidth: 40, fontSize: 44.2, lineHeight: 47.1, lineCount: 3, bulletSymbolOffset: 1 },
            { bulletSymbolWidth: 30, fontSize: 34.2, lineHeight: 36.5, lineCount: 4 },
            { bulletSymbolWidth: 26, fontSize: 27.2, lineHeight: 29.5, lineCount: 5 },
            { bulletSymbolWidth: 23, fontSize: 24.5, lineHeight: 24.7, lineCount: 6 },
            { bulletSymbolWidth: 23, fontSize: 19.28, lineHeight: 21.3, lineCount: 7 },
            { bulletSymbolWidth: 23, fontSize: 17.78, lineHeight: 18.9, lineCount: 8 },
            { bulletSymbolWidth: 19, fontSize: 15.46, lineHeight: 16.8, lineCount: 9, bulletSymbolOffset: 1 },
            { bulletSymbolWidth: 19, fontSize: 12.99, lineHeight: 15.0, lineCount: 10, bulletSymbolOffset: 2 },
        ],
    },
    'tcg-type': {
        ...DefaultTCGNormalFontData,
        fontList: [
            { bulletSymbolWidth: 40, fontSize: 41.2, lineHeight: 44.1, lineCount: 4, bulletSymbolOffset: 2 },
            { bulletSymbolWidth: 30, fontSize: 33.2, lineHeight: 35.5, lineCount: 5 },
            { bulletSymbolWidth: 26, fontSize: 27.2, lineHeight: 29.5, lineCount: 6 },
            { bulletSymbolWidth: 23, fontSize: 24.5, lineHeight: 24.7, lineCount: 7 },
            { bulletSymbolWidth: 23, fontSize: 19.95, lineHeight: 21.3, lineCount: 8 },
            { bulletSymbolWidth: 23, fontSize: 18.8, lineHeight: 18.8, lineCount: 9 },
            { bulletSymbolWidth: 20, fontSize: 16.8, lineHeight: 17.7, lineCount: 10, bulletSymbolOffset: 1 },
            { bulletSymbolWidth: 19, fontSize: 15.1, lineHeight: 16.1, lineCount: 11, bulletSymbolOffset: 1 },
            { bulletSymbolWidth: 17, fontSize: 14.1, lineHeight: 14.7, lineCount: 12, bulletSymbolOffset: 1 },
        ]
    },
};

export const DEFAULT_EFFECT_NORMAL_SIZE = 3;
export const DEFAULT_PENDULUM_EFFECT_NORMAL_SIZE = 3;
export const EffectFontData: Record<string, FontData> = {
    'tcg': {
        ...DefaultTCGEffectFontData,
        fontList: [
            { bulletSymbolWidth: 38, fontSize: 40.2, lineHeight: 42.1, lineCount: 5, bulletSymbolOffset: 1 },
            { bulletSymbolWidth: 30, fontSize: 33.2, lineHeight: 35.1, lineCount: 6 },
            { bulletSymbolWidth: 26, fontSize: 28.2, lineHeight: 30.3, lineCount: 7 },
            { bulletSymbolWidth: 23, fontSize: 24.38, lineHeight: 24.7, lineCount: 8 },
            { bulletSymbolWidth: 23, fontSize: 19.94, lineHeight: 21.15, lineCount: 10, bulletSymbolOffset: 1 },
            { bulletSymbolWidth: 21, fontSize: 18.5, lineHeight: 19.2, lineCount: 11, bulletSymbolOffset: 1 },
            { bulletSymbolWidth: 19, fontSize: 17.0, lineHeight: 17.6, lineCount: 12, bulletSymbolOffset: 1 },
            { bulletSymbolWidth: 17, fontSize: 15.6, lineHeight: 16.3, lineCount: 13, bulletSymbolOffset: 1 },
        ],
    },
    'tcg-stat': {
        ...DefaultTCGEffectFontData,
        fontList: [
            { bulletSymbolWidth: 40, fontSize: 42.2, lineHeight: 43.9, lineCount: 4, bulletSymbolOffset: 2 },
            { bulletSymbolWidth: 30, fontSize: 33.2, lineHeight: 35.5, lineCount: 5 },
            { bulletSymbolWidth: 26, fontSize: 27.2, lineHeight: 29.5, lineCount: 6 },
            { bulletSymbolWidth: 23, fontSize: 25.2, lineHeight: 24.7, lineCount: 7 },
            { bulletSymbolWidth: 21, fontSize: 19.01, lineHeight: 20.15, lineCount: 9, bulletSymbolOffset: 1 },
            { bulletSymbolWidth: 20, fontSize: 17.5, lineHeight: 18.2, lineCount: 10, bulletSymbolOffset: 1 },
            { bulletSymbolWidth: 17, fontSize: 15.7, lineHeight: 16.5, lineCount: 11, bulletSymbolOffset: 1 },
        ]
    },
    'tcg-type-stat': {
        ...DefaultTCGEffectFontData,
        fontList: [
            { bulletSymbolWidth: 40, fontSize: 45.2, lineHeight: 48.1, lineCount: 3, bulletSymbolOffset: 1 },
            { bulletSymbolWidth: 30, fontSize: 34.2, lineHeight: 36.5, lineCount: 4 },
            { bulletSymbolWidth: 26, fontSize: 27.2, lineHeight: 29.5, lineCount: 5 },
            { bulletSymbolWidth: 23, fontSize: 25.2, lineHeight: 24.7, lineCount: 6 },
            { bulletSymbolWidth: 23, fontSize: 19.95, lineHeight: 21.3, lineCount: 7, bulletSymbolOffset: 1 },
            { bulletSymbolWidth: 23, fontSize: 18.8, lineHeight: 18.8, lineCount: 8, bulletSymbolOffset: 1 },
            { bulletSymbolWidth: 19, fontSize: 16.7, lineHeight: 16.7, lineCount: 9, bulletSymbolOffset: 1 },
            { bulletSymbolWidth: 19, fontSize: 15.0, lineHeight: 15.0, lineCount: 10, bulletSymbolOffset: 2 },
        ]
    },
    'tcg-type': {
        ...DefaultTCGEffectFontData,
        fontList: [
            { bulletSymbolWidth: 40, fontSize: 42.2, lineHeight: 43.9, lineCount: 4, bulletSymbolOffset: 2 },
            { bulletSymbolWidth: 30, fontSize: 33.2, lineHeight: 35.5, lineCount: 5 },
            { bulletSymbolWidth: 26, fontSize: 27.2, lineHeight: 29.5, lineCount: 6 },
            { bulletSymbolWidth: 23, fontSize: 25.2, lineHeight: 24.7, lineCount: 7 },
            { bulletSymbolWidth: 23, fontSize: 19.95, lineHeight: 21.3, lineCount: 8 },
            { bulletSymbolWidth: 23, fontSize: 18.8, lineHeight: 18.8, lineCount: 9 },
            { bulletSymbolWidth: 20, fontSize: 16.8, lineHeight: 17.7, lineCount: 10, bulletSymbolOffset: 1 },
            { bulletSymbolWidth: 19, fontSize: 15.1, lineHeight: 16.1, lineCount: 11, bulletSymbolOffset: 1 },
            { bulletSymbolWidth: 17, fontSize: 14.1, lineHeight: 14.7, lineCount: 12, bulletSymbolOffset: 1 },
        ]
    },
    'ocg': {
        ...DefaultOCGEffectFontData,
        fontList: [
            { bulletSymbolWidth: 38, fontSize: 43.2, lineHeight: 50.1, lineCount: 4, bulletSymbolOffset: 2, headTextFontRatio: 0.25 },
            { bulletSymbolWidth: 30, fontSize: 34.7, lineHeight: 40.1, lineCount: 5, bulletSymbolOffset: 1, headTextFontRatio: 0.3 },
            { bulletSymbolWidth: 26, fontSize: 28.7, lineHeight: 32.8, lineCount: 6, bulletSymbolOffset: 1, headTextFontRatio: 0.3 },
            { bulletSymbolWidth: 16, fontSize: 22, lineHeight: 26, lineCount: 7 },
            { bulletSymbolWidth: 16, fontSize: 22, lineHeight: 26, lineCount: 8 },
        ]
    },
    'ocg-stat': {
        ...DefaultOCGEffectFontData,
        fontList: [
            { bulletSymbolWidth: 34, fontSize: 38.7, lineHeight: 44.1, lineCount: 4, bulletSymbolOffset: 3, headTextFontRatio: 0.25 },
            { bulletSymbolWidth: 30, fontSize: 32.7, lineHeight: 36.1, lineCount: 5, bulletSymbolOffset: 2, headTextFontRatio: 0.25 },
            { bulletSymbolWidth: 26, fontSize: 28.7, lineHeight: 32.8, lineCount: 6, bulletSymbolOffset: 1, headTextFontRatio: 0.3 },
            { bulletSymbolWidth: 16, fontSize: 22.05, lineHeight: 25.8, lineCount: 7 },
        ]
    },
    'ocg-type-stat': {
        ...DefaultOCGEffectFontData,
        fontList: [
            { bulletSymbolWidth: 41, fontSize: 45.7, lineHeight: 49.8, lineCount: 3, bulletSymbolOffset: 3, headTextFontRatio: 0.25 },
            { bulletSymbolWidth: 32, fontSize: 34.7, lineHeight: 38.1, lineCount: 4, bulletSymbolOffset: 3, headTextFontRatio: 0.25 },
            { bulletSymbolWidth: 24, fontSize: 27.7, lineHeight: 30.1, lineCount: 5, bulletSymbolOffset: 2, headTextFontRatio: 0.3 },
            { bulletSymbolWidth: 16, fontSize: 22.05, lineHeight: 25.8, lineCount: 6 },
        ]
    },
    'ocg-type': {
        ...DefaultOCGEffectFontData,
        fontList: [
            { bulletSymbolWidth: 34, fontSize: 38.7, lineHeight: 44.1, lineCount: 4, bulletSymbolOffset: 3, headTextFontRatio: 0.25 },
            { bulletSymbolWidth: 30, fontSize: 32.7, lineHeight: 36.1, lineCount: 5, bulletSymbolOffset: 2, headTextFontRatio: 0.25 },
            { bulletSymbolWidth: 26, fontSize: 28.7, lineHeight: 32.8, lineCount: 6, bulletSymbolOffset: 1, headTextFontRatio: 0.3 },
            { bulletSymbolWidth: 16, fontSize: 22.05, lineHeight: 25.8, lineCount: 7 },
        ]
    },
};


export const PendulumNormalFontData: Record<string, FontData> = {
    tcg: {
        ...DefaultTCGNormalFontData,
        fontList: [
            { bulletSymbolWidth: 41, fontSize: 50.3, lineHeight: 56.35, lineCount: 2 },
            { bulletSymbolWidth: 34, fontSize: 35.3, lineHeight: 38.85, lineCount: 3, bulletSymbolOffset: 2 },
            { bulletSymbolWidth: 27, fontSize: 26.3, lineHeight: 29.35, lineCount: 4, bulletSymbolOffset: 3 },
            { bulletSymbolWidth: 23, fontSize: 24.3, lineHeight: 24.35, lineCount: 5 },
            { bulletSymbolWidth: 18, fontSize: 19.5, lineHeight: 20.23, lineCount: 6 },
            { bulletSymbolWidth: 17, fontSize: 17.0, lineHeight: 17.40, lineCount: 7 },
            { bulletSymbolWidth: 14, fontSize: 14.7, lineHeight: 15.32, lineCount: 8 },
        ],
    },
};
export const PendulumEffectFontData: Record<string, FontData> = {
    tcg: {
        ...DefaultTCGEffectFontData,
        fontList: [
            { bulletSymbolWidth: 41, fontSize: 50.3, lineHeight: 56.35, lineCount: 2 },
            { bulletSymbolWidth: 34, fontSize: 35.3, lineHeight: 38.85, lineCount: 3, bulletSymbolOffset: 2 },
            { bulletSymbolWidth: 27, fontSize: 26.3, lineHeight: 29.35, lineCount: 4, bulletSymbolOffset: 3 },
            { bulletSymbolWidth: 23, fontSize: 24.3, lineHeight: 24.35, lineCount: 5 },
            { bulletSymbolWidth: 18, fontSize: 19.5, lineHeight: 20.23, lineCount: 6 },
            { bulletSymbolWidth: 17, fontSize: 17.0, lineHeight: 17.40, lineCount: 7 },
            { bulletSymbolWidth: 14, fontSize: 14.7, lineHeight: 15.32, lineCount: 8 },
        ],
    },
    ocg: {
        ...DefaultOCGEffectFontData,
        fontList: [
            {
                bulletSymbolWidth: 41,
                bulletSymbolOffset: 3,
                fontSize: 45.55,
                lineHeight: 57.6,
                headTextFontRatio: 0.2,
                lineCount: 2,
            },
            {
                bulletSymbolWidth: 31,
                bulletSymbolOffset: 2,
                fontSize: 35.55,
                lineHeight: 40.6,
                headTextFontRatio: 0.3,
                lineCount: 3,
            },
            {
                bulletSymbolWidth: 23,
                bulletSymbolOffset: 1,
                fontSize: 25.05,
                lineHeight: 30.6,
                headTextFontRatio: 0.35,
                lineCount: 4,
            },
            {
                bulletSymbolWidth: 16,
                fontSize: 22.05,
                lineHeight: 25.2,
                headTextFontRatio: 0.4,
                lineCount: 5,
            },
        ],
    },
};

export type FontStyle = '' | 'italic' | 'small-caps';

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
        '1': 850,
        '2': 900,
        '3': 950,
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