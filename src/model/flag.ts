export type CardFlag = [
    ShowDefAndLink: number,
    LinkRating: number,
];
export const getDefaultCardFlag = (): CardFlag => [0, 0];

export const FlagInfoList = [
    {
        index: 0,
        labelKey: 'input.flag.mix-def-link',
        type: 'checkbox' as const,
    },
    {
        index: 1,
        labelKey: 'input.flag.link-rating-behavior',
        type: 'link-rating-behavior' as const,
    },
];
export const FlagIndexMap = {
    showDefAndLink: 0,
};
export const FLAG_LENGTH = FlagInfoList.length;