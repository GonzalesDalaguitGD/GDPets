// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth } from
"https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUEE6oQMxEPWN_jI8Gz_rPBQcQrQrU_y4",
  authDomain: "gdpets-ce764.firebaseapp.com",
  projectId: "gdpets-ce764",
  storageBucket: "gdpets-ce764.firebasestorage.app",
  messagingSenderId: "327638683123",
  appId: "1:327638683123:web:b8ec3191a41a5db952d686",
  measurementId: "G-P0EC4K1NTT"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


