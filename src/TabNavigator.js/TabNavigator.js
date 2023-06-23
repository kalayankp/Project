import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MobileScreen from '../MobileScreen';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from '../ProfileScreen';
import SelfScreen from '../SelfScreen';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MobileScreen} />
      <Tab.Screen name="Self" component={SelfScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
