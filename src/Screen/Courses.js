import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { ListItem, Icon } from 'react-native-elements';
import {useNavigation,useRoute} from '@react-navigation/native'
import { st } from '../API/firebase'


export default function Courses({path}) {
  const [list, setList] = useState([])
  const navigation = useNavigation();
  
  useEffect(() => {
      getCourses().then(files=>{
        setList(files)
      })
  }, [])

  const getCourses = async () => {
    const data = await st.ref().child(path).listAll()
    const courses = data.items.map( async f=> {
      const link = await f.getDownloadURL()
        return {
          title:f.name.substring(0,f.name.length -4),
          icon:'rowing',
          url:link
        }
    } )
    return Promise.all(courses)
  }

  return (
    <View>
      {
        list.map((item, i) => (
          <ListItem key={i} bottomDivider onPress={() => navigation.navigate('PdfView',{link:item.url})}>
            <Icon name={item.icon} />
            <ListItem.Content>
              <ListItem.Title style={{textAlign:'right',width:'100%'}} >{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron solid />
          </ListItem>
        ))
      }
    </View>
  )
}
