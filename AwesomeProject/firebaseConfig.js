// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';



const firebaseConfig = {
  apiKey: "AIzaSyAz3Pw1D9vaJniNQ23j2_v87607vmqJuzI",
  authDomain: "awesomeproject-c1a20.firebaseapp.com",
  projectId: "awesomeproject-c1a20",
  storageBucket: "awesomeproject-c1a20.appspot.com",
  messagingSenderId: "23837232979",
  appId: "1:23837232979:web:9142d630487610ce93dba6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


export default app;