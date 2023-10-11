import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './themes';
import {Navigation} from './navigation';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  'Sending `onAnimatedValueUpdate` with no listeners registered.',
]);

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
