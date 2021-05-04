import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "white",
        elevation: 3,
        borderColor: 'rgba(249, 202, 36,0.4)',
        borderWidth: 1,
        height: 150,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'monospace',
        color: '#ffc814'
    }
});