import React from 'react';
import * as S from './styles';
import {ButtonProps, ButtonVariants} from './types';
import {DefaultTheme, useTheme} from 'styled-components/native';
import {ActivityIndicator} from 'react-native';

export const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  disabeld,
  variant,
  loading,
}) => {
  const theme = useTheme();

  const isDisabled = disabeld || loading;

  const colors = getButtonColors(theme, isDisabled, variant);

  return (
    <S.Container
      testID={'button'}
      background={colors.background}
      variant={variant}
      onPress={onPress}
      disabled={isDisabled}>
      {loading ? (
        <ActivityIndicator testID="activity-indicator" />
      ) : (
        <S.Title color={colors.color} variant={variant} disabled={disabeld}>
          {text}
        </S.Title>
      )}
    </S.Container>
  );
};

const getButtonColors = (
  theme: DefaultTheme,
  disabled?: boolean,
  variant?: ButtonVariants,
) => {
  if (disabled) {
    return {
      background: theme.colors.lightGray,
      color: theme.colors.mediumGray,
    };
  } else if (variant === 'secondary') {
    return {background: theme.colors.turqBlue, color: theme.colors.white};
  } else {
    return {
      background: theme.colors.limeGreen,
      color: theme.colors.deepNight,
    };
  }
};
