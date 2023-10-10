import React from 'react';
import * as S from './styles';
import {Background, Button, Logo, Spacing} from '../../components';

export const MainScreen: React.FC = () => {
  return (
    <Background>
      <S.Container>
        <Logo />
        <Spacing />
        <Spacing />
        <S.Row>
          <Button text="Meus cartões" onPress={() => {}} variant="secondary" />
          <Spacing />
          <Button text="Cadastrar cartão" onPress={() => {}} />
        </S.Row>
      </S.Container>
    </Background>
  );
};
