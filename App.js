import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AccountChoice from './components/AccountChoice/Main';
import SignUpMain from './components/SignUp/Main';
import LoginMain from './components/Login/Main';
import MainNavigation from './components/Main/Navigation/Navigation';
import {CardStyleInterpolators} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="accountChoice" component={AccountChoice} />
        <Stack.Screen
          name="signUp"
          component={SignUpMain}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forModalPresentationIOS,
          }}
        />
        <Stack.Screen
          name={'login'}
          component={LoginMain}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forModalPresentationIOS,
          }}
        />
        <Stack.Screen
          name={'main'}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forScaleFromCenterAndroid,
          }}
          component={MainNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
