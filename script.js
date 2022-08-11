// change navbar when scrolling

const navMenu = document.querySelector(".nav__menu");
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);

  navMenu.classList.toggle("window-scroll-2", window.scrollY > 0);
  menuBtn.classList.toggle("window-scroll-2", window.scrollY > 0);
  closeBtn.classList.toggle("window-scroll-2", window.scrollY > 0);
});

// show/hide nav menu

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

const closingNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closingNav);
