// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXbOQqpJQMykQAZ4_ukQe3ZXB5-H2375E",
  authDomain: "chat-app-fab6f.firebaseapp.com",
  projectId: "chat-app-fab6f",
  storageBucket: "chat-app-fab6f.appspot.com",
  messagingSenderId: "186139323216",
  appId: "1:186139323216:web:3b95281044093b4e629a55",
  measurementId: "G-PGNMERRPT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)