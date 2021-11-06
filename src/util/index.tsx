export const randomCharacter = (charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', length = 1) => {
    let result           = '';
    const charactersLength = charSet.length;
    for ( let i = 0; i < length; i++) {
        result += charSet.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

export const randomSetID = () => {
    return `${randomCharacter('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 4)}-EN${randomCharacter('0123456789', 3)}`;
};

export const randomPassword = () => {
    return `${randomCharacter('0123456789', 8)}`;
};

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

export function insertUrlParam(key: string, value: string) {
    if (window.history.pushState) {
        let searchParams = new URLSearchParams(window.location.search);
        searchParams.set(key, value);
        let newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?' + searchParams.toString();
        window.history.pushState({ path: newurl }, '', newurl);
    }
}

export * from './categorize';
export * from './condenser';