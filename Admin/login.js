import { auth } from "../firebase/firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", async () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // TEMP ROLE SYSTEM (you can upgrade later)
      localStorage.setItem("role", "admin");

      alert("Login successful");

      window.location.href = "../Admin/adbord.html";

    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  });
}

