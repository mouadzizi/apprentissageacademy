import React from 'react'
import { FlatList, Text, View,TouchableOpacity,ImageBackground,Image} from 'react-native'
import styles from './LevelList.style'
import LevelItem from '../../../Component/LevelItem'
import stylesI from '../../../Component/LevelItem/LevelItem.style';

const logo= require('../../../../assets/icon.png');

export default function LevelList({DATA, title, click}) {
    return (
        <View style={styles.container}>
            
    <Text style={styles.title}> {title} </Text>
      <FlatList
        style={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={stylesI.container} onPress={()=>click(item)}>
          <ImageBackground
            style={stylesI.backgroundStyle}
            source={item.background}
            imageStyle={{
              resizeMode: 'cover',
              borderRadius: 15,
            }}
          >
            <View style={stylesI.containerImage}></View>
    
            <View style={stylesI.containerInfo}>
              <View style={stylesI.containerLogo}>
                  <Image source={logo} style={stylesI.brandLogo}/>
              </View>
    
              <View style={stylesI.containerDetails}>
                <Text style={stylesI.title}>{item.title}</Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        )}
      />

        </View>
    )
}
