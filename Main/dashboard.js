

document.addEventListener("DOMContentLoaded", () => {

 console.log("USER JS LOADED");

  const role = localStorage.getItem("role");

  if (role === "admin") {
    window.location.href = "../Admin/adbord.html";
    return;
  }

  const btn = document.getElementById("switchToAdmin");

  if (btn) {
    btn.addEventListener("click", () => {
      localStorage.setItem("role", "admin");
      window.location.href = "../Admin/adbord.html";
    });
  }

});