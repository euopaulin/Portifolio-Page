function toggleMenu() {
  const menu = document.getElementById("menu-contato");
  menu.classList.toggle("show");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
