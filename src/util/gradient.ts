import { ColorPoint } from 'react-linear-gradient-picker';
import { getDefaultNameStyle } from 'src/model';

export const getDefaultGradientPalette = (): ColorPoint[] => parsePalette(getDefaultNameStyle().gradientColor);

export const stringifyPalette = (palette?: ColorPoint[]) => (palette ?? []).map(({ color, offset }) => `${offset}|${color}`).join(',');
export const parsePalette = (stringifiedPalette?: string): ColorPoint[] => stringifiedPalette
    ? stringifiedPalette.split(',')
        .map((entry, index) => {
            const [offset, color] = entry.split('|');

            return { color, offset, id: index + 1 };
        })
    : parsePalette(getDefaultNameStyle().gradientColor);