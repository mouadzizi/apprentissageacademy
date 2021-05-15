import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../utils/GlobalStyle'

const heightScreen = Dimensions.get("window").height;

export default StyleSheet.create({
    cotainer: {
        backgroundColor: 'white',
        height: '200%'
    },
    headerContainer: {
        backgroundColor: 'white'
    },
    header: {
        backgroundColor: COLORS.primary,
        borderBottomLeftRadius: 100,
        height: heightScreen*0.25,
        paddingLeft: 55,
        paddingTop: 70,
    },
    headline: {
        marginTop: 45,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'monospace'
    },
    subline: {
        marginTop: 5,
        fontWeight: 'bold',
        color: 'black'
    },
    body: {
        backgroundColor: '#fff',
        borderTopEndRadius: 75,
        padding: 20,
    },
    errorMessage: {
        color: 'red',
        textAlign: 'center'
    },
    btn: {
        marginVertical: 25,
        backgroundColor: COLORS.primary,
        width: '60%',
        elevation: 10,
        alignSelf: 'center',
        padding: 10,
        borderRadius: 15
    },

    btnDisable: {
        marginVertical: 25,
        backgroundColor: COLORS.caption,
        width: '60%',
        elevation: 10,
        alignSelf: 'center',
        padding: 10,
        borderRadius: 15
    },
    btnText: {
        textAlign: 'center',
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold'
    },
    captionImportant: {
        color: COLORS.primary,
        textAlign: 'right',
    },
    caption: {
        textAlign: 'center',
        color: '#c2c2c2',
    },
    indicator:{
        position:'absolute',
        top:'10%',
        left:'2%'
    },
    FAB:{
        position : 'absolute',
        top: 20,
        left: 20,
        zIndex: 1
    }
});