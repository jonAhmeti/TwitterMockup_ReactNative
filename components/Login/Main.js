import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text, Pressable} from 'react-native';
import Header from './Header';
import Inputs from './Inputs';

const Main = (props) => {
  const [stylePressed, setStylePressed] = useState(undefined);
  let forgotPressedStyle = {
    color: '#5dbced',
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.inputsWrapper}>
        <Inputs navigation={props.navigation} />
      </View>
      <Pressable
        onPressIn={() => {
          setStylePressed(forgotPressedStyle);
        }}
        onPressOut={() => {
          setStylePressed(undefined);
        }}
        style={styles.forgotPasswordWrapper}>
        <Text style={[styles.forgotPassword, stylePressed]}>
          Forgot password?
        </Text>
      </Pressable>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15202b',
  },
  header: {
    paddingTop: 30,
    paddingBottom: 60,
  },
  inputsWrapper: {
    alignItems: 'center',
  },
  forgotPassword: {
    color: '#fff',
  },
  forgotPasswordWrapper: {
    marginTop: 60,
    alignSelf: 'center',
  },
});

export default Main;
