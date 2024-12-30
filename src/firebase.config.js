// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv6Z0QVZVCxviCAr6hPJ7CATaq_pSJIAo",
  authDomain: "online-job-portal-977ec.firebaseapp.com",
  projectId: "online-job-portal-977ec",
  storageBucket: "online-job-portal-977ec.appspot.com",
  messagingSenderId: "765027163642",
  appId: "1:765027163642:web:4633d06d5586332cb09843"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}