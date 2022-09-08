// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBW4nDIPF4DaP-Xc1YyZ05302PCzopuCl4",
  authDomain: "doctors-portal-cc100.firebaseapp.com",
  projectId: "doctors-portal-cc100",
  storageBucket: "doctors-portal-cc100.appspot.com",
  messagingSenderId: "502131974866",
  appId: "1:502131974866:web:6e7cc6f43f966df7d1430b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
