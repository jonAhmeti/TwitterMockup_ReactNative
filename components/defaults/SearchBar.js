import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const SearchBar = () => {
  return (
    <TextInput
      placeholder={'Search Twitter'}
      placeholderTextColor={'#5f7581'}
      style={styles.input}
    />
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  input: {
    borderColor: '#556872',
    borderWidth: 0.5,
    borderRadius: 60,
    alignSelf: 'stretch',
    color: '#5dbced',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 15,
  },
});
