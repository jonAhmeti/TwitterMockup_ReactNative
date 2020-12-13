import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Logo from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
  return (
    <View style={styles.container}>
      <SimpleLineIcons name={'menu'} style={styles.icon} />
      <Logo name={'twitter'} style={styles.icon} />
      <MaterialIcons name={'insights'} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderColor: '#556872',
    borderBottomWidth: 0.2,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: 30,
    color: '#5dbced',
  },
});
export default Header;
