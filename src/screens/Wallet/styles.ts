import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({theme}) => theme.colors.white};
`;

export const ScreenWrapper = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.deepNight};
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
