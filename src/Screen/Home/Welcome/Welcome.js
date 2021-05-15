import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { Divider } from "react-native-elements";
import styles from "./Welcome.styles";
import {COLORS} from '../../../utils/GlobalStyle'
export default function Welcome({ name }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../../assets/cover.jpg")}
        style={styles.backgroundImage}
        imageStyle={{
            resizeMode: 'stretch',
            borderRadius: 15,
          }}
      />

        <Text style={styles.title1}>
          Salut, <Text style={styles.name}> {name} </Text>{" "}
        </Text>
        <Text style={styles.title2}>
          Bienvenue chez{" "}
          <Text style={styles.apprentissage}> Apprentissage Academy </Text>{" "}
        </Text>
        <Text style={styles.subTitle}>
          êtes-vous prêt à étudier aujourd'hui?
        </Text>

        <Divider style={{backgroundColor: COLORS.primary, marginHorizontal: 70, marginVertical: 25}}/>

    </View>
  );
}
