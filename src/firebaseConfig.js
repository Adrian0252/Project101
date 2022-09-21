import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'

import { getAuth } from 'firebase/auth'
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAFqOxkpjUu6O8HRUQiuK-Mu0UjEsCrn00",
    authDomain: "azureproject-eb12c.firebaseapp.com",
    projectId: "azureproject-eb12c",
    storageBucket: "azureproject-eb12c.appspot.com",
    messagingSenderId: "340715517465",
    appId: "1:340715517465:web:997c39fff3fda3bb0d5c88",
    measurementId: "G-EMC4T1N9P0"
  };


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const auth = getAuth();

export { app, auth, database }
