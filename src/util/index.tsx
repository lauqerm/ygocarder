import { clamp } from 'ramda';

export const scaleCalc = (value: number, range = 1) => {
    const normalizedValue = clamp(0, 1, value / range);
    if (normalizedValue === 0) {
        console.warn('Divided by Zero');
        return {
            scaleRatio: 1,
            translatePercent: '-0%'
        };
    }
    const newRatio = normalizedValue;
    const newTranslatePercent = Math.round((1 - normalizedValue) / 2 / normalizedValue * 10000) / 100;

    return {
        scaleRatio: newRatio,
        translatePercent: `-${newTranslatePercent}%`,
    };
};

export const compareFloat = (x: number | string, y: number | string) => {
    const normalizedX = typeof x === 'string' ? parseFloat(x) : x;
    const normalizedY = typeof y === 'string' ? parseFloat(y) : y;

    return Math.round(normalizedX * 100000) - Math.round(normalizedY * 100000);
};

export const px2pt = (value: number) => value * 3 / 4;
export const pt2px = (value: number) => value * 4 / 3;

export const quoteConvert = (text?: string) => {
    let normalizedString = (text ?? '');
    normalizedString = normalizedString.replace(/(^|[-\u2014\s(["])'/g, '$1\u2018')
        .replace(/'/g, '\u2019')
        .replace(/(^|[-\u2014/[(\u2018\s])"/g, '$1\u201c')
        .replace(/"/g, '\u201d')
        .replace(/--/g, '\u2014');
    return normalizedString;
};