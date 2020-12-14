import React from 'react';
import {View, StyleSheet} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Header = ({leftIcon, middleChild, rightIcon}) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemWrapper}>
        <SimpleLineIcons
          name={leftIcon}
          style={styles.icon}
          onPress={() => {
            console.log('Clicked menu');
          }}
        />
      </View>
      <View style={[styles.itemWrapper, styles.middleChild]}>
        {middleChild}
      </View>
      <View style={styles.itemWrapper}>
        <MaterialIcons name={rightIcon} style={styles.icon} />
      </View>
    </View>
  );
};

Header.defaultProps = {
  leftIcon: 'menu',
  rightIcon: 'insights',
  middleChild: undefined,
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  icon: {
    fontSize: 25,
    color: '#5dbced',
  },
  itemWrapper: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  middleChild: {
    alignItems: 'center',
    flex: 1,
  },
});

export const borderStyle = {
  borderColor: '#556872',
  borderBottomWidth: 0.2,
};

export default Header;
