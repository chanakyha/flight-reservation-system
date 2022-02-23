// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL5drBOZsogdcSXMCj1OHsizWYy6biydc",
  authDomain: "fly-tify.firebaseapp.com",
  projectId: "fly-tify",
  storageBucket: "fly-tify.appspot.com",
  messagingSenderId: "874909382910",
  appId: "1:874909382910:web:873435c53ed5fa43ff8daf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
