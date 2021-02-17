import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import TwitterButton from '../../defaults/TwitterButton';

const Tweet = (props) => {
  return (
    <KeyboardAvoidingView style={styles.tweetsWrapper}>
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
          <TwitterButton text={'Tweet'} />
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
          />
        </View>
      </View>
    </KeyboardAvoidingView>
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
    fontSize: 20,
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
