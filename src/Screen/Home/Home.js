import React from "react";
import {
  StatusBar,
  ScrollView,
} from "react-native";
import styles from './Home.style'
import Welcome from './Welcome'
import LevelList from './LevelLists'
import {auth} from '../../API/firebase'
import { COLORS } from "../../utils/GlobalStyle";

const COLLEGE_DATA = [
  {
    id: "1c",
    title: "1er Année",
    path: "Collége",
    background: require('../../../assets/college1.jpeg'),
  },
  {
    id: "2c",
    title: "2éme Anneé",
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
  const {currentUser:user}=auth;

  return (
    <ScrollView style={styles.container}>  
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <Welcome name={user.displayName.toUpperCase()}  />
      <LevelList title="Collége" DATA={COLLEGE_DATA} click={(item) => navigation.navigate("LevelDetails", { level: item })}/>
      <LevelList title="Lycée" DATA={LYCEE_DATA} click={(item) => navigation.navigate("LevelDetails", { level: item })}/>
      <LevelList title="Etude Supérieur" DATA={SUP_DATA} click={(item) => navigation.navigate("LevelDetails", { level: item })}/>
    </ScrollView>
  );
}
