import {RFPercentage} from 'react-native-responsive-fontsize';
import styled, {DefaultTheme} from 'styled-components/native';

type ComonProps = {
  isBlack: boolean;
};

const getColorProps = (isBlack: boolean, theme: DefaultTheme) => {
  if (isBlack) {
    return {background: theme.colors.charcoal, color: theme.colors.white};
  } else {
    return {background: theme.colors.limeGreen, color: theme.colors.charcoal};
  }
};

export const Container: any = styled.View<ComonProps>`
  background: ${({theme, isBlack}) => getColorProps(isBlack, theme).background};
  padding: ${({theme}) => theme.size.padding};
  border-radius: ${({theme}) => theme.size.md};
  height: ${RFPercentage(23)}px;
  justify-content: space-between;
  border-width: 0.5px;
  border-color: #ffffff50;
`;

export const CardName: any = styled.Text<ComonProps>`
  color: ${({theme, isBlack}) => getColorProps(isBlack, theme).color};
  font-size: ${({theme}) => theme.size.lg};
  margin-top: ${RFPercentage(0.5)}px;
`;

export const InfoContainer: any = styled.View`
  margin-bottom: ${RFPercentage(0.5)}px;
`;

export const HolderName: any = styled.Text<ComonProps>`
  color: ${({theme, isBlack}) => getColorProps(isBlack, theme).color};
  font-size: ${({theme}) => theme.size.md};
  margin-bottom: ${({theme}) => theme.size.xxxs};
`;

export const Number: any = styled.Text<ComonProps>`
  color: ${({theme, isBlack}) => getColorProps(isBlack, theme).color};
  font-size: ${({theme}) => theme.size.sm};
  margin-bottom: ${({theme}) => theme.size.xxxs};
`;

export const ValidThru: any = styled.Text<ComonProps>`
  color: ${({theme, isBlack}) => getColorProps(isBlack, theme).color};
  font-size: ${({theme}) => theme.size.sm};
`;
