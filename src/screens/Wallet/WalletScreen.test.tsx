import React from 'react';
import {WalletScreen} from '.';
import {testRender} from '../../utils/testUtils';
import {fireEvent} from '@testing-library/react-native';

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: jest.fn().mockReturnValue({top: 20, bottom: 20}),
}));

const cardsMock = [
  {
    number: '1234 1234 1341 2342',
    holderName: 'Relâmpago Marquinhosos',
    validThru: '12/13',
    cvv: '123',
    id: 1,
  },
  {
    number: '1234 1244 1244 1244',
    holderName: 'Sr. Luiz Hamilton',
    validThru: '12/34',
    cvv: '123',
    id: 2,
  },
];

jest.mock('../../context', () => ({
  useAppContext: () => ({
    cards: cardsMock,
  }),
}));

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn(),
  };
});

describe(WalletScreen.name, () => {
  const mockReplace = jest.fn();
  const mockGoBack = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    const useNavigation = require('@react-navigation/native').useNavigation;
    useNavigation.mockReturnValue({replace: mockReplace, goBack: mockGoBack});
  });

  it('should go back arrow are pressed', () => {
    const {getByTestId} = testRender(<WalletScreen />);
    const backButton = getByTestId('back-button');
    fireEvent.press(backButton);

    expect(mockGoBack).toBeCalled();
  });

  it('should navigate to CardFormScreen when times is pressed ', () => {
    const {getByTestId} = testRender(<WalletScreen />);
    const backButton = getByTestId('add-card-button');
    fireEvent.press(backButton);

    expect(mockReplace).toBeCalledWith('CardFormScreen');
  });

  it('should render a list of cards', () => {
    const {getByText} = testRender(<WalletScreen />);

    expect(getByText('Sr. Luiz Hamilton')).toBeTruthy();
  });
});
