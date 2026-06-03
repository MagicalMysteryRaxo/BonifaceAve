const screens = document.querySelectorAll(".comic-screen");
const indexBtn = document.getElementById("mmbtn");
const clearBtn = document.getElementById("clearProgress");

let currentScreen = 1; // screen 0 is the index page, so start at 1 for the first comic page

const savedPage = localStorage.getItem("lastComicPage");

if (savedPage !== null) {
  currentScreen = Number(savedPage);
}

const visited = JSON.parse(localStorage.getItem("visitedPages")) || [];

document.querySelectorAll(".index-link").forEach((link) => {
  const index = Number(link.dataset.screen);

  if (visited.includes(index)) {
    link.classList.add("visited-page");
  }
});

const lastPage = Number(localStorage.getItem("lastComicPage"));

document.querySelectorAll(".index-link").forEach((link) => {
  const index = Number(link.dataset.screen);

  if (index === lastPage) {
    link.classList.add("current-page");
  }
});

function showScreen(index) {
  window.scrollTo(0, 0);

  screens.forEach((screen) => {
    screen.classList.remove("active");
  });
  let visited = JSON.parse(localStorage.getItem("visitedPages")) || [];

  if (!visited.includes(index)) {
    visited.push(index);
    localStorage.setItem("visitedPages", JSON.stringify(visited));
  }
  screens[index].classList.add("active");

  localStorage.setItem("lastComicPage", index);

  console.log("Saved screen:", index);
}

document.querySelectorAll(".nextBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentScreen < screens.length - 1) {
      currentScreen++;
      showScreen(currentScreen);
    }
    console.log("Current screen:", currentScreen);
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

indexBtn.addEventListener("click", () => {
  currentScreen = 0;
  showScreen(currentScreen);
});

document.querySelectorAll(".index-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // stop anchor jump

    const screenIndex = Number(link.dataset.screen);

    currentScreen = screenIndex;
    showScreen(currentScreen);
  });
});

/*clearBtn.addEventListener("click", () => {
  localStorage.removeItem("visitedPages");
  localStorage.removeItem("lastComicPage");

  document.querySelectorAll(".index-link").forEach((link) => {
    link.classList.remove("visited-page", "current-page");
  });

  currentScreen = 0;
  showScreen(currentScreen);

  
});*/

clearBtn.addEventListener("click", () => {
  const confirmReset = confirm("Reset your reading progress?");

  if (!confirmReset) return;

  localStorage.removeItem("visitedPages");
  localStorage.removeItem("lastComicPage");

  currentScreen = 0;
  location.reload();
});

// Show saved page when user returns
showScreen(currentScreen);
