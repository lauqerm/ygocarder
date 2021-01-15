import { Card } from '../model';

export const checkXyz = (card: Card) => card.type_ability.includes('Xyz');
export const checkLink = (card: Card) => card.type_ability.includes('Link');
export const checkMonster = (card: Card) => card.family === 'Monster';