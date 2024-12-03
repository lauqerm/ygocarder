export const normalizedCardName = (name: string) => {
    return name.replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g, '$1');
};
export const normalizedCardEffect = (effect: string) => {
    return effect.replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g, '$1');
};