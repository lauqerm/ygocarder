// export const scaleCalc = (value: number, range = 1) => {
//     const normalizedValue = Math.max(0.01, value / range);
//     if (normalizedValue === 0) {
//         console.warn('Divided by Zero');
//         return {
//             scaleRatio: 1,
//             translatePercent: '-0%'
//         };
//     }
//     const newRatio = normalizedValue;
//     const newTranslatePercent = Math.round((1 - normalizedValue) / 2 / normalizedValue * 10000) / 100;

//     return {
//         scaleRatio: newRatio,
//         translatePercent: `${newTranslatePercent * -1}%`,
//     };
// };

export const splitEffect = (effect: string, isNormal = false) => {
    let effectBody = effect;

    let effectMaterial = '';
    const materialRegex = /^(\[([^\]]*)\]\s*)/m;
    const materialReplacement = materialRegex.exec(effectBody)?.[1];
    const material = materialRegex.exec(effectBody)?.[2];
    if (material && materialReplacement) {
        effectMaterial = material;
        effectBody = effectBody.replace(materialReplacement, '');
    } else effectMaterial = '';

    let effectFlavorCondition = '';
    const flavorConditionRegex = /(\n^[\r\t\f\v \u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*\([\w\W]+\))\s*$/m;
    const flavorCondition = flavorConditionRegex.exec(effect)?.[1];
    if (flavorCondition && isNormal) {
        effectFlavorCondition = flavorCondition;
        effectBody = effectBody.replace(flavorCondition, '');
    } else effectFlavorCondition = '';

    return {
        material: effectMaterial,
        body: effectBody,
        flavorCondition: effectFlavorCondition
    };
};

export const quoteConvert = (text?: string) => {
    let normalizedString = (text ?? '');
    normalizedString = normalizedString.replace(/(^|[-\u2014\s(["])'/g, '$1\u2018')
        .replace(/'/g, '\u2019')
        .replace(/(^|[-\u2014/[(\u2018\s])"/g, '$1\u201c')
        .replace(/"/g, '\u201d')
        .replace(/--/g, '\u2014');
    return normalizedString;
};

export * from './categorize';
export * from './condenser';
export * from './canvas';