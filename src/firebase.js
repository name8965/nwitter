import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA-PgK2e8sIg_pEonIhlFgYqR87f4oGNAo",
  authDomain: "nwitter-ff3c5.firebaseapp.com",
  projectId: "nwitter-ff3c5",
  storageBucket: "nwitter-ff3c5.appspot.com",
  messagingSenderId: "1047289190522",
  appId: "1:1047289190522:web:da2b6ac993078020cdc3c3",
};

export default firebase.initializeApp(firebaseConfig);
