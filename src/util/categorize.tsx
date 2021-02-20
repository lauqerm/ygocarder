import { Card } from '../model';

export const checkNormal = (card: Pick<Card, 'type_ability' | 'family'>) => card.type_ability.includes('Normal') && checkMonster(card);
export const checkXyz = (card: Pick<Card, 'type_ability' | 'family'>) => card.type_ability.includes('Xyz');
export const checkLink = (card: Pick<Card, 'type_ability' | 'family'>) => card.type_ability.includes('Link') && checkMonster(card) && !checkPendulum(card);
export const checkPendulum = (card: Pick<Card, 'type_ability' | 'family'>) => card.type_ability.includes('Pendulum') && checkMonster(card);
export const checkMonster = (card: Pick<Card, 'family'>) => card.family === 'Monster';