import React from 'react';
import * as S from './styles';
import {Background, SpinningWallet} from '../../components';

export const LoadingScreen = () => {
  return (
    <S.Container>
      <Background>
        <S.AnimationContainer>
          <SpinningWallet />
        </S.AnimationContainer>
      </Background>
    </S.Container>
  );
};
