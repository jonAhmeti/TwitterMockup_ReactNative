import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <AntDesign name="twitter" style={styles.logo} />
      <View style={styles.logoTextWrapper}>
        <Text style={styles.logoText}>{props.text}</Text>
      </View>
    </View>
  );
};

Header.defaultProps = {
  text: 'See what’s happening in the world right now',
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 40,
    paddingRight: 40,
    alignSelf: 'stretch',
  },
  logo: {
    fontSize: 70,
    color: '#ffffff',
    textShadowColor: 'black',
  },
  logoTextWrapper: {
    marginLeft: 40,
    marginTop: 5,
  },
  logoText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default Header;
