import React, {useRef, useEffect} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Banner = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fade = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1300,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }).start(() => {
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
          }).start(() => {
            Animated.timing(fadeAnim, {
              toValue: 1,
              duration: 100,
              useNativeDriver: true,
            }).start();
          });
        });
      });
    });
  };

  useEffect(() => {
    fade();
  }, []);

  return (
    <View>
      <View style={styles.twitterFor}>
        <Text style={[styles.textStyle, styles.twitter]}>Twitter </Text>
        <Text style={[styles.textStyle, styles.platform]}>for Android. </Text>
        <Animated.View style={{opacity: fadeAnim}}>
          <Icon
            style={styles.logo}
            name={'android'}
            size={50}
            color={'rgba(93, 188, 237, 1)'}
          />
        </Animated.View>
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
