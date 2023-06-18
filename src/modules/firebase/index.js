import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBvX6DNMYvMNLCDZNP22vAqE-_lRx9pMRA",

  authDomain: "angular-auth-327b2.firebaseapp.com",

  projectId: "angular-auth-327b2",

  storageBucket: "angular-auth-327b2.appspot.com",

  messagingSenderId: "239130449909",

  appId: "1:239130449909:web:9877f7393cec4f2a05b2bc",
};

const FirebaseApp = initializeApp(firebaseConfig);

export const FireAuth = getAuth(FirebaseApp);
export const FireStore = getFirestore(FirebaseApp);
