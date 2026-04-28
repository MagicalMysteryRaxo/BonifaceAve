const screens = document.querySelectorAll(".comic-screen");
let currentScreen = 0;

function showScreen(index) {
  screens.forEach((screen) => screen.classList.remove("active"));
  screens[index].classList.add("active");
}

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentScreen < screens.length - 1) {
    currentScreen++;
    showScreen(currentScreen);
  }
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentScreen > 0) {
    currentScreen--;
    showScreen(currentScreen);
  }
});
