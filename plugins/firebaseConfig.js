import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyAVcY8XzCNOkUf21qkHl-qa6HD8qOvIlc8',
    authDomain: 'project-hotel-1feea.firebaseapp.com',
    databaseURL: 'https://project-hotel-1feea.firebaseio.com',
    projectId: 'project-hotel-1feea',
    storageBucket: 'project-hotel-1feea.appspot.com',
    messagingSenderId: '786622950991',
    appId: '1:786622950991:web:50586f3a2ca65af80a443a',
    measurementId: 'G-TL8TBQDP5G',
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
