function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const icon = document.querySelector("#menuToggle i");

  nav.classList.toggle("active");

  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
}

function addToggleButton() {
  if (!document.getElementById("menuToggle")) {
    const toggleBtn = document.createElement("button");
    toggleBtn.className = "toggle";
    toggleBtn.id = "menuToggle";
    toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
    toggleBtn.onclick = toggleMenu;

    const navbar = document.getElementById("navbar");
    navbar.insertBefore(toggleBtn, navbar.children[1]);
  }
}

window.addEventListener("DOMContentLoaded", addToggleButton);
window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) addToggleButton();
});
