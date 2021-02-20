import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Pages of Authentification

import Intro from '../Screen/Intro';
import SignIn from '../Screen/SignIn';
import SignInEmail from '../Screen/SignInEmail';
import SignUp from '../Screen/SignUp';
import Home from './bottomStack'

export default function StackAuthentification() {
const Stack = createStackNavigator();

    return (
    <NavigationContainer>
      
        <Stack.Navigator>

            <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }}/>
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
            <Stack.Screen name="SignInEmail" component={SignInEmail} options={{ headerShown: false }}/>
            <Stack.Screen name="Accueil" component={Home}/>

        </Stack.Navigator>

    </NavigationContainer>
    )
}
