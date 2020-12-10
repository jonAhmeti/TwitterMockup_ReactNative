import React, {useState} from 'react';
import {Text, TextInput, Pressable, View, StyleSheet} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const Inputs = () => {
  const [showDob, setShowDob] = useState(false);
  const [dob, setDob] = useState(undefined);

  function onDatePick(event, date) {
    if (date instanceof Date) {
      setDob([date, '#ffffff']);
      console.log('Set showDob to false');
      setShowDob(false);
    }
  }

  function dobValue(altValue) {
    if (dob) {
      return `${dob[0].toDateString()}`;
    } else {
      return altValue;
    }
  }

  return (
    <View>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>Name:</Text>
        <TextInput style={styles.inputText} />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>Email:</Text>
        <TextInput style={styles.inputText} />
      </View>
      <Pressable
        onPressIn={() => {
          console.log('Set showDob to true');
          setShowDob(true);
        }}
        style={[styles.inputWrapper, styles.dobWrapper]}>
        <Text style={styles.inputLabel}>Date of birth:</Text>
        <TextInput
          style={[styles.inputText, {color: 'black'}]}
          value={dobValue('Tap to select')}
          editable={false}
        />
      </Pressable>
      <View>
        {showDob && (
          <RNDateTimePicker
            value={new Date(0)}
            mode={'date'}
            onChange={onDatePick}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    marginTop: 10,
    marginBottom: 10,
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
