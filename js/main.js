fetch("navbar.html")
  .then((response) => response.text())
  .then((html) => {
    document.querySelector("#navbar-holder").innerHTML = html;

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

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function changeSlide() {
  if (slides.length === 0) {
    return;
  }

  slides[currentSlide].classList.remove("active");

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add("active");
}

if (slides.length > 0) {
  setInterval(changeSlide, 4000);
}

function getVisitorId() {
  let visitorId = localStorage.getItem("visitorId");

  if (!visitorId) {
    visitorId = crypto.randomUUID();
    localStorage.setItem("visitorId", visitorId);
  }

  return visitorId;
}

function trackEvent(
  eventType,
  comicName = "",
  durationSeconds = 0,
  extraData = {},
) {
  fetch("api/track-event.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      visitorId: getVisitorId(),
      eventType: eventType,
      comicName: comicName,
      pageName: window.location.pathname,
      durationSeconds: durationSeconds,
      extraData: extraData,
    }),
  });
}

document.addEventListener("DOMContentLoaded", () => {
  trackEvent("page_view");

  document.querySelectorAll('a[href="the-rot.html"]').forEach((link) => {
    link.addEventListener("click", () => {
      trackEvent("comic_click", "Rot Diary");
    });
  });

  document.querySelectorAll('a[href="hate-me.html"]').forEach((link) => {
    link.addEventListener("click", () => {
      trackEvent("comic_click", "Hate Me! Skate Me!");
    });
  });
});
