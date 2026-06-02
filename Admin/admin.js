

console.log("AUTH:", auth);
console.log("admin.js loaded");


import { auth } from "../firebase/firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

const loginBtn = document.getElementById("loginBtn");

if (!loginBtn) {
  console.error("Login button not found!");
}


// ---------------- LOGIN----------------
loginBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  console.log("EMAIL:", email);
  console.log("PASSWORD:", password);


    console.log("RAW EMAIL:", JSON.stringify(email));
  console.log("RAW PASSWORD:", JSON.stringify(password));


  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    console.log("User:", userCredential.user);

    alert("Login successful!");

    // redirect
    window.location.href = "../Main/dashboard.html";

  } catch (error) {
    console.error("Login error:", error.code, error.message);
    alert("Login failed: " + error.message);
  }
});

