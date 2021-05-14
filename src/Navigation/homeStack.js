import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {COLORS} from '../utils/GlobalStyle'

//Pages of Authentification
import Acceuil from "../Screen/Home";
import LevelDetails from "../Screen/LevelDetails";
import TabTopNav from "../Navigation/TabTopNav";

import PdfView from "../Screen/PdfView";
import VideoView from "../Screen/VideoView";

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
            backgroundColor: COLORS.primary,
          },
          headerLeft: () => null,
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
            backgroundColor: COLORS.primary,
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
            backgroundColor: COLORS.primary,
          },
        }}
      />

      <Stack.Screen
        name="PdfView"
        component={PdfView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VideoView"
        component={VideoView}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
