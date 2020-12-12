import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './Header';
import Inputs from './Inputs';

const Main = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inputsView}>
        <Inputs />
      </View>
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#15202b',
    color: '#ffffff',
  },
  inputsView: {
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingTop: 30,
    paddingBottom: 30,
  },
});

export default Main;
