import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyB2ZMHWiy8wjzUZbTF5fYQ2fR1iOaVCO20",
  authDomain: "fly-high-3f537.firebaseapp.com",
  projectId: "fly-high-3f537",
  storageBucket: "fly-high-3f537.appspot.com",
  messagingSenderId: "192339283833",
  appId: "1:192339283833:web:f545828e50b6c1cf3669a8",
});

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const db = getFirestore();

export { app, auth, signInWithPopup, googleProvider, signOut, db, setDoc, doc };
