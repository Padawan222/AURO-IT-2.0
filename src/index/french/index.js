import "C:/Users/Azstras/OneDrive/Bureau/AURO-IT-2.0/src/assets/styles/style.scss";
import "./index.scss";
// header

const backgroundHeader = document.querySelector(".background-header");
const headerContainer = document.querySelector(".header-container");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;
  const topElementToTopViewport = backgroundHeader.getBoundingClientRect().top;

  if (scrollTop > scrollTop + topElementToTopViewport - clientHeight * -0.6) {
    headerContainer.classList.add("show");
  } else {
    headerContainer.classList.remove("show");
  }
});
