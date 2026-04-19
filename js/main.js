const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".main-menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  // fade
  let opacity = 1 - scrollY / 300;
  if (opacity < 0.5) opacity = 0.5;

  navbar.style.background = `rgba(17, 17, 32, ${opacity})`;

  //Vertical shrink
  if (scrollY > 50) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});
