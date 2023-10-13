import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {NavigationParams} from '../../navigation';
import {useNavigation} from '@react-navigation/native';
import {MainScreenView} from './View';

type NavigationProps = StackNavigationProp<NavigationParams, 'MainScreen'>;

export const MainScreen: React.FC = () => {
  const {navigate} = useNavigation<NavigationProps>();

  const onWalletPress = () => navigate('LoadingCardsScreen');
  const onCardFormPress = () => navigate('CardFormScreen');

  return (
    <MainScreenView
      onWalletPress={onWalletPress}
      onCardFormPress={onCardFormPress}
    />
  );
};
