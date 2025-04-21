import {
    DefaultOCGEffectFontData,
    DefaultTCGEffectFontData,
    DefaultTCGNormalFontData,
    FontData,
} from './font-data-effect';

/** OCG does not have different fonts between normal and effect monsters */
export const PendulumNormalFontData: Record<string, FontData> = {
    'tcg-small': {
        ...DefaultTCGNormalFontData,
        fontList: [
            { bulletWidth: 36, fontSize: 36.3, lineHeight: 37.20, lineCount: 2, bulletOffset: 1 },
            { bulletWidth: 36, fontSize: 36.3, lineHeight: 37.20, lineCount: 2, bulletOffset: 1 },
            { bulletWidth: 36, fontSize: 36.3, lineHeight: 37.20, lineCount: 2, bulletOffset: 1 },
            { bulletWidth: 26, fontSize: 24.3, lineHeight: 25.65, lineCount: 3, bulletOffset: 1 },
            { bulletWidth: 19, fontSize: 18.5, lineHeight: 19.23, lineCount: 4, bulletOffset: 3 },
            { bulletWidth: 18, fontSize: 14.8, lineHeight: 15.78, lineCount: 5, bulletOffset: 3 },
            { bulletWidth: 16, fontSize: 12.4, lineHeight: 13.32, lineCount: 6, bulletOffset: 2 },
        ],
    },
    'tcg-medium': {
        ...DefaultTCGNormalFontData,
        fontList: [
            { bulletWidth: 41, fontSize: 50.3, lineHeight: 56.35, lineCount: 2 },
            { bulletWidth: 34, fontSize: 35.3, lineHeight: 38.85, lineCount: 3, bulletOffset: 2 },
            { bulletWidth: 27, fontSize: 26.3, lineHeight: 29.35, lineCount: 4, bulletOffset: 3 },
            { bulletWidth: 23, fontSize: 24.3, lineHeight: 24.35, lineCount: 5 },
            { bulletWidth: 19, fontSize: 19.5, lineHeight: 20.23, lineCount: 6 },
            { bulletWidth: 18, fontSize: 17.0, lineHeight: 17.40, lineCount: 7, bulletOffset: 1 },
            { bulletWidth: 16, fontSize: 14.7, lineHeight: 15.32, lineCount: 8 },
        ],
    },
    'tcg-large': {
        ...DefaultTCGNormalFontData,
        fontList: [
            { bulletWidth: 36, fontSize: 35.3, lineHeight: 37.65, lineCount: 4, bulletOffset: 1 },
            { bulletWidth: 30, fontSize: 28.3, lineHeight: 30.35, lineCount: 5, bulletOffset: 2 },
            { bulletWidth: 26, fontSize: 24.3, lineHeight: 25.85, lineCount: 6, bulletOffset: 2 },
            { bulletWidth: 23, fontSize: 20.7, lineHeight: 22.05, lineCount: 7, bulletOffset: 2 },
            { bulletWidth: 19, fontSize: 18.5, lineHeight: 19.33, lineCount: 8, bulletOffset: 1 },
            { bulletWidth: 18, fontSize: 16.8, lineHeight: 17.30, lineCount: 9, bulletOffset: 1 },
            { bulletWidth: 16, fontSize: 14.7, lineHeight: 15.52, lineCount: 10 },
        ],
    },
};
export const PendulumEffectFontData: Record<string, FontData> = {
    'tcg-small': {
        ...DefaultTCGEffectFontData,
        fontList: [
            { bulletWidth: 36, fontSize: 36.3, lineHeight: 37.20, lineCount: 2, bulletOffset: 1 },
            { bulletWidth: 36, fontSize: 36.3, lineHeight: 37.20, lineCount: 2, bulletOffset: 1 },
            { bulletWidth: 36, fontSize: 36.3, lineHeight: 37.20, lineCount: 2, bulletOffset: 1 },
            { bulletWidth: 26, fontSize: 24.3, lineHeight: 25.65, lineCount: 3, bulletOffset: 1 },
            { bulletWidth: 19, fontSize: 18.5, lineHeight: 19.23, lineCount: 4, bulletOffset: 3 },
            { bulletWidth: 18, fontSize: 14.8, lineHeight: 15.78, lineCount: 5, bulletOffset: 3 },
            { bulletWidth: 16, fontSize: 12.4, lineHeight: 13.32, lineCount: 6, bulletOffset: 2 },
        ],
    },
    'tcg-medium': {
        ...DefaultTCGEffectFontData,
        fontList: [
            { bulletWidth: 41, fontSize: 50.3, lineHeight: 56.35, lineCount: 2 },
            { bulletWidth: 34, fontSize: 35.3, lineHeight: 38.85, lineCount: 3, bulletOffset: 2 },
            { bulletWidth: 27, fontSize: 26.3, lineHeight: 29.35, lineCount: 4, bulletOffset: 3 },
            { bulletWidth: 23, fontSize: 24.3, lineHeight: 24.35, lineCount: 5 },
            { bulletWidth: 19, fontSize: 19.5, lineHeight: 20.23, lineCount: 6 },
            { bulletWidth: 18, fontSize: 17.0, lineHeight: 17.40, lineCount: 7, bulletOffset: 1 },
            { bulletWidth: 16, fontSize: 14.7, lineHeight: 15.32, lineCount: 8 },
        ],
    },
    'tcg-large': {
        ...DefaultTCGEffectFontData,
        fontList: [
            { bulletWidth: 36, fontSize: 35.3, lineHeight: 37.65, lineCount: 4, bulletOffset: 1 },
            { bulletWidth: 30, fontSize: 28.3, lineHeight: 30.35, lineCount: 5, bulletOffset: 2 },
            { bulletWidth: 26, fontSize: 24.3, lineHeight: 25.85, lineCount: 6, bulletOffset: 2 },
            { bulletWidth: 23, fontSize: 20.7, lineHeight: 22.05, lineCount: 7, bulletOffset: 2 },
            { bulletWidth: 19, fontSize: 18.5, lineHeight: 19.33, lineCount: 8, bulletOffset: 1 },
            { bulletWidth: 18, fontSize: 16.8, lineHeight: 17.30, lineCount: 9, bulletOffset: 1 },
            { bulletWidth: 16, fontSize: 14.7, lineHeight: 15.52, lineCount: 10 },
        ],
    },
    'ocg-small': {
        ...DefaultOCGEffectFontData,
        fontList: [
            { bulletWidth: 35, fontSize: 38.55, lineHeight: 39.2, headTextFontRatio: 0.2, lineCount: 2, bulletOffset: 3 },
            { bulletWidth: 35, fontSize: 38.55, lineHeight: 39.2, headTextFontRatio: 0.2, lineCount: 2, bulletOffset: 3 },
            { bulletWidth: 35, fontSize: 38.55, lineHeight: 39.2, headTextFontRatio: 0.2, lineCount: 2, bulletOffset: 3 },
            { bulletWidth: 16, fontSize: 22.05, lineHeight: 26.6, headTextFontRatio: 0.3, lineCount: 3 },
        ],
    },
    'ocg-medium': {
        ...DefaultOCGEffectFontData,
        fontList: [
            { bulletWidth: 41, bulletOffset: 3, fontSize: 45.55, lineHeight: 57.6, headTextFontRatio: 0.2, lineCount: 2 },
            { bulletWidth: 31, bulletOffset: 2, fontSize: 35.55, lineHeight: 40.6, lineCount: 3 },
            { bulletWidth: 23, bulletOffset: 1, fontSize: 25.05, lineHeight: 30.6, lineCount: 4 },
            { bulletWidth: 16, fontSize: 22.05, lineHeight: 25.2, lineCount: 5 },
        ],
    },
    'ocg-large': {
        ...DefaultOCGEffectFontData,
        fontList: [
            { bulletWidth: 37, fontSize: 43.55, lineHeight: 49.6, headTextFontRatio: 0.25, lineCount: 3, bulletOffset: 3 },
            { bulletWidth: 29, fontSize: 32.55, lineHeight: 38.6, lineCount: 4, bulletOffset: 1 },
            { bulletWidth: 23, fontSize: 25.05, lineHeight: 30.6, lineCount: 5, bulletOffset: 1 },
            { bulletWidth: 16, fontSize: 22.05, lineHeight: 25.9, lineCount: 6 },
        ],
    },
};