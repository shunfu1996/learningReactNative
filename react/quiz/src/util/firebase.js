import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth"

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