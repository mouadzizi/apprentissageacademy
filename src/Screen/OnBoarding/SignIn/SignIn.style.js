import {COLORS} from '../../../utils/GlobalStyle'
import {StyleSheet, Dimensions} from 'react-native'

const heightScreen = Dimensions.get("window").height;

export default StyleSheet.create({
    containerGlobal: {
      height: heightScreen,
      width: '100%',
      padding: 20,
      backgroundColor: 'white'
    },
    imageIntro: {
      height: heightScreen * 0.4,
      alignSelf: "center",
      marginVertical: 25,
    },

    caption: {
      fontSize: 12,
      color: COLORS.caption,
      textAlign: "center",
    },

  });