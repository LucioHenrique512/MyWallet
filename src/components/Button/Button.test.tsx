import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {Button} from './index';
import {theme} from '../../themes';
import * as StyledComponents from 'styled-components/native';
import {testRender} from '../../utils/testUtils';

jest.mock('react-native-responsive-fontsize');

describe(Button.name, () => {
  beforeEach(() => {
    jest.spyOn(StyledComponents, 'useTheme').mockReturnValue(theme);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should renders with default colors', () => {
    const {getByText} = testRender(
      <Button text="Click me" onPress={jest.fn()} />,
    );
    const buttonText = getByText('Click me');
    expect(buttonText.props.style.color).toBe(theme.colors.deepNight);
  });

  it('should renders with secondary colors', () => {
    const {getByText} = testRender(
      <Button text="Click me" onPress={jest.fn()} variant="secondary" />,
    );
    const buttonText = getByText('Click me');
    expect(buttonText.props.style.color).toBe(theme.colors.white);
  });

  it('should fires onPress event', () => {
    const onPressMock = jest.fn();
    const {getByText} = testRender(
      <Button text="Click me" onPress={onPressMock} />,
    );
    const button = getByText('Click me');

    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });

  describe('on disabled', () => {
    it('should renders disabled button', () => {
      const {getByText} = testRender(
        <Button text="Click me" onPress={jest.fn()} disabeld={true} />,
      );
      const buttonText = getByText('Click me');
      expect(buttonText.props.style.color).toBe(theme.colors.mediumGray);
    });

    it('should not fires onPress event', () => {
      const onPressMock = jest.fn();
      const {getByText} = testRender(
        <Button text="Click me" onPress={onPressMock} disabeld={true} />,
      );
      const button = getByText('Click me');

      fireEvent.press(button);
      expect(onPressMock).not.toHaveBeenCalled();
    });
  });

  describe('on loading', () => {
    it('should renders disabled button', () => {
      const {getByTestId} = testRender(
        <Button text="Click me" onPress={jest.fn()} loading={true} />,
      );
      const button = getByTestId('button');
      expect(button.props.style.backgroundColor).toBe(theme.colors.lightGray);
    });

    it('should not fires onPress event', () => {
      const onPressMock = jest.fn();
      const {getByTestId} = testRender(
        <Button text="Click me" onPress={onPressMock} loading={true} />,
      );
      const button = getByTestId('button');

      fireEvent.press(button);
      expect(onPressMock).not.toHaveBeenCalled();
    });

    it('should render activity-indicator', () => {
      const onPressMock = jest.fn();
      const {getByTestId} = testRender(
        <Button text="Click me" onPress={onPressMock} loading={true} />,
      );
      const indicator = getByTestId('activity-indicator');

      expect(indicator).toBeTruthy();
    });
  });
});
