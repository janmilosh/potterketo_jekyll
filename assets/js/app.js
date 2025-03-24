window.onload = (event) => {

  // Menu toggle
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

  // Testimonials slider
  var slideIndex = 0;
  carousel();

  function carousel() {
    var i;
    var x = document.getElementsByClassName("testimonial");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 18000);
  }

  // Year for footer
  let year = document.querySelector("#year");
  year.textContent = (new Date()).getFullYear();
};
