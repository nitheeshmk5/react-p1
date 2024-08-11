// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV5n0A5ASknn63bNnW8gUKgLDx3OlUbq8",
  authDomain: "react-project-6f2a0.firebaseapp.com",
  projectId: "react-project-6f2a0",
  storageBucket: "react-project-6f2a0.appspot.com",
  messagingSenderId: "167862422753",
  appId: "1:167862422753:web:54886bd3560c2861e93ba0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
