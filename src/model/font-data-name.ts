import { FontData } from './font-data-effect';

export type NameFontData = {
    value: string,
    labelKey: string,
    fontData: FontData,
};
export const NameFontDataMap: Record<'Default' | 'Arial' | 'OCG', NameFontData> = {
    Default: {
        value: 'Default',
        labelKey: 'input.name-style.font-type.default',
        fontData: {
            alphabetFont: 'MatrixRegularSmallCaps',
            font: 'MatrixRegularSmallCaps',
            furiganaFont: 'DFHSGothic-W3-WIN-RKSJ-H',
            ordinalFont: '"DFKakuTaiHiStd-W4"',
            fontStyle: 'tcg',
            symbolFont: 'matrix',
            symbolFontRatio: 0.775,
            headTextHeightRatio: 0.55,
            fontList: [{
                bulletSymbolWidth: 64,
                fontSize: 91.5,
                headTextFontRatio: 0.190,
                letterSpacing: 0.015,
                lineCount: 1,
                lineHeight: 91.5,
                offsetY: 0,
            }],
        },
    },
    Arial: {
        value: 'Arial',
        labelKey: 'input.name-style.font-type.arial',
        fontData: {
            alphabetFont: 'Arial',
            font: 'Arial',
            furiganaFont: 'DFHSGothic-W3-WIN-RKSJ-H',
            ordinalFont: '"DFKakuTaiHiStd-W4"',
            fontStyle: 'tcg',
            symbolFont: 'matrix',
            symbolFontRatio: 0.775,
            headTextHeightRatio: 0.825,
            weight: 'bold',
            fontList: [{
                bulletSymbolWidth: 40.67,
                fontSize: 61,
                headTextFontRatio: 0.190,
                letterSpacing: -0.14,
                lineCount: 1,
                lineHeight: 61,
                offsetY: 3,
            }],
        },
    },
    OCG: {
        value: 'OCG',
        labelKey: 'input.name-style.font-type.ocg',
        fontData: {
            alphabetFont: '"Yu-Gi-Oh! DF Leisho 3"',
            font: '"Yu-Gi-Oh! DF Leisho 3"',
            furiganaFont: 'DFHSGothic-W3-WIN-RKSJ-H',
            headTextHeightRatio: 0.775,
            headTextOverflow: 'condense',
            metricMethod: 'name',
            numberFont: 'DFKakuTaiHiStd-W4',
            numberFontRatio: 1.00,
            ordinalFont: '"DFKakuTaiHiStd-W4"',
            symbolFont: 'matrix',
            symbolFontRatio: 0.775,
            fontStyle: 'ocg',
            fontList: [{
                bulletSymbolWidth: 42.67,
                fontSize: 64,
                headTextFontRatio: 0.190,
                headTextSpacing: 3,
                letterSpacing: -0.03,
                lineCount: 1,
                lineHeight: 64,
                offsetY: 0,
            }],
        }
    },
};