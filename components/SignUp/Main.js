import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Text,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SignUpText = 'Create your account';

const Main = () => {
  return (
    <View style={styles.body}>
      <View style={styles.logoWrapper}>
        <AntDesign name={'twitter'} style={styles.logo} />
        <Text style={styles.logoText}>{SignUpText}</Text>
      </View>
      <View style={styles.outterTouchWrapper}>
        <TouchableHighlight
          style={[styles.touchWrapper, styles.usernameWrapper]}>
          <View style={styles.innerTouchWrapper}>
            <Text style={styles.inputLabel}>Username:</Text>
            <TextInput style={styles.inputText} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.touchWrapper, styles.passwordWrapper]}>
          <View style={styles.innerTouchWrapper}>
            <Text style={styles.inputLabel}>Password:</Text>
            <TextInput style={styles.inputText} />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#15202b',
    color: '#ffffff',
  },
  logoWrapper: {
    backgroundColor: 'skyblue',
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
  outterTouchWrapper: {
    paddingTop: 30,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  touchWrapper: {
    borderRadius: 60,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#192734',
    borderBottomWidth: 1,
    borderColor: '#5dbced',
  },
  innerTouchWrapper: {
    height: 50,
    width: 250,
    paddingTop: 5,
    marginBottom: 10,
  },
  inputLabel: {
    color: '#5dbced',
  },
  inputText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
  usernameWrapper: {
    marginBottom: 15,
  },
  passwordWrapper: {
    marginTop: 15,
  },
});

export default Main;
