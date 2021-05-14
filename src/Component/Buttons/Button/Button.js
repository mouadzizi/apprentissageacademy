import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Button.style'

export default function Button({onClick, text, outlined}) {
    return (
        <TouchableOpacity
          style={outlined ? styles.containerFill : styles.containerOutlined}
          onPress={onClick}
        >
          <Text style={outlined ? styles.buttonTextFill : styles.buttonTextOutlined}>{text}</Text>
        </TouchableOpacity>
    )
}
