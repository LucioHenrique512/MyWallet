import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {StackNavigationProp} from '@react-navigation/stack';
import {NavigationParams} from '../../navigation';

import {CardState} from '../../types';
import {WalletView} from './View';
import {useAppContext} from '../../context';
import {transformCardData} from '../../services/cardServices';

type NavigationProps = StackNavigationProp<NavigationParams, 'CardFormScreen'>;
export type CardListState = {state: CardState; id?: string};

export const WalletScreen: React.FC = () => {
  const {goBack, replace} = useNavigation<NavigationProps>();

  const {cards} = useAppContext();

  const onCardFormPress = () => replace('CardFormScreen');

  return (
    <WalletView
      cards={transformCardData(cards)}
      goBack={goBack}
      onCardFormPress={onCardFormPress}
      onSelectCard={() => {}}
    />
  );
};
