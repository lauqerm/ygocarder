import { FontData } from './font-data-effect';

export const tcgCreatorFontData: FontData = {
    font: 'stone-serif-regular',
    alphabetFont: 'stone-serif-regular',
    symbolFont: 'matrix',
    symbolFontRatio: 0.8,
    ordinalFont: 'stone-serif-regular',
    furiganaFont: 'DFHSGothic-W3-WIN-RKSJ-H',
    fontList: [
        {
            offsetY: -1,
            bulletSymbolWidth: 20.05,
            fontSize: 21.2,
            lineHeight: 21.2,
            lineCount: 1,
            letterSpacing: -0.01,
            overheadFontRatio: 0.4,
            largeSymbolRatio: 1.25,
        },
        {
            bulletSymbolWidth: 20.05,
            fontSize: 20,
            lineHeight: 20,
            lineCount: 1,
            letterSpacing: -0.01,
            overheadFontRatio: 0.4,
            largeSymbolRatio: 1.25,
        },
    ],
};
export const ocgCreatorFontData: FontData = {
    font: '"FOT-Rodin Pro M"',
    alphabetFont: '"FOT-Rodin Pro M"',
    symbolFont: 'matrix',
    symbolFontRatio: 0.8,
    ordinalFont: '"DFKakuTaiHiStd-W4"',
    furiganaFont: 'DFHSGothic-W3-WIN-RKSJ-H',
    metricMethod: 'creator',
    fontList: [{
        bulletSymbolWidth: 18,
        fontSize: 19.0,
        letterSpacing: -0.11,
        lineHeight: 20.5,
        lineCount: 1,
        overheadFontRatio: 0,
        wordLetterSpacing: 0.11,
    }],
};
export const CreatorFontData: Record<string, FontData> = {
    tcg: tcgCreatorFontData,
    ocg: ocgCreatorFontData,
};

export const tcgTypeAbilityFontData: FontData = {
    font: 'YuGiOhITCStoneSerifBSc',
    alphabetFont: 'YuGiOhITCStoneSerifBSc',
    symbolFont: 'matrix',
    symbolFontRatio: 0.8,
    ordinalFont: 'YuGiOhITCStoneSerifBSc',
    furiganaFont: 'DFHSGothic-W3-WIN-RKSJ-H',
    fontList: [
        {
            bulletSymbolWidth: 20.05,
            fontSize: 31.5,
            lineHeight: 31.5,
            lineCount: 1,
            capitalLetterRatio: 0.95,
            letterSpacing: 0.02,
            overheadFontRatio: 0.4,
        },
        {
            bulletSymbolWidth: 21.80,
            fontSize: 32.75,
            lineHeight: 32.75,
            lineCount: 1,
            capitalLetterRatio: 0.95,
            letterSpacing: 0.03,
            overheadFontRatio: 0.4,
        },
        {
            bulletSymbolWidth: 14.80,
            fontSize: 44.5,
            lineHeight: 44.5,
            lineCount: 1,
            iconSymbolWidth: 45,
            // Vì lý do gì đó mà ratio chẵn gây ra lệch baseline cho ký tự
            capitalLetterRatio: 0.90001,
            squareBracketRatio: 0.94001,
            letterSpacing: -0.03,
            overheadFontRatio: 0.4,
        },
    ],
};
export const ocgTypeAbilityFontData: FontData = {
    font: '"Yu-Gi-Oh! DF Leisho 1"',
    alphabetFont: '"Yu-Gi-Oh! DF Leisho 1"',
    symbolFont: 'matrix',
    symbolFontRatio: 0.8,
    ordinalFont: '"DFKakuTaiHiStd-W4"',
    furiganaFont: 'DFHSGothic-W3-WIN-RKSJ-H',
    fontList: [
        {
            bulletSymbolWidth: 20.05,
            fontSize: 25.2,
            lineHeight: 25.2,
            lineCount: 1,
            overheadFontRatio: 0.4,
        },
        {
            bulletSymbolWidth: 21.80,
            fontSize: 26.5,
            lineHeight: 26.5,
            lineCount: 1,
            overheadFontRatio: 0.4,
        },
        {
            bulletSymbolWidth: 14.80,
            fontSize: 48,
            lineHeight: 48,
            lineCount: 1,
            iconSymbolWidth: 45,
            overheadFontRatio: 0.3,
            squareBracketRatio: 1.02501,
        },
    ],
};
export const getTypeAbilityFontData = (): Record<string, FontData> => ({
    tcg: tcgTypeAbilityFontData,
    ocg: ocgTypeAbilityFontData,
});