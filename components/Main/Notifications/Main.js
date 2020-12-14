import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Pressable} from 'react-native';
import Header, {iconDefaultShape} from '../Header';
import Feather from 'react-native-vector-icons/Feather';

const _middleChild = () => {
  return <Text style={styles.headerText}>Notifications</Text>;
};

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <View>
        <Header
          middleChild={_middleChild()}
          rightIcon={<Feather name={'settings'} {...iconDefaultShape} />}
        />
        <View style={styles.categories}>
          {selectedCategory ? (
            <Pressable
              style={[
                styles.categoriesPosition,
                {borderBottomWidth: 5, borderColor: '#5dbced'},
              ]}>
              <Text style={[styles.categoriesText, {color: '#5dbced'}]}>
                All
              </Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => setSelectedCategory(true)}
              style={styles.categoriesPosition}>
              <Text style={styles.categoriesText}>All</Text>
            </Pressable>
          )}
          {!selectedCategory ? (
            <Pressable
              style={[
                styles.categoriesPosition,
                {borderBottomWidth: 5, borderColor: '#5dbced'},
              ]}>
              <Text style={[styles.categoriesText, {color: '#5dbced'}]}>
                Mentions
              </Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => setSelectedCategory(false)}
              style={styles.categoriesPosition}>
              <Text style={styles.categoriesText}>Mentions</Text>
            </Pressable>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#15202b',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  categories: {
    height: 60,
    flexDirection: 'row',
  },
  categoriesPosition: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoriesText: {
    fontWeight: 'bold',
    color: '#556872',
  },
});
