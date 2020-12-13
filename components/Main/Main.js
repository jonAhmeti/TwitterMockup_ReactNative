import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './Header';
import Body from './Body';

const Main = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15202b',
  },
});
export default Main;
