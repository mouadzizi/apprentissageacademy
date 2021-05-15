import { StyleSheet } from "react-native";
import {COLORS} from '../../../utils/GlobalStyle'

export default StyleSheet.create({
  containerFill: {
    marginVertical: 25,
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 15,
  },
  buttonTextFill: {
    textAlign: "center",
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
  },
  containerOutlined: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: 10,
    borderRadius: 15,
  },
  buttonTextOutlined: {
    textAlign: "center",
    fontSize: 17,
    color: COLORS.primary,
    fontWeight: "bold",
  },
});
