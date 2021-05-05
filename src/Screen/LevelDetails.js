import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'

import Subject from '../Component/Subject';
import { st } from '../API/firebase'

import Empty from '../SVG/Empty'

export default function LevelDetails({ navigation, route }) {
    const [list, setList] = useState([])
     const { level } = route.params;


    useEffect(() => {
        getItems().then(res => {
             console.log(level);
            const data = res.map(f => { 
                return {
                    title:f.name,
                    fullPath:f.fullPath
                }
             } )
            setList(data)
        })
    }, [])
    const getItems = async () => {

        const items = await st.ref().child('/' + level.path + '/' + level.title).listAll()

        return Promise.all(items.prefixes)
    }
    console.log(list)
    return (
        <View style={{ flex: 1}} >
            <FlatList
                style={{backgroundColor: 'white'}}
                numColumns={2}
                data={list}
                ListEmptyComponent={
                <View style={styles.emptyContainer}>
                <Empty/>
                </View>
                }
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item) => (
                        <Subject title={item.item.title} onClick={() => navigation.push('TabTopNav',{path:item.item.fullPath})}/>
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
    emptyContainer:{
        alignItems: 'center',
        marginVertical: '50%'
    }
});
