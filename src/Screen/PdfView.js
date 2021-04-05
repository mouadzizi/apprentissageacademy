import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions, ActivityIndicator } from 'react-native'
import Pdf from 'rn-pdf-reader-js';

import { st } from '../API/firebase'

export default function PdfView({route}) {
    const [isReady, setIsReady] = useState(false)
    const link = route.params.url

    useEffect(() => {
        // var stRef = st.ref()
        // stRef.child('/Collége/1er Année/Historique').listAll().then(res => {
        //     res.items.forEach(p => {
        //         p.getDownloadURL().then(url => {
        //             setLink(url)
        //             setIsReady(true)
        //         })
        //     })
        // })
    }, [])
    return (
        <View style={styles.pageContainer}>
            { isReady ?
                <View>
                   
                    <Pdf
                        
                        withScroll
                        withPinchZoom
                        source={{
                            uri:
                                link
                        }}
                        style={styles.pdf}
                    />
                </View>
                :  <ActivityIndicator style={styles.indicator} color='red' size='large' animating={true} />
            }



        </View>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
    },
    indicator: {
        position: 'absolute',
    }
})
