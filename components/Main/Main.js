import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './Header';
import Body from './Body';
import Logo from 'react-native-vector-icons/AntDesign';

const Main = () => {
  return (
    <View style={styles.container}>
      <Header middleChild={<Logo name={'twitter'} style={styles.logo} />} />
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
