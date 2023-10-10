import React from 'react';
import * as S from './styles';
import {Background, Button, Logo, Spacing} from '../../components';
import {StackNavigationProp} from '@react-navigation/stack';
import {NavigationParams} from '../../navigation';
import {useNavigation} from '@react-navigation/native';

type NavigationProps = StackNavigationProp<NavigationParams, 'MainScreen'>;

export const MainScreen: React.FC = () => {
  const {navigate} = useNavigation<NavigationProps>();

  return (
    <Background>
      <S.Container>
        <Logo />
        <Spacing />
        <Spacing />
        <S.Row>
          <Button
            text="Meus cartões"
            onPress={() => navigate('WalletScreen')}
            variant="secondary"
          />
          <Spacing />
          <Button
            text="Cadastrar cartão"
            onPress={() => navigate('CardFormScreen')}
          />
        </S.Row>
      </S.Container>
    </Background>
  );
};
