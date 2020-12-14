import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header, {iconDefaultShape} from './Header';
import Body from './Body';
import Logo from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Main = () => {
  return (
    <View style={styles.container}>
      <Header
        middleChild={<Logo name={'twitter'} style={styles.logo} />}
        rightIcon={<MaterialIcons name={'insights'} {...iconDefaultShape} />}
      />
      <Body />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15202b',
  },
  logo: {
    fontSize: 25,
    color: '#5dbced',
  },
});
export default Main;
