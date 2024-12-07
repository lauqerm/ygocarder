export const normalizedCardName = (name: string) => {
    try {
        return name.replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g, '$1');
    } catch (e) {
        console.error(e);
        return name;
    }
};
export const normalizedCardEffect = (effect: string) => {
    try {
        return effect.replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g, '$1');
    } catch (e) {
        console.error(e);
        return effect;
    }
};