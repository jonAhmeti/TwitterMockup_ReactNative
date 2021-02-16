import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import TwitterButton from '../defaults/TwitterButton';

const Inputs = (props) => {
  const [isFocused, setIsFocused] = useState(undefined);
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [username, setUsername] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [fetching, setFetching] = useState(false);

  async function login() {
    props.route.params?.email
      ? setUsername(props.route.params.email)
      : undefined;

    if (username && password) {
      try {
        setFetching(true);
        let result = await fetch(
          'https://twitterapi.conveyor.cloud/User/Login',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          },
        );
        let jsonResult = await result.json();
        console.log(jsonResult);
        setFetching(false);
        jsonResult === true
          ? props.navigation.navigate('main')
          : alert('Invalid username or password');
      } catch (e) {
        setFetching(false);
        alert(
          'Sorry, something went wrong.\nPlease make sure you have a working internet connection.',
        );
        console.log(e);
      }
    } else {
      setFetching(false);
      alert('Please type your username or email and password');
    }
  }
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
          defaultValue={props.route.params?.email}
          onChangeText={(text) => setUsername(text)}
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
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      {fetching ? (
        <ActivityIndicator
          style={styles.button}
          size={'large'}
          color={'#5dbced'}
        />
      ) : (
        <View style={styles.button}>
          <TwitterButton text={'Log in'} onPress={() => login()} />
        </View>
      )}
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
