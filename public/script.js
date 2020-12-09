const navHam = document.querySelector(".mobile-nav");
const navHamBtn = document.querySelector("#main-menu");
const closeHam = document.querySelector(".close");
navHamBtn.addEventListener("click", () => {
  navHam.classList.toggle("opacity-0");
  navHam.classList.toggle("scale-95");
  navHam.classList.toggle("invisible");
  navHam.classList.toggle("visible");
  navHam.classList.toggle("opacity-100");
  navHam.classList.toggle("scale-100");
  navHam.classList.toggle("duration-150");
  navHam.classList.toggle("ease-out");
  navHam.classList.toggle("duration-100");
  navHam.classList.toggle("ease-in");
});

closeHam.addEventListener("click", () => {
  navHam.classList.toggle("invisible");
  navHam.classList.toggle("visible");
  navHam.classList.toggle("opacity-0");
  navHam.classList.toggle("scale-95");
  navHam.classList.toggle("opacity-100");
  navHam.classList.toggle("scale-100");
  navHam.classList.toggle("invisible");
  navHam.classList.toggle("duration-150");
  navHam.classList.toggle("ease-out");
  navHam.classList.toggle("duration-100");
  navHam.classList.toggle("ease-in");
});
