import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from '../Main';
import BottomTabIcon, {
  bottomTabOptions,
  bottomTabScreenOptions,
} from './BottomTabDesign';
import SearchNavigation from '../Search/Navigation/StackNavigation';
import NotificationsNavigation from '../Notifications/Navigation/StackNavigation';
import MessagesNavigation from '../Messages/Navigation/StackNavigation';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator
      tabBarOptions={bottomTabOptions}
      screenOptions={bottomTabScreenOptions}
      initialRoute={'home'}
      backBehavior={'none'}>
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
          tabBarBadge: 3,
        }}
      />
      <BottomTab.Screen
        name={'messages'}
        component={MessagesNavigation}
        options={{
          tabBarIcon: ({focused, color, size}) =>
            BottomTabIcon({focused, color, size, icon: 'mail'}),
          tabBarBadge: 999,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;
