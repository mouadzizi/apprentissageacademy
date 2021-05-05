import React from 'react'
import { ImageBackground, Text, View, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './LevelItem.style';

const logo= require('../../../assets/icon.png');
export default function Level({background, title}) {
    return (
        <ImageBackground
          style={styles.backgroundStyle}
          source={background}
          imageStyle={{
            resizeMode: 'cover',
            borderRadius: 15,
          }}
        >
          <View style={styles.containerImage}></View>
  
          <View style={styles.containerInfo}>
            <View style={styles.containerLogo}>
                <Image source={logo} style={styles.brandLogo}/>
            </View>
  
            <View style={styles.containerDetails}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </View>
        </ImageBackground>
    )
}
