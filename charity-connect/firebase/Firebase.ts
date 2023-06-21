import dotenv from "dotenv";
dotenv.config();

import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBOALvmCBliD_UXLJ7pcqVgs25NOFkzRqI",
  authDomain: "charity-connect-dae3f.firebaseapp.com",
  projectId: "charity-connect-dae3f",
  storageBucket: "charity-connect-dae3f.appspot.com",
  messagingSenderId: "110335350854",
  appId: "1:110335350854:web:074d29696b4efb635cd247",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
