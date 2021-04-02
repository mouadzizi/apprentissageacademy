import * as firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyCFnhAZ7HLt4O4iEgMmsJsCjAwks297IRs",
    authDomain: "apprentissage-academy.firebaseapp.com",
    projectId: "apprentissage-academy",
    storageBucket: "apprentissage-academy.appspot.com",
    messagingSenderId: "773140930601",
    appId: "1:773140930601:web:f8273c6c428f3d58f23c38",
    measurementId: "G-BC9MJNL18N"
  };
  // Initialize Firebase
  const app = firebase.default.initializeApp(firebaseConfig);

  export const db = app.database();
  export const auth = app.auth();
  export const st = app.storage();
  
  

  