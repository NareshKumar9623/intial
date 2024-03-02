// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWk3lo8b7tWNNKSZ9cs-0UZRuD1drZMzc",
  authDomain: "practice-321.firebaseapp.com",
  projectId: "practice-321",
  storageBucket: "practice-321.appspot.com",
  messagingSenderId: "722804761143",
  appId: "1:722804761143:web:7e24ee4b570a58d50a95b2",
  measurementId: "G-XC6MMZ20ZY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);