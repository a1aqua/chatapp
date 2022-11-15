import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmSHz_pu1ywS4Nz8fib7QS_fpo6tjKN2I",
  authDomain: "newchatapp-41707.firebaseapp.com",
  projectId: "newchatapp-41707",
  storageBucket: "newchatapp-41707.appspot.com",
  messagingSenderId: "789750141939",
  appId: "1:789750141939:web:82da2a697664932bb33886"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
