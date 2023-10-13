import {
  transformCardData,
  initCardsState,
  getSelectedCardsState,
  CardsStateType,
} from './cardServices';
import {CardState} from '../types';

const mockCards = [
  {
    number: '1234 1234 1341 2342',
    holderName: 'Relâmpago Marquinhosos',
    validThru: '12/13',
    cvv: '123',
    id: 1,
  },
  {
    number: '1234 1244 1244 1244',
    holderName: 'Sr. Luiz Hamilton',
    validThru: '12/34',
    cvv: '123',
    id: 2,
  },
  {
    number: '1234 1241 2412 4142',
    holderName: 'Tomatto',
    validThru: '12/45',
    cvv: '233',
    id: 3,
  },
];

describe('cardServices', () => {
  it('should correctly transform card data', () => {
    const result = transformCardData(mockCards);
    expect(result[0].isBlack).toBeFalsy();
    expect(result[1].isBlack).toBeTruthy();
    expect(result[0].cardName).toEqual('Green Card');
    expect(result[1].cardName).toEqual('Black Card');
  });

  it('should initialize cards state correctly', () => {
    const result = initCardsState(mockCards);
    expect(result['1']).toEqual(CardState.INERT);
    expect(result['2']).toEqual(CardState.INERT);
  });

  it('should set selected card state correctly', () => {
    const mockCardState: CardsStateType = {
      '1': CardState.INERT,
      '2': CardState.INERT,
    };
    const result = getSelectedCardsState(mockCardState, '1');
    expect(result['1']).toEqual(CardState.SELECTED);
    expect(result['2']).toEqual(CardState.UNSELECTED);
  });
});
