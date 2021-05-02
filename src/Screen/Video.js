import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { ListItem, Icon } from 'react-native-elements';
import { st } from '../API/firebase'

export default function Video({ navigation, path }) {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {

    getVideos().then(videos => {
      setList(videos.filter(v => v.contentType === 'video/mp4'))
      setLoading(false)
    })
    return () => {

    }
  }, [])

  const getVideos = async () => {
    setLoading(true)
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
      <ActivityIndicator style={styles.indicator} color='#ffc814' size='large' animating={loading} />
      {
        list.map((item, i) => (
          <ListItem key={i} bottomDivider onPress={() => navigation.navigate('VideoView', { url: item.url })}>
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
const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10
  },
  indicator:{
    position:'absolute',
    zIndex:1,
    top:'50%',
    alignSelf:'center'

  }
})