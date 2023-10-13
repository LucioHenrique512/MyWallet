import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './themes';
import {Navigation} from './navigation';
import {LogBox} from 'react-native';
import Toast from 'react-native-toast-message';

import {RFPercentage} from 'react-native-responsive-fontsize';
import {AppContextProvider} from './context';

LogBox.ignoreLogs([
  'Sending `onAnimatedValueUpdate` with no listeners registered.',
]);

function App(): JSX.Element {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppContextProvider>
          <Navigation />
        </AppContextProvider>
      </ThemeProvider>
      <Toast topOffset={RFPercentage(10)} />
    </>
  );
}

export default App;
