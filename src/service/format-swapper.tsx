import { Card, NameFontDataMap, ocgToTCGTermMap, tcgToOCGTermMap } from 'src/model';
import { checkSpeedSkill } from 'src/util';

export const changeCardFormat = (card: Card, targetFormat: string): Card => {
    const {
        format,
        creator,
        typeAbility,
        nameStyle,
        setId,
        isFirstEdition,
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
        nameStyle: newNameStyle,
        format: targetFormat,
        typeAbility: typeAbility.map(entry => termMap[entry] ?? entry),
        creator: termMap[creator] ?? creator,
        setId: newSetId,
        isFirstEdition: targetFormat === 'ocg' ? false : isFirstEdition,
    };
};