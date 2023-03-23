const nav = document.querySelector("#nav");
const buttonHam = document.querySelector("#hamburger");
const shadowGrad = document.querySelector(".shadow-gradient");
buttonHam.addEventListener("click", () => {
  nav.classList.toggle("hidden");
  nav.classList.toggle("flex");
  shadowGrad.dataset.shadow =
    shadowGrad.dataset.shadow === "true" ? false : true;
  buttonHam.src =
    buttonHam.id === "hamburger"
      ? "/src/images/icon-close.svg"
      : "/src/images/icon-hamburger.svg";
  buttonHam.id = buttonHam.id === "hamburger" ? "close" : "hamburger";
});
