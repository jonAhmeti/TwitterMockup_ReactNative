import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './components/Login/Main';

function bruh() {
  return (
    <View>
      <Text>BRUHHH PAGE</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="signUp" component={bruh} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
