const $dom = (tag) => document.querySelector(tag);
const body = document.body;
const oSearch_container = $dom(".search-container");
const oIcon = $dom(".icon");
const oSearch = $dom(".search");
const oInput = $dom(".search input[type=text]");
const oDelete = $dom(".delete");

let flag = false;
const oSearch_container_width = getComputedStyle(body).getPropertyValue(
  "--search-container-width"
);
const oSearch_container_oWidth =
  getComputedStyle(body).getPropertyValue("--search-oWidth");

oSearch_container.addEventListener("click", (event) => {
  flag = true;

  oSearch_container.style.width = oSearch_container_width;
  oInput.focus();
  event.stopImmediatePropagation();
});

oSearch_container.addEventListener("mouseover", () => {
  oSearch_container.style.width = oSearch_container_width;
});
oSearch_container.addEventListener("mouseleave", () => {
  if (!flag) {
    oSearch_container.style.width = oSearch_container_oWidth;
  }
});
body.addEventListener("click", () => {
  if (flag) {
    oSearch_container.style.width = oSearch_container_oWidth;
    flag = false;
  }
});

oDelete.addEventListener("click", () => {
  oInput.value = "";
});
