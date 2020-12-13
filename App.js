import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AccountChoice from './components/AccountChoice/Main';
import SignUpMain from './components/SignUp/Main';
import LoginMain from './components/Login/Main';
import Main from './components/Main/Main';
import StackNavigator from '@react-navigation/stack/src/navigators/createStackNavigator';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="accountChoice" component={AccountChoice} />
        <Stack.Screen name="signUp" component={SignUpMain} />
        <Stack.Screen name={'login'} component={LoginMain} />
        <Stack.Screen name={'main'} component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
