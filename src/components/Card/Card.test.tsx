import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {Card} from '.';
import {testRender} from '../../utils/testUtils';

describe(Card.name, () => {
  it('should renders card details correctly', () => {
    const {getByText} = testRender(
      <Card
        cardName="Banco Radiator Springs"
        holderName="Relâmpago Marquinhos"
        number="1234 5678 9101 1121"
        validtrhu="04/96"
        color="#FF5733"
        onPress={jest.fn()}
      />,
    );

    expect(getByText('Banco Radiator Springs')).toBeTruthy();
    expect(getByText('Relâmpago Marquinhos')).toBeTruthy();
    expect(getByText('1234 5678 9101 1121')).toBeTruthy();
    expect(getByText('Validade 04/96')).toBeTruthy();
  });

  it('should renders the correct color', () => {
    const testColor = '#FF5733';
    const {getByTestId} = testRender(
      <Card
        cardName="Banco Radiator Springs"
        holderName="Relâmpago Marquinhos"
        number="1234 5678 9101 1121"
        validtrhu="04/96"
        color={testColor}
        onPress={jest.fn()}
      />,
    );

    const container = getByTestId('card-container');
    expect(container.props.style.backgroundColor).toBe(testColor);
  });

  it('should fires onPress event', () => {
    const onPressMock = jest.fn();
    const {getByText} = testRender(
      <Card
        cardName="Banco Radiator Springs"
        holderName="Relâmpago Marquinhos"
        number="1234 5678 9101 1121"
        validtrhu="04/96"
        color="#FF5733"
        onPress={onPressMock}
      />,
    );

    fireEvent.press(getByText('Banco Radiator Springs'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
