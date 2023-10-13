import {CardType} from '../types';

export const transformCardData = (cards: CardType[]) => {
  return cards.map((card, index) => {
    const isBlack = index % 2 !== 0;
    return {
      ...card,
      isBlack,
      cardName: isBlack ? 'Black Card' : 'Green Card',
    };
  });
};
