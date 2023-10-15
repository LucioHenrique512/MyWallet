import React, {useEffect, useState} from 'react';
import * as S from './styles';
import {Button, Card} from '../../components';
import {CardState, CardType} from '../../types';
import {
  Easing,
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
  index,
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

    const unselectedTranslateY = index !== 0 ? 210 : 365 - index * index;

    if (cardState === CardState.SELECTED) {
      setRenderButton(true);
      translateY.value = withTiming(-(index * 190), easingOptions);
      buttonOpacity.value = withDelay(300, withTiming(1, {duration: 600}));
    } else if (cardState === CardState.UNSELECTED) {
      translateY.value = withTiming(unselectedTranslateY, easingOptions);
      buttonOpacity.value = withTiming(0, {duration: 200}, onButtonDesapear);
    } else {
      translateY.value = withTiming(-100 * index, easingOptions);
      buttonOpacity.value = withTiming(0, {duration: 200}, onButtonDesapear);
    }
  }, [cardState, translateY, buttonOpacity, index]);

  const cardAnimatedSyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  const buttonAnimatedSyle = useAnimatedStyle(() => {
    return {
      opacity: buttonOpacity.value,
    };
  });

  return (
    <S.AnimatedCardContainer key={item.id} style={[cardAnimatedSyle]}>
      <Card
        cardName={item.cardName}
        holderName={item.holderName}
        number={item.number}
        validtrhu={item.validThru}
        isBlack={item.isBlack}
        onPress={() => {
          //console.log('Index', -(index * 100));
          onCardPress();
        }}
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
