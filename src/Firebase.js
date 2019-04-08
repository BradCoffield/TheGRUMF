 /* eslint-disable */ 
 import * as firebase from 'firebase';
 import firestore from 'firebase/firestore'
 
 const settings = {timestampsInSnapshots: true};
 
 const config = {
     apiKey: "AIzaSyDqhYAQirUuT3eKXTyCAQybcZWcAwJUxJU",
     authDomain: "thegrumf.firebaseapp.com",
     databaseURL: "https://thegrumf.firebaseio.com",
     projectId: "thegrumf",
     storageBucket: "thegrumf.appspot.com",
     messagingSenderId: 546436778427
 };
  
 firebase.initializeApp(config);
 
 firebase.firestore().settings(settings);
 
 export default firebase;