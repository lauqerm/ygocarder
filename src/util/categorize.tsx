import { Card, frameList } from '../model';

export const checkNormal = (card: Pick<Card, 'frame'>) => {
    return card.frame === 'normal' && checkMonster(card);
};
export const checkXyz = (card: Pick<Card, 'frame'>) => {
    return card.frame === 'xyz';
};
export const checkDarkSynchro = (card: Pick<Card, 'frame'>) => {
    return card.frame === 'dark-synchro';
};
export const checkLink = (card: Pick<Card, 'frame' | 'typeAbility'>) => {
    return card.frame === 'link' && checkMonster(card);
};
export const checkSpeedSkill = (card: Pick<Card, 'frame' | 'typeAbility'>) => {
    return card.frame === 'speed-skill' && !checkMonster(card);
};
export const checkMonster = (card: Pick<Card, 'frame'>) => {
    return card.frame !== 'spell' && card.frame !== 'trap' && card.frame !== 'speed-skill';
};

export const getCardFrame = (frame: string) => {
    return frameList.find(entry => entry.name === frame.toLowerCase())?.name ?? 'effect';
};