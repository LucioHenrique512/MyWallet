import React, {useEffect} from 'react';
import * as S from './styles';
import {Card} from '../../components';
import {CardState, CardType} from '../../types';
import {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface IProps {
  item: CardType;
  index: number;
  cardState?: CardState;
  onCardPress: () => void;
}

export const AnimatedCard: React.FC<IProps> = ({
  item,
  onCardPress,
  cardState,
  index,
}) => {
  const translateY = useSharedValue(0);

  useEffect(() => {
    const easingOptions = {
      duration: 500,
      easing: Easing.bezier(0.25, -0.5, 0.25, 1),
    };

    //console.log(index);

    if (cardState === CardState.SELECTED) {
      translateY.value = withTiming(-90, easingOptions);
    } else if (cardState === CardState.UNSELECTED) {
      translateY.value = withTiming(350, easingOptions);
    } else {
      translateY.value = withTiming(0, easingOptions);
    }
  }, [cardState, translateY, index]);

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

  return (
    <S.CardContainer key={item.id} style={cardAnimatedSyle}>
      <Card
        cardName={item.cardName}
        holderName={item.holderName}
        number={item.number}
        validtrhu={item.validThru}
        isBlack={item.isBlack}
        onPress={onCardPress}
      />
    </S.CardContainer>
  );
};
