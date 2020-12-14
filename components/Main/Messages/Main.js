import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Header, {iconDefaultShape} from '../Header';
import Feather from 'react-native-vector-icons/Feather';

const _middleChild = () => {
  return <Text style={styles.headerText}>Messages</Text>;
};

const Main = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Header
          middleChild={_middleChild()}
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
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
