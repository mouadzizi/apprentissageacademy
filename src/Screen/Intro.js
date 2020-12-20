import React from 'react'
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export default function Intro() {
    return (
        <Onboarding
            pages={[
                {
                backgroundColor: '#fff',
                image: <Image source={require('../../assets/slide1.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>,
                title: 'hello',
                subtitle: 'title 1',
                },

                {
                backgroundColor: '#fff',
                image: <Image source={require('../../assets/slide2.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
                },

                {
                backgroundColor: '#fff',
                image: <Image source={require('../../assets/slide3.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
                },
            ]}
            />
    )
}
