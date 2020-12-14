import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Header from '../Header';

const _middleChild = () => {
  return <Text style={styles.headerText}>Notifications</Text>;
};

const Main = () => {
  return (
    <ScrollView style={styles.container}>
      <Header middleChild={_middleChild()} rightIcon={'settings'} />
    </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#15202b',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
