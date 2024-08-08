import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../modules/home';
import More from '../../modules/more';
import Profile from '../../modules/profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="More" component={More} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
