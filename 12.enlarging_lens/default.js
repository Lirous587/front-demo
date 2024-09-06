const $dom = (c) => document.querySelector(c);
const enlargeContainerDom = $dom(".enlarge-lens-container");
const mirrorDom = $dom(".mirror");

const sImgDom = $dom(".sImg");
const bImgDom = $dom(".bImg");

enlargeContainerDom.addEventListener("mousemove", (event) => {
  // mirro在小图片上的左顶点位置
  const mirror_relative_sImg_x =
    event.clientX - enlargeContainerDom.getBoundingClientRect().left;
  const mirror_relative_sImg_y =
    event.clientY - enlargeContainerDom.getBoundingClientRect().top;

  // mirror宽高
  const mirror_w = mirrorDom.getBoundingClientRect().width;
  const mirror_h = mirrorDom.getBoundingClientRect().height;

  // mirror的中心位置
  const mirror_x = mirror_relative_sImg_x - mirror_w / 2;
  const mirror_y = mirror_relative_sImg_y - mirror_h / 2;

  // 大小图宽高比例
  const ratioH =
    bImgDom.getBoundingClientRect().height /
    sImgDom.getBoundingClientRect().height;
  const ratioW =
    bImgDom.getBoundingClientRect().width /
    sImgDom.getBoundingClientRect().width;

  // 逻辑解释
  // 我们先使 mirror 相对大图静止,然后移动 mirror 需要按照一定比例进行移动
  // 我们先假设 mirror_relative_bImg_x 和 mirror_relative_bImg_y 为 mirror 移动的距离
  // 然后很明显 现在的 mirror_relative_bImg_x 和 mirror_relative_bImg_y 为 放大镜左上角的值, 所以我们减去 mirro_h / 2 和 mirror_w /2 即可
  // 最后我们切换相对坐标系 即 mirror 相对于大图静止 即最后加上负值即可实现

  const mirror_relative_bImg_x = mirror_relative_sImg_x * ratioW;
  const mirror_relative_bImg_y = mirror_relative_sImg_y * ratioH;

  const big_x = mirror_relative_bImg_x - mirror_w / 2;
  const big_y = mirror_relative_bImg_y - mirror_h / 2;

  mirrorDom.style.left = mirror_x + "px";
  mirrorDom.style.top = mirror_y + "px";

  // 切换相对坐标系
  bImgDom.style.left = -big_x + "px";
  bImgDom.style.top = -big_y + "px";
});
