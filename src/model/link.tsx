export const ArrowPositionList = [
    { top: 175, left: 55, width: 100, height: 100 },
    { top: 165, left: 323, width: 170, height: 80 },
    { top: 175, left: 655, width: 100, height: 100 },
    { top: 442, left: 45, width: 70, height: 170 },
    { top: 0, left: 0, width: 0, height: 0 },   /** Middle */
    { top: 442, left: 700, width: 70, height: 170 },
    { top: 775, left: 55, width: 100, height: 100 },
    { top: 810, left: 323, width: 170, height: 80 },
    { top: 775, left: 655, width: 100, height: 100 },
];
export const LinkRotateList = [-45, 0, 45, -90, 0, 90, -135, 180, 135];
export const LinkIndentList = [-38, -27, -38, -27, 0, -27, -38, -27, -38];
export const LinkRotateMap: Record<string, number> = {
    '1': LinkRotateList[0],
    '2': LinkRotateList[1],
    '3': LinkRotateList[2],
    '4': LinkRotateList[3],
    '6': LinkRotateList[5],
    '7': LinkRotateList[6],
    '8': LinkRotateList[7],
    '9': LinkRotateList[8],
};
export const LinkIconMap: Record<string, string> = {
    '1': '🡔',
    '2': '🡑',
    '3': '🡕',
    '4': '🡐',
    '6': '🡒',
    '7': '🡗',
    '8': '🡓',
    '9': '🡖',
};