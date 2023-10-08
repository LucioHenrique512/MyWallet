import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './themes';
import {Navigation} from './navigation';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
