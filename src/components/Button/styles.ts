import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: ${RFPercentage(7.25)}px;
  background: ${({theme}) => theme.colors.turqBlue};
  border-radius: ${RFPercentage(1.5)}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFPercentage(2.25)}px;
  color: ${({theme}) => theme.colors.white};
`;
