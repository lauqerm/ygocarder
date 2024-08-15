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
            symbolFontRatio: 0.775,
            furiganaFont: 'DFHSGothic-W3-WIN-RKSJ-H',
            fontList: [{
                bulletSymbolWidth: 64,
                fontSize: 95.67,
                lineCount: 1,
                lineHeight: 95.67,
                offsetY: 0,
                headTextFontRatio: 0.190,
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
            symbolFontRatio: 0.775,
            weight: 'bold',
            furiganaFont: 'DFHSGothic-W3-WIN-RKSJ-H',
            fontList: [{
                bulletSymbolWidth: 40.67,
                fontSize: 61,
                letterSpacing: -0.14,
                lineCount: 1,
                lineHeight: 61,
                offsetY: 3,
                headTextFontRatio: 0.190,
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
            symbolFontRatio: 0.775,
            numberFont: 'DFKakuTaiHiStd-W4',
            numberFontRatio: 1.00,
            ordinalFont: '"DFKakuTaiHiStd-W4"',
            metricMethod: 'name',
            furiganaFont: 'DFHSGothic-W3-WIN-RKSJ-H',
            headTextHeightRatio: 0.775,
            headTextOverflow: 'condense',
            fontList: [{
                headTextFontRatio: 0.190,
                bulletSymbolWidth: 42.67,
                fontSize: 64,
                lineCount: 1,
                lineHeight: 64,
                offsetY: 0,
                headTextSpacing: 3,
            }],
        }
    },
};