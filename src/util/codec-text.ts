import { Card, IconMap, tcgLinkLabelMap, NO_ATTRIBUTE, tcgToOCGTermMap, ocgLinkLabelMap } from 'src/model';
import { normalizeCardEffect, normalizeCardName } from './normalize';
import { checkDiplayLinkRating, checkMonster, getCardIconFromFrame } from './categorize';
import { capitalizeFirstLetter } from './other';

export const ygoCarderToTextData = (
    card: Card,
    _artRef?: HTMLCanvasElement | null,
): {
    result: string,
    isPartial: boolean,
} => {
    const lineList: string[] = [];
    const {
        atk,
        attribute,
        attributeImageSource,
        cardIcon,
        def,
        effect,
        flag,
        format,
        frame,
        isLink,
        isPendulum,
        linkMap,
        name,
        pendulumEffect,
        pendulumScaleBlue,
        pendulumScaleRed,
        setId,
        star,
        starList,
        subFamily,
        typeAbility,
    } = card;
    const normalizedCardIconType = cardIcon === 'auto' ? getCardIconFromFrame(frame) : cardIcon;
    const [
        showDefAndLinkFlag,
        linkRatingDisplayMode,
    ] = flag;
    const isMonster = checkMonster(card);
    const isLinkST = !isPendulum && !isMonster && isLink && !(atk || def);
    const showLinkRating = checkDiplayLinkRating(linkRatingDisplayMode, isLink) && !isLinkST;
    const showDefAndLink = showLinkRating && showDefAndLinkFlag;
    const hasDef = showLinkRating
        ? !!def && showDefAndLink
        : !!def;
    const hasLink = showLinkRating;
    const statInEffect = !!(atk || def)
        || showLinkRating
        || !!(isPendulum && setId);
    const slash = format === 'tcg' ? ' / ' : '／';

    let levelPart = '';
    if (normalizedCardIconType === 'none') levelPart = '';
    else if (normalizedCardIconType === 'user-defined') levelPart = `${star} ${format === 'tcg' ? 'Stars' : '星'}`;
    else if (normalizedCardIconType === 'custom') levelPart = `[${starList.join(' | ')}]`;
    else if (typeof star === 'string') levelPart = `${capitalizeFirstLetter(normalizedCardIconType)} ${star}`;
    else if (['rank', 'negative-level'].includes(normalizedCardIconType)) levelPart = `*${star}`;
    else if (['st'].includes(normalizedCardIconType)) {
        if (format === 'tcg') {
            const subFamilyLabel = IconMap[subFamily].label;
            const familyLabel = frame === 'spell' ? 'Spell' : 'Trap';
            levelPart = `${subFamilyLabel} ${familyLabel}`;
        } else {
            const subFamilyLabel = IconMap[subFamily].ocgLabel;
            const familyLabel = frame === 'spell' ? '魔法カード' : '罠カード';
            const customTypeAbility = typeAbility.map(normalizeCardEffect).join(slash);
            levelPart = customTypeAbility !== familyLabel
                ? customTypeAbility
                : `${subFamilyLabel}${familyLabel}`;
        }
    }
    else if (['level', 'grade'].includes(normalizedCardIconType)) levelPart = `${star}*`;
    else {
        levelPart = `${star} ${capitalizeFirstLetter(normalizedCardIconType)}`;
    }

    let attributePart = '';
    if (isMonster) attributePart = `${attributeImageSource === 'auto'
        ? attribute === NO_ATTRIBUTE ? '' : (format === 'tcg' ? attribute : tcgToOCGTermMap[attribute])
        : format === 'tcg' ? 'Custom Attribute' : 'カスタム属性'}`;

    lineList.push(normalizeCardName(name));
    lineList.push([
        levelPart,
        isMonster ? attributePart : '',
    ].filter(entry => typeof entry === 'string' && entry.length > 0).join(' '));
    if (isMonster) lineList.push(typeAbility.map(normalizeCardEffect).join(slash));
    if (isPendulum) lineList.push(`${format === 'tcg' ? 'Pendulum Scale' : 'ペンデュラムスケール'}: ${pendulumScaleBlue === pendulumScaleRed
        ? pendulumScaleBlue
        : `${pendulumScaleBlue} - ${pendulumScaleRed}`}`);
    if (statInEffect) lineList.push([
        atk,
        hasDef ? def : '',
        hasLink ? `LINK-${linkMap.length}` : ''
    ].filter(entry => typeof entry === 'string' && entry.length > 0).join(slash));
    if (isLink && linkMap.length > 0) {
        const sortedLinkList = linkMap.sort((l, r) => parseInt(l) - parseInt(r));
        /** Should we count from top or top-left? */
        const normalizedLinkList = sortedLinkList[0] === '1'
            ? [...sortedLinkList.slice(1), '1']
            : sortedLinkList;
        lineList.push(`${format === 'tcg' ? 'Link Markers' : 'リンクマーカー'}: ${normalizedLinkList.map(entry => {
            return format === 'tcg' ? tcgLinkLabelMap[entry] : ocgLinkLabelMap[entry];
        }).join(format === 'tcg' ? ', ' : '、')}`);
    }
    if (isPendulum) lineList.push(`${format === 'tcg' ? '[PENDULUM EFFECT]' : '【ペンデュラム効果】'}\n${normalizeCardEffect(pendulumEffect)}`);
    if (isPendulum) lineList.push(`${format === 'tcg' ? '[MONSTER EFFECT]' : '【効果】'}\n${normalizeCardEffect(effect)}`);
    else lineList.push(normalizeCardEffect(effect));

    return {
        result: lineList.filter(entry => entry.length !== 0).join('\n'),
        isPartial: false,
    };
};