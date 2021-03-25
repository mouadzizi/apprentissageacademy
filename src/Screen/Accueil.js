import React from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const COLLEGE_DATA = [{
    id: '1c',
    title: '1er Année',
},
{
    id: '2c',
    title: '2éme Année',
},
{
    id: '3c',
    title: '3éme Année',
},]

const LYCEE_DATA = [{
    id: '1l',
    title: 'Tronc Commun',
},
{
    id: '2l',
    title: '1er Bac',
},
{
    id: '3l',
    title: '2éme Bac',
},]



export default function Acceuil() {

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title} > Collége </Text>
            <FlatList
                style={styles.list}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={COLLEGE_DATA}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <TouchableOpacity style={styles.itemContainer}>
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
                    <TouchableOpacity style={styles.itemContainer}>
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
                    <TouchableOpacity style={styles.itemContainer}>
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
}

);