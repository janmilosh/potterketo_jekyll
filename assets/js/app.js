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
  const leftArrow = document.querySelector("#left-arrow");
  const rightArrow = document.querySelector("#right-arrow");

  if (leftArrow && rightArrow) {
    leftArrow.addEventListener("click", function() { plusDivs(-1) }, false);
    rightArrow.addEventListener("click", function() { plusDivs(1) }, false);

    var slideIndex = 1;
    showDivs(slideIndex);
  }

  function plusDivs(n) {
    showDivs(slideIndex += n);
  }

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("testimonial");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
  }

  // Year for footer
  let year = document.querySelector("#year");
  year.textContent = (new Date()).getFullYear();
};
