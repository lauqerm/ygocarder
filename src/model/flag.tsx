import { LanguageDataDictionary } from 'src/service';

export type CardFlag = [
    ShowDefAndLink: number,
    LinkRating: number,
];
/**
 * Remember, 0 is ALWAYS the default state.
 */
export const getDefaultCardFlag = (): CardFlag => [0, 0];

export const FlagInfoList = [
    {
        index: 0,
        labelKey: 'input.flag.mix-def-link',
        type: 'checkbox' as const,
        displayKey: (language: LanguageDataDictionary, _value: number) => language['input.flag.mix-def-link'],
    },
    {
        index: 1,
        labelKey: 'input.flag.link-rating-behavior',
        type: 'link-rating-behavior' as const,
        displayKey: (language: LanguageDataDictionary, value: number) => <>
            {language['input.flag.link-rating-behavior']}: {language[value === 1
                ? 'input.flag.link-rating-behavior.show'
                : 'input.flag.link-rating-behavior.hide']}
        </>,
    },
];
export const FlagIndexMap = {
    showDefAndLink: 0,
    linkRating: 1,
};
export const LINK_RATING_ALWAYS_AUTO = 0;
export const LINK_RATING_ALWAYS_SHOW = 1;
export const LINK_RATING_ALWAYS_HIDE = 2;
export const FLAG_LENGTH = FlagInfoList.length;