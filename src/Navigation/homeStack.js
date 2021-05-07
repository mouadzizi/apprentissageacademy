import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

//Pages of Authentification
import Acceuil from "../Screen/Home";
import LevelDetails from "../Screen/LevelDetails";
import TabTopNav from "../Navigation/TabTopNav";

export default function HomeStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Acceuil"
        component={Acceuil}
        options={{
          headerTitleAlign: "center",
          headerTintColor: "white",
          title: "Apprentissage Academy",
          headerStyle: {
            backgroundColor: "#ffc814",
          },
        }}
      />
      <Stack.Screen
        name="LevelDetails"
        component={LevelDetails}
        options={{
          headerTitleAlign: "center",
          headerTintColor: "white",
          title: "Sujets",
          headerStyle: {
            backgroundColor: "#ffc814",
          },
        }}
      />
      <Stack.Screen
        name="TabTopNav"
        component={TabTopNav}
        options={{
          headerTitleAlign: "center",
          headerTintColor: "white",
          title: "Les cours",
          headerStyle: {
            backgroundColor: "#ffc814",
          },
        }}
      />
    </Stack.Navigator>
  );
}
