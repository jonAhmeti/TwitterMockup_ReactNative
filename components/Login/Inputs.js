import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import TwitterButton from '../defaults/TwitterButton';

const Inputs = (props) => {
  const [isFocused, setIsFocused] = useState(undefined);
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  function onInputFocus(inputName) {
    if (inputName === 'password') {
      setPasswordFocus(true);
      setIsFocused(stylesFocused);
      setUsernameFocus(false);
    } else {
      setUsernameFocus(true);
      setIsFocused(stylesFocused);
      setPasswordFocus(false);
    }
  }

  function onInputBlur() {
    setUsernameFocus(false);
    setPasswordFocus(false);
    setIsFocused(undefined);
  }

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputWrapper,
          usernameFocus ? isFocused?.inputWrapper : undefined,
        ]}>
        <Text
          style={[styles.label, usernameFocus ? isFocused?.label : undefined]}>
          Username
        </Text>
        <TextInput
          onFocus={() => onInputFocus('username')}
          onBlur={() => onInputBlur()}
          style={styles.input}
          value={props.route.params.email}
        />
      </View>
      <View
        style={[
          styles.inputWrapper,
          passwordFocus ? isFocused?.inputWrapper : undefined,
        ]}>
        <Text
          style={[styles.label, passwordFocus ? isFocused?.label : undefined]}>
          Password
        </Text>
        <TextInput
          secureTextEntry={true}
          onFocus={() => onInputFocus('password')}
          onBlur={() => onInputBlur()}
          style={styles.input}
        />
      </View>
      <View style={styles.button}>
        <TwitterButton
          text={'Log in'}
          onPress={() => props.navigation.navigate('main')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: '#556872',
    width: 250,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
  },
  label: {
    marginTop: 5,
    color: '#556872',
  },
  input: {
    color: '#fff',
    padding: 0,
  },
  button: {
    marginTop: 30,
  },
});

const stylesFocused = StyleSheet.create({
  inputWrapper: {
    borderWidth: 2,
    borderColor: '#5dbced',
  },
  label: {
    color: '#5dbced',
  },
});

export default Inputs;
