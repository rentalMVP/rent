// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpPeLUuSn8OU_XWxLhkll6_bHfTh8nQFs",
  authDomain: "rental-1a967.firebaseapp.com",
  projectId: "rental-1a967",
  storageBucket: "rental-1a967.appspot.com",
  messagingSenderId: "347452819408",
  appId: "1:347452819408:web:06209af51142bc03629bd5",
  measurementId: "G-D5MMQPDVM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);