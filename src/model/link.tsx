export const ArrowPositionMap = {
    normal: [
        { top: 175, left: 55, width: 100, height: 100 },
        { top: 165, left: 323, width: 170, height: 80 },
        { top: 175, left: 655, width: 100, height: 100 },
        { top: 442, left: 45, width: 70, height: 170 },
        { top: 0, left: 0, width: 0, height: 0 },   /** Middle */
        { top: 442, left: 700, width: 70, height: 170 },
        { top: 775, left: 55, width: 100, height: 100 },
        { top: 810, left: 323, width: 170, height: 80 },
        { top: 775, left: 655, width: 100, height: 100 },
    ],
    pendulum: [
        { top: 169, left: 11, width: 100, height: 100 },
        { top: 159, left: 323, width: 170, height: 80 },
        { top: 169, left: 699, width: 100, height: 100 },
        { top: 572, left: 1, width: 70, height: 170 },
        { top: 0, left: 0, width: 0, height: 0 },   /** Middle */
        { top: 572, left: 744, width: 70, height: 170 },
        { top: 1054, left: 11, width: 100, height: 100 },
        { top: 1093, left: 323, width: 170, height: 80 },
        { top: 1054, left: 699, width: 100, height: 100 },
    ],
};
export const LinkRotateList = [-45, 0, 45, -90, 0, 90, -135, 180, 135];
export const LinkIndentList = [-38, -28, -38, -28, 0, -28, -38, -28, -38];
export const LinkPendulumIndentList = [-30, -23, -30, -28, 0, -28, -30, -23, -30];
export const LinkOffsetList = [0, 0, 0, 0, 0, 0, 0, 0, 0];
export const LinkPendulumOffsetList = [-5, 0, 5, 0, 0, 0, 5, 0, -5];
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