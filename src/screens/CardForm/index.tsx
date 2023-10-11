import React from 'react';
import {Background, TopBar} from '../../components';
import * as S from './styles';
import {useNavigation} from '@react-navigation/native';

export const CardFormScreen: React.FC = () => {
  const {goBack} = useNavigation();

  return (
    <Background>
      <S.Container>
        <TopBar onBackPress={goBack} title="Cadastro" />
      </S.Container>
    </Background>
  );
};
