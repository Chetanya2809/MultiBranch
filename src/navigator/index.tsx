import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import BottomNavigator from './BottomNavigator';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent />
      <Stack.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          animation: 'slide_from_right',
          headerShown: false,
        }}>
        <Stack.Screen component={BottomNavigator} name="BottomNavigator" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
