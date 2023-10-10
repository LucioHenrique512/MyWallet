import 'react-native';
import React from 'react';
import App from './App';
import {render} from '@testing-library/react-native';

jest.mock('react-native-responsive-fontsize', () => ({
  RFPercentage: jest.fn().mockReturnValue(10),
}));

describe(App.name, () => {
  it('renders correctly', () => {
    render(<App />);
  });
});
