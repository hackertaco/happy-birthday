import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDKxvSPVmb08VdN4FncfhifGDc3ojuY1tY",
    authDomain: "happybirthday-14daa.firebaseapp.com",
    databaseURL: "https://happybirthday-14daa.firebaseio.com",
    projectId: "happybirthday-14daa",
    storageBucket: "happybirthday-14daa.appspot.com",
    messagingSenderId: "408432812724",
    appId: "1:408432812724:web:6dbed62ab46abfe3446de1"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;