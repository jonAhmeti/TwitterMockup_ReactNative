import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import BottomTabNavigation from './BottomTabNavigation';
import Tweet from '../Compose/Tweet';
import TweetComments from '../../defaults/TweetComments/Layout';
import WriteComment from '../../defaults/TweetComments/WriteComment';

const Stack = createStackNavigator();

const Navigation = (props) => {
  return (
    <Stack.Navigator
      initialRouteName={'MainBottomTabNavigation'}
      headerMode={'screen'}>
      <Stack.Screen
        name={'MainBottomTabNavigation'}
        component={BottomTabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'ComposeTweet'}
        component={Tweet}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          cardStyle: {backgroundColor: '#15202b'},
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'TweetComments'}
        component={TweetComments}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          cardStyle: {backgroundColor: '#15202b'},
          headerShown: true,
          headerStyle: {
            backgroundColor: '#15202b',
            shadowOpacity: 0,
            elevation: 0,
            borderBottomWidth: 0.2,
            borderBottomColor: '#556872',
          },
          headerTitleStyle: {color: '#fff'},
          headerTintColor: '#1da1f2',
          title: 'Tweet',
        }}
      />
      <Stack.Screen
        name={'WriteComment'}
        component={WriteComment}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          cardStyle: {backgroundColor: '#15202b'},
          headerShown: true,
          headerStyle: {
            backgroundColor: '#15202b',
            shadowOpacity: 0,
            elevation: 0,
            borderBottomWidth: 0.2,
            borderBottomColor: '#556872',
          },
          headerTitleStyle: {color: '#fff'},
          headerTintColor: '#1da1f2',
          title: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
