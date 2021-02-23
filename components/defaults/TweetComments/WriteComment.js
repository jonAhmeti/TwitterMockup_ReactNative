import React, {useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableHighlight,
  Share,
  Platform,
  ToastAndroid,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TwitterButton from '../TwitterButton';
import CloseButton from 'react-native-vector-icons/EvilIcons';
import store from '../../../redux/store';
import {Toast} from 'native-base';

const disabledMsg = 'Type something to be able to comment!';
function comment(username, tweet) {
  try {
    return fetch('https://twitterapi.conveyor.cloud/Comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tweetId: tweet.id,
        comment: tweet.comment,
        user: username,
      }),
    }).then((response) => response.json());
  } catch (e) {
    alert('Sorry, something went wrong in our end.');
    console.log(e);
  }
}

const WriteComment = (props) => {
  const [tweetComment, setTweetComment] = useState(undefined);
  const {tweet} = props.route.params;

  const tweetActionWrapperStyle = {
    activeOpacity: 1,
    underlayColor: 'rgba(93,188,237,0.5)',
    style: styles.tweetActionsIconsWrapper,
  };
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <View style={styles.commentTweetButton}>
          <TwitterButton
            text={'Comment'}
            onPress={() => {
              console.log(tweetComment);
              try {
                if (tweetComment === undefined) {
                  Platform.OS === 'android'
                    ? ToastAndroid.show(disabledMsg, ToastAndroid.SHORT)
                    : Toast.show(disabledMsg);
                } else {
                  comment(store.getState().currentUser.username, {
                    id: tweet.id,
                    comment: tweetComment,
                  })
                    .then((result) => console.log(result))
                    .then(props.navigation.goBack());
                }
              } catch (e) {
                console.log('Error on comment button click.', e);
              }
            }}
          />
        </View>
      ),
      headerBackImage: () => (
        <View style={styles.dialogCloseWrapper}>
          <CloseButton name={'close-o'} style={styles.dialogClose} size={45} />
        </View>
      ),
    });
  }, [tweetComment]);

  return (
    <View style={styles.container}>
      <View style={styles.sectionWrapper}>
        <View style={styles.pictureWrapper}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: 'https://thispersondoesnotexist.com/image',
              cache: 'reload',
            }}
          />
          <View style={styles.connectorLine} />
        </View>
        <View style={styles.tweetWrapper}>
          <View style={styles.userWrapper}>
            <Text style={[styles.userFont, styles.username]}>{tweet.user}</Text>
            <Text style={[styles.userFont, styles.userHandle]}>
              @{tweet.user}
            </Text>
          </View>
          <View style={[styles.tweetTextWrapper]}>
            <Text style={styles.tweetTextFont}>{tweet.text}</Text>
          </View>

          <View style={styles.tweetActions}>
            <TouchableHighlight {...tweetActionWrapperStyle} onPress={() => {}}>
              <Ionicons
                name={'chatbubble-outline'}
                style={styles.tweetActionsIcons}
              />
            </TouchableHighlight>
            <TouchableHighlight {...tweetActionWrapperStyle} onPress={() => {}}>
              <Ionicons
                name={'repeat-outline'}
                style={styles.tweetActionsIcons}
              />
            </TouchableHighlight>
            <TouchableHighlight {...tweetActionWrapperStyle} onPress={() => {}}>
              <Ionicons name={'heart'} style={styles.tweetActionsIcons} />
            </TouchableHighlight>
            <TouchableHighlight
              {...tweetActionWrapperStyle}
              onPress={() => {
                Share.share({
                  message: `Share tweet by @${tweet.user}:\n${tweet.text}`,
                  title: 'Wannabe Title',
                });
              }}>
              <Ionicons
                name={'share-social-outline'}
                style={styles.tweetActionsIcons}
              />
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <View style={styles.sectionWrapper}>
        <View style={styles.pictureWrapper}>
          <View style={styles.connectorLine} />
          <Image
            style={styles.imageStyle}
            source={{
              uri: 'https://thispersondoesnotexist.com/image',
              cache: 'reload',
            }}
          />
        </View>
        <View style={[styles.myTweetWrapper, styles.tweetWrapper]}>
          <View style={styles.myTweetTextWrapper}>
            <TextInput
              placeholder={'Comment here'}
              placeholderTextColor={'#556872'}
              dataDetectorTypes={'all'}
              multiline={true}
              maxLength={280}
              style={[styles.tweetTextInput, styles.tweetTextFont]}
              onChangeText={(text) => {
                setTweetComment(text);
                console.log(tweetComment);
              }}
            />
          </View>
          <View style={styles.userWrapper}>
            <Text style={[styles.userFont, styles.username]}>{tweet.user}</Text>
            <Text style={[styles.userFont, styles.userHandle]}>
              @{tweet.user}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 70,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  sectionWrapper: {
    minHeight: 120,
    flexDirection: 'row',
  },
  imageStyle: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: 'rgba(93, 188, 237, 0.1)',
  },
  connectorLine: {
    width: 2,
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgba(93, 188, 237, 0.2)',
  },
  pictureWrapper: {
    alignItems: 'center',
  },
  tweetWrapper: {
    flex: 1,
    paddingHorizontal: 10,
  },
  myTweetWrapper: {
    justifyContent: 'flex-end',
  },
  userWrapper: {
    minHeight: 60,
    justifyContent: 'center',
  },
  userFont: {
    fontSize: 17,
    lineHeight: 17,
    paddingVertical: 2,
  },
  username: {
    color: '#fff',
  },
  userHandle: {
    color: '#556872',
  },
  tweetTextFont: {
    color: '#fff',
    fontSize: 18,
  },
  tweetTextWrapper: {
    paddingBottom: 10,
  },
  myTweetTextWrapper: {
    justifyContent: 'flex-end',
    paddingTop: 30,
  },
  tweetTextInput: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#1da1f2',
  },
  tweetActionsIconsWrapper: {
    borderRadius: 100,
    padding: 5,
  },
  tweetActions: {
    paddingBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tweetActionsIcons: {
    color: '#fff',
    fontSize: 20,
    borderRadius: 100,
  },
  commentTweetButton: {
    minWidth: 100,
  },
  dialogCloseWrapper: {
    flex: 1,
  },
  dialogClose: {
    color: '#5dbced',
    includeFontPadding: false,
  },
});

export default WriteComment;
