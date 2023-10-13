import React, {useEffect} from 'react';
import * as S from './styles';
import {Background, SpinningWallet} from '../../components';
import {useAppContext} from '../../context';
import {getCards} from '../../api';
import Toast from 'react-native-toast-message';
import {StackNavigationProp} from '@react-navigation/stack';
import {NavigationParams} from '../../navigation';
import {useNavigation} from '@react-navigation/native';

type NavigationProps = StackNavigationProp<NavigationParams, 'CardFormScreen'>;

export const LoadingCardsScreen = () => {
  const {setCards} = useAppContext();
  const {replace, goBack} = useNavigation<NavigationProps>();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const {data} = await getCards();
        setCards(data);
        replace('WalletScreen');
      } catch (error) {
        console.log(error);
        Toast.show({
          type: 'error',
          text1: 'Ocorreu um erro ao buscar seus cartões',
          text2: 'Favor tente novamente em alguns instantes.',
        });
        goBack();
      }
    };
    fetchCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
