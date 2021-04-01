export type FontSize = {
    fontSize: number,
    lineHeight: number,
    lineCount: number,
};
export type BoxSize = {
	width: number,
	top: number,
	left: number,
};

export const monsterFontList: FontSize[] = [
    { fontSize: 17, lineHeight: 17, lineCount: 6 },
    { fontSize: 14, lineHeight: 14, lineCount: 7 },
    { fontSize: 12, lineHeight: 12, lineCount: 8 },
    { fontSize: 11, lineHeight: 11, lineCount: 9 },
    { fontSize: 10, lineHeight: 10, lineCount: 10 },
    { fontSize: 9, lineHeight: 9, lineCount: 11 },
    { fontSize: 8, lineHeight: 8, lineCount: 12 },
];
export const monsterSizeList: BoxSize[] = [
    { width: 463, top: 620, left: 43.89 },
    { width: 463, top: 624, left: 43.89 },
    { width: 463, top: 624, left: 43.89 },
    { width: 463, top: 624, left: 43.89 },
    { width: 463, top: 624, left: 43.89 },
    { width: 463, top: 624, left: 43.89 },
    { width: 463, top: 624, left: 43.89 },
];
export const monsterVanillaFontList: FontSize[] = [
    { fontSize: 16.74, lineHeight: 17.01, lineCount: 6 },
    { fontSize: 16.74, lineHeight: 17.01, lineCount: 7 },
    { fontSize: 16.74, lineHeight: 17.01, lineCount: 8 },
];

export const pendulumFontList: FontSize[] = [
    { fontSize: 16.41, lineHeight: 16.44, lineCount: 5 },
    { fontSize: 16.41, lineHeight: 16.44, lineCount: 5 },
];
export const pendulumSizeList: BoxSize[] = [
    { width: 375, top: 504.5, left: 87.05 },
    { width: 375, top: 504.5, left: 87.05 },
];

export const stFontList: FontSize[] = [
    { fontSize: 16.41, lineHeight: 16.74, lineCount: 8 },
    { fontSize: 13.46, lineHeight: 14.28, lineCount: 10 },
];
export const stSizeList: BoxSize[] = [
    { width: 461, top: 601, left: 45 },
    { width: 461, top: 601, left: 45 },
];

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
export const typeSizeMap: Record<string, TypeSize> = {
    small: {
        top: 622,
        left: 43,
        bracketSize: {
            char: 18.71,
            bracketSpace: 8.51,
            bracketOffsetTop: 1.64,
        },
        upperCaseSize: 20,
        upperCaseScale: 1,
        lowerCaseSize: 16,
        lowerCaseScale: 1.1,
        spaceScale: 1,
        spaceSize: {
            frontSpace: 5,
            char: 21,
            behindSpace: 15,
        },
        iconSpace: 0,
    },
    medium: {
        top: 620.80,
        left: 43,
        bracketSize: {
            char: 19.69,
            bracketSpace: 8.51,
            bracketOffsetTop: 1.64,
        },
        upperCaseSize: 21,
        upperCaseScale: 1,
        lowerCaseSize: 18,
        lowerCaseScale: 0.95,
        spaceScale: 1,
        spaceSize: {
            frontSpace: 5,
            char: 23,
            behindSpace: 15,
        },
        iconSpace: 0,
    },
    large: {
        top: 126,
        left: 494,
        bracketSize: {
            char: 25,
            bracketSpace: 11,
            bracketOffsetTop: 2,
        },
        upperCaseSize: 26,
        upperCaseScale: 1.1,
        lowerCaseSize: 23,
        lowerCaseScale: 1,
        spaceScale: 1.4,
        spaceSize: {
            frontSpace: 5,
            char: 23,
            behindSpace: 15,
        },
        iconSpace: 32,
    },
};