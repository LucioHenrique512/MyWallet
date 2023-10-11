import styled from 'styled-components/native';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const Container = styled.View``;

export const Label = styled.Text`
  font-size: ${({theme}) => theme.size.sm};
  color: ${({theme}) => theme.colors.mediumGray};
  margin-bottom: ${({theme}) => theme.size.xxs};
`;

export const FieldContainer = styled.View`
  background: ${({theme}) => theme.colors.white};
  border-radius: ${({theme}) => theme.size.xxs};
  height: ${RFPercentage(5.5)}px;
  flex-direction: row;
  overflow: hidden;
`;

export const LeftContainer = styled.View`
  height: ${RFPercentage(5.5)}px;
  width: ${RFPercentage(5.5)}px;
  align-items: center;
  justify-content: center;
`;

export const TextField = styled.TextInput`
  font-size: ${({theme}) => theme.size.md};
  flex: 1;
  padding-left: ${({theme}) => theme.size.xxs};
`;

export const ErrorText = styled.Text`
  font-size: ${({theme}) => theme.size.xs};
  color: ${({theme}) => theme.colors.errorRed};
`;
