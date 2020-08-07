import * as firebase from "firebase";

// config fire base
var firebaseConfig = {
  apiKey: "AIzaSyBCbJd9vGxeD23GmvdlKaWSvQ8IcQnwTG4",
  authDomain: "socialrencontreapp.firebaseapp.com",
  databaseURL: "https://socialrencontreapp.firebaseio.com",
  projectId: "socialrencontreapp",
  storageBucket: "socialrencontreapp.appspot.com",
  messagingSenderId: "403163503092",
  appId: "1:403163503092:web:6ffb1bcf244ea311c681a1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
