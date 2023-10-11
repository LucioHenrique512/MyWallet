import React from 'react';
import * as S from './styles';
import Arrow from '../../assets/arrow.svg';

interface IProps {
  onBackPress: () => void;
  rightItem?: React.ReactNode;
  title: string;
  enableShadow?: boolean;
  titleColor?: string;
  whiteBackground?: boolean;
}

export const TopBar: React.FC<IProps> = ({
  title,
  onBackPress,
  rightItem,
  enableShadow,
  titleColor,
  whiteBackground,
}) => {
  const shadow = {
    zIndex: 1,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.22,
    shadowRadius: 9.22,
    elevation: 12,
  };

  return (
    <S.Container
      testID="topbar-container"
      style={enableShadow && shadow}
      whiteBackground={whiteBackground}>
      <S.Content>
        <S.ButtonContainer testID="back-button" onPress={onBackPress}>
          <Arrow />
        </S.ButtonContainer>
        <S.Title color={titleColor}>{title}</S.Title>
        <S.RightContainer>{rightItem}</S.RightContainer>
      </S.Content>
    </S.Container>
  );
};
