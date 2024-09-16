const mainDom = document.querySelector(".main");
const containerDom = document.querySelector(".container");
const btns = document.querySelectorAll(".btn div");

const img_width = parseInt(
  getComputedStyle(document.documentElement).getPropertyValue("--img-width")
);
const img_sum = getComputedStyle(document.documentElement).getPropertyValue(
  "--img-sum"
);
const img_gap = parseInt(
  getComputedStyle(document.documentElement).getPropertyValue("--img-gap")
);
const slide_width = (img_width + img_gap) * img_sum;

const slide_spedd = 5;

let speed = -slide_spedd;
let animation_id;
containerDom.addEventListener("mouseover", () => {
  cancelAnimationFrame(animation_id);
});
containerDom.addEventListener("mouseleave", () => {
  animation_id = aninate();
});

btns[0].addEventListener("click", () => {
  speed = slide_spedd;
});
btns[1].addEventListener("click", () => {
  speed = -slide_spedd;
});

const aninate = () => {
  mainDom.style.left = mainDom.offsetLeft + speed + "px";
  if (mainDom.offsetLeft <= -slide_width) {
    mainDom.style.left = 0;
  }
  if (mainDom.offsetLeft > 0) {
    mainDom.style.left = -slide_width + "px";
  }
  animation_id = requestAnimationFrame(aninate);
};
aninate();
