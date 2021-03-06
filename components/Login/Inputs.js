import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';
import TwitterButton from '../defaults/TwitterButton';

import store from '../../redux/store';
import * as userActions from '../../redux/actions/userActions';

const Inputs = (props) => {
  const [isFocused, setIsFocused] = useState(undefined);
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [username, setUsername] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [fetching, setFetching] = useState(false);
  const [suggestedUser, setSuggestedUser] = useState(null);

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
        setFetching(false);
        if (jsonResult) {
          store.dispatch(userActions.loggedIn(jsonResult));
          console.log('user logged in', store.getState());
          props.navigation.navigate('main');
        } else {
          alert('Invalid username or password');
        }
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
  async function saveUserSuggestion() {
    try {
      await AsyncStorage.setItem('loginUser', username);
    } catch (e) {
      console.log('Error: saveUserSuggestion()', e);
    }
  }
  async function getUserSuggestion() {
    try {
      return await AsyncStorage.getItem('loginUser');
    } catch (e) {
      console.log('Error: getUserSuggestion()', e);
    }
  }

  useEffect(() => {
    getUserSuggestion().then((res) => {
      setSuggestedUser(res);
      console.log(res);
    });
  }, []);

  return (
    <View style={styles.container}>
      {suggestedUser !== null ? (
        <View style={styles.suggestionWrapper}>
          <Text style={{color: '#fff'}}>Login as</Text>
          <Text
            onPress={() => setUsername(suggestedUser)}
            style={stylesFocused.label}>
            {'  '}
            {'@' + suggestedUser}
          </Text>
        </View>
      ) : null}
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
          defaultValue={props.route.params?.email || username}
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
          <TwitterButton
            text={'Log in'}
            onPress={() => {
              login().then(() => {
                saveUserSuggestion().then(
                  getUserSuggestion().then((res) => setSuggestedUser(res)),
                );
              });
            }}
          />
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
  suggestionWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 5,
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
