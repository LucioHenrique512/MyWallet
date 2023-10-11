import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

type ContainerProps = {
  whiteBackground: boolean;
};

export const Container: any = styled.View<ContainerProps>`
  height: ${RFPercentage(8.25)}px;
  padding: 0px 16px;
  background: ${({theme, whiteBackground}) =>
    whiteBackground ? theme.colors.white : 'transparent'};
  justify-content: center;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.TouchableOpacity`
  z-index: 1;
  position: absolute;
  left: 0;
`;

export const RightContainer = styled.View`
  z-index: 1;
  position: absolute;
  right: 0;
`;

type TitleProps = {
  color: string;
};

export const Title: any = styled.Text<TitleProps>`
  color: ${({theme, color}) => (color ? color : theme.colors.turqBlue)};
  font-size: ${({theme}) => theme.size.lg};
  font-weight: 400;
`;
