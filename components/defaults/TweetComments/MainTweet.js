import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  Share,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import store from '../../../redux/store';

const MainTweet = ({tweet}) => {
  const [likes, setLikes] = useState(tweet.likes);
  const [liked, setLiked] = useState(tweet.liked);

  function like() {
    tweet.liked = true;
    setLikes(likes + 1);
    try {
      return fetch('https://twitterapi.conveyor.cloud/LikedTweet/Like', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: store.getState().currentUser.id,
          tweetId: tweet.id,
        }),
      }).then((data) => data.json());
    } catch (e) {
      console.log(e);
    }
  }
  function unlike() {
    tweet.liked = false;
    setLikes(likes - 1);
    try {
      return fetch('https://twitterapi.conveyor.cloud/LikedTweet/Unlike', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: store.getState().currentUser.id,
          tweetId: tweet.id,
        }),
      }).then((data) => data.json());
    } catch (e) {
      console.log(e);
    }
  }

  const tweetDate = new Date(tweet.date);
  const tweetActionWrapperStyle = {
    activeOpacity: 1,
    underlayColor: 'rgba(93,188,237,0.5)',
    style: styles.tweetActionsIconsWrapper,
  };

  return (
    <View style={styles.container}>
      <View style={styles.userWrapper}>
        <View style={styles.imageSize}>
          <Image
            style={[styles.imageSize, styles.image]}
            source={{
              uri: 'https://thispersondoesnotexist.com/image',
              cache: 'reload',
            }}
          />
        </View>
        <View style={styles.userDetailsWrapper}>
          <Text style={[styles.userDetailsStyle, styles.usernameFont]}>
            {tweet.user}
          </Text>
          <Text style={[styles.userDetailsStyle, styles.userhandleFont]}>
            @{tweet.user}
          </Text>
        </View>
        <Ionicons
          name={'ellipsis-vertical'}
          style={styles.menuAction}
          size={18}
        />
      </View>
      <View style={styles.tweetWrapper}>
        <Text style={styles.tweetText}>{tweet.text}</Text>
        <View style={styles.tweetDetailsWrapper}>
          <Text style={styles.tweetDate}>
            {`${
              tweetDate.getHours() === 0 ? '00' : tweetDate.getHours()
            }:${tweetDate.getMinutes()} ∙ ${tweetDate.getDate()} ${tweetDate.toLocaleString(
              'default',
              {month: 'short'},
            )} ${tweetDate.getFullYear().toString().substring(2)} ∙ `}
          </Text>
          <Text style={styles.twitterFor}>Twitter for {tweet.platform}</Text>
        </View>
      </View>
      <View style={styles.tweetFooterWrapper}>
        <View style={styles.tweetStatsWrapper}>
          <View style={styles.tweetStats}>
            <Text style={[styles.tweetStatsFont, styles.tweetStatsNumber]}>
              {tweet.comments}
            </Text>
            <Text style={[styles.tweetStatsFont, styles.tweetStatsText]}>
              {' '}
              Comments
            </Text>
          </View>
          <View style={styles.tweetStats}>
            <Text style={[styles.tweetStatsFont, styles.tweetStatsNumber]}>
              {tweet.retweets}
            </Text>
            <Text style={[styles.tweetStatsFont, styles.tweetStatsText]}>
              {' '}
              Retweets
            </Text>
          </View>
          <View style={styles.tweetStats}>
            <Text style={[styles.tweetStatsFont, styles.tweetStatsNumber]}>
              {likes}
            </Text>
            <Text style={[styles.tweetStatsFont, styles.tweetStatsText]}>
              {' '}
              Likes
            </Text>
          </View>
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
          <TouchableHighlight
            {...tweetActionWrapperStyle}
            onPress={() => {
              if (liked === true) {
                setLiked(false);
                unlike().then((result) => console.log(result));
              } else {
                setLiked(true);
                like().then((result) => console.log(result));
              }
            }}>
            <Ionicons
              name={liked === true ? 'heart' : 'heart-outline'}
              style={styles.tweetActionsIcons}
            />
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 5,
    minHeight: 70,
  },
  imageSize: {
    width: 60,
    height: 60,
  },
  image: {
    borderRadius: 100,
    backgroundColor: 'rgba(93, 188, 237, 0.1)',
  },
  tweetWrapper: {
    marginTop: 10,
    flex: 1,
  },
  tweetText: {
    color: '#fff',
    fontSize: 18,
  },
  tweetDate: {
    color: '#556872',
    fontSize: 15,
    lineHeight: 30,
  },
  twitterFor: {
    fontSize: 15,
    lineHeight: 30,
    color: '#1da1f2',
  },
  tweetDetailsWrapper: {
    flexDirection: 'row',
  },
  tweetFooterWrapper: {
    marginHorizontal: 10,
  },
  tweetActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  tweetStatsWrapper: {
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
    borderColor: '#556872',
    marginVertical: 5,
    paddingVertical: 7,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tweetStats: {
    flexDirection: 'row',
  },
  tweetStatsFont: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  tweetStatsText: {
    color: '#556872',
  },
  tweetStatsNumber: {
    color: '#fff',
  },
  tweetActionsIcons: {
    color: '#fff',
    fontSize: 20,
    borderRadius: 100,
  },
  menuAction: {
    color: '#556872',
    paddingLeft: 10,
    paddingRight: 15,
  },
  tweetActionsIconsWrapper: {
    borderRadius: 100,
    padding: 5,
  },
  userWrapper: {
    flexDirection: 'row',
  },
  userDetailsWrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  userDetailsStyle: {
    fontSize: 15,
    lineHeight: 25,
  },
  usernameFont: {
    color: '#fff',
  },
  userhandleFont: {
    color: '#556872',
  },
});

export default MainTweet;
