// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD69jxDUBEzUmemHHz5H0WKM4Rwa6wiuBs",
  authDomain: "mini-project2-d88ce.firebaseapp.com",
  projectId: "mini-project2-d88ce",
  storageBucket: "mini-project2-d88ce.firebasestorage.app",
  messagingSenderId: "213300611383",
  appId: "1:213300611383:web:fad3f9429c91251d0232b2",
  measurementId: "G-L98VJN0Q94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };