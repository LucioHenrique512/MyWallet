export type CardType = {
  id?: any;
  number: string;
  cvv: string;
  holderName: string;
  validThru: string;
  cardName?: string;
  isBlack?: boolean;
};

export enum CardState {
  INERT = 0,
  SELECTED = 1,
  UNSELECTED = 2,
}
