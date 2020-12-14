import React from 'react';
import {StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const BottomTabIcon = ({focused, color, size, icon}) => {
  return <Feather name={icon} size={size} color={color} />;
};

const styles = StyleSheet.create({
  bottomTab: {
    height: 60,
    borderColor: '#556872',
    borderTopWidth: 0.2,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#15202b',
  },
});
export const bottomTabOptions = {
  style: styles.bottomTab,
  inactiveTintColor: '#556872',
  activeTintColor: '#5dbced',
  keyboardHidesTabBar: true,
  showLabel: false,
};
export const bottomTabScreenOptions = {
  tabBarBadgeStyle: {backgroundColor: '#5dbced'},
};

export default BottomTabIcon;
