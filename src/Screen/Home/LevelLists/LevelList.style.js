import {StyleSheet} from 'react-native'
import {COLORS} from '../../../utils/GlobalStyle'
export default StyleSheet.create({
    container:{
        flex: 1,
        marginBottom: 30,
    },
    touchable: {
        flex: 1,
        flexDirection: 'column',
        width: 230,
        height: 270,
        marginHorizontal: 20,
        borderColor: COLORS.primary,
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
        color: COLORS.primary,
        letterSpacing: 2,
        paddingLeft: 20
      },
});