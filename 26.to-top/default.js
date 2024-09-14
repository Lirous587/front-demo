const top_btn = document.getElementById("top");
top_btn.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
