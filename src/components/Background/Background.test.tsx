import React from 'react';
import {Background} from '.';
import {testRender} from '../../utils/testUtils';
import {Text} from 'react-native';

describe(Background.name, () => {
  it('should renders children correctly', () => {
    const text = 'Hello world!';

    const {getByText} = testRender(
      <Background>{<Text>{text}</Text>}</Background>,
    );
    expect(getByText(text)).toBeTruthy();
  });
});
