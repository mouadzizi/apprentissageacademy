import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { EvilIcons } from "react-native-vector-icons";
import styles from './FAB.style'
export default function FAB({onClick}) {
    return (
        <TouchableOpacity
        style={styles.FAB}
        onPress={onClick}
      >
        <EvilIcons name="arrow-left" size={50} color="white" />
      </TouchableOpacity>
    )
}
