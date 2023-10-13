import React, {useEffect, useState} from 'react';
import * as S from './styles';
import {Button, Card} from '../../components';
import {CardState, CardType} from '../../types';
import {
  Easing,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

interface IProps {
  item: CardType;
  index: number;
  cardState?: CardState;
  onCardPress: () => void;
  onButtonPress: () => void;
}

export const AnimatedCard: React.FC<IProps> = ({
  item,
  onCardPress,
  cardState,
  onButtonPress,
}) => {
  const translateY = useSharedValue(0);
  const buttonOpacity = useSharedValue(0);

  const [renderButton, setRenderButton] = useState(false);

  useEffect(() => {
    const easingOptions = {
      duration: 500,
      easing: Easing.bezier(0.25, -0.5, 0.25, 1),
    };

    const onButtonDesapear = () => {
      'worklet';
      runOnJS(setRenderButton)(false);
    };

    if (cardState === CardState.SELECTED) {
      setRenderButton(true);
      translateY.value = withTiming(-90, easingOptions);
      buttonOpacity.value = withDelay(300, withTiming(1, {duration: 600}));
    } else if (cardState === CardState.UNSELECTED) {
      translateY.value = withTiming(350, easingOptions);
      buttonOpacity.value = withTiming(0, {duration: 200}, onButtonDesapear);
    } else {
      translateY.value = withTiming(0, easingOptions);
      buttonOpacity.value = withTiming(0, {duration: 200}, onButtonDesapear);
    }
  }, [cardState, translateY, buttonOpacity]);

  const cardAnimatedSyle = useAnimatedStyle(() => {
    const containerHeight = interpolate(
      translateY.value,
      [-120, 0, 300],
      [20, 70, 20],
    );

    return {
      height: containerHeight,
      transform: [{translateY: translateY.value}],
    };
  });

  const buttonAnimatedSyle = useAnimatedStyle(() => {
    return {
      opacity: buttonOpacity.value,
    };
  });

  return (
    <S.AnimatedCardContainer key={item.id} style={cardAnimatedSyle}>
      <Card
        cardName={item.cardName}
        holderName={item.holderName}
        number={item.number}
        validtrhu={item.validThru}
        isBlack={item.isBlack}
        onPress={onCardPress}
      />
      {renderButton && (
        <S.AnimatedButtonContainer style={buttonAnimatedSyle}>
          <Button
            text="Pagar com esse cartão"
            onPress={onButtonPress}
            variant="secondary"
          />
        </S.AnimatedButtonContainer>
      )}
    </S.AnimatedCardContainer>
  );
};
