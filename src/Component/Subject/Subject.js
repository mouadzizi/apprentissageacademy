import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Subject.style'

import Math from '../../SVG/Math'
import Physics from '../../SVG/Physics'
import Geo from '../../SVG/Geo'
import History from '../../SVG/History'
import SVT from '../../SVG/SVT'
import Language from '../../SVG/Language'
import Translation from '../../SVG/Translation'
import Francais from '../../SVG/Francais'

import DefaultSubject from '../../SVG/defaultSubject'

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
            case 'Arabe':
                return <Translation/>
            case 'Francais':
                    return <Francais/>
            case 'Anglais':
                return <Language/>
            default:
                return <DefaultSubject/>
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
