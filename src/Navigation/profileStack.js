import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from "../utils/GlobalStyle";
import Profile from "../Screen/Profile";

export default function profileStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
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
    </Stack.Navigator>
  );
}
