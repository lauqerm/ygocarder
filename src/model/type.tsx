import { UP_RATIO } from './canvas';

export type TypeSize = {
	top: number,
	left: number,
    bracketSize: {
        char: number,
        bracketSpace: number,
        bracketOffsetTop: number,
    },
    upperCaseSize: number,
    upperCaseScale: number,
    lowerCaseSize: number,
    lowerCaseScale: number,
    spaceScale: number,
    spaceSize: {
        frontSpace: number,
        char: number,
        behindSpace: number,
    },
    iconSpace: number,
};
export const CardTypeSizeMap: Record<string, TypeSize> = {
    small: {
        top: 622 * UP_RATIO,
        left: 43 * UP_RATIO,
        bracketSize: {
            char: 18.71 * UP_RATIO,
            bracketSpace: 8.51 * UP_RATIO,
            bracketOffsetTop: 1.64 * UP_RATIO,
        },
        upperCaseSize: 20 * UP_RATIO,
        upperCaseScale: 1,
        lowerCaseSize: 16 * UP_RATIO,
        lowerCaseScale: 1.1,
        spaceScale: 1,
        spaceSize: {
            frontSpace: 5 * UP_RATIO,
            char: 21 * UP_RATIO,
            behindSpace: 15 * UP_RATIO,
        },
        iconSpace: 0 * UP_RATIO,
    },
    medium: {
        top: 620.80 * UP_RATIO,
        left: 43 * UP_RATIO,
        bracketSize: {
            char: 19.69 * UP_RATIO,
            bracketSpace: 8.51 * UP_RATIO,
            bracketOffsetTop: 1.64 * UP_RATIO,
        },
        upperCaseSize: 21 * UP_RATIO,
        upperCaseScale: 1,
        lowerCaseSize: 18 * UP_RATIO,
        lowerCaseScale: 0.95,
        spaceScale: 1,
        spaceSize: {
            frontSpace: 5 * UP_RATIO,
            char: 23 * UP_RATIO,
            behindSpace: 15 * UP_RATIO,
        },
        iconSpace: 0 * UP_RATIO,
    },
    large: {
        top: 126 * UP_RATIO,
        left: 494 * UP_RATIO,
        bracketSize: {
            char: 25 * UP_RATIO,
            bracketSpace: 11 * UP_RATIO,
            bracketOffsetTop: 2 * UP_RATIO,
        },
        upperCaseSize: 26 * UP_RATIO,
        upperCaseScale: 1.1,
        lowerCaseSize: 23 * UP_RATIO,
        lowerCaseScale: 1,
        spaceScale: 1.4,
        spaceSize: {
            frontSpace: 5 * UP_RATIO,
            char: 23 * UP_RATIO,
            behindSpace: 15 * UP_RATIO,
        },
        iconSpace: 32 * UP_RATIO,
    },
};