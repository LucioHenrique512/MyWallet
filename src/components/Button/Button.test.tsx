import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Button} from './index';
import {theme} from '../../themes';
import * as StyledComponents from 'styled-components/native';

jest.mock('react-native-responsive-fontsize');

describe(Button.name, () => {
  beforeEach(() => {
    jest.spyOn(StyledComponents, 'useTheme').mockReturnValue(theme);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders with default colors', () => {
    const {getByText} = render(<Button text="Click me" onPress={jest.fn()} />);
    const buttonText = getByText('Click me');
    expect(buttonText.props.style.color).toBe(theme.colors.deepNight);
  });

  it('renders with secondary colors', () => {
    const {getByText} = render(
      <Button text="Click me" onPress={jest.fn()} variant="secondary" />,
    );
    const buttonText = getByText('Click me');
    expect(buttonText.props.style.color).toBe(theme.colors.white);
  });

  it('fires onPress event', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <Button text="Click me" onPress={onPressMock} />,
    );
    const button = getByText('Click me');

    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });

  describe('on disabled', () => {
    it('renders disabled button', () => {
      const {getByText} = render(
        <Button text="Click me" onPress={jest.fn()} disabeld={true} />,
      );
      const buttonText = getByText('Click me');
      expect(buttonText.props.style.color).toBe(theme.colors.mediumGray);
    });

    it('do not fires onPress event', () => {
      const onPressMock = jest.fn();
      const {getByText} = render(
        <Button text="Click me" onPress={onPressMock} disabeld={true} />,
      );
      const button = getByText('Click me');

      fireEvent.press(button);
      expect(onPressMock).not.toHaveBeenCalled();
    });
  });
});
