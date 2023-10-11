import React from 'react';
import {RenderOptions, render} from '@testing-library/react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from '../themes';

export const testRender = (
  component: React.ReactElement,
  options?: RenderOptions,
) => render(<ThemeProvider theme={theme}>{component}</ThemeProvider>, options);

export const createMockEvent = (overrides?: any) => {
  return {
    bubbles: false,
    cancelable: false,
    currentTarget: {
      dataset: {},
      value: '',
    },
    defaultPrevented: false,
    eventPhase: 0,
    isTrusted: false,
    nativeEvent: {},
    preventDefault: () => {},
    isDefaultPrevented: () => {
      return false;
    },
    stopPropagation: () => {},
    isPropagationStopped: () => {
      return false;
    },
    persist: () => {},
    target: {
      value: '',
      checked: false,
      name: '',
    },
    timeStamp: Date.now(),
    type: 'generic',
    ...overrides,
  };
};
