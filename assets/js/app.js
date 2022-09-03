window.onload = (event) => {

  const toggle = document.querySelector("header #toggle");
  const menu = document.querySelector("header #menu");
  const icon = document.querySelector("header #icon");
  
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

  let year = document.querySelector("#year");
  year.textContent = (new Date()).getFullYear();

};
