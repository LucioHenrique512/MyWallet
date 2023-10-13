import React from 'react';
import {render} from '@testing-library/react-native';
import {SpinningWallet} from '.';

describe(SpinningWallet.name, () => {
  it('renders correctly', () => {
    const {getByTestId} = render(<SpinningWallet />);
    expect(getByTestId('animated-view')).toBeTruthy();
  });

  it('displays WalletIcon', () => {
    const {queryByTestId} = render(<SpinningWallet />);
    expect(queryByTestId('wallet-icon')).toBeTruthy();
  });
});
