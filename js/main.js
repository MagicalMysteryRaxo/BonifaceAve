fetch("navbar.html")
  .then((response) => response.text())
  .then((html) => {
    document.querySelector("#navbar-placeholder").innerHTML = html;

    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".main-menu");
    const navbar = document.querySelector(".navbar");

    hamburger.addEventListener("click", () => {
      menu.classList.toggle("active");
    });

    window.addEventListener("scroll", () => {
      let scrollY = window.scrollY;

      let opacity = 1 - scrollY / 300;
      if (opacity < 0.5) opacity = 0.5;

      navbar.style.background = `rgba(29, 19, 16, ${opacity})`;

      if (scrollY > 50) {
        navbar.classList.add("shrink");
      } else {
        navbar.classList.remove("shrink");
      }
    });
  });
