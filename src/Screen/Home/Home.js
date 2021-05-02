import React from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import styles from './Home.style'
import LevelItem from '../../Component/LevelItem'

const COLLEGE_DATA = [
  {
    id: "1c",
    title: "1er Année",
    path: "Collége",
    background: require('../../../assets/college1.jpeg'),
  },
  {
    id: "2c",
    title: "2éme Année",
    path: "Collége",
    background: require('../../../assets/college2.jpeg'),
  },
  {
    id: "3c",
    title: "3éme Année",
    path: "Collége",
    background: require('../../../assets/college3.jpeg'),
  },
];

const LYCEE_DATA = [
  {
    id: "1l",
    title: "T.Commun",
    path: "Lycée",
    background: require('../../../assets/lycee1.jpeg'),
  },
  {
    id: "2l",
    title: "1ér Bac",
    path: "Lycée",
    background: require('../../../assets/lycee2.jpeg'),
  },
  {
    id: "3l",
    title: "2éme Bac",
    path: "Lycée",
    background: require('../../../assets/lycee3.jpeg'),
  },
];

const SUP_DATA = [
  {
    id: "1s",
    title: "1ér année",
    path: "SUP",
    background: require('../../../assets/Uni1.jpeg'),
  },
  {
    id: "2s",
    title: "2éme année",
    path: "SUP",
    background: require('../../../assets/uni2.jpeg'),
  },
];

export default function Acceuil({ navigation }) {
  return (
    <ScrollView style={{backgroundColor: 'white'}}> 
      <StatusBar backgroundColor="#ffc814" barStyle="dark-content" />

      <Text style={styles.title}> Collége </Text>
      <FlatList
        style={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={COLLEGE_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LevelItem background={item.background} title={item.title} onClick={() => navigation.navigate("LevelDetails", { level: item })}/>
        )}
      />
      <Text style={styles.title}> Lycée </Text>
      <FlatList
        style={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={LYCEE_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LevelItem background={item.background} title={item.title} onClick={() => navigation.navigate("LevelDetails", { level: item })}/>

        )}
      />

    <Text style={styles.title}> Etude Supérieur </Text>
      <FlatList
        style={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={SUP_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LevelItem background={item.background} title={item.title} onClick={() => navigation.navigate("LevelDetails", { level: item })}/>

        )}
      />
 
    </ScrollView>
  );
}
