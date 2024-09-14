const $dom = (tag) => {
  return document.querySelector(tag);
};
const body = document.body;

let startWidth = localStorage.getItem("bar_w");
body.style.setProperty("--aside-width", `${startWidth}px`);

const init = async () => {
  await setTimeout(() => {
    $dom(".aside-img").style.opacity = 1;
  }, 500);
};

init();

const startDrag = (event) => {
  // 设置初始width
  const dragOn = (event) => {
    const x = event.clientX;
    console.log(x);
    body.style.setProperty("--aside-width", `${x}px`);
  };

  body.addEventListener("mouseover", dragOn);

  body.addEventListener("mouseup", (event) => {
    localStorage.setItem("bar_w", event.clientX);
    body.removeEventListener("mouseover", dragOn);
  });
};

$dom(".bar").addEventListener("mousedown", startDrag);
