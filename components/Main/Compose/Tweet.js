import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Platform,
  ToastAndroid,
} from 'react-native';
import TwitterButton from '../../defaults/TwitterButton';
import {Toast} from 'native-base';
import store from '../../../redux/store';

function tweet(username, text) {
  try {
    return fetch('https://twitterapi.conveyor.cloud/Tweet/Create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: username,
        text: text,
        platform: Platform.OS === 'android' ? 'Android' : 'iPhone',
      }),
    }).then((response) => response.json());
  } catch (e) {
    alert('Sorry, something went wrong creating your tweet.');
    console.log(e);
  }
}

const Tweet = (props) => {
  const [tweetText, setTweetText] = useState(undefined);
  const [tweetable, setTweetable] = useState(false);

  return (
    <View style={styles.tweetsWrapper}>
      <View style={styles.dialogOptions}>
        <View style={styles.dialogCloseWrapper}>
          <Text
            adjustsFontSizeToFit={true}
            style={styles.dialogClose}
            onPress={() => {
              props.navigation.goBack();
            }}>
            ×
          </Text>
        </View>
        <View style={styles.dialogTweetWrapper}>
          <TwitterButton
            text={'Tweet'}
            onPress={() => {
              if (!tweetable) {
                console.log('TwitterButton disabled, terminating onPress.');
                return undefined;
              }
              console.log('Tweeting...');
              tweet(store.getState().currentUser.username, tweetText).then(
                (result) => {
                  console.log(result);
                  if (result === true) {
                    props.navigation.navigate('home');
                    Platform.OS === 'android'
                      ? ToastAndroid.show('Tweeted!', ToastAndroid.SHORT)
                      : Toast.show('Tweeted!');
                  } else {
                    alert("Tweet couldn't be created.");
                  }
                },
              );
            }}
          />
        </View>
      </View>
      <View style={styles.textSection}>
        <View style={styles.imageWrapper}>
          <Image
            source={{uri: 'https://thispersondoesnotexist.com/image'}}
            style={styles.image}
          />
        </View>
        <View style={styles.textWrapper}>
          <TextInput
            autoFocus={true}
            placeholder={"What's happening?"}
            placeholderTextColor={'#6e767d'}
            selectionColor={'#5dbced'}
            multiline={true}
            maxLength={280}
            style={styles.text}
            onChangeText={(text) => {
              setTweetText(text);
              tweetText && tweetText !== ''
                ? setTweetable(true)
                : setTweetable(false);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tweetsWrapper: {
    flex: 1,
  },
  dialogOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 60,
    padding: 15,
  },
  textSection: {
    flex: 1,
    flexDirection: 'row',
  },
  textWrapper: {
    flex: 1,
    marginVertical: 10,
  },
  text: {
    color: '#fff',
    fontSize: 24,
    padding: 0,
  },
  imageWrapper: {
    margin: 10,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: 'rgba(93, 188, 237, 0.1)',
  },
  dialogCloseWrapper: {
    flex: 1,
  },
  dialogClose: {
    alignSelf: 'flex-start',
    color: '#5dbced',
    fontSize: 50,
    marginTop: -5,
    includeFontPadding: false,
  },
  dialogTweetWrapper: {
    minWidth: 100,
    minHeight: 20,
  },
});

export default Tweet;
