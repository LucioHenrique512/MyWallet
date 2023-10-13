import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import * as S from './styles';

interface IProps {
  cardName?: string;
  holderName: string;
  number: string;
  validtrhu: string;
  isBlack?: boolean;
  onPress?: () => void;
}

export const Card: React.FC<IProps> = ({
  cardName,
  holderName,
  number,
  validtrhu,
  isBlack,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} testID="card-container">
      <S.Container isBlack={isBlack}>
        <S.CardName isBlack={isBlack}>{cardName}</S.CardName>
        <S.InfoContainer>
          <S.HolderName isBlack={isBlack}>{holderName}</S.HolderName>
          <S.Number isBlack={isBlack}>{number}</S.Number>
          <S.ValidThru isBlack={isBlack}>Validade {validtrhu}</S.ValidThru>
        </S.InfoContainer>
      </S.Container>
    </TouchableWithoutFeedback>
  );
};
