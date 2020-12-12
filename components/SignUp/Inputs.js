import React, {useState} from 'react';
import {Text, TextInput, Pressable, View, StyleSheet} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import TwitterButton from '../defaults/TwitterButton';

const Inputs = () => {
  const [showDob, setShowDob] = useState(false);
  const [dob, setDob] = useState(undefined);

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

  return (
    <View style={styles.container}>

      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>Name:</Text>
        <TextInput
          style={styles.inputText}
          autoCapitalize={'words'}
          maxLength={50}
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
        <TextInput style={styles.inputText} keyboardType={'email-address'} />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>Password:</Text>
        <TextInput style={styles.inputText} secureTextEntry={true} />
      </View>

      <View style={styles.nextWrapper}>
        <TwitterButton
          theme={'light'}
          text={'Next'}
        />
      </View>
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
