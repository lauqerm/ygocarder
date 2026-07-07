export type CardFlag = [
    ShowDefAndLink: number,
    LinkRatingBehavior: number,
    HideDeactivatedLink: number,
    HideStatLabel: number,
    NameAndStarBelowImage: number,
    LinkOnTop: number,
];
/**
 * Remember, 0 is ALWAYS the default state.
 * 
 * Remember, this is an array, the order of these values are absolute.
 */
export const getDefaultCardFlag = (): CardFlag => [0, LINK_RATING_BEHAVIOR_ALWAYS_AUTO, 0, 0, 0, LINK_ON_TOP_ALWAYS];

export const LINK_RATING_BEHAVIOR_ALWAYS_AUTO = 0;
export const LINK_RATING_BEHAVIOR_ALWAYS_SHOW = 1;
export const LINK_RATING_BEHAVIOR_ALWAYS_HIDE = 2;

export const LINK_ON_TOP_ALWAYS = 0;
export const LINK_ON_TOP_ACTIVATED_ONLY = 1;
export const LINK_ON_TOP_NEVER = 2;

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
    {
        index: 4,
        labelKey: 'input.flag.name-star-below-image',
        type: 'checkbox' as const,
        order: 4,
    },
    {
        index: 5,
        labelKey: 'input.flag.link-on-top',
        type: 'link-on-top' as const,
        order: 5,
    },
];
export const FlagIndexMap = {
    showDefAndLink: 0,
    linkRatingBehavior: 1,
    hideDeactivatedLink: 2,
    hideStatLabel: 3,
    nameStarBelowImage: 4,
    linkOnTop: 5,
};
export const FLAG_LENGTH = FlagInfoList.length;