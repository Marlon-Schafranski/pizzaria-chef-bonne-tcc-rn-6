
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAeeYGJfDqxwkTObM6RWMFoTyhnXXP8fCc",
  authDomain: "pizzaria-rn-b034d.firebaseapp.com",
  projectId: "pizzaria-rn-b034d",
  storageBucket: "pizzaria-rn-b034d.appspot.com",
  messagingSenderId: "948893874827",
  appId: "1:948893874827:web:0e62f6f67326e6418df28e",
  measurementId: "G-7YVZHLTM80"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);

