import styled from 'styled-components/native';

type IProps = {
  color: string;
};

export const Text: any = styled.Text<IProps>`
  font-weight: 400;
  font-size: ${({theme}) => theme.size.xxl};
  color: ${({theme, color}) => (color ? color : theme.colors.white)};
`;

export const Bold = styled.Text`
  font-weight: bold;
`;
