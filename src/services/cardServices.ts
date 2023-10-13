import {CardState, CardType} from '../types';

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

export interface CardsStateType {
  [key: string]: number;
}

export const initCardsState = (cards: CardType[]): CardsStateType => {
  var state: any = {};
  cards.forEach(item => {
    state[`${item?.id}`] = CardState.INERT;
  });
  return state;
};

export const getSelectedCardsState = (
  cardState: CardsStateType,
  id: string,
) => {
  var newState: CardsStateType = {};
  Object.keys(cardState).forEach(item => {
    if (id === item.toString()) {
      newState[item] = CardState.SELECTED;
      return;
    }
    newState[item] = CardState.UNSELECTED;
  });
  return newState;
};
