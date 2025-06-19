import { AttributeSetMap, DefaultFormatAttribute, InternalCard, ocgToTCGTermMap, tcgToOCGTermMap } from 'src/model';

export const changeCardFormat = (card: InternalCard, targetFormat: string): InternalCard => {
    const {
        creator,
        effect,
        format,
        region,
        isFirstEdition,
        name,
        password,
        pendulumEffect,
        setId,
        typeAbility,
        nameStyle,
    } = card;

    if (format === targetFormat) return card;

    const targetRegion = AttributeSetMap[region].category === targetFormat
        ? region
        : AttributeSetMap[DefaultFormatAttribute[targetFormat]].key;
    const termMap = targetFormat === 'ocg' ? tcgToOCGTermMap : ocgToTCGTermMap;
    const newSetId = (targetFormat === 'ocg' && /-EN/.test(setId))
        ? setId.replace('-EN', '-JP')
        : targetFormat === 'tcg' && /-JP/.test(setId)
            ? setId.replace('-JP', '-EN')
            : setId;
    const nextNameStyle: typeof nameStyle = {
        ...nameStyle,
        font: targetFormat === 'ocg' && nameStyle.font === 'Default'
            ? 'OCG'
            : targetFormat === 'tcg' && nameStyle.font === 'OCG'
                ? 'Default'
                : nameStyle.font,
    };

    return {
        ...card,
        name: termMap[name] ?? name,
        format: targetFormat,
        region: targetRegion,
        effect: termMap[effect] ?? effect,
        pendulumEffect: termMap[pendulumEffect] ?? pendulumEffect,
        typeAbility: typeAbility.map(entry => termMap[entry] ?? entry),
        creator: termMap[creator] ?? creator,
        password: termMap[password] ?? password,
        setId: newSetId,
        isFirstEdition: targetFormat === 'ocg' ? false : isFirstEdition,
        nameStyle: nextNameStyle,
    };
};