// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbtrGV0q6F2RnWYNj_PfzWxKs1KON-RnA",
  authDomain: "ecommerce-db-ce81f.firebaseapp.com",
  projectId: "ecommerce-db-ce81f",
  storageBucket: "ecommerce-db-ce81f.appspot.com",
  messagingSenderId: "863826744794",
  appId: "1:863826744794:web:b0de6f3258ef004190dce3",
  measurementId: "G-JEHZJ175RS",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDb = getFirestore(firebaseApp);
export const analytics = getAnalytics(firebaseApp);


