import { auth } from './firebase';
import * as Facebook from 'expo-facebook';
import firebase from 'firebase';



export const signUp = async (email, password) => {
   const userCred = await auth.createUserWithEmailAndPassword(email, password)

   return userCred;
}

export const signIn = async (email, password) => {
   const userCred = await auth.signInWithEmailAndPassword(email, password)

   return userCred;
}

export async function signInWithFacebook() {

   try {
      
      await Facebook.initializeAsync({ appId:'2954198578192415',appName:'Appretissage Academy'});
      const { type, token } = await Facebook.logInWithReadPermissionsAsync();
      if (type === 'success') {
         await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
         const credential = firebase.auth.FacebookAuthProvider.credential(token);
         const userCredential = await auth.signInWithCredential(credential)
            .catch(e => alert('Firebase err', JSON.stringify(e)));

         const fbID = userCredential.user.providerData[0].uid
         await fetch(`https://graph.facebook.com/${fbID}/picture?type=normal`).then(response => {
            userCredential.user.updateProfile({
               photoURL: response.url
            })
         })

         return userCredential.user;

      }
      if (type === 'cancel') {
         alert('Opertaion annuler');
      }
   } catch (e) {
      alert('Facebook Login Error: '+ e.message);
   }
}
