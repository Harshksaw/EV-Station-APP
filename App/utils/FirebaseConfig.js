


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVLJFRArQ8mG3r2daEZTtVOgsitJqRxhA",
  authDomain: "ev-chargin-app.firebaseapp.com",
  projectId: "ev-chargin-app",
  storageBucket: "ev-chargin-app.appspot.com",
  messagingSenderId: "403253631197",
  appId: "1:403253631197:web:36b0292e23a494b1182334",
  measurementId: "G-00PZR2TXN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;