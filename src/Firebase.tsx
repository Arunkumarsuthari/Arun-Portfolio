import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCja9loviuk3LnzM71SbYurzuihFschWgA",
  authDomain: "arun-portfolio-d8030.firebaseapp.com",
  projectId: "arun-portfolio-d8030",
  storageBucket: "arun-portfolio-d8030.firebasestorage.app",
  messagingSenderId: "1002132980067",
  appId: "1:1002132980067:web:a1635237c15c98abf05356",
  measurementId: "G-DGE6231LRP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
