import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const AccountChoice = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>{props.text}</Text>
      <View style={styles.buttonsWrapper}>
        <TouchableHighlight style={[styles.buttons, styles.buttonSignUp]}>
          <Text style={[styles.buttonText, styles.signUpText]}>Sign Up</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttons, styles.buttonLogin]}>
          <Text style={[styles.buttonText, styles.loginText]}>Login</Text>
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
  buttons: {
    borderWidth: 2,
    borderColor: '#5dbced',
    height: 50,
    width: 250,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonSignUp: {
    backgroundColor: '#5dbced',
  },
  buttonLogin: {
    backgroundColor: '#15202b',
  },
  buttonText: {
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
