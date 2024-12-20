// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDduS9IfplvqX1QKY5Yp0PTLSRKluGgTN0",
  authDomain: "tipyweb-proto.firebaseapp.com",
  projectId: "tipyweb-proto",
  storageBucket: "tipyweb-proto.firebasestorage.app",
  messagingSenderId: "625259370032",
  appId: "1:625259370032:web:a79437b721dd9dae673ff5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;