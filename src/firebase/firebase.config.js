// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjplbigHCVAsDJctJFvZ6k8UgbFALWsxw",
    authDomain: "cars-doctor-fb00a.firebaseapp.com",
    projectId: "cars-doctor-fb00a",
    storageBucket: "cars-doctor-fb00a.firebasestorage.app",
    messagingSenderId: "609905919730",
    appId: "1:609905919730:web:3af17e1ae10bf1927b326b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;