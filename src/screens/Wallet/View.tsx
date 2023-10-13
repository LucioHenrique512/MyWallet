import React, {useEffect, useState} from 'react';
import * as S from './styles';
import {TopBar} from '../../components';
import Times from '../../assets/times.svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AnimatedCard} from './AnimatedCard';
import {CardState, CardType} from '../../types';

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
  const [cardListState, setCardListState] = useState<CardListState[]>([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>();

  useEffect(() => {
    setCardListState(cards.map(({id}) => ({state: CardState.INERT, id})));
  }, [cards]);

  // const changeCardPosition = (index: number) => {
  //   const newCards = [...cards];

  //   const [pressedCard] = newCards.splice(index, 1);
  //   newCards.push(pressedCard);
  //   setCards(newCards);
  // };

  const changeCardState = (pressedIndex: number) => {
    const newCardListState = [...cardListState];

    const newState = newCardListState.map((item, index) => {
      if (pressedIndex === index) {
        return {...item, state: CardState.SELECTED};
      }
      return {...item, state: CardState.UNSELECTED};
    });

    setCardListState(newState);
  };

  const resetCardState = () =>
    setCardListState(
      cardListState.map(item => ({...item, state: CardState.INERT})),
    );

  const onCardPress = (card: CardType, index: number) => {
    if (selectedCardIndex === index) {
      setSelectedCardIndex(null);
      resetCardState();
      return;
    }
    onSelectCard(card);
    setSelectedCardIndex(index);
    changeCardState(index);
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
      <S.AnimatedCardList
        data={cards}
        renderItem={({item, index}) => (
          <AnimatedCard
            key={item.id}
            item={item}
            index={index}
            cardState={cardListState[index]?.state}
            onCardPress={() => onCardPress(item, index)}
          />
        )}
        contentContainerStyle={contentContainerStyle}
      />
      <S.SafeAreaBottom height={insets.bottom} />
    </S.Container>
  );
};
