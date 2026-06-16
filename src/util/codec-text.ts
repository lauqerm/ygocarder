import { Card, IconMap, LinkLabelMap, NO_ATTRIBUTE, NO_ICON } from 'src/model';
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
        name,
        star,
        starList,
        subFamily,
        frame,
        cardIcon,
        attribute,
        attributeImageSource,
        typeAbility,
        isPendulum,
        pendulumScaleBlue,
        pendulumScaleRed,
        atk,
        def,
        linkMap,
        flag,
        isLink,
        setId,
        pendulumEffect,
        effect,
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

    let levelPart = '';
    if (cardIcon === 'user-defined') levelPart = `${star} Stars`;
    else if (cardIcon === 'custom') levelPart = `[${starList.join(' | ')}]`;
    else if (typeof star === 'string') levelPart = `${capitalizeFirstLetter(normalizedCardIconType)} ${star}`;
    else if (['rank', 'negative-level'].includes(normalizedCardIconType)) levelPart = `*${star}`;
    else if (['st'].includes(normalizedCardIconType)) {
        levelPart = `${subFamily === NO_ICON ? 'Normal' : IconMap[subFamily].label} ${frame === 'spell' ? 'Spell' : 'Trap'}`;
    }
    else if (['level', 'grade'].includes(normalizedCardIconType)) levelPart = `${star}*`;
    else {
        levelPart = `${star} ${capitalizeFirstLetter(normalizedCardIconType)}`;
    }

    let attributePart = '';
    if (isMonster) attributePart = `${attributeImageSource === 'auto'
        ? attribute === NO_ATTRIBUTE ? '' : attribute
        : 'Custom Attribute'}`;

    lineList.push(normalizeCardName(name));
    lineList.push([
        levelPart,
        attributePart,
    ].filter(entry => typeof entry === 'string' && entry.length > 0).join(' '));
    lineList.push(typeAbility.map(normalizeCardEffect).join(' / '));
    if (isPendulum) lineList.push(`Pendulum Scale: ${pendulumScaleBlue === pendulumScaleRed
        ? pendulumScaleBlue
        : `${pendulumScaleBlue} - ${pendulumScaleRed}`}`);
    if (statInEffect) lineList.push([
        atk,
        hasDef ? def : '',
        hasLink ? `LINK-${linkMap.length}` : ''
    ].filter(entry => typeof entry === 'string' && entry.length > 0).join(' / '));
    if (isLink && linkMap.length > 0) {
        const sortedLinkList = linkMap.sort((l, r) => parseInt(l) - parseInt(r));
        /** Should we count from top or top-left? */
        const normalizedLinkList = sortedLinkList[0] === '1'
            ? [...sortedLinkList.slice(1), '1']
            : sortedLinkList;
        lineList.push(`Link Markers: ${normalizedLinkList.map(entry => LinkLabelMap[entry]).join(', ')}`);
    }
    if (isPendulum) lineList.push(`[PENDULUM EFFECT]\n${normalizeCardEffect(pendulumEffect)}`);
    if (isPendulum) lineList.push(`[MONSTER EFFECT]\n${normalizeCardEffect(effect)}`);
    else lineList.push(normalizeCardEffect(effect));

    return {
        result: lineList.join('\n'),
        isPartial: false,
    };
};