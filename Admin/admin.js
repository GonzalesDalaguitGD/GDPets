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
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
      console.error(error);
    });
});

function login(){
  const username =
  document.getElementById("username").value;

  const password =
  document.getElementById("password").value;

  if (username ==="GDsakalam " && password ==="123456"){
    localStorage.setItem("loogedIn",
    "true");
    window.location.href="dashboard.html"

    }else{
      alert("Invalid credentials");
  }
}