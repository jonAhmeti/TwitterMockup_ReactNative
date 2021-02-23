import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import Tweet from '../defaults/Tweet';
import Compose from '../defaults/Compose';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import store from '../../redux/store';
import * as tweetActions from '../../redux/actions/tweetActions';

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
  const [saving, setSaving] = useState(false);

  async function saveTweets(apiTweets) {
    setSaving(true);
    for (let obj of apiTweets) {
      let result = await fetch('https://twitterapi.conveyor.cloud/LikedTweet', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: store.getState().currentUser.id,
          tweetId: obj.id,
        }),
      }).then((result) => result.json());
      obj.liked = await result;
    }
    store.dispatch(tweetActions.updated(apiTweets));
    setTweets(store.getState().tweets);
    setSaving(false);
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

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      getTweets().then((result) => saveTweets(result));
    });

    return unsubscribe;
  }, [props.navigation]);

  return (
    <View style={styles.tweetsWrapper}>
      {saving ? (
        <View style={styles.loading}>
          <ActivityIndicator size={50} color={'#5dbced'} />
        </View>
      ) : (
        <FlatList
          data={tweets}
          initialNumToRender={7}
          renderItem={({item}) => (
            <Tweet tweet={item} navigation={props.navigation} />
          )}
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
      )}

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
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Body;
