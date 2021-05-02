import React from 'react'
import { FlatList, Text, View} from 'react-native'
import styles from './LevelList.style'
import LevelItem from '../../../Component/LevelItem'

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
          <LevelItem background={item.background} title={item.title} onClick={click}/>

        )}
      />

        </View>
    )
}
