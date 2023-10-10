import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const Square = styled.View`
  width: ${RFPercentage(43.5)}px;
  height: ${RFPercentage(29)}px;
  border-radius: ${RFPercentage(6)}px;
  background: ${({theme}) => theme.colors.softGray}30;
  position: absolute;
  transform: rotate(144deg);
`;
