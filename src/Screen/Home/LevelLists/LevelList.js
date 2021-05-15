import React from "react";
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import LevelItem from "../../../Component/LevelItem";
import styles from "./LevelList.style";

const logo = require("../../../../assets/icon.png");

export default function LevelList({ DATA, title, click }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {title} </Text>
      <FlatList
        style={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => click(item)}
          >
            <LevelItem background={item.background} title={item.title} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
