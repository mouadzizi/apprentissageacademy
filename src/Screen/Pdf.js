import React from 'react'
import { Alert } from 'react-native';
import { View, Text } from 'react-native'
import { ListItem, Icon } from 'react-native-elements'


export default function Pdf() {

    const list = [
        {
          title: 'Cours numero 1',
          icon: 'av-timer'
        },
        {
          title: 'Cours numero 2',
          icon: 'flight-takeoff'
        },
        {
            title: 'Cours numero 3',
            icon: 'flight-takeoff'
          },
          {
            title: 'Cours numero 4',
            icon: 'flight-takeoff'
          },
          {
            title: 'Cours numero 5',
            icon: 'flight-takeoff'
          },
          {
            title: 'Cours numero 6',
            icon: 'flight-takeoff'
          },
      ];
    return (
        

  
  <View>
    {
      list.map((item, i) => (
        <ListItem key={i} bottomDivider onPress={()=> Alert.alert('Cours PDF Viewer')}>
          <Icon name={item.icon} />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))
    }
  </View>
    )
}
