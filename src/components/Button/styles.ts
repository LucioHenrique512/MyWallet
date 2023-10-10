import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {ButtonVariants} from './types';

type CommonProps = {
  variant: ButtonVariants;
  disabled: boolean;
  background: string;
  color: string;
};

export const Container: any = styled.TouchableOpacity<CommonProps>`
  height: ${RFPercentage(7)}px;
  background: ${({background}) => background};
  border-radius: ${({theme}) => theme.size.xs};
  align-items: center;
  justify-content: center;
`;

export const Title: any = styled.Text<CommonProps>`
  font-size: ${({theme}) => theme.size.md};
  color: ${({color}) => color};
`;
