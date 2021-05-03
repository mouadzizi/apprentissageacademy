import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  
  backgroundStyle: {
    width: '100%',
    height: '100%',
  },
  imageStyle: {
    resizeMode: 'cover',
    borderRadius: 15,
  },
  containerImage: {
    height: '70%',
    flexDirection: 'column',
  },
  containerInfo: {
    height: '30%',
    flexDirection: 'row',
    backgroundColor: 'rgba(52, 152, 219,0.4)',
    borderBottomEndRadius: 15,
    borderBottomLeftRadius: 15,
  },
  containerLogo: {
    width: '27%',
    borderBottomLeftRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerDetails: {
    flexDirection: 'column',
    width: '73%',
    justifyContent: 'center',
  },
  containerDistance: {
    flexDirection: 'row',
    width: '100%',
    borderBottomEndRadius: 15,
    marginVertical: 5,
  },

  title: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },

  brandLogo: {
    width: 44,
    height: 44,
  },

});
