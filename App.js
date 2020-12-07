import React, {useState} from 'react';
import {View, Text, TouchableHighlight, StyleSheet, Image} from 'react-native';
import Header from './components/Login/Header';
import AccountChoice from './components/Login/AccountChoice';

const App = () => {
  const headerText = 'See what’s happening in the world right now';
  const buttonsText = 'Join Twitter today.';

  return (
    <View style={styles.body}>
      <View style={styles.headerWrapper}>
        <Header text={headerText} />
      </View>

      <View style={styles.main}>
        <AccountChoice text={buttonsText} />
      </View>
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#15202b',
    color: '#ffffff',
  },

  headerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
});

export default App;
