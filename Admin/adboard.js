
localStorage.setItem("role", "admin");
const role = localStorage.getItem("role");

document.getElementById("roleDebug").textContent = role;

document.addEventListener("DOMContentLoaded", () => {

  console.log("DOM READY");

  const role = localStorage.getItem("role");
  console.log("ROLE:", role);

  if (role !== "admin") {
    console.log("NOT ADMIN → redirecting");
    window.location.href = "../Main/dashboard.html";
    return;
  }

  console.log("ADMIN ACCESS GRANTED");

  const btn = document.getElementById("switchToUser");
  console.log("SWITCH BUTTON:", btn);

  if (btn) {
    btn.addEventListener("click", () => {
      console.log("SWITCH CLICKED");

      localStorage.setItem("role", "user");
      window.location.href = "../Main/dashboard.html";
    });
  } else {
    console.log("BUTTON NOT FOUND");
  }

});

