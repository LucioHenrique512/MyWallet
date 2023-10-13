import React from 'react';
import {act, cleanup, fireEvent, waitFor} from '@testing-library/react-native';
import {CardFormScreen} from '.';
import {createMockEvent, testRender} from '../../utils/testUtils';
import {postCard} from '../../api';
import Toast from 'react-native-toast-message';

jest.mock('../../api');

const mockToastShow = jest.fn();
Toast.show = mockToastShow;

const postCardMock = postCard as jest.MockedFunction<typeof postCard>;

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => ({
    goBack: jest.fn(),
    navigate: jest.fn(),
  })),
}));

const mocKBlurEvent = createMockEvent();

describe(CardFormScreen.name, () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    const useNavigation = require('@react-navigation/native').useNavigation;
    useNavigation.mockReturnValue({replace: mockNavigate});
  });

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

  it('should validate the format and length of the card number', async () => {
    const {getByTestId, queryByText} = testRender(<CardFormScreen />);

    const numberInput = getByTestId('card-number');
    fireEvent.changeText(numberInput, '1234 5678 1234');
    fireEvent(numberInput, 'blur', mocKBlurEvent);

    await waitFor(() => {
      expect(
        queryByText('o campo número deve ter exatamente 16 dígitos.'),
      ).toBeTruthy();
    });
  });

  it('should validate the card holder name', async () => {
    const {getByTestId, queryByText} = testRender(<CardFormScreen />);

    const holderNameInput = getByTestId('card-holderName');
    fireEvent.changeText(holderNameInput, '');
    fireEvent(holderNameInput, 'blur', mocKBlurEvent);

    await waitFor(() => {
      expect(queryByText('O campo nome é obrigatório.')).toBeTruthy();
    });
  });

  it('should validate the card expiration format', async () => {
    const {getByTestId, queryByText} = testRender(<CardFormScreen />);

    const validThruInput = getByTestId('valid-thru');
    fireEvent.changeText(validThruInput, '13/25');
    fireEvent(validThruInput, 'blur', mocKBlurEvent);

    await waitFor(() => {
      expect(
        queryByText('O campo vencimento deve estar no formato mm/aa.'),
      ).toBeTruthy();
    });
  });

  it('should validate the CVV format', async () => {
    const {getByTestId, queryByText} = testRender(<CardFormScreen />);

    const cvvInput = getByTestId('card-CVV');
    fireEvent.changeText(cvvInput, '12');
    fireEvent(cvvInput, 'blur', mocKBlurEvent);

    await waitFor(() => {
      expect(queryByText('CVV deve ter pelo menos 3 dígitos')).toBeTruthy();
    });
  });

  it('should navigate to LoadingCardsScreen when all fields are correct', async () => {
    postCardMock.mockResolvedValue({status: 200} as any);

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

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('LoadingCardsScreen');
    });
  });

  it('should call postCard when all fields are correct', async () => {
    postCardMock.mockResolvedValue({status: 200} as any);

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

    await waitFor(() => {
      expect(postCardMock).toHaveBeenCalledWith({
        cvv: '123',
        holderName: 'Lúcio',
        number: '1234 5678 1234 5678',
        validThru: '12/25',
      });
    });
  });

  it('should display error when request fail', async () => {
    postCardMock.mockRejectedValue({status: 400} as any);

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

    await waitFor(() => {
      expect(mockToastShow).toHaveBeenCalledWith({
        type: 'error',
        text1: 'Não foi possível cadastrar esse cartão',
        text2: 'Favor tente novamente em alguns instantes',
      });
    });
  });
});
