import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Pdf from '../Screen/Pdf'
import Video from '../Screen/Video'

const Tab = createMaterialTopTabNavigator();

export default function TabTopNav() {

    return (
            <Tab.Navigator>
              <Tab.Screen name="Pdf" component={Pdf} />
              <Tab.Screen name="Video" component={Video} />
            </Tab.Navigator>
          );
}