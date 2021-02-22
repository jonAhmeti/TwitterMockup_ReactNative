import React, {useEffect, useState} from 'react';
import {StyleSheet, SectionList, View} from 'react-native';
import MainTweet from './MainTweet';
import CommentTweet from './CommentTweet';

const Layout = (props) => {
  const {tweet} = props.route.params;
  const [comments, setComments] = useState([]);

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
    {data: comments, renderItem: ({item}) => <CommentTweet tweet={item} />},
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
    getComments()
      .then((result) => setComments(result))
      .then((result) => console.log(result));
  }, []);

  return (
    <View style={styles.tweetsWrapper}>
      <SectionList sections={sections} />
    </View>
  );
};

const styles = StyleSheet.create({
  tweetsWrapper: {
    flex: 1,
  },
});

export default Layout;
