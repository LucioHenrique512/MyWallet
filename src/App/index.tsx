import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from '../themes';
import * as S from './styles';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <S.Container />
    </ThemeProvider>
  );
}

export default App;
