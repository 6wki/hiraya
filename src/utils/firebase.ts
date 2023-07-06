// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "hiraya-f454d.firebaseapp.com",
  projectId: "hiraya-f454d",
  storageBucket: "hiraya-f454d.appspot.com",
  messagingSenderId: "274888719070",
  appId: "1:274888719070:web:0d76bfe2bf96896af8a04f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
