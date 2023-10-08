import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {MainScreen} from './screens';
import {useTheme} from 'styled-components/native';

export type NavigationParams = {
  MainScreen: undefined;
};

const Stack = createStackNavigator<NavigationParams>();

export const Navigation: React.FC = () => {
  const {colors} = useTheme();

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.background,
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
