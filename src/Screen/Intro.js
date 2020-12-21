import React from 'react'
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export default function Intro({navigation}) {
    return (
    
    <Onboarding
        onSkip={()=>{navigation.navigate("SignIn")}}
        onDone={()=>{navigation.navigate("SignIn")}}
        nextLabel="suivant"
        skipLabel="passer"
            pages={[
                {
                backgroundColor: '#1a1a1a',
                image: <Image source={require('../../assets/logo.png')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>,
                },

                {
                backgroundColor: '#fff',
                image: <Image source={require('../../assets/slide1.png')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>,
                },

                {
                backgroundColor: '#ffc814',
                image: <Image source={require('../../assets/slide2.png')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>,
                },
            ]}
            />
    )
}
