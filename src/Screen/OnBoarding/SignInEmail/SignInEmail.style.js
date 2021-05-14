import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../utils/GlobalStyle'

const heightScreen = Dimensions.get("window").height;

export default StyleSheet.create({
    cotainer: {
        backgroundColor: COLORS.primary
    },
    headerContainer:{
        backgroundColor: 'white',
    },
    header: {
        backgroundColor: COLORS.primary,
        height: heightScreen*0.25,
        borderBottomLeftRadius: 100,
        paddingLeft: 55,
        paddingTop: 70,
    },
    headline: {
        marginTop: 15,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'monospace'
    },
    subline: {
        fontWeight: 'bold',
        color: 'black'
    },
    body: {
        backgroundColor: '#fff',
        height: heightScreen * 0.75,
        borderTopEndRadius: 75,
        padding: 20,
    },
    errorMessage:{
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
        color: COLORS.caption
    },
    indicator: {
        position: 'absolute',
        top: '10%',
        left: '2%'
    },

})