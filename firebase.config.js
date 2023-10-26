// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmR-4V00hrnXUnGuMPHmwtLTU2fWgJZnQ",
  authDomain: "grovyo-89dc2.firebaseapp.com",
  projectId: "grovyo-89dc2",
  storageBucket: "grovyo-89dc2.appspot.com",
  messagingSenderId: "16467726056",
  appId: "1:16467726056:web:dc23db4efe27f6adaac35d",
  measurementId: "G-E1BLGHPWL1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
