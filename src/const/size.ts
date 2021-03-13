export type FontSize = { fontSize: number, lineHeight: number };
export type BoxSize = {
	width: number,
	height?: number,
	top: number,
	left: number,
};

export const monsterFontList: FontSize[] = [
    { fontSize: 17, lineHeight: 17 },
    { fontSize: 14, lineHeight: 14 },
    { fontSize: 11, lineHeight: 11 },
];
export const monsterSizeList: BoxSize[] = [
    { width: 463, top: 621, left: 43.89 },
    { width: 463, top: 624, left: 43.89 },
    { width: 463, top: 624, left: 43.89 },
];
export const monsterVanillaFontList: FontSize[] = [
    { fontSize: 16.74, lineHeight: 17.01 },
    { fontSize: 16.74, lineHeight: 17.01 },
    { fontSize: 16.74, lineHeight: 17.01 },
];

export const pendulumFontList: FontSize[] = [
    { fontSize: 16.41, lineHeight: 16.44 },
    { fontSize: 16.41, lineHeight: 16.44 },
];
export const pendulumSizeList: BoxSize[] = [
    { width: 375, top: 504.5, left: 87.05 },
    { width: 375, top: 504.5, left: 87.05 },
];

// export const typeAbilityList: BoxSize[] = [
//     { width: 465.06, top: 602.03, left: 41.97 },
//     { width: 465.06, top: 601.80, left: 41.97 },
//     { width: 465.06, top: 601.80, left: 41.97 },
// ];

export const stFontList: FontSize[] = [
    { fontSize: 16.41, lineHeight: 16.74 },
    { fontSize: 13.46, lineHeight: 14.28 },
];
export const stSizeList: BoxSize[] = [
    { width: 464.43, top: 605.36, left: 43.89 },
    { width: 463.90, top: 605.64, left: 43.89 },
];