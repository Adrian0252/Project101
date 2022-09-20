
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFqOxkpjUu6O8HRUQiuK-Mu0UjEsCrn00",
  authDomain: "azureproject-eb12c.firebaseapp.com",
  https: "https://console.firebase.google.com/u/1/project/azureproject-eb12c/overview",
  projectId: "azureproject-eb12c",
  storageBucket: "azureproject-eb12c.appspot.com",
  messagingSenderId: "340715517465",
  appId: "1:340715517465:web:997c39fff3fda3bb0d5c88",
  measurementId: "G-EMC4T1N9P0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);