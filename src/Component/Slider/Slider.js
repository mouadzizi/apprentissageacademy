import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Swiper from 'react-native-swiper';
export default function Slider() {


    
    const image1 = '../../../assets/slides1.jpg'


    return (
        <Swiper
        loop={false}
        style={{ backgroundColor: 'black', height: 100, width: 150 }}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.dotActive} />}
        >

        {/* Swiper number 1 */}
        <View style={styles.swiperContainer}>

            <Image
                source={require(image1)}
                style={styles.imagesSlide}
                resizeMode={'cover'}
            />

            <Text style={styles.splashText}> Vendez ou achetez gratuitement et facilement sur Maxwin </Text>
        </View>


    </Swiper>
    )
}
    const styles = StyleSheet.create({
        imagesSlide: {
            height: 150, 
            width:  150, 
            alignSelf: 'center', 
            marginTop: 15 
        },

        sliderContainer: {
            height: 300,
            width: '90%',
            marginTop: 10,
            justifyContent: 'center',
            alignSelf: 'center',
            borderRadius: 8,
          },
        
          slide: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'transparent',
            borderRadius: 8,
          },

          sliderImage: {
            height: '100%',
            width: '100%',
            alignSelf: 'center',
            borderRadius: 8,
          },

          dot:{
            backgroundColor: 'grey',
            width: 8,
            height: 8,
            borderRadius: 4,
            marginHorizontal: 5,
            marginVertical: 3,
          },
      
        dotActive:{
            backgroundColor: '#4898D3',
            width: 15,
            height: 8,
            borderRadius: 4,
            marginHorizontal: 5,
            marginVertical: 3,
        },

    });