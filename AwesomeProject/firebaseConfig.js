// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDchHHjJmOszuwrMPE1CqPih8c3qzj82Eo",
  authDomain: "todolist-1ae78.firebaseapp.com",
  projectId: "todolist-1ae78",
  storageBucket: "todolist-1ae78.appspot.com",
  messagingSenderId: "266832113999",
  appId: "1:266832113999:web:26ae9d81ec6689dd25553a",
  measurementId: "G-JCNDBDP213"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app);

export default app;