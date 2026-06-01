import { auth } from "../firebase/firebase.js";
import {
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

console.log("admin.js loaded");
console.log("AUTH:", auth);

// ---------------- LOGIN ----------------
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    console.log("EMAIL:", email);
    console.log("PASSWORD:", password);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      alert("Login successful!");
      window.location.href = "../Main/dashboard.html";

    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed: " + error.message);
    }
  });
}

// ---------------- LOGOUT ----------------
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    try {
      await signOut(auth);
      alert("Logged out!");
      window.location.href = "../login.html";
    } catch (error) {
      console.error("Logout error:", error);
    }
  });
}