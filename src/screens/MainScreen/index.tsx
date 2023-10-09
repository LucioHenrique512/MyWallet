import React from 'react';
import * as S from './styles';
import {Button, Spacing} from '../../components';

export const MainScreen: React.FC = () => {
  return (
    <S.Container>
      <Button text="Meus cartões" onPress={() => {}} />
      <Spacing />
      <Button
        text="Cadastrar um cartão"
        onPress={() => {}}
        variant="secondary"
      />
      <Spacing />
      <Button text="Desabilitado" onPress={() => {}} disabeld />
    </S.Container>
  );
};
