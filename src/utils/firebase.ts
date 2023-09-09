import { getAuth } from "firebase/auth";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "hiraya-f454d.firebaseapp.com",
  projectId: "hiraya-f454d",
  storageBucket: "hiraya-f454d.appspot.com",
  messagingSenderId: "274888719070",
  appId: "1:274888719070:web:365639df133b4d87f8a04f",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export { app };
export const auth = getAuth(app);
export const db = getFirestore(app);
export default firebaseConfig;
