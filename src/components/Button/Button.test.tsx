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
});
