/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import Home from '../modules/home';
import More from '../modules/more';
import Profile from '../modules/profile';

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
        <Stack.Screen component={Home} name={'Home'} />
        <Stack.Screen component={More} name={'More'} />
        <Stack.Screen component={Profile} name={'Profile'} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
