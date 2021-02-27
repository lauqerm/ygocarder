import { Card } from '../model';

export const checkNormal = (card: Pick<Card, 'type_ability' | 'family'>) => {
    return card.type_ability.findIndex(entry => entry.toUpperCase() === 'NORMAL') >= 0 && checkMonster(card);
};
export const checkXyz = (card: Pick<Card, 'type_ability' | 'family'>) => {
    return card.type_ability.findIndex(entry => entry.toUpperCase() === 'XYZ') >= 0;
};
export const checkLink = (card: Pick<Card, 'type_ability' | 'family'>) => {
    return card.type_ability.findIndex(entry => entry.toUpperCase() === 'LINK') >= 0 && checkMonster(card) && !checkPendulum(card);
};
export const checkPendulum = (card: Pick<Card, 'type_ability' | 'family'>) => {
    return card.type_ability.findIndex(entry => entry.toUpperCase() === 'PENDULUM') >= 0 && checkMonster(card);
};
export const checkMonster = (card: Pick<Card, 'family'>) => {
    return card.family === 'Monster';
};