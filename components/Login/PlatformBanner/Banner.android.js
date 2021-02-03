import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Banner = () => {
  return (
    <View>
      <View style={styles.twitterFor}>
        <Text style={[styles.textStyle, styles.twitter]}>Twitter </Text>
        <Text style={[styles.textStyle, styles.platform]}>for Android. </Text>
        <Icon
          style={styles.logo}
          name={'android'}
          size={50}
          color={'rgba(93, 188, 237, 1)'}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  twitterFor: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  textStyle: {
    fontWeight: 'bold',
    includeFontPadding: false,
    padding: 0,
  },
  twitter: {
    color: 'rgba(93, 188, 237, 1)',
    fontSize: 25,
    height: 25,
  },
  platform: {
    color: 'rgba(93, 188, 237, 0.5)',
    fontSize: 20,
    height: 20,
  },
});

export default Banner;
