console.log("admin.js loaded");

import { auth } from "../firebase/firebase.js";

import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Login successful!");
      console.log("User:", user);

      // Example redirect after login
      window.location.href = "../Main/dashboard.html";
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
      console.error(error);
    });
});



