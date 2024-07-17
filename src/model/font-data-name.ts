import { FontData } from './font-data-effect';

export type NameFontData = {
    value: string,
    label: React.ReactNode,
    fontData: FontData,
};
export const NameFontDataMap: Record<'Default' | 'Arial' | 'OCG', NameFontData> = {
    Default: {
        value: 'Default',
        label: 'Default',
        fontData: {
            alphabetFont: 'MatrixRegularSmallCaps',
            font: 'MatrixRegularSmallCaps',
            ordinalFont: '"DFKakuTaiHiStd-W4"',
            symbolFont: 'matrix',
            symbolFontRatio: 0.8,
            fontList: [{
                bulletSymbolWidth: 64,
                fontSize: 95.67,
                lineCount: 1,
                lineHeight: 95.67,
                offsetY: 0,
                overheadFontRatio: 0.225,
            }],
        },
    },
    Arial: {
        value: 'Arial',
        label: 'Arial (Bold)',
        fontData: {
            alphabetFont: 'Arial',
            font: 'Arial',
            ordinalFont: '"DFKakuTaiHiStd-W4"',
            symbolFont: 'matrix',
            symbolFontRatio: 0.8,
            weight: 'bold',
            fontList: [{
                bulletSymbolWidth: 40.67,
                fontSize: 61,
                letterSpacing: -0.14,
                lineCount: 1,
                lineHeight: 61,
                offsetY: 3,
                overheadFontRatio: 0.225,
            }],
        },
    },
    OCG: {
        value: 'OCG',
        label: 'OCG',
        fontData: {
            font: '"Yu-Gi-Oh! DF Leisho 3"',
            alphabetFont: '"Yu-Gi-Oh! DF Leisho 3"',
            symbolFont: 'matrix',
            symbolFontRatio: 0.8,
            numberFont: 'DFKakuTaiHiStd-W4',
            numberFontRatio: 1.00,
            ordinalFont: '"DFKakuTaiHiStd-W4"',
            metricMethod: 'name',
            fontList: [{
                overheadFontRatio: 0.25,
                bulletSymbolWidth: 42.67,
                fontSize: 64,
                lineCount: 1,
                lineHeight: 64,
                offsetY: 0,
                overheadTextSpacing: -1,
            }],
        }
    },
};

export const BREAKABLE_LETTER = '\\s\\-/';
export const START_OF_LINE_GAP = 0;
export const LETTER_GAP_RATIO = -0.4;