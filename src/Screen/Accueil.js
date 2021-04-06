import React from 'react'
import { View, Text, StatusBar, ScrollView, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native'

import Level from '../Component/Level/Level'
import Slider from '../Component/Slider/Slider'


const COLLEGE_DATA = [{
    id: '1c',
    title: '1er Année',
    path:'Collége'
},
{
    id: '2c',
    title: '2éme Année',
    path:'Collége'
},
{
    id: '3c',
    title: '3éme Année',
    path:'Collége'
},
]

const LYCEE_DATA = [{
    id: '1l',
    title: 'T.Commun',
    path:'Lycée'
},
{
    id: '2l',
    title: '1er Bac',
    path:'Lycée'
},
{
    id: '3l',
    title: '2éme Bac',
    path:'Lycée'
},
{
    id: '3ls',
    title: '2éme Bac',
    path:'Lycée'
},
{
    id: '3lss',
    title: '2éme Bac',
    path:'Lycée'
},]

export default function Acceuil({ navigation }) {
    return (
        <ScrollView>
            <StatusBar backgroundColor="#ffc814" barStyle='dark-content' />

            <Text style={styles.title} > Collége </Text>
            <FlatList
                style={styles.list}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={COLLEGE_DATA}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <TouchableOpacity
                        style={styles.itemContainer}
                        onPress={() => navigation.navigate('LevelDetails',{level:item})}>
                        <View style={styles.item}>
                            <Text style={styles.itemText} > {item.title} </Text>
                        </View>
                    </TouchableOpacity>
                }
            />
            <Text style={styles.title} > Lycée </Text>
            <FlatList
                style={styles.list}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={LYCEE_DATA}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <TouchableOpacity
                        style={styles.itemContainer}
                        onPress={() => navigation.navigate('LevelDetails',{level:item})}>
                        <View style={[styles.item, { backgroundColor: '#3498db' }]}>
                            <Text style={styles.itemText} > {item.title} </Text>
                        </View>
                    </TouchableOpacity>
                }
            />
            <Text style={styles.title} > Lycée </Text>
            <FlatList
                style={styles.list}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={LYCEE_DATA}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <TouchableOpacity
                        style={styles.itemContainer}
                        onPress={() => navigation.navigate('LevelDetails',{level:item.id})}>
                        <View style={[styles.item, { backgroundColor: '#2ecc71' }]}>
                            <Text style={styles.itemText} > {item.title} </Text>
                        </View>
                    </TouchableOpacity>
                }
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flexGrow: 0,
    },
    text: {
        textAlign: 'center', fontSize: 18,
    },

    list: {
        flexGrow: 0,
    },
    itemContainer: {
        paddingHorizontal: 6,

    },
    item: {
        borderWidth: 1,
        height: 200,
        width: 122,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e67e22',
        borderRadius: 11
    },
    itemText: {
        fontSize: 19,
        fontWeight: "bold",
        color: 'white'
    },
    title: {
        fontSize: 20,
        marginVertical: 20,
        fontWeight: "100",
        letterSpacing: 2
    }

});
