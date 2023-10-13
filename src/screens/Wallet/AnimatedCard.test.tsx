import React from 'react';
import {fireEvent, act} from '@testing-library/react-native';
import {AnimatedCard} from './AnimatedCard';
import {CardState} from '../../types';
import {testRender} from '../../utils/testUtils';
import {ThemeProvider} from 'styled-components/native';
import {theme} from '../../themes';
import {withTiming} from 'react-native-reanimated';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  Reanimated.useSharedValue = jest.fn(initialValue => {
    return {
      value: initialValue,
    };
  });

  Reanimated.useAnimatedStyle = jest.fn(fn => {
    return fn();
  });

  Reanimated.withTiming = jest.fn((value, config, callback) => {
    callback && callback(true);
    return value;
  });

  return Reanimated;
});

describe('AnimatedCard component', () => {
  const mockOnCardPress = jest.fn();
  const mockOnButtonPress = jest.fn();

  const cardData = {
    id: '1',
    cardName: 'Test Card',
    holderName: 'John Doe',
    number: '1234 5678 9012 3456',
    validThru: '12/23',
    isBlack: false,
    cvv: '123',
  };

  it('should render correctly', () => {
    const {getByText} = testRender(
      <AnimatedCard
        item={cardData}
        onCardPress={mockOnCardPress}
        onButtonPress={mockOnButtonPress}
        index={1}
      />,
    );

    expect(getByText('Test Card')).toBeTruthy();
  });

  it('should trigger onCardPress when card is pressed', () => {
    const {getByText} = testRender(
      <AnimatedCard
        item={cardData}
        onCardPress={mockOnCardPress}
        onButtonPress={mockOnButtonPress}
        index={1}
      />,
    );

    act(() => {
      fireEvent.press(getByText('Test Card'));
    });

    expect(mockOnCardPress).toHaveBeenCalled();
  });

  it('should handle animations when cardState is SELECTED', () => {
    const {rerender} = testRender(
      <AnimatedCard
        item={cardData}
        onCardPress={mockOnCardPress}
        onButtonPress={mockOnButtonPress}
        cardState={CardState.UNSELECTED}
        index={1}
      />,
    );

    rerender(
      <ThemeProvider theme={theme}>
        <AnimatedCard
          item={cardData}
          onCardPress={mockOnCardPress}
          onButtonPress={mockOnButtonPress}
          cardState={CardState.SELECTED}
          index={1}
        />
      </ThemeProvider>,
    );

    expect(withTiming).toHaveBeenCalled();
  });

  it('should render button when cardState is SELECTED', () => {
    const {getByText, rerender} = testRender(
      <AnimatedCard
        item={cardData}
        onCardPress={mockOnCardPress}
        onButtonPress={mockOnButtonPress}
        cardState={CardState.UNSELECTED}
        index={1}
      />,
    );
    try {
      getByText('Pagar com esse cartão');
    } catch (error: any) {
      expect(true).toBeTruthy();
    }

    rerender(
      <ThemeProvider theme={theme}>
        <AnimatedCard
          item={cardData}
          onCardPress={mockOnCardPress}
          onButtonPress={mockOnButtonPress}
          cardState={CardState.SELECTED}
          index={1}
        />
      </ThemeProvider>,
    );
    expect(getByText('Pagar com esse cartão')).toBeTruthy();
  });
});
