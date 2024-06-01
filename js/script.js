// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJuvkef1vByxo1FrayO6PKPaPvSCL5U9I",
  authDomain: "lockkey-1ff4f.firebaseapp.com",
  projectId: "lockkey-1ff4f",
  storageBucket: "lockkey-1ff4f.appspot.com",
  messagingSenderId: "832682180170",
  appId: "1:832682180170:web:6c177bf87213f1ec74b0b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);

function register() {

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            window.alert(user);
        })
}
