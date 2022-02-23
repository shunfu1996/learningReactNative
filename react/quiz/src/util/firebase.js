import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth"

import { getFirestore } from "firebase/firestore"
import { collection, getDocs, addDoc } from "firebase/firestore"; 
import { GiConsoleController } from "react-icons/gi";

/* import { collection, getDocs } from "firebase/firestore"; */


const firebaseConfig = {
    apiKey: "AIzaSyAEF2wnnQG9x21IbvXQPDeD4pcPzPfuWpY",
    authDomain: "sample-quiz-game.firebaseapp.com",
    projectId: "sample-quiz-game",
    storageBucket: "sample-quiz-game.appspot.com",
    messagingSenderId: "506337407514",
    appId: "1:506337407514:web:a2a3e8409ac1ae7ad217a3",
    measurementId: "G-TLEWHQ1NTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();

export const dbFirebase = getFirestore();

export const querySnapshot = getDocs(collection(dbFirebase, "user"));
console.log(`firestore ${querySnapshot}`)
/* querySnapshot.forEach((doc) => {
  console.log(`${doc}`);
}); */
/* 
try {
    const docRef = addDoc(collection(dbFirebase, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
   */