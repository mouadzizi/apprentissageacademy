import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import Cmp from '../Component/cmp'

export default function LevelDetails({navigation}) {
    return (
        <ScrollView
        style={{backgroundColor: '#ffc814'}}>

            <View style={styles.ViewConatiner}>
            <Cmp clickHandler={()=> navigation.navigate('TabTopNav')}/>
            <Cmp clickHandler={()=> navigation.navigate('TabTopNav')}/>
            </View>

            <View style={styles.ViewConatiner}>
            <Cmp clickHandler={()=> navigation.navigate('TabTopNav')}/>
            <Cmp clickHandler={()=> navigation.navigate('TabTopNav')}/>
            </View>

            <View style={styles.ViewConatiner}>
            <Cmp clickHandler={()=> navigation.navigate('TabTopNav')}/>
            <Cmp clickHandler={()=> navigation.navigate('TabTopNav')}/>
            </View>

            <View style={styles.ViewConatiner}>
            <Cmp clickHandler={()=> navigation.navigate('TabTopNav')}/>
            <Cmp clickHandler={()=> navigation.navigate('TabTopNav')}/>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ViewConatiner: {
        flexDirection : 'row',
        justifyContent: 'space-around',
        marginVertical: 10
        
    },
});
