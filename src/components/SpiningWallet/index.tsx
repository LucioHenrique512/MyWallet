import React, {useEffect} from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import WalletIcon from '../../assets/wallet.svg';

export const SpinningWallet = () => {
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
    <Animated.View style={animatedStyle} testID="animated-view">
      <WalletIcon testID="wallet-icon" />
    </Animated.View>
  );
};
