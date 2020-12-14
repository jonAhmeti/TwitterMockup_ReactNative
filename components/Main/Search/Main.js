import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import Header, {iconDefaultShape} from '../Header';
import SearchBar from '../../defaults/SearchBar';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Main = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Header
          middleChild={<SearchBar />}
          rightIcon={<Feather name={'settings'} {...iconDefaultShape} />}
        />
      </View>
    </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#15202b',
  },
});
