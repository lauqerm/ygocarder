export type CardFlag = [
    ShowDefAndLink: number,
    LinkRating: number,
    HideDeactivatedLink: number,
    HideStatLabel: number,
];
/**
 * Remember, 0 is ALWAYS the default state.
 * 
 * Remember, this is an array, the order of these values are absolute.
 */
export const getDefaultCardFlag = (): CardFlag => [0, 0, 0, 0];

export const LINK_RATING_ALWAYS_AUTO = 0;
export const LINK_RATING_ALWAYS_SHOW = 1;
export const LINK_RATING_ALWAYS_HIDE = 2;

export const FlagInfoList = [
    {
        index: 0,
        labelKey: 'input.flag.mix-def-link',
        type: 'checkbox' as const,
        order: 0,
    },
    {
        index: 1,
        labelKey: 'input.flag.link-rating-behavior',
        type: 'link-rating-behavior' as const,
        order: 3,
    },
    {
        index: 2,
        labelKey: 'input.flag.hide-deactivated-link',
        type: 'checkbox' as const,
        order: 1,
    },
    {
        index: 3,
        labelKey: 'input.flag.stat-label',
        type: 'checkbox' as const,
        order: 2,
    },
];
export const FlagIndexMap = {
    showDefAndLink: 0,
    linkRating: 1,
    hideDeactivatedLink: 2,
    hideStatLabel: 3,
};
export const FLAG_LENGTH = FlagInfoList.length;