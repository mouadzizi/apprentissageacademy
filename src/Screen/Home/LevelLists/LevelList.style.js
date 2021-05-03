import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 10,
        marginBottom: 30,
    },
    touchable: {
        flex: 1,
        flexDirection: 'column',
        width: 230,
        height: 270,
        marginHorizontal: 20,
        borderColor: 'rgba(52, 152, 219,0.4)',
        borderWidth: 1,
        borderRadius: 15,
      },
    list:{
        flex: 1,
        flexGrow: 0,
    },
    title: {
        fontSize: 20,
        marginVertical: 20,
        fontWeight: 'bold',
        color: '#ffc814',
        letterSpacing: 2,
        paddingLeft: 20
      },
});