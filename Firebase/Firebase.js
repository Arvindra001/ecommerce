// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 //enter your firebase configuration
 apiKey: process.env.EXPO_PUBLIC_API_KEY,
 authDomain:process.env.EXPO_PUBLIC_AUTH_DOMAIN,
 databaseURL: process.env.EXPO_PUBLIC_API_URL,
 projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
 storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
 messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
 appId: process.env.EXPO_PUBLIC_APP_ID,
 measurementId: process.env.EXPO_PUBLIC_MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
  
export const auth=getAuth(app);
export const db=getFirestore(app);