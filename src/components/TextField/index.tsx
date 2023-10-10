import React, {useRef} from 'react';
import * as S from './styles';
import {TouchableWithoutFeedback} from 'react-native';

interface IProps {
  value?: string;
  onChangeText?: (text: string) => void;
  label?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  leftItem?: any;
}

export const TextField: React.FC<IProps> = ({
  value,
  onChangeText,
  label,
  placeholder,
  secureTextEntry,
  leftItem,
}) => {
  const ref = useRef<any>(null);

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
          <S.TextField
            ref={ref}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            value={value}
            placeholder={placeholder}
          />
        </S.FieldContainer>
      </TouchableWithoutFeedback>
    </S.Container>
  );
};
