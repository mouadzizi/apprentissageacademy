import React from 'react'
import { View, Text, StatusBar, TouchableHighlight, StyleSheet, FlatList, Alert} from 'react-native'

const DATA=[ 'first item', 'second item', 'third item', 'g', 'h', 'j', 'kk']


const Item = ({ item }) => (
    <TouchableHighlight style={styles.touch}>
                 <Text style={styles.text}> {item} </Text>  
    </TouchableHighlight>
  );

export default function Acceuil() {
    return (
        <View>
        <StatusBar backgroundColor="#ffc814"/>

            <FlatList
                data={DATA}
                renderItem={Item}
                keyExtractor={(item)=> item}
                
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16
    },
    touch: {
        textAlign : 'center',
        height: 40,
        backgroundColor: '#c2c2c2',
        marginVertical: 20,
    },
    text : {
        textAlign: 'center', fontSize: 18,
    }
    
  });