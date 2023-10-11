import React from 'react';
import {act, cleanup, fireEvent, waitFor} from '@testing-library/react-native';
import {CardFormScreen} from '.'; // Replace with the correct path
import {testRender} from '../../utils/testUtils';

// Mocking the navigation
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => ({
    goBack: jest.fn(),
  })),
}));

describe(CardFormScreen.name, () => {
  afterEach(cleanup);

  it('should display errors when fields are empty and try to proceed', async () => {
    const {getByText, queryByText} = testRender(<CardFormScreen />);
    const button = getByText('Avançar');
    act(() => {
      fireEvent.press(button);
    });
    await waitFor(() => {
      expect(queryByText('o campo número campo é obrigatório.')).toBeTruthy();
      expect(queryByText('O campo nome é obrigatório.')).toBeTruthy();
      expect(queryByText('O campo vencimento é obrigatório.')).toBeTruthy();
      expect(queryByText('O campo cvv é obrigatório.')).toBeTruthy();
    });
  });

  it('should validate the format and length of the card number', () => {
    const {getByTestId, queryByText} = testRender(<CardFormScreen />);

    const numberInput = getByTestId('card-number');
    fireEvent.changeText(numberInput, '1234 5678 1234');
    fireEvent(numberInput, 'blur');

    expect(
      queryByText('o campo número deve ter exatamente 16 dígitos.'),
    ).toBeTruthy();
  });

  it('should validate the card holder name', () => {
    const {getByTestId, queryByText} = testRender(<CardFormScreen />);

    const holderNameInput = getByTestId('card-holderName');
    fireEvent.changeText(holderNameInput, '');
    fireEvent(holderNameInput, 'blur');

    expect(queryByText('O campo nome é obrigatório.')).toBeTruthy();
  });

  it('should validate the card expiration format', () => {
    const {getByTestId, queryByText} = testRender(<CardFormScreen />);

    const validThruInput = getByTestId('valid-thru');
    fireEvent.changeText(validThruInput, '13/25');
    fireEvent(validThruInput, 'blur');

    expect(
      queryByText('O campo vencimento deve estar no formato mm/aa.'),
    ).toBeTruthy();
  });

  it('should validate the CVV format', () => {
    const {getByTestId, queryByText} = testRender(<CardFormScreen />);

    const cvvInput = getByTestId('card-CVV');
    fireEvent.changeText(cvvInput, '12');
    fireEvent(cvvInput, 'blur');

    expect(queryByText('CVV deve ter pelo menos 3 dígitos')).toBeTruthy();
  });

  it('should allow to proceed when all fields are correct', () => {
    const {getByTestId, getByText} = testRender(<CardFormScreen />);

    const numberInput = getByTestId('card-number');
    const holderNameInput = getByTestId('card-holderName');
    const validThruInput = getByTestId('valid-thru');
    const cvvInput = getByTestId('card-CVV');

    fireEvent.changeText(numberInput, '1234 5678 1234 5678');
    fireEvent.changeText(holderNameInput, 'Lúcio');
    fireEvent.changeText(validThruInput, '12/25');
    fireEvent.changeText(cvvInput, '123');

    const button = getByText('Avançar');
    fireEvent.press(button);

    // TODO -> Fializar teste
  });
});
