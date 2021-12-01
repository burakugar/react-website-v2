import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"

firebase.initializeApp({
  apiKey: "AIzaSyAfZhtmVbUUyEfPuEzJtbrey-Utf1pzz6I",
  authDomain: "contacts-aeb51.firebaseapp.com",
  projectId: "contacts-aeb51",
  storageBucket: "contacts-aeb51.appspot.com",
  messagingSenderId: "660674804260",
  appId: "1:660674804260:web:0b13a7500e909ab400b6b1",
  measurementId: "G-BRBJ6FK4LX"
});
const db = firebase.firestore();
db.settings({timestampsInSnapshots:true})
export {db};