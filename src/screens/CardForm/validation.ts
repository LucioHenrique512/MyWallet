import * as yup from 'yup';

export const validationSchema = yup.object().shape({
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
