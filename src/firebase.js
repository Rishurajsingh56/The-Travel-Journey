// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBafdHfoGszTox7uiC1ZxLUCvhGHAbbTcA",
  authDomain: "the-travel-journey.firebaseapp.com",
  projectId: "the-travel-journey",
  storageBucket: "the-travel-journey.firebasestorage.app",
  messagingSenderId: "584064081739",
  appId: "1:584064081739:web:03d0acef4774c7062c12ce"
};

//
 export  const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);