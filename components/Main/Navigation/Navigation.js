import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import BottomTabNavigation from './BottomTabNavigation';
import Tweet from '../Compose/Tweet';

const Stack = createStackNavigator();

const Navigation = (props) => {
  return (
    <Stack.Navigator
      initialRouteName={'MainBottomTabNavigation'}
      headerMode={'none'}>
      <Stack.Screen
        name={'MainBottomTabNavigation'}
        component={BottomTabNavigation}
      />
      <Stack.Screen
        name={'ComposeTweet'}
        component={Tweet}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          cardStyle: {backgroundColor: '#15202b'},
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
