import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import Header from '../Header';
import SearchBar from '../../defaults/SearchBar';

const Main = () => {
  return (
    <ScrollView style={styles.container}>
      <Header middleChild={<SearchBar />} />
      <View />
    </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#15202b',
  },
});
