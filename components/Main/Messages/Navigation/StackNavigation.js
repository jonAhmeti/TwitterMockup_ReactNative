import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../Main';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={'main'} headerMode={'none'}>
            <Stack.Screen name={'main'} component={Main} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
