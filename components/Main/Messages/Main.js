import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Header, {borderStyle} from '../Header';

const _middleChild = () => {
  return <Text style={styles.headerText}>Messages</Text>;
};

const Main = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={borderStyle}>
        <Header middleChild={_middleChild()} rightIcon={'settings'} />
      </View>
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
