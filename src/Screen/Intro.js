import React from 'react'
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export default function Intro({navigation}) {
    return (
    
    <Onboarding
        onSkip={()=>{navigation.replace("SignIn")}}
        onDone={()=>{navigation.replace("SignIn")}}
        nextLabel="Suivant"
        skipLabel="Passer"
            pages={[
                {
                backgroundColor: '#1a1a1a',
                image: <Image source={require('../../assets/logo.png')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
                },

                {
                backgroundColor: '#fff',
                image: <Image source={require('../../assets/slide1.png')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
                },

                {
                backgroundColor: '#ffc814',
                image: <Image source={require('../../assets/slide2.png')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
                },
            ]}
            />
    )
}
