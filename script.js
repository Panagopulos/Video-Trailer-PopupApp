const btnEl = document.querySelector('.btn');
const closeIconEl = document.querySelector('.close-icon');
const trailerContainerEl = document.querySelector('.trailer-container');
const videoEl = document.querySelector("iframe");

btnEl.addEventListener("click", () => {
  trailerContainerEl.classList.add('active');
});

closeIconEl.addEventListener("click", () => {
  trailerContainerEl.classList.remove('active');
});