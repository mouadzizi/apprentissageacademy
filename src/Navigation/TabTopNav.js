import React, { useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Pdf from '../Screen/Courses'
import Video from '../Screen/Video'

const Tab = createMaterialTopTabNavigator();

export default function TabTopNav({route}) {
  useEffect(()=>{ 
    console.log(route.params);
  },[])
    return (
            <Tab.Navigator>
              <Tab.Screen name="Pdf" children={()=><Pdf path={route.params.path} />} />
              <Tab.Screen name="Video" component={Video} />
            </Tab.Navigator>
          );
}