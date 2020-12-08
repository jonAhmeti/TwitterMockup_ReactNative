import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const AccountChoice = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>{props.text}</Text>
      <View style={styles.buttonsWrapper}>
        <TouchableHighlight
          activeOpacity={0.75}
          underlayColor={'#fff'}
          onPress={() => props.navigation.navigate('signUp')}
          style={[styles.sizeBorder, styles.touchableWrapper]}>
          <View style={[styles.sizeBorder, styles.button, styles.buttonSignUp]}>
            <Text style={[styles.textBold, styles.signUpText]}>Sign Up</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.75}
          underlayColor={'#fff'}
          onPress={() => props.navigation.navigate('login')}
          style={[styles.sizeBorder, styles.touchableWrapper]}>
          <View style={[styles.sizeBorder, styles.button, styles.buttonLogin]}>
            <Text style={[styles.textBold, styles.loginText]}>Login</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  topText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 30,
  },
  buttonsWrapper: {
    alignItems: 'center',
  },
  sizeBorder: {
    borderRadius: 60,
    height: 50,
    width: 250,
  },
  touchableWrapper: {
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    borderWidth: 2,
    borderColor: '#5dbced',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSignUp: {
    backgroundColor: '#5dbced',
  },
  buttonLogin: {
    backgroundColor: '#15202b',
  },
  textBold: {
    fontWeight: 'bold',
  },
  signUpText: {
    color: '#ffffff',
  },
  loginText: {
    color: '#1da1f2',
  },
});

export default AccountChoice;
