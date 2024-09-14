const round = document.querySelector("circle");
const text = document.querySelector(".osvg-text");
let percent_arr = [];
for (let index = 0; index <= 100; index++) {
  percent_arr.push(index);
}

let length = round.getTotalLength();

let percent = 0;

// const timer = setInterval(() => {
//   percent++;
//   let off = ((100 - percent) * length) / 100;
//   text.textContent = `${percent}%`;
//   round.style.strokeDashoffset = off;
//   if (percent === 100) {
//     clearInterval(timer);
//     text.textContent = "加载完成";
//     return;
//   }
// }, 20);

const annimation = () => {
  percent++;
  let off = ((100 - percent) * length) / 100;
  text.textContent = `${percent}%`;
  round.style.strokeDashoffset = off;
  if (percent === 100) {
    text.textContent = "加载完成";
    return;
  }
  requestAnimationFrame(annimation);
};
annimation();
