import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableHighlight,
  View,
  StyleSheet,
} from 'react-native';

const Inputs = () => {
  return (
    <View>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>Username:</Text>
        <TextInput style={styles.inputText} />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>Password:</Text>
        <TextInput style={styles.inputText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
