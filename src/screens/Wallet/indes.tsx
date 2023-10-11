import React from 'react';
import * as S from './styles';
import {TopBar} from '../../components';
import {useNavigation} from '@react-navigation/native';
import Times from '../../assets/times.svg';
import {StackNavigationProp} from '@react-navigation/stack';
import {NavigationParams} from '../../navigation';

type NavigationProps = StackNavigationProp<NavigationParams, 'CardFormScreen'>;

export const WalletScreen: React.FC = () => {
  const {goBack, navigate} = useNavigation<NavigationProps>();

  return (
    <S.Container>
      <S.ScreenWrapper>
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
      </S.ScreenWrapper>
    </S.Container>
  );
};
