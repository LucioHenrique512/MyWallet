import React, {useEffect, useState} from 'react';
import * as S from './styles';
import {TopBar} from '../../components';
import Times from '../../assets/times.svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AnimatedCard} from './AnimatedCard';
import {CardState, CardType} from '../../types';
import {
  CardsStateType,
  getSelectedCardsState,
  initCardsState,
} from '../../services/cardServices';

export type CardListState = {state: CardState; id?: string};

interface IProps {
  cards: CardType[];
  goBack: () => void;
  onCardFormPress: () => void;
  onSelectCard: (card: CardType) => void;
}

export const WalletView: React.FC<IProps> = ({
  cards,
  goBack,
  onCardFormPress,
  onSelectCard,
}) => {
  const insets = useSafeAreaInsets();
  const [cardsState, setCardsState] = useState<CardsStateType>({});
  const [selectedCardId, setSelectedCardId] = useState<string | null>();

  useEffect(() => {
    const state = initCardsState(cards);

    setCardsState(state);
  }, [cards, insets]);

  const updateSelectedCardState = (id: string) => {
    const newState = getSelectedCardsState(cardsState, id.toString());
    setCardsState(newState);
  };

  const resetCardState = () => {
    setCardsState(initCardsState(cards));
  };

  const onCardPress = (card: CardType) => {
    if (selectedCardId === card.id) {
      setSelectedCardId(null);
      resetCardState();
      return;
    }
    setSelectedCardId(card.id);
    updateSelectedCardState(card.id as string);
  };

  const onButtonPress = (card: CardType) => {
    onSelectCard(card);
  };

  const contentContainerStyle: any = {paddingTop: '40%'};

  return (
    <S.Container>
      <S.SafeAreaTop height={insets.top} />
      <TopBar
        title="MyWallet"
        whiteBackground
        onBackPress={goBack}
        enableShadow
        rightItem={
          <S.AddButton onPress={onCardFormPress}>
            <Times />
          </S.AddButton>
        }
      />
      <S.TopTitleContainer>
        <S.TopTitle>Meus cartões</S.TopTitle>
      </S.TopTitleContainer>
      <S.AnimationContainer>
        <S.AnimatedCardList
          data={cards}
          renderItem={({item, index}) => (
            <AnimatedCard
              key={item.id}
              item={item}
              index={index}
              cardState={cardsState[item.id as string]}
              onButtonPress={() => onButtonPress(item)}
              onCardPress={() => onCardPress(item)}
            />
          )}
          contentContainerStyle={contentContainerStyle}
        />
      </S.AnimationContainer>
      <S.SafeAreaBottom height={insets.bottom} />
    </S.Container>
  );
};
