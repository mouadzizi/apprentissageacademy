import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'

import Subject from '../Component/Subject';
import { st } from '../API/firebase'

import Empty from '../SVG/Empty'
import { ActivityIndicator } from 'react-native';

export default function LevelDetails({ navigation, route }) {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)
    const { level } = route.params;


    useEffect(() => {
        setLoading(true)
        getItems().then(res => {
            const data = res.map(f => {
                return {
                    title: f.name,
                    fullPath: f.fullPath
                }
            })
            setList(data)
            setLoading(false)
        })
    }, [])
    const getItems = async () => {

        const items = await st.ref().child('/' + level.path + '/' + level.title).listAll()

        return Promise.all(items.prefixes)
    }

    return (
        <View style={{ flex: 1 }} >
            <ActivityIndicator style={styles.indicator} size='large' animating={loading} color='#ffc814' />
            <FlatList
                style={{ backgroundColor: 'white' }}
                numColumns={2}
                data={list}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Empty />
                    </View>
                }
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item) => (
                    <Subject title={item.item.title} onClick={() => navigation.push('TabTopNav', { path: item.item.fullPath })} />
                )
                }
            />
        </View>

    )
}

const styles = StyleSheet.create({
    ViewConatiner: {
        marginVertical: 10
    },
    emptyContainer: {
        alignItems: 'center',
        marginVertical: '50%'
    },
    indicator:{
        position:'absolute',
        zIndex:1,
        alignSelf:'center'
    }
});
