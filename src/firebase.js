import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCI2LWN1CdrXhe0-zROKTdf-g7pIMEKhN0",
  authDomain: "messenger-clone-61371.firebaseapp.com",
  projectId: "messenger-clone-61371",
  storageBucket: "messenger-clone-61371.appspot.com",
  messagingSenderId: "410001795195",
  appId: "1:410001795195:web:9836fbfcd55e27cbce1ade",
  measurementId: "G-EEH2X8CEN6",
});

const db = firebaseApp.firestore();
export default db;
