import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from './Header';
import Inputs from './Inputs';

const Main = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.inputsWrapper}>
        <Inputs />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15202b',
  },
  header: {
    paddingTop: 30,
    paddingBottom: 60,
  },
  inputsWrapper: {
    alignItems: 'center',
  },
});

export default Main;
