function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const toggleBtn = document.getElementById("menuToggle");

  nav.classList.toggle("active");

  toggleBtn.textContent = nav.classList.contains("active") ? "✕" : "☰";
}