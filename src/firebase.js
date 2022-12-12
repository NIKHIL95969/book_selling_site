// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyALcJX7YTnq70eq2NoB1jmSMcaUqXCvyvQ",
  authDomain: "clone-ee684.firebaseapp.com",
  projectId: "clone-ee684",
  storageBucket: "clone-ee684.appspot.com",
  messagingSenderId: "348371225886",
  appId: "1:348371225886:web:a45301d7ec983039244d0f",
  measurementId: "G-1TLBY0XRDZ"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};