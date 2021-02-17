import React from 'react';
import {View, StyleSheet, SectionList} from 'react-native';
import Tweet from '../defaults/Tweet';
import Compose from '../defaults/Compose';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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

async function getTweets() {
  try {
    console.log('fetching tweets');
    let result = await fetch('https://twitterapi.conveyor.cloud/Tweet', {
      method: 'GET',
    });
    let jsonResult = await result.json();
    console.log(jsonResult);
    return jsonResult;
  } catch (e) {
    alert('Sorry, something went wrong getting your tweets.');
    console.log(e);
  }
}

const Body = (props) => {
  return (
    <View style={styles.tweetsWrapper}>
      <SectionList
        sections={testData}
        renderItem={({item}) => <Tweet tweet={item} />}
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
