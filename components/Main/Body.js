import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Tweet from '../defaults/Tweet';
import Compose from '../defaults/Compose';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import store from '../../redux/store';
import * as tweetActions from '../../redux/actions/tweetActions';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

function getTweets() {
  return fetch('https://twitterapi.conveyor.cloud/Tweet', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((data) => data.json());
}

const Body = (props) => {
  const [tweets, setTweets] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  function saveTweets(apiTweets) {
    store.dispatch(tweetActions.updated(apiTweets));
    setTweets(store.getState().tweets);
  }

  // only onComponentDidMount because of [] inputs
  useEffect(() => {
    try {
      setRefreshing(true);
      getTweets().then((result) => {
        saveTweets(result);
        setRefreshing(false);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <View style={styles.tweetsWrapper}>
      <FlatList
        data={tweets}
        initialNumToRender={7}
        renderItem={({item}) => <Tweet tweet={item} />}
        keyExtractor={(item) => item.id.toString()}
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);
          getTweets().then((result) => {
            saveTweets(result);
            setRefreshing(false);
          });
        }}
      />

      <View style={styles.compose}>
        <Compose
          onPress={() => {
            console.log('Compose clicked.');
            props.navigation.navigate('ComposeTweet');
          }}
          icon={<FontAwesome5 name={'feather-alt'} size={25} color={'#fff'} />}
          touchableOptions={{activeOpacity: 0.55, underlayColor: '#fff'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tweetsWrapper: {
    flex: 1,
  },
  compose: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 20,
  },
});

export default Body;
