const mainNavToggle = document.querySelector(".main-nav__toggle");
const mainNav = document.querySelector(".main-nav");

mainNavToggle.classList.add("main-nav__toggle--v");
mainNav.classList.add("main-nav--closed");

mainNavToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainNav.classList.toggle("main-nav--closed");
});
