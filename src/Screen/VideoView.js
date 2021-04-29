import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';



export default function VideoView({ route }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const { url } = route.params
  React.useEffect(() => {
  }, [])
  async function changeScreenOrientation(ev) {
    switch (ev.fullscreenUpdate) {
      case 1:
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT)
        break;

      case 3:
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
        break;
    }
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator style={styles.indicator} color='#ffc814' size='large' animating={loading} />
      <Video
        onLoad={() =>setLoading(false)}
        onFullscreenUpdate={changeScreenOrientation}
        ref={video}
        style={styles.video}
        source={{
          uri: url,
        }}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: '90%',
    height: '60%',
    borderWidth: 1,
    backgroundColor: 'black'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator:{
    position:'absolute',
    top:'50%',
    zIndex:1,
    alignSelf:'center'

  }
});
