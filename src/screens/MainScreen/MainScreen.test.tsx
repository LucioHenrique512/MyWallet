import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {MainScreen} from '.';
import {testRender} from '../../utils/testUtils';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn(),
  };
});

describe(MainScreen.name, () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    const useNavigation = require('@react-navigation/native').useNavigation;
    useNavigation.mockReturnValue({navigate: mockNavigate});
  });

  it('should renders the screen with logo', () => {
    const {getByText} = testRender(<MainScreen />);

    expect(getByText('My Wallet')).toBeTruthy();
  });

  it('should renders the screen with buttons', () => {
    const {getByText} = testRender(<MainScreen />);

    expect(getByText('Meus cartões')).toBeTruthy();
    expect(getByText('Cadastrar cartão')).toBeTruthy();
  });

  it('should navigates to LoadingCardsScreen when "Meus cartões" button is pressed', () => {
    const {getByText} = testRender(<MainScreen />);

    fireEvent.press(getByText('Meus cartões'));

    expect(mockNavigate).toHaveBeenCalledWith('LoadingCardsScreen');
  });

  it('should navigates to CardFormScreen when "Cadastrar cartão" button is pressed', () => {
    const {getByText} = testRender(<MainScreen />);

    fireEvent.press(getByText('Cadastrar cartão'));

    expect(mockNavigate).toHaveBeenCalledWith('CardFormScreen');
  });
});
