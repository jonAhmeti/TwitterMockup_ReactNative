import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginMain from './components/Login/Main';
import SignUpMain from './components/SignUp/Main';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="Main" component={LoginMain} />
        <Stack.Screen name="signUp" component={SignUpMain} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
