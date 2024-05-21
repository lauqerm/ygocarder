import { Card, NameFontDataMap, ocgToTCGTermMap, tcgToOCGTermMap } from 'src/model';
import { checkSpeedSkill } from 'src/util';

export const changeCardFormat = (card: Card, targetFormat: string): Card => {
    const {
        format,
        creator,
        typeAbility,
        nameStyle,
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

    return {
        ...card,
        nameStyle: newNameStyle,
        format: targetFormat,
        typeAbility: typeAbility.map(entry => termMap[entry] ?? entry),
        creator: termMap[creator] ?? creator,
    };
};