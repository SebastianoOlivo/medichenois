const navigationButton = document.querySelector(".mobile-navigation-button");
const mobileNavigation = document.querySelector(".mobile-navigation");
  
const init = () => {
  navigationButton?.addEventListener("click", (event) => {
    event.preventDefault();
    mobileNavigation?.classList.toggle("mobile-navigation--active");
  }, false);
}

export { init };