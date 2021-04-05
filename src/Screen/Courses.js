import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { ListItem, Icon } from 'react-native-elements';
import { st } from '../API/firebase'


export default function Courses({navigation,path}) {
  const [list, setList] = useState([])
  useEffect(() => {
    console.log(navigation);
      getCourses().then(files=>{
        setList(files)
      })
  }, [])

  const getCourses = async () => {
    const data = await st.ref().child(path).listAll()
    const courses = data.items.map( async f=> {
      const link = await f.getDownloadURL()
        return {
          title:f.name,
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
          <ListItem key={i} bottomDivider onPress={() => navigation.navigate('PdfView')}>
            <Icon name={item.icon} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron solid />
          </ListItem>
        ))
      }
    </View>
  )
}
