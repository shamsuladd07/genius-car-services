// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJz9so3BPtiuBUQNBiJoQtl2V0FtY-zQo",
    authDomain: "genius-car-services-7ecaf.firebaseapp.com",
    projectId: "genius-car-services-7ecaf",
    storageBucket: "genius-car-services-7ecaf.appspot.com",
    messagingSenderId: "895633085655",
    appId: "1:895633085655:web:1fb9be7bc560bb96d48c92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;