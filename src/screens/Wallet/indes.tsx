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

// const data: {cards: CardType[]} = {
//   cards: [
//     {
//       id: '4ec42ba9-50af-40d2-af90-8312edbd9ca1',
//       number: '3529 5435 3355 8727',
//       cvv: '317',
//       holderName: 'Exegese Peregrino',
//       validThru: '16/46',
//       cardName: 'Route Bank',
//       isBlack: true,
//     },
//     {
//       id: '4ec42ba9-50af-40d2-af90-8312edbd9ca2',
//       number: '3529 5435 3355 8727',
//       cvv: '317',
//       holderName: 'Estrombolito Atonito',
//       validThru: '14/36',
//       cardName: 'Route Bank',
//     },
//     {
//       id: '4ec42ba9-50af-40d2-af90-8312edbd9ca3',
//       number: '3529 5435 3355 8727',
//       cvv: '317',
//       holderName: 'Relampago Marquinhos',
//       validThru: '14/36',
//       cardName: 'Black Bank',
//       isBlack: true,
//     },
//   ],
// };
