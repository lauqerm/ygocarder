export const normalizeCardName = (name: string) => {
    try {
        return name
        .replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g, '$1')
        .replaceAll(/(^\[|\[\[|{|{{)([^{}[\]]*)[}\]]{1,2}/gm, '$2');
    } catch (e) {
        console.error(e);
        return name;
    }
};
export const normalizeCardEffect = (effect: string) => {
    try {
        return effect
            .replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g, '$1')
            .replaceAll(/(^\[|\[\[|{|{{)([^{}[\]]*)[}\]]{1,2}/gm, '$2');
    } catch (e) {
        console.error(e);
        return effect;
    }
};
/** Sample image before normalization: `https://images.ygoprodeck.com/images/cards_cropped/46986414.jpg`. We convert into yugicrawler - another public API that allow us to bypass the CORS restriction for these images. If yugicrawler decide that it does not want to support our operation, we have no other options except force user to upload the image manually. */
export const isYgoprodeckImage = (link: string) => {
    try {
        return link.startsWith('https://images.ygoprodeck.com/images/cards_cropped');
    } catch (e) {
        console.error(e);
        return false;
    }
};