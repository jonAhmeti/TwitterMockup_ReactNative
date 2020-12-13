import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tweet = ({tweet}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageSize}>
        <Image
          style={[styles.imageSize, styles.image]}
          source={{uri: tweet.user.pic}}
        />
      </View>
      <View style={styles.tweet}>
        <View style={styles.tweetHeader}>
          <Text style={styles.displayName}>{tweet.user.displayName}</Text>
          <Text style={styles.username}>@{tweet.user.username}</Text>
        </View>
        <Text style={styles.tweetText}>{tweet.tweet}</Text>

        <View style={styles.tweetActions}>
          <Ionicons
            name={'chatbubble-outline'}
            style={styles.tweetActionsIcons}
          />
          <Ionicons name={'repeat-outline'} style={styles.tweetActionsIcons} />
          <Ionicons name={'heart-outline'} style={styles.tweetActionsIcons} />
        </View>
      </View>
      <Ionicons name={'chevron-down-outline'} style={styles.menuAction} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#556872',
    borderBottomWidth: 0.2,
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginBottom: 5,
    minHeight: 70,
  },
  tweetDataContent: {},
  tweetHeader: {
    flexDirection: 'row',
  },
  imageSize: {
    width: 60,
    height: 60,
  },
  image: {
    borderRadius: 100,
  },
  tweet: {
    flex: 1,
    paddingLeft: 10,
  },
  displayName: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
    paddingRight: 10,
  },
  username: {
    color: '#556872',
  },
  tweetText: {
    color: '#fff',
  },
  tweetActions: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tweetActionsIcons: {
    color: '#fff',
    fontSize: 20,
  },
  menuAction: {
    color: '#556872',
    paddingLeft: 10,
    paddingRight: 15,
  },
});

export default Tweet;