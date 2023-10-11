import React, {useRef} from 'react';
import * as S from './styles';
import {TextInputProps, TouchableWithoutFeedback} from 'react-native';

interface IProps extends TextInputProps {
  label?: string;
  leftItem?: any;
  errorText?: string;
}

export const TextField: React.FC<IProps> = props => {
  const ref = useRef<any>(null);

  const {label, leftItem, errorText} = props;

  const onFieldPress = () => {
    if (!ref?.current) {
      return;
    }
    ref.current.focus();
  };

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <TouchableWithoutFeedback onPress={onFieldPress}>
        <S.FieldContainer>
          {leftItem && <S.LeftContainer>{leftItem}</S.LeftContainer>}
          <S.TextField ref={ref} {...props} />
        </S.FieldContainer>
      </TouchableWithoutFeedback>
      <S.ErrorText>{errorText}</S.ErrorText>
    </S.Container>
  );
};
