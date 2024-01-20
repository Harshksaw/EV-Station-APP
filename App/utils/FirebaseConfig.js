// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgipflOJYzGahuyhJNHB2_shhMCr1CE3A",
  authDomain: "ev-charging-station-21117.firebaseapp.com",
  projectId: "ev-charging-station-21117",
  storageBucket: "ev-charging-station-21117.appspot.com",
  messagingSenderId: "185438377231",
  appId: "1:185438377231:web:1692a95ef2333bcdf55a7a",
  measurementId: "G-NBP84QEWBG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);