import React from 'react'
import { View, Text } from 'react-native'
import styles from './Welcome.styles'

export default function Welcome({name}) {
    return (
        <View style={styles.container}>

            <Text style={styles.title1}>Salut, <Text style={styles.name}> {name.toUpperCase()} </Text> </Text>
            <Text style={styles.title2}>Bienvenue chez  <Text style={styles.apprentissage}> Apprentissage Academy </Text> </Text>
            <Text style={styles.subTitle}>êtes-vous prêt à étudier aujourd'hui?</Text>

        </View>
    )
}
