const body = document.body;
const imgBox = document.querySelector(".img-box");
const scrollDom = document.querySelector(".scroll-box");
const scrollBar = document.querySelector(".scroll-box span");

// const scrollWidth = scrollDom.getBoundingClientRect().width;
const scrollBarWidth = scrollBar.getBoundingClientRect().width;
let scrollLeftOfWindow;

let flag = false;
scrollDom.addEventListener("mousedown", (ev) => {
  flag = true;
  scrollLeftOfWindow = scrollDom.getBoundingClientRect().left;
});

window.addEventListener("mousemove", (ev) => {
  if (flag) {
    // 移动量为鼠标所处的窗口位置减除scroll-box的left再减去scroll-bar
    const move = `${ev.clientX - scrollLeftOfWindow - scrollBarWidth / 2}px`;
    body.style.setProperty("--dynamic-move", move);
  }
});

window.addEventListener("mouseup", async (ev) => {
  flag = false;
  const dis = ev.clientX - scrollLeftOfWindow - 50 * 3 - 200;
  if (0 < dis && dis < 20) {
    imgBox.classList.add("passed");
    scrollDom.style.opacity = 0;
    await setTimeout(() => {
      alert("验证通过");
    }, 600);
  } else {
    body.style.setProperty("--dynamic-move", "0px");
  }
  flag = false;
});
