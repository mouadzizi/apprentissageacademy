import React from 'react'
import { TouchableOpacity, Text, StyleSheet} from 'react-native'

export default function Level(props) {
    return (
        <TouchableOpacity
        style={styles.container}
        onPress={props.click}
        >
            <Text>hey</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black', 
        width: 140,
        height: 200,
        borderRadius: 20,
        marginHorizontal: 25,
        marginVertical: 10
    },
});