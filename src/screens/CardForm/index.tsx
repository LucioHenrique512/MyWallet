import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import {StackNavigationProp} from '@react-navigation/stack';
import {NavigationParams} from '../../navigation';
import {CardFormView} from './View';
import {validationSchema} from './validation';
import {CardType} from '../../types';
import Toast from 'react-native-toast-message';
import {postCard} from '../../api';

type NavigationProps = StackNavigationProp<NavigationParams, 'CardFormScreen'>;

export const CardFormScreen: React.FC = () => {
  const {goBack, replace} = useNavigation<NavigationProps>();
  const [loading, setLoading] = useState<boolean>(false);

  const submitForm = async (data: CardType) => {
    try {
      setLoading(true);
      await postCard(data);
      replace('WalletScreen');
    } catch (error) {
      console.log('Error ->', error);
      Toast.show({
        type: 'error',
        text1: 'Não foi possível cadastrar esse cartão',
        text2: 'Favor tente novamente em alguns instantes',
      });
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {number: '', holderName: '', validThru: '', cvv: ''},
    onSubmit: formValues => {
      submitForm(formValues as CardType);
    },
  });

  return <CardFormView formik={formik} goBack={goBack} loading={loading} />;
};
