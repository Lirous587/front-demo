const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const body = document.body;

const _w = parseInt(getComputedStyle(body).width);
const _h = parseInt(getComputedStyle(body).height);

canvas.width = _w - 5;
canvas.height = _h - 5;

let snowflakes = [];
const snowflake_count = 300;

const init_snowflakes = () => {
  for (let index = 0; index < snowflake_count; index++) {
    ctx.fillStyle = "white";
    ctx.shadowBlur = 5;
    ctx.shadowColor = "rbga(255,255,255,0.8)";
    let snowflake = {
      x: Math.random() * _w,
      y: Math.random() * _h,
      r: Math.random() * 5 + 1,
      x_speed: Math.random() * 2 + 1,
      y_speed: Math.random() * 1 + 0.5,
    };
    snowflakes.push(snowflake);
  }
};

const snowflake_move = () => {
  snowflakes.forEach((item) => {
    item.x += item.x_speed;
    item.y += item.y_speed;
    if (item.x > _w) item.x = 0;
    if (item.y > _h) item.y = 0;
  });
};

const draw_snowflakes = () => {
  ctx.clearRect(0, 0, _w, _h);
  snowflakes.forEach((item) => {
    ctx.beginPath();
    ctx.moveTo(item.x, item.y);
    ctx.arc(item.x, item.y, item.r, 0, Math.PI * 2);
    ctx.fill();
  });
  snowflake_move();
};

const animate = () => {
  snowflake_move();
  draw_snowflakes();
  requestAnimationFrame(animate);
};
init_snowflakes();
animate();