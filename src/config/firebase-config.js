// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBWTNCe4kxPIbCKDvZLsj11dAO8mbDV970",
  authDomain: "fir-course-85218.firebaseapp.com",
  projectId: "fir-course-85218",
  storageBucket: "fir-course-85218.firebasestorage.app",
  messagingSenderId: "564995761402",
  appId: "1:564995761402:web:c5a34eaf5aae134aa35543",
  measurementId: "G-3JGYGQ2K08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const googleprovider =new GoogleAuthProvider();