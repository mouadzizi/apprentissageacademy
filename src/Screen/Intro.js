import React, { useState } from 'react'
import { View ,StyleSheet} from 'react-native';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import * as Animatable from 'react-native-animatable'

import { auth } from '../API/firebase'

export default function Intro({ navigation }) {
    const [loading, setloading] = useState(true)
    React.useEffect(() => {
        const __unsub = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace('Home')
            }
           else setloading(false)
        })
        return () => {
            __unsub()
        }
    }, [])
    const animation ={
        0:{
            scale:1,  
        },
        0.3:{
            scale:1.1
        },
        0.5:{
            scale:1.2,
        },
        0.6:{
            scale:1.3,
        }
       ,
        1:{
            scale:1.4
        }
    
       
    }

    const LoadingLogo = ()=>{
        return(
            <Animatable.View onAnimationEnd={()=>setloading(false)} style={{flex:1,alignItems:'center',justifyContent:'center'}} animation={animation} duration={2500} easing='linear' >
                <Image source={require('../../assets/logo.png')}  style={{width:300,height:300}}  resizeMode='contain' />
            </Animatable.View>
        )
    }
    return (
         
        <View style={styles.container} >
            { 
            !loading? 
            <Onboarding
            onSkip={() => { navigation.replace("SignIn") }}
            onDone={() => { navigation.replace("SignIn") }}
            nextLabel="Suivant"
            skipLabel="Passer"
            pages={[
                {
                    backgroundColor: '#1a1a1a',
                    image: <Image source={require('../../assets/logo.png')} style={{ height: '100%', width: '100%' }} resizeMode='contain' />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },

                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../../assets/slide1.png')} style={{ height: '100%', width: '100%' }} resizeMode='contain' />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },

                {
                    backgroundColor: '#ffc814',
                    image: <Image source={require('../../assets/slide2.png')} style={{ height: '100%', width: '100%' }} resizeMode='contain' />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
            ]}
        />
        : <LoadingLogo   />
            }
       
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'black'
    }})
