// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAInYnutf_g6CXyY8pBALBVzkfFECWDnZM",
  authDomain: "the-dragon-news-a060e.firebaseapp.com",
  projectId: "the-dragon-news-a060e",
  storageBucket: "the-dragon-news-a060e.appspot.com",
  messagingSenderId: "1040792820375",
  appId: "1:1040792820375:web:9335a80e9f8b827b94a7d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;