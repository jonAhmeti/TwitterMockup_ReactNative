import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../Login/Header';
import AccountChoice from '../Login/AccountChoice';

const Main = ({navigation}) => {
  const headerText = 'See what’s happening in the world right now';
  const buttonsText = 'Join Twitter today.';

  return (
    <View style={styles.body}>
      <View style={styles.headerWrapper}>
        <Header text={headerText} />
      </View>

      <View style={styles.main}>
        <AccountChoice navigation={navigation} text={buttonsText} />
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

export default Main;
