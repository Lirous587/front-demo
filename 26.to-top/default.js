const top_btn = document.getElementById("top");
top.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
