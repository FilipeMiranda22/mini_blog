// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "miniblog-22f93.firebaseapp.com",
  projectId: "miniblog-22f93",
  storageBucket: "miniblog-22f93.appspot.com",
  messagingSenderId: "489148781652",
  appId: "1:489148781652:web:68ef86298d04ce5a2649c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
