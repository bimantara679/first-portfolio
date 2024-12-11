function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".toggle-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
  const contactPanel = document.getElementById("contactHide");
  const toggleContact = document.getElementById("toggleContact");

  toggleContact.addEventListener("click", () => {
    contactPanel.classList.toggle("active");
  });
});
