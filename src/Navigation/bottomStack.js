import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Accueil from './homeStack';
import Profile from '../Screen/Profile';


export default function bottomStack() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({

        tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Accueil') {
            iconName = focused
            ? 'home'
            : 'home-outline';
        } 
        else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
        },
        })}

        tabBarOptions={{
        activeTintColor: '#ffc814',
        inactiveTintColor: 'gray',
        }}>

            <Tab.Screen name="Accueil" component={Accueil}/>
            <Tab.Screen name="Profile" component={Profile} />
         </Tab.Navigator>
    )
}
