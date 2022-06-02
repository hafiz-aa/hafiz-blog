import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDhdZ1IAp073tMP0ubclRjxCXlq86TLXvw",
  authDomain: "hafiz-blog.firebaseapp.com",
  projectId: "hafiz-blog",
  storageBucket: "hafiz-blog.appspot.com",
  messagingSenderId: "840706888039",
  appId: "1:840706888039:web:c3fd0c33a96a5162f65fc2"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }