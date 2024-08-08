import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../modules/home';
import More from '../../modules/more';
import Profile from '../../modules/profile';

const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="More" component={More} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default BottomNavigator;
