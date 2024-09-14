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

const startDrag = () => {
  // 设置初始width
  const dragOn = (e) => {
    const x = e.clientX;
    body.style.setProperty("--aside-width", `${x}px`);
  };

  document.documentElement.addEventListener("mousemove", dragOn);

  document.documentElement.addEventListener("mouseup", (event) => {
    localStorage.setItem("bar_w", event.clientX);
    document.documentElement.removeEventListener("mousemove", dragOn);
  });
};

$dom(".bar").addEventListener("mousedown", startDrag);
