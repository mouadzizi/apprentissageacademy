import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet,InteractionManager } from 'react-native'
import { ListItem, Icon } from 'react-native-elements';
import { st } from '../API/firebase'

export default function Courses({ path,nav }) {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    InteractionManager.runAfterInteractions(()=>{ 
      setLoading(true)
      getCourses().then(files => {
        setList(files.filter(f => f.contentType == 'application/pdf'))
        setLoading(false)
      })
     })
  }, [])

  const getCourses = async () => {
    const data = await st.ref().child(path).listAll()
    const courses = data.items.map(async f => {
      const link = await f.getDownloadURL()
      const { contentType } = await f.getMetadata()
        return {
          title: f.name.substring(0, f.name.length - 4),
          icon: 'rowing',
          url: link,
          contentType: contentType
        }
    })
    return Promise.all(courses)
  }

  return (
    <View style={styles.container} >
      <ActivityIndicator style={styles.indicator} color='#ffc814' size='large' animating={loading}  />
      {
        list.map((item, i) => (
          <ListItem key={i} bottomDivider onPress={() => nav.navigate('PdfView', { link: item.url })}>
            <Icon name={item.icon} />
            <ListItem.Content>
              <ListItem.Title style={{ textAlign: 'right', width: '100%' }} >{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron solid />
          </ListItem>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:7
  },
  indicator:{
    position:'absolute',
    zIndex:1,
    top:'50%',
    alignSelf:'center'

  }
})