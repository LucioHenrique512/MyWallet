import React, {useEffect, useState} from 'react';
import * as S from './styles';
import {TopBar} from '../../components';
import {useNavigation} from '@react-navigation/native';
import Times from '../../assets/times.svg';
import {StackNavigationProp} from '@react-navigation/stack';
import {NavigationParams} from '../../navigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AnimatedCard} from './AnimatedCard';
import {CardState, CardType} from '../../types';

type NavigationProps = StackNavigationProp<NavigationParams, 'CardFormScreen'>;
export type CardListState = {state: CardState; id: string};

export const WalletScreen: React.FC = () => {
  const {goBack, navigate} = useNavigation<NavigationProps>();
  const insets = useSafeAreaInsets();
  const [cards, setCards] = useState<CardType[]>([]);
  const [cardListState, setCardListState] = useState<CardListState[]>([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>();

  useEffect(() => {
    setCards(data.cards);
    setCardListState(data.cards.map(({id}) => ({state: CardState.INERT, id})));
  }, []);

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

  //console.log(JSON.stringify(cardListState, null, 2));

  const onCardPress = (card: CardType, index: number) => {
    //changeCardPosition(index);
    //console.log(selectedCardId);
    if (selectedCardIndex === index) {
      setSelectedCardIndex(null);
      resetCardState();
      return;
    }

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
          <S.AddButton onPress={() => navigate('CardFormScreen')}>
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
            cardState={cardListState[index].state}
            onCardPress={() => onCardPress(item, index)}
          />
        )}
        contentContainerStyle={contentContainerStyle}
      />
      <S.SafeAreaBottom height={insets.bottom} />
    </S.Container>
  );
};

const data: {cards: CardType[]} = {
  cards: [
    {
      id: '4ec42ba9-50af-40d2-af90-8312edbd9ca1',
      number: '3529 5435 3355 8727',
      cvv: '317',
      holderName: 'Exegese Peregrino',
      validThru: '16/46',
      cardName: 'Route Bank',
      isBlack: true,
    },
    {
      id: '4ec42ba9-50af-40d2-af90-8312edbd9ca2',
      number: '3529 5435 3355 8727',
      cvv: '317',
      holderName: 'Estrombolito Atonito',
      validThru: '14/36',
      cardName: 'Route Bank',
    },
    {
      id: '4ec42ba9-50af-40d2-af90-8312edbd9ca3',
      number: '3529 5435 3355 8727',
      cvv: '317',
      holderName: 'Relampago Marquinhos',
      validThru: '14/36',
      cardName: 'Black Bank',
      isBlack: true,
    },
  ],
};
