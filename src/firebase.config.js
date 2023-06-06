// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIR3CJRPxdtdeUcaBMRaccbg7uC1kCJVc",
  authDomain: "language-camp-client.firebaseapp.com",
  projectId: "language-camp-client",
  storageBucket: "language-camp-client.appspot.com",
  messagingSenderId: "789174863286",
  appId: "1:789174863286:web:c7be8e5199bc73442ded17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;