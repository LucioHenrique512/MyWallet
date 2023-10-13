import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {StackNavigationProp} from '@react-navigation/stack';
import {NavigationParams} from '../../navigation';
import {CardFormView} from './View';

type NavigationProps = StackNavigationProp<NavigationParams, 'CardFormScreen'>;

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
  const {goBack, navigate} = useNavigation<NavigationProps>();

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {number: '', holderName: '', validThru: '', cvv: ''},
    onSubmit: formValues => {
      console.log(formValues);
      navigate('LoadingScreen');
    },
  });

  return <CardFormView formik={formik} goBack={goBack} />;
};
