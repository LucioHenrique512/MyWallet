import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import {AppContextProvider, useAppContext} from '.';
import {Button, Text} from 'react-native';

const TestComponent: React.FC = () => {
  const {cards, setCards} = useAppContext();

  return (
    <>
      <Text testID="card-count">{cards.length}</Text>
      <Button
        title="Add Card"
        onPress={() =>
          setCards([
            {
              number: '1234 1234 1341 2342',
              holderName: 'Relâmpago Marquinhosos',
              validThru: '12/13',
              cvv: '123',
              id: 1,
            },
          ])
        }
      />
    </>
  );
};

describe('AppContext', () => {
  it('should initialize with an empty cards array', () => {
    const {getByTestId} = render(
      <AppContextProvider>
        <TestComponent />
      </AppContextProvider>,
    );

    expect(getByTestId('card-count').children[0]).toBe('0');
  });

  it('should update cards when setCards is called', async () => {
    const {getByTestId, getByText} = render(
      <AppContextProvider>
        <TestComponent />
      </AppContextProvider>,
    );

    await act(async () => {
      fireEvent.press(getByText('Add Card'));
    });

    expect(getByTestId('card-count').children[0]).toBe('1');
  });
});
