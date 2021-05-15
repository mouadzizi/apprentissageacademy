import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/GlobalStyle'
export default StyleSheet.create({
    container:{
        flex: 1,
    },
    btn: {
        marginBottom:15,
        backgroundColor: COLORS.primary,
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
});