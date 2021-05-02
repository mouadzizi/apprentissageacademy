import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
      },
      list: {
        flexGrow: 0,
      },
      text: {
        textAlign: "center",
        fontSize: 18,
      },
    
      list: {
        flexGrow: 0,
      },
      itemContainer: {
        paddingHorizontal: 6,
      },
      item: {
        borderWidth: 1,
        height: 200,
        width: 122,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e67e22",
        borderRadius: 11,
      },
      itemText: {
        fontSize: 19,
        fontWeight: "bold",
        color: "white",
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