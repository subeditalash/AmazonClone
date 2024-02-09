// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCvFUTXmOzFrdXgKL-zLNl8bCzETOm-HuE",
  authDomain: "clone-2aa0b.firebaseapp.com",
  projectId: "clone-2aa0b",
  storageBucket: "clone-2aa0b.appspot.com",
  messagingSenderId: "764181707055",
  appId: "1:764181707055:web:cee7e1ce668ccc9f1ec9da",
  measurementId: "G-WMPDYWM1JV"
};
    const firebaseApp = firebase.initializeApp(firebaseConfig);

    const db = firebaseApp.firestore();
    const auth = firebase.auth();

export { db, auth };