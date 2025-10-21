// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";                              
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dev-cde71.firebaseapp.com",
  projectId: "dev-cde71",
  storageBucket: "dev-cde71.firebasestorage.app",
  messagingSenderId: "550579035283",
  appId: "1:550579035283:web:2da515ffc56d8539b00166",
  measurementId: "G-HZT3Y2P3EZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore(app);