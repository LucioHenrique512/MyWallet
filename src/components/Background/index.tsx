import React, {PropsWithChildren} from 'react';
import * as S from './styles';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const Background: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <S.Container>
      <S.Square style={{top: RFPercentage(-11.5), left: RFPercentage(-11.5)}} />
      {children}
      <S.Square
        style={{bottom: RFPercentage(-11.5), right: RFPercentage(-11.5)}}
      />
    </S.Container>
  );
};
