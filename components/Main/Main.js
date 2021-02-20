import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header, {iconDefaultShape} from './Header';
import Body from './Body';
import Logo from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import store from '../../redux/store';
import * as tweetActions from '../../redux/actions/tweetActions';

async function getTweets() {
  let result = await fetch('https://twitterapi.conveyor.cloud/Tweet', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return await result.json();
}

const Main = (props) => {
  return (
    <View style={styles.container}>
      <Header
        middleChild={<Logo name={'twitter'} style={styles.logo} />}
        rightIcon={<MaterialIcons name={'insights'} {...iconDefaultShape} />}
      />
      <Body navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15202b',
  },
  logo: {
    fontSize: 25,
    color: '#5dbced',
  },
});
export default Main;
