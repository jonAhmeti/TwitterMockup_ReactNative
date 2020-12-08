import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Text, View, StyleSheet} from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.logoWrapper}>
      <AntDesign name={'twitter'} style={styles.logo} />
      <Text style={styles.logoText}>{props.text}</Text>
    </View>
  );
};

Header.defaultProps = {
  text: 'Create your account',
};

const styles = StyleSheet.create({
  logoWrapper: {
    backgroundColor: '#5dbced',
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30 + 25 + 30,
  },
  logo: {
    color: '#fff',
    fontSize: 30,
  },
  logoText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 25,
    paddingTop: 30,
  },
});

export default Header;
