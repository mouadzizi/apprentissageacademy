import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, View, FlatList, Text } from 'react-native'

import Cmp from '../Component/cmp';
import { st } from '../API/firebase'

export default function LevelDetails({ navigation, route }) {
    const [list, setList] = useState([])
    const { level } = route.params;


    useEffect(() => {
        getItems().then(res => {
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
    return (
        <View style={{ borderWidth: 1, flex: 1 }} >
            <FlatList
                style={{ flex: 1 }}
                numColumns={2}
                data={list}
                ListEmptyComponent={<Text> Empty </Text>}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item) => (
                    <View style={styles.ViewConatiner}>
                        <Cmp title={item.item.title} clickHandler={() => navigation.push('TabTopNav',{path:item.item.fullPath})} />
                    </View>
                )
                }
            />
        </View>

    )
}

const styles = StyleSheet.create({
    ViewConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10

    },
});
