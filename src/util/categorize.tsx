import { Card, defaultMonsterCardType } from '../model';

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

export const getCardFrame = (family: string, subFamily: string, typeAbility: string[]) => {
    let type = 'Effect';
    if (family !== 'Monster') return family;
    // This list is sorted as the priority already
    defaultMonsterCardType.forEach(entry => {
        if (typeAbility.includes(entry)) type = entry;
    });
    
    return type.toLowerCase();
};