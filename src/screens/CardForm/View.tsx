import React from 'react';
import * as S from './styles';
import Camera from '../../assets/camera.svg';

import {
  Background,
  Button,
  Logo,
  Spacing,
  TextField,
  TopBar,
} from '../../components';
import {FormikValues} from 'formik';

interface IProps {
  formik: FormikValues;
  goBack: () => void;
}

export const CardFormView: React.FC<IProps> = ({formik, goBack}) => {
  const {
    values,
    errors,
    touched,
    submitForm,
    handleChange,
    handleBlur,
    isValid,
  } = formik;

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim();
  };

  const onSubmitPress = () => submitForm();

  return (
    <Background>
      <S.Container>
        <TopBar onBackPress={goBack} title="Cadastro" />
        <S.Content behavior="padding">
          <Logo />
          <Spacing />
          <S.FormContainer>
            <TextField
              testID="card-number"
              label="Número do cartão"
              value={values.number}
              onChangeText={text =>
                handleChange('number')(formatCardNumber(text))
              }
              onBlur={handleBlur('number')}
              keyboardType="numeric"
              maxLength={19}
              errorText={touched?.number ? errors.number : ''}
              leftItem={
                <S.CameraButton>
                  <Camera />
                </S.CameraButton>
              }
            />
            <Spacing />
            <TextField
              testID="card-holderName"
              value={values.holderName}
              label="Nome do titular do cartão"
              onChangeText={handleChange('holderName')}
              onBlur={handleBlur('holderName')}
              errorText={touched?.holderName ? errors.holderName : ''}
            />
            <Spacing />
            <S.Row>
              <S.Column>
                <TextField
                  testID="valid-thru"
                  value={values.validThru}
                  label="Vencimento"
                  onChangeText={handleChange('validThru')}
                  onBlur={handleBlur('validThru')}
                  placeholder="04/32"
                  maxLength={5}
                  errorText={touched?.validThru ? errors.validThru : ''}
                />
              </S.Column>
              <S.Column>
                <TextField
                  testID="card-CVV"
                  value={values.cvv}
                  label="Código de segurança"
                  onChangeText={handleChange('cvv')}
                  onBlur={handleBlur('cvv')}
                  placeholder="***"
                  errorText={touched?.cvv ? errors.cvv : ''}
                  maxLength={3}
                  keyboardType="numeric"
                />
              </S.Column>
            </S.Row>
            <Spacing />
            <Button
              onPress={onSubmitPress}
              text="Avançar"
              variant="secondary"
              disabeld={!isValid}
            />
          </S.FormContainer>
        </S.Content>
      </S.Container>
    </Background>
  );
};
