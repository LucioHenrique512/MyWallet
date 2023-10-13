import {useState} from 'react';
import {CardType} from '../types';

export const useCardData = () => {
  const [cards, setCards] = useState<CardType[]>([]);
};
