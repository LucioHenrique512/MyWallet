import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {useTheme} from 'styled-components/native';
import {MainScreen} from './screens/MainScreen';
import {CardFormScreen} from './screens/CardForm';
import {WalletScreen} from './screens/Wallet/indes';
import {LoadingScreen} from './screens/LoadingScreen';

export type NavigationParams = {
  MainScreen: undefined;
  CardFormScreen: undefined;
  WalletScreen: undefined;
  LoadingScreen: undefined;
};

const Stack = createStackNavigator<NavigationParams>();

export const Navigation: React.FC = () => {
  const {colors} = useTheme();

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.deepNight,
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        initialRouteName={'MainScreen'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="CardFormScreen" component={CardFormScreen} />
        <Stack.Screen name="WalletScreen" component={WalletScreen} />
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
