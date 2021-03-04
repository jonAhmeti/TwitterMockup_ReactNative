import React, {useEffect, useState} from 'react';
import {StyleSheet, SectionList, View, ActivityIndicator} from 'react-native';
import MainTweet from './MainTweet';
import CommentTweet from './CommentTweet';

const Layout = (props) => {
  const {tweet} = props.route.params;
  const [comments, setComments] = useState([]);
  const [fetchingComments, setFetchingComments] = useState(false);

  const sections = [
    {
      data: [tweet],
      renderItem: ({item}) => (
        <View
          style={{
            paddingHorizontal: 15,
            borderColor: '#556872',
            borderBottomWidth: 0.2,
          }}>
          <MainTweet tweet={item} />
        </View>
      ),
    },
    {
      data: comments,
      renderItem: ({item}) => (
        <View
          style={{
            paddingTop: 15,
            paddingHorizontal: 15,
            borderColor: '#556872',
            borderBottomWidth: 0.2,
          }}>
          <CommentTweet tweet={item} />
        </View>
      ),
    },
  ];

  function getComments() {
    return fetch(`https://twitterapi.conveyor.cloud/Comments/${tweet.id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((data) => data.json());
  }

  useEffect(() => {
    setFetchingComments(true);
    getComments()
      .then((result) => {
        setComments(result);
        console.log(result);
      })
      .then(() => {
        setFetchingComments(false);
      });
  }, []);

  return fetchingComments === true ? (
    <View style={styles.tweetsWrapper}>
      <View
        style={{
          minHeight: 221,
          paddingHorizontal: 15,
          borderColor: '#556872',
          borderBottomWidth: 0.2,
        }}>
        <MainTweet tweet={tweet} />
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size={50} color={'#5dbced'} />
      </View>
    </View>
  ) : (
    <View style={styles.tweetsWrapper}>
      <SectionList sections={sections} />
    </View>
  );

  /*

    <View style={styles.tweetsWrapper}>
        <SectionList sections={sections} />
    </View>

  */
};

const styles = StyleSheet.create({
  tweetsWrapper: {
    flex: 1,
  },
});

export default Layout;
