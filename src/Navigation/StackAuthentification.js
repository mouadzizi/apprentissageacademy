import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Pages of Authentification

import Intro from '../Screen/Intro';
import SignIn from '../Screen/SignIn';
import SignUp from '../Screen/SignUp';

export default function StackAuthentification() {
const Stack = createStackNavigator();

    return (
    <NavigationContainer>
      
        <Stack.Navigator
        initialRouteName="Intro">

            <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }}/>
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>

        </Stack.Navigator>

    </NavigationContainer>
    )
}
