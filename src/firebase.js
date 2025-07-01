// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAYpxdr7reobzb4kTYSQAjC-uMGb-Z7WXY",
  authDomain: "glow-28657.firebaseapp.com",
  projectId: "glow-28657",
  storageBucket: "glow-28657.firebasestorage.app",
  messagingSenderId: "157510076723",
  appId: "1:157510076723:web:a7fcd497f347b088ef9646",
  measurementId: "G-DGNEPQDL8M"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);


