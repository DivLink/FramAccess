function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
  } else {
    navLinks.classList.add("active");
  }
}
