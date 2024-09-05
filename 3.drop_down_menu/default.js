const h3List = document.querySelectorAll("h3");
const ulSonList = document.querySelectorAll(".ulson");
let liSonList = [];
const slidingNode = document.querySelector(".sliding");

ulSonList.forEach((parent) => {
  let nodes = Array.from(parent.childNodes).filter(
    (node) => node.tagName === "LI"
  );
  liSonList.push(...nodes);
});

const changeColor = (opt = {}) => {
  opt.list.forEach((item, index) => {
    item.addEventListener("mouseover", function () {
      if (opt.sliding) {
        let leftPX = index * 150;
        slidingNode.style.left = `${leftPX}px`;
      } else {
        this.style.backgroundColor = opt.targetColor || "rgb(48, 155, 48)";
      }
    });
    item.addEventListener("mouseleave", function () {
      this.style.backgroundColor = opt.defaultColor;
    });
  });
};

const changeDispaly = (arr) => {
  arr.forEach((item, index) => {
    item.addEventListener("mouseover", function () {
      ulSonList[index].style.display = "block";
    });
    item.addEventListener("mouseleave", function () {
      ulSonList[index].style.display = "none";
    });
  });
};

changeColor({
  list: h3List,
  defaultColor: "rgb(55, 83, 176)",
  sliding: true,
});
changeColor({
  list: liSonList,
  defaultColor: "rgb(17, 39, 113)",
  targetColor: "rgb(125, 144, 205)",
});
changeDispaly(h3List);
changeDispaly(ulSonList);
