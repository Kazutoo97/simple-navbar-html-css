const menuWrapper = document.querySelector(".menu-wrapper");
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");

menuOpen.addEventListener("click", () => {
  menuWrapper.classList.add("active");
});

menuClose.addEventListener("click", () => {
  menuWrapper.classList.remove("active");
});
