import {Text, TouchableHighlight, View, StyleSheet} from 'react-native';
import React from 'react';

const Compose = ({touchableOptions, icon, onPress}) => {
  return (
    <TouchableHighlight
      {...touchableOptions}
      style={[styles.compose, styles.composeTouchable]}
      onPress={() => {
        onPress();
      }}>
      <View style={[styles.compose, styles.composeIcons]}>
        <Text style={{fontSize: 25, color: '#fff'}}>+</Text>
        {icon}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  compose: {
    height: 60,
    width: 60,
    borderRadius: 60,
  },
  composeTouchable: {
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowOffset: {width: 10, height: 2},
    shadowRadius: 10,
    elevation: 3,
  },
  composeIcons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1da1f2',
  },
});

export default Compose;
