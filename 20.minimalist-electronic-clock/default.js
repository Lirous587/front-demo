const clockDom = document.getElementById("clock");

const addZero = (num) => {
  if (num >= 10) {
    return num;
  } else {
    return `0${num}`;
  }
};

const get_now_time = () => {
  const _data = new Date();
  const hour = _data.getHours();
  const minite = _data.getMinutes();
  const second = _data.getSeconds();
  const time = `${addZero(hour)}:${addZero(minite)}:${addZero(second)}`;
  clockDom.innerText = time;
};

get_now_time();

setInterval(() => {
  get_now_time();
}, 1000);
