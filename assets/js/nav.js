const toggle = document.querySelector("#toggle");
const menu = document.querySelector("#menu");
const icon = document.querySelector("#icon");
 
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  } else {
      menu.classList.add("active");
      icon.classList.add("fa-times");
      icon.classList.remove("fa-bars");
  }
}
 
toggle.addEventListener("click", toggleMenu);
