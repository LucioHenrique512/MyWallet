import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

type ContainerProps = {
  color: string;
};

export const Container: any = styled.View<ContainerProps>`
  background: ${({color}) => color};
  padding: ${({theme}) => theme.size.padding};
  border-radius: ${({theme}) => theme.size.md};
  height: ${RFPercentage(23)}px;
  justify-content: space-between;
`;

export const CardName = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.size.lg};
  margin-top: ${RFPercentage(2)}px;
`;

export const InfoContainer = styled.View`
  margin-bottom: ${RFPercentage(2)}px;
`;

export const HolderName = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.size.md};
  margin-bottom: ${({theme}) => theme.size.xxxs};
`;

export const Number = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.size.sm};
  margin-bottom: ${({theme}) => theme.size.xxxs};
`;

export const ValidThru = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.size.sm};
`;
