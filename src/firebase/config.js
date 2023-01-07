import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD-INCbRhCr8990lChx7A0iGQHg6fwkabI",

  authDomain: "red-task-65164.firebaseapp.com",

  databaseURL: "https://red-task-65164-default-rtdb.firebaseio.com",

  projectId: "red-task-65164",

  storageBucket: "red-task-65164.appspot.com",

  messagingSenderId: "578432299306",

  appId: "1:578432299306:web:f9db9a9b999d867659ae53",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore }