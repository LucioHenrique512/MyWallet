import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import * as S from './styles';

interface IProps {
  cardName: string;
  holderName: string;
  number: string;
  validtrhu: string;
  color: string;
  onPress: () => void;
}

export const Card: React.FC<IProps> = ({
  cardName,
  holderName,
  number,
  validtrhu,
  color,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} testID="card-container">
      <S.Container color={color}>
        <S.CardName>{cardName}</S.CardName>
        <S.InfoContainer>
          <S.HolderName>{holderName}</S.HolderName>
          <S.Number>{number}</S.Number>
          <S.ValidThru>Validade {validtrhu}</S.ValidThru>
        </S.InfoContainer>
      </S.Container>
    </TouchableWithoutFeedback>
  );
};
