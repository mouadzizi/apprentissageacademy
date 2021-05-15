import {StyleSheet} from 'react-native'
import {COLORS} from '../../../utils/GlobalStyle'
export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 15,
    },
    title1:{
        fontWeight: '300',
        fontSize: 19,
        color: 'black',
        marginBottom: 5,
    },
    name:{
        fontWeight: 'bold',
        fontSize: 20,
        color: COLORS.primary,
    },
    apprentissage:{
        fontWeight: 'bold',
        fontSize: 17,
        color: COLORS.primary,
    },
    title2:{
        fontWeight: '300',
        fontSize: 18,
        color: 'black',
        marginBottom: 5,
    },
    subTitle:{
        color: COLORS.dark[200]
    }
});