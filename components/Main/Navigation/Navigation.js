import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from '../Main';
import BottomTabIcon, {
  bottomTabOptions,
  bottomTabScreenOptions,
} from './BottomTabDesign';
import SearchNavigation from '../Search/Navigation/StackNavigation';
import NotificationsNavigation from '../Notifications/Navigation/StackNavigation';

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <BottomTab.Navigator
      tabBarOptions={bottomTabOptions}
      screenOptions={bottomTabScreenOptions}
      initialRoute={'home'}
      backbehaviour={'order'}>
      <BottomTab.Screen
        name={'home'}
        component={Main}
        options={{
          tabBarIcon: ({focused, color, size}) =>
            BottomTabIcon({focused, color, size, icon: 'home'}),
        }}
      />
      <BottomTab.Screen
        name={'search'}
        component={SearchNavigation}
        options={{
          tabBarIcon: ({focused, color, size}) =>
            BottomTabIcon({focused, color, size, icon: 'search'}),
        }}
      />
      <BottomTab.Screen
        name={'notifications'}
        component={NotificationsNavigation}
        options={{
          tabBarIcon: ({focused, color, size}) =>
            BottomTabIcon({focused, color, size, icon: 'bell'}),
        }}
      />
      <BottomTab.Screen
        name={'messages'}
        component={Main}
        options={{
          tabBarIcon: ({focused, color, size}) =>
            BottomTabIcon({focused, color, size, icon: 'mail'}),
          tabBarBadge: 999,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Navigation;
