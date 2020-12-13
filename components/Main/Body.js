import React from 'react';
import {View, StyleSheet, Text, SectionList} from 'react-native';
import Tweet from '../defaults/Tweet';

const tweets = [
  {
    user: {
      displayName: 'WhoAmI',
      username: 'username',
      pic: 'https://thispersondoesnotexist.com/image',
    },
    tweet: 'This.',
    date: 'Right tf now',
  },
  {
    user: {
      displayName: 'SnoopDogg',
      username: 'bit8008135chnazz',
      pic: 'https://thispersondoesnotexist.com/image',
    },
    tweet: "God damn this a long ass tweet",
    date: 'Breaking Bad Season 1, I guess',
  },
];

const testData = [{data: tweets}];

const Body = () => {
  return (
    <SectionList
      sections={testData}
      renderItem={({item}) => <Tweet tweet={item} />}
    />
  );
};

export default Body;
