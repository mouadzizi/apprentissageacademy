import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    cotainer: {
        backgroundColor: '#ffc814'
    },
    headerContainer: {
        backgroundColor: 'white'
    },
    header: {
        backgroundColor: '#ffc814',
        borderBottomLeftRadius: 100,
        paddingLeft: 55,
        paddingTop: 50,
    },
    headline: {
        fontSize: 35,
        marginTop: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    subline: {
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
        backgroundColor: '#ffc814',
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
        color: '#ffc814',
        textAlign: 'right',
    },
    caption: {
        textAlign: 'center',
        color: '#c2c2c2'
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