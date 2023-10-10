import React from 'react';
import * as S from './styles';
import {Card, Spacing} from '../../components';

export const MainScreen: React.FC = () => {
  return (
    <S.Container>
      <Card
        cardName="Black Card"
        holderName="Relampago Marquinhos"
        color="black"
        number="1234 1234 1234 1234"
        validtrhu="10/96"
        onPress={() => console.log('Oi')}
      />
      <Spacing />
      <Card
        cardName="Gree Card"
        holderName="Relampago Marquinhos"
        color="green"
        number="1234 1234 1234 1234"
        validtrhu="10/96"
        onPress={() => console.log('Oi')}
      />
    </S.Container>
  );
};
