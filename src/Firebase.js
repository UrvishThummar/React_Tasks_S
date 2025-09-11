// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc552-DL6KLPxYUc-kegCDt-JibdQUQL4",
  authDomain: "myprojectclone-605ab.firebaseapp.com",
  databaseURL: "https://myprojectclone-605ab-default-rtdb.firebaseio.com",
  projectId: "myprojectclone-605ab",
  storageBucket: "myprojectclone-605ab.firebasestorage.app",
  messagingSenderId: "1050078512498",
  appId: "1:1050078512498:web:fc84387a3a0bb44530c9eb",
  measurementId: "G-WHX8BHE3KW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);