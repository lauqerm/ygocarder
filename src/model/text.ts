export type CondenseType = 'veryStrict' | 'veryLoose' | 'strict' | 'loose' | 'relaxed';

export type TextStyle = {
    fontStyle: string,
    letterSpacingRatio: number,
    offsetY: number,
    offsetX: number,
    value: string,
    label: React.ReactNode,
}
export const TextStyleMap: Record<string, TextStyle> = {
    Default: {
        value: 'Default',
        label: 'Default',
        fontStyle: '95.67px MatrixRegularSmallCaps',
        letterSpacingRatio: 0,
        offsetY: 0,
        offsetX: 0,
    },
    Arial: {
        value: 'Arial',
        label: 'Arial (Bold)',
        fontStyle: 'bold 61px Arial',
        letterSpacingRatio: -0.18,
        offsetY: 3,
        offsetX: 0,
    },
    OCG: {
        value: 'OCG',
        label: 'OCG',
        fontStyle: 'small-caps 64px "Yu-Gi-Oh! DF Leisho 3"',
        letterSpacingRatio: 0.01,
        offsetY: 0,
        offsetX: 5,
    }
};

export const BREAKABLE_LETTER = '\\s\\-/';