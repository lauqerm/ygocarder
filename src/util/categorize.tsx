import { Card, frameType } from '../model';

export const checkNormal = (card: Pick<Card, 'frame'>) => {
    return card.frame === 'normal' && checkMonster(card);
};
export const checkXyz = (card: Pick<Card, 'frame'>) => {
    return card.frame === 'xyz';
};
export const checkLink = (card: Pick<Card, 'frame' | 'typeAbility'>) => {
    return card.frame === 'link' && checkMonster(card);
};
export const checkMonster = (card: Pick<Card, 'frame'>) => {
    return card.frame !== 'spell' && card.frame !== 'trap';
};

export const getCardFrame = (frame: string) => {
    return frameType.find(entry => entry.name === frame.toLowerCase())?.name ?? 'effect';
};