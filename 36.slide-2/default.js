const btns = document.querySelectorAll(".s-btn");

// 用于清除计时
let interval = setInterval(() => {
  nextPic();
}, 5000);

// 用于锁定按钮点击
let isLocked = false;

const clearMyInterval = () => {
  if (interval) {
    clearInterval(interval);
  }
};

const setNewInterval = () => {
  return setInterval(() => {
    nextPic();
  }, 5000);
};

const unlock = () => {
  return new Promise((resolve) => setTimeout(resolve, 800)).finally(() => {
    isLocked = false;
  });
};

const lastPic = async () => {
  if (isLocked) return;
  isLocked = true;

  clearMyInterval();
  let nowImgList = document.querySelectorAll(".item");
  document
    .querySelector(".imgs-box")
    .prepend(nowImgList[nowImgList.length - 1]);
  interval = setNewInterval();

  await unlock();
};
const nextPic = async () => {
  if (isLocked) return;
  isLocked = true;

  clearMyInterval();
  let nowImgList = document.querySelectorAll(".item");
  document.querySelector(".imgs-box").appendChild(nowImgList[0]);
  interval = setNewInterval();
  await unlock();
};

btns[0].addEventListener("click", lastPic);
btns[1].addEventListener("click", nextPic);
