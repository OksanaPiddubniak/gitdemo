const btnOpen = document.querySelector(".nav__open");
const navContent = document.querySelector(".nav__content");
const navOverlay = document.querySelector(".nav__overlay");
const btnClose = document.querySelector(".nav__close");
const body = document.querySelector("body");

btnOpen.addEventListener("click", () => {
  btnOpen.setAttribute("aria-expanded", "true");
  navContent.style.display = "block";
  navOverlay.style.display = "block";
  body.style.overflowY = "hidden";
});

btnClose.addEventListener("click", () => {
  btnOpen.setAttribute("aria-expanded", "false");
  navContent.style.display = "";
  navOverlay.style.display = "";
  body.style.overflowY = "";
});

document.addEventListener("keyup", (e) => {
  if (e.key == "Tab") {
    console.log(document.activeElement);
  }
});
