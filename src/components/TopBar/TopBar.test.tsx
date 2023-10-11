import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {TopBar} from '.';
import {Text} from 'react-native';
import {testRender} from '../../utils/testUtils';

describe(TopBar.name, () => {
  it('should renders the title correctly', () => {
    const {getByText} = testRender(
      <TopBar title="Tela Principal" onBackPress={jest.fn()} />,
    );
    expect(getByText('Tela Principal')).toBeTruthy();
  });

  it('should fires onBackPress event', () => {
    const onBackPressMock = jest.fn();
    const {getByTestId} = testRender(
      <TopBar title="Tela Principal" onBackPress={onBackPressMock} />,
    );

    const backButton = getByTestId('back-button');
    fireEvent.press(backButton);

    expect(onBackPressMock).toHaveBeenCalled();
  });

  it('should renders the rightItem correctly', () => {
    const {getByText} = testRender(
      <TopBar
        title="Tela Principal"
        onBackPress={jest.fn()}
        rightItem={<Text>Hello</Text>}
      />,
    );

    expect(getByText('Hello')).toBeTruthy();
  });

  it('should renders the shadow style conditionally', () => {
    const {getByTestId} = testRender(
      <TopBar title="Tela Principal" onBackPress={jest.fn()} enableShadow />,
    );

    const container = getByTestId('topbar-container');
    expect(container.props.style[1]).toMatchObject({
      elevation: 12,
      shadowColor: '#000000',
      shadowOffset: {height: 9, width: 0},
      shadowOpacity: 0.22,
      shadowRadius: 9.22,
    });
  });

  it('applies white background when whiteBackground prop is true', () => {
    const {getByTestId} = testRender(
      <TopBar
        title="Tela Principal"
        onBackPress={jest.fn()}
        whiteBackground={true}
      />,
    );

    const container = getByTestId('topbar-container');
    expect(container.props.style.backgroundColor).toBe('#FFFFFF');
  });

  it('does not apply white background when whiteBackground prop is false', () => {
    const {getByTestId} = testRender(
      <TopBar
        title="Tela Principal"
        onBackPress={jest.fn()}
        whiteBackground={false}
      />,
    );

    const container = getByTestId('topbar-container');

    expect(container.props.style.backgroundColor).not.toBe('#FFFFFF');
  });
});
