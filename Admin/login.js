import { auth, db } from "../firebase/firebase.js";

import { signInWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

import { doc, getDoc }
from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";


const loginBtn = document.getElementById("loginBtn");


if (loginBtn) {

  loginBtn.addEventListener("click", async () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    try {

      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );


      const user = userCredential.user;


      console.log("UID:", user.uid);
      console.log("EMAIL:", user.email);


      const adminRef =
        doc(db, "admins", user.uid);


      const adminSnap =
        await getDoc(adminRef);



      if (adminSnap.exists()) {

    localStorage.setItem("role", "admin");
    window.location.href =
      "../Admin/adbord.html";

} else {

    localStorage.setItem("role", "user");
    window.location.href =
      "../Main/dashboard.html";

}



    } catch(error) {

      console.error(error);
      alert(error.message);

    }

  });

}