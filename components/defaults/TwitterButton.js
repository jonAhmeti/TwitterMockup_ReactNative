import React from 'react';
import {Text, TouchableHighlight, View, StyleSheet} from 'react-native';

const TwitterButton = ({text, theme, onPress}) => {
  return (
    <TouchableHighlight
      activeOpacity={0.75}
      underlayColor={'#fff'}
      style={styles.shape}
      onPress={() => {
        onPress();
        console.log(`${text} button tapped.`);
      }}>
      <View>
        {theme === 'dark' && (
          <View style={[styles.shape, styles.button, styles.dark]}>
            <Text style={[styles.text, {color: '#1da1f2'}]}>{text}</Text>
          </View>
        )}
        {theme === 'light' && (
          <View style={[styles.shape, styles.button, styles.light]}>
            <Text style={[styles.text, {color: '#fff'}]}>{text}</Text>
          </View>
        )}
      </View>
    </TouchableHighlight>
  );
};

TwitterButton.defaultProps = {
  text: 'Button Text',
  theme: 'light',
  onPress: () => console.log(`Warning: Button has not been implemented yet.`),
};

const styles = StyleSheet.create({
  shape: {
    borderRadius: 60,
    height: 50,
  },
  button: {
    borderWidth: 2,
    borderColor: '#5dbced',
    backgroundColor: '#5dbced',
    alignItems: 'center',
    justifyContent: 'center',
  },
  light: {
    borderColor: '#5dbced',
    backgroundColor: '#5dbced',
    color: '#fff',
  },
  dark: {
    borderColor: '#5dbced',
    backgroundColor: '#15202b',
  },
  text: {
    fontWeight: 'bold',
  },
});

export default TwitterButton;
