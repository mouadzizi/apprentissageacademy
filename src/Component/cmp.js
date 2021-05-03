import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from 'react-native-vector-icons'

export default function cmp(props) {
    return (
        <TouchableOpacity
        style={styles.container}
        onPress={props.clickHandler}>

        <MaterialCommunityIcons 
        name="math-integral-box"
        color="white"
        size={65}
        style={{alignSelf : 'center'}}/>

        <Text
        style={styles.title}> {props.title} </Text>
        <Text
        style={styles.subTitle}> 30 cours PDF / 5 Video </Text>

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container : {
        height : 170,
        width: 180,
        backgroundColor: '#444',
    },
    title: {
        color: 'white',
        fontSize: 17,
        alignSelf: 'center'
    },
    subTitle : {
        color: '#ffc814',
        fontWeight : 'bold',
        alignSelf: 'center',
        marginTop: 10,
    }
});
