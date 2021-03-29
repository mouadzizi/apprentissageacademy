import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';


//Pages of Authentification

import Acceuil from '../Screen/Accueil';
import LevelDetails from '../Screen/LevelDetails'
import TabTopNav from '../Navigation/TabTopNav'

export default function HomeStack() {

const Stack = createStackNavigator();

    return (
      
        <Stack.Navigator>

            <Stack.Screen name="Acceuil" component={Acceuil} options={{ headerShown: false }}/>
            <Stack.Screen name="LevelDetails" component={LevelDetails} options={{ headerShown: false }}/>
            <Stack.Screen name="TabTopNav" component={TabTopNav} options={{ headerShown: false }}/>

        </Stack.Navigator>


    )
}
