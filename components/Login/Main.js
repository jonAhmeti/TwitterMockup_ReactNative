import React, {useState} from 'react';
import {View, StyleSheet, Text, Pressable, ScrollView} from 'react-native';
import Header from './Header';
import Inputs from './Inputs';
import Banner from './PlatformBanner/Banner';

const Main = (props) => {
  const [stylePressed, setStylePressed] = useState(undefined);
  let forgotPressedStyle = {
    color: '#5dbced',
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.inputsWrapper}>
        <Inputs navigation={props.navigation} route={props.route} />
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
      <View style={styles.banner}>
        <Banner />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
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
  banner: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
  },
});

export default Main;
