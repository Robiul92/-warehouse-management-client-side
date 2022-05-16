// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7CJJFgos8KKjrEtyikq_ypzKxDL5g6dE",
  authDomain: "simple-warehouse.firebaseapp.com",
  projectId: "simple-warehouse",
  storageBucket: "simple-warehouse.appspot.com",
  messagingSenderId: "282930130254",
  appId: "1:282930130254:web:1bac2ef7171c91b05f021f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;