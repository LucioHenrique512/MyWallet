import React from 'react';
import {RenderOptions, render} from '@testing-library/react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from '../themes';

export const testRender = (
  component: React.ReactElement,
  options?: RenderOptions,
) => render(<ThemeProvider theme={theme}>{component}</ThemeProvider>, options);
