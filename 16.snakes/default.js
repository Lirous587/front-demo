const canvas = document.querySelector("canvas");
canvas.height = 800;
canvas.width = 800;
const ctx = canvas.getContext("2d");
const grid_sum = 20;
const grid_single_area = 40;
const grid_single_content = grid_single_area - 4;

const direction = {
  x: 1,
  y: 0,
};

let snake = [];
const init_snake_length = 5;
let food = {
  x: parseInt(Math.random() * 20),
  y: parseInt(Math.random() * 20),
  color: get_random_color(),
};

function get_random_color() {
  const random_r = parseInt(Math.random() * 255);
  const random_g = parseInt(Math.random() * 255);
  const random_b = parseInt(Math.random() * 255);
  return `rgb(${random_r},${random_g},${random_b})`;
}

const new_game = () => {
  snake = [];
  direction.x = 1;
  direction.y = 0;
  for (let index = 0; index < init_snake_length; index++) {
    snake.push({
      x: grid_sum / 2 - index,
      y: grid_sum / 2 - 1,
      color: get_random_color(),
    });
  }
  draw();
};

const judge_game = () => {
  const header = snake[0];
  for (let index = 1; index < snake.length; index++) {
    let item = snake[index];
    if (header.x === item.x && header.y === item.y) {
      alert("game over");
      new_game();
      return;
    }
  }
};

const move = () => {
  let new_section = {
    x: 0,
    y: 0,
    color: snake[0].color,
  };
  // 先拿到第一个节点的坐标 将其加上direction
  // 再在头部加上这个新节点 将最后一个节点移除
  switch (snake[0].x + direction.x) {
    case -1:
      new_section.x = grid_sum;
      break;
    case grid_sum:
      new_section.x = 0;
      break;
    default:
      new_section.x = snake[0].x + direction.x;
      break;
  }
  switch (snake[0].y + direction.y) {
    case -1:
      new_section.y = grid_sum;
      break;
    case grid_sum:
      new_section.y = 0;
      break;
    default:
      new_section.y = snake[0].y + direction.y;
      break;
  }
  // 判断new_section是否会吃到蛇身

  // 移动color
  for (let index = 0; index < snake.length - 1; index++) {
    snake[index].color = snake[index + 1].color;
  }

  snake.pop();
  snake.splice(0, 0, new_section);
};

const eat_food = () => {
  snake.push({
    x: snake[snake.length - 1].x - direction.x,
    y: snake[snake.length - 1].y - direction.y,
    color: food.color,
  });
  food = {
    x: parseInt(Math.random() * 20),
    y: parseInt(Math.random() * 20),
    color: get_random_color(),
  };
  ctx.fillStyle = food.color;
};

const draw_map = () => {
  ctx.fillStyle = "#74b9ff";
  for (let x = 0; x < grid_sum; x++) {
    for (let y = 0; y < grid_sum; y++) {
      ctx.beginPath(); // 每次绘制蛇的方块时开始新路径
      ctx.rect(
        x * grid_single_area,
        y * grid_single_area,
        grid_single_content,
        grid_single_content
      );
      ctx.fill();
    }
  }
};

const draw_snake = () => {
  snake.forEach((item) => {
    ctx.fillStyle = item.color;
    if (item.x === food.x && item.y === food.y) {
      eat_food();
    }
    ctx.beginPath(); // 每次绘制蛇的方块时开始新路径
    ctx.rect(
      item.x * grid_single_area,
      item.y * grid_single_area,
      grid_single_content,
      grid_single_content
    );
    ctx.fill();
  });
  judge_game();
};

const draw_food = () => {
  ctx.fillStyle = food.color;
  ctx.shadowColor = food.color;
  ctx.shadowBlur = 40;
  ctx.beginPath();
  ctx.rect(
    food.x * grid_single_area,
    food.y * grid_single_area,
    grid_single_content,
    grid_single_content
  );
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.shadowColor = "none";
};

const draw = () => {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  draw_map();
  draw_snake();
  draw_food();
};

new_game();

setInterval(() => {
  draw();
  move();
}, 150);

document.addEventListener("keydown", (event) => {
  if (event.key === "w" || event.key === "W" || event.key === "ArrowUp") {
    if (direction.y != 1) {
      direction.x = 0;
      direction.y = -1;
    }
  } else if (
    event.key === "a" ||
    event.key === "A" ||
    event.key === "ArrowLeft"
  ) {
    if (direction.x != 1) {
      direction.x = -1;
      direction.y = 0;
    }
  } else if (
    event.key === "s" ||
    event.key === "S" ||
    event.key === "ArrowDown"
  ) {
    if (direction.y != -1) {
      direction.x = 0;
      direction.y = 1;
    }
  } else if (
    event.key === "d" ||
    event.key === "D" ||
    event.key === "ArrowRight"
  ) {
    if (direction.x != -1) {
      direction.x = 1;
      direction.y = 0;
    }
  }
});
