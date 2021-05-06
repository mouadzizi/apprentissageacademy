import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Subject.style'

import Math from '../../SVG/Math'
import Physics from '../../SVG/Physics'
import Geo from '../../SVG/Geo'
import History from '../../SVG/History'
import SVT from '../../SVG/SVT'

export default function Subject({ title, onClick }) {
    const RenderIcon = () => {
        switch (title) {
            case 'Mathématiques':
                return <Math />
            case 'Geographique':
                return <Geo/>
            case 'Historique':
                return <History/>
            case 'Physiques et chimie':
                return <Physics/>
            case 'Sciences de la vie et de la terre':
                return <SVT/>
            default:
                return <Geo/>


        }
    }
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onClick}>
            <Text style={styles.title}>{title}</Text>
            <RenderIcon />
        </TouchableOpacity>
    )
}
