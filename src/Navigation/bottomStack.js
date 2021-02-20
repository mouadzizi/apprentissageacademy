import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Accueil from '../Screen/Accueil';
import Profile from '../Screen/Profile';

export default function bottomStack() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Accueil" component={Accueil} />
            <Tab.Screen name="Profile" component={Profile} />
         </Tab.Navigator>
    )
}
