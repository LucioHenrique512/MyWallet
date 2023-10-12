import Animated from 'react-native-reanimated';
import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const SafeAreaTop: any = styled.View<{height: number}>`
  background: ${({theme}) => theme.colors.white};
  width: 100%;
  height: ${({height}) => height}px;
`;

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.deepNight};
  z-index: 9;
`;

export const AddButton = styled.TouchableOpacity``;

export const TopTitleContainer = styled.View`
  background: ${({theme}) => theme.colors.white};
  height: ${RFPercentage(9.5)}px;
  align-items: center;
  justify-content: center;
  border-radius: 0px 0px ${RFPercentage(6.25)}px ${RFPercentage(6.25)}px;
`;

export const TopTitle = styled.Text`
  font-size: ${({theme}) => theme.size.lg};
  color: ${({theme}) => theme.colors.turqBlue};
`;

export const AnimatedCardList = styled(Animated.FlatList)`
  flex: 1;
  padding: 0px ${({theme}) => theme.size.padding};
  position: relative;
`;

export const CardContainer = styled(Animated.View)`
  width: 100%;
`;

export const SafeAreaBottom: any = styled.View<{height: number}>`
  width: 100%;
  height: ${({height}) => height}px;
`;
