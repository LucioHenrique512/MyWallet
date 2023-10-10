import React from 'react';
import * as S from './styles';
import {Spacing, TextField} from '../../components';
import {Button} from 'react-native';

export const MainScreen: React.FC = () => {
  return (
    <S.Container>
      <TextField label="Número do cartão" />
      <Spacing />
      <TextField
        leftItem={<Button title="pressme " />}
        label="Número do cartão"
      />
    </S.Container>
  );
};
