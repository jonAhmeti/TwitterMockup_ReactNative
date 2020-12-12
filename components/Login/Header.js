import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <AntDesign name={'twitter'} style={styles.logo} />
      <Text style={styles.text}>Log in to Twitter</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    fontSize: 30,
    color: '#fff',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    paddingTop: 30,
  },
});
