import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import {CardType} from '../types';

type ContextType = {
  cards: CardType[];
  setCards: Dispatch<SetStateAction<CardType[]>>;
};

const Context = createContext<ContextType>({} as ContextType);

export const AppContextProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [cards, setCards] = useState<CardType[]>([]);

  return (
    <Context.Provider value={{cards, setCards}}>{children}</Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);
