import React, { useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from 'react-native-vector-icons/FontAwesome5'
import Pdf from "../Screen/Courses";
import Video from "../Screen/Video";
import {COLORS} from '../utils/GlobalStyle'

const Tab = createMaterialTopTabNavigator();

export default function TabTopNav({ route, navigation }) {
  return (
    <Tab.Navigator 
    backBehavior='none'
    tabBarOptions={{
      showIcon:true,
      inactiveTintColor:'#000',
      activeTintColor: COLORS.primary,
      labelStyle: { fontSize: 12},  
    }}
    >
      <Tab.Screen
    
        options={{
          tabBarIcon:({focused})=><Icon name='file-pdf' size={30} color={focused? COLORS.primary :'#000'} />,
          tabBarLabel:'Courses'
        }}
        name="Pdf"
        children={() => <Pdf nav={navigation} path={route.params.path} />}
      />
      <Tab.Screen
              options={{
                tabBarIcon:({focused})=><Icon name='play' size={25} color={focused? COLORS.primary :'#000'} />,
                
              }}
        name="Video"
        children={() => (
          <Video navigation={navigation} path={route.params.path} />
        )}
      />
    </Tab.Navigator>
  );
}
