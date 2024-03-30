import { ColorPoint } from 'react-linear-gradient-picker';

export const getDefaultGradientPalette = (): ColorPoint[] => ([
    { offset: '0.00', color: '#eef10b', id: 1 },
    { offset: '0.5', color: '#d78025', id: 2 },
    { offset: '1.00', color: '#7e20cf', id: 3 }
]);
export const stringifyPalette = (palette?: ColorPoint[]) => (palette ?? []).map(({ color, offset }) => `${offset}|${color}`).join(',');
export const parsePalette = (stringifiedPalette?: string): ColorPoint[] => stringifiedPalette
    ? stringifiedPalette.split(',')
        .map((entry, index) => {
            const [offset, color] = entry.split('|');

            return { color, offset, id: index + 1 };
        })
    : getDefaultGradientPalette();