import { Card, NameFontDataMap, ocgToTCGTermMap, tcgToOCGTermMap } from 'src/model';
import { checkSpeedSkill } from 'src/util';

export const changeCardFormat = (card: Card, targetFormat: string): Card => {
    const {
        name,
        format,
        creator,
        typeAbility,
        nameStyle,
        setId,
        isFirstEdition,
        effect,
    } = card;

    if (format === targetFormat) return card;

    const isSpeedSkill = checkSpeedSkill(card);
    const termMap = targetFormat === 'ocg' ? tcgToOCGTermMap : ocgToTCGTermMap;
    const newNameStyle = { ...nameStyle };
    if (isSpeedSkill) {
        newNameStyle.font = NameFontDataMap['Arial'].value;
    } else {
        newNameStyle.font = NameFontDataMap[targetFormat === 'ocg' ? 'OCG' : 'Default'].value;
    }
    const newSetId = (targetFormat === 'ocg' && /-EN/.test(setId))
        ? setId.replace('-EN', '-JP')
        : targetFormat === 'tcg' && /-JP/.test(setId)
            ? setId.replace('-JP', '-EN')
            : setId;

    return {
        ...card,
        name: termMap[name] ?? name,
        nameStyle: newNameStyle,
        format: targetFormat,
        effect: termMap[effect] ?? effect,
        typeAbility: typeAbility.map(entry => termMap[entry] ?? entry),
        creator: termMap[creator] ?? creator,
        setId: newSetId,
        isFirstEdition: targetFormat === 'ocg' ? false : isFirstEdition,
    };
};