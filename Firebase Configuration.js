// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASS-ojCGXc9q5I_IJQddXQBqZeVBkdhDM",
  authDomain: "novastore-b03d8.firebaseapp.com",
  projectId: "novastore-b03d8",
  storageBucket: "novastore-b03d8.firebasestorage.app",
  messagingSenderId: "162002984839",
  appId: "1:162002984839:web:29bff0a1fb76682ffd7d22",
  measurementId: "G-PNQLH77M7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);