import React from 'react';
import * as S from './styles';

interface IProps {
  color?: string;
}

export const Logo: React.FC<IProps> = ({color}) => {
  return (
    <S.Text color={color}>
      My <S.Bold>Wallet</S.Bold>
    </S.Text>
  );
};
