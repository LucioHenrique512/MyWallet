import React from 'react';
import {
  Background,
  Button,
  Logo,
  Spacing,
  TextField,
  TopBar,
} from '../../components';
import * as S from './styles';
import {useNavigation} from '@react-navigation/native';
import Camera from '../../assets/camera.svg';
import {useFormik} from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  number: yup
    .string()
    .length(19, 'o campo número deve ter exatamente 16 dígitos.')
    .required('o campo número campo é obrigatório.'),
  holderName: yup.string().required('O campo nome é obrigatório.'),
  validThru: yup
    .string()
    .matches(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      'O campo vencimento deve estar no formato mm/aa.',
    )
    .required('O campo vencimento é obrigatório.'),
  cvv: yup
    .string()
    .min(3, 'CVV deve ter pelo menos 3 dígitos')
    .required('O campo cvv é obrigatório.'),
});

export const CardFormScreen: React.FC = () => {
  const {goBack} = useNavigation();

  const {
    values,
    errors,
    touched,
    submitForm,
    handleChange,
    handleBlur,
    isValid,
  } = useFormik({
    validationSchema: validationSchema,
    initialValues: {number: '', holderName: '', validThru: '', cvv: ''},
    onSubmit: formValues => {
      console.log(formValues);
    },
  });

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim();
  };

  const onPress = () => {
    submitForm();
  };

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
              onPress={onPress}
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
