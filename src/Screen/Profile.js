import React from 'react'
import { Button } from 'react-native'
import { View, Text, StatusBar} from 'react-native'

import {auth} from '../API/firebase'

export default function Profile({navigation}) {
    const signOut = async() =>{
        await auth.signOut().then(()=>{
            navigation.replace('SignInEmail')
        }) 
    } 
    return (
        <View>
        <StatusBar backgroundColor="#ffc814" />
            <Button title='Deconnecter' onPress={signOut} />
        </View>
    )
}
