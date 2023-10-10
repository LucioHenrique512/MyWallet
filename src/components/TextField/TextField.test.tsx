import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {TextField} from '.';
import {testRender} from '../../utils/testUtils';

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
});
