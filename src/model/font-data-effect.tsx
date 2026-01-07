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
    bulletOffset?: number,
    bulletWidth: number,
    capitalLetterRatio?: number,
    fontSize: number,
    headTextFontRatio?: number,
    headTextSpacing?: number,
    iconSymbolWidth?: number,
    largeSymbolRatio?: number,
    fontLetterOffsetMap?: Record<string, LetterOffset>,
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
    bulletWidth: 23,
    fontSize: 24.5,
    lineHeight: 24.7,
    lineCount: 6,
    bulletOffset: 0,
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
};

export type LetterOffset = { ratio: number, baseline: number, edge?: number, yRatio?: number };

export type MetricMethod = 'name' | 'standard' | 'compact' | 'creator' | 'furigana';
export type FontData = {
    alphabetFont: string,
    font: string,
    fontList: FontSizeData[],
    fontStyle: string,
    furiganaFont: string,
    headTextBold?: boolean,
    headTextFillStyle?: string,
    headTextGapRatio?: number,
    headTextHeightRatio?: number,
    headTextOverflow?: 'normal' | 'condense',
    letterDeviationMap?: Record<string, FontDeviationMap>,
    letterOffsetMap?: Record<string, LetterOffset>,
    metricMethod?: MetricMethod,
    numberFont?: string,
    numberFontRatio?: number,
    ordinalFont: string,
    symbolFont: string,
    symbolFontRatio: number,
    variant: string,
    vietnameseFont?: string,
    vietnameseFontRatio?: number,
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
    headTextGapRatio: 0,
    headTextHeightRatio: 0.815,
    ordinalFont: '"DFKakuTaiHiStd-W4"',
    symbolFont: 'matrix',
    symbolFontRatio: 1,
    vietnameseFont: 'Times New Roman',
    vietnameseFontRatio: 1.1,
    letterOffsetMap: {
        '★': { ratio: 0.9, baseline: -0.05, yRatio: 1 },
        '☆': { ratio: 0.9, baseline: -0.05, yRatio: 1 },
        '¡': { ratio: 1.2, baseline: -0.0, yRatio: 1.05 },
    },
};
export const DefaultTCGEffectFontData: FontData = {
    ...DefaultEffectFontData,
    font: 'MatrixBook, Times New Roman',
    headTextHeightRatio: 0.750,
    fontStyle: 'tcg',
    fontList: [],
    variant: 'default-tcg',
};
export const DefaultTCGNormalFontData: FontData = {
    ...DefaultEffectFontData,
    font: '"StoneSerif-Italic", "SVN-Times New Roman Italic"',
    vietnameseFont: '"SVN-Times New Roman Italic"',
    headTextHeightRatio: 0.750,
    fontStyle: 'tcg',
    vietnameseFontRatio: 1.08,
    fontList: [],
    variant: 'default-tcg-normal',
};
export const DefaultOCGEffectFontData: FontData = {
    ...DefaultEffectFontData,
    font: '"Yu-Gi-Oh! DF Leisho 3"',
    fontStyle: 'ocg',
    metricMethod: 'compact' as MetricMethod,
    fontList: [],
    variant: 'default-ocg',
};

/**
 * Keep in sync with EffectFontData, for example if tcg-type of EffectFontData fontList has 9 entries, tcg-type of NormalFontData must also has 9 entries.
 * */
export const NormalFontData: Record<string, FontData> = {
    'tcg': {
        ...DefaultTCGNormalFontData,
        variant: 'tcg',
        fontList: [
            { bulletWidth: 38, fontSize: 40.2, lineHeight: 42.1, lineCount: 5, bulletOffset: 1 },
            { bulletWidth: 30, fontSize: 33.2, lineHeight: 35.1, lineCount: 6 },
            { bulletWidth: 26, fontSize: 28.2, lineHeight: 30.3, lineCount: 7 },
            { bulletWidth: 23, fontSize: 24.38, lineHeight: 24.7, lineCount: 8 },
            { bulletWidth: 23, fontSize: 19.94, lineHeight: 21.15, lineCount: 10, bulletOffset: 1 },
            { bulletWidth: 21, fontSize: 18.5, lineHeight: 19.2, lineCount: 11, bulletOffset: 1 },
            { bulletWidth: 19, fontSize: 17.0, lineHeight: 17.6, lineCount: 12, bulletOffset: 1 },
            { bulletWidth: 17, fontSize: 15.6, lineHeight: 16.3, lineCount: 13, bulletOffset: 1 },
        ],
    },
    'tcg-stat': {
        ...DefaultTCGNormalFontData,
        variant: 'tcg-stat',
        fontList: [
            { bulletWidth: 40, fontSize: 44.2, lineHeight: 47.1, lineCount: 4, bulletOffset: 2 },
            { bulletWidth: 30, fontSize: 34.2, lineHeight: 36.5, lineCount: 5 },
            { bulletWidth: 26, fontSize: 28.2, lineHeight: 30.5, lineCount: 6 },
            { bulletWidth: 23, fontSize: 24.5, lineHeight: 24.7, lineCount: 7 },
            { bulletWidth: 21, fontSize: 19.01, lineHeight: 20.15, lineCount: 9, bulletOffset: 1 },
            { bulletWidth: 20, fontSize: 17.5, lineHeight: 18.2, lineCount: 10, bulletOffset: 1 },
            { bulletWidth: 17, fontSize: 15.7, lineHeight: 16.5, lineCount: 11, bulletOffset: 1 },
        ]
    },
    'tcg-type-stat': {
        ...DefaultTCGNormalFontData,
        variant: 'tcg-type-stat',
        fontList: [
            { bulletWidth: 40, fontSize: 44.2, lineHeight: 47.1, lineCount: 3, bulletOffset: 1 },
            { bulletWidth: 30, fontSize: 34.2, lineHeight: 36.5, lineCount: 4 },
            { bulletWidth: 26, fontSize: 27.2, lineHeight: 29.5, lineCount: 5 },
            { bulletWidth: 23, fontSize: 24.5, lineHeight: 24.7, lineCount: 6 },
            { bulletWidth: 23, fontSize: 19.28, lineHeight: 21.3, lineCount: 7 },
            { bulletWidth: 23, fontSize: 17.78, lineHeight: 18.9, lineCount: 8 },
            { bulletWidth: 19, fontSize: 15.46, lineHeight: 16.8, lineCount: 9, bulletOffset: 1 },
            { bulletWidth: 19, fontSize: 12.99, lineHeight: 15.0, lineCount: 10, bulletOffset: 2 },
        ],
    },
    'tcg-type': {
        ...DefaultTCGNormalFontData,
        variant: 'tcg-type',
        fontList: [
            { bulletWidth: 40, fontSize: 41.2, lineHeight: 44.1, lineCount: 4, bulletOffset: 2 },
            { bulletWidth: 32, fontSize: 33.2, lineHeight: 35.5, lineCount: 5 },
            { bulletWidth: 26, fontSize: 27.2, lineHeight: 29.5, lineCount: 6 },
            { bulletWidth: 23, fontSize: 24.5, lineHeight: 24.7, lineCount: 7 },
            { bulletWidth: 23, fontSize: 19.95, lineHeight: 21.3, lineCount: 8 },
            { bulletWidth: 23, fontSize: 18.8, lineHeight: 18.8, lineCount: 9 },
            { bulletWidth: 20, fontSize: 16.8, lineHeight: 17.7, lineCount: 10, bulletOffset: 1 },
            { bulletWidth: 19, fontSize: 15.1, lineHeight: 16.1, lineCount: 11, bulletOffset: 1 },
            { bulletWidth: 17, fontSize: 14.1, lineHeight: 14.7, lineCount: 12, bulletOffset: 1 },
        ]
    },
    'tcg-pendulumLarge': {
        ...DefaultTCGNormalFontData,
        variant: 'tcg-pendulumLarge',
        fontList: [
            { bulletWidth: 38, fontSize: 36.8, lineHeight: 43.3, lineCount: 4, bulletOffset: 1 },
            { bulletWidth: 32, fontSize: 31.5, lineHeight: 35.6, lineCount: 5, bulletOffset: 1 },
            { bulletWidth: 26, fontSize: 28.1, lineHeight: 30.1, lineCount: 6 },
            { bulletWidth: 23, fontSize: 23.7, lineHeight: 25.8, lineCount: 7 },
            { bulletWidth: 22, fontSize: 19.54, lineHeight: 22.7, lineCount: 8, bulletOffset: 1 },
            { bulletWidth: 20, fontSize: 17.14, lineHeight: 18.55, lineCount: 10, bulletOffset: 1 },
            { bulletWidth: 18, fontSize: 15.6, lineHeight: 16.4, lineCount: 11, bulletOffset: 1 },
            { bulletWidth: 17, fontSize: 14.4, lineHeight: 15.0, lineCount: 12, bulletOffset: 1 },
        ],
    },
    'tcg-pendulumLarge-stat': {
        ...DefaultTCGNormalFontData,
        variant: 'tcg-pendulumLarge-stat',
        fontList: [
            { bulletWidth: 41, fontSize: 39.5, lineHeight: 47.9, lineCount: 3, bulletOffset: 2 },
            { bulletWidth: 34, fontSize: 32.6, lineHeight: 36.0, lineCount: 4 },
            { bulletWidth: 26, fontSize: 26.7, lineHeight: 29.5, lineCount: 5 },
            { bulletWidth: 23, fontSize: 24.8, lineHeight: 24.7, lineCount: 6 },
            { bulletWidth: 20, fontSize: 17.0, lineHeight: 18.65, lineCount: 8, bulletOffset: 1 },
            { bulletWidth: 17, fontSize: 15.3, lineHeight: 16.7, lineCount: 9, bulletOffset: 1 },
            { bulletWidth: 16, fontSize: 14.4, lineHeight: 15.0, lineCount: 10, bulletOffset: 1 },
        ]
    },
    'tcg-pendulumLarge-type-stat': {
        ...DefaultTCGNormalFontData,
        variant: 'tcg-pendulumLarge-type-stat',
        fontList: [
            { bulletWidth: 40, fontSize: 44.4, lineHeight: 54.1, lineCount: 2, bulletOffset: 1 },
            { bulletWidth: 30, fontSize: 33.5, lineHeight: 37.5, lineCount: 3 },
            { bulletWidth: 26, fontSize: 26.6, lineHeight: 28.5, lineCount: 4 },
            { bulletWidth: 23, fontSize: 24.7, lineHeight: 23.3, lineCount: 5 },
            { bulletWidth: 22, fontSize: 19.4, lineHeight: 19.5, lineCount: 6, bulletOffset: 1 },
            { bulletWidth: 20, fontSize: 18.2, lineHeight: 16.9, lineCount: 7, bulletOffset: 1 },
            { bulletWidth: 17, fontSize: 15.9, lineHeight: 14.8, lineCount: 8, bulletOffset: 1 },
            { bulletWidth: 16, fontSize: 13.7, lineHeight: 13.2, lineCount: 9, bulletOffset: 1 },
        ]
    },
    'tcg-pendulumLarge-type': {
        ...DefaultTCGNormalFontData,
        variant: 'tcg-pendulumLarge-type',
        fontList: [
            { bulletWidth: 40, fontSize: 38.9, lineHeight: 45.5, lineCount: 3, bulletOffset: 1 },
            { bulletWidth: 36, fontSize: 32.4, lineHeight: 36.9, lineCount: 4, bulletOffset: 1 },
            { bulletWidth: 28, fontSize: 26.5, lineHeight: 28.8, lineCount: 5 },
            { bulletWidth: 25, fontSize: 22.2, lineHeight: 24.5, lineCount: 6 },
            { bulletWidth: 22, fontSize: 19.5, lineHeight: 21.2, lineCount: 7 },
            { bulletWidth: 20, fontSize: 17.6, lineHeight: 18.5, lineCount: 8, bulletOffset: 1 },
            { bulletWidth: 19, fontSize: 15.7, lineHeight: 16.6, lineCount: 9 },
            { bulletWidth: 18, fontSize: 14.1, lineHeight: 15.0, lineCount: 10, bulletOffset: 1 },
            { bulletWidth: 16, fontSize: 12.4, lineHeight: 13.4, lineCount: 11, bulletOffset: 1 },
        ]
    },
};

export const DEFAULT_EFFECT_NORMAL_SIZE = 3;
export const DEFAULT_PENDULUM_EFFECT_NORMAL_SIZE = 3;
export const EffectFontData: Record<string, FontData> = {
    'tcg': {
        ...DefaultTCGEffectFontData,
        variant: 'tcg',
        fontList: [
            { bulletWidth: 38, fontSize: 40.2, lineHeight: 42.1, lineCount: 5, bulletOffset: 1 },
            { bulletWidth: 30, fontSize: 33.2, lineHeight: 35.1, lineCount: 6 },
            { bulletWidth: 26, fontSize: 28.2, lineHeight: 30.3, lineCount: 7 },
            { bulletWidth: 23, fontSize: 24.38, lineHeight: 24.7, lineCount: 8 },
            { bulletWidth: 23, fontSize: 19.94, lineHeight: 21.15, lineCount: 10, bulletOffset: 1 },
            { bulletWidth: 21, fontSize: 18.5, lineHeight: 19.2, lineCount: 11, bulletOffset: 1 },
            { bulletWidth: 19, fontSize: 17.0, lineHeight: 17.6, lineCount: 12, bulletOffset: 1 },
            { bulletWidth: 17, fontSize: 15.6, lineHeight: 16.3, lineCount: 13, bulletOffset: 1 },
        ],
    },
    'tcg-stat': {
        ...DefaultTCGEffectFontData,
        variant: 'tcg-stat',
        fontList: [
            { bulletWidth: 40, fontSize: 42.2, lineHeight: 43.9, lineCount: 4, bulletOffset: 2 },
            { bulletWidth: 32, fontSize: 33.2, lineHeight: 35.5, lineCount: 5 },
            { bulletWidth: 26, fontSize: 27.2, lineHeight: 29.5, lineCount: 6 },
            { bulletWidth: 23, fontSize: 24.3, lineHeight: 24.7, lineCount: 7 },
            { bulletWidth: 21, fontSize: 19.01, lineHeight: 20.15, lineCount: 9, bulletOffset: 1 },
            { bulletWidth: 20, fontSize: 17.5, lineHeight: 18.2, lineCount: 10, bulletOffset: 1 },
            { bulletWidth: 17, fontSize: 15.7, lineHeight: 16.5, lineCount: 11, bulletOffset: 1 },
        ]
    },
    'tcg-type-stat': {
        ...DefaultTCGEffectFontData,
        variant: 'tcg-type-stat',
        fontList: [
            { bulletWidth: 40, fontSize: 45.2, lineHeight: 48.1, lineCount: 3, bulletOffset: 1 },
            { bulletWidth: 30, fontSize: 34.2, lineHeight: 36.5, lineCount: 4 },
            { bulletWidth: 26, fontSize: 27.2, lineHeight: 29.5, lineCount: 5 },
            { bulletWidth: 23, fontSize: 24.3, lineHeight: 24.7, lineCount: 6 },
            { bulletWidth: 23, fontSize: 19.95, lineHeight: 21.3, lineCount: 7, bulletOffset: 1 },
            { bulletWidth: 23, fontSize: 18.8, lineHeight: 18.8, lineCount: 8, bulletOffset: 1 },
            { bulletWidth: 19, fontSize: 16.7, lineHeight: 16.7, lineCount: 9, bulletOffset: 1 },
            { bulletWidth: 19, fontSize: 15.0, lineHeight: 15.0, lineCount: 10, bulletOffset: 2 },
        ]
    },
    'tcg-type': {
        ...DefaultTCGEffectFontData,
        variant: 'tcg-type',
        fontList: [
            { bulletWidth: 40, fontSize: 42.2, lineHeight: 43.9, lineCount: 4, bulletOffset: 2 },
            { bulletWidth: 32, fontSize: 33.2, lineHeight: 35.5, lineCount: 5 },
            { bulletWidth: 26, fontSize: 27.2, lineHeight: 29.5, lineCount: 6 },
            { bulletWidth: 23, fontSize: 24.3, lineHeight: 24.7, lineCount: 7 },
            { bulletWidth: 23, fontSize: 19.95, lineHeight: 21.3, lineCount: 8 },
            { bulletWidth: 23, fontSize: 18.8, lineHeight: 18.8, lineCount: 9 },
            { bulletWidth: 20, fontSize: 16.8, lineHeight: 17.7, lineCount: 10, bulletOffset: 1 },
            { bulletWidth: 19, fontSize: 15.1, lineHeight: 16.1, lineCount: 11, bulletOffset: 1 },
            { bulletWidth: 17, fontSize: 14.1, lineHeight: 14.7, lineCount: 12, bulletOffset: 1 },
        ]
    },
    'tcg-pendulumLarge': {
        ...DefaultTCGEffectFontData,
        variant: 'tcg-pendulumLarge',
        fontList: [
            { bulletWidth: 38, fontSize: 37.6, lineHeight: 43.3, lineCount: 4, bulletOffset: 1 },
            { bulletWidth: 32, fontSize: 32.2, lineHeight: 35.6, lineCount: 5, bulletOffset: 1 },
            { bulletWidth: 26, fontSize: 28.7, lineHeight: 30.1, lineCount: 6 },
            { bulletWidth: 23, fontSize: 24.2, lineHeight: 25.8, lineCount: 7 },
            { bulletWidth: 22, fontSize: 19.94, lineHeight: 22.7, lineCount: 8, bulletOffset: 1 },
            { bulletWidth: 20, fontSize: 17.44, lineHeight: 18.55, lineCount: 10, bulletOffset: 1 },
            { bulletWidth: 18, fontSize: 15.8, lineHeight: 16.4, lineCount: 11, bulletOffset: 1 },
            { bulletWidth: 17, fontSize: 14.5, lineHeight: 15.0, lineCount: 12, bulletOffset: 1 },
        ],
    },
    'tcg-pendulumLarge-stat': {
        ...DefaultTCGEffectFontData,
        variant: 'tcg-pendulumLarge-stat',
        fontList: [
            { bulletWidth: 41, fontSize: 40.2, lineHeight: 47.9, lineCount: 3, bulletOffset: 2 },
            { bulletWidth: 34, fontSize: 33.2, lineHeight: 36.0, lineCount: 4 },
            { bulletWidth: 26, fontSize: 27.2, lineHeight: 29.5, lineCount: 5 },
            { bulletWidth: 23, fontSize: 24.3, lineHeight: 24.7, lineCount: 6 },
            { bulletWidth: 20, fontSize: 17.31, lineHeight: 18.65, lineCount: 8, bulletOffset: 1 },
            { bulletWidth: 17, fontSize: 15.5, lineHeight: 16.7, lineCount: 9, bulletOffset: 1 },
            { bulletWidth: 16, fontSize: 14.5, lineHeight: 15.0, lineCount: 10, bulletOffset: 1 },
        ]
    },
    'tcg-pendulumLarge-type-stat': {
        ...DefaultTCGEffectFontData,
        variant: 'tcg-pendulumLarge-type-stat',
        fontList: [
            { bulletWidth: 40, fontSize: 45.2, lineHeight: 54.1, lineCount: 2, bulletOffset: 1 },
            { bulletWidth: 30, fontSize: 34.2, lineHeight: 37.5, lineCount: 3 },
            { bulletWidth: 26, fontSize: 27.2, lineHeight: 28.5, lineCount: 4 },
            { bulletWidth: 23, fontSize: 25.2, lineHeight: 23.3, lineCount: 5 },
            { bulletWidth: 22, fontSize: 19.85, lineHeight: 19.5, lineCount: 6, bulletOffset: 1 },
            { bulletWidth: 20, fontSize: 18.5, lineHeight: 16.9, lineCount: 7, bulletOffset: 1 },
            { bulletWidth: 17, fontSize: 16.1, lineHeight: 14.8, lineCount: 8, bulletOffset: 1 },
            { bulletWidth: 16, fontSize: 13.8, lineHeight: 13.2, lineCount: 9, bulletOffset: 1 },
        ]
    },
    'tcg-pendulumLarge-type': {
        ...DefaultTCGEffectFontData,
        variant: 'tcg-pendulumLarge-type',
        fontList: [
            { bulletWidth: 40, fontSize: 39.8, lineHeight: 45.5, lineCount: 3, bulletOffset: 1 },
            { bulletWidth: 36, fontSize: 33.2, lineHeight: 36.9, lineCount: 4, bulletOffset: 1 },
            { bulletWidth: 28, fontSize: 27.2, lineHeight: 28.8, lineCount: 5 },
            { bulletWidth: 25, fontSize: 22.8, lineHeight: 24.5, lineCount: 6 },
            { bulletWidth: 22, fontSize: 19.95, lineHeight: 21.2, lineCount: 7 },
            { bulletWidth: 20, fontSize: 17.95, lineHeight: 18.5, lineCount: 8, bulletOffset: 1 },
            { bulletWidth: 19, fontSize: 16.0, lineHeight: 16.6, lineCount: 9 },
            { bulletWidth: 18, fontSize: 14.3, lineHeight: 15.0, lineCount: 10, bulletOffset: 1 },
            { bulletWidth: 16, fontSize: 12.5, lineHeight: 13.4, lineCount: 11, bulletOffset: 1 },
        ]
    },
    'ocg': {
        ...DefaultOCGEffectFontData,
        variant: 'ocg',
        fontList: [
            { bulletWidth: 38, fontSize: 43.2, lineHeight: 50.1, lineCount: 4, bulletOffset: 2, headTextFontRatio: 0.25 },
            { bulletWidth: 30, fontSize: 34.7, lineHeight: 40.1, lineCount: 5, bulletOffset: 1, headTextFontRatio: 0.3 },
            { bulletWidth: 26, fontSize: 28.7, lineHeight: 32.8, lineCount: 6, bulletOffset: 1, headTextFontRatio: 0.3 },
            { bulletWidth: 16, fontSize: 22, lineHeight: 26, lineCount: 7 },
            { bulletWidth: 16, fontSize: 22, lineHeight: 26, lineCount: 8 },
        ]
    },
    'ocg-stat': {
        ...DefaultOCGEffectFontData,
        variant: 'ocg-stat',
        fontList: [
            { bulletWidth: 34, fontSize: 38.7, lineHeight: 44.1, lineCount: 4, bulletOffset: 3, headTextFontRatio: 0.25 },
            { bulletWidth: 30, fontSize: 32.7, lineHeight: 36.1, lineCount: 5, bulletOffset: 2, headTextFontRatio: 0.25 },
            { bulletWidth: 26, fontSize: 28.7, lineHeight: 32.8, lineCount: 6, bulletOffset: 1, headTextFontRatio: 0.3 },
            { bulletWidth: 16, fontSize: 22.05, lineHeight: 25.8, lineCount: 7 },
        ]
    },
    'ocg-type-stat': {
        ...DefaultOCGEffectFontData,
        variant: 'ocg-type-stat',
        fontList: [
            { bulletWidth: 41, fontSize: 45.7, lineHeight: 49.8, lineCount: 3, bulletOffset: 3, headTextFontRatio: 0.25 },
            { bulletWidth: 32, fontSize: 34.7, lineHeight: 38.1, lineCount: 4, bulletOffset: 3, headTextFontRatio: 0.25 },
            { bulletWidth: 24, fontSize: 27.7, lineHeight: 30.1, lineCount: 5, bulletOffset: 2, headTextFontRatio: 0.3 },
            { bulletWidth: 16, fontSize: 22.05, lineHeight: 25.8, lineCount: 6 },
        ]
    },
    'ocg-type': {
        ...DefaultOCGEffectFontData,
        variant: 'ocg-type',
        fontList: [
            { bulletWidth: 34, fontSize: 38.7, lineHeight: 44.1, lineCount: 4, bulletOffset: 3, headTextFontRatio: 0.25 },
            { bulletWidth: 30, fontSize: 32.7, lineHeight: 36.1, lineCount: 5, bulletOffset: 2, headTextFontRatio: 0.25 },
            { bulletWidth: 26, fontSize: 28.7, lineHeight: 32.8, lineCount: 6, bulletOffset: 1, headTextFontRatio: 0.3 },
            { bulletWidth: 16, fontSize: 22.05, lineHeight: 25.8, lineCount: 7 },
        ]
    },
    'ocg-pendulumLarge': {
        ...DefaultOCGEffectFontData,
        variant: 'ocg-pendulumLarge',
        fontList: [
            { bulletWidth: 39, fontSize: 45.2, lineHeight: 55.1, lineCount: 3, bulletOffset: 2, headTextFontRatio: 0.25 },
            { bulletWidth: 31, fontSize: 35.7, lineHeight: 44.1, lineCount: 4, bulletOffset: 1, headTextFontRatio: 0.3 },
            { bulletWidth: 27, fontSize: 29.7, lineHeight: 35.8, lineCount: 5, bulletOffset: 1, headTextFontRatio: 0.3 },
            { bulletWidth: 16, fontSize: 22, lineHeight: 26, lineCount: 6 },
            { bulletWidth: 16, fontSize: 22, lineHeight: 26, lineCount: 7 },
        ]
    },
    'ocg-pendulumLarge-stat': {
        ...DefaultOCGEffectFontData,
        variant: 'ocg-pendulumLarge-stat',
        fontList: [
            { bulletWidth: 37, fontSize: 40.7, lineHeight: 48.1, lineCount: 3, bulletOffset: 3, headTextFontRatio: 0.25 },
            { bulletWidth: 30, fontSize: 32.7, lineHeight: 37.1, lineCount: 4, bulletOffset: 2, headTextFontRatio: 0.25 },
            { bulletWidth: 23, fontSize: 25.7, lineHeight: 29.8, lineCount: 5, bulletOffset: 1, headTextFontRatio: 0.3 },
            { bulletWidth: 16, fontSize: 21.05, lineHeight: 24.9, lineCount: 6 },
        ]
    },
    'ocg-pendulumLarge-type-stat': {
        ...DefaultOCGEffectFontData,
        variant: 'ocg-pendulumLarge-type-stat',
        fontList: [
            { bulletWidth: 41, fontSize: 45.7, lineHeight: 54.8, lineCount: 2, bulletOffset: 3, headTextFontRatio: 0.25 },
            { bulletWidth: 32, fontSize: 35.7, lineHeight: 40.1, lineCount: 3, bulletOffset: 3, headTextFontRatio: 0.25 },
            { bulletWidth: 23, fontSize: 26.7, lineHeight: 30.6, lineCount: 4, bulletOffset: 2, headTextFontRatio: 0.3 },
            { bulletWidth: 16, fontSize: 21.05, lineHeight: 24.8, lineCount: 5 },
        ]
    },
    'ocg-pendulumLarge-type': {
        ...DefaultOCGEffectFontData,
        variant: 'ocg-pendulumLarge-type',
        fontList: [
            { bulletWidth: 38, fontSize: 43.7, lineHeight: 49.8, lineCount: 3, bulletOffset: 3, headTextFontRatio: 0.25 },
            { bulletWidth: 31, fontSize: 34.7, lineHeight: 38.1, lineCount: 4, bulletOffset: 3, headTextFontRatio: 0.25 },
            { bulletWidth: 23, fontSize: 26.7, lineHeight: 30.6, lineCount: 5, bulletOffset: 2, headTextFontRatio: 0.3 },
            { bulletWidth: 16, fontSize: 21.05, lineHeight: 25.8, lineCount: 6 },
        ]
    },
};

export type FontStyle = '' | 'italic' | 'small-caps';

export const RegionSpaceWidthMap: Record<string, Record<string, number>> = {
    tcg: {
        default: 1.500,
        pt: 2.825,
    },
    ocg: {
        default: 3.650,
    },
};