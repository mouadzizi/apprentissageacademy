import React, { useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Pdf from "../Screen/Courses";
import Video from "../Screen/Video";

const Tab = createMaterialTopTabNavigator();

export default function TabTopNav({ route, navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Pdf"
        children={() => <Pdf nav={navigation} path={route.params.path} />}
      />
      <Tab.Screen
        name="Video"
        children={() => (
          <Video navigation={navigation} path={route.params.path} />
        )}
      />
    </Tab.Navigator>
  );
}
