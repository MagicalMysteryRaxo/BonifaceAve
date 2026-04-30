const screens = document.querySelectorAll(".comic-screen");
let currentScreen = 0;

function showScreen(index) {
  window.scrollTo(0, 0);
  screens.forEach((screen) => screen.classList.remove("active"));
  screens[index].classList.add("active");
}

document.querySelectorAll(".nextBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentScreen < screens.length - 1) {
      currentScreen++;
      showScreen(currentScreen);
    }
  });
});

document.querySelectorAll(".prevBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentScreen > 0) {
      currentScreen--;
      showScreen(currentScreen);
    }
  });
});
