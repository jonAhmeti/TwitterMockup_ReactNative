import React from 'react';
import {View, StyleSheet, Text, SectionList} from 'react-native';
import Tweet from '../defaults/Tweet';

const tweets = [
  {
    user: {
      displayName: 'Naim Frasheri',
      username: 'NoNaim',
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
    tweet:
      'The high five is a hand gesture that occurs when two people simultaneously raise one hand each, about head-high, and push, slide, or slap the flat of their palm against the flat palm of the other person. The gesture is often preceded verbally by a phrase like "Give me five", "High five", "Up high", or "Slap hands." Its meaning varies with the context of use but can include as a greeting, congratulations, or celebration.\n' +
      '\n' +
      "There are many origin stories of the high five,[2] but the two most documented candidates are Dusty Baker and Glenn Burke of the Los Angeles Dodgers professional baseball team on October 2, 1977, and Wiley Brown and Derek Smith of the Louisville Cardinals men's college basketball team during the 1978–1979 season.[3][4] ",
    date: '1999/99/99',
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

const styles = StyleSheet.create({});

export default Body;
