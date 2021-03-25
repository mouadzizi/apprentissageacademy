import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function slider(props) {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
            <Text style={ styles.title }> {props.title} </Text>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingHorizontal:9 
    },
    container1:{
      borderWidth:1  
    },
    title:{

    }
})
