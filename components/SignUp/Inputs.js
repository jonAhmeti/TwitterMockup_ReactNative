import React, {useState} from 'react';
import {
  Text,
  TextInput,
  Pressable,
  View,
  StyleSheet,
  ToastAndroid,
  Platform,
  ActivityIndicator,
} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import TwitterButton from '../defaults/TwitterButton';
import {Toast} from 'native-base';

const Inputs = (props) => {
  const [showDob, setShowDob] = useState(false);
  const [dob, setDob] = useState(undefined);
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [fetching, setFetching] = useState(false);
  const RegisteredMsg = 'Account created!\nWelcome to Twitter';

  function todaysDate() {
    let today = new Date();
    today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return today;
  }
  function onDatePick(event, date) {
    if (date instanceof Date) {
      setDob(date);
    }
    setShowDob(false);
    console.log('Date of birth picker closed');
  }
  function dobValue(altValue) {
    if (dob) {
      return `${dob.toDateString()}`;
    } else {
      return altValue;
    }
  }
  function dobColor() {
    return dob ? '#fff' : '#5dbced';
  }

  async function registerUser() {
    if (dob && name && email && password) {
      setFetching(true);
      try {
        let result = await fetch('https://twitterapi.conveyor.cloud/User', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: email,
            email: email,
            name: name,
            dob: dob,
            password: password,
          }),
        });
        let jsonResult = await result.json();
        console.log(jsonResult);
        if (jsonResult === true) {
          props.navigation.navigate('login', {email: email});
          Platform.OS === 'android'
            ? ToastAndroid.show(RegisteredMsg, ToastAndroid.SHORT)
            : Toast.show(RegisteredMsg);
        } else {
          alert('Email already exists.');
        }
      } catch (e) {
        alert('Sorry, something went wrong.');
        console.log(e);
      } finally {
        setFetching(false);
      }
    } else {
      setFetching(false);
      alert('Please fill all fields');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>Name:</Text>
        <TextInput
          style={styles.inputText}
          autoCapitalize={'words'}
          maxLength={50}
          onChangeText={(text) => setName(text)}
        />
      </View>

      <Pressable
        onPressIn={() => {
          setShowDob(true);
          console.log('Date of birth picker opened');
        }}
        style={[styles.inputWrapper, styles.dobWrapper]}>
        <Text style={styles.inputLabel}>Date of birth:</Text>
        <TextInput
          style={[styles.inputText, {color: dobColor()}]}
          value={dobValue('Tap to select')}
          editable={false}
        />
      </Pressable>
      {showDob && (
        <RNDateTimePicker
          value={new Date(0)}
          mode={'date'}
          onChange={onDatePick}
          display={'spinner'}
          minimumDate={new Date(1950, 0, 1)}
          maximumDate={todaysDate()}
          style={{backgroundColor: 'red'}}
        />
      )}

      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>Email:</Text>
        <TextInput
          style={styles.inputText}
          keyboardType={'email-address'}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>Password:</Text>
        <TextInput
          style={styles.inputText}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </View>

      {fetching ? (
        <ActivityIndicator
          style={{marginTop: 50}}
          size={'large'}
          color={'#5dbced'}
        />
      ) : (
        <View style={styles.nextWrapper}>
          <TwitterButton
            theme={'light'}
            text={'Next'}
            onPress={() => {
              registerUser();
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  nextWrapper: {
    marginTop: 50,
    width: 250,
  },
  button: {
    borderWidth: 2,
    borderColor: '#5dbced',
    backgroundColor: '#5dbced',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextShape: {
    borderRadius: 60,
    height: 50,
  },
  dobWrapper: {
    height: 50,
  },
  inputWrapper: {
    backgroundColor: '#192734',
    borderBottomWidth: 1,
    borderColor: '#5dbced',
    borderRadius: 60,
    paddingLeft: 20,
    paddingRight: 20,
    width: 250,
    marginTop: 20,
    marginBottom: 20,
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
    marginBottom: 5,
  },
  inputText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
    padding: 0,
  },
  usernameWrapper: {
    marginBottom: 15,
  },
  passwordWrapper: {
    marginTop: 15,
  },
});

export default Inputs;
