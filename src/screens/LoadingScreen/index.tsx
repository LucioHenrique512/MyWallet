import React, {useEffect} from 'react';
import * as S from './styles';
import {Background} from '../../components';
import WalletIcon from '../../../src/assets/wallet.svg';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export const LoadingScreen = () => {
  const rotate = useSharedValue(0);

  useEffect(() => {
    rotate.value = withRepeat(
      withTiming(1, {
        duration: 2000,
        easing: Easing.bezier(0.25, -0.5, 0.25, 1),
      }),
      -1,
    );
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotate.value * 360}deg`}],
    };
  });

  return (
    <S.Container>
      <Background>
        <S.AnimationContainer>
          <Animated.View style={animatedStyle}>
            <WalletIcon />
          </Animated.View>
        </S.AnimationContainer>
      </Background>
    </S.Container>
  );
};
