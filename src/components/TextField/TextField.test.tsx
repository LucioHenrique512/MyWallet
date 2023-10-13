import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {TextField} from '.';
import {testRender} from '../../utils/testUtils';
import {Text} from 'react-native';

describe(TextField.name, () => {
  it('should renders the label correctly', () => {
    const {getByText} = testRender(<TextField label="Nome" />);
    expect(getByText('Nome')).toBeTruthy();
  });

  it('should renders the input value correctly', () => {
    const {getByDisplayValue} = testRender(<TextField value="Lúcio" />);
    expect(getByDisplayValue('Lúcio')).toBeTruthy();
  });

  it('should calls onChangeText when the input value changes', () => {
    const onChangeTextMock = jest.fn();
    const {getByPlaceholderText} = testRender(
      <TextField
        onChangeText={onChangeTextMock}
        placeholder="Digite seu nome"
      />,
    );
    const input = getByPlaceholderText('Digite seu nome');

    fireEvent.changeText(input, 'Novo nome');

    expect(onChangeTextMock).toHaveBeenCalledWith('Novo nome');
  });

  it('should render component passed by parameter correctly', () => {
    const text = 'Hello world1';

    const {getByText} = testRender(
      <TextField
        placeholder="Digite seu nome"
        leftItem={<Text>{text}</Text>}
      />,
    );

    expect(getByText(text)).toBeTruthy();
  });
});
