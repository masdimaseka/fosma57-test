const logo = document.querySelector(".logo-nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    logo.innerHTML = `<img src="./img/logo-2.png" alt="logo" class="logo"/>`;
  } else {
    logo.innerHTML = `<img src="./img/logo-1.png" alt="logo" class="logo"/>`;
  }
});
