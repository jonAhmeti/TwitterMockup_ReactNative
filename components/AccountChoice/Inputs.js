import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import TwitterButton from '../buttons/TwitterButton';

const Inputs = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>{props.text}</Text>
      <View style={styles.buttonsWrapper}>
        <View style={styles.buttonWrapper}>
          <TwitterButton
            text={'Sign Up'}
            onPress={() => props.navigation.navigate('signUp')}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <TwitterButton
            text={'Login'}
            theme={'dark'}
            onPress={() => props.navigation.navigate('login')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    flex: 1,
  },
  buttonWrapper: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  topText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 30,
    alignSelf: 'flex-start',
  },
  buttonsWrapper: {
    flex: 1,
    width: 250,
  },
});

export default Inputs;
