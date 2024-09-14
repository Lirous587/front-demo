const switch_input = document.getElementById("swith-input");
switch_input.addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("change");
  } else {
    document.body.classList.remove("change");
  }
});
