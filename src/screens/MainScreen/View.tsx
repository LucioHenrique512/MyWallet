import React from 'react';
import * as S from './styles';
import {Background, Button, Logo, Spacing} from '../../components';

interface IProps {
  onWalletPress: () => void;
  onCardFormPress: () => void;
}

export const MainScreenView: React.FC<IProps> = ({
  onWalletPress,
  onCardFormPress,
}) => {
  return (
    <Background>
      <S.Container>
        <Logo />
        <Spacing />
        <Spacing />
        <S.Row>
          <Button
            text="Meus cartões"
            onPress={onWalletPress}
            variant="secondary"
          />
          <Spacing />
          <Button text="Cadastrar cartão" onPress={onCardFormPress} />
        </S.Row>
      </S.Container>
    </Background>
  );
};
