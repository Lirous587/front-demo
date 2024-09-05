let item = document.getElementById("item");
let storage = document.getElementById("storage");
let oldBox = document.getElementById("oldBox");

//托进
item.addEventListener("dragstart", (ev) => {
  ev.dataTransfer.setData("text", ev.target.id);
});

storage.addEventListener("dragover", (ev) => {
  ev.preventDefault();
});

storage.addEventListener("drop", (ev) => {
  const imgId = ev.dataTransfer.getData("text");
  const img = document.getElementById(imgId);
  ev.currentTarget.appendChild(img);
});

//拖回
storage.addEventListener("dragstart", (ev) => {
  ev.dataTransfer.clearData();
  ev.dataTransfer.setData("text", ev.target.id);
});

oldBox.addEventListener("drop", (ev) => {
  const imgId = ev.dataTransfer.getData("text");
  const img = document.getElementById(imgId);
  oldBox.appendChild(img);
  ev.dataTransfer.clearData();
});
oldBox.addEventListener("dragover", (ev) => {
  ev.preventDefault();
});
