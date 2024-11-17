// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXFkBMg3laxQpHKEI-mMcnOWq2h4XrowU",
  authDomain: "assignment-nine-ea37e.firebaseapp.com",
  projectId: "assignment-nine-ea37e",
  storageBucket: "assignment-nine-ea37e.firebasestorage.app",
  messagingSenderId: "178948113334",
  appId: "1:178948113334:web:13f071111b1eb316b5f717"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default getAuth